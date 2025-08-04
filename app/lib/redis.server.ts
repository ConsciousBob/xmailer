import { Redis } from '@upstash/redis'
import { Queue, Worker, Job } from 'bullmq'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Create email queue
export const emailQueue = new Queue('email-queue', {
  connection: {
    host: process.env.UPSTASH_REDIS_REST_URL!.replace('https://', '').replace('http://', ''),
    port: 6379,
    password: process.env.UPSTASH_REDIS_REST_TOKEN!,
  },
})

export interface EmailJobData {
  campaignId: string
  recipientEmail: string
  recipientName?: string
  subject: string
  content: string
  smtpConfig?: {
    host: string
    port: number
    username: string
    password: string
    secure: boolean
  }
  apiConfig?: {
    provider: string
    apiKey: string
  }
}

// Email worker
export const emailWorker = new Worker(
  'email-queue',
  async (job: Job<EmailJobData>) => {
    const { campaignId, recipientEmail, recipientName, subject, content, smtpConfig, apiConfig } = job.data
    
    try {
      if (smtpConfig) {
        await sendViaSMTP(recipientEmail, subject, content, smtpConfig)
      } else if (apiConfig) {
        await sendViaAPI(recipientEmail, subject, content, apiConfig)
      }
      
      // Update campaign sent count
      await updateCampaignSentCount(campaignId)
      
      return { success: true, email: recipientEmail }
    } catch (error) {
      console.error('Email sending failed:', error)
      throw error
    }
  },
  {
    connection: {
      host: process.env.UPSTASH_REDIS_REST_URL!.replace('https://', '').replace('http://', ''),
      port: 6379,
      password: process.env.UPSTASH_REDIS_REST_TOKEN!,
    },
  }
)

async function sendViaSMTP(email: string, subject: string, content: string, config: any) {
  const nodemailer = await import('nodemailer')
  
  const transporter = nodemailer.createTransporter({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.username,
      pass: config.password,
    },
  })

  await transporter.sendMail({
    from: config.username,
    to: email,
    subject,
    html: content,
  })
}

async function sendViaAPI(email: string, subject: string, content: string, config: any) {
  if (config.provider === 'sendgrid') {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email }],
          subject,
        }],
        from: { email: 'noreply@yourdomain.com' },
        content: [{
          type: 'text/html',
          value: content,
        }],
      }),
    })

    if (!response.ok) {
      throw new Error(`SendGrid API error: ${response.statusText}`)
    }
  }
}

async function updateCampaignSentCount(campaignId: string) {
  const { supabase } = await import('./supabase.server')
  
  await supabase.rpc('increment_campaign_sent_count', {
    campaign_id: campaignId
  })
}

export { redis }
