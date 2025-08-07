import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, Users, Mail, Calendar, Search } from 'lucide-react'
import { Input } from '~/components/ui/input'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get subscribers with their list memberships
  const { data: subscribers, error } = await supabase
    .from('subscribers')
    .select(`
      *,
      list_subscribers(
        list_id,
        status,
        lists(name, color)
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Subscribers fetch error:', error)
    return json({ user, subscribers: [], error: 'Failed to load subscribers' })
  }

  return json({ user, subscribers })
}

export default function Subscribers() {
  const { user, subscribers, error } = useLoaderData<typeof loader>()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
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
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Subscribers</h2>
                <p className="text-gray-600 mt-2">
                  Manage your email subscribers and their preferences.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Link to="/subscribers/import">
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Import Subscribers
                  </Button>
                </Link>
                <Link to="/subscribers/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Subscriber
                  </Button>
                </Link>
              </div>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search subscribers by email or name..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </CardContent>
            </Card>

            {subscribers.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No subscribers yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start building your audience by adding your first subscriber.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Link to="/subscribers/new">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Subscriber
                      </Button>
                    </Link>
                    <Link to="/subscribers/import">
                      <Button variant="outline">
                        Import from CSV
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>All Subscribers ({subscribers.length})</CardTitle>
                  <CardDescription>
                    Manage and view all your email subscribers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Subscriber</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Lists</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Subscribed</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.map((subscriber: any) => (
                          <tr key={subscriber.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {subscriber.first_name} {subscriber.last_name}
                                </div>
                                <div className="text-sm text-gray-600">{subscriber.email}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(subscriber.status)}`}>
                                {subscriber.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex flex-wrap gap-1">
                                {subscriber.list_subscribers?.slice(0, 3).map((ls: any) => (
                                  <span
                                    key={ls.list_id}
                                    className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                                  >
                                    <div
                                      className="w-2 h-2 rounded-full mr-1"
                                      style={{ backgroundColor: ls.lists?.color || '#gray' }}
                                    />
                                    {ls.lists?.name || 'Unknown'}
                                  </span>
                                ))}
                                {subscriber.list_subscribers?.length > 3 && (
                                  <span className="text-xs text-gray-500">
                                    +{subscriber.list_subscribers.length - 3} more
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              {formatDate(subscriber.created_at)}
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Link to={`/subscribers/${subscriber.id}`}>
                                  <Button variant="outline" size="sm">
                                    View
                                  </Button>
                                </Link>
                                <Link to={`/subscribers/${subscriber.id}/edit`}>
                                  <Button variant="outline" size="sm">
                                    Edit
                                  </Button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
