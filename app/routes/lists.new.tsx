import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Plus, List } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  return json({ user })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()

  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const color = formData.get('color') as string

  if (!name) {
    return json({ error: 'List name is required' }, { status: 400 })
  }

  // Check if list name already exists for this user
  const { data: existingList } = await supabase
    .from('lists')
    .select('id')
    .eq('user_id', user.id)
    .eq('name', name)
    .single()

  if (existingList) {
    return json({ error: 'A list with this name already exists' }, { status: 400 })
  }

  // Create list
  const { error } = await supabase
    .from('lists')
    .insert({
      user_id: user.id,
      name,
      description: description || '',
      color: color || '#3B82F6',
      is_active: true,
    })

  if (error) {
    console.error('List creation error:', error)
    return json({ error: 'Failed to create list' }, { status: 500 })
  }

  return redirect('/lists')
}

const colorOptions = [
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Green', value: '#10B981' },
  { name: 'Purple', value: '#8B5CF6' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Orange', value: '#F59E0B' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Indigo', value: '#6366F1' },
  { name: 'Teal', value: '#14B8A6' },
]

export default function NewList() {
  const { user } = useLoaderData<typeof loader>()
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
              <Link to="/lists" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Lists
                </Button>
              </Link>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Create New List</h2>
                <p className="text-gray-600 mt-2">
                  Create a new list to organize your subscribers.
                </p>
              </div>
            </div>

            {actionData?.error && (
              <Card className="mb-6 border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-800">{actionData.error}</p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>List Information</CardTitle>
                <CardDescription>
                  Enter the details for your new subscriber list.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      List Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="e.g., Newsletter Subscribers, VIP Customers"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <Textarea
                      name="description"
                      placeholder="Describe what this list is for..."
                      className="w-full"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      List Color
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {colorOptions.map((color) => (
                        <label key={color.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="color"
                            value={color.value}
                            defaultChecked={color.value === '#3B82F6'}
                            className="sr-only"
                          />
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center"
                            style={{ backgroundColor: color.value }}
                          >
                            <div className="w-4 h-4 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                          </div>
                          <span className="text-sm text-gray-700">{color.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      <List className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Creating List...' : 'Create List'}
                    </Button>
                    
                    <Link to="/lists" className="flex-1">
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
