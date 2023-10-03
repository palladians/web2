import NextImage from 'next/image'
import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneCallIcon } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-16 lg:gap-32 py-24 bg-zinc-900 relative">
      <NextImage src="/oval-blur.png" width={1200} height={500} className="absolute top-0 left-0 right-0 w-full rotate-180" alt="Blurry Background" />
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-16 relative">
        <div>
          <NextImage src="/logo-symbol.svg" width={50} height={50} alt="Logo Symbol" />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Contact</h4>
          <div className="flex flex-col gap-4">
            <a className="flex gap-2 items-center text-muted-foreground">
              <NextImage src="/email.png" width={24} height={20} alt="Email" />
              <span>team@palladians.xyz</span>
            </a>
            <a className="flex gap-2 items-center text-muted-foreground">
              <PhoneCallIcon className="text-primary" />
              <span>Book Call</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Social Media</h4>
          <div className="flex gap-2 items-center">
            <Button variant="secondary" size="icon">
              <NextImage src="/twitter-x.svg" width={20} height={20} alt="x.com" />
            </Button>
            <Button variant="secondary" size="icon">
              <NextImage src="/discord.svg" width={20} height={20} alt="Discord" />
            </Button>
            <Button variant="secondary" size="icon">
              <NextImage src="/linkedin.svg" width={20} height={20} alt="LinkedIn" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Collective</h4>
          <div className="flex flex-col gap-4 mt-2">
            <a className="text-muted-foreground">About</a>
            <a className="text-muted-foreground">Products</a>
            <a className="text-muted-foreground">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Products</h4>
          <div className="flex flex-col gap-4 mt-2">
            <a className="text-muted-foreground">Pallad</a>
            <a className="text-muted-foreground">Minaverse</a>
            <a className="text-muted-foreground">Herald</a>
          </div>
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row justify-center gap-4">
        <p>© 2023 Palladians</p>
        <NextLink href="/">Privacy Policy</NextLink>
        <NextLink href="/">Terms of Service</NextLink>
      </div>
    </footer>
  )
}
