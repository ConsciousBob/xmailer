/*
  # Create lists and list memberships tables

  1. New Tables
    - `lists`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `user_id` (uuid, references auth.users, not null)
      - `name` (text, not null) - list name
      - `description` (text, nullable) - list description
      - `color` (text, default '#3B82F6') - list color for UI
      - `is_active` (boolean, default true) - whether list is active
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

    - `list_memberships`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `list_id` (uuid, references lists, not null)
      - `recipient_id` (uuid, references recipients, not null)
      - `added_at` (timestamp with timezone, default now())
      - Unique constraint on list_id + recipient_id

  2. Security
    - Enable RLS on both tables
    - Add policies for users to manage their own lists and memberships

  3. Indexes
    - Index on user_id for lists
    - Index on list_id and recipient_id for memberships
    - Unique constraint on list_id + recipient_id

  4. Functions
    - Function to get list member count
    - Function to add recipient to list
    - Function to remove recipient from list
*/

-- Create lists table
CREATE TABLE IF NOT EXISTS lists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text,
  color text DEFAULT '#3B82F6',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, name)
);

-- Create list memberships table
CREATE TABLE IF NOT EXISTS list_memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  list_id uuid REFERENCES lists(id) ON DELETE CASCADE NOT NULL,
  recipient_id uuid REFERENCES recipients(id) ON DELETE CASCADE NOT NULL,
  added_at timestamptz DEFAULT now(),
  UNIQUE(list_id, recipient_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS lists_user_id_idx ON lists(user_id);
CREATE INDEX IF NOT EXISTS lists_active_idx ON lists(is_active);
CREATE INDEX IF NOT EXISTS list_memberships_list_id_idx ON list_memberships(list_id);
CREATE INDEX IF NOT EXISTS list_memberships_recipient_id_idx ON list_memberships(recipient_id);

-- Enable RLS
ALTER TABLE lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE list_memberships ENABLE ROW LEVEL SECURITY;

-- RLS policies for lists
CREATE POLICY "Users can manage own lists"
  ON lists
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS policies for list memberships
CREATE POLICY "Users can manage own list memberships"
  ON list_memberships
  FOR ALL
  TO authenticated
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

-- Function to get list member count
CREATE OR REPLACE FUNCTION get_list_member_count(list_uuid uuid)
RETURNS integer AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::integer
    FROM list_memberships lm
    JOIN recipients r ON r.id = lm.recipient_id
    WHERE lm.list_id = list_uuid
    AND r.subscribed = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to add recipient to list
CREATE OR REPLACE FUNCTION add_recipient_to_list(list_uuid uuid, recipient_uuid uuid)
RETURNS boolean AS $$
BEGIN
  INSERT INTO list_memberships (list_id, recipient_id)
  VALUES (list_uuid, recipient_uuid)
  ON CONFLICT (list_id, recipient_id) DO NOTHING;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to remove recipient from list
CREATE OR REPLACE FUNCTION remove_recipient_from_list(list_uuid uuid, recipient_uuid uuid)
RETURNS boolean AS $$
BEGIN
  DELETE FROM list_memberships
  WHERE list_id = list_uuid AND recipient_id = recipient_uuid;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- View for lists with member counts
CREATE OR REPLACE VIEW lists_with_counts AS
SELECT 
  l.*,
  COALESCE(member_counts.total_members, 0) as total_members,
  COALESCE(member_counts.subscribed_members, 0) as subscribed_members
FROM lists l
LEFT JOIN (
  SELECT 
    lm.list_id,
    COUNT(*) as total_members,
    COUNT(CASE WHEN r.subscribed = true THEN 1 END) as subscribed_members
  FROM list_memberships lm
  JOIN recipients r ON r.id = lm.recipient_id
  GROUP BY lm.list_id
) member_counts ON l.id = member_counts.list_id;