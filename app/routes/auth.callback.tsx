import { LoaderFunctionArgs } from '@remix-run/node'
import { supabase } from '~/lib/supabase.server'
import { createUserSession } from '~/lib/auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') || '/dashboard'

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Auth callback error:', error)
      return new Response('Authentication failed', { status: 400 })
    }

    if (data.session && data.user) {
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
        next
      )
    }
  }

  // If no code or session creation failed, redirect to login
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/login?error=Authentication failed',
    },
  })
}
