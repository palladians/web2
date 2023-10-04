import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import NextImage from 'next/image'
import { getBlogPosts } from '@/api/getBlogPosts'
import { ArticleCard } from './article-card'

export const LatestArticles = async () => {
  const articles = await getBlogPosts({ limit: 3 })
  return (
    <section id="blog" className="border-t py-24 w-full snap-start">
      <div className="container flex flex-col flex-1 gap-16 relative">
        <NextImage src="/blog.png" width={600} height={300} alt="Blog" className="absolute top-24 lg:top-8 left-1/2 transform -translate-x-1/2" />
        <div className="flex items-center justify-start lg:justify-center mt-8 relative">
          <h2 className="text-5xl font-semibold">Latest <span className="text-primary">Articles</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {articles.map((article, i) => (
            <NextLink key={i} href={`/blog/${article.slug}`}>
              <ArticleCard coverImageId={article.cover_image.id} datePublished={article.date_published} title={article.title} />
            </NextLink>
          ))}
        </div>
        <div className="flex justify-start lg:justify-center items-center">
          <Button variant="secondary" size="lg" asChild>
            <NextLink href="/blog">
              See more
            </NextLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
