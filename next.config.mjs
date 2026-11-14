/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ensures 100% reliable local image rendering and SSG compatibility
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yescollege.com.au',
      },
    ],
  },
};

export default nextConfig;

