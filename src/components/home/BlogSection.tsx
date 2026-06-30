"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import { BLOG_POSTS } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Get the latest 3 blog posts (first 3 in the list represent our featured/latest blogs)
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section
      id="latest-blog"
      className="py-20 bg-slate-50 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Technical Insights
          </span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">
            Latest Spares & Maintenance Articles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our technical guides on hydraulic pumps, seal
            kits, and excavator maintenance to maximize machine uptime.
          </p>
        </motion.div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100 shrink-0">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <span className="absolute top-3 left-3 bg-[#1E293B] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs mb-3">
                    <span>
                      {formatDate(post.date)}
                    </span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  <div className="font-extrabold text-[#0B0F19] text-base md:text-lg mb-3 leading-snug group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                    {post.title}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More link */}
                <div className="pt-4 border-t border-gray-50 shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#FF6B35] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read Technical Guide on {post.category}{" "}
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-2 border-[#1E293B] text-[#1E293B] font-bold px-8 py-3 rounded-xl hover:bg-[#1E293B] hover:text-white transition-colors"
          >
            Explore All Articles & Guides
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
