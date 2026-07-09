import type { MetadataRoute } from "next";
import { COMPANY, PRODUCTS, BLOG_POSTS } from "@/lib/data";

// All data comes from static local imports — no external fetches.
// ISR window: serve from cache, regenerate in the background at most once per
// hour. This avoids cold-start cache misses (e.g. Googlebot hitting a stale
// Vercel edge node) that would otherwise force a synchronous regeneration.
export const revalidate = 3600; // seconds — regenerate at most once per hour

// Captured once per render so every URL gets a consistent lastModified
// timestamp within the same ISR window.
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
