import { client } from "./client"
import { createItem } from "@directus/sdk"
import { Lead } from './types'

export const createLead = async (payload: Lead) => {
  return client.request<Lead>(createItem('leads', payload))
}
