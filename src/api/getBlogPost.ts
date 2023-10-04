import { client } from "./client"
import { readItems } from "@directus/sdk"
import { BlogPost } from './types'

type GetBlogPostProps = {
  slug: string
}

export const getBlogPost = async ({ slug }: GetBlogPostProps) => {
  const matching = await client.request<BlogPost[]>(readItems('blog_posts', { filter: { slug }, fields: ['*.*'] }))
  return matching[0]
}
