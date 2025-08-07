import { ActionFunctionArgs, json } from '@remix-run/node'
import { requireAuth } from '~/lib/auth.server'
import { processCampaign } from '~/lib/email.server'

export async function action({ request, params }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 })
  }

  const user = await requireAuth(request)
  const campaignId = params.id

  if (!campaignId) {
    return json({ error: 'Campaign ID required' }, { status: 400 })
  }

  try {
    // Process the campaign (this would typically be queued in a background job)
    processCampaign(campaignId).catch(console.error)
    
    return json({ success: true, message: 'Campaign sending started' })
  } catch (error) {
    console.error('Error starting campaign:', error)
    return json({ error: 'Failed to start campaign' }, { status: 500 })
  }
}
