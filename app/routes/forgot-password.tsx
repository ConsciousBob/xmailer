import { useState } from 'react'
import { Form, useActionData, useNavigation, Link } from '@remix-run/react'
import { ActionFunctionArgs, json } from '@remix-run/node'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Logo } from '~/components/ui/logo'
import { supabase } from '~/lib/supabase.server'
import { ArrowLeft } from 'lucide-react'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string

  if (!email) {
    return json({ error: 'Email is required' }, { status: 400 })
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${new URL(request.url).origin}/reset-password`,
  })

  if (error) {
    return json({ error: error.message }, { status: 400 })
  }

  return json({ 
    message: 'Check your email for a password reset link.',
    email 
  })
}

export default function ForgotPassword() {
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="dark" size="lg" />
          </div>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form method="post" className="space-y-4">
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full"
                defaultValue={actionData?.email || ''}
              />
            </div>

            {actionData?.error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                {actionData.error}
              </div>
            )}

            {actionData?.message && (
              <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-md">
                {actionData.message}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </Form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
