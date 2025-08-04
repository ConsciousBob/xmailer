import { supabase } from './supabase.server'
import { redirect, createCookieSessionStorage } from '@remix-run/node'

// Session storage
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET || 'default-secret'],
    secure: process.env.NODE_ENV === 'production',
  },
})

export async function createUserSession(accessToken: string, refreshToken: string, redirectTo: string) {
  const session = await sessionStorage.getSession()
  session.set('accessToken', accessToken)
  session.set('refreshToken', refreshToken)
  
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  })
}

export async function getUserSession(request: Request) {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'))
  return {
    accessToken: session.get('accessToken'),
    refreshToken: session.get('refreshToken'),
  }
}

export async function requireAuth(request: Request) {
  const { accessToken } = await getUserSession(request)
  
  if (!accessToken) {
    throw redirect('/login')
  }

  const { data: { user }, error } = await supabase.auth.getUser(accessToken)
  
  if (error || !user) {
    // Try to refresh the token
    const { refreshToken } = await getUserSession(request)
    if (refreshToken) {
      const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession({
        refresh_token: refreshToken,
      })
      
      if (refreshError || !refreshData.session) {
        throw redirect('/login')
      }
      
      // Update session with new tokens
      const session = await sessionStorage.getSession(request.headers.get('Cookie'))
      session.set('accessToken', refreshData.session.access_token)
      session.set('refreshToken', refreshData.session.refresh_token)
      
      return refreshData.user
    }
    
    throw redirect('/login')
  }

  return user
}

export async function getUser(request: Request) {
  try {
    const { accessToken } = await getUserSession(request)
    
    if (!accessToken) {
      return null
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    
    if (error || !user) {
      return null
    }

    return user
  } catch {
    return null
  }
}

export async function logout(request: Request) {
  const { accessToken } = await getUserSession(request)
  
  if (accessToken) {
    await supabase.auth.signOut()
  }
  
  const session = await sessionStorage.getSession(request.headers.get('Cookie'))
  
  return redirect('/login', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}
