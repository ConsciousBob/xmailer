import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, List, Users, Calendar, MoreHorizontal } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  const { data: lists, error } = await supabase
    .from('lists_with_counts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Lists fetch error:', error)
    return json({ user, lists: [], error: 'Failed to load lists' })
  }

  return json({ user, lists })
}

export default function Lists() {
  const { user, lists, error } = useLoaderData<typeof loader>()

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
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Lists</h2>
                <p className="text-gray-600 mt-2">
                  Organize your subscribers into targeted lists.
                </p>
              </div>
              
              <Link to="/lists/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create List
                </Button>
              </Link>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {lists.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <List className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No lists yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create your first list to start organizing your subscribers.
                  </p>
                  <Link to="/lists/new">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First List
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lists.map((list: any) => (
                  <Card key={list.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: list.color }}
                          />
                          <CardTitle className="text-lg">{list.name}</CardTitle>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      {list.description && (
                        <CardDescription>{list.description}</CardDescription>
                      )}
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{list.subscribed_members || 0} subscribers</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{formatDate(list.created_at)}</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link to={`/lists/${list.id}`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                              View
                            </Button>
                          </Link>
                          <Link to={`/lists/${list.id}/edit`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                              Edit
                            </Button>
                          </Link>
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
