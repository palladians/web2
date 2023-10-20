import NextImage from 'next/image'
import { assetUrl } from '@/api/client'
import { cn } from '@/lib/utils'
import { PostMeta } from './post-meta'

export type ArticleCardProps = {
  coverImageId: string
  datePublished: string
  title: string
  name?: string
  horizontal?: boolean
  readingMin?: number
}

export const ArticleCard = ({ coverImageId, datePublished, title, name, readingMin, horizontal = false }: ArticleCardProps) => {
  return (
    <div className={cn("flex gap-8 flex-col group", horizontal ? 'lg:flex-row' : 'lg:flex-col')}>
      <NextImage src={assetUrl(coverImageId)} width={horizontal ? 360 : 600} height={300} alt="Blog" className="flex-1 rounded-[1rem] shadow-xl shadow-indigo-500/5 group-hover:shadow-indigo-500/20 group-hover:shadow-2xl group-hover:scale-[1.01] w-full h-full duration-300" />
      <div className="flex-1 flex flex-col px-8 gap-4 justify-center">
        <PostMeta datePublished={datePublished} name={name} readingMin={readingMin} />
        <h3 className="text-2xl leading-[2.5rem]">{title}</h3>
      </div>
    </div>
  )
}
