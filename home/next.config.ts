import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "http://localhost:3001/blog",
      },
      {
        source: "/blog/:path*",
        destination: "http://localhost:3001/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
