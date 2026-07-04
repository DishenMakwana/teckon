"use client";

import { ViewTransition } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
  clickedSlug: string | null;
  setClickedSlug: (slug: string | null) => void;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    y: -6,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 35,
      mass: 0.8,
    },
  },
};

export default function BlogCard({
  post,
  clickedSlug,
  setClickedSlug,
}: BlogCardProps) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl flex flex-col h-full transition-shadow duration-300"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col flex-grow h-full"
        onClick={() => setClickedSlug(post.slug)}
      >
        <div className="relative h-44 overflow-hidden bg-gray-100 shrink-0">
          <ViewTransition
            name={
              clickedSlug === post.slug
                ? `blog-image-${post.slug}`
                : undefined
            }
          >
            <div className="absolute inset-0">
              <SafeImage
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 z-0"
              />
              <span
                className={`absolute top-3 left-3 bg-[#1E293B]
                  text-white text-[9px] font-black px-2.5
                  py-1 rounded-lg uppercase tracking-wider
                  shadow-sm border border-white/5 z-10`}
              >
                {post.category}
              </span>
            </div>
          </ViewTransition>
        </div>

        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-mono">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            <h3 className="font-extrabold text-[#0B0F19] text-base lg:text-lg mb-3 leading-snug group-hover:text-[#FF6B35] transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-500 text-xs lg:text-sm mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 mt-auto">
            <div className="inline-flex items-center gap-1.5 text-[#FF6B35] font-black text-xs group-hover:gap-2.5 transition-all uppercase tracking-wider">
              Read Technical Guide <span>→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
