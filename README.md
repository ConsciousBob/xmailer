# Email Autoresponder App

A comprehensive bulk email marketing platform built with Remix, Supabase, and Redis.

## 🚀 Features

- **Bulk Email Campaigns** - Send emails to thousands of recipients
- **SMTP & API Integration** - Support for custom SMTP servers and email APIs (SendGrid)
- **Queue Management** - Redis-powered email queue with BullMQ
- **Modern UI** - Clean, responsive interface built with Tailwind CSS
- **Authentication** - Supabase Auth integration
- **Campaign Analytics** - Track email delivery and performance

## 📋 Setup Instructions

### 1. Environment Variables

1. Copy `.env.example` to `.env`
2. **Connect to Supabase in the chat box** to set up your database
3. Get your Supabase credentials from your project dashboard:
   - Go to Settings → API
   - Copy your Project URL and anon/public key
4. Update `.env` with your credentials:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Setup

The app requires these database tables (will be created automatically when you connect to Supabase):

- `profiles` - User profiles
- `campaigns` - Email campaigns  
- `recipients` - Email recipient lists
- `smtp_configs` - SMTP server configurations
- `email_apis` - Email API configurations

### 3. Redis Configuration

Redis is already configured with your Upstash credentials for queue management.

### 4. Run the Application

```bash
pnpm install
pnpm run dev
```

## 🔧 Usage

1. **Sign up/Login** - Create an account or sign in
2. **Configure Email Sending** - Set up SMTP servers or email APIs
3. **Add Recipients** - Import your email lists
4. **Create Campaigns** - Design and send bulk emails
5. **Monitor Performance** - Track delivery and engagement

## 📧 Supported Email Providers

- **SMTP Servers**: Gmail, Outlook, custom SMTP
- **Email APIs**: SendGrid (extensible for others)

## 🛠️ Tech Stack

- **Frontend**: Remix + React + Tailwind CSS
- **Backend**: Remix (Node.js)
- **Database**: Supabase (PostgreSQL)
- **Queue**: BullMQ + Redis (Upstash)
- **Auth**: Supabase Auth
- **Email**: Nodemailer + Email APIs

## 🔐 Security

- Row Level Security (RLS) enabled on all tables
- Secure authentication with Supabase
- Environment variables for sensitive data
- Input validation and sanitization
