# xMailer Setup Guide

## Quick Setup Instructions

### 1. Environment Variables
Create a `.env` file in the project root:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key  
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Session Security
SESSION_SECRET=xmailer-development-secret-change-in-production

# Development Environment  
NODE_ENV=development
```

### 2. Supabase Setup
1. Create account at https://supabase.com
2. Create new project
3. Get API credentials from Settings → API
4. Run database migrations from supabase/migrations/ folder

### 3. Database Migrations (Run in order)
Execute these SQL files in Supabase SQL Editor:

1. create_profiles_table.sql
2. create_campaigns_table.sql
3. create_recipients_table.sql 
4. create_smtp_configs_table.sql
5. create_email_apis_table.sql
6. create_lists_and_memberships.sql
7. update_campaigns_with_lists.sql

### 4. Test the App
1. Start dev server: `pnpm run dev`
2. Go to http://localhost:3000
3. Sign up for a new account
4. Test creating lists and campaigns

### 5. Optional: Redis Setup
For email queue functionality:
1. Create free account at https://upstash.com  
2. Create Redis database
3. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to .env

## Troubleshooting
- If you get authentication errors → check SUPABASE credentials
- If lists page errors → ensure database migrations ran successfully
- If email sending fails → set up SMTP configs in the app