/*
  # Clean Up Recipients Table

  1. Database Cleanup
    - Remove the redundant `recipients` table
    - Ensure all relationships point to `subscribers` table
    - Update any foreign key references

  2. Tables Affected
    - Drop `recipients` table
    - Ensure `list_subscribers` connects to `subscribers`
    - Update any views or functions that reference `recipients`

  3. Data Migration
    - If there's any data in `recipients`, we'll migrate it to `subscribers` first
    - Then safely drop the `recipients` table
*/

-- First, let's check if recipients table exists and migrate any data
DO $$
BEGIN
  -- Check if recipients table exists
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'recipients') THEN
    
    -- Migrate any data from recipients to subscribers if it doesn't already exist
    INSERT INTO subscribers (user_id, email, first_name, last_name, status, subscribed_at, created_at, updated_at)
    SELECT 
      r.user_id,
      r.email,
      COALESCE(r.first_name, ''),
      COALESCE(r.last_name, ''),
      COALESCE(r.status, 'subscribed'),
      COALESCE(r.subscribed_at, r.created_at, now()),
      COALESCE(r.created_at, now()),
      COALESCE(r.updated_at, now())
    FROM recipients r
    WHERE NOT EXISTS (
      SELECT 1 FROM subscribers s 
      WHERE s.user_id = r.user_id AND s.email = r.email
    );
    
    -- Update any foreign key references from recipients to subscribers
    -- Check if there are any list_recipients or similar tables
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'list_recipients') THEN
      -- Update list_recipients to point to subscribers instead
      UPDATE list_recipients lr
      SET recipient_id = (
        SELECT s.id 
        FROM subscribers s 
        JOIN recipients r ON r.id = lr.recipient_id 
        WHERE s.user_id = r.user_id AND s.email = r.email
        LIMIT 1
      )
      WHERE EXISTS (
        SELECT 1 FROM recipients r WHERE r.id = lr.recipient_id
      );
    END IF;
    
    -- Drop any foreign key constraints that reference recipients
    IF EXISTS (
      SELECT 1 FROM information_schema.table_constraints 
      WHERE constraint_name LIKE '%recipients%' AND constraint_type = 'FOREIGN KEY'
    ) THEN
      -- Drop constraints that reference recipients table
      DECLARE
        constraint_record RECORD;
      BEGIN
        FOR constraint_record IN 
          SELECT constraint_name, table_name 
          FROM information_schema.table_constraints 
          WHERE constraint_name LIKE '%recipients%' AND constraint_type = 'FOREIGN KEY'
        LOOP
          EXECUTE format('ALTER TABLE %I DROP CONSTRAINT IF EXISTS %I', 
            constraint_record.table_name, constraint_record.constraint_name);
        END LOOP;
      END;
    END IF;
    
    -- Now safely drop the recipients table
    DROP TABLE IF EXISTS recipients CASCADE;
    
    RAISE NOTICE 'Recipients table has been removed and data migrated to subscribers table';
  ELSE
    RAISE NOTICE 'Recipients table does not exist, no cleanup needed';
  END IF;
END $$;

-- Drop any views that might reference recipients
DROP VIEW IF EXISTS recipients_with_lists CASCADE;
DROP VIEW IF EXISTS list_recipients_view CASCADE;

-- Ensure list_subscribers table has correct structure
-- Drop and recreate if needed to ensure clean structure
DO $$
BEGIN
  -- Check if list_subscribers exists with correct foreign keys
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'list_subscribers') THEN
    -- Verify it has the correct foreign key to subscribers
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.table_constraints tc
      JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
      WHERE tc.table_name = 'list_subscribers' 
      AND tc.constraint_type = 'FOREIGN KEY'
      AND kcu.column_name = 'subscriber_id'
      AND kcu.referenced_table_name = 'subscribers'
    ) THEN
      -- Fix the foreign key relationship
      ALTER TABLE list_subscribers DROP CONSTRAINT IF EXISTS list_subscribers_subscriber_id_fkey;
      ALTER TABLE list_subscribers ADD CONSTRAINT list_subscribers_subscriber_id_fkey 
        FOREIGN KEY (subscriber_id) REFERENCES subscribers(id) ON DELETE CASCADE;
    END IF;
  END IF;
END $$;

-- Clean up any orphaned records in list_subscribers
DELETE FROM list_subscribers 
WHERE subscriber_id NOT IN (SELECT id FROM subscribers);

-- Clean up any orphaned records where list_id doesn't exist
DELETE FROM list_subscribers 
WHERE list_id NOT IN (SELECT id FROM lists);

-- Recreate the lists_with_counts view to ensure it's working correctly
DROP VIEW IF EXISTS lists_with_counts;
CREATE VIEW lists_with_counts AS
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

-- Ensure all indexes are in place
CREATE INDEX IF NOT EXISTS list_subscribers_subscriber_id_idx ON list_subscribers(subscriber_id);
CREATE INDEX IF NOT EXISTS list_subscribers_list_id_idx ON list_subscribers(list_id);
CREATE INDEX IF NOT EXISTS list_subscribers_status_idx ON list_subscribers(status);

-- Recreate unique constraint to prevent duplicate subscriptions
DROP INDEX IF EXISTS list_subscribers_unique_subscription;
CREATE UNIQUE INDEX list_subscribers_unique_subscription ON list_subscribers(subscriber_id, list_id);

-- Verify RLS policies are in place for list_subscribers
DROP POLICY IF EXISTS "Users can view own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can view own list subscriptions"
  ON list_subscribers FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can create own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can create own list subscriptions"
  ON list_subscribers FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can update own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can update own list subscriptions"
  ON list_subscribers FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can delete own list subscriptions" ON list_subscribers;
CREATE POLICY "Users can delete own list subscriptions"
  ON list_subscribers FOR DELETE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscribers 
      WHERE subscribers.id = list_subscribers.subscriber_id 
      AND subscribers.user_id = auth.uid()
    )
  );