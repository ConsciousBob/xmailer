import { json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Mail, Users, Send, List, ArrowRight } from 'lucide-react'
import { Logo } from '~/components/ui/logo'

export async function loader() {
  // Mock data for demonstration
  const mockData = {
    stats: {
      totalCampaigns: 5,
      totalRecipients: 1250,
      totalSent: 4890,
      totalLists: 8
    },
    recentCampaigns: [
      {
        id: '1',
        name: 'Welcome Series',
        subject: 'Welcome to our newsletter!',
        status: 'sent',
        sent_count: 1200,
        total_recipients: 1200
      },
      {
        id: '2', 
        name: 'Product Launch',
        subject: 'Introducing our latest product',
        status: 'sending',
        sent_count: 450,
        total_recipients: 800
      }
    ],
    lists: [
      {
        id: 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9',
        name: 'Newsletter Subscribers',
        description: 'General newsletter subscribers',
        color: '#3B82F6',
        subscribed_members: 1200,
        total_members: 1250,
        created_at: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Product Updates',
        description: 'Users interested in product updates',
        color: '#10B981',
        subscribed_members: 890,
        total_members: 920,
        created_at: new Date().toISOString()
      }
    ]
  }

  return json(mockData)
}

export default function Demo() {
  const { stats, recentCampaigns, lists } = useLoaderData<typeof loader>()

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
      title: 'Lists',
      value: stats.totalLists,
      icon: List,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="lg" />
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                Demo Mode
              </span>
              <Link to="/">
                <Button variant="outline">Setup Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to xMailer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional Email Marketing Platform - Demo Mode
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm">
              <strong>Demo Mode:</strong> This is a preview of your xMailer dashboard with sample data. 
              To access full functionality, set up your Supabase database using the setup guide above.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Demo Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
              <CardDescription>
                Your latest email campaigns and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

          {/* Sample Lists */}
          <Card>
            <CardHeader>
              <CardTitle>Your Lists</CardTitle>
              <CardDescription>
                Organized subscriber lists for targeted campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lists.map((list: any) => (
                  <div key={list.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: list.color }}
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{list.name}</h4>
                          {list.description && (
                            <p className="text-sm text-gray-600">{list.description}</p>
                          )}
                        </div>
                      </div>
                      <Link 
                        to={`/demo/lists/${list.id}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <span>{list.subscribed_members} subscribers</span>
                      <span>{new Date(list.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Setup Call to Action */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to set up your real xMailer project?
              </h3>
              <p className="text-gray-600 mb-6">
                Follow the setup guide to connect your Supabase database and start sending real campaigns.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/setup-demo.md">
                  <Button>
                    View Setup Guide
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => window.open('https://supabase.com', '_blank')}>
                  Get Supabase Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
