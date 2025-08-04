import { redirect } from '@remix-run/node'
import { getSession } from './session.server'
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
