/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'assets.replocdn.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
  