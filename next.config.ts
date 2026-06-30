import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  experimental: {
    viewTransition: true,
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
