import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, Users, Trash2, Upload, Download } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  const { data: subscribers, error } = await supabase
    .from('subscribers')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Failed to load subscribers')
  }

  const stats = {
    total: subscribers.length,
    subscribed: subscribers.filter(s => s.status === 'subscribed').length,
    unsubscribed: subscribers.filter(s => s.status === 'unsubscribed').length,
  }

  return json({ user, subscribers, stats })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (action === 'add') {
    const email = formData.get('email') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const tags = formData.get('tags') as string

    if (!email) {
      return json({ error: 'Email is required' }, { status: 400 })
    }

    const { error } = await supabase.from('subscribers').insert({
      user_id: user.id,
      email,
      first_name: firstName || null,
      last_name: lastName || null,
      status: 'subscribed',
    })

    if (error) {
      if (error.code === '23505') {
        return json({ error: 'Email already exists' }, { status: 400 })
      }
      return json({ error: 'Failed to add recipient' }, { status: 500 })
    }

    return json({ success: true })
  }

  if (action === 'delete') {
    const subscriberId = formData.get('subscriberId') as string
    
    const { error } = await supabase
      .from('subscribers')
      .delete()
      .eq('id', subscriberId)
      .eq('user_id', user.id)

    if (error) {
      return json({ error: 'Failed to delete recipient' }, { status: 500 })
    }

    return json({ success: true })
  }

  if (action === 'toggle-subscription') {
    const subscriberId = formData.get('subscriberId') as string
    const currentStatus = formData.get('status') as string
    
    const newStatus = currentStatus === 'subscribed' ? 'unsubscribed' : 'subscribed'
    
    const { error } = await supabase
      .from('subscribers')
      .update({ 
        status: newStatus, 
        unsubscribed_at: newStatus === 'unsubscribed' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString() 
      })
      .eq('id', subscriberId)
      .eq('user_id', user.id)

    if (error) {
      return json({ error: 'Failed to update subscription' }, { status: 500 })
    }

    return json({ success: true })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

export default function Recipients() {
  const { user, subscribers, stats } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Recipients</h2>
                <p className="text-gray-600 mt-2">
                  Manage your email recipient lists and subscriptions.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import CSV
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Recipients</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
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
                      <p className="text-2xl font-bold text-gray-900">{stats.subscribed}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-red-50">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.unsubscribed}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Add New Recipient */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Recipient
                </CardTitle>
                <CardDescription>
                  Add individual recipients to your email list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-4">
                  <input type="hidden" name="_action" value="add" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        placeholder="Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (comma-separated)
                      </label>
                      <Input
                        name="tags"
                        placeholder="newsletter, customer"
                      />
                    </div>
                  </div>

                  {actionData?.error && (
                    <div className="text-red-600 text-sm">
                      {actionData.error}
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Recipient'}
                  </Button>
                </Form>
              </CardContent>
            </Card>

            {/* Recipients List */}
            <Card>
              <CardHeader>
                <CardTitle>All Recipients</CardTitle>
                <CardDescription>
                  Manage your email recipients and their subscription status
                </CardDescription>
              </CardHeader>
              <CardContent>
                                    {subscribers.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-600">
                      No recipients yet. Add some recipients to get started.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Tags</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.map((subscriber: any) => (
                          <tr key={subscriber.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm text-gray-900">
                              {subscriber.email}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              {[subscriber.first_name, subscriber.last_name].filter(Boolean).join(' ') || '-'}
                            </td>
                            <td className="py-3 px-4 text-sm">
                              <span className="text-gray-400">-</span>
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
                            <td className="py-3 px-4 text-sm">
                              <div className="flex space-x-2">
                                <Form method="post" className="inline">
                                  <input type="hidden" name="_action" value="toggle-subscription" />
                                  <input type="hidden" name="subscriberId" value={subscriber.id} />
                                  <input type="hidden" name="status" value={subscriber.status} />
                                  <Button
                                    type="submit"
                                    variant="outline"
                                    size="sm"
                                  >
                                    {subscriber.status === 'subscribed' ? 'Unsubscribe' : 'Subscribe'}
                                  </Button>
                                </Form>
                                
                                <Form method="post" className="inline">
                                  <input type="hidden" name="_action" value="delete" />
                                  <input type="hidden" name="subscriberId" value={subscriber.id} />
                                  <Button
                                    type="submit"
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 hover:text-red-700"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </Form>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
