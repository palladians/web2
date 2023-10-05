import { env } from './src/env.mjs'

const LEADS_URL = `${env.NEXT_PUBLIC_CMS_URL}/items/leads`

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cms.palladians.xyz', protocol: 'https' }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/cms/leads',
        destination: LEADS_URL,
      },
    ]
  },
}

export default nextConfig
