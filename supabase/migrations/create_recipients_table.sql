/*
  # Create subscribers table

  1. New Tables
    - `subscribers`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `user_id` (uuid, references auth.users, not null)
      - `email` (text, not null)
      - `first_name` (text, nullable)
      - `last_name` (text, nullable)
      - `status` (text, default 'subscribed', check constraint for valid values)
      - `subscribed_at` (timestamp with timezone, default now())
      - `unsubscribed_at` (timestamp with timezone, nullable)
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `subscribers` table
    - Add policies for users to manage their own subscribers
    - Add unique constraint on user_id + email

  3. Indexes
    - Index on user_id for faster queries
    - Index on email for faster lookups
    - Index on status for filtering
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  email text NOT NULL,
  first_name text,
  last_name text,
  status text DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed', 'pending')),
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, email)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS subscribers_user_id_idx ON subscribers(user_id);
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON subscribers(email);
CREATE INDEX IF NOT EXISTS subscribers_status_idx ON subscribers(status);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own subscribers"
  ON subscribers
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);