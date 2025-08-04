import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus, List, Users, Trash2, Edit, Eye } from 'lucide-react'

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

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (action === 'create') {
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const color = formData.get('color') as string

    if (!name) {
      return json({ error: 'List name is required' }, { status: 400 })
    }

    const { error } = await supabase.from('lists').insert({
      user_id: user.id,
      name,
      description: description || null,
      color: color || '#3B82F6',
      is_active: true,
    })

    if (error) {
      if (error.code === '23505') {
        return json({ error: 'A list with this name already exists' }, { status: 400 })
      }
      console.error('List creation error:', error)
      return json({ error: 'Failed to create list' }, { status: 500 })
    }

    return json({ success: 'List created successfully' })
  }

  if (action === 'delete') {
    const listId = formData.get('listId') as string
    
    if (!listId) {
      return json({ error: 'List ID is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('lists')
      .delete()
      .eq('id', listId)
      .eq('user_id', user.id)

    if (error) {
      console.error('List deletion error:', error)
      return json({ error: 'Failed to delete list' }, { status: 500 })
    }

    return json({ success: 'List deleted successfully' })
  }

  if (action === 'toggle') {
    const listId = formData.get('listId') as string
    const isActive = formData.get('isActive') === 'true'
    
    if (!listId) {
      return json({ error: 'List ID is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('lists')
      .update({ 
        is_active: !isActive, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', listId)
      .eq('user_id', user.id)

    if (error) {
      console.error('List toggle error:', error)
      return json({ error: 'Failed to update list' }, { status: 500 })
    }

    return json({ success: `List ${!isActive ? 'activated' : 'deactivated'} successfully` })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

const predefinedColors = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#F97316', // Orange
  '#06B6D4', // Cyan
  '#84CC16', // Lime
  '#EC4899', // Pink
  '#6B7280', // Gray
]

export default function Lists() {
  const { user, lists, error } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  const totalLists = lists.length
  const activeLists = lists.filter((list: any) => list.is_active).length
  const totalMembers = lists.reduce((sum: number, list: any) => sum + (list.subscribed_members || 0), 0)

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
                  Organize your recipients into targeted lists for better campaign management.
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

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <List className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Lists</p>
                      <p className="text-2xl font-bold text-gray-900">{totalLists}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-green-50">
                      <List className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Lists</p>
                      <p className="text-2xl font-bold text-gray-900">{activeLists}</p>
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
                      <p className="text-sm font-medium text-gray-600">Total Members</p>
                      <p className="text-2xl font-bold text-gray-900">{totalMembers}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Create New List */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New List
                </CardTitle>
                <CardDescription>
                  Create a new list to organize your recipients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-4">
                  <input type="hidden" name="_action" value="create" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        List Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="e.g., Newsletter Subscribers"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color
                      </label>
                      <div className="flex space-x-2">
                        {predefinedColors.map((color) => (
                          <label key={color} className="cursor-pointer">
                            <input
                              type="radio"
                              name="color"
                              value={color}
                              defaultChecked={color === '#3B82F6'}
                              className="sr-only"
                            />
                            <div
                              className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                              style={{ backgroundColor: color }}
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <Input
                        name="description"
                        placeholder="Optional description for this list"
                        className="w-full"
                      />
                    </div>
                  </div>

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

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating...' : 'Create List'}
                  </Button>
                </Form>
              </CardContent>
            </Card>

            {/* Lists Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Your Lists</h3>
              
              {lists.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <List className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No lists yet
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Create your first list above to start organizing your recipients.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lists.map((list: any) => (
                    <Card key={list.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div
                              className="w-4 h-4 rounded-full mr-3"
                              style={{ backgroundColor: list.color }}
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{list.name}</h4>