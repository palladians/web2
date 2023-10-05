import { getBlogPosts } from '@/api/getBlogPosts'
import { getDynamicPages } from '@/api/getDynamicPages'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = (await getBlogPosts({ limit: 100 })).map((post) => ({
    url: `https://palladians.xyz/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as never,
    priority: 0.8,
  }))
  const dynamicPages = (await getDynamicPages()).map((page) => ({
    url: `https://palladians.xyz/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as never,
    priority: 0.8,
  }))
  return [
    {
      url: 'https://palladians.xyz',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://palladians.xyz/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts,
    ...dynamicPages
  ]
}
