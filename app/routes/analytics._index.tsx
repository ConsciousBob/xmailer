import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { BarChart3, TrendingUp, Users, Mail, Send, Eye } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get analytics data
  const [
    { count: totalSubscribers },
    { count: totalCampaigns },
    { data: campaigns },
    { count: totalLists }
  ] = await Promise.all([
    supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('status', 'subscribed'),
    
    supabase
      .from('campaigns')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id),
    
    supabase
      .from('campaigns')
      .select('sent_count, total_recipients, status, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false }),
    
    supabase
      .from('lists')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('is_active', true)
  ])

  // Calculate total emails sent
  const totalEmailsSent = campaigns?.reduce((sum, campaign) => sum + (campaign.sent_count || 0), 0) || 0
  
  // Calculate average delivery rate
  const campaignsWithRecipients = campaigns?.filter(c => c.total_recipients > 0) || []
  const averageDeliveryRate = campaignsWithRecipients.length > 0
    ? campaignsWithRecipients.reduce((sum, campaign) => 
        sum + ((campaign.sent_count || 0) / campaign.total_recipients * 100), 0
      ) / campaignsWithRecipients.length
    : 0

  return json({
    user,
    analytics: {
      totalSubscribers: totalSubscribers || 0,
      totalCampaigns: totalCampaigns || 0,
      totalEmailsSent,
      averageDeliveryRate: Math.round(averageDeliveryRate),
      totalLists: totalLists || 0,
    },
    campaigns: campaigns || []
  })
}

export default function Analytics() {
  const { user, analytics, campaigns } = useLoaderData<typeof loader>()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Analytics</h2>
              <p className="text-gray-600 mt-2">
                Track your email marketing performance and subscriber growth.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalSubscribers}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-green-50">
                      <Send className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Campaigns Sent</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalCampaigns}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Emails Sent</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.totalEmailsSent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-orange-50">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Avg. Delivery Rate</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics.averageDeliveryRate}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Campaign Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Campaign Performance</CardTitle>
                  <CardDescription>
                    Delivery rates for your recent campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {campaigns.length === 0 ? (
                    <div className="text-center py-8">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-gray-600">No campaign data yet</p>
                      <p className="text-sm text-gray-500">Send your first campaign to see analytics</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {campaigns.slice(0, 5).map((campaign: any, index: number) => {
                        const deliveryRate = campaign.total_recipients > 0
                          ? Math.round((campaign.sent_count / campaign.total_recipients) * 100)
                          : 0
                        
                        return (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  Campaign {index + 1}
                                </span>
                                <span className="text-sm text-gray-600">
                                  {deliveryRate}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${deliveryRate}%` }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>{campaign.sent_count || 0} sent</span>
                                <span>{formatDate(campaign.created_at)}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Overview</CardTitle>
                  <CardDescription>
                    Your email marketing growth summary
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-blue-900">Active Lists</p>
                        <p className="text-2xl font-bold text-blue-900">{analytics.totalLists}</p>
                      </div>
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-green-900">Subscriber Growth</p>
                        <p className="text-2xl font-bold text-green-900">+{analytics.totalSubscribers}</p>
                      </div>
                      <div className="p-2 bg-green-100 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-purple-900">Campaign Success</p>
                        <p className="text-2xl font-bold text-purple-900">{analytics.averageDeliveryRate}%</p>
                      </div>
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
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
