/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.nba.com'],
  },
  reactStrictMode: true,
  env: {
    PREDICT_URL: 'http://127.0.0.1:5001'
  }
}

module.exports = nextConfig
