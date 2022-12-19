/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: true,
    },
    images: {
        domains: [
            "images.unsplash.com",
            "wembleypark.com",
            "hydeparkwinterwonderland.com",
        ],
    },
};

module.exports = nextConfig;
