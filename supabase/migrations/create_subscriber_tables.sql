/*
  # Create Complete Subscriber System Tables

  1. New Tables
    - `subscribers` - Main subscriber information
    - `lists` - Email lists for organizing subscribers  
    - `list_subscribers` - Many-to-many relationship between subscribers and lists
    - `campaigns` - Email campaigns
    - `smtp_configs` - SMTP configuration for users

  2. Relationships
    - subscribers.user_id -> auth.users.id
    - lists.user_id -> auth.users.id
    - list_subscribers.subscriber_id -> subscribers.id
    - list_subscribers.list_id -> lists.id
    - campaigns.user_id -> auth.users.id
    - smtp_configs.user_id -> auth.users.id

  3. Security
    - Enable RLS on all tables
    - Add policies for users to manage their own data
*/

-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  email text NOT NULL,
  first_name text DEFAULT '',
  last_name text DEFAULT '',
  status text NOT NULL DEFAULT 'subscribed',
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create lists table
CREATE TABLE IF NOT EXISTS lists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text DEFAULT '',
  color text DEFAULT '#3B82F6',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create list_subscribers junction table
CREATE TABLE IF NOT EXISTS list_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id uuid REFERENCES subscribers(id) ON DELETE CASCADE NOT NULL,
  list_id uuid REFERENCES lists(id) ON DELETE CASCADE NOT NULL,
  status text NOT NULL DEFAULT 'subscribed',
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  subject text NOT NULL,
  html_content text NOT NULL,
  target_all_subscribers boolean DEFAULT false,
  include_lists text[],
  exclude_lists text[],
  status text NOT NULL DEFAULT 'draft',
  scheduled_at timestamptz,
  sent_count integer DEFAULT 0,
  total_recipients integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS subscribers_user_id_idx ON subscribers(user_id);
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON subscribers(email);
CREATE INDEX IF NOT EXISTS subscribers_status_idx ON subscribers(status);
CREATE UNIQUE INDEX IF NOT EXISTS subscribers_user_email_unique ON subscribers(user_id, email);

CREATE INDEX IF NOT EXISTS lists_user_id_idx ON lists(user_id);
CREATE INDEX IF NOT EXISTS lists_is_active_idx ON lists(is_active);

CREATE INDEX IF NOT EXISTS list_subscribers_subscriber_id_idx ON list_subscribers(subscriber_id);
CREATE INDEX IF NOT EXISTS list_subscribers_list_id_idx ON list_subscribers(list_id);
CREATE INDEX IF NOT EXISTS list_subscribers_status_idx ON list_subscribers(status);
CREATE UNIQUE INDEX IF NOT EXISTS list_subscribers_unique_subscription ON list_subscribers(subscriber_id, list_id);

CREATE INDEX IF NOT EXISTS campaigns_user_id_idx ON campaigns(user_id);
CREATE INDEX IF NOT EXISTS campaigns_status_idx ON campaigns(status);

-- Enable RLS on all tables
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE list_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- RLS Policies for subscribers
CREATE POLICY "Users can view own subscribers"
  ON subscribers FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own subscribers"
  ON subscribers FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscribers"
  ON subscribers FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own subscribers"
  ON subscribers FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for lists
CREATE POLICY "Users can view own lists"
  ON lists FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own lists"
  ON lists FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own lists"
  ON lists FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own lists"
  ON lists FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for list_subscribers
CREATE POLICY "Users can view own list subscriptions"
  ON list_subscribers FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own list subscriptions"
  ON list_subscribers FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own list subscriptions"
  ON list_subscribers FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own list subscriptions"
  ON list_subscribers FOR DELETE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

-- RLS Policies for campaigns
CREATE POLICY "Users can view own campaigns"
  ON campaigns FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own campaigns"
  ON campaigns FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own campaigns"
  ON campaigns FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own campaigns"
  ON campaigns FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Create view for lists with subscriber counts
CREATE OR REPLACE VIEW lists_with_counts AS
SELECT 
  l.*,
  COALESCE(ls.subscribed_members, 0) as subscribed_members,
  COALESCE(ls.total_members, 0) as total_members
FROM lists l
LEFT JOIN (
  SELECT 
    list_id,
    COUNT(*) FILTER (WHERE status = 'subscribed') as subscribed_members,
    COUNT(*) as total_members
  FROM list_subscribers
  GROUP BY list_id
) ls ON l.id = ls.list_id;

-- Create functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at columns
CREATE TRIGGER update_subscribers_updated_at 
  BEFORE UPDATE ON subscribers 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lists_updated_at 
  BEFORE UPDATE ON lists 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_list_subscribers_updated_at 
  BEFORE UPDATE ON list_subscribers 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_campaigns_updated_at 
  BEFORE UPDATE ON campaigns 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();