import { useState } from 'react'
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { emailQueue } from '~/lib/redis.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Send } from 'lucide-react'
import { Link } from '@remix-run/react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get recipients and SMTP configs
  const [recipientsResult, smtpConfigsResult, emailApisResult] = await Promise.all([
    supabase.from('recipients').select('*').eq('user_id', user.id).eq('subscribed', true),
    supabase.from('smtp_configs').select('*').eq('user_id', user.id).eq('is_active', true),
    supabase.from('email_apis').select('*').eq('user_id', user.id).eq('is_active', true),
  ])

  return json({
    user,
    recipients: recipientsResult.data || [],
    smtpConfigs: smtpConfigsResult.data || [],
    emailApis: emailApisResult.data || [],
  })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  
  const name = formData.get('name') as string
  const subject = formData.get('subject') as string
  const content = formData.get('content') as string
  const sendMethod = formData.get('sendMethod') as string
  const configId = formData.get('configId') as string
  const action = formData.get('_action') as string

  if (!name || !subject || !content) {
    return json({ error: 'All fields are required' }, { status: 400 })
  }

  // Get recipients
  const { data: recipients } = await supabase
    .from('recipients')
    .select('*')
    .eq('user_id', user.id)
    .eq('subscribed', true)

  if (!recipients || recipients.length === 0) {
    return json({ error: 'No recipients found' }, { status: 400 })
  }

  // Create campaign
  const { data: campaign, error: campaignError } = await supabase
    .from('campaigns')
    .insert({
      user_id: user.id,
      name,
      subject,
      content,
      status: action === 'send' ? 'sending' : 'draft',
      total_recipients: recipients.length,
    })
    .select()
    .single()

  if (campaignError) {
    return json({ error: 'Failed to create campaign' }, { status: 500 })
  }

  if (action === 'send') {
    // Get sending configuration
    let sendingConfig = null
    
    if (sendMethod === 'smtp') {
      const { data: smtpConfig } = await supabase
        .from('smtp_configs')
        .select('*')
        .eq('id', configId)
        .eq('user_id', user.id)
        .single()
      
      if (smtpConfig) {
        sendingConfig = {
          type: 'smtp',
          config: smtpConfig,
        }
      }
    } else if (sendMethod === 'api') {
      const { data: apiConfig } = await supabase
        .from('email_apis')
        .select('*')
        .eq('id', configId)
        .eq('user_id', user.id)
        .single()
      
      if (apiConfig) {
        sendingConfig = {
          type: 'api',
          config: apiConfig,
        }
      }
    }

    if (!sendingConfig) {
      return json({ error: 'Invalid sending configuration' }, { status: 400 })
    }

    // Queue emails
    for (const recipient of recipients) {
      await emailQueue.add('send-email', {
        campaignId: campaign.id,
        recipientEmail: recipient.email,
        recipientName: `${recipient.first_name || ''} ${recipient.last_name || ''}`.trim(),
        subject,
        content,
        ...(sendingConfig.type === 'smtp' 
          ? { smtpConfig: sendingConfig.config }
          : { apiConfig: sendingConfig.config }
        ),
      })
    }
  }

  return redirect('/campaigns')
}

export default function NewCampaign() {
  const { user, recipients, smtpConfigs, emailApis } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const [sendMethod, setSendMethod] = useState('smtp')
  const isSubmitting = navigation.state === 'submitting'

  const hasConfigs = smtpConfigs.length > 0 || emailApis.length > 0

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Link to="/campaigns" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">New Campaign</h2>
                <p className="text-gray-600 mt-2">
                  Create a new email campaign to send to your recipients.
                </p>
              </div>
            </div>

            {!hasConfigs && (
              <Card className="mb-6 border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <p className="text-yellow-800">
                    You need to configure at least one SMTP server or Email API before sending campaigns.{' '}
                    <Link to="/smtp" className="underline">
                      Set up SMTP
                    </Link>{' '}
                    or{' '}
                    <Link to="/email-apis" className="underline">
                      configure Email API
                    </Link>
                  </p>
                </CardContent>
              </Card>
            )}

            <Form method="post" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Details</CardTitle>
                  <CardDescription>
                    Basic information about your email campaign
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campaign Name
                    </label>
                    <Input
                      name="name"
                      placeholder="e.g., Weekly Newsletter"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject Line
                    </label>
                    <Input
                      name="subject"
                      placeholder="e.g., Your Weekly Update"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Content
                    </label>
                    <textarea
                      name="content"
                      rows={10}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your email content here..."
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {hasConfigs && (
                <Card>
                  <CardHeader>
                    <CardTitle>Sending Method</CardTitle>
                    <CardDescription>
                      Choose how to send your emails
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-4">
                      {smtpConfigs.length > 0 && (
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="sendMethod"
                            value="smtp"
                            checked={sendMethod === 'smtp'}
                            onChange={(e) => setSendMethod(e.target.value)}
                            className="mr-2"
                          />
                          SMTP Server
                        </label>
                      )}
                      
                      {emailApis.length > 0 && (
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="sendMethod"
                            value="api"
                            checked={sendMethod === 'api'}
                            onChange={(e) => setSendMethod(e.target.value)}
                            className="mr-2"
                          />
                          Email API
                        </label>
                      )}
                    </div>

                    {sendMethod === 'smtp' && smtpConfigs.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          SMTP Configuration
                        </label>
                        <select
                          name="configId"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select SMTP Config</option>
                          {smtpConfigs.map((config: any) => (
                            <option key={config.id} value={config.id}>
                              {config.name} ({config.host})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {sendMethod === 'api' && emailApis.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email API
                        </label>
                        <select
                          name="configId"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select Email API</option>
                          {emailApis.map((api: any) => (
                            <option key={api.id} value={api.id}>
                              {api.name} ({api.provider})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Ready to send to {recipients.length} recipients
                      </p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        type="submit"
                        name="_action"
                        value="draft"
                        variant="outline"
                        disabled={isSubmitting}
                      >
                        Save as Draft
                      </Button>
                      
                      <Button
                        type="submit"
                        name="_action"
                        value="send"
                        disabled={isSubmitting || !hasConfigs || recipients.length === 0}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Campaign'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {actionData?.error && (
                <div className="text-red-600 text-sm">
                  {actionData.error}
                </div>
              )}
            </Form>
          </div>
        </main>
      </div>
    </div>
  )
}
