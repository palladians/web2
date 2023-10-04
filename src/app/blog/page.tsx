import NextLink from 'next/link'
import { Input } from "@/components/ui/input"
import { getBlogPosts } from '@/api/getBlogPosts'
import { ArticleCard } from '@/components/article-card'
import { readingTime } from 'reading-time-estimator'

const BlogIndexPage = async ({ searchParams }: { searchParams: { search: string } }) => {
  const articles = await getBlogPosts({ limit: 20, search: searchParams.search })
  return (
    <div className="flex flex-col gap-16 container max-w-[56rem] py-24">
      <h1 className="text-5xl font-semibold">Blog</h1>
      <form>
        <Input name="search" placeholder="Search for article" defaultValue={searchParams.search} />
      </form>
      {articles.map((article, i) => (
        <NextLink key={i} href={`/blog/${article.slug}`}>
          <ArticleCard coverImageId={article.cover_image.id} datePublished={article.date_published} title={article.title} name={article.author.name} readingMin={readingTime(article.content).minutes} horizontal />
        </NextLink>
      ))}
    </div>
  )
}

export default BlogIndexPage
