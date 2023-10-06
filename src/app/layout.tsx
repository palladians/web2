import Script from 'next/script'
import { Providers } from '@/components/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

const grotesk = Schibsted_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Palladians',
  description: 'We are a software development collective of open source enthusiasts. Our main mission is to enrich Web3 with user-friendly experiences. We build with stable tools and research cutting-edge technology.',
  keywords: 'Software Development, Open Source, Software Company, TypeScript, Web3, Blockchain, Poznan, Berlin, Mina Protocol, Smart Contracts, React, MINA, zkEVM',
  openGraph: {
    images: '/og.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palladians',
    description: 'We are a software development collective of open source enthusiasts. Our main mission is to enrich Web3 with user-friendly experiences. We build with stable tools and research cutting-edge technology.',
    creator: '@palladians_xyz',
    images: ['https://palladians.xyz/og.jpg'],
  },
  metadataBase: new URL('https://palladians.xyz')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script src="https://ackee.sh.palladians.xyz/tracker.js" data-ackee-server="https://ackee.sh.palladians.xyz" data-ackee-domain-id="05aac9bf-7eb8-419e-bf3c-95c25d72aac6" />
      <body className={cn(grotesk.className, 'flex flex-col min-h-screen')}>
        <Navbar />
        <Providers>
          <div className="flex-1">
            {children}
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
