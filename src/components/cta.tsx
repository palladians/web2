import NextLink from 'next/link'
import { Button } from "@/components/ui/button"
import NextImage from 'next/image'

const CAL_URL = 'https://cal.com/palladians'

export const Cta = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32 text-left lg:text-center bg-zinc-900 relative snap-start">
      <NextImage src="/oval-blur.png" width={1200} height={500} className="hidden lg:flex absolute bottom-0 left-0 right-0 w-full" alt="Blurry Background" />
      <NextImage src="/cta-addon1.png" width={480} height={480} alt="Addon 1" className="hidden lg:flex absolute left-0 bottom-0 top-0 h-full" />
      <NextImage src="/cta-addon2.png" width={550} height={550} alt="Addon 1" className="hidden lg:flex absolute right-0 bottom-0 top-0 h-full" />
      <div className="container flex flex-col gap-6 items-start lg:items-center justify-center relative">
        <h2 className="text-5xl font-semibold max-w-[40rem] leading-[4rem]">Are you ready to take your idea to the <span className="text-primary">next level</span>?</h2>
        <p className="max-w-[38rem] leading-8 text-muted-foreground text-lg">Book a call today and learn how we can help you build user-friendly Web3 applications that will reach your target audience and drive results.</p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
              Book Call
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <NextLink href="/contact">
              Contact us
            </NextLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
