import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Mail, Users, Send, BarChart3 } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get dashboard stats
  const [campaignsResult, recipientsResult, smtpConfigsResult] = await Promise.all([
    supabase.from('campaigns').select('*').eq('user_id', user.id),
    supabase.from('recipients').select('*').eq('user_id', user.id),
    supabase.from('smtp_configs').select('*').eq('user_id', user.id),
  ])

  const stats = {
    totalCampaigns: campaignsResult.data?.length || 0,
    totalRecipients: recipientsResult.data?.length || 0,
    totalSent: campaignsResult.data?.reduce((sum, campaign) => sum + campaign.sent_count, 0) || 0,
    smtpConfigs: smtpConfigsResult.data?.length || 0,
  }

  return json({ user, stats, recentCampaigns: campaignsResult.data?.slice(0, 5) || [] })
}

export default function Dashboard() {
  const { user, stats, recentCampaigns } = useLoaderData<typeof loader>()

  const statCards = [
    {
      title: 'Total Campaigns',
      value: stats.totalCampaigns,
      icon: Mail,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Recipients',
      value: stats.totalRecipients,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Emails Sent',
      value: stats.totalSent,
      icon: Send,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'SMTP Configs',
      value: stats.smtpConfigs,
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

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
                Welcome back! Here's an overview of your email campaigns.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat) => (
                <Card key={stat.title}>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {stat.value.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
                <CardDescription>
                  Your latest email campaigns and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentCampaigns.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No campaigns yet. Create your first campaign to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentCampaigns.map((campaign: any) => (
                      <div
                        key={campaign.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {campaign.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {campaign.subject}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                campaign.status === 'sent'
                                  ? 'bg-green-100 text-green-800'
                                  : campaign.status === 'sending'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {campaign.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {campaign.sent_count} / {campaign.total_recipients} sent
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
