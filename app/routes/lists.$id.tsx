import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Users, Plus, Trash2, UserMinus, UserPlus, Search } from 'lucide-react'
import { useState } from 'react'

export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    const user = await requireAuth(request)
    const listId = params.id

    if (!listId) {
      throw new Response('List not found', { status: 404 })
    }

    // Get list details
    const { data: list, error: listError } = await supabase
      .from('lists_with_counts')
      .select('*')
      .eq('id', listId)
      .eq('user_id', user.id)
      .single()

    if (listError) {
      console.error('List fetch error:', listError)
      return json({ 
        user, 
        list: null, 
        members: [], 
        availableRecipients: [], 
        error: 'Database not configured. Please set up your Supabase database.' 
      })
    }

    if (!list) {
      throw new Response('List not found', { status: 404 })
    }

      // Get list members
    const { data: members, error: membersError } = await supabase
      .from('list_memberships')
      .select(`
        id,
        added_at,
        subscribers (
          id,
          email,
          first_name,
          last_name,
          status,
          created_at
        )
      `)
      .eq('list_id', listId)
      .order('added_at', { ascending: false })

  if (membersError) {
    console.error('Members fetch error:', membersError)
    return json({ user, list, members: [], availableRecipients: [], error: 'Failed to load list members' })
  }

  // Ensure members is an array
  const membersList = members || []

  // Get all subscribers not in this list for adding
  const memberIds = membersList.map(m => m.subscribers?.id).filter(Boolean)
  const { data: availableRecipients, error: availableError } = await supabase
    .from('subscribers')
    .select('id, email, first_name, last_name, status')
    .eq('user_id', user.id)
    .not('id', 'in', `(${memberIds.join(',') || 'null'})`)
    .eq('status', 'subscribed')
    .order('email')

    return json({ 
      user, 
      list, 
      members: membersList, 
      availableRecipients: availableRecipients || [],
      error: availableError ? 'Failed to load available recipients' : null 
    })
  } catch (error) {
    console.error('Loader error:', error)
    // If it's a Response (like 404), re-throw it
    if (error instanceof Response) {
      throw error
    }
    // Otherwise, return a generic error page
    return json({ 
      user: null, 
      list: null, 
      members: [], 
      availableRecipients: [], 
      error: 'Unable to connect to database. Please check your configuration.' 
    })
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const listId = params.id
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (!listId) {
    return json({ error: 'List ID is required' }, { status: 400 })
  }

  if (action === 'add-recipient') {
    const subscriberId = formData.get('subscriberId') as string
    
    if (!subscriberId) {
      return json({ error: 'Subscriber ID is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('list_memberships')
      .insert({
        list_id: listId,
        subscriber_id: subscriberId,
      })

    if (error) {
      if (error.code === '23505') {
        return json({ error: 'Recipient is already in this list' }, { status: 400 })
      }
      console.error('Add recipient error:', error)
      return json({ error: 'Failed to add recipient to list' }, { status: 500 })
    }

    return json({ success: 'Recipient added to list successfully' })
  }

  if (action === 'remove-recipient') {
    const membershipId = formData.get('membershipId') as string
    
    if (!membershipId) {
      return json({ error: 'Membership ID is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('list_memberships')
      .delete()
      .eq('id', membershipId)
      .eq('list_id', listId)

    if (error) {
      console.error('Remove recipient error:', error)
      return json({ error: 'Failed to remove recipient from list' }, { status: 500 })
    }

    return json({ success: 'Recipient removed from list successfully' })
  }

  if (action === 'add-by-email') {
    const email = formData.get('email') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string

    if (!email) {
      return json({ error: 'Email is required' }, { status: 400 })
    }

    // First, create or get the subscriber
    const { data: subscriber, error: subscriberError } = await supabase
      .from('subscribers')
      .upsert({
        user_id: user.id,
        email: email.toLowerCase(),
        first_name: firstName || null,
        last_name: lastName || null,
        status: 'subscribed',
      }, {
        onConflict: 'user_id,email'
      })
      .select('id')
      .single()

    if (subscriberError) {
      console.error('Subscriber upsert error:', subscriberError)
      return json({ error: 'Failed to create subscriber' }, { status: 500 })
    }

    // Then add to list
    const { error: membershipError } = await supabase
      .from('list_memberships')
      .insert({
        list_id: listId,
        subscriber_id: subscriber.id,
      })

    if (membershipError) {
      if (membershipError.code === '23505') {
        return json({ error: 'Recipient is already in this list' }, { status: 400 })
      }
      console.error('Add membership error:', membershipError)
      return json({ error: 'Failed to add recipient to list' }, { status: 500 })
    }

    return json({ success: 'Recipient added to list successfully' })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

export default function ListDetail() {
  const { user, list, members, availableRecipients, error } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const [searchTerm, setSearchTerm] = useState('')

  // Ensure we have arrays to work with
  const membersList = members || []
  const availableList = availableRecipients || []

  // If there's no list data due to database error, show error page
  if (error && !list) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header user={user || { id: '', email: '', full_name: 'Guest' }} />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Database Configuration Required</h2>
                  <p className="text-red-800 mb-6">{error}</p>
                  <div className="space-y-4">
                    <p className="text-sm text-red-700">
                      To access this functionality, you need to set up your Supabase database.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Link to="/demo">
                        <Button variant="outline">
                          View Demo Version
                        </Button>
                      </Link>
                      <Button onClick={() => window.open('/setup-demo.md', '_blank')}>
                        Setup Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const filteredMembers = membersList.filter((member: any) => {
    if (!member || !member.subscribers) return false
    const subscriber = member.subscribers
    const fullName = `${subscriber.first_name || ''} ${subscriber.last_name || ''}`.trim()
    const searchLower = searchTerm.toLowerCase()
    
    return (
      subscriber.email?.toLowerCase().includes(searchLower) ||
      fullName.toLowerCase().includes(searchLower)
    )
  })

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Link to="/lists" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Lists
                </Button>
              </Link>
              <div className="flex-1">
                              <div className="flex items-center">
                <div
                  className="w-6 h-6 rounded-full mr-3"
                  style={{ backgroundColor: list?.color || '#3B82F6' }}
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{list?.name || 'List'}</h2>
                  {list?.description && (
                    <p className="text-gray-600 mt-2">{list.description}</p>
                  )}
                </div>
              </div>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    list?.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {list?.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            {error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{error}</p>
                </CardContent>
              </Card>
            )}

            {/* List Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Members</p>
                      <p className="text-2xl font-bold text-gray-900">{list?.total_members || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-green-50">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Subscribed</p>
                      <p className="text-2xl font-bold text-gray-900">{list?.subscribed_members || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Available to Add</p>
                      <p className="text-2xl font-bold text-gray-900">{availableList.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Add Recipients */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Plus className="h-5 w-5 mr-2" />
                      Add Recipients
                    </CardTitle>
                    <CardDescription>
                      Add new recipients to this list
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Add by Email */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Add New Recipient</h4>
                      <Form method="post" className="space-y-3">
                        <input type="hidden" name="_action" value="add-by-email" />
                        
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email address"
                          required
                        />
                        
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            name="firstName"
                            placeholder="First name"
                          />
                          <Input
                            name="lastName"
                            placeholder="Last name"
                          />
                        </div>

                        <Button type="submit" size="sm" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? 'Adding...' : 'Add Recipient'}
                        </Button>
                      </Form>
                    </div>

                    {/* Add Existing Recipients */}
                    {availableList.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Add Existing Recipients</h4>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                          {availableList.slice(0, 10).map((recipient: any) => (
                            <div key={recipient.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {recipient.email}
                                </p>
                                {(recipient.first_name || recipient.last_name) && (
                                  <p className="text-xs text-gray-500">
                                    {[recipient.first_name, recipient.last_name].filter(Boolean).join(' ')}
                                  </p>
                                )}
                              </div>
                              <Form method="post" className="inline">
                                <input type="hidden" name="_action" value="add-recipient" />
                                <input type="hidden" name="subscriberId" value={recipient.id} />
                                <Button type="submit" size="sm" variant="outline" disabled={isSubmitting}>
                                  <UserPlus className="h-3 w-3" />
                                </Button>
                              </Form>
                            </div>
                          ))}
                          {availableList.length > 10 && (
                            <p className="text-xs text-gray-500 text-center">
                              And {availableList.length - 10} more recipients...
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {actionData?.error && (
                      <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                        {actionData.error}
                      </div>
                    )}

                    {actionData?.success && (
                      <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">
                        {actionData.success}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* List Members */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>List Members</CardTitle>
                    <CardDescription>
                      Manage recipients in this list
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Search */}
                    <div className="mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search members..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {filteredMembers.length === 0 ? (
                      <div className="text-center py-8">
                        <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p className="text-gray-600">
                          {searchTerm ? 'No members match your search.' : 'No members in this list yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Added</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredMembers.map((member: any) => {
                              const subscriber = member.subscribers
                              return (
                                <tr key={member.id} className="border-b hover:bg-gray-50">
                                  <td className="py-3 px-4 text-sm text-gray-900">
                                    {subscriber.email}
                                  </td>
                                  <td className="py-3 px-4 text-sm text-gray-600">
                                    {[subscriber.first_name, subscriber.last_name].filter(Boolean).join(' ') || '-'}
                                  </td>
                                  <td className="py-3 px-4 text-sm">
                                    <span
                                      className={`px-2 py-1 text-xs rounded-full ${
                                        subscriber.status === 'subscribed'
                                          ? 'bg-green-100 text-green-800'
                                          : 'bg-red-100 text-red-800'
                                      }`}
                                    >
                                      {subscriber.status === 'subscribed' ? 'Subscribed' : 'Unsubscribed'}
                                    </span>
                                  </td>
                                  <td className="py-3 px-4 text-sm text-gray-500">
                                    {new Date(member.added_at).toLocaleDateString()}
                                  </td>
                                  <td className="py-3 px-4 text-sm">
                                    <Form method="post" className="inline">
                                      <input type="hidden" name="_action" value="remove-recipient" />
                                      <input type="hidden" name="membershipId" value={member.id} />
                                      <Button
                                        type="submit"
                                        variant="outline"
                                        size="sm"
                                        className="text-red-600 hover:text-red-700"
                                        disabled={isSubmitting}
                                        onClick={(e) => {
                                          if (!confirm('Remove this recipient from the list?')) {
                                            e.preventDefault()
                                          }
                                        }}
                                      >
                                        <UserMinus className="h-4 w-4" />
                                      </Button>
                                    </Form>
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
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
