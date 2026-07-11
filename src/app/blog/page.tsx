import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

export const unstable_instant: boolean = false;
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { BLOG_POSTS, BlogPost } from "@/lib/data";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog & News | Teckon™ Quality Spares",
  description:
    "Technical guides, industry news, and company updates from Teckon™ — India's hydraulic parts specialists.",
  keywords: [
    "JCB spares maintenance",
    "excavator parts guides",
    "hydraulic troubleshooting tips",
    "heavy machinery blogs",
    "construction equipment spares news",
    "hydraulic pump rebuild guide",
    "heavy machinery hydraulic maintenance guide",
    "how to troubleshoot JCB backhoe loader hydraulic system",
    "step by step hydraulic pump rebuild tutorial",
    "excavator loader maintenance and service tips",
  ],
};

export default function BlogPage(): React.JSX.Element {
  const blogListSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog & News | Teckon™ Quality Spares",
    description:
      "Technical guides, industry news, and company updates from Teckon™ — India's hydraulic parts specialists.",
    url: "https://teckon.vercel.app/blog",
    blogPost: BLOG_POSTS.map(
      (post: BlogPost): Record<string, unknown> => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        url: `https://teckon.vercel.app/blog/${post.slug}`,
        image: post.image,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <section
        id="blog-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/blog-hydraulics.webp"
            alt="Hydraulic components, control valves, and precision parts display"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Blog" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Blog & Industry News
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Technical guides, maintenance tips, and updates from the Teckon™
            team.
          </p>
        </div>
      </section>

      <section id="blog-list" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="h-96 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#FFBE00] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <BlogList posts={BLOG_POSTS} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
