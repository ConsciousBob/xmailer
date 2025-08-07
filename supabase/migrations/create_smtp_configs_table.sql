/*
  # Create SMTP Configurations Table

  1. New Table
    - `smtp_configs` - Store SMTP server configurations for users
    
  2. Columns
    - `id` (uuid, primary key)
    - `user_id` (uuid, foreign key to auth.users)
    - `name` (text) - Configuration name
    - `host` (text) - SMTP server host
    - `port` (integer) - SMTP server port
    - `username` (text) - SMTP username
    - `password` (text) - SMTP password (should be encrypted in production)
    - `from_email` (text) - Default from email address
    - `from_name` (text) - Default from name
    - `use_tls` (boolean) - Whether to use TLS
    - `use_ssl` (boolean) - Whether to use SSL
    - `is_default` (boolean) - Whether this is the default config
    - `is_active` (boolean) - Whether this config is active
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  3. Security
    - Enable RLS
    - Add policies for users to manage their own SMTP configs
*/

-- Create smtp_configs table
CREATE TABLE IF NOT EXISTS smtp_configs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  host text NOT NULL,
  port integer NOT NULL,
  username text NOT NULL,
  password text NOT NULL,
  from_email text NOT NULL,
  from_name text NOT NULL,
  use_tls boolean DEFAULT false,
  use_ssl boolean DEFAULT false,
  is_default boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS smtp_configs_user_id_idx ON smtp_configs(user_id);
CREATE INDEX IF NOT EXISTS smtp_configs_is_default_idx ON smtp_configs(is_default);
CREATE INDEX IF NOT EXISTS smtp_configs_is_active_idx ON smtp_configs(is_active);

-- Enable RLS
ALTER TABLE smtp_configs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own SMTP configs"
  ON smtp_configs FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own SMTP configs"
  ON smtp_configs FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own SMTP configs"
  ON smtp_configs FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own SMTP configs"
  ON smtp_configs FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_smtp_configs_updated_at 
  BEFORE UPDATE ON smtp_configs 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();