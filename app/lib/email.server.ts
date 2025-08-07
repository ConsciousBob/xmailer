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
      console.warn('Missing SMTP environment variables');
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

// Alternative HTTP-based email sending for Postmark
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

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        messageId: result.MessageID,
      };
    } else {
      return {
        success: false,
        error: result.Message || 'Failed to send email via Postmark API',
      };
    }
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
      return { 
        success: true,
      };
    } else {
      const error = await response.json();
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
    throw new Error('Invalid email configuration: missing required fields (host, port, auth.user, auth.pass)');
  }

  // Vercel-optimized configuration
  const transporterConfig = {
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
    // Shorter timeouts for serverless environment
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 5000, // 5 seconds
    socketTimeout: 10000, // 10 seconds
    // Disable pooling for serverless
    pool: false,
    // TLS settings for better compatibility
    tls: {
      rejectUnauthorized: false,
    },
    // Disable features that might cause issues in serverless
    disableFileAccess: true,
    disableUrlAccess: true,
    // Only log errors in production
    debug: false,
    logger: false,
  };

  return nodemailer.createTransport(transporterConfig);
}

export async function sendEmail(
  config: EmailConfig,
  message: EmailMessage,
  fromEmail: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  // Check if this is Postmark and try API first
  if (config.host === 'smtp.postmarkapp.com') {
    const apiResult = await sendEmailViaPostmarkAPI(config.auth.user, message, fromEmail);
    if (apiResult.success) {
      return apiResult;
    }
    // Don't log API failures in production
    if (process.env.NODE_ENV === 'development') {
      console.log('Postmark API failed, falling back to SMTP:', apiResult.error);
    }
  }

  // Fallback to SMTP
  let transporter: Transporter | null = null;
  
  try {
    if (!validateEmailConfig(config)) {
      throw new Error('Invalid email configuration');
    }

    if (!message.to || !message.subject || !message.html) {
      throw new Error('Missing required email fields: to, subject, or content');
    }

    transporter = createTransporter(config);
    
    const result = await transporter.sendMail({
      from: fromEmail,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text || message.html.replace(/<[^>]*>/g, ''),
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Email sent successfully via SMTP:', result.messageId);
    }
    
    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to send email via SMTP:', error);
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  } finally {
    if (transporter) {
      try {
        transporter.close();
      } catch (closeError) {
        // Ignore close errors in production
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error closing transporter:', closeError);
        }
      }
    }
  }
}

export async function testSMTPConnection(config: EmailConfig): Promise<{ success: boolean; error?: string }> {
  // For Postmark, test API connection instead of SMTP
  if (config.host === 'smtp.postmarkapp.com') {
    return await testPostmarkAPI(config.auth.user);
  }

  // For other providers, test SMTP with timeout
  let transporter: Transporter | null = null;
  
  try {
    if (!validateEmailConfig(config)) {
      return {
        success: false,
        error: 'Invalid configuration: missing required fields',
      };
    }

    transporter = createTransporter(config);
    
    // Test with timeout appropriate for serverless
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Connection timeout after 15 seconds')), 15000);
    });

    await Promise.race([verifyPromise, timeoutPromise]);
    
    return { success: true };
  } catch (error) {
    let errorMessage = 'Connection failed';
    if (error instanceof Error) {
      if (error.message.includes('ETIMEDOUT') || error.message.includes('Greeting never received')) {
        errorMessage = 'Connection timeout - this may be due to network restrictions';
      } else {
        errorMessage = error.message;
      }
    }
    
    return {
      success: false,
      error: errorMessage,
    };
  } finally {
    if (transporter) {
      try {
        transporter.close();
      } catch (closeError) {
        // Ignore close errors
      }
    }
  }
}

export function resetTransporter(): void {
  // No-op since we don't cache transporters
}

// Helper function to send test email
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

// Campaign processing function with better error handling for serverless
export async function processCampaign(
  campaignId: string,
  campaign: Campaign,
  config?: EmailConfig
): Promise<CampaignResult> {
  try {
    // Use provided config or get from environment
    const emailConfig = config || getEmailConfigFromEnv();
    
    if (!emailConfig) {
      return {
        success: false,
        sentCount: 0,
        failedCount: 0,
        errors: ['Email configuration not available'],
      };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`Starting campaign processing for: ${campaign.name} (${campaignId})`);
    }
    
    let sentCount = 0;
    let failedCount = 0;
    const errors: string[] = [];

    // Validate campaign data
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

    // Process recipients in smaller batches for serverless
    const batchSize = 10;
    const batches = [];
    
    for (let i = 0; i < campaign.recipients.length; i += batchSize) {
      batches.push(campaign.recipients.slice(i, i + batchSize));
    }

    // Process each batch
    for (const batch of batches) {
      const batchPromises = batch.map(async (recipient) => {
        try {
          // Validate email address
          if (!recipient || !recipient.includes('@')) {
            return { success: false, error: `Invalid email address: ${recipient}` };
          }

          // Create email message
          const message: EmailMessage = {
            to: recipient,
            subject: campaign.subject,
            html: campaign.content,
            text: campaign.content.replace(/<[^>]*>/g, ''),
          };

          // Send email
          const result = await sendEmail(emailConfig, message, campaign.fromEmail);
          
          if (result.success) {
            return { success: true, recipient };
          } else {
            return { success: false, error: `Failed to send to ${recipient}: ${result.error}` };
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          return { success: false, error: `Error sending to ${recipient}: ${errorMessage}` };
        }
      });

      // Wait for batch to complete
      const batchResults = await Promise.allSettled(batchPromises);
      
      // Process batch results
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
      if (batches.length > 1) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    const success = sentCount > 0 && failedCount === 0;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Campaign processing completed: ${sentCount} sent, ${failedCount} failed`);
    }
    
    return {
      success,
      sentCount,
      failedCount,
      errors: errors.slice(0, 10), // Limit error array size
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

// Bulk email sending function optimized for serverless
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

  // Process in batches for better performance
  const batchSize = 5;
  const batches = [];
  
  for (let i = 0; i < messages.length; i += batchSize) {
    batches.push(messages.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    const batchPromises = batch.map(async (message) => {
      try {
        const result = await sendEmail(config, message, fromEmail);
        return { success: result.success, error: result.error, to: message.to };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return { success: false, error: errorMessage, to: message.to };
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

    // Call progress callback if provided
    if (onProgress) {
      onProgress(sentCount, failedCount, total);
    }

    // Small delay between batches
    if (batches.length > 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return {
    success: sentCount > 0 && failedCount === 0,
    sentCount,
    failedCount,
    errors: errors.slice(0, 10), // Limit error array size
  };
}
