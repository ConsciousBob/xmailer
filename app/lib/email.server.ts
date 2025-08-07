// Simplified email server for better Vercel compatibility
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

export interface EmailConfig {
  host: string;
  port: number;
  secure?: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface Campaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  fromEmail: string;
  recipients: string[];
  status: 'draft' | 'sending' | 'sent' | 'failed';
  sentCount?: number;
  failedCount?: number;
}

export interface CampaignResult {
  success: boolean;
  sentCount: number;
  failedCount: number;
  errors: string[];
}

function validateEmailConfig(config: any): config is EmailConfig {
  return (
    config &&
    typeof config.host === 'string' &&
    typeof config.port === 'number' &&
    config.auth &&
    typeof config.auth.user === 'string' &&
    typeof config.auth.pass === 'string'
  );
}

// Get email configuration from environment variables
function getEmailConfigFromEnv(): EmailConfig | null {
  try {
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
      return null;
    }

    return {
      host,
      port: parseInt(port),
      auth: {
        user,
        pass,
      },
    };
  } catch (error) {
    console.error('Error reading email config from environment:', error);
    return null;
  }
}

// Postmark API implementation for better serverless compatibility
async function sendEmailViaPostmarkAPI(
  apiToken: string,
  message: EmailMessage,
  fromEmail: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': apiToken,
      },
      body: JSON.stringify({
        From: fromEmail,
        To: message.to,
        Subject: message.subject,
        HtmlBody: message.html,
        TextBody: message.text || message.html.replace(/<[^>]*>/g, ''),
        MessageStream: 'outbound',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.Message || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const result = await response.json();
    return {
      success: true,
      messageId: result.MessageID,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

// Test Postmark API connection
async function testPostmarkAPI(apiToken: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('https://api.postmarkapp.com/server', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-Postmark-Server-Token': apiToken,
      },
    });

    if (response.ok) {
      return { success: true };
    } else {
      const error = await response.json().catch(() => ({}));
      return {
        success: false,
        error: error.Message || 'Invalid API token or server error',
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

export function createTransporter(config: EmailConfig): Transporter {
  if (!validateEmailConfig(config)) {
    throw new Error('Invalid email configuration');
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
    pool: false,
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function sendEmail(
  config: EmailConfig,
  message: EmailMessage,
  fromEmail: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  // Prefer Postmark API for better serverless compatibility
  if (config.host === 'smtp.postmarkapp.com') {
    return await sendEmailViaPostmarkAPI(config.auth.user, message, fromEmail);
  }

  // Fallback to SMTP for other providers
  let transporter: Transporter | null = null;
  
  try {
    if (!validateEmailConfig(config)) {
      throw new Error('Invalid email configuration');
    }

    if (!message.to || !message.subject || !message.html) {
      throw new Error('Missing required email fields');
    }

    transporter = createTransporter(config);
    
    const result = await transporter.sendMail({
      from: fromEmail,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text || message.html.replace(/<[^>]*>/g, ''),
    });
    
    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  } finally {
    if (transporter) {
      try {
        transporter.close();
      } catch {
        // Ignore close errors
      }
    }
  }
}

export async function testSMTPConnection(config: EmailConfig): Promise<{ success: boolean; error?: string }> {
  // For Postmark, test API connection
  if (config.host === 'smtp.postmarkapp.com') {
    return await testPostmarkAPI(config.auth.user);
  }

  // For other providers, test SMTP
  let transporter: Transporter | null = null;
  
  try {
    if (!validateEmailConfig(config)) {
      return {
        success: false,
        error: 'Invalid configuration: missing required fields',
      };
    }

    transporter = createTransporter(config);
    
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Connection timeout')), 15000);
    });

    await Promise.race([verifyPromise, timeoutPromise]);
    
    return { success: true };
  } catch (error) {
    let errorMessage = 'Connection failed';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return {
      success: false,
      error: errorMessage,
    };
  } finally {
    if (transporter) {
      try {
        transporter.close();
      } catch {
        // Ignore close errors
      }
    }
  }
}

export function resetTransporter(): void {
  // No-op since we don't cache transporters
}

export async function sendTestEmail(
  config: EmailConfig,
  fromEmail: string,
  toEmail: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const testMessage: EmailMessage = {
    to: toEmail,
    subject: 'Test Email from xMailer',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Test Email from xMailer</h2>
        <p>This is a test email sent from xMailer to verify your email configuration.</p>
        <p>If you received this email, your email settings are working correctly! 🎉</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 14px;">
          <strong>Sent at:</strong> ${new Date().toISOString()}<br>
          <strong>From:</strong> ${fromEmail}<br>
          <strong>To:</strong> ${toEmail}
        </p>
      </div>
    `,
    text: `Test Email from xMailer\n\nThis is a test email sent from xMailer to verify your email configuration.\n\nIf you received this email, your email settings are working correctly!\n\nSent at: ${new Date().toISOString()}\nFrom: ${fromEmail}\nTo: ${toEmail}`,
  };

  return await sendEmail(config, testMessage, fromEmail);
}

export async function processCampaign(
  campaignId: string,
  campaign: Campaign,
  config?: EmailConfig
): Promise<CampaignResult> {
  try {
    const emailConfig = config || getEmailConfigFromEnv();
    
    if (!emailConfig) {
      return {
        success: false,
        sentCount: 0,
        failedCount: 0,
        errors: ['Email configuration not available'],
      };
    }
    
    let sentCount = 0;
    let failedCount = 0;
    const errors: string[] = [];

    if (!campaign.recipients || campaign.recipients.length === 0) {
      return {
        success: false,
        sentCount: 0,
        failedCount: 0,
        errors: ['No recipients found for campaign'],
      };
    }

    if (!campaign.subject || !campaign.content) {
      return {
        success: false,
        sentCount: 0,
        failedCount: 0,
        errors: ['Campaign subject or content is missing'],
      };
    }

    // Process recipients in small batches for serverless
    const batchSize = 5;
    for (let i = 0; i < campaign.recipients.length; i += batchSize) {
      const batch = campaign.recipients.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (recipient) => {
        try {
          if (!recipient || !recipient.includes('@')) {
            return { success: false, error: `Invalid email: ${recipient}` };
          }

          const message: EmailMessage = {
            to: recipient,
            subject: campaign.subject,
            html: campaign.content,
            text: campaign.content.replace(/<[^>]*>/g, ''),
          };

          const result = await sendEmail(emailConfig, message, campaign.fromEmail);
          return { success: result.success, error: result.error, recipient };
        } catch (error) {
          return { 
            success: false, 
            error: `Error sending to ${recipient}: ${error instanceof Error ? error.message : 'Unknown error'}`,
            recipient 
          };
        }
      });

      const batchResults = await Promise.allSettled(batchPromises);
      
      batchResults.forEach((result) => {
        if (result.status === 'fulfilled') {
          if (result.value.success) {
            sentCount++;
          } else {
            failedCount++;
            errors.push(result.value.error);
          }
        } else {
          failedCount++;
          errors.push(`Batch processing error: ${result.reason}`);
        }
      });

      // Small delay between batches
      if (i + batchSize < campaign.recipients.length) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    return {
      success: sentCount > 0 && failedCount === 0,
      sentCount,
      failedCount,
      errors: errors.slice(0, 10), // Limit errors
    };
  } catch (error) {
    return {
      success: false,
      sentCount: 0,
      failedCount: 0,
      errors: [error instanceof Error ? error.message : 'Campaign processing failed'],
    };
  }
}

export async function sendBulkEmails(
  config: EmailConfig,
  messages: Array<{ to: string; subject: string; html: string; text?: string }>,
  fromEmail: string,
  onProgress?: (sent: number, failed: number, total: number) => void
): Promise<CampaignResult> {
  let sentCount = 0;
  let failedCount = 0;
  const errors: string[] = [];
  const total = messages.length;

  const batchSize = 3;
  for (let i = 0; i < messages.length; i += batchSize) {
    const batch = messages.slice(i, i + batchSize);
    
    const batchPromises = batch.map(async (message) => {
      try {
        const result = await sendEmail(config, message, fromEmail);
        return { success: result.success, error: result.error, to: message.to };
      } catch (error) {
        return { 
          success: false, 
          error: error instanceof Error ? error.message : 'Unknown error', 
          to: message.to 
        };
      }
    });

    const batchResults = await Promise.allSettled(batchPromises);
    
    batchResults.forEach((result) => {
      if (result.status === 'fulfilled') {
        if (result.value.success) {
          sentCount++;
        } else {
          failedCount++;
          errors.push(`Failed to send to ${result.value.to}: ${result.value.error}`);
        }
      } else {
        failedCount++;
        errors.push(`Batch error: ${result.reason}`);
      }
    });

    if (onProgress) {
      onProgress(sentCount, failedCount, total);
    }

    // Small delay between batches
    if (i + batchSize < messages.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return {
    success: sentCount > 0 && failedCount === 0,
    sentCount,
    failedCount,
    errors: errors.slice(0, 10),
  };
}
