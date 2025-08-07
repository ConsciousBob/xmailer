import { LoaderFunctionArgs, json, ActionFunctionArgs } from '@remix-run/node'
import { useLoaderData, Link, Form, useNavigation } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { processCampaign } from '~/lib/email.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Mail, Users, Calendar, BarChart3, Clock, Play, Pause, RefreshCw } from 'lucide-react'
import { formatDate } from '~/lib/utils'
import { useEffect, useState } from 'react'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  const campaignId = params.id

  if (!campaignId) {
    throw new Response('Campaign not found', { status: 404 })
  }

  const { data: campaign, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', campaignId)
    .eq('user_id', user.id)
    .single()

  if (error || !campaign) {
    throw new Response('Campaign not found', { status: 404 })
  }

  const url = new URL(request.url)
  const sending = url.searchParams.get('sending') === 'true'

  return json({ user, campaign, sending })
}

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const campaignId = params.id!
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (action === 'send_now') {
    // Update campaign status and trigger sending
    await supabase
      .from('campaigns')
      .update({ 
        status: 'sending',
        updated_at: new Date().toISOString()
      })
      .eq('id', campaignId)
      .eq('user_id', user.id)

    // In a real app, this would be handled by a background job queue
    // For demo purposes, we'll process it immediately
    processCampaign(campaignId).catch(console.error)

    return json({ success: 'Campaign sending started' })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

export default function CampaignDetail() {
  const { user, campaign, sending } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false)

  // Auto-refresh when campaign is sending
  useEffect(() => {
    if (campaign.status === 'sending' || sending) {
      const interval = setInterval(() => {
        setRefreshing(true)
        window.location.reload()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [campaign.status, sending])

  const deliveryRate = campaign.total_recipients > 0 
    ? Math.round((campaign.sent_count / campaign.total_recipients) * 100)
    : 0

  const statusColor = {
    draft: 'bg-gray-100 text-gray-800',
    sending: 'bg-blue-100 text-blue-800',
    sent: 'bg-green-100 text-green-800',
    scheduled: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800',
    partially_sent: 'bg-orange-100 text-orange-800',
  }[campaign.status] || 'bg-gray-100 text-gray-800'

  const canSendNow = ['draft', 'scheduled'].includes(campaign.status)
  const isActive = ['sending'].includes(campaign.status)

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
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">{campaign.name}</h2>
                <p className="text-gray-600 mt-2">{campaign.subject}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 text-sm rounded-full ${statusColor}`}>
                  {campaign.status.replace('_', ' ')}
                  {refreshing && <RefreshCw className="inline h-3 w-3 ml-1 animate-spin" />}
                </span>
                {canSendNow && (
                  <Form method="post">
                    <Button 
                      type="submit" 
                      name="_action" 
                      value="send_now"
                      className="bg-green-600 hover:bg-green-700"
                      disabled={navigation.state === 'submitting'}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {navigation.state === 'submitting' ? 'Starting...' : 'Send Now'}
                    </Button>
                  </Form>
                )}
                {campaign.status === 'draft' && (
                  <Link to={`/campaigns/${campaign.id}/edit`}>
                    <Button variant="outline">Edit Campaign</Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Real-time sending notification */}
            {(campaign.status === 'sending' || sending) && (
              <Card className="mb-8 border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="animate-pulse">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-blue-900">Campaign is sending...</h3>
                      <p className="text-blue-700">
                        {campaign.sent_count} of {campaign.total_recipients} emails sent
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Campaign Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Emails Sent</p>
                      <p className="text-2xl font-bold text-gray-900">{campaign.sent_count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-green-50">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Recipients</p>
                      <p className="text-2xl font-bold text-gray-900">{campaign.total_recipients}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Delivery Rate</p>
                      <p className="text-2xl font-bold text-gray-900">{deliveryRate}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-orange-50">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Status</p>
                      <p className="text-lg font-bold text-gray-900 capitalize">
                        {campaign.status.replace('_', ' ')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Bar */}
            {campaign.total_recipients > 0 && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">Sending Progress</h3>
                    <span className="text-sm text-gray-600">
                      {campaign.sent_count} of {campaign.total_recipients} sent
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${
                        campaign.status === 'sending' ? 'bg-blue-600' : 
                        campaign.status === 'sent' ? 'bg-green-600' : 
                        campaign.status === 'failed' ? 'bg-red-600' : 'bg-gray-400'
                      }`}
                      style={{ width: `${deliveryRate}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Campaign Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Campaign Name</label>
                    <p className="text-gray-900">{campaign.name}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Subject Line</label>
                    <p className="text-gray-900">{campaign.subject}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Created</label>
                    <p className="text-gray-900">{formatDate(campaign.created_at)}</p>
                  </div>
                  
                  {campaign.scheduled_at && (
                    <div>
                      <label className="text-sm font-medium text-gray-600">Scheduled For</label>
                      <p className="text-gray-900">{formatDate(campaign.scheduled_at)}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Last Updated</label>
                    <p className="text-gray-900">{formatDate(campaign.updated_at)}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Targeting</label>
                    <p className="text-gray-900">
                      {campaign.target_all_subscribers ? 'All Subscribers' : 'Selected Lists'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Content Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: campaign.html_content || 'No content available' }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
