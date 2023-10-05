import { client } from "./client"
import { readItems } from "@directus/sdk"
import { Page } from './types'

type GetDynamicPageProps = {
  slug: string
}

export const getDynamicPage = async ({ slug }: GetDynamicPageProps) => {
  const matching = await client.request<Page[]>(readItems('pages', { filter: { slug }, fields: ['*.*'] }))
  return matching[0]
}
