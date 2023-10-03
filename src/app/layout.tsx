import { Providers } from '@/components/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const grotesk = Schibsted_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Palladians',
  description: 'We are a software development collective of open source enthusiasts. Our main mission is to enrich Web3 with user-friendly experiences. We build with stable tools and research cutting-edge technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
