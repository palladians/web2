import NextImage from "next/image";

export const SocialProof = () => {
  return (
    <section className="container flex flex-col items-start justify-center gap-16 lg:items-center">
      <div className="align-left lg:align-center text-lg text-muted-foreground">
        We cooperate with top brands like
      </div>
      <div className="flex flex-col items-start justify-center gap-24 lg:flex-row lg:items-center">
        <a
          href="https://obscura.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NextImage src="/obscura.svg" width={240} height={80} alt="Obscura" />
        </a>
        <a href="https://iohk.io/" target="_blank" rel="noopener noreferrer">
          <NextImage src="/iohk.svg" width={240} height={80} alt="IOHK" />
        </a>
        <a
          href="https://minaprotocol.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NextImage
            src="/mina.svg"
            width={180}
            height={80}
            alt="Mina Protocol"
          />
        </a>
      </div>
    </section>
  );
};
