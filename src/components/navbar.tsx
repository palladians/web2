import NextImage from 'next/image'
import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { AlignRightIcon } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="bg-background py-4 sticky top-0 left-0 right-0 z-10">
      <div className="container flex justify-between">
        <NextLink href="/">
          <NextImage src="/logo.svg" width={200} height={64} alt="logo" className='w-[10rem] lg:w-[12rem]' />
        </NextLink>
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="secondary" asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#products">Products</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#blog">Blog</a>
          </Button>
          <Button>Contact</Button>
        </div>
        <div className="flex lg:hidden">
          <AlignRightIcon />
        </div>
      </div>
    </nav>
  )
}
