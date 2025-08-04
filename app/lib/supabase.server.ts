import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          updated_at?: string
        }
      }
      smtp_configs: {
        Row: {
          id: string
          user_id: string
          name: string
          host: string
          port: number
          username: string
          password: string
          secure: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          host: string
          port: number
          username: string
          password: string
          secure?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          host?: string
          port?: number
          username?: string
          password?: string
          secure?: boolean
          is_active?: boolean
          updated_at?: string
        }
      }
      email_apis: {
        Row: {
          id: string
          user_id: string
          provider: string
          api_key: string
          name: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          provider: string
          api_key: string
          name: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          provider?: string
          api_key?: string
          name?: string
          is_active?: boolean
          updated_at?: string
        }
      }
      campaigns: {
        Row: {
          id: string
          user_id: string
          name: string
          subject: string
          content: string
          status: string
          scheduled_at: string | null
          sent_count: number
          total_recipients: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          subject: string
          content: string
          status?: string
          scheduled_at?: string | null
          sent_count?: number
          total_recipients?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          subject?: string
          content?: string
          status?: string
          scheduled_at?: string | null
          sent_count?: number
          total_recipients?: number
          updated_at?: string
        }
      }
      recipients: {
        Row: {
          id: string
          user_id: string
          email: string
          first_name: string | null
          last_name: string | null
          tags: string[]
          subscribed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          tags?: string[]
          subscribed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          tags?: string[]
          subscribed?: boolean
          updated_at?: string
        }
      }
    }
  }
}
