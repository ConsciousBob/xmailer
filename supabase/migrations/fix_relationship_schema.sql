/*
  # Fix Database Schema Relationships

  This migration ensures that:
  1. We have a proper `subscribers` table
  2. We have a proper `list_memberships` table that references `subscribers`
  3. All foreign key relationships are correct
  4. The schema matches what the application code expects
*/

-- Step 1: Ensure subscribers table exists with correct structure
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

-- Step 2: Handle list_memberships table structure
DO $$
BEGIN
  -- Check if list_memberships table exists
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'list_memberships' AND table_schema = 'public') THEN
    -- Check if it has the old recipient_id column
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'list_memberships' AND column_name = 'recipient_id' AND table_schema = 'public') THEN
      RAISE NOTICE 'Found existing list_memberships table with recipient_id, will migrate structure';
      
      -- Add subscriber_id column if it doesn't exist
      IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'list_memberships' AND column_name = 'subscriber_id' AND table_schema = 'public') THEN
        ALTER TABLE list_memberships ADD COLUMN subscriber_id uuid;
      END IF;
      
    END IF;
  ELSE
    -- Create new table with correct structure
    CREATE TABLE list_memberships (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      list_id uuid REFERENCES lists(id) ON DELETE CASCADE NOT NULL,
      subscriber_id uuid REFERENCES subscribers(id) ON DELETE CASCADE NOT NULL,
      added_at timestamptz DEFAULT now(),
      UNIQUE(list_id, subscriber_id)
    );
    RAISE NOTICE 'Created new list_memberships table with correct structure';
  END IF;
END $$;

-- Step 3: Migrate data from old tables if they exist

-- 3a: Migrate recipients to subscribers if recipients table exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'recipients' AND table_schema = 'public') THEN
    INSERT INTO subscribers (user_id, email, first_name, last_name, status, subscribed_at, created_at, updated_at)
    SELECT 
      r.user_id,
      r.email,
      r.first_name,
      r.last_name,
      CASE 
        WHEN r.subscribed = true THEN 'subscribed'
        ELSE 'unsubscribed'
      END as status,
      r.created_at,
      r.created_at,
      COALESCE(r.updated_at, r.created_at)
    FROM recipients r
    WHERE NOT EXISTS (
      SELECT 1 FROM subscribers s 
      WHERE s.user_id = r.user_id AND s.email = r.email
    );
    
    RAISE NOTICE 'Migrated data from recipients to subscribers';
  END IF;
END $$;

-- 3b: Handle existing list_memberships data migration
DO $$
BEGIN
  -- If list_memberships exists with recipient_id, migrate the data
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'list_memberships' AND column_name = 'recipient_id' AND table_schema = 'public') 
    AND EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'list_memberships' AND column_name = 'subscriber_id' AND table_schema = 'public') THEN
    
    RAISE NOTICE 'Found list_memberships with both recipient_id and subscriber_id columns';
    
    -- Check if recipients table exists for the migration
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'recipients' AND table_schema = 'public') THEN
      RAISE NOTICE 'Recipients table exists, migrating data through recipients-subscribers relationship';
      
      -- Update subscriber_id based on recipient_id through the recipients->subscribers relationship
      UPDATE list_memberships 
      SET subscriber_id = s.id
      FROM subscribers s, recipients r
      WHERE list_memberships.recipient_id = r.id 
      AND s.user_id = r.user_id 
      AND s.email = r.email
      AND list_memberships.subscriber_id IS NULL;
      
    ELSE
      RAISE NOTICE 'Recipients table does not exist, cannot migrate through recipients relationship';
      RAISE NOTICE 'You may need to manually populate subscriber_id values or clear the list_memberships table';
      
      -- Option: Clear the table since we can't migrate the data properly
      -- Uncomment the next line if you want to clear existing list_memberships
      -- DELETE FROM list_memberships;
      
    END IF;
    
    RAISE NOTICE 'Completed list_memberships migration attempt';
  END IF;
  
  -- Migrate from list_subscribers if it exists
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'list_subscribers' AND table_schema = 'public') THEN
    INSERT INTO list_memberships (list_id, subscriber_id, added_at)
    SELECT DISTINCT
      ls.list_id,
      ls.subscriber_id,
      COALESCE(ls.added_at, ls.created_at, now())
    FROM list_subscribers ls
    WHERE NOT EXISTS (
      SELECT 1 FROM list_memberships lm
      WHERE lm.list_id = ls.list_id AND lm.subscriber_id = ls.subscriber_id
    )
    AND EXISTS (SELECT 1 FROM subscribers WHERE id = ls.subscriber_id)
    AND EXISTS (SELECT 1 FROM lists WHERE id = ls.list_id);
    
    RAISE NOTICE 'Migrated data from list_subscribers to list_memberships';
  END IF;
END $$;

