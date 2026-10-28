import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Retaining walls are no longer offered
      {
        source: '/services/retaining-walls-brisbane',
        destination: '/services/landscaping-brisbane',
        permanent: true,
      },
      // Pricing guide removed — every job is quoted individually
      {
        source: '/pricing',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
