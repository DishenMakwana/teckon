import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SafeImage from "@/components/ui/SafeImage";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { BLOG_POSTS } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Teckon™ Blog`,
    description: post.excerpt,
    keywords: [
      post.title,
      `${post.title} guide`,
      "Teckon blog",
      "hydraulic maintenance tips",
      "JCB maintenance guides",
      "heavy equipment advice",
    ],
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={post.image} alt={post.title} fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-white/70 text-base">
            <span className="bg-[#FFBE00] text-[#0B0F19] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 font-medium mb-8">{post.excerpt}</p>
              {post.content.split("\n").map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <br key={i} />;
                if (trimmed.startsWith("## ")) return <h2 key={i} className="text-2xl font-black text-teckon-blue mt-8 mb-4">{trimmed.slice(3)}</h2>;
                if (trimmed.startsWith("**") && trimmed.endsWith("**")) return <p key={i} className="font-bold text-[#111111] my-2">{trimmed.slice(2, -2)}</p>;
                if (trimmed.startsWith("- ")) return <li key={i} className="text-gray-600 ml-4">{trimmed.slice(2)}</li>;
                return <p key={i} className="text-gray-600 leading-relaxed mb-4">{trimmed}</p>;
              })}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-teckon-blue rounded-2xl p-6 mb-6">
                <h3 className="text-white font-bold mb-4">Need Hydraulic Parts?</h3>
                <p className="text-white/70 text-sm mb-4">Get a quick quote for any hydraulic spare for your equipment.</p>
                <Link href="/contact" className="block text-center bg-[#FFBE00] text-[#0B0F19] font-bold py-3 rounded-xl hover:bg-[#d99e00] transition-colors text-sm">
                  Get a Quote
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#111111] mb-4">Contact Us</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="tel:+916351879842" className="text-teckon-blue font-medium hover:underline">📞 +91-63518 79842</a>
                  <a href="mailto:shreejihyd4008@gmail.com" className="text-teckon-blue font-medium hover:underline break-all">✉️ shreejihyd4008@gmail.com</a>
                  <a href="https://wa.me/919426915578" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">💬 WhatsApp Chat</a>
                </div>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-black text-[#111111] mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex gap-4 bg-gray-50 rounded-2xl p-4 hover:shadow-md transition-shadow">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      <SafeImage src={r.image} alt={r.title} fill sizes="96px" className="object-cover" />
                    </div>
                    <div>
                      <span className="text-xs text-[#FF6B35] font-semibold">{r.category}</span>
                      <h3 className="font-bold text-[#111111] text-sm leading-tight mt-1 group-hover:text-teckon-blue transition-colors">{r.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
