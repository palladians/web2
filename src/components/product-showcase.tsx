import NextImage from "next/image";

export const ProductShowcase = ({
  title,
  url,
  description,
  imgSrc,
}: Record<string, string>) => {
  return (
    <section className="container grid snap-start grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-0">
      <div className="flex flex-col justify-center gap-8 pr-16">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <p className="text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <NextImage
          src={imgSrc}
          width={645}
          height={489}
          alt={title}
          className="rounded-[1rem] transition-transform duration-300 hover:scale-[1.01]"
        />
      </a>
    </section>
  );
};
