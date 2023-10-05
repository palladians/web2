import { Lead } from './types'
import { env } from '@/env.mjs'

const LEADS_URL = env.NEXT_PUBLIC_APP_URL + '/cms/leads'

export const createLead = async (payload: Lead) => {
  return fetch(LEADS_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
