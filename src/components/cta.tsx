import { Button } from "@/components/ui/button"
import NextImage from 'next/image'

export const Cta = () => {
  return (
    <div className="flex flex-col justify-center items-center py-32 text-left lg:text-center bg-zinc-900 relative">
      <NextImage src="/oval-blur.png" width={1200} height={500} className="absolute bottom-0 left-0 right-0 w-full" alt="Blurry Background" />
      <NextImage src="/cta-addon1.png" width={480} height={480} alt="Addon 1" className="hidden lg:flex absolute left-0 bottom-0 top-0 h-full" />
      <NextImage src="/cta-addon2.png" width={550} height={550} alt="Addon 1" className="hidden lg:flex absolute right-0 bottom-0 top-0 h-full" />
      <div className="container flex flex-col gap-4 items-start lg:items-center justify-center relative">
        <h2 className="text-5xl font-semibold max-w-[40rem] leading-[4rem]">Are you ready to take your idea to the <span className="text-primary">next level</span>?</h2>
        <p className="max-w-[36rem] leading-8 text-muted-foreground">Book a call today and learn how we can help you build user-friendly Web3 applications that will reach your target audience and drive results.</p>
        <div className="flex gap-4">
          <Button size="lg">Book Call</Button>
          <Button variant="secondary" size="lg">About us</Button>
        </div>
      </div>
    </div>
  )
}
