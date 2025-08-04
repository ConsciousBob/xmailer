import { createCookieSessionStorage } from '@remix-run/node'

// Helper function to get environment variables
const getEnvVar = (name: string, defaultValue?: string): string => {
  let value: string | undefined
  
  try {
    value = process.env[name]
  } catch (e) {
    value = (globalThis as any).process?.env?.[name] || (import.meta as any).env?.[name]
  }
  
  if (!value && !defaultValue) {
    throw new Error(`${name} environment variable is missing`)
  }
  
  return value || defaultValue!
}

const sessionSecret = getEnvVar('SESSION_SECRET', 'xmailer-default-session-secret-change-in-production')

console.log('✅ Session configuration loaded')

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: '__xmailer_session',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
    sameSite: 'lax',
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === 'production',
  },
})

export { getSession, commitSession, destroySession }
