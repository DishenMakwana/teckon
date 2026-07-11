import { COMPANY, PRODUCTS, BLOG_POSTS, Product, BlogPost } from "@/lib/data";

interface StaticRoute {
  route: string;
  priority: string;
  changefreq: string;
  image?: {
    loc: string;
    title: string;
  };
}

export async function GET(): Promise<Response> {
  const { url: baseUrl }: { url: string } = COMPANY;
  const buildTime: string = new Date().toISOString();

  // Define static routes with optional images
  const staticRoutes: StaticRoute[] = [
    {
      route: "",
      priority: "1.0",
      changefreq: "monthly",
      image: { loc: "/teckon.png", title: "Teckon Quality Spares Logo" },
    },
    {
      route: "/about",
      priority: "0.8",
      changefreq: "monthly",
      image: {
        loc: "/teckon.png",
        title: "Teckon Quality Spares Founders & Team",
      },
    },
    { route: "/products", priority: "0.8", changefreq: "monthly" },
    { route: "/quality", priority: "0.8", changefreq: "monthly" },
    { route: "/events", priority: "0.8", changefreq: "monthly" },
    { route: "/careers", priority: "0.8", changefreq: "monthly" },
    { route: "/blog", priority: "0.8", changefreq: "monthly" },
    { route: "/contact", priority: "0.8", changefreq: "monthly" },
    { route: "/terms", priority: "0.4", changefreq: "monthly" },
    { route: "/privacy-policy", priority: "0.4", changefreq: "monthly" },
  ];

  // 1. Build Static Routes XML entries
  const staticXml: string = staticRoutes
    .map((item: StaticRoute): string => {
      const imgXml: string = item.image
        ? `\n    <image:image>
      <image:loc>${baseUrl}${item.image.loc}</image:loc>
      <image:title>${escapeXml(item.image.title)}</image:title>
    </image:image>`
        : "";
      return `  <url>
    <loc>${baseUrl}${item.route}</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>${imgXml}
  </url>`;
    })
    .join("\n");

  // 2. Build Product Routes XML entries (with image mapping)
  const productXml: string = PRODUCTS.map((product: Product): string => {
    const imgXml: string = product.image
      ? `\n    <image:image>
      <image:loc>${baseUrl}${product.image}</image:loc>
      <image:title>${escapeXml(product.name)} ${escapeXml(product.model)}</image:title>
    </image:image>`
      : "";
    return `  <url>
    <loc>${baseUrl}/products/${product.slug}</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>${imgXml}
  </url>`;
  }).join("\n");

  // 3. Build Blog Routes XML entries (with image mapping)
  const blogXml: string = BLOG_POSTS.map((post: BlogPost): string => {
    const imgXml: string = post.image
      ? `\n    <image:image>
      <image:loc>${baseUrl}${post.image}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
    </image:image>`
      : "";
    return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>${imgXml}
  </url>`;
  }).join("\n");

  // Combine into standard XML response with namespaces
  const sitemapXml: string = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticXml}
${productXml}
${blogXml}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

// Helper to escape characters to prevent XML parsing issues
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c: string): string => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
