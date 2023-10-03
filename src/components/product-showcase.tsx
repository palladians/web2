import NextImage from 'next/image'

export const ProductShowcase = ({ title, description, imgSrc }: Record<string, string>) => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div className="flex flex-col gap-8 justify-center pr-16">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <p className="leading-8 text-muted-foreground text-lg">{description}</p>
      </div>
      <div className="flex items-center justify-center">
        <NextImage src={imgSrc} width={645} height={489} alt={title} />
      </div>
    </div>
  )
}
