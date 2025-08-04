/*
  # Create recipients table

  1. New Tables
    - `recipients`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `user_id` (uuid, references auth.users, not null)
      - `email` (text, not null)
      - `first_name` (text, nullable)
      - `last_name` (text, nullable)
      - `tags` (text array, default empty array)
      - `subscribed` (boolean, default true)
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `recipients` table
    - Add policies for users to manage their own recipients
    - Add unique constraint on user_id + email

  3. Indexes
    - Index on user_id for faster queries
    - Index on email for faster lookups
*/

CREATE TABLE IF NOT EXISTS recipients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  email text NOT NULL,
  first_name text,
  last_name text,
  tags text[] DEFAULT '{}',
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, email)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS recipients_user_id_idx ON recipients(user_id);
CREATE INDEX IF NOT EXISTS recipients_email_idx ON recipients(email);
CREATE INDEX IF NOT EXISTS recipients_subscribed_idx ON recipients(subscribed);

ALTER TABLE recipients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own recipients"
  ON recipients
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);