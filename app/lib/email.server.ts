import { supabase } from './supabase.server'
import nodemailer from 'nodemailer'

export interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
}

export interface Campaign {
  id: string
  user_id: string
  name: string
  subject: string
  html_content: string
  target_all_subscribers: boolean
  include_lists: string[] | null
  exclude_lists: string[] | null
  status: string
  total_recipients: number
  sent_count: number
}

export interface SMTPConfig {
  id: string
  user_id: string
  name: string
  host: string
  port: number
  username: string
  password: string
  from_email: string
  from_name: string
  use_tls: boolean
  use_ssl: boolean
  is_default: boolean
  is_active: boolean
}

export async function getUserSMTPConfig(userId: string): Promise<SMTPConfig | null> {
  const { data: config, error } = await supabase
    .from('smtp_configs')
    .select('*')
    .eq('user_id', userId)
    .eq('is_active', true)
    .eq('is_default', true)
    .single()

  if (error || !config) {
    // Fallback to any active config if no default is set
    const { data: fallbackConfig } = await supabase
      .from('smtp_configs')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .limit(1)
      .single()

    return fallbackConfig || null
  }

  return config
}

export async function createTransporter(smtpConfig: SMTPConfig) {
  const transportConfig: any = {
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.use_ssl, // true for 465, false for other ports
    auth: {
      user: smtpConfig.username,
      pass: smtpConfig.password, // In production, decrypt this
    },
  }

  if (smtpConfig.use_tls) {
    transportConfig.tls = {
      ciphers: 'SSLv3'
    }
  }

  return nodemailer.createTransporter(transportConfig)
}

export async function sendEmail(emailData: EmailData, userId: string): Promise<boolean> {
  try {
    // Get user's SMTP configuration
    const smtpConfig = await getUserSMTPConfig(userId)
    
    if (!smtpConfig) {
      console.error('No SMTP configuration found for user:', userId)
      return false
    }

    // Create transporter with user's SMTP config
    const transporter = await createTransporter(smtpConfig)

    // Prepare email options
    const mailOptions = {
      from: `${smtpConfig.from_name} <${smtpConfig.from_email}>`,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    
    return true
  } catch (error) {
    console.error('Email sending error:', error)
    return false
  }
}

export async function testSMTPConnection(smtpConfig: SMTPConfig): Promise<boolean> {
  try {
    const transporter = await createTransporter(smtpConfig)
    await transporter.verify()
    return true
  } catch (error) {
    console.error('SMTP connection test failed:', error)
    return false
  }
}

export async function getRecipients(campaign: Campaign): Promise<string[]> {
  let query = supabase
    .from('subscribers')
    .select('email')
    .eq('user_id', campaign.user_id)
    .eq('status', 'subscribed')

  if (!campaign.target_all_subscribers && campaign.include_lists) {
    // Get subscribers from specific lists
    const { data: listSubscribers } = await supabase
      .from('list_subscribers')
      .select('subscriber_id')
      .in('list_id', campaign.include_lists)
      .eq('status', 'subscribed')

    if (listSubscribers && listSubscribers.length > 0) {
      const subscriberIds = listSubscribers.map(ls => ls.subscriber_id)
      query = query.in('id', subscriberIds)
    } else {
      return []
    }
  }

  if (campaign.exclude_lists && campaign.exclude_lists.length > 0) {
    // Exclude subscribers from specific lists
    const { data: excludeSubscribers } = await supabase
      .from('list_subscribers')
      .select('subscriber_id')
      .in('list_id', campaign.exclude_lists)
      .eq('status', 'subscribed')

    if (excludeSubscribers && excludeSubscribers.length > 0) {
      const excludeIds = excludeSubscribers.map(ls => ls.subscriber_id)
      query = query.not('id', 'in', `(${excludeIds.join(',')})`)
    }
  }

  const { data: subscribers, error } = await query

  if (error) {
    console.error('Error fetching recipients:', error)
    return []
  }

  return subscribers?.map(s => s.email) || []
}

export async function processCampaign(campaignId: string): Promise<void> {
  try {
    // Get campaign details
    const { data: campaign, error: campaignError } = await supabase
      .from('campaigns')
      .select('*')
      .eq('id', campaignId)
      .single()

    if (campaignError || !campaign) {
      console.error('Campaign not found:', campaignError)
      return
    }

    // Check if user has SMTP configuration
    const smtpConfig = await getUserSMTPConfig(campaign.user_id)
    if (!smtpConfig) {
      await supabase
        .from('campaigns')
        .update({ 
          status: 'failed',
          updated_at: new Date().toISOString()
        })
        .eq('id', campaignId)
      console.error('No SMTP configuration found for user:', campaign.user_id)
      return
    }

    // Update status to sending
    await supabase
      .from('campaigns')
      .update({ 
        status: 'sending',
        updated_at: new Date().toISOString()
      })
      .eq('id', campaignId)

    // Get recipients (now from subscribers table only)
    const recipients = await getRecipients(campaign)
    
    if (recipients.length === 0) {
      await supabase
        .from('campaigns')
        .update({ 
          status: 'failed',
          updated_at: new Date().toISOString()
        })
        .eq('id', campaignId)
      return
    }

    // Update total recipients
    await supabase
      .from('campaigns')
      .update({ 
        total_recipients: recipients.length,
        updated_at: new Date().toISOString()
      })
      .eq('id', campaignId)

    let sentCount = 0
    const batchSize = 10 // Send in batches to avoid overwhelming the email service

    for (let i = 0; i < recipients.length; i += batchSize) {
      const batch = recipients.slice(i, i + batchSize)
      
      // Send emails in parallel for this batch
      const sendPromises = batch.map(async (email) => {
        const success = await sendEmail({
          to: email,
          subject: campaign.subject,
          html: campaign.html_content,
        }, campaign.user_id)
        
        if (success) {
          sentCount++
        }
        
        return success
      })

      await Promise.all(sendPromises)

      // Update progress
      await supabase
        .from('campaigns')
        .update({ 
          sent_count: sentCount,
          updated_at: new Date().toISOString()
        })
        .eq('id', campaignId)

      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    // Mark as completed
    await supabase
      .from('campaigns')
      .update({ 
        status: sentCount === recipients.length ? 'sent' : 'partially_sent',
        sent_count: sentCount,
        updated_at: new Date().toISOString()
      })
      .eq('id', campaignId)

  } catch (error) {
    console.error('Error processing campaign:', error)
    
    // Mark as failed
    await supabase
      .from('campaigns')
      .update({ 
        status: 'failed',
        updated_at: new Date().toISOString()
      })
      .eq('id', campaignId)
  }
}
