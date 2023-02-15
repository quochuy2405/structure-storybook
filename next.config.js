/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'storage.googleapis.com',
      'coinpayments.net',
      'scontent.fsgn13-2.fna.fbcdn.net',
      '1.bp.blogspot.com',
      'lh3.googleusercontent.com',
      'ftisu.vn'
    ],
    minimumCacheTTL: 1500000
  }
}

module.exports = nextConfig
