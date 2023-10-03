import { Button } from '@/components/ui/button'
import NextImage from 'next/image'
import { format } from 'date-fns'

const BLOG_POSTS = [
  { date: '2023-10-10', title: 'Pellentesque mattis sed sapien eu aliquet. Nunc congue varius nisl sed placerat.', coverSrc: '/blog-cover.jpeg' },
  { date: '2023-10-10', title: 'Pellentesque mattis sed sapien eu aliquet. Nunc congue varius nisl sed placerat.', coverSrc: '/blog-cover.jpeg' },
  { date: '2023-10-10', title: 'Pellentesque mattis sed sapien eu aliquet. Nunc congue varius nisl sed placerat.', coverSrc: '/blog-cover.jpeg' }
]

export const LatestArticles = () => {
  return (
    <section id="blog" className="border-t py-24 w-full snap-start">
      <div className="container flex flex-col flex-1 gap-16 relative">
        <NextImage src="/blog.png" width={600} height={300} alt="Blog" className="absolute top-24 lg:top-8 left-1/2 transform -translate-x-1/2" />
        <div className="flex items-center justify-start lg:justify-center mt-8 relative">
          <h2 className="text-5xl font-semibold">Latest <span className="text-primary">Articles</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {BLOG_POSTS.map((blogPost, i) => (
            <div key={i} className="flex flex-col gap-8">
              <NextImage src={blogPost.coverSrc} width={600} height={300} alt="Blog" className="rounded-[1rem] shadow-xl shadow-indigo-500/5" />
              <div className="flex flex-col px-8 gap-4">
                <p className="text-primary font-semibold">{format(new Date(blogPost.date), 'dd.mm.yyyy')}</p>
                <h3 className="text-2xl leading-[2.5rem]">{blogPost.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start lg:justify-center items-center">
          <Button variant="secondary" size="lg">See more</Button>
        </div>
      </div>
    </section>
  )
}
