import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Mail, Users, Calendar, BarChart3, Clock } from 'lucide-react'
import { formatDate } from '~/lib/utils'

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

  return json({ user, campaign })
}

export default function CampaignDetail() {
  const { user, campaign } = useLoaderData<typeof loader>()

  const deliveryRate = campaign.total_recipients > 0 
    ? Math.round((campaign.sent_count / campaign.total_recipients) * 100)
    : 0

  const statusColor = {
    draft: 'bg-gray-100 text-gray-800',
    sending: 'bg-blue-100 text-blue-800',
    sent: 'bg-green-100 text-green-800',
    scheduled: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800',
  }[campaign.status] || 'bg-gray-100 text-gray-800'

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
                  {campaign.status}
                </span>
                {campaign.status === 'draft' && (
                  <Link to={`/campaigns/${campaign.id}/edit`}>
                    <Button>Edit Campaign</Button>
                  </Link>
                )}
              </div>
            </div>

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
                      <p className="text-lg font-bold text-gray-900 capitalize">{campaign.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Bar */}
            {campaign.status === 'sending' && (
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
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
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
                      dangerouslySetInnerHTML={{ __html: campaign.content }}
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
