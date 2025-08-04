import { useState, useEffect } from 'react'
import { Form, useActionData, useNavigation, useSearchParams } from '@remix-run/react'
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Logo } from '~/components/ui/logo'
import { supabase } from '~/lib/supabase.server'
import { createUserSession } from '~/lib/auth.server'
import { Eye, EyeOff } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  
  if (!code) {
    return redirect('/login?error=Invalid reset link')
  }
  
  return json({ code })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const code = formData.get('code') as string

  if (!password || !confirmPassword || !code) {
    return json({ error: 'All fields are required' }, { status: 400 })
  }

  if (password !== confirmPassword) {
    return json({ error: 'Passwords do not match' }, { status: 400 })
  }

  if (password.length < 6) {
    return json({ error: 'Password must be at least 6 characters' }, { status: 400 })
  }

  // Exchange the code for a session first
  const { data: sessionData, error: sessionError } = await supabase.auth.exchangeCodeForSession(code)
  
  if (sessionError || !sessionData.session) {
    return json({ error: 'Invalid or expired reset link' }, { status: 400 })
  }

  // Update the password
  const { data, error } = await supabase.auth.updateUser({
    password: password
  })

  if (error) {
    return json({ error: error.message }, { status: 400 })
  }

  // Sign in the user with the new session
  return createUserSession(
    sessionData.session.access_token,
    sessionData.session.refresh_token,
    '/dashboard?message=Password updated successfully'
  )
}

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const [searchParams] = useSearchParams()
  const isSubmitting = navigation.state === 'submitting'
  const code = searchParams.get('code')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="dark" size="lg" />
          </div>
          <CardTitle className="text-2xl">Set New Password</CardTitle>
          <CardDescription>
            Enter your new password below.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form method="post" className="space-y-4">
            <input type="hidden" name="code" value={code || ''} />
            
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="New password"
                required
                className="w-full pr-10"
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm new password"
                required
                className="w-full pr-10"
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {actionData?.error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                {actionData.error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update Password'}
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
