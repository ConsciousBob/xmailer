import { useState } from 'react'
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useLoaderData, useNavigation, Link } from '@remix-run/react'
import { requireAuth } from '~/lib/auth.server'
import { supabase } from '~/lib/supabase.server'
import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowLeft, Upload, FileText, AlertCircle, CheckCircle, Users } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAuth(request)
  
  // Get user's lists for selection
  const { data: lists, error } = await supabase
    .from('lists')
    .select('id, name, color')
    .eq('user_id', user.id)
    .eq('is_active', true)
    .order('name')

  if (error) {
    console.error('Lists fetch error:', error)
    return json({ user, lists: [] })
  }

  return json({ user, lists })
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAuth(request)
  const formData = await request.formData()
  const csvData = formData.get('csvData') as string
  const selectedListId = formData.get('listId') as string
  const createNewList = formData.get('createNewList') === 'on'
  const newListName = formData.get('newListName') as string

  if (!csvData) {
    return json({ error: 'CSV data is required' }, { status: 400 })
  }

  try {
    // Parse CSV data
    const lines = csvData.trim().split('\n')
    if (lines.length < 2) {
      return json({ error: 'CSV must have at least a header row and one data row' }, { status: 400 })
    }

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
    const emailIndex = headers.findIndex(h => h.includes('email'))
    const firstNameIndex = headers.findIndex(h => h.includes('first') && h.includes('name'))
    const lastNameIndex = headers.findIndex(h => h.includes('last') && h.includes('name'))

    if (emailIndex === -1) {
      return json({ error: 'CSV must contain an email column' }, { status: 400 })
    }

    // Determine target list
    let targetListId = selectedListId

    if (createNewList && newListName) {
      const { data: newList, error: listError } = await supabase
        .from('lists')
        .insert({
          user_id: user.id,
          name: newListName,
          description: `Imported from CSV on ${new Date().toLocaleDateString()}`,
          color: '#3B82F6',
          is_active: true,
        })
        .select('id')
        .single()

      if (listError) {
        return json({ error: 'Failed to create new list' }, { status: 500 })
      }

      targetListId = newList.id
    }

    if (!targetListId) {
      return json({ error: 'Please select a list or create a new one' }, { status: 400 })
    }

    // Process CSV rows
    const recipients = []
    const errors = []
    const duplicates = []

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',').map(cell => cell.trim().replace(/"/g, ''))
      const email = row[emailIndex]?.toLowerCase()

      if (!email || !email.includes('@')) {
        errors.push(`Row ${i + 1}: Invalid email address`)
        continue
      }

      const firstName = firstNameIndex !== -1 ? row[firstNameIndex] : null
      const lastName = lastNameIndex !== -1 ? row[lastNameIndex] : null

      recipients.push({
        email,
        first_name: firstName || null,
        last_name: lastName || null,
        user_id: user.id,
        subscribed: true,
      })
    }

    if (recipients.length === 0) {
      return json({ error: 'No valid recipients found in CSV' }, { status: 400 })
    }

    // Insert recipients (ignore duplicates)
    const { data: insertedRecipients, error: recipientError } = await supabase
      .from('recipients')
      .upsert(recipients, { 
        onConflict: 'user_id,email',
        ignoreDuplicates: true 
      })
      .select('id, email')

    if (recipientError) {
      console.error('Recipient insert error:', recipientError)
      return json({ error: 'Failed to import recipients' }, { status: 500 })
    }

    // Add recipients to the selected list
    if (insertedRecipients && insertedRecipients.length > 0) {
      const memberships = insertedRecipients.map(recipient => ({
        list_id: targetListId,
        recipient_id: recipient.id,
      }))

      const { error: membershipError } = await supabase
        .from('list_memberships')
        .upsert(memberships, { 
          onConflict: 'list_id,recipient_id',
          ignoreDuplicates: true 
        })

      if (membershipError) {
        console.error('Membership insert error:', membershipError)
        return json({ error: 'Recipients imported but failed to add to list' }, { status: 500 })
      }
    }

    const importedCount = insertedRecipients?.length || 0
    const totalRows = recipients.length
    const duplicateCount = totalRows - importedCount

    return json({
      success: `Successfully imported ${importedCount} recipients${duplicateCount > 0 ? ` (${duplicateCount} duplicates skipped)` : ''}`,
      imported: importedCount,
      duplicates: duplicateCount,
      errors: errors.length > 0 ? errors : null,
    })

  } catch (error) {
    console.error('CSV import error:', error)
    return json({ error: 'Failed to process CSV file' }, { status: 500 })
  }
}

export default function ImportCSV() {
  const { user, lists } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const [csvData, setCsvData] = useState('')
  const [createNewList, setCreateNewList] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'text/csv') {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCsvData(e.target?.result as string)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Link to="/lists" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Lists
                </Button>
              </Link>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Import Recipients from CSV</h2>
                <p className="text-gray-600 mt-2">
                  Upload a CSV file to bulk import recipients into your lists.
                </p>
              </div>
            </div>

            {/* CSV Format Guide */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  CSV Format Requirements
                </CardTitle>
                <CardDescription>
                  Your CSV file should follow this format
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <code className="text-sm">
                    email,first_name,last_name<br/>
                    john@example.com,John,Doe<br/>
                    jane@example.com,Jane,Smith<br/>
                    bob@example.com,Bob,Johnson
                  </code>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Required Columns:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>email</strong> - Must be a valid email address</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Optional Columns:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• <strong>first_name</strong> - Recipient's first name</li>
                      <li>• <strong>last_name</strong> - Recipient's last name</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Import Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload CSV File
                </CardTitle>
                <CardDescription>
                  Select your CSV file and choose the target list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form method="post" className="space-y-6">
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CSV File
                    </label>
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleFileUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Upload a CSV file with your recipient data
                    </p>
                  </div>

                  {/* CSV Data Preview */}
                  {csvData && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CSV Preview (first 5 lines)
                      </label>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono">
                        {csvData.split('\n').slice(0, 5).map((line, index) => (
                          <div key={index} className={index === 0 ? 'font-bold' : ''}>
                            {line}
                          </div>
                        ))}
                        {csvData.split('\n').length > 5 && (
                          <div className="text-gray-500 mt-2">
                            ... and {csvData.split('\n').length - 5} more rows
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <input type="hidden" name="csvData" value={csvData} />

                  {/* List Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target List
                    </label>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="createNewList"
                          name="createNewList"
                          checked={createNewList}
                          onChange={(e) => setCreateNewList(e.target.checked)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="createNewList" className="ml-2 text-sm text-gray-700">
                          Create new list
                        </label>
                      </div>

                      {createNewList ? (
                        <Input
                          name="newListName"
                          placeholder="Enter new list name"
                          required={createNewList}
                          className="w-full"
                        />
                      ) : (
                        <select
                          name="listId"
                          required={!createNewList}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select existing list</option>
                          {lists.map((list: any) => (
                            <option key={list.id} value={list.id}>
                              {list.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  {actionData?.error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <div className="flex">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Import Failed</h3>
                          <p className="text-sm text-red-700 mt-1">{actionData.error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {actionData?.success && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <div className="flex">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Import Successful</h3>
                          <p className="text-sm text-green-700 mt-1">{actionData.success}</p>
                          
                          {actionData.errors && actionData.errors.length > 0 && (
                            <div className="mt-3">
                              <h4 className="text-sm font-medium text-orange-800">Warnings:</h4>
                              <ul className="text-sm text-orange-700 mt-1 list-disc list-inside">
                                {actionData.errors.map((error: string, index: number) => (
                                  <li key={index}>{error}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !csvData}
                      className="flex-1"
                    >
                      {isSubmitting ? 'Importing...' : 'Import Recipients'}
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
