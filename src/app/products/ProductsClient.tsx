"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { PRODUCTS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  { id: "all", label: "All Products" },
  { id: "jcb", label: "JCB Spares" },
  { id: "hitachi", label: "Hitachi Parts" },
  { id: "terex", label: "Terex Parts" },
  { id: "cat", label: "CAT Components" },
  { id: "breakers", label: "Breakers & Tippers" },
  { id: "l770", label: "L770 / Tata JD" },
  { id: "excavator", label: "Excavator Parts" },
  { id: "filters", label: "Filters & Service" },
  { id: "general", label: "General Hydraulics" },
];

// Variants for Dribbble-style card hover interactions
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
    y: -5,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 35,
      mass: 0.8
    }
  }
};

const buttonVariants = {
  initial: { height: 0, opacity: 0, marginTop: 0, y: 10 },
  hover: { 
    height: 44, // exact height in pixels
    opacity: 1, 
    marginTop: 12, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25
    }
  }
};

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [active, setActive] = useState("all");
  const [searchVal, setSearchVal] = useState("");

  // Scroll indicator fade states
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const [prevCategoryQuery, setPrevCategoryQuery] = useState<string | null>(null);
  const [prevSearchQuery, setPrevSearchQuery] = useState<string | null>(null);

  if (categoryQuery !== prevCategoryQuery) {
    setActive(categoryQuery || "all");
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
      router.push(`/products?${params.toString()}`, { scroll: false });
    }
  }, 300);

  const handleCategoryChange = (categoryId: string) => {
    setActive(categoryId);
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const filtered = PRODUCTS.filter((product) => {
    const matchesCategory = active === "all" || product.category === active;
    
    const matchesSearch = !searchVal ||
      product.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      product.model.toLowerCase().includes(searchVal.toLowerCase()) ||
      product.ref.toLowerCase().includes(searchVal.toLowerCase()) ||
      product.description.toLowerCase().includes(searchVal.toLowerCase()) ||
      (product.categoryLabel && product.categoryLabel.toLowerCase().includes(searchVal.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const [visibleCount, setVisibleCount] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);

  const [prevActive, setPrevActive] = useState("all");
  const [prevSearchVal, setPrevSearchVal] = useState("");

  if (active !== prevActive || searchVal !== prevSearchVal) {
    setPrevActive(active);
    setPrevSearchVal(searchVal);
    setVisibleCount(12);
    setLoadingMore(false);
  }

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

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
  }, [filtered]);

  // Load more on scroll intersection
  useEffect(() => {
    if (visibleCount >= filtered.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loadingMore) {
          setLoadingMore(true);
          // Simulate database fetch delay
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 12, filtered.length));
            setLoadingMore(false);
          }, 100);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleCount, filtered.length, loadingMore]);

  const visibleProducts = filtered.slice(0, visibleCount);

  return (
    <>
      {/* Header */}
      <section id="catalog-hero" className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/products-hero.webp" alt="Warehouse shelves organized with heavy machinery hydraulic spare parts" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Products" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Product Catalog
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl">
            Genuine quality hydraulic spare parts for JCB, Terex, CAT, L770, Tata JD, and all heavy earthmoving equipment.
          </p>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search & Dribbble Sliding Tag Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-xs shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search catalog..."
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
                    const isSelected = active === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`relative px-4 py-2.5 rounded-xl text-xs font-black tracking-wide whitespace-nowrap transition-colors cursor-pointer select-none focus:outline-none ${
                          isSelected
                            ? "text-[#0B0F19]"
                            : "text-gray-500 hover:text-gray-800 hover:bg-gray-100/50"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="activeProductCategoryPill"
                            className="absolute inset-0 bg-[#FFBE00] rounded-xl z-0 shadow-sm"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}
                        <span className="relative z-10">{cat.label}</span>
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

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-5xl mb-4">🔩</div>
              <p className="font-semibold text-lg text-gray-700">No products found matching your criteria.</p>
              <p className="text-sm text-gray-400 mt-1">Try clearing your search query or selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleProducts.map((product) => (
                  <motion.div
                    key={product.slug}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col h-full transition-shadow duration-300"
                  >
                    <Link href={`/products/${product.slug}`} className="flex flex-col flex-1 w-full relative">
                      
                      {/* Image container with hover specs fader */}
                      <div className="relative h-44 bg-[#bebcbd] border-b border-gray-100 overflow-hidden shrink-0">
                        <SafeImage
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                        />
                        <span className="absolute bottom-3 right-3 bg-teckon-dark-blue/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg tracking-wider border border-white/5 select-none z-10 animate-fade-in group-hover:opacity-0 transition-opacity">
                          {product.categoryLabel}
                        </span>

                        {/* Glassmorphic Specs Hover Overlay */}
                        <div className="absolute inset-0 bg-[#0B0F19]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-center p-4 z-20">
                          <span className="text-[10px] font-mono text-[#FFBE00] uppercase tracking-widest mb-3 font-bold flex items-center gap-1.5 border-b border-white/10 pb-1.5">
                            ⚙️ Technical Specs
                          </span>
                          <div className="space-y-2 text-xs text-white">
                            {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
                              <div key={key} className="flex justify-between items-center text-[11px]">
                                <span className="text-white/60 font-semibold truncate pr-2">{key.replace(" (CC)", "")}</span>
                                <span className="font-bold text-white truncate max-w-[120px] bg-white/5 px-2 py-0.5 rounded border border-white/5">{val}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 text-[9px] text-[#FFBE00] font-mono text-right flex items-center justify-end gap-1 font-bold">
                            View details <span>→</span>
                          </div>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-[#FF6B35] font-mono font-bold bg-[#FF6B35]/10 px-2 py-0.5 rounded-md">{product.model}</span>
                          <span className="text-[10px] text-slate-400 font-mono font-medium">OEM Ref: {product.ref}</span>
                        </div>
                        
                        <h3 className="font-extrabold text-[#0B0F19] text-base mb-2 min-h-[48px] line-clamp-2 leading-snug group-hover:text-[#FF6B35] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-xs mb-2 min-h-[32px] line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        
                        {/* Dribbble-style Hover Reveal Button */}
                        <motion.div
                          variants={buttonVariants}
                          initial="initial"
                          className="w-full overflow-hidden shrink-0"
                        >
                          <div className="w-full h-11 flex items-center justify-center bg-teckon-blue text-white text-xs font-black rounded-2xl group-hover:bg-[#FFBE00] group-hover:text-[#0B0F19] group-hover:shadow-[0_0_15px_rgba(255,190,0,0.3)] transition-colors tracking-wider uppercase">
                            Inquire &amp; Details
                          </div>
                        </motion.div>
                      </div>

                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Simulated Database Fetching Loader */}
          {visibleCount < filtered.length && (
            <div ref={loadMoreRef} className="mt-16 mb-4 flex flex-col items-center justify-center py-6 w-full">
              {loadingMore ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-[#FFBE00]" />
                </div>
              ) : (
                <div className="h-10 w-full" />
              )}
            </div>
          )}

          {/* Inquiry CTA */}
          <div className="mt-16 bg-[#0B0F19] rounded-3xl p-8 relative overflow-hidden border border-white/5 shadow-2xl text-center">
            {/* Grid bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-white mb-2">Can&apos;t find what you need?</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Our manufacturing workshop stocks and builds over 5,000 hydraulic SKUs. Contact our Rajkot factory engineering team for custom replacement part sourcing.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#FFBE00] text-[#0B0F19] font-black px-8 py-3.5 rounded-2xl hover:bg-[#d99e00] transition-all duration-300 text-sm shadow-lg hover:shadow-[0_0_15px_rgba(255,190,0,0.4)]">
                  Request a Custom Part
                </Link>
                <a href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20custom%20hydraulic%20spares" target="_blank" rel="noopener noreferrer" className="bg-[#128C7E] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#0f766a] transition-colors text-sm shadow-lg">
                  💬 WhatsApp Sourcing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsClient() {
  return (
    <Suspense fallback={
      <div className="py-32 text-center text-gray-500">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teckon-blue mx-auto mb-4"></div>
        <p className="font-semibold text-lg text-teckon-blue">Loading products...</p>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
