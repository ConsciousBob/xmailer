/*
  # Create SMTP Configurations Table

  1. New Tables
    - `smtp_configs`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `name` (text) - Configuration name for user reference
      - `host` (text) - SMTP server host
      - `port` (integer) - SMTP server port
      - `username` (text) - SMTP username
      - `password` (text) - Encrypted SMTP password
      - `from_email` (text) - Default from email address
      - `from_name` (text) - Default from name
      - `use_tls` (boolean) - Whether to use TLS
      - `use_ssl` (boolean) - Whether to use SSL
      - `is_default` (boolean) - Whether this is the default config for the user
      - `is_active` (boolean) - Whether this config is active
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `smtp_configs` table
    - Add policies for users to manage their own SMTP configurations
    - Add unique constraint for default config per user

  3. Indexes
    - Index on user_id for fast lookups
    - Index on is_default for default config queries
*/

CREATE TABLE IF NOT EXISTS smtp_configs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  host text NOT NULL,
  port integer NOT NULL DEFAULT 587,
  username text NOT NULL,
  password text NOT NULL, -- This should be encrypted in production
  from_email text NOT NULL,
  from_name text DEFAULT '',
  use_tls boolean DEFAULT true,
  use_ssl boolean DEFAULT false,
  is_default boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE smtp_configs ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX IF NOT EXISTS smtp_configs_user_id_idx ON smtp_configs(user_id);
CREATE INDEX IF NOT EXISTS smtp_configs_is_default_idx ON smtp_configs(user_id, is_default) WHERE is_default = true;

-- Ensure only one default config per user
CREATE UNIQUE INDEX IF NOT EXISTS smtp_configs_user_default_unique 
ON smtp_configs(user_id) 
WHERE is_default = true;

-- RLS Policies
CREATE POLICY "Users can view own SMTP configs"
  ON smtp_configs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own SMTP configs"
  ON smtp_configs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own SMTP configs"
  ON smtp_configs
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own SMTP configs"
  ON smtp_configs
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to ensure only one default config per user
CREATE OR REPLACE FUNCTION ensure_single_default_smtp_config()
RETURNS TRIGGER AS $$
BEGIN
  -- If setting this config as default, unset all other defaults for this user
  IF NEW.is_default = true THEN
    UPDATE smtp_configs 
    SET is_default = false, updated_at = now()
    WHERE user_id = NEW.user_id AND id != NEW.id AND is_default = true;
  END IF;
  
  -- Update the updated_at timestamp
  NEW.updated_at = now();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS ensure_single_default_smtp_config_trigger ON smtp_configs;
CREATE TRIGGER ensure_single_default_smtp_config_trigger
  BEFORE INSERT OR UPDATE ON smtp_configs
  FOR EACH ROW
  EXECUTE FUNCTION ensure_single_default_smtp_config();