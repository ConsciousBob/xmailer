import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, Mail, Calendar, Users } from 'lucide-react'
import { formatDate } from '~/lib/utils'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  const { data: campaigns, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Failed to load campaigns')
  }

  return json({ user, campaigns })
}

export default function Campaigns() {
  const { user, campaigns } = useLoaderData<typeof loader>()

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Campaigns</h2>
                <p className="text-gray-600 mt-2">
                  Manage your email campaigns and track their performance.
                </p>
              </div>
              
              <Link to="/campaigns/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </Button>
              </Link>
            </div>

            {campaigns.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Mail className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No campaigns yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create your first email campaign to start reaching your audience.
                  </p>
                  <Link to="/campaigns/new">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Campaign
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {campaigns.map((campaign: any) => (
                  <Card key={campaign.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {campaign.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {campaign.subject}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 text-sm rounded-full ${
                              campaign.status === 'sent'
                                ? 'bg-green-100 text-green-800'
                                : campaign.status === 'sending'
                                ? 'bg-blue-100 text-blue-800'
                                : campaign.status === 'scheduled'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span>
                            {campaign.sent_count} / {campaign.total_recipients} sent
                          </span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Created {formatDate(campaign.created_at)}</span>
                        </div>
                        
                        {campaign.scheduled_at && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Scheduled {formatDate(campaign.scheduled_at)}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${
                                campaign.total_recipients > 0
                                  ? (campaign.sent_count / campaign.total_recipients) * 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link to={`/campaigns/${campaign.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                          {campaign.status === 'draft' && (
                            <Link to={`/campaigns/${campaign.id}/edit`}>
                              <Button size="sm">
                                Edit
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
