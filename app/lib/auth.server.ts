import { redirect } from '@remix-run/node'
import { getSession, commitSession, destroySession } from './session.server'
import { supabase } from './supabase.server'

export async function requireAuth(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  if (!userId) {
    throw redirect('/auth/login')
  }

  // Get user data from Supabase
  const { data: user, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error || !user) {
    throw redirect('/auth/login')
  }

  return user
}

export async function getOptionalUser(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  if (!userId) {
    return null
  }

  try {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error || !user) {
      return null
    }

    return user
  } catch {
    return null
  }
}

export async function getUser(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  if (!userId) {
    return null
  }

  try {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error || !user) {
      return null
    }

    return user
  } catch {
    return null
  }
}

export async function createUserSession(
  accessToken: string,
  refreshToken: string,
  redirectTo: string
) {
  // Verify the session with Supabase to get user info
  const { data: { user }, error } = await supabase.auth.getUser(accessToken)
  
  if (error || !user) {
    throw redirect('/login?error=Invalid session')
  }

  const session = await getSession()
  session.set('userId', user.id)
  session.set('userEmail', user.email)
  session.set('accessToken', accessToken)
  session.set('refreshToken', refreshToken)

  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export async function logout(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  const accessToken = session.get('accessToken')

  // Sign out from Supabase if we have a token
  if (accessToken) {
    try {
      await supabase.auth.admin.signOut(accessToken)
    } catch (error) {
      console.error('Error signing out from Supabase:', error)
    }
  }

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}
