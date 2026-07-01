import type { MetadataRoute } from "next";
import { COMPANY, PRODUCTS, BLOG_POSTS } from "@/lib/data";

// All data comes from static local imports.
// revalidate=false → cache indefinitely; Vercel regenerates on next deployment.
export const revalidate = false;

// Captured once at build time so every URL gets a consistent lastModified
// timestamp without forcing dynamic rendering via repeated new Date() calls.
const BUILD_TIME = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const { url: baseUrl } = COMPANY;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/products",
    "/quality",
    "/events",
    "/careers",
    "/blog",
    "/contact",
    "/terms",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: BUILD_TIME,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Product pages change infrequently; use build time as the modified date.
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: BUILD_TIME,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog posts use their actual publish date as lastModified so search engines
  // can judge freshness accurately rather than using the build timestamp.
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
