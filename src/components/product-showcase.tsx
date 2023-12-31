import NextImage from 'next/image'

export const ProductShowcase = ({ title, url, description, imgSrc }: Record<string, string>) => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 snap-start">
      <div className="flex flex-col gap-8 justify-center pr-16">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <p className="leading-8 text-muted-foreground text-lg">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <NextImage src={imgSrc} width={645} height={489} alt={title} className="rounded-[1rem] hover:scale-[1.01] transition-transform duration-300" />
      </a>
    </section>
  )
}
