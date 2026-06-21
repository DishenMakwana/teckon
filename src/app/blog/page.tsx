import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { BLOG_POSTS } from "@/lib/data";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog & News | Teckon™ Quality Spares",
  description:
    "Technical guides, industry news, and company updates from Teckon™ — India's hydraulic parts specialists.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/blog-hydraulics.webp" alt="Hydraulic components, control valves, and precision parts display" fill sizes="100vw" className="object-cover" priority loading="eager" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Blog" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Blog & Industry News</h1>
          <p className="text-white/70 text-xl max-w-2xl">Technical guides, maintenance tips, and updates from the Teckon™ team.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList posts={BLOG_POSTS} />
        </div>
      </section>
    </>
  );
}
