import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Users, Mail, Send, BarChart3, TrendingUp, Clock } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get dashboard stats
  const [
    { count: totalSubscribers },
    { count: totalLists },
    { count: totalCampaigns },
    { data: recentCampaigns }
  ] = await Promise.all([
    supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('status', 'subscribed'),
    
    supabase
      .from('lists')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('is_active', true),
    
    supabase
      .from('campaigns')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id),
    
    supabase
      .from('campaigns')
      .select('id, name, status, sent_count, total_recipients, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5)
  ])

  return json({
    user,
    stats: {
      totalSubscribers: totalSubscribers || 0,
      totalLists: totalLists || 0,
      totalCampaigns: totalCampaigns || 0,
    },
    recentCampaigns: recentCampaigns || []
  })
}

export default function Dashboard() {
  const { user, stats, recentCampaigns } = useLoaderData<typeof loader>()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
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
              <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-600 mt-2">
                Welcome back! Here's what's happening with your email campaigns.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalSubscribers}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-green-50">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Lists</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalLists}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <Send className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalCampaigns}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-orange-50">
                      <BarChart3 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Emails Sent</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {recentCampaigns.reduce((sum: number, campaign: any) => sum + (campaign.sent_count || 0), 0)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Campaigns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Campaigns</CardTitle>
                  <CardDescription>
                    Your latest email campaigns and their status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {recentCampaigns.length === 0 ? (
                    <div className="text-center py-6">
                      <Send className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-gray-600">No campaigns yet</p>
                      <p className="text-sm text-gray-500">Create your first campaign to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentCampaigns.map((campaign: any) => (
                        <div key={campaign.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                            <p className="text-sm text-gray-600">
                              {campaign.sent_count || 0} / {campaign.total_recipients || 0} sent
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              campaign.status === 'sent' ? 'bg-green-100 text-green-800' :
                              campaign.status === 'sending' ? 'bg-blue-100 text-blue-800' :
                              campaign.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {campaign.status}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              {formatDate(campaign.created_at)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common tasks to get you started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href="/subscribers/new"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-50">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Add Subscribers</h4>
                        <p className="text-sm text-gray-600">Import or add new subscribers</p>
                      </div>
                    </a>

                    <a
                      href="/lists/new"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-green-50">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Create List</h4>
                        <p className="text-sm text-gray-600">Organize your subscribers</p>
                      </div>
                    </a>

                    <a
                      href="/campaigns/new"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-purple-50">
                        <Send className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">New Campaign</h4>
                        <p className="text-sm text-gray-600">Create and send emails</p>
                      </div>
                    </a>

                    <a
                      href="/settings/smtp"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-orange-50">
                        <BarChart3 className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Setup SMTP</h4>
                        <p className="text-sm text-gray-600">Configure email sending</p>
                      </div>
                    </a>
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
