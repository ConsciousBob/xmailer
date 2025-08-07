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
      const result = await response.json();
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

  // Optimized configuration for WebContainer environment
  const transporterConfig = {
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
    // Reduced timeouts for WebContainer
    connectionTimeout: 5000, // 5 seconds
    greetingTimeout: 3000, // 3 seconds
    socketTimeout: 5000, // 5 seconds
    // Disable pooling to avoid connection issues
    pool: false,
    // More lenient TLS settings
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3',
    },
    // Disable some features that might cause issues
    disableFileAccess: true,
    disableUrlAccess: true,
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
    console.log('Attempting to send via Postmark API...');
    const apiResult = await sendEmailViaPostmarkAPI(config.auth.user, message, fromEmail);
    if (apiResult.success) {
      return apiResult;
    }
    console.log('Postmark API failed, falling back to SMTP:', apiResult.error);
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
    
    // Skip verification for faster sending
    console.log('Sending email via SMTP...');
    
    const result = await transporter.sendMail({
      from: fromEmail,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text || message.html.replace(/<[^>]*>/g, ''),
    });

    console.log('Email sent successfully via SMTP:', result.messageId);
    
    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    console.error('Failed to send email via SMTP:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
}

export async function testSMTPConnection(config: EmailConfig): Promise<{ success: boolean; error?: string }> {
  // For Postmark, test API connection instead of SMTP
  if (config.host === 'smtp.postmarkapp.com') {
    console.log('Testing Postmark API connection...');
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
    
    // Test with shorter timeout
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Connection timeout after 8 seconds')), 8000);
    });

    await Promise.race([verifyPromise, timeoutPromise]);
    
    return { success: true };
  } catch (error) {
    console.error('SMTP connection test failed:', error);
    
    let errorMessage = 'Connection failed';
    if (error instanceof Error) {
      if (error.message.includes('ETIMEDOUT') || error.message.includes('Greeting never received')) {
        errorMessage = 'Connection timeout - this may be due to network restrictions in the current environment';
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
      transporter.close();
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
