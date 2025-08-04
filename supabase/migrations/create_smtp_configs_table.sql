/*
  # Create SMTP configurations table

  1. New Tables
    - `smtp_configs`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `user_id` (uuid, references auth.users, not null)
      - `name` (text, not null) - friendly name for the config
      - `host` (text, not null) - SMTP server host
      - `port` (integer, not null) - SMTP server port
      - `username` (text, not null) - SMTP username
      - `password` (text, not null) - SMTP password (encrypted)
      - `secure` (boolean, default true) - use SSL/TLS
      - `is_active` (boolean, default true) - whether config is active
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `smtp_configs` table
    - Add policies for users to manage their own SMTP configs

  3. Indexes
    - Index on user_id for faster queries
*/

CREATE TABLE IF NOT EXISTS smtp_configs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  host text NOT NULL,
  port integer NOT NULL,
  username text NOT NULL,
  password text NOT NULL,
  secure boolean DEFAULT true,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS smtp_configs_user_id_idx ON smtp_configs(user_id);
CREATE INDEX IF NOT EXISTS smtp_configs_active_idx ON smtp_configs(is_active);

ALTER TABLE smtp_configs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own SMTP configs"
  ON smtp_configs
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);