import NextImage from 'next/image'
import { Card } from '@/components/ui/card'

type AboutCardProps = {
  iconSrc: string
  title: string
  content: string
}

export const AboutCard = ({ iconSrc, title, content }: AboutCardProps) => {
  return (
    <Card className="flex flex-col gap-8 rounded-[1rem] bg-gradient-to-br from-zinc-800/75 to-zinc-900/50 p-6 lg:p-12">
      <div className="p-4 w-16 h-16 bg-gradient-radial to-indigo-100/20 from-indigo-500/20 rounded-[1rem] from-70%">
        <NextImage src={iconSrc as string} width={32} height={32} alt="Img" />
      </div>
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="leading-7 text-muted-foreground">{content}</p>
    </Card>
  )
}
