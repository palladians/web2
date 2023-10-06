'use client'

import { ThemeProvider } from 'next-themes'
import { ParallaxProvider } from 'react-scroll-parallax'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  )
}
