import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Mail, Users, Send, BarChart3, Plus, TrendingUp, Clock, CheckCircle } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)

  // Get dashboard stats
  const [
    { count: totalRecipients },
    { count: totalCampaigns },
    { count: totalLists },
    { data: recentCampaigns }
  ] = await Promise.all([
    supabase.from('recipients').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
    supabase.from('campaigns').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
    supabase.from('lists').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
    supabase
      .from('campaigns')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5)
  ])

  return json({
    user,
    stats: {
      totalRecipients: totalRecipients || 0,
      totalCampaigns: totalCampaigns || 0,
      totalLists: totalLists || 0,
    },
    recentCampaigns: recentCampaigns || []
  })
}

export default function Dashboard() {
  const { user, stats, recentCampaigns } = useLoaderData<typeof loader>()

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Welcome to xMailer</h2>
              <p className="text-gray-600 mt-2">
                Here's an overview of your email marketing performance.
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
                      <p className="text-sm font-medium text-gray-600">Total Recipients</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalRecipients}</p>
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
                      <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalCampaigns}</p>
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
                      <p className="text-sm font-medium text-gray-600">Lists</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalLists}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-yellow-50">
                      <TrendingUp className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Open Rate</p>
                      <p className="text-2xl font-bold text-gray-900">24.5%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Actions */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>
                      Get started with these common tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/campaigns/new" className="block">
                      <Button className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Campaign
                      </Button>
                    </Link>
                    
                    <Link to="/recipients" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Manage Recipients
                      </Button>
                    </Link>
                    
                    <Link to="/lists" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Create List
                      </Button>
                    </Link>
                    
                    <Link to="/lists/import" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <Send className="h-4 w-4 mr-2" />
                        Import Contacts
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Campaigns */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Campaigns</CardTitle>
                    <CardDescription>
                      Your latest email campaigns and their status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentCampaigns.length === 0 ? (
                      <div className="text-center py-8">
                        <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          No campaigns yet
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Create your first email campaign to get started.
                        </p>
                        <Link to="/campaigns/new">
                          <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Create Campaign
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {recentCampaigns.map((campaign: any) => (
                          <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                              <div className={`p-2 rounded-lg ${
                                campaign.status === 'sent' ? 'bg-green-50' :
                                campaign.status === 'draft' ? 'bg-gray-50' :
                                'bg-yellow-50'
                              }`}>
                                {campaign.status === 'sent' ? (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                ) : campaign.status === 'draft' ? (
                                  <Mail className="h-5 w-5 text-gray-600" />
                                ) : (
                                  <Clock className="h-5 w-5 text-yellow-600" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                                <p className="text-sm text-gray-600">
                                  {campaign.sent_count} sent • {new Date(campaign.created_at).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                campaign.status === 'sent' ? 'bg-green-100 text-green-800' :
                                campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {campaign.status}
                              </span>
                              <Link to={`/campaigns/${campaign.id}`}>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                        
                        <div className="text-center pt-4">
                          <Link to="/campaigns">
                            <Button variant="outline">View All Campaigns</Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
