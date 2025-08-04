import { createClient } from '@supabase/supabase-js'

// Helper function to get environment variables with better error handling
const getEnvVar = (name: string): string => {
  // Try different ways to access environment variables in Vite/Remix
  let value: string | undefined
  
  try {
    value = process.env[name]
  } catch (e) {
    // Fallback for different environments
    value = (globalThis as any).process?.env?.[name] || (import.meta as any).env?.[name]
  }
  
  if (!value) {
    console.error(`Missing environment variable: ${name}`)
    console.error('Available process.env keys:', Object.keys(process.env || {}).filter(key => key.includes('SUPABASE')))
    throw new Error(`${name} environment variable is missing. Please check your .env file and restart the server.`)
  }
  
  return value
}

const supabaseUrl = getEnvVar('SUPABASE_URL')
const supabaseServiceKey = getEnvVar('SUPABASE_SERVICE_ROLE_KEY')

console.log('✅ Supabase configuration loaded successfully')

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Test the connection
supabase
  .from('profiles')
  .select('count', { count: 'exact', head: true })
  .then(() => console.log('✅ Supabase connection test successful'))
  .catch((error) => console.error('❌ Supabase connection test failed:', error.message))