-- Step 4: Clean up old columns and tables
DO $$
BEGIN
  -- Remove recipient_id column from list_memberships if it exists
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'list_memberships' AND column_name = 'recipient_id' AND table_schema = 'public') THEN
    -- First drop any foreign key constraints on recipient_id
    DECLARE
      constraint_record RECORD;
    BEGIN
      FOR constraint_record IN 
        SELECT constraint_name 
        FROM information_schema.table_constraints tc
        JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
        WHERE tc.table_name = 'list_memberships' 
        AND tc.constraint_type = 'FOREIGN KEY'
        AND kcu.column_name = 'recipient_id'
      LOOP
        EXECUTE format('ALTER TABLE list_memberships DROP CONSTRAINT IF EXISTS %I', constraint_record.constraint_name);
      END LOOP;
    END;
    
    -- Now drop the recipient_id column
    ALTER TABLE list_memberships DROP COLUMN recipient_id;
    RAISE NOTICE 'Removed recipient_id column from list_memberships';
  END IF;
  
  -- Add foreign key constraint for subscriber_id if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
    WHERE tc.table_name = 'list_memberships' 
    AND tc.constraint_type = 'FOREIGN KEY'
    AND kcu.column_name = 'subscriber_id'
  ) THEN
    ALTER TABLE list_memberships ADD CONSTRAINT list_memberships_subscriber_id_fkey 
      FOREIGN KEY (subscriber_id) REFERENCES subscribers(id) ON DELETE CASCADE;
    RAISE NOTICE 'Added foreign key constraint for subscriber_id';
  END IF;
END $$;

-- Drop old tables
DROP TABLE IF EXISTS recipients CASCADE;
DROP TABLE IF EXISTS list_subscribers CASCADE;

-- Step 5: Create proper indexes
CREATE INDEX IF NOT EXISTS subscribers_user_id_idx ON subscribers(user_id);
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON subscribers(email);
CREATE INDEX IF NOT EXISTS subscribers_status_idx ON subscribers(status);

CREATE INDEX IF NOT EXISTS list_memberships_list_id_idx ON list_memberships(list_id);
CREATE INDEX IF NOT EXISTS list_memberships_subscriber_id_idx ON list_memberships(subscriber_id);

-- Step 6: Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE list_memberships ENABLE ROW LEVEL SECURITY;

-- Step 7: Create RLS policies for subscribers
DROP POLICY IF EXISTS "Users can manage own subscribers" ON subscribers;
CREATE POLICY "Users can manage own subscribers"
  ON subscribers
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Step 8: Create RLS policies for list_memberships
DROP POLICY IF EXISTS "Users can manage own list memberships" ON list_memberships;
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

-- Step 9: Recreate the lists_with_counts view
DROP VIEW IF EXISTS lists_with_counts CASCADE;
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

-- Step 10: Update functions to work with new schema
DROP FUNCTION IF EXISTS get_list_member_count(uuid);
CREATE OR REPLACE FUNCTION get_list_member_count(list_uuid uuid)
RETURNS integer AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::integer
    FROM list_memberships lm
    JOIN subscribers s ON s.id = lm.subscriber_id
    WHERE lm.list_id = list_uuid
    AND s.status = 'subscribed'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP FUNCTION IF EXISTS add_subscriber_to_list(uuid, uuid);
CREATE OR REPLACE FUNCTION add_subscriber_to_list(list_uuid uuid, subscriber_uuid uuid)
RETURNS boolean AS $$
BEGIN
  INSERT INTO list_memberships (list_id, subscriber_id)
  VALUES (list_uuid, subscriber_uuid)
  ON CONFLICT (list_id, subscriber_id) DO NOTHING;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP FUNCTION IF EXISTS remove_subscriber_from_list(uuid, uuid);
CREATE OR REPLACE FUNCTION remove_subscriber_from_list(list_uuid uuid, subscriber_uuid uuid)
RETURNS boolean AS $$
BEGIN
  DELETE FROM list_memberships
  WHERE list_id = list_uuid AND subscriber_id = subscriber_uuid;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Final verification
DO $$
BEGIN
  -- Check that all expected tables exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'subscribers' AND table_schema = 'public') THEN
    RAISE EXCEPTION 'subscribers table was not created properly';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'list_memberships' AND table_schema = 'public') THEN
    RAISE EXCEPTION 'list_memberships table was not created properly';
  END IF;
  
  -- Check that the foreign key relationship exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
    WHERE tc.table_name = 'list_memberships' 
    AND tc.constraint_type = 'FOREIGN KEY'
    AND kcu.column_name = 'subscriber_id'
  ) THEN
    RAISE EXCEPTION 'Foreign key relationship between list_memberships and subscribers is missing';
  END IF;
  
  -- Check that the old recipient_id column is gone
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'list_memberships' AND column_name = 'recipient_id' AND table_schema = 'public') THEN
    RAISE EXCEPTION 'Old recipient_id column still exists in list_memberships table';
  END IF;
  
  RAISE NOTICE 'Schema verification complete - all tables and relationships are properly configured';
END $$;