import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ['localhost:7070', '192.168.31.179:7070', '192.168.31.179'],
};

export default nextConfig;
