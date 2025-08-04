import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, Zap, Trash2, ExternalLink } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  const { data: emailApis, error } = await supabase
    .from('email_apis')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Failed to load email APIs')
  }

  return json({ user, emailApis })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (action === 'create') {
    const name = formData.get('name') as string
    const provider = formData.get('provider') as string
    const apiKey = formData.get('apiKey') as string

    if (!name || !provider || !apiKey) {
      return json({ error: 'All fields are required' }, { status: 400 })
    }

    const { error } = await supabase.from('email_apis').insert({
      user_id: user.id,
      name,
      provider,
      api_key: apiKey,
      is_active: true,
    })

    if (error) {
      return json({ error: 'Failed to create email API configuration' }, { status: 500 })
    }

    return json({ success: true })
  }

  if (action === 'delete') {
    const apiId = formData.get('apiId') as string
    
    const { error } = await supabase
      .from('email_apis')
      .delete()
      .eq('id', apiId)
      .eq('user_id', user.id)

    if (error) {
      return json({ error: 'Failed to delete email API configuration' }, { status: 500 })
    }

    return json({ success: true })
  }

  if (action === 'toggle') {
    const apiId = formData.get('apiId') as string
    const isActive = formData.get('isActive') === 'true'
    
    const { error } = await supabase
      .from('email_apis')
      .update({ is_active: !isActive, updated_at: new Date().toISOString() })
      .eq('id', apiId)
      .eq('user_id', user.id)

    if (error) {
      return json({ error: 'Failed to update email API status' }, { status: 500 })
    }

    return json({ success: true })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

const emailProviders = [
  {
    id: 'sendgrid',
    name: 'SendGrid',
    description: 'Reliable email delivery service with excellent deliverability',
    setupUrl: 'https://app.sendgrid.com/settings/api_keys',
    logo: '📧'
  },
  {
    id: 'mailgun',
    name: 'Mailgun',
    description: 'Powerful email API for developers',
    setupUrl: 'https://app.mailgun.com/app/account/security/api_keys',
    logo: '🔫'
  },
  {
    id: 'postmark',
    name: 'Postmark',
    description: 'Fast and reliable transactional email service',
    setupUrl: 'https://account.postmarkapp.com/api_tokens',
    logo: '📮'
  },
  {
    id: 'ses',
    name: 'Amazon SES',
    description: 'Cost-effective email service from AWS',
    setupUrl: 'https://console.aws.amazon.com/ses/',
    logo: '☁️'
  }
]

export default function EmailAPIs() {
  const { user, emailApis } = useLoaderData<typeof loader>()
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Email APIs</h2>
              <p className="text-gray-600 mt-2">
                Configure email service providers to send your campaigns through their APIs.
              </p>
            </div>

            {/* Available Providers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Available Email Providers</CardTitle>
                <CardDescription>
                  Choose from popular email service providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emailProviders.map((provider) => (
                    <div
                      key={provider.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{provider.logo}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{provider.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {provider.description}
                            </p>
                          </div>
                        </div>
                        <a
                          href={provider.setupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-500"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add New API */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Email API
                </CardTitle>
                <CardDescription>
                  Configure a new email service provider
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-4">
                  <input type="hidden" name="_action" value="create" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Configuration Name
                      </label>
                      <Input
                        name="name"
                        placeholder="e.g., SendGrid Production"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Provider
                      </label>
                      <select
                        name="provider"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Provider</option>
                        {emailProviders.map((provider) => (
                          <option key={provider.id} value={provider.id}>
                            {provider.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        API Key
                      </label>
                      <Input
                        name="apiKey"
                        type="password"
                        placeholder="Your API key"
                        required
                      />
                    </div>
                  </div>

                  {actionData?.error && (
                    <div className="text-red-600 text-sm">
                      {actionData.error}
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Email API'}
                  </Button>
                </Form>
              </CardContent>
            </Card>

            {/* Existing APIs */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Your Email API Configurations
              </h3>
              
              {emailApis.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-8">
                    <Zap className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-600">
                      No email APIs configured yet. Add one above to get started.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {emailApis.map((api: any) => (
                    <Card key={api.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-2 rounded-lg bg-blue-50 mr-4">
                              <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {api.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {emailProviders.find(p => p.id === api.provider)?.name || api.provider}
                              </p>
                              <div className="flex items-center mt-2">
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    api.is_active
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {api.is_active ? 'Active' : 'Inactive'}
                                </span>
                                <span className="ml-2 text-xs text-gray-500">
                                  API Key: ****{api.api_key.slice(-4)}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Form method="post" className="inline">
                              <input type="hidden" name="_action" value="toggle" />
                              <input type="hidden" name="apiId" value={api.id} />
                              <input type="hidden" name="isActive" value={api.is_active} />
                              <Button
                                type="submit"
                                variant="outline"
                                size="sm"
                              >
                                {api.is_active ? 'Deactivate' : 'Activate'}
                              </Button>
                            </Form>
                            
                            <Form method="post" className="inline">
                              <input type="hidden" name="_action" value="delete" />
                              <input type="hidden" name="apiId" value={api.id} />
                              <Button
                                type="submit"
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700"
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
