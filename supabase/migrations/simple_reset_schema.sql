/*
  # Simple Schema Reset (Nuclear Option)
  
  This migration completely rebuilds the tables from scratch.
  ⚠️  WARNING: This will delete all existing list membership data!
  
  Use this if you want a completely clean start or if the main migration fails.
*/

-- Step 1: Backup any existing data you want to keep (optional)
-- Uncomment these if you have important data to preserve:
--
-- CREATE TABLE IF NOT EXISTS backup_list_memberships AS 
-- SELECT * FROM list_memberships WHERE list_id IS NOT NULL;
--
-- CREATE TABLE IF NOT EXISTS backup_recipients AS 
-- SELECT * FROM recipients WHERE user_id IS NOT NULL;

-- Step 2: Drop everything and start fresh
DROP TABLE IF EXISTS list_memberships CASCADE;
DROP TABLE IF EXISTS list_subscribers CASCADE; 
DROP TABLE IF EXISTS recipients CASCADE;
DROP VIEW IF EXISTS lists_with_counts CASCADE;

-- Step 3: Create subscribers table
CREATE TABLE subscribers (
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

-- Step 4: Create list_memberships table
CREATE TABLE list_memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  list_id uuid REFERENCES lists(id) ON DELETE CASCADE NOT NULL,
  subscriber_id uuid REFERENCES subscribers(id) ON DELETE CASCADE NOT NULL,
  added_at timestamptz DEFAULT now(),
  UNIQUE(list_id, subscriber_id)
);

-- Step 5: Add your existing subscriber data
-- Replace this with your actual subscriber data:
INSERT INTO subscribers (user_id, email, first_name, last_name, status, subscribed_at, created_at, updated_at) VALUES
('661a73a4-fcc9-4f2e-90ba-532f04f2519a', 'madhav@xbesh.com', 'Madhav', 'Parashar', 'subscribed', '2025-08-05 20:47:08.78+00', '2025-08-05 20:47:09.011082+00', '2025-08-05 20:47:09.011082+00')
ON CONFLICT (user_id, email) DO NOTHING;

-- Step 6: Create indexes
CREATE INDEX subscribers_user_id_idx ON subscribers(user_id);
CREATE INDEX subscribers_email_idx ON subscribers(email);
CREATE INDEX subscribers_status_idx ON subscribers(status);
CREATE INDEX list_memberships_list_id_idx ON list_memberships(list_id);
CREATE INDEX list_memberships_subscriber_id_idx ON list_memberships(subscriber_id);

-- Step 7: Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE list_memberships ENABLE ROW LEVEL SECURITY;

-- Step 8: Create RLS policies
CREATE POLICY "Users can manage own subscribers"
  ON subscribers FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage own list memberships"
  ON list_memberships FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM lists 
      WHERE lists.id = list_memberships.list_id 
      AND lists.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM lists 
      WHERE lists.id = list_memberships.list_id 
      AND lists.user_id = auth.uid()
    )
  );

-- Step 9: Recreate view
CREATE VIEW lists_with_counts AS
SELECT 
  l.*,
  COALESCE(member_counts.total_members, 0) as total_members,
  COALESCE(member_counts.subscribed_members, 0) as subscribed_members
FROM lists l
LEFT JOIN (
  SELECT 
    lm.list_id,
    COUNT(*) as total_members,
    COUNT(CASE WHEN s.status = 'subscribed' THEN 1 END) as subscribed_members
  FROM list_memberships lm
  JOIN subscribers s ON s.id = lm.subscriber_id
  GROUP BY lm.list_id
) member_counts ON l.id = member_counts.list_id;

-- Success!
SELECT 'Schema reset complete! ✅' as status;