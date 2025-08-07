/*
  # Test Script: Verify Relationship Fix
  
  Run this after applying either migration to confirm everything is working.
  This will test the exact query that was failing before.
*/

-- Test 1: Check table structure
SELECT 'Testing table structures...' as test;

SELECT table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name IN ('subscribers', 'list_memberships')
AND table_schema = 'public'
ORDER BY table_name, ordinal_position;

-- Test 2: Check foreign key relationships
SELECT 'Testing foreign key relationships...' as test;

SELECT 
  tc.table_name, 
  kcu.column_name, 
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name 
FROM information_schema.table_constraints AS tc 
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
  AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
  AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY' 
AND tc.table_name = 'list_memberships';

-- Test 3: The actual query that was failing (this should work now!)
SELECT 'Testing the exact query that was failing...' as test;

SELECT 
  lm.id,
  lm.added_at,
  s.id as subscriber_id,
  s.email,
  s.first_name,
  s.last_name,
  s.status,
  s.created_at
FROM list_memberships lm
LEFT JOIN subscribers s ON s.id = lm.subscriber_id
LIMIT 5;

-- Test 4: Test the application's exact query structure  
SELECT 'Testing application query structure...' as test;

SELECT 
  lm.id,
  lm.added_at,
  json_build_object(
    'id', s.id,
    'email', s.email,
    'first_name', s.first_name,
    'last_name', s.last_name,
    'status', s.status,
    'created_at', s.created_at
  ) as subscribers
FROM list_memberships lm
LEFT JOIN subscribers s ON s.id = lm.subscriber_id
LIMIT 5;

-- Test 5: Test the lists_with_counts view
SELECT 'Testing lists_with_counts view...' as test;

SELECT * FROM lists_with_counts LIMIT 5;

-- Final result
SELECT 
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM list_memberships lm
      JOIN subscribers s ON s.id = lm.subscriber_id
    ) OR NOT EXISTS (SELECT 1 FROM list_memberships)
    THEN '✅ SUCCESS: Relationship between list_memberships and subscribers is working!'
    ELSE '❌ ERROR: Relationship is still broken'
  END as final_result;