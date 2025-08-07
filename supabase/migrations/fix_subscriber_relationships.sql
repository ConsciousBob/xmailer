/*
  # Fix Subscriber and List Relationships

  1. Database Structure Fixes
    - Add proper foreign key constraints between tables
    - Ensure all relationships are properly defined
    - Add missing indexes for performance

  2. Tables Affected
    - `list_subscribers` - Fix foreign key relationships
    - Add proper constraints and indexes

  3. Relationships
    - subscribers.id -> list_subscribers.subscriber_id
    - lists.id -> list_subscribers.list_id
*/

-- First, let's ensure the list_subscribers table exists with proper structure
CREATE TABLE IF NOT EXISTS list_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id uuid NOT NULL,
  list_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'subscribed',
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Drop existing foreign key constraints if they exist (to recreate them properly)
DO $$
BEGIN
  -- Drop foreign key constraints if they exist
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'list_subscribers_subscriber_id_fkey'
  ) THEN
    ALTER TABLE list_subscribers DROP CONSTRAINT list_subscribers_subscriber_id_fkey;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'list_subscribers_list_id_fkey'
  ) THEN
    ALTER TABLE list_subscribers DROP CONSTRAINT list_subscribers_list_id_fkey;
  END IF;
END $$;

-- Add proper foreign key constraints
ALTER TABLE list_subscribers 
ADD CONSTRAINT list_subscribers_subscriber_id_fkey 
FOREIGN KEY (subscriber_id) REFERENCES subscribers(id) ON DELETE CASCADE;

ALTER TABLE list_subscribers 
ADD CONSTRAINT list_subscribers_list_id_fkey 
FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS list_subscribers_subscriber_id_idx ON list_subscribers(subscriber_id);
CREATE INDEX IF NOT EXISTS list_subscribers_list_id_idx ON list_subscribers(list_id);
CREATE INDEX IF NOT EXISTS list_subscribers_status_idx ON list_subscribers(status);

-- Create unique constraint to prevent duplicate subscriptions
CREATE UNIQUE INDEX IF NOT EXISTS list_subscribers_unique_subscription 
ON list_subscribers(subscriber_id, list_id);

-- Enable RLS on list_subscribers if not already enabled
ALTER TABLE list_subscribers ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for list_subscribers
DROP POLICY IF EXISTS "Users can view own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can view own list subscriptions"
  ON list_subscribers
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can create own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can create own list subscriptions"
  ON list_subscribers
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can update own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can update own list subscriptions"
  ON list_subscribers
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can delete own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can delete own list subscriptions"
  ON list_subscribers
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

-- Update the updated_at timestamp function for list_subscribers
CREATE OR REPLACE FUNCTION update_list_subscribers_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_list_subscribers_updated_at_trigger ON list_subscribers;
CREATE TRIGGER update_list_subscribers_updated_at_trigger
  BEFORE UPDATE ON list_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_list_subscribers_updated_at();