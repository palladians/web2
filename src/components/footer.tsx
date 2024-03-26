import NextImage from "next/image";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCallIcon, DribbbleIcon, LayersIcon } from "lucide-react";

const EMAIL = "team@palladians.xyz";
const CAL_URL = "https://cal.com/palladians";
const X_URL = "https://x.com/palladians_xyz";
const DISCORD_URL = "https://discord.gg/ExzzfTGUnB";
const LINKEDIN_URL = "https://linkedin.com/company/palladians";
const DRIBBBLE_URL = "https://dribbble.com/palladians";
const LAYERS_URL = "https://layers.to/palladians";

export const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-16 bg-zinc-900 py-24 lg:gap-32">
      <NextImage
        src="/oval-blur.png"
        width={1200}
        height={500}
        className="absolute left-0 right-0 top-0 hidden h-full w-full rotate-180 lg:flex"
        alt="Blurry Background"
      />
      <div className="container relative grid grid-cols-1 gap-16 lg:grid-cols-5">
        <div>
          <NextLink href="/">
            <NextImage
              src="/logo-symbol.svg"
              width={50}
              height={50}
              alt="Logo Symbol"
            />
          </NextLink>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Social Media</h4>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="icon" asChild>
              <a href={X_URL} target="_blank" rel="noopener noreferrer">
                <NextImage
                  src="/twitter-x.svg"
                  width={20}
                  height={20}
                  alt="x.com"
                />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <NextImage
                  src="/discord.svg"
                  width={20}
                  height={20}
                  alt="Discord"
                />
              </a>
            </Button>
            <Button variant="secondary" size="icon">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <NextImage
                  src="/linkedin.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                />
              </a>
            </Button>
            <Button variant="secondary" size="icon">
              <a href={DRIBBBLE_URL} target="_blank" rel="noopener noreferrer">
                <DribbbleIcon />
              </a>
            </Button>
            <Button variant="secondary" size="icon">
              <a href={LAYERS_URL} target="_blank" rel="noopener noreferrer">
                <LayersIcon />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Contact</h4>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-muted-foreground flex items-center gap-2"
            >
              <NextImage src="/email.png" width={24} height={20} alt="Email" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground flex items-center gap-2"
            >
              <PhoneCallIcon className="text-primary" />
              <span>Book Call</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Collective</h4>
          <div className="mt-2 flex flex-col gap-4">
            <a href="/#about" className="text-muted-foreground">
              About
            </a>
            <a href="/#products" className="text-muted-foreground">
              Products
            </a>
            <NextLink href="/blog" className="text-muted-foreground">
              Blog
            </NextLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Products</h4>
          <div className="mt-2 flex flex-col gap-4">
            <a
              href="https://pallad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground"
            >
              Pallad
            </a>
            <a
              href="https://minaverse.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground"
            >
              Minaverse
            </a>
            <a
              href="https://github.com/palladians/herald"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground"
            >
              Herald
            </a>
          </div>
        </div>
      </div>
      <div className="container relative flex flex-col justify-center gap-8 lg:flex-row">
        <p>© 2023 Palladians</p>
        <NextLink href="/privacy">Privacy Policy</NextLink>
        <NextLink href="/terms">Terms of Service</NextLink>
      </div>
    </footer>
  );
};
