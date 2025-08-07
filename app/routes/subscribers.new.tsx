import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Plus, UserPlus } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get user's lists for subscription options
  const { data: lists, error } = await supabase
    .from('lists')
    .select('*')
    .eq('user_id', user.id)
    .eq('is_active', true)
    .order('name')

  if (error) {
    console.error('Lists fetch error:', error)
    return json({ user, lists: [], error: 'Failed to load lists' })
  }

  return json({ user, lists })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()

  const email = formData.get('email') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const selectedLists = formData.getAll('lists') as string[]

  if (!email) {
    return json({ error: 'Email is required' }, { status: 400 })
  }

  // Check if subscriber already exists
  const { data: existingSubscriber } = await supabase
    .from('subscribers')
    .select('id')
    .eq('user_id', user.id)
    .eq('email', email)
    .single()

  if (existingSubscriber) {
    return json({ error: 'A subscriber with this email already exists' }, { status: 400 })
  }

  // Create subscriber
  const { data: subscriber, error: subscriberError } = await supabase
    .from('subscribers')
    .insert({
      user_id: user.id,
      email,
      first_name: firstName || '',
      last_name: lastName || '',
      status: 'subscribed',
      subscribed_at: new Date().toISOString(),
    })
    .select('id')
    .single()

  if (subscriberError) {
    console.error('Subscriber creation error:', subscriberError)
    return json({ error: 'Failed to create subscriber' }, { status: 500 })
  }

  // Add subscriber to selected lists
  if (selectedLists.length > 0) {
    const listSubscriptions = selectedLists.map(listId => ({
      subscriber_id: subscriber.id,
      list_id: listId,
      status: 'subscribed',
      subscribed_at: new Date().toISOString(),
    }))

    const { error: listError } = await supabase
      .from('list_subscribers')
      .insert(listSubscriptions)

    if (listError) {
      console.error('List subscription error:', listError)
      // Don't fail the whole operation, just log the error
    }
  }

  return redirect('/subscribers')
}

export default function NewSubscriber() {
  const { user, lists, error } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center mb-8">
              <Link to="/subscribers" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Subscribers
                </Button>
              </Link>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Add New Subscriber</h2>
                <p className="text-gray-600 mt-2">
                  Add a new subscriber to your mailing lists.
                </p>
              </div>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {actionData?.error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{actionData.error}</p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Subscriber Information</CardTitle>
                <CardDescription>
                  Enter the subscriber's details and select which lists they should join.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="subscriber@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        placeholder="John"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {lists.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Subscribe to Lists
                      </label>
                      <div className="space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3">
                        {lists.map((list: any) => (
                          <div key={list.id} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`list-${list.id}`}
                              name="lists"
                              value={list.id}
                              className="rounded border-gray-300"
                            />
                            <label htmlFor={`list-${list.id}`} className="text-sm text-gray-700 flex items-center">
                              <div
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: list.color }}
                              />
                              {list.name}
                              {list.description && (
                                <span className="text-gray-500 ml-2">- {list.description}</span>
                              )}
                            </label>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Select which lists this subscriber should be added to.
                      </p>
                    </div>
                  )}

                  {lists.length === 0 && (
                    <Card className="border-yellow-200 bg-yellow-50">
                      <CardContent className="p-4">
                        <p className="text-yellow-800 mb-2">
                          You don't have any lists yet.
                        </p>
                        <p className="text-yellow-700 text-sm">
                          The subscriber will be added to your general subscriber list. You can create lists later and organize your subscribers.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Adding Subscriber...' : 'Add Subscriber'}
                    </Button>
                    
                    <Link to="/subscribers" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </Form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
