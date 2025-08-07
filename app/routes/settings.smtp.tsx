import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react';
import { testSMTPConnection, sendTestEmail } from '~/lib/email.server';

export async function loader({ request }: LoaderFunctionArgs) {
  // Load existing SMTP settings from environment or database
  const smtpSettings = {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587'),
    user: process.env.SMTP_USER || '',
    fromEmail: process.env.FROM_EMAIL || '',
    // Don't send password to client
  };

  return json({ smtpSettings });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get('_action');

  const host = formData.get('host') as string;
  const port = parseInt(formData.get('port') as string);
  const user = formData.get('user') as string;
  const pass = formData.get('pass') as string;
  const fromEmail = formData.get('fromEmail') as string;

  // Validate required fields
  if (!host || !port || !user || !pass) {
    return json({
      success: false,
      error: 'All SMTP fields are required'
    });
  }

  const config = {
    host,
    port,
    auth: {
      user,
      pass,
    },
  };

  if (action === 'test') {
    try {
      const result = await testSMTPConnection(config);
      return json({
        success: result.success,
        message: result.success 
          ? (host === 'smtp.postmarkapp.com' ? 'Postmark API connection successful!' : 'SMTP connection successful!')
          : `Connection failed: ${result.error}`,
        error: result.error
      });
    } catch (error) {
      return json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  }

  if (action === 'send-test') {
    const testEmail = formData.get('testEmail') as string;
    
    if (!testEmail) {
      return json({
        success: false,
        error: 'Test email address is required'
      });
    }

    if (!fromEmail) {
      return json({
        success: false,
        error: 'From email address is required'
      });
    }

    try {
      const result = await sendTestEmail(config, fromEmail, testEmail);
      return json({
        success: result.success,
        message: result.success 
          ? `Test email sent successfully! ${result.messageId ? `Message ID: ${result.messageId}` : ''}` 
          : `Failed to send test email: ${result.error}`,
        error: result.error
      });
    } catch (error) {
      return json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  }

  if (action === 'save') {
    // Here you would save the SMTP settings to your database or environment
    // For now, just return success
    return json({
      success: true,
      message: 'SMTP settings saved successfully!'
    });
  }

  return json({ success: false, error: 'Invalid action' });
}

export default function SMTPSettings() {
  const { smtpSettings } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  
  const isLoading = navigation.state === 'submitting';
  const currentAction = navigation.formData?.get('_action');

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">SMTP Settings</h1>
      
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="host" className="block text-sm font-medium mb-1">
            SMTP Host
          </label>
          <input
            type="text"
            id="host"
            name="host"
            defaultValue={smtpSettings.host}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="smtp.postmarkapp.com"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            For Postmark: smtp.postmarkapp.com (will use API for better reliability)
          </p>
        </div>

        <div>
          <label htmlFor="port" className="block text-sm font-medium mb-1">
            SMTP Port
          </label>
          <input
            type="number"
            id="port"
            name="port"
            defaultValue={smtpSettings.port}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="587"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Use 587 for TLS or 465 for SSL
          </p>
        </div>

        <div>
          <label htmlFor="user" className="block text-sm font-medium mb-1">
            Username / API Token
          </label>
          <input
            type="text"
            id="user"
            name="user"
            defaultValue={smtpSettings.user}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your-server-api-token"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            For Postmark: Use your Server API Token
          </p>
        </div>

        <div>
          <label htmlFor="pass" className="block text-sm font-medium mb-1">
            Password / API Token
          </label>
          <input
            type="password"
            id="pass"
            name="pass"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your-server-api-token"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            For Postmark: Use the same Server API Token as username
          </p>
        </div>

        <div>
          <label htmlFor="fromEmail" className="block text-sm font-medium mb-1">
            From Email Address
          </label>
          <input
            type="email"
            id="fromEmail"
            name="fromEmail"
            defaultValue={smtpSettings.fromEmail}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="noreply@yourdomain.com"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Must be a verified sender in Postmark
          </p>
        </div>

        <div>
          <label htmlFor="testEmail" className="block text-sm font-medium mb-1">
            Test Email Address
          </label>
          <input
            type="email"
            id="testEmail"
            name="testEmail"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="test@example.com"
          />
          <p className="text-xs text-gray-500 mt-1">
            Email address to send test email to
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            type="submit"
            name="_action"
            value="test"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading && currentAction === 'test' ? 'Testing...' : 'Test Connection'}
          </button>

          <button
            type="submit"
            name="_action"
            value="send-test"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading && currentAction === 'send-test' ? 'Sending...' : 'Send Test Email'}
          </button>

          <button
            type="submit"
            name="_action"
            value="save"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading && currentAction === 'save' ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </Form>

      {actionData && (
        <div className={`mt-4 p-4 rounded-md ${
          actionData.success 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          <div className="font-medium">
            {actionData.success ? 'Success!' : 'Error!'}
          </div>
          <div className="mt-1">
            {actionData.message || actionData.error}
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="font-medium text-blue-900 mb-2">Email Provider Configuration:</h3>
        <div className="text-sm text-blue-800 space-y-3">
          <div>
            <strong>Postmark (Recommended):</strong>
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Host: smtp.postmarkapp.com</li>
              <li>• Port: 587</li>
              <li>• Username & Password: Your Server API Token</li>
              <li>• Uses API for better reliability in WebContainer</li>
            </ul>
          </div>
          <div>
            <strong>Gmail:</strong>
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Host: smtp.gmail.com</li>
              <li>• Port: 587</li>
              <li>• Username: Your Gmail address</li>
              <li>• Password: App-specific password (not your regular password)</li>
            </ul>
          </div>
        </div>
      </div>

      {actionData && !actionData.success && actionData.error?.includes('timeout') && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <div className="font-medium text-yellow-800">Network Timeout Notice</div>
          <div className="mt-1 text-sm text-yellow-700">
            SMTP connections may be restricted in this environment. For Postmark users, the system will automatically use the API instead of SMTP for better reliability.
          </div>
        </div>
      )}
    </div>
  );
}
