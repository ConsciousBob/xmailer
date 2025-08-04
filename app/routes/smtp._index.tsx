import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, Server, Trash2, Settings, CheckCircle, XCircle } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  const { data: smtpConfigs, error } = await supabase
    .from('smtp_configs')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('SMTP configs fetch error:', error)
    return json({ user, smtpConfigs: [], error: 'Failed to load SMTP configurations' })
  }

  return json({ user, smtpConfigs })
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
    const secure = formData.get('secure') === 'on'

    if (!name || !host || !port || !username || !password) {
      return json({ error: 'All fields are required' }, { status: 400 })
    }

    if (port < 1 || port > 65535) {
      return json({ error: 'Port must be between 1 and 65535' }, { status: 400 })
    }

    const { error } = await supabase.from('smtp_configs').insert({
      user_id: user.id,
      name,
      host,
      port,
      username,
      password,
      secure,
      is_active: true,
    })

    if (error) {
      console.error('SMTP config creation error:', error)
      return json({ error: 'Failed to create SMTP configuration' }, { status: 500 })
    }

    return json({ success: 'SMTP configuration added successfully' })
  }

  if (action === 'delete') {
    const configId = formData.get('configId') as string
    
    if (!configId) {
      return json({ error: 'Configuration ID is required' }, { status: 400 })
    }

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

  if (action === 'toggle') {
    const configId = formData.get('configId') as string
    const isActive = formData.get('isActive') === 'true'
    
    if (!configId) {
      return json({ error: 'Configuration ID is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('smtp_configs')
      .update({ 
        is_active: !isActive, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', configId)
      .eq('user_id', user.id)

    if (error) {
      console.error('SMTP config toggle error:', error)
      return json({ error: 'Failed to update SMTP configuration' }, { status: 500 })
    }

    return json({ success: `SMTP configuration ${!isActive ? 'activated' : 'deactivated'} successfully` })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

const commonSMTPProviders = [
  {
    name: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    instructions: 'Use your Gmail address and App Password (not regular password)'
  },
  {
    name: 'Outlook/Hotmail',
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: true,
    instructions: 'Use your Outlook email and password'
  },
  {
    name: 'Yahoo Mail',
    host: 'smtp.mail.yahoo.com',
    port: 587,
    secure: true,
    instructions: 'Use your Yahoo email and App Password'
  },
  {
    name: 'Custom SMTP',
    host: 'mail.yourdomain.com',
    port: 587,
    secure: true,
    instructions: 'Contact your hosting provider for SMTP details'
  }
]

export default function SMTPConfigs() {
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">SMTP Configuration</h2>
              <p className="text-gray-600 mt-2">
                Configure your SMTP servers to send emails through your own mail servers.
              </p>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {/* Common SMTP Providers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Popular SMTP Providers</CardTitle>
                <CardDescription>
                  Quick setup guides for common email providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {commonSMTPProviders.map((provider, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">{provider.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Host:</strong> {provider.host}</p>
                        <p><strong>Port:</strong> {provider.port}</p>
                        <p><strong>Security:</strong> {provider.secure ? 'SSL/TLS' : 'None'}</p>
                        <p className="text-xs mt-2 text-blue-600">{provider.instructions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add New SMTP Config */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add SMTP Configuration
                </CardTitle>
                <CardDescription>
                  Connect your SMTP server to send emails
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-6">
                  <input type="hidden" name="_action" value="create" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Configuration Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="e.g., Gmail SMTP"
                        required
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        A friendly name to identify this configuration
                      </p>
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
                      <p className="text-xs text-gray-500 mt-1">
                        Your SMTP server hostname
                      </p>
                    </div>

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
                        defaultValue="587"
                        required
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Common ports: 587 (TLS), 465 (SSL), 25 (unsecured)
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username *
                      </label>
                      <Input
                        name="username"
                        placeholder="your-email@gmail.com"
                        required
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Usually your email address
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Your password or app password"
                        required
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        For Gmail, use an App Password instead of your regular password
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="secure"
                          id="secure"
                          defaultChecked
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="secure" className="ml-2 text-sm text-gray-700">
                          Use SSL/TLS encryption (recommended)
                        </label>
                      </div>
                    </div>
                  </div>

                  {actionData?.error && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                      {actionData.error}
                    </div>
                  )}

                  {actionData?.success && (
                    <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">
                      {actionData.success}
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? 'Adding...' : 'Add SMTP Configuration'}
                  </Button>
                </Form>
              </CardContent>
            </Card>

            {/* Existing SMTP Configs */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Your SMTP Configurations
              </h3>
              
              {smtpConfigs.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <Server className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No SMTP configurations yet
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Add your first SMTP configuration above to start sending emails.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {smtpConfigs.map((config: any) => (
                    <Card key={config.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${config.is_active ? 'bg-green-50' : 'bg-gray-50'}`}>
                              {config.is_active ? (
                                <CheckCircle className="h-6 w-6 text-green-600" />
                              ) : (
                                <XCircle className="h-6 w-6 text-gray-400" />
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-lg">
                                {config.name}
                              </h4>
                              <div className="mt-2 space-y-1 text-sm text-gray-600">
                                <p><strong>Host:</strong> {config.host}:{config.port}</p>
                                <p><strong>Username:</strong> {config.username}</p>
                                <p><strong>Security:</strong> {config.secure ? 'SSL/TLS Enabled' : 'No Encryption'}</p>
                                <p><strong>Created:</strong> {new Date(config.created_at).toLocaleDateString()}</p>
                              </div>
                              
                              <div className="flex items-center mt-3 space-x-3">
                                <span
                                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                                    config.is_active
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {config.is_active ? 'Active' : 'Inactive'}
                                </span>
                                
                                {config.secure && (
                                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                    Encrypted
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Form method="post" className="inline">
                              <input type="hidden" name="_action" value="toggle" />
                              <input type="hidden" name="configId" value={config.id} />
                              <input type="hidden" name="isActive" value={config.is_active} />
                              <Button
                                type="submit"
                                variant="outline"
                                size="sm"
                                disabled={isSubmitting}
                              >
                                {config.is_active ? 'Deactivate' : 'Activate'}
                              </Button>
                            </Form>
                            
                            <Form method="post" className="inline">
                              <input type="hidden" name="_action" value="delete" />
                              <input type="hidden" name="configId" value={config.id} />
                              <Button
                                type="submit"
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700 hover:border-red-300"
                                disabled={isSubmitting}
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
