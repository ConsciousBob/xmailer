import { useState, useEffect } from 'react'
import { Form, useActionData, useNavigation, useLoaderData } from '@remix-run/react'
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Logo } from '~/components/ui/logo'
import { supabase } from '~/lib/supabase.server'
import { createUserSession, getUser } from '~/lib/auth.server'
import { Eye, EyeOff } from 'lucide-react'

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request)
  
  if (user) {
    return redirect('/dashboard')
  }
  
  return json({
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    }
  })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const action = formData.get('_action') as string

  if (!email || !password) {
    return json({ error: 'Email and password are required' }, { status: 400 })
  }

  if (action === 'login') {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return json({ error: error.message }, { status: 400 })
    }

    if (!data.session) {
      return json({ error: 'Failed to create session' }, { status: 400 })
    }

    // Create or update user profile
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: data.user.id,
        email: data.user.email!,
        full_name: data.user.user_metadata?.full_name || null,
        updated_at: new Date().toISOString(),
      })

    if (profileError) {
      console.error('Profile creation error:', profileError)
    }

    return createUserSession(
      data.session.access_token,
      data.session.refresh_token,
      '/dashboard'
    )
  }

  if (action === 'signup') {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${new URL(request.url).origin}/auth/callback`,
      },
    })

    if (error) {
      return json({ error: error.message }, { status: 400 })
    }

    if (data.user && !data.session) {
      return json({ 
        message: 'Check your email for a verification link before signing in.',
        showResend: true,
        email 
      })
    }

    if (data.session) {
      // Auto sign-in after signup (if email confirmation is disabled)
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user.id,
          email: data.user.email!,
          full_name: data.user.user_metadata?.full_name || null,
        })

      if (profileError) {
        console.error('Profile creation error:', profileError)
      }

      return createUserSession(
        data.session.access_token,
        data.session.refresh_token,
        '/dashboard'
      )
    }
  }

  if (action === 'resend') {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${new URL(request.url).origin}/auth/callback`,
      },
    })

    if (error) {
      return json({ error: error.message }, { status: 400 })
    }

    return json({ message: 'Verification email sent! Check your inbox.' })
  }

  return json({ error: 'Invalid action' }, { status: 400 })
}

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const actionData = useActionData<typeof action>()
  const { env } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  // Make env variables available to client-side code
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.ENV = env
    }
  }, [env])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="dark" size="lg" />
          </div>
          <CardTitle className="text-2xl">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? 'Sign up to start sending bulk emails' 
              : 'Sign in to your email autoresponder account'
            }
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
            
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
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

            {actionData?.error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                {actionData.error}
              </div>
            )}

            {actionData?.message && (
              <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-md">
                {actionData.message}
                {actionData.showResend && (
                  <div className="mt-2">
                    <Button
                      type="submit"
                      name="_action"
                      value="resend"
                      variant="outline"
                      size="sm"
                      disabled={isSubmitting}
                    >
                      Resend verification email
                    </Button>
                  </div>
                )}
              </div>
            )}

            <Button
              type="submit"
              name="_action"
              value={isSignUp ? 'signup' : 'login'}
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? 'Processing...' 
                : isSignUp 
                  ? 'Create Account' 
                  : 'Sign In'
              }
            </Button>
          </Form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-500 text-sm"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>

          {!isSignUp && (
            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Forgot your password?
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
