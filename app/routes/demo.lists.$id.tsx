import { json } from '@remix-run/node'
import { useLoaderData, Link, useParams } from '@remix-run/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { ArrowLeft, Users, Mail, Calendar } from 'lucide-react'

export async function loader() {
  // Mock list data for demonstration
  const mockListData = {
    'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9': {
      id: 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9',
      name: 'Newsletter Subscribers',
      description: 'General newsletter subscribers who signed up for weekly updates',
      color: '#3B82F6',
      subscribed_members: 1200,
      total_members: 1250,
      is_active: true,
      created_at: '2024-01-15T10:00:00.000Z',
      members: [
        {
          id: '1',
          email: 'john.doe@example.com',
          first_name: 'John',
          last_name: 'Doe',
          subscribed: true,
          added_at: '2024-01-15T10:00:00.000Z'
        },
        {
          id: '2',
          email: 'jane.smith@example.com',
          first_name: 'Jane',
          last_name: 'Smith',
          subscribed: true,
          added_at: '2024-01-16T09:30:00.000Z'
        },
        {
          id: '3',
          email: 'bob.wilson@example.com',
          first_name: 'Bob',
          last_name: 'Wilson',
          subscribed: false,
          added_at: '2024-01-17T14:15:00.000Z'
        },
        {
          id: '4',
          email: 'alice.brown@example.com',
          first_name: 'Alice',
          last_name: 'Brown',
          subscribed: true,
          added_at: '2024-01-18T11:45:00.000Z'
        },
        {
          id: '5',
          email: 'charlie.davis@example.com',
          first_name: 'Charlie',
          last_name: 'Davis',
          subscribed: true,
          added_at: '2024-01-19T16:20:00.000Z'
        }
      ]
    }
  }

  return json({ mockListData })
}

export default function DemoListDetail() {
  const { mockListData } = useLoaderData<typeof loader>()
  const params = useParams()
  const listId = params.id || 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9'
  const list = mockListData[listId as keyof typeof mockListData] || mockListData['ac70fb2e-53c2-46bb-9b29-50e4b695bdc9']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/demo">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Demo
                </Button>
              </Link>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                Demo Mode
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* List Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div
              className="w-6 h-6 rounded-full mr-3"
              style={{ backgroundColor: list.color }}
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{list.name}</h1>
              {list.description && (
                <p className="text-gray-600 mt-2">{list.description}</p>
              )}
            </div>
          </div>
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              list.is_active
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {list.is_active ? 'Active' : 'Inactive'}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-blue-50">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-gray-900">{list.total_members}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-green-50">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Subscribed</p>
                  <p className="text-2xl font-bold text-gray-900">{list.subscribed_members}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-purple-50">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Created</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {new Date(list.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Members List */}
        <Card>
          <CardHeader>
            <CardTitle>List Members ({list.members.length})</CardTitle>
            <CardDescription>
              Sample members in this list - in the real app, you can add, remove, and manage recipients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Added</th>
                  </tr>
                </thead>
                <tbody>
                  {list.members.map((member: any) => (
                    <tr key={member.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {member.email}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {[member.first_name, member.last_name].filter(Boolean).join(' ') || '-'}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            member.subscribed
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {member.subscribed ? 'Subscribed' : 'Unsubscribed'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        {new Date(member.added_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Demo Information */}
        <div className="mt-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                Demo Mode Information
              </h3>
              <p className="text-blue-800 text-sm mb-4">
                This is a preview of your list detail page with sample data. In the full version, you can:
              </p>
              <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                <li>Add and remove recipients from lists</li>
                <li>Import recipients from CSV files</li>
                <li>Create targeted email campaigns using these lists</li>
                <li>Track subscriber engagement and statistics</li>
                <li>Manage subscription preferences</li>
              </ul>
              <div className="mt-4">
                <Link to="/demo">
                  <Button variant="outline" className="mr-4">
                    ← Back to Dashboard
                  </Button>
                </Link>
                <Button onClick={() => window.open('/setup-demo.md', '_blank')}>
                  View Setup Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
