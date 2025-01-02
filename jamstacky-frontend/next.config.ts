/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', 
        pathname: '/**', 
      },
    ],
  },
};

module.exports = nextConfig;
