import { format } from 'date-fns'

export type PostMetaProps = {
  name?: string
  datePublished: string
  readingMin?: number
}

export const PostMeta = ({ name, datePublished, readingMin }: PostMetaProps) => {
  return (
    <div className="flex gap-4 items-center">
      {readingMin && <p className="text-muted-foreground">{readingMin} mins</p>}
      {name && <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="text-muted-foreground">{name}</span>
      </div>}
      <p className="text-primary font-semibold">{format(new Date(datePublished), 'dd.MM.yyyy')}</p>
    </div>
  )
}
