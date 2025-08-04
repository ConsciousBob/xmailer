import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { User, Shield, Bell, Trash2 } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get user profile
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error) {
    console.error('Profile fetch error:', error)
  }

  return json({ user, profile })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const action = formData.get('_action') as string

  if (action === 'update-profile') {
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string

    // Update auth user
    const { error: authError } = await supabase.auth.updateUser({
      email,
      data: { full_name: fullName }
    })

    if (authError) {
      return json({ error: authError.message }, { status: 400 })
    }

    // Update profile
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        email,
        full_name: fullName,
        updated_at: new Date().toISOString(),
      })

    if (profileError) {
      return json({ error: 'Failed to update profile' }, { status: 500 })
    }

    return json({ success: 'Profile updated successfully' })
  }

  if (action === 'change-password') {
    const currentPassword = formData.get('currentPassword') as string
    const newPassword = formData.get('newPassword') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!currentPassword || !newPassword || !confirmPassword) {
      return json({ error: 'All password fields are required' }, { status: 400 })
    }

    if (newPassword !== confirmPassword) {
      return json({ error: 'New passwords do not match' }, { status: 400 })
    }

    if (newPassword.length < 6) {
      return json({ error: 'Password must be at least 6 characters' }, { status: 400 })
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })

    if (error) {
      return json({ error: error.message }, { status: 400 })
    }

    return json({ success: 'Password updated successfully' })
  }

  if (action === 'delete-account') {
    // In a real app, you'd want to:
    // 1. Delete all user data (campaigns, recipients, etc.)
    // 2. Cancel any subscriptions
    // 3. Send confirmation email
    // 4. Actually delete the auth user
    
    return json({ error: 'Account deletion is not implemented yet' }, { status: 400 })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

export default function Settings() {
  const { user, profile } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
              <p className="text-gray-600 mt-2">
                Manage your account settings and preferences.
              </p>
            </div>

            <div className="space-y-8">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal information and email address
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form method="post" className="space-y-4">
                    <input type="hidden" name="_action" value="update-profile" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          name="fullName"
                          defaultValue={profile?.full_name || user.user_metadata?.full_name || ''}
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          defaultValue={user.email || ''}
                          placeholder="your@email.com"
                          required
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
                      {isSubmitting ? 'Updating...' : 'Update Profile'}
                    </Button>
                  </Form>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Security
                  </CardTitle>
                  <CardDescription>
                    Change your password and manage security settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form method="post" className="space-y-4">
                    <input type="hidden" name="_action" value="change-password" />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <Input
                        name="currentPassword"
                        type="password"
                        placeholder="Enter current password"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <Input
                          name="newPassword"
                          type="password"
                          placeholder="Enter new password"
                          minLength={6}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <Input
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm new password"
                          minLength={6}
                        />
                      </div>
                    </div>

                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Updating...' : 'Change Password'}
                    </Button>
                  </Form>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Configure your email notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Campaign Notifications</h4>
                        <p className="text-sm text-gray-600">Get notified when campaigns are sent</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">System Updates</h4>
                        <p className="text-sm text-gray-600">Receive updates about new features</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Marketing Emails</h4>
                        <p className="text-sm text-gray-600">Receive tips and best practices</p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Trash2 className="h-5 w-5 mr-2" />
                    Danger Zone
                  </CardTitle>
                  <CardDescription>
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-red-800 mb-2">
                      Delete Account
                    </h4>
                    <p className="text-sm text-red-600 mb-4">
                      Once you delete your account, there is no going back. This will permanently 
                      delete your account, campaigns, recipients, and all associated data.
                    </p>
                    <Form method="post" className="inline">
                      <input type="hidden" name="_action" value="delete-account" />
                      <Button
                        type="submit"
                        variant="destructive"
                        size="sm"
                        disabled={isSubmitting}
                      >
                        Delete Account
                      </Button>
                    </Form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
