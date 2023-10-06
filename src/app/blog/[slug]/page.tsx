import { Metadata } from 'next'
import { getBlogPost } from "@/api/getBlogPost"
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image'
import { assetUrl } from '@/api/client'
import { PostMeta } from "@/components/post-meta"
import { readingTime } from 'reading-time-estimator'

type BlogPostPageProps = { params: { slug: string } }

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const article = await getBlogPost({ slug: params.slug })
  const coverUrl = assetUrl(article.cover_image.id)
  return {
    title: `${article.title} \\ Palladians`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} \\ Palladians`,
      description: article.excerpt,
      images: coverUrl
    },
    twitter: {
      title: `${article.title} \\ Palladians`,
      description: article.excerpt,
      images: [coverUrl],
    },
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const article = await getBlogPost({ slug: params.slug })
  const coverUrl = assetUrl(article.cover_image.id)
  const blurryUrl = encodeURI(`${coverUrl}?width=200&quality=1&transforms=[["blur",100]]`)
  return (
    <div className="container max-w-[48rem] flex flex-col gap-8 py-16">
      <NextImage src={coverUrl} width={768} height={400} alt={article.title} blurDataURL={blurryUrl} placeholder="blur" className="rounded-[1rem] shadow-xl shadow-indigo-500/5" />
      <PostMeta name={article.author.name} datePublished={article.date_published} readingMin={readingTime(article.content).minutes} />
      <h1 className="text-5xl font-semibold leading-[4rem]">{article.title}</h1>
      <ReactMarkdown className="prose lg:prose-lg dark:prose-invert max-w-none">{article.content}</ReactMarkdown>
    </div>
  )
}

export default BlogPostPage
