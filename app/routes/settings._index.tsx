import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Settings, Server, User, Bell, Shield, CreditCard } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  return json({ user })
}

export default function SettingsIndex() {
  const { user } = useLoaderData<typeof loader>()

  const settingsOptions = [
    {
      title: 'SMTP Configuration',
      description: 'Configure your email sending settings and SMTP servers',
      icon: Server,
      href: '/settings/smtp',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Profile Settings',
      description: 'Update your personal information and account details',
      icon: User,
      href: '/settings/profile',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Notifications',
      description: 'Manage your notification preferences and alerts',
      icon: Bell,
      href: '/settings/notifications',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Security',
      description: 'Password, two-factor authentication, and security settings',
      icon: Shield,
      href: '/settings/security',
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Billing',
      description: 'Manage your subscription and billing information',
      icon: CreditCard,
      href: '/settings/billing',
      color: 'bg-purple-50 text-purple-600'
    }
  ]

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {settingsOptions.map((option) => (
                <Link key={option.href} to={option.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${option.color}`}>
                          <option.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{option.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {option.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Account Information */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Your current account details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Account Created</label>
                    <p className="text-gray-900">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
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
