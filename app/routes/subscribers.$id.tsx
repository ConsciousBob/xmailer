import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Edit, Mail, Calendar, User, List } from 'lucide-react'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  const subscriberId = params.id

  if (!subscriberId) {
    throw new Response('Subscriber ID required', { status: 400 })
  }

  // Get subscriber details with list memberships
  const { data: subscriber, error } = await supabase
    .from('subscribers')
    .select(`
      *,
      list_subscribers(
        id,
        status,
        subscribed_at,
        unsubscribed_at,
        lists(id, name, color, description)
      )
    `)
    .eq('id', subscriberId)
    .eq('user_id', user.id)
    .single()

  if (error || !subscriber) {
    throw new Response('Subscriber not found', { status: 404 })
  }

  return json({ user, subscriber })
}

export default function ViewSubscriber() {
  const { user, subscriber } = useLoaderData<typeof loader>()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'subscribed':
        return 'bg-green-100 text-green-800'
      case 'unsubscribed':
        return 'bg-red-100 text-red-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Link to="/subscribers" className="mr-4">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Subscribers
                  </Button>
                </Link>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {subscriber.first_name} {subscriber.last_name}
                  </h2>
                  <p className="text-gray-600 mt-2">{subscriber.email}</p>
                </div>
              </div>
              
              <Link to={`/subscribers/${subscriber.id}/edit`}>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Subscriber
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Subscriber Information */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Subscriber Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Email Address</label>
                        <p className="text-gray-900 font-medium">{subscriber.email}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-600">Status</label>
                        <div className="mt-1">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(subscriber.status)}`}>
                            {subscriber.status}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-600">First Name</label>
                        <p className="text-gray-900">{subscriber.first_name || 'Not provided'}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-600">Last Name</label>
                        <p className="text-gray-900">{subscriber.last_name || 'Not provided'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* List Memberships */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <List className="h-5 w-5 mr-2" />
                      List Memberships
                    </CardTitle>
                    <CardDescription>
                      Lists this subscriber is a member of
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {subscriber.list_subscribers && subscriber.list_subscribers.length > 0 ? (
                      <div className="space-y-3">
                        {subscriber.list_subscribers.map((ls: any) => (
                          <div key={ls.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: ls.lists.color }}
                              />
                              <div>
                                <h4 className="font-medium text-gray-900">{ls.lists.name}</h4>
                                {ls.lists.description && (
                                  <p className="text-sm text-gray-600">{ls.lists.description}</p>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ls.status)}`}>
                                {ls.status}
                              </span>
                              {ls.subscribed_at && (
                                <p className="text-xs text-gray-500 mt-1">
                                  Joined {formatDate(ls.subscribed_at)}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <List className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p className="text-gray-600">Not subscribed to any lists</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Activity Timeline */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Activity Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Account Created</p>
                          <p className="text-xs text-gray-500">{formatDate(subscriber.created_at)}</p>
                        </div>
                      </div>

                      {subscriber.subscribed_at && (
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Subscribed</p>
                            <p className="text-xs text-gray-500">{formatDate(subscriber.subscribed_at)}</p>
                          </div>
                        </div>
                      )}

                      {subscriber.unsubscribed_at && (
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Unsubscribed</p>
                            <p className="text-xs text-gray-500">{formatDate(subscriber.unsubscribed_at)}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Last Updated</p>
                          <p className="text-xs text-gray-500">{formatDate(subscriber.updated_at)}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link to={`/subscribers/${subscriber.id}/edit`} className="block">
                        <Button variant="outline" className="w-full justify-start">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Subscriber
                        </Button>
                      </Link>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
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
