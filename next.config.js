/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.nba.com'],
  },
  reactStrictMode: true,
  env: {
    PREDICT_URL: 'http://0.0.0.0:5000/predict',
  }
}

module.exports = nextConfig
