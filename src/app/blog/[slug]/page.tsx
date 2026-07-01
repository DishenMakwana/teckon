import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import SafeImage from "@/components/ui/SafeImage";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { BLOG_POSTS, COMPANY } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import {
  Calendar,
  User,
  BookOpen,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Builds BlogPosting JSON-LD structured data for a blog post page.
 *
 * Serves structured data in the initial server-rendered HTML so that
 * Google's article indexing and AI search citations can extract the
 * headline, author, date, and image without JavaScript execution.
 */
function buildArticleSchema(
  slug: string,
  post: {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    author: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${COMPANY.url}${post.image}`,
    url: `${COMPANY.url}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/blog/${slug}`,
    },
    author: {
      "@type": "Organization",
      name: post.author,
      url: COMPANY.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.brandFull,
      url: COMPANY.url,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.url}/teckon.png`,
      },
    },
    about: {
      "@type": "Thing",
      name: "Hydraulic Parts and Heavy Machinery Maintenance",
    },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    alternates: { canonical: `/blog/${slug}` },
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
    openGraph: {
      type: "article",
      title: `${post.title} | Teckon™ Blog`,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export const unstable_instant = false;

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related articles: up to 2 posts excluding the current one
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  // Article JSON-LD — included in server HTML so AI crawlers can extract
  // the headline, author, publish date, and image without running JavaScript.
  const articleSchema = buildArticleSchema(slug, post);

  return (
    <ViewTransition name={`blog-detail-${slug}`}>
      {/* Article structured data — server-rendered so Googlebot and AI crawlers
          read headline, author, and publish date on the first HTTP response. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Dynamic Scroll Reading Progress bar */}
      <ScrollProgressBar />

      {/* Hero Banner */}
      <section
        id="blog-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-15">
          <ViewTransition name={`blog-image-${post.slug}`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </ViewTransition>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0B0F19_95%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar
            items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
          />

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-6 mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-white/80 text-sm font-mono">
            <span className="bg-[#FFBE00] text-[#0B0F19] text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#FFBE00]" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-[#FFBE00]" />
              By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-[#FFBE00]" />5 Min Read
            </span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section id="blog-content" className="py-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column: Article Body (lg:col-span-2) */}
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              {/* Highlighted Lead Excerpt */}
              <p className="text-xl text-slate-700 leading-relaxed font-semibold italic border-l-4 border-[#FFBE00] pl-4 my-6 select-none bg-slate-50 py-4 pr-3 rounded-r-xl">
                {post.excerpt}
              </p>

              {/* Main formatted parser */}
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                {post.content.split("\n").map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <div key={i} className="h-2" />;

                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="text-2xl font-black text-[#0B0F19] mt-8 mb-4 border-b border-slate-100 pb-2 uppercase font-mono tracking-wide"
                      >
                        {trimmed.slice(3)}
                      </h2>
                    );
                  }

                  if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                    return (
                      <p
                        key={i}
                        className="font-extrabold text-[#0B0F19] my-3 text-base"
                      >
                        {trimmed.slice(2, -2)}
                      </p>
                    );
                  }

                  if (trimmed.startsWith("- ")) {
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-600 text-sm ml-2"
                      >
                        <span className="text-[#FFBE00] mt-1 text-xs">⚡</span>
                        <span className="flex-1">{trimmed.slice(2)}</span>
                      </li>
                    );
                  }

                  return (
                    <p
                      key={i}
                      className="text-slate-600 text-[15px] leading-relaxed"
                    >
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </article>

            {/* Right Column: Sticky Glassmorphic Sidebar (lg:col-span-1) */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-6">
              {/* Sourcing Panel */}
              <div className="bg-[#0B0F19] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden text-center md:text-left">
                {/* Visual grid sheet */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <span className="text-[#FFBE00] font-mono text-[9px] uppercase tracking-widest font-bold">
                    🔧 Factory Spares Sourcing
                  </span>
                  <h3 className="text-white font-black text-lg leading-tight">
                    Need Hydraulic Parts?
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Get a quick quote on JCB, Hitachi, Terex, and Case
                    replacement components direct from our factory floors in
                    Rajkot.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-[#FFBE00] text-[#0B0F19] font-black py-3.5 rounded-2xl hover:bg-[#d99e00] transition-colors text-sm shadow-md tracking-wide uppercase"
                  >
                    Get a Quick Quote
                  </Link>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <h3 className="font-extrabold text-[#0B0F19] text-base font-mono uppercase tracking-wider border-b border-gray-200 pb-2">
                  Contact Factory
                </h3>
                <div className="flex flex-col gap-3 text-xs font-semibold">
                  <a
                    href="tel:+916351879842"
                    className="flex items-center gap-2.5 text-teckon-blue hover:text-[#FF6B35] transition-colors"
                  >
                    <span className="p-1.5 bg-slate-200/50 rounded-lg text-slate-600">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span>+91-63518 79842</span>
                  </a>
                  <a
                    href="mailto:shreejihyd4008@gmail.com"
                    className="flex items-center gap-2.5 text-teckon-blue hover:text-[#FF6B35] transition-colors break-all"
                  >
                    <span className="p-1.5 bg-slate-200/50 rounded-lg text-slate-600">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span>shreejihyd4008@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/919426915578"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span className="p-1.5 bg-emerald-100/50 text-emerald-600 rounded-lg">
                      <MessageSquare className="h-3.5 w-3.5" />
                    </span>
                    <span>WhatsApp Chat Support</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Footer section */}
          {related.length > 0 && (
            <div
              id="related-articles"
              className="mt-20 border-t border-gray-100 pt-12"
            >
              <h2 className="text-2xl font-black text-[#0B0F19] mb-8 tracking-tight">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex gap-4 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                      <SafeImage
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="96px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="text-[10px] text-[#FF6B35] font-mono font-bold uppercase tracking-wider">
                        {r.category}
                      </span>
                      <h3 className="font-extrabold text-[#0B0F19] text-sm leading-snug mt-1 group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </ViewTransition>
  );
}
