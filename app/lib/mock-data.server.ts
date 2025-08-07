/**
 * Mock data for testing the application when database is not available
 * This provides sample data that matches the expected schema structure
 */

// Mock user data
export const mockUser = {
  id: '661a73a4-fcc9-4f2e-90ba-532f04f2519a',
  email: 'madhav@xbesh.com',
  name: 'Madhav Parashar',
}

// Mock subscribers data (matches your actual data structure)
export const mockSubscribers = [
  {
    id: 'b1c63877-b032-46fd-a38c-3e2165ac0563',
    user_id: mockUser.id,
    email: 'madhav@xbesh.com',
    first_name: 'Madhav',
    last_name: 'Parashar',
    status: 'subscribed',
    subscribed_at: '2025-08-05 20:47:08.78+00',
    unsubscribed_at: null,
    created_at: '2025-08-05 20:47:09.011082+00',
    updated_at: '2025-08-05 20:47:09.011082+00'
  },
  {
    id: 'c2d74988-c143-57ge-ab3a-61f5c706cdf4',
    user_id: mockUser.id,
    email: 'john@example.com',
    first_name: 'John',
    last_name: 'Doe',
    status: 'subscribed',
    subscribed_at: '2025-08-05 20:47:08.78+00',
    unsubscribed_at: null,
    created_at: '2025-08-05 20:47:09.011082+00',
    updated_at: '2025-08-05 20:47:09.011082+00'
  },
  {
    id: 'd3e85099-d254-68hf-bc4b-72g6d817deg5',
    user_id: mockUser.id,
    email: 'jane@example.com',
    first_name: 'Jane',
    last_name: 'Smith',
    status: 'unsubscribed',
    subscribed_at: '2025-08-05 20:47:08.78+00',
    unsubscribed_at: '2025-08-06 10:30:00.78+00',
    created_at: '2025-08-05 20:47:09.011082+00',
    updated_at: '2025-08-06 10:30:00.011082+00'
  }
]

// Mock lists data
export const mockLists = [
  {
    id: 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9',
    user_id: mockUser.id,
    name: 'Newsletter Subscribers',
    description: 'General newsletter subscribers who signed up for weekly updates',
    color: '#3B82F6',
    is_active: true,
    created_at: '2025-01-15T10:00:00.000Z',
    updated_at: '2025-01-15T10:00:00.000Z',
    total_members: 3,
    subscribed_members: 2
  }
]

// Mock list memberships data (this is what was causing the relationship error)
export const mockListMemberships = [
  {
    id: 'mem1-0000-0000-0000-000000000001',
    list_id: 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9',
    subscriber_id: 'b1c63877-b032-46fd-a38c-3e2165ac0563',
    added_at: '2025-08-05 20:47:09.011082+00',
    // This is the relationship data that was missing
    subscribers: mockSubscribers[0]
  },
  {
    id: 'mem2-0000-0000-0000-000000000002',
    list_id: 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9',
    subscriber_id: 'c2d74988-c143-57ge-ab3a-61f5c706cdf4',
    added_at: '2025-08-05 20:47:09.011082+00',
    subscribers: mockSubscribers[1]
  },
  {
    id: 'mem3-0000-0000-0000-000000000003',
    list_id: 'ac70fb2e-53c2-46bb-9b29-50e4b695bdc9',
    subscriber_id: 'd3e85099-d254-68hf-bc4b-72g6d817deg5',
    added_at: '2025-08-05 20:47:09.011082+00',
    subscribers: mockSubscribers[2]
  }
]

/**
 * Mock Supabase client that returns our test data
 * Use this temporarily until your real database is set up
 */
export function createMockSupabase() {
  return {
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          single: () => {
            if (table === 'lists_with_counts') {
              const list = mockLists.find(l => l.id === value)
              return Promise.resolve({ 
                data: list, 
                error: list ? null : { message: 'List not found' }
              })
            }
            return Promise.resolve({ data: null, error: { message: 'Mock not implemented for this query' } })
          },
          order: (column: string, options?: any) => Promise.resolve({
            data: table === 'list_memberships' ? mockListMemberships : [],
            error: null
          })
        }),
        filter: () => Promise.resolve({ data: [], error: null }),
        limit: () => Promise.resolve({ data: [], error: null })
      })
    })
  }
}

/**
 * Helper function to check if we should use mock data
 */
export function shouldUseMockData(): boolean {
  return !process.env.SUPABASE_URL || process.env.SUPABASE_URL === 'your_supabase_project_url'
}
