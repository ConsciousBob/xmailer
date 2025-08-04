import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Textarea } from '~/components/ui/textarea'
import { ArrowLeft, Send, Save } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get user's lists for targeting options
  const { data: lists, error } = await supabase
    .from('lists_with_counts')
    .select('*')
    .eq('user_id', user.id)
    .eq('is_active', true)
    .order('name')

  if (error) {
    console.error('Lists fetch error:', error)
    return json({ user, lists: [], error: 'Failed to load lists' })
  }

  return json({ user, lists })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const action = formData.get('_action') as string

  const name = formData.get('name') as string
  const subject = formData.get('subject') as string
  const content = formData.get('content') as string
  const targetAllSubscribers = formData.get('targetAllSubscribers') === 'true'
  const includeLists = formData.getAll('includeLists') as string[]
  const excludeLists = formData.getAll('excludeLists') as string[]

  if (!name || !subject || !content) {
    return json({ error: 'Campaign name, subject, and content are required' }, { status: 400 })
  }

  if (!targetAllSubscribers && includeLists.length === 0) {
    return json({ error: 'Please select at least one list to target or enable "Target All Subscribers"' }, { status: 400 })
  }

  const campaignData = {
    user_id: user.id,
    name,
    subject,
    content,
    target_all_subscribers: targetAllSubscribers,
    include_lists: includeLists.length > 0 ? includeLists : null,
    exclude_lists: excludeLists.length > 0 ? excludeLists : null,
    status: action === 'save' ? 'draft' : 'scheduled',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  const { data: campaign, error } = await supabase
    .from('campaigns')
    .insert(campaignData)
    .select('id')
    .single()

  if (error) {
    console.error('Campaign creation error:', error)
    return json({ error: 'Failed to create campaign' }, { status: 500 })
  }

  if (action === 'save') {
    return json({ success: 'Campaign saved as draft', campaignId: campaign.id })
  } else {
    // For now, just save as scheduled - actual sending would be handled by a background job
    return redirect(`/campaigns/${campaign.id}`)
  }
}

export default function NewCampaign() {
  const { user, lists, error } = useLoaderData<typeof loader>()
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
            <div className="flex items-center mb-8">
              <Link to="/campaigns" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Campaigns
                </Button>
              </Link>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Create New Campaign</h2>
                <p className="text-gray-600 mt-2">
                  Design and send your email campaign to your audience.
                </p>
              </div>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            <Form method="post" className="space-y-8">
              {/* Campaign Details */}
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
                      Campaign Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="e.g., Weekly Newsletter - January 2024"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Subject *
                    </label>
                    <Input
                      name="subject"
                      placeholder="e.g., Your Weekly Update from xMailer"
                      required
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Email Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Email Content</CardTitle>
                  <CardDescription>
                    Write your email content (HTML supported)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    name="content"
                    placeholder="Write your email content here... You can use HTML tags for formatting."
                    required
                    className="w-full min-h-[300px]"
                  />
                </CardContent>
              </Card>

              {/* Audience Targeting */}
              <Card>
                <CardHeader>
                  <CardTitle>Audience Targeting</CardTitle>
                  <CardDescription>
                    Choose who will receive this campaign
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="targetAllSubscribers"
                      name="targetAllSubscribers"
                      value="true"
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="targetAllSubscribers" className="text-sm font-medium text-gray-700">
                      Target all subscribers
                    </label>
                  </div>

                  {lists.length > 0 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Include Lists
                        </label>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                          {lists.map((list: any) => (
                            <div key={list.id} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={`include-${list.id}`}
                                name="includeLists"
                                value={list.id}
                                className="rounded border-gray-300"
                              />
                              <label htmlFor={`include-${list.id}`} className="text-sm text-gray-700 flex items-center">
                                <div
                                  className="w-3 h-3 rounded-full mr-2"
                                  style={{ backgroundColor: list.color }}
                                />
                                {list.name} ({list.subscribed_members || 0} subscribers)
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Exclude Lists (Optional)
                        </label>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                          {lists.map((list: any) => (
                            <div key={list.id} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={`exclude-${list.id}`}
                                name="excludeLists"
                                value={list.id}
                                className="rounded border-gray-300"
                              />
                              <label htmlFor={`exclude-${list.id}`} className="text-sm text-gray-700 flex items-center">
                                <div
                                  className="w-3 h-3 rounded-full mr-2"
                                  style={{ backgroundColor: list.color }}
                                />
                                {list.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {lists.length === 0 && (
                    <div className="text-center py-6 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        You don't have any active lists yet.
                      </p>
                      <Link to="/lists">
                        <Button variant="outline">Create Your First List</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {actionData?.error && (
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <p className="text-red-800">{actionData.error}</p>
                  </CardContent>
                </Card>
              )}

              {actionData?.success && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <p className="text-green-800">{actionData.success}</p>
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <div className="flex space-x-4">
                <Button
                  type="submit"
                  name="_action"
                  value="save"
                  variant="outline"
                  disabled={isSubmitting}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Saving...' : 'Save as Draft'}
                </Button>
                
                <Button
                  type="submit"
                  name="_action"
                  value="schedule"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Creating...' : 'Create & Schedule'}
                </Button>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </div>
  )
}
