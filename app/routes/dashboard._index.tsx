import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Users, Mail, Send, TrendingUp, Plus, BarChart3 } from 'lucide-react'

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
      .select('*')
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

  const statCards = [
    {
      title: 'Total Subscribers',
      value: stats.totalSubscribers,
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      href: '/subscribers'
    },
    {
      title: 'Active Lists',
      value: stats.totalLists,
      icon: Mail,
      color: 'bg-green-50 text-green-600',
      href: '/lists'
    },
    {
      title: 'Campaigns',
      value: stats.totalCampaigns,
      icon: Send,
      color: 'bg-purple-50 text-purple-600',
      href: '/campaigns'
    },
    {
      title: 'Growth Rate',
      value: '+12%',
      icon: TrendingUp,
      color: 'bg-orange-50 text-orange-600',
      href: '/analytics'
    }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.email?.split('@')[0]}!
              </h2>
              <p className="text-gray-600 mt-2">
                Here's what's happening with your email campaigns today.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat) => (
                <Link key={stat.title} to={stat.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Get started with common tasks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/campaigns/new">
                    <Button className="w-full justify-start">
                      <Send className="h-4 w-4 mr-2" />
                      Create New Campaign
                    </Button>
                  </Link>
                  <Link to="/subscribers/import">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Import Subscribers
                    </Button>
                  </Link>
                  <Link to="/lists/new">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New List
                    </Button>
                  </Link>
                  <Link to="/analytics">
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Campaigns */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Campaigns</CardTitle>
                  <CardDescription>
                    Your latest email campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {recentCampaigns.length === 0 ? (
                    <div className="text-center py-6">
                      <Send className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-gray-600 mb-4">No campaigns yet</p>
                      <Link to="/campaigns/new">
                        <Button>Create Your First Campaign</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentCampaigns.map((campaign: any) => (
                        <div key={campaign.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                            <p className="text-sm text-gray-600">{campaign.subject}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              campaign.status === 'sent' ? 'bg-green-100 text-green-800' :
                              campaign.status === 'sending' ? 'bg-blue-100 text-blue-800' :
                              campaign.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {campaign.status}
                            </span>
                            <Link to={`/campaigns/${campaign.id}`}>
                              <Button variant="outline" size="sm">View</Button>
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

            {/* Getting Started */}
            {stats.totalSubscribers === 0 && (
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Getting Started</CardTitle>
                  <CardDescription className="text-blue-700">
                    Welcome to xMailer! Here's how to get started with your email marketing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">Configure SMTP Settings</h4>
                        <p className="text-sm text-blue-700">Set up your email sending configuration</p>
                      </div>
                      <Link to="/settings/smtp">
                        <Button size="sm">Configure</Button>
                      </Link>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">Create Your First List</h4>
                        <p className="text-sm text-blue-700">Organize your subscribers into targeted lists</p>
                      </div>
                      <Link to="/lists/new">
                        <Button size="sm">Create List</Button>
                      </Link>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">Import Subscribers</h4>
                        <p className="text-sm text-blue-700">Add your email subscribers to start sending campaigns</p>
                      </div>
                      <Link to="/subscribers/import">
                        <Button size="sm">Import</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
