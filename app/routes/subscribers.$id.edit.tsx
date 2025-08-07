import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Save, UserCheck, AlertCircle } from 'lucide-react'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  const subscriberId = params.id

  if (!subscriberId) {
    throw new Response('Subscriber ID required', { status: 400 })
  }

  // Get subscriber details
  const { data: subscriber, error: subscriberError } = await supabase
    .from('subscribers')
    .select('*')
    .eq('id', subscriberId)
    .eq('user_id', user.id)
    .single()

  if (subscriberError || !subscriber) {
    console.error('Subscriber fetch error:', subscriberError)
    throw new Response('Subscriber not found', { status: 404 })
  }

  // Get subscriber's current list memberships
  const { data: currentLists, error: currentListsError } = await supabase
    .from('list_subscribers')
    .select('list_id, status')
    .eq('subscriber_id', subscriberId)

  if (currentListsError) {
    console.error('Current lists fetch error:', currentListsError)
  }

  // Get all user's lists
  const { data: allLists, error: listsError } = await supabase
    .from('lists')
    .select('*')
    .eq('user_id', user.id)
    .eq('is_active', true)
    .order('name')

  if (listsError) {
    console.error('All lists fetch error:', listsError)
    return json({ 
      user, 
      subscriber, 
      allLists: [], 
      currentListIds: [],
      error: 'Failed to load lists' 
    })
  }

  const currentListIds = currentLists?.map(cl => cl.list_id) || []

  return json({ 
    user, 
    subscriber, 
    allLists: allLists || [], 
    currentListIds,
    error: null 
  })
}

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const subscriberId = params.id
  const formData = await request.formData()

  if (!subscriberId) {
    return json({ error: 'Subscriber ID required' }, { status: 400 })
  }

  // Verify subscriber belongs to user
  const { data: existingSubscriber, error: verifyError } = await supabase
    .from('subscribers')
    .select('*')
    .eq('id', subscriberId)
    .eq('user_id', user.id)
    .single()

  if (verifyError || !existingSubscriber) {
    console.error('Subscriber verification error:', verifyError)
    return json({ error: 'Subscriber not found or access denied' }, { status: 404 })
  }

  const email = formData.get('email') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const status = formData.get('status') as string
  const selectedLists = formData.getAll('lists') as string[]

  console.log('Form data received:', {
    email,
    firstName,
    lastName,
    status,
    selectedLists
  })

  if (!email) {
    return json({ error: 'Email is required' }, { status: 400 })
  }

  // Check if email is already used by another subscriber
  const { data: emailCheck, error: emailCheckError } = await supabase
    .from('subscribers')
    .select('id')
    .eq('user_id', user.id)
    .eq('email', email)
    .neq('id', subscriberId)

  if (emailCheckError) {
    console.error('Email check error:', emailCheckError)
    return json({ error: 'Failed to validate email' }, { status: 500 })
  }

  if (emailCheck && emailCheck.length > 0) {
    return json({ error: 'Another subscriber with this email already exists' }, { status: 400 })
  }

  try {
    // Update subscriber
    const updateData: any = {
      email,
      first_name: firstName || '',
      last_name: lastName || '',
      status,
      updated_at: new Date().toISOString(),
    }

    // Handle status changes with proper timestamps
    if (status === 'subscribed' && existingSubscriber.status !== 'subscribed') {
      updateData.subscribed_at = new Date().toISOString()
      updateData.unsubscribed_at = null
    } else if (status === 'unsubscribed' && existingSubscriber.status !== 'unsubscribed') {
      updateData.unsubscribed_at = new Date().toISOString()
    }

    const { error: updateError } = await supabase
      .from('subscribers')
      .update(updateData)
      .eq('id', subscriberId)

    if (updateError) {
      console.error('Subscriber update error:', updateError)
      return json({ error: 'Failed to update subscriber: ' + updateError.message }, { status: 500 })
    }

    // Update list subscriptions
    // First, get current list subscriptions
    const { data: currentSubs } = await supabase
      .from('list_subscribers')
      .select('list_id')
      .eq('subscriber_id', subscriberId)

    const currentListIds = currentSubs?.map(cs => cs.list_id) || []

    // Remove subscriptions that are no longer selected
    const toRemove = currentListIds.filter(listId => !selectedLists.includes(listId))
    if (toRemove.length > 0) {
      const { error: removeError } = await supabase
        .from('list_subscribers')
        .delete()
        .eq('subscriber_id', subscriberId)
        .in('list_id', toRemove)

      if (removeError) {
        console.error('Remove subscriptions error:', removeError)
      }
    }

    // Add new subscriptions
    const toAdd = selectedLists.filter(listId => !currentListIds.includes(listId))
    if (toAdd.length > 0) {
      const newSubscriptions = toAdd.map(listId => ({
        subscriber_id: subscriberId,
        list_id: listId,
        status: status === 'subscribed' ? 'subscribed' : 'unsubscribed',
        subscribed_at: status === 'subscribed' ? new Date().toISOString() : null,
        unsubscribed_at: status === 'unsubscribed' ? new Date().toISOString() : null,
      }))

      const { error: addError } = await supabase
        .from('list_subscribers')
        .insert(newSubscriptions)

      if (addError) {
        console.error('Add subscriptions error:', addError)
        return json({ error: 'Failed to update list subscriptions: ' + addError.message }, { status: 500 })
      }
    }

    // Update existing subscriptions status
    const toUpdate = selectedLists.filter(listId => currentListIds.includes(listId))
    if (toUpdate.length > 0) {
      const { error: updateSubsError } = await supabase
        .from('list_subscribers')
        .update({
          status: status === 'subscribed' ? 'subscribed' : 'unsubscribed',
          subscribed_at: status === 'subscribed' ? new Date().toISOString() : null,
          unsubscribed_at: status === 'unsubscribed' ? new Date().toISOString() : null,
          updated_at: new Date().toISOString()
        })
        .eq('subscriber_id', subscriberId)
        .in('list_id', toUpdate)

      if (updateSubsError) {
        console.error('Update subscriptions error:', updateSubsError)
      }
    }

    return redirect('/subscribers')

  } catch (error) {
    console.error('Action error:', error)
    return json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

export default function EditSubscriber() {
  const { user, subscriber, allLists, currentListIds, error } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  console.log('Loader data:', { subscriber, allLists, currentListIds })

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
                <h2 className="text-3xl font-bold text-gray-900">Edit Subscriber</h2>
                <p className="text-gray-600 mt-2">
                  Update subscriber information and list memberships.
                </p>
              </div>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {actionData?.error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800">{actionData.error}</p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Subscriber Information</CardTitle>
                <CardDescription>
                  Update the subscriber's details and manage their list subscriptions.
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
                      defaultValue={subscriber.email}
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
                        defaultValue={subscriber.first_name || ''}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        defaultValue={subscriber.last_name || ''}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      defaultValue={subscriber.status}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="subscribed">Subscribed</option>
                      <option value="unsubscribed">Unsubscribed</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>

                  {allLists && allLists.length > 0 ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        List Memberships ({allLists.length} lists available)
                      </label>
                      <div className="space-y-3 max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50">
                        {allLists.map((list: any) => {
                          const isChecked = currentListIds.includes(list.id)
                          return (
                            <div key={list.id} className="flex items-center space-x-3 p-2 bg-white rounded border">
                              <input
                                type="checkbox"
                                id={`list-${list.id}`}
                                name="lists"
                                value={list.id}
                                defaultChecked={isChecked}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`list-${list.id}`} className="flex-1 text-sm text-gray-700 cursor-pointer">
                                <div className="flex items-center">
                                  <div
                                    className="w-3 h-3 rounded-full mr-3"
                                    style={{ backgroundColor: list.color }}
                                  />
                                  <div>
                                    <div className="font-medium">{list.name}</div>
                                    {list.description && (
                                      <div className="text-gray-500 text-xs">{list.description}</div>
                                    )}
                                  </div>
                                </div>
                              </label>
                              {isChecked && (
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  Current Member
                                </span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Select which lists this subscriber should be a member of.
                      </p>
                    </div>
                  ) : (
                    <Card className="border-yellow-200 bg-yellow-50">
                      <CardContent className="p-4">
                        <p className="text-yellow-800 mb-2">
                          No lists available
                        </p>
                        <p className="text-yellow-700 text-sm">
                          Create some lists first to organize your subscribers.
                        </p>
                        <Link to="/lists/new" className="inline-block mt-2">
                          <Button size="sm" variant="outline">
                            Create Your First List
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}

                  {/* Debug Info (remove in production) */}
                  {process.env.NODE_ENV === 'development' && (
                    <Card className="bg-gray-100">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Debug Info:</h4>
                        <pre className="text-xs">
                          {JSON.stringify({ 
                            subscriberId: subscriber.id,
                            currentListIds,
                            totalLists: allLists?.length || 0
                          }, null, 2)}
                        </pre>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
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
