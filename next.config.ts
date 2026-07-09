import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer sent on same-origin and HTTPS cross-origin (no full URL leakage)
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features not used by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Prefetch DNS for external origins used by the site
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // HSTS — 2 years, subdomains, preload. Safe since Vercel enforces HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Stable top-level option in Next.js 16 — NOT experimental.
  // Graduated from experimental.dynamicIO / experimental.useCache in v15.
  // Enables the "use cache" directive and React <Activity>-based nav state preservation.
  cacheComponents: true,
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
    // Serve modern formats on supporting browsers
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    viewTransition: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  async headers() {
    return [
      // Prevent search engines from indexing optimized images
      {
        source: "/_next/image",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      // Security headers on all routes
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Long-term cache for public static images (immutable — rename file on update)
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Long-term cache for other public static assets (fonts, icons, manifests)
      {
        source:
          "/(favicon\\.ico|favicon\\.svg|teckon\\.ico|teckon\\.png|apple-touch-icon\\.png|site\\.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
