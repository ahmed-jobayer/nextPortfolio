import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['imgur.com', 'i.imgur.com'],
    remotePatterns:[
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
