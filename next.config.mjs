import { env } from './src/env.mjs'

const CMS_PROXY = `${env.NEXT_PUBLIC_CMS_URL}/:path*`

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
        source: '/cms/:path*',
        destination: CMS_PROXY,
      },
    ]
  },
}

export default nextConfig
