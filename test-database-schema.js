/**
 * Simple test to verify database schema relationships
 * Run this after applying the migration to check if everything works
 */

import { createClient } from '@supabase/supabase-js'

// You'll need to set these environment variables
const supabaseUrl = process.env.SUPABASE_URL || 'your_supabase_url'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_service_key'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function testDatabaseSchema() {
  console.log('🔍 Testing database schema relationships...\n')
  
  try {
    // Test 1: Check if subscribers table exists and is accessible
    console.log('1. Testing subscribers table...')
    const { data: subscribers, error: subscribersError } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    if (subscribersError) {
      console.log('❌ Subscribers table error:', subscribersError.message)
    } else {
      console.log('✅ Subscribers table accessible')
    }
    
    // Test 2: Check if list_memberships table exists and is accessible
    console.log('\n2. Testing list_memberships table...')
    const { data: memberships, error: membershipsError } = await supabase
      .from('list_memberships')
      .select('*')
      .limit(1)
    
    if (membershipsError) {
      console.log('❌ List memberships table error:', membershipsError.message)
    } else {
      console.log('✅ List memberships table accessible')
    }
    
    // Test 3: Check if the relationship query works (this is what was failing)
    console.log('\n3. Testing relationship query...')
    const { data: relationshipTest, error: relationshipError } = await supabase
      .from('list_memberships')
      .select(`
        id,
        added_at,
        subscribers (
          id,
          email,
          first_name,
          last_name,
          status,
          created_at
        )
      `)
      .limit(1)
    
    if (relationshipError) {
      console.log('❌ Relationship query error:', relationshipError.message)
      console.log('📝 This is the exact error you were seeing!')
    } else {
      console.log('✅ Relationship query works perfectly!')
      console.log('🎉 Your database schema is now correctly configured!')
    }
    
    // Test 4: Test lists_with_counts view
    console.log('\n4. Testing lists_with_counts view...')
    const { data: listsWithCounts, error: viewError } = await supabase
      .from('lists_with_counts')
      .select('*')
      .limit(1)
    
    if (viewError) {
      console.log('❌ Lists with counts view error:', viewError.message)
    } else {
      console.log('✅ Lists with counts view working')
    }
    
  } catch (error) {
    console.log('❌ Connection error:', error.message)
    console.log('💡 Make sure your SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables are set')
  }
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
  testDatabaseSchema()
}

export default testDatabaseSchema