import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashfleet.com',
        port: '',
        pathname: '/assets/img/recent-work/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
