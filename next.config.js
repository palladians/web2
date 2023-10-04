/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cms.palladians.xyz', protocol: 'https' }
    ]
  }
}

module.exports = nextConfig
