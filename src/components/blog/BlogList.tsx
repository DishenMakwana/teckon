"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import { Search, X, SlidersHorizontal } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

function BlogListContent({ posts }: BlogListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchVal, setSearchVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync category and search query using render-phase state updates to avoid useEffect ESLint warnings
  const [prevCategoryQuery, setPrevCategoryQuery] = useState<string | null>(null);
  const [prevSearchQuery, setPrevSearchQuery] = useState<string | null>(null);

  if (categoryQuery !== prevCategoryQuery) {
    setActiveCategory(categoryQuery || "All");
    setPrevCategoryQuery(categoryQuery);
  }

  if (searchQuery !== prevSearchQuery) {
    setSearchVal(searchQuery || "");
    setPrevSearchQuery(searchQuery);
  }

  // Debounced URL updates for searchVal
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";
      if (searchVal !== currentSearch) {
        const params = new URLSearchParams(searchParams.toString());
        if (searchVal) {
          params.set("search", searchVal);
        } else {
          params.delete("search");
        }
        router.push(`/blog?${params.toString()}`, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchVal, searchParams, router]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === "All") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  // Dynamically get unique categories
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  // Filter posts based on active category AND searchVal
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    const matchesSearch = !searchVal ||
      post.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchVal.toLowerCase()) ||
      post.category.toLowerCase().includes(searchVal.toLowerCase()) ||
      post.author.toLowerCase().includes(searchVal.toLowerCase());
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search & Filter Control Bar */}
      <div className="flex flex-row gap-4 justify-between items-center mb-12 w-full">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search blogs by title, excerpt..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full pl-11 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBE00] focus:border-[#FFBE00] transition-all duration-300 font-medium"
          />
          {searchVal && (
            <button
              onClick={() => setSearchVal("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filter Dropdown */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            title="Filter by category"
            className={`relative flex items-center justify-center h-[52px] w-[52px] bg-white border rounded-2xl shadow-sm transition-all duration-300 hover:border-[#FFBE00] hover:text-[#0B0F19] cursor-pointer focus:outline-none ${
              isOpen ? "border-[#FFBE00] text-[#0B0F19] bg-gray-50" : "border-gray-200 text-gray-500"
            }`}
          >
            <SlidersHorizontal className="h-5 w-5" />
            {activeCategory !== "All" && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FFBE00] border-2 border-white rounded-full animate-pulse" />
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 py-2 origin-top-right overflow-hidden"
              >
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        handleCategoryChange(cat);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold transition-colors duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#FFBE00]/10 text-[#0B0F19]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#0B0F19]"
                      }`}
                    >
                      <span>{cat}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#FFBE00]" />
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 text-gray-400 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-5xl mb-4">📰</div>
          <p className="font-semibold text-lg text-gray-700">No blog posts found matching your criteria.</p>
          <p className="text-sm text-gray-400 mt-1">Try clearing your search query or selecting a different category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 35,
                  mass: 0.8
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100 shrink-0">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1E293B] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="font-extrabold text-[#0B0F19] text-lg mb-3 leading-snug group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-50">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#FF6B35] font-bold text-sm hover:gap-3 transition-all"
                    >
                      Read Technical Guide <span className="text-xs">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-gray-500">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35] mx-auto mb-4"></div>
        <p className="font-semibold text-lg text-[#FF6B35]">Loading blogs...</p>
      </div>
    }>
      <BlogListContent posts={posts} />
    </Suspense>
  );
}
