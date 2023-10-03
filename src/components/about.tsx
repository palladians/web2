import NextImage from 'next/image'
import { AboutCard } from './about-card'

const ABOUT_CARDS = [
  { title: 'Web3 Excellence', content: 'Our desire to know led us to build various applications for Ethereum, Cardano, and Mina Protocol. We are always up to date with the latest technology by doing research on a daily basis.', iconSrc: '/excellence.svg' },
  { title: 'Top quality', content: 'We build modular products using TypeScript and smart contract languages. We deliver code that is type-safe, covered with automated tests, and easy to deploy.', iconSrc: '/quality.svg' },
  { title: 'Security measures', content: 'The workflow for all products we develop includes automated static analysis and vulnerability checks. We have experience working with external auditors.', iconSrc: '/security.svg' }
]

export const About = () => {
  return (
    <div className="flex flex-col container gap-16 relative py-16">
      <NextImage src="/about.png" width={800} height={400} alt="About" className="absolute top-24 lg:top-16 left-1/2 transform -translate-x-1/2" />
      <div className="flex items-center justify-start lg:justify-center mt-8 relative">
        <h2 className="text-5xl font-semibold">About</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {ABOUT_CARDS.map((card, i) => (
          <AboutCard key={i} iconSrc={card.iconSrc} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  )
}
