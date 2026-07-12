import type { MetadataRoute } from "next";
import { COMPANY, PRODUCTS, BLOG_POSTS } from "@/lib/data";

/**
 * Native Next.js sitemap convention.
 *
 * Previously this was a custom route.ts at src/app/sitemap.xml/route.ts.
 * That pattern conflicts with Next.js's own metadata file handling for
 * "sitemap.xml", causing intermittent "Temporary processing error" in
 * Google Search Console. The native sitemap.ts convention is the correct,
 * stable approach.
 *
 * Note: The `images` field is a Next.js 15.1+ extension to MetadataRoute.Sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.url;
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      images: [`${base}/teckon.png`],
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${base}/teckon.png`],
    },
    {
      url: `${base}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/quality`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/events`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(product.image ? { images: [`${base}${product.image}`] } : {}),
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    ...(post.image ? { images: [`${base}${post.image}`] } : {}),
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
