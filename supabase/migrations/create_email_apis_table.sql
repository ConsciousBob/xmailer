/*
  # Create email APIs table

  1. New Tables
    - `email_apis`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `user_id` (uuid, references auth.users, not null)
      - `provider` (text, not null) - API provider (sendgrid, mailgun, etc.)
      - `api_key` (text, not null) - API key (encrypted)
      - `name` (text, not null) - friendly name for the config
      - `is_active` (boolean, default true) - whether config is active
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `email_apis` table
    - Add policies for users to manage their own email API configs

  3. Indexes
    - Index on user_id for faster queries
    - Index on provider for filtering
*/

CREATE TABLE IF NOT EXISTS email_apis (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  provider text NOT NULL,
  api_key text NOT NULL,
  name text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS email_apis_user_id_idx ON email_apis(user_id);
CREATE INDEX IF NOT EXISTS email_apis_provider_idx ON email_apis(provider);
CREATE INDEX IF NOT EXISTS email_apis_active_idx ON email_apis(is_active);

ALTER TABLE email_apis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own email APIs"
  ON email_apis
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);