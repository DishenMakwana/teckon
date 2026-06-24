"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import { Search, X, ChevronRight, ChevronLeft } from "lucide-react";

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

// Variants for Dribbble-style card hover and filtering transitions
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 25
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: 20,
    transition: {
      duration: 0.2
    }
  },
  hover: { 
    y: -6,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 35,
      mass: 0.8
    }
  }
};

function BlogListContent({ posts }: BlogListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  // Scroll indicator fade states
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Sync category and search query using render-phase state updates
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
  const handleSearch = useDebouncedCallback((term: string) => {
    const currentSearch = searchParams.get("search") || "";
    if (term !== currentSearch) {
      const params = new URLSearchParams(searchParams.toString());
      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }
      router.push(`/blog?${params.toString()}`, { scroll: false });
    }
  }, 300);

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

  // Check scroll positions to show/hide indicator fades
  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowLeftFade(scrollLeft > 5);
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Recalculate scroll states on mount, resize, and data changes
  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [filteredPosts]);

  // Featured Article layout determinations (only when viewing "All" and search is empty)
  const showFeatured = activeCategory === "All" && !searchVal && filteredPosts.length > 0;
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div>
      {/* Search & Dribbble Sliding Tag Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
        
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-xs shrink-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchVal}
            onChange={(e) => {
              const val = e.target.value;
              setSearchVal(val);
              handleSearch(val);
            }}
            className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-150 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBE00] focus:border-[#FFBE00] focus:bg-white transition-all duration-300 font-bold text-sm"
          />
          {searchVal && (
            <button
              onClick={() => {
                setSearchVal("");
                handleSearch("");
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          )}
        </div>

        {/* Horizontal Scroll Pill Filters Wrapper with indicator animations */}
        <div className="flex-grow overflow-hidden flex items-center relative min-w-0">
          {/* Left Fading Edge Scroll Indicator + Floating Chevron Helper */}
          <AnimatePresence>
            {showLeftFade && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-0 bottom-0 flex items-center pr-8 pl-1 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-10"
              >
                <ChevronLeft className="h-4 w-4 text-gray-400 animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scrollable category list */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex-1 overflow-x-auto scrollbar-none py-1"
          >
            <div className="flex items-center gap-1.5 pr-8 min-w-max">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs font-black tracking-wide whitespace-nowrap transition-colors cursor-pointer select-none focus:outline-none ${
                      isSelected
                        ? "text-[#0B0F19]"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-100/50"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeBlogCategoryPill"
                        className="absolute inset-0 bg-[#FFBE00] rounded-xl z-0 shadow-sm"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{cat === "All" ? "All Articles" : cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Fading Edge Scroll Indicator + Floating Chevron Helper */}
          <AnimatePresence>
            {showRightFade && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-0 bottom-0 flex items-center pl-8 pr-1 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none z-10"
              >
                <ChevronRight className="h-4 w-4 text-gray-400 animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 text-gray-400 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="text-5xl mb-4">📰</div>
          <p className="font-semibold text-lg text-gray-700">No articles found matching your criteria.</p>
          <p className="text-sm text-gray-400 mt-1">Try clearing your search query or selecting a different category.</p>
        </div>
      ) : (
        <div className="w-full">
          
          {/* Featured Article Hero Block (Only shown on default All view) */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 mb-12 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch p-4 lg:p-6"
            >
              {/* Image */}
              <div className="relative w-full lg:w-[55%] min-h-[220px] lg:min-h-[320px] rounded-2xl overflow-hidden shrink-0">
                <SafeImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#FF6B35] text-white text-[9px] font-black px-3.5 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
                  🔥 Featured Guide
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between py-2 flex-grow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                    <span className="font-bold text-[#FF6B35] uppercase tracking-wider">{featuredPost.category}</span>
                    <span>•</span>
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>By {featuredPost.author}</span>
                  </div>

                  <h2 className="font-black text-[#0B0F19] text-xl lg:text-3xl leading-snug group-hover:text-[#FF6B35] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-500 text-sm lg:text-base leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6 lg:mt-0">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#FF6B35] font-black text-xs hover:gap-3.5 transition-all uppercase tracking-wider"
                  >
                    Read Complete Guide <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          )}

          {/* Articles Grid (Remaining/Filtered posts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl flex flex-col h-full transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow h-full">
                    
                    <div className="relative h-44 overflow-hidden bg-gray-100 shrink-0">
                      <SafeImage
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#1E293B] text-white text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm border border-white/5">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-mono">
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
              ))}
            </AnimatePresence>
          </div>

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
        <p className="font-semibold text-lg text-[#FF6B35]">Loading articles...</p>
      </div>
    }>
      <BlogListContent posts={posts} />
    </Suspense>
  );
}
