/*
  # Update campaigns table to support list targeting

  1. Changes to campaigns table
    - Add `include_lists` (uuid array) - lists to include in campaign
    - Add `exclude_lists` (uuid array) - lists to exclude from campaign
    - Add `target_all_subscribers` (boolean, default false) - target all subscribers

  2. Functions
    - Function to get campaign recipients based on list targeting
    - Function to calculate campaign recipient count
*/

-- Add new columns to campaigns table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'campaigns' AND column_name = 'include_lists'
  ) THEN
    ALTER TABLE campaigns ADD COLUMN include_lists uuid[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'campaigns' AND column_name = 'exclude_lists'
  ) THEN
    ALTER TABLE campaigns ADD COLUMN exclude_lists uuid[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'campaigns' AND column_name = 'target_all_subscribers'
  ) THEN
    ALTER TABLE campaigns ADD COLUMN target_all_subscribers boolean DEFAULT false;
  END IF;
END $$;

-- Function to get campaign recipients based on list targeting
CREATE OR REPLACE FUNCTION get_campaign_recipients(campaign_uuid uuid)
RETURNS TABLE(recipient_id uuid, email text, first_name text, last_name text) AS $$
DECLARE
  campaign_record RECORD;
BEGIN
  -- Get campaign details
  SELECT * INTO campaign_record FROM campaigns WHERE id = campaign_uuid;
  
  IF NOT FOUND THEN
    RETURN;
  END IF;

  -- If targeting all subscribers
  IF campaign_record.target_all_subscribers THEN
    RETURN QUERY
    SELECT r.id, r.email, r.first_name, r.last_name
    FROM recipients r
    WHERE r.user_id = campaign_record.user_id
    AND r.subscribed = true
    AND (
      array_length(campaign_record.exclude_lists, 1) IS NULL
      OR r.id NOT IN (
        SELECT lm.recipient_id
        FROM list_memberships lm
        WHERE lm.list_id = ANY(campaign_record.exclude_lists)
      )
    );
    RETURN;
  END IF;

  -- If using include lists
  IF array_length(campaign_record.include_lists, 1) > 0 THEN
    RETURN QUERY
    SELECT DISTINCT r.id, r.email, r.first_name, r.last_name
    FROM recipients r
    JOIN list_memberships lm ON r.id = lm.recipient_id
    WHERE r.user_id = campaign_record.user_id
    AND r.subscribed = true
    AND lm.list_id = ANY(campaign_record.include_lists)
    AND (
      array_length(campaign_record.exclude_lists, 1) IS NULL
      OR r.id NOT IN (
        SELECT lm2.recipient_id
        FROM list_memberships lm2
        WHERE lm2.list_id = ANY(campaign_record.exclude_lists)
      )
    );
    RETURN;
  END IF;

  -- Default: no recipients if no targeting specified
  RETURN;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to calculate campaign recipient count
CREATE OR REPLACE FUNCTION calculate_campaign_recipient_count(campaign_uuid uuid)
RETURNS integer AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::integer
    FROM get_campaign_recipients(campaign_uuid)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update existing campaigns to have target_all_subscribers = true if they have recipients
UPDATE campaigns 
SET target_all_subscribers = true 
WHERE total_recipients > 0 
AND (include_lists IS NULL OR array_length(include_lists, 1) IS NULL)
AND (exclude_lists IS NULL OR array_length(exclude_lists, 1) IS NULL);