import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { testSMTPConnection, sendEmail } from '~/lib/email.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Save, Server, Plus, Edit, Trash2, CheckCircle, AlertCircle, TestTube, Mail } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get all SMTP configurations for the user
  const { data: smtpConfigs, error } = await supabase
    .from('smtp_configs')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('SMTP configs fetch error:', error)
    return json({ user, smtpConfigs: [], error: 'Failed to load SMTP configurations' })
  }

  return json({ user, smtpConfigs: smtpConfigs || [] })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (action === 'create') {
    const name = formData.get('name') as string
    const host = formData.get('host') as string
    const port = parseInt(formData.get('port') as string)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const fromEmail = formData.get('fromEmail') as string
    const fromName = formData.get('fromName') as string
    const useTls = formData.get('useTls') === 'on'
    const useSsl = formData.get('useSsl') === 'on'
    const isDefault = formData.get('isDefault') === 'on'

    // Validation
    if (!name || !host || !port || !username || !password || !fromEmail || !fromName) {
      return json({ error: 'All fields are required' }, { status: 400 })
    }

    if (port < 1 || port > 65535) {
      return json({ error: 'Port must be between 1 and 65535' }, { status: 400 })
    }

    // If this is set as default, unset other defaults
    if (isDefault) {
      await supabase
        .from('smtp_configs')
        .update({ is_default: false })
        .eq('user_id', user.id)
    }

    // Create SMTP config
    const { error } = await supabase
      .from('smtp_configs')
      .insert({
        user_id: user.id,
        name,
        host,
        port,
        username,
        password, // In production, this should be encrypted
        from_email: fromEmail,
        from_name: fromName,
        use_tls: useTls,
        use_ssl: useSsl,
        is_default: isDefault,
        is_active: true,
      })

    if (error) {
      console.error('SMTP config creation error:', error)
      return json({ error: 'Failed to create SMTP configuration' }, { status: 500 })
    }

    return json({ success: 'SMTP configuration created successfully' })
  }

  if (action === 'test') {
    const configId = formData.get('configId') as string
    const testEmail = formData.get('testEmail') as string
    
    if (!configId || !testEmail) {
      return json({ error: 'Configuration ID and test email are required' }, { status: 400 })
    }

    // Get SMTP config
    const { data: config, error: configError } = await supabase
      .from('smtp_configs')
      .select('*')
      .eq('id', configId)
      .eq('user_id', user.id)
      .single()

    if (configError || !config) {
      return json({ error: 'SMTP configuration not found' }, { status: 404 })
    }

    try {
      // Test SMTP connection first
      const connectionTest = await testSMTPConnection(config)
      if (!connectionTest) {
        return json({ error: 'SMTP connection test failed. Please check your configuration.' }, { status: 400 })
      }

      // Send test email
      const testEmailContent = {
        to: testEmail,
        subject: 'SMTP Configuration Test - xMailer',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; text-align: center;">SMTP Test Email</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Congratulations!</strong> Your SMTP configuration is working correctly.</p>
              <p>This test email was sent using the following configuration:</p>
              <ul>
                <li><strong>Configuration Name:</strong> ${config.name}</li>
                <li><strong>SMTP Host:</strong> ${config.host}</li>
                <li><strong>Port:</strong> ${config.port}</li>
                <li><strong>Security:</strong> ${config.use_ssl ? 'SSL' : config.use_tls ? 'TLS' : 'None'}</li>
                <li><strong>From:</strong> ${config.from_name} <${config.from_email}></li>
              </ul>
            </div>
            <p style="color: #666; font-size: 14px; text-align: center;">
              Sent from xMailer - Email Marketing Platform<br>
              ${new Date().toLocaleString()}
            </p>
          </div>
        `
      }

      const emailSent = await sendEmail(testEmailContent, user.id)
      
      if (emailSent) {
        return json({ success: `Test email sent successfully to ${testEmail}` })
      } else {
        return json({ error: 'Failed to send test email. Please check your SMTP configuration.' }, { status: 500 })
      }

    } catch (error) {
      console.error('SMTP test error:', error)
      return json({ error: 'SMTP test failed: ' + (error as Error).message }, { status: 500 })
    }
  }

  if (action === 'delete') {
    const configId = formData.get('configId') as string
    
    if (!configId) {
      return json({ error: 'Configuration ID required' }, { status: 400 })
    }

    // Delete SMTP config
    const { error } = await supabase
      .from('smtp_configs')
      .delete()
      .eq('id', configId)
      .eq('user_id', user.id)

    if (error) {
      console.error('SMTP config deletion error:', error)
      return json({ error: 'Failed to delete SMTP configuration' }, { status: 500 })
    }

    return json({ success: 'SMTP configuration deleted successfully' })
  }

  if (action === 'setDefault') {
    const configId = formData.get('configId') as string
    
    if (!configId) {
      return json({ error: 'Configuration ID required' }, { status: 400 })
    }

    // Unset all defaults first
    await supabase
      .from('smtp_configs')
      .update({ is_default: false })
      .eq('user_id', user.id)

    // Set new default
    const { error } = await supabase
      .from('smtp_configs')
      .update({ is_default: true })
      .eq('id', configId)
      .eq('user_id', user.id)

    if (error) {
      console.error('SMTP config default update error:', error)
      return json({ error: 'Failed to set default configuration' }, { status: 500 })
    }

    return json({ success: 'Default SMTP configuration updated' })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

export default function SMTPSettings() {
  const { user, smtpConfigs, error } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Link to="/settings" className="mr-4">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Settings
                  </Button>
                </Link>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">SMTP Configuration</h2>
                  <p className="text-gray-600 mt-2">
                    Configure your email sending settings and SMTP servers.
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {actionData?.error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800">{actionData.error}</p>
                </CardContent>
              </Card>
            )}

            {actionData?.success && (
              <Card className="mb-6 border-green-200 bg-green-50">
                <CardContent className="p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800">{actionData.success}</p>
                </CardContent>
              </Card>
            )}

            {/* Existing SMTP Configurations */}
            {smtpConfigs.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Existing SMTP Configurations ({smtpConfigs.length})</CardTitle>
                  <CardDescription>
                    Manage your existing SMTP server configurations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {smtpConfigs.map((config: any) => (
                      <div key={config.id} className="border rounded-lg p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <Server className="h-5 w-5 text-gray-400" />
                              <div>
                                <h3 className="font-medium text-gray-900 flex items-center">
                                  {config.name}
                                  {config.is_default && (
                                    <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                      Default
                                    </span>
                                  )}
                                  {!config.is_active && (
                                    <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                                      Inactive
                                    </span>
                                  )}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {config.host}:{config.port} • {config.from_email}
                                </p>
                              </div>
                            </div>
                            
                            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Host:</span>
                                <p className="font-medium">{config.host}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Port:</span>
                                <p className="font-medium">{config.port}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Username:</span>
                                <p className="font-medium">{config.username}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Security:</span>
                                <p className="font-medium">
                                  {config.use_ssl ? 'SSL' : config.use_tls ? 'TLS' : 'None'}
                                </p>
                              </div>
                            </div>

                            {/* Test Email Form */}
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                              <Form method="post" className="flex items-center space-x-3">
                                <input type="hidden" name="_action" value="test" />
                                <input type="hidden" name="configId" value={config.id} />
                                <div className="flex-1">
                                  <Input
                                    name="testEmail"
                                    type="email"
                                    placeholder="Enter your email to receive test message"
                                    required
                                    className="w-full"
                                  />
                                </div>
                                <Button 
                                  type="submit" 
                                  variant="outline" 
                                  size="sm"
                                  disabled={isSubmitting}
                                >
                                  <Mail className="h-4 w-4 mr-1" />
                                  {isSubmitting ? 'Sending...' : 'Send Test'}
                                </Button>
                              </Form>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 ml-4">
                            {!config.is_default && (
                              <Form method="post" className="inline">
                                <input type="hidden" name="_action" value="setDefault" />
                                <input type="hidden" name="configId" value={config.id} />
                                <Button variant="outline" size="sm" type="submit">
                                  Set Default
                                </Button>
                              </Form>
                            )}
                            
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            
                            <Form method="post" className="inline">
                              <input type="hidden" name="_action" value="delete" />
                              <input type="hidden" name="configId" value={config.id} />
                              <Button 
                                variant="outline" 
                                size="sm" 
                                type="submit"
                                className="text-red-600 hover:text-red-700"
                                onClick={(e) => {
                                  if (!confirm('Are you sure you want to delete this SMTP configuration?')) {
                                    e.preventDefault()
                                  }
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Add New SMTP Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New SMTP Configuration
                </CardTitle>
                <CardDescription>
                  Configure a new SMTP server for sending emails
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-6">
                  <input type="hidden" name="_action" value="create" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Configuration Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="e.g., Gmail SMTP, SendGrid"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        SMTP Host *
                      </label>
                      <Input
                        name="host"
                        placeholder="e.g., smtp.gmail.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Port *
                      </label>
                      <Input
                        name="port"
                        type="number"
                        placeholder="587"
                        min="1"
                        max="65535"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username *
                      </label>
                      <Input
                        name="username"
                        placeholder="your-email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Your SMTP password or app password"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From Email *
                      </label>
                      <Input
                        name="fromEmail"
                        type="email"
                        placeholder="noreply@yourdomain.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From Name *
                      </label>
                      <Input
                        name="fromName"
                        placeholder="Your Company Name"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="useTls"
                        name="useTls"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="useTls" className="text-sm text-gray-700">
                        Use TLS (recommended for port 587)
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="useSsl"
                        name="useSsl"
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="useSsl" className="text-sm text-gray-700">
                        Use SSL (recommended for port 465)
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isDefault"
                        name="isDefault"
                        defaultChecked={smtpConfigs.length === 0}
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="isDefault" className="text-sm text-gray-700">
                        Set as default SMTP configuration
                      </label>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Saving Configuration...' : 'Save SMTP Configuration'}
                    </Button>
                  </div>
                </Form>
              </CardContent>
            </Card>

            {/* Common SMTP Settings Help */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Common SMTP Settings</CardTitle>
                <CardDescription>
                  Popular email service provider configurations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Gmail</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Host: smtp.gmail.com</li>
                      <li>Port: 587 (TLS) or 465 (SSL)</li>
                      <li>Use app password, not regular password</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">SendGrid</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Host: smtp.sendgrid.net</li>
                      <li>Port: 587 (TLS)</li>
                      <li>Username: apikey</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Mailgun</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Host: smtp.mailgun.org</li>
                      <li>Port: 587 (TLS)</li>
                      <li>Use your domain credentials</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Outlook/Hotmail</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Host: smtp-mail.outlook.com</li>
                      <li>Port: 587 (TLS)</li>
                      <li>Use your Microsoft account</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
