import NextImage from 'next/image'

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-24 relative overflow-hidden">
      <div className="hidden lg:flex absolute w-16 h-[32rem] bg-indigo-300 -right-[8rem] -bottom-[4rem] blur-[10rem]" />
      <div className="relative flex items-center">
        <NextImage src="/signet.svg" width={800} height={600} alt="Signet" className="absolute" />
        <div className="relative flex flex-col gap-4 max-w-[42rem] ml-0 lg:ml-auto px-4 lg:pl-16">
          <h1 className="text-5xl font-semibold leading-[4rem] max-w-[24rem]">Bridging the gap <span className="text-primary">between you</span> and the Web3.</h1>
          <p className="leading-8 text-muted-foreground max-w-[36.6rem] text-lg">We are a software development collective of open source enthusiasts. Our main mission is to enrich Web3 with user-friendly experiences. We build with stable tools and research cutting-edge technology.</p>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center relative">
        <NextImage src="/hero-addon.png" width={500} height={500} alt="Hero Addon" />
      </div>
    </section>
  )
}
