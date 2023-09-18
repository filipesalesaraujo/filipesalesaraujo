/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    domains: [
      "painel.filipesalesaraujo.com",
      "localhost"
    ]
  },
}

module.exports = nextConfig
