/*
  # Create campaigns table

  1. New Tables
    - `campaigns`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `user_id` (uuid, references auth.users, not null)
      - `name` (text, not null) - campaign name
      - `subject` (text, not null) - email subject line
      - `content` (text, not null) - email content (HTML)
      - `status` (text, default 'draft') - campaign status
      - `scheduled_at` (timestamp with timezone, nullable) - when to send
      - `sent_count` (integer, default 0) - number of emails sent
      - `total_recipients` (integer, default 0) - total recipients
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `campaigns` table
    - Add policies for users to manage their own campaigns

  3. Indexes
    - Index on user_id for faster queries
    - Index on status for filtering
*/

CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'draft',
  scheduled_at timestamptz,
  sent_count integer DEFAULT 0,
  total_recipients integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS campaigns_user_id_idx ON campaigns(user_id);
CREATE INDEX IF NOT EXISTS campaigns_status_idx ON campaigns(status);
CREATE INDEX IF NOT EXISTS campaigns_scheduled_idx ON campaigns(scheduled_at);

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own campaigns"
  ON campaigns
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Function to increment sent count
CREATE OR REPLACE FUNCTION increment_campaign_sent_count(campaign_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE campaigns 
  SET sent_count = sent_count + 1,
      updated_at = now()
  WHERE id = campaign_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;