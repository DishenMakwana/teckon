"use client";

import {
  useState,
  useEffect,
  useCallback,
  Suspense,
  useRef,
} from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  PackageOpen,
} from "lucide-react";
import ProductCard from "./ProductCard";
import { useProductFilters } from "@/hooks/useProductFilters";

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

function ProductsContent() {
  const {
    active,
    showMostUsed,
    showLimited,
    searchVal,
    setSearchVal,
    handleSearch,
    clearSearch,
    handleCategoryChange,
    handleMostUsedToggle,
    handleLimitedToggle,
    displayList,
    visibleCount,
    loadingMore,
    loadMore,
  } = useProductFilters();

  const [clickedSlug, setClickedSlug] = useState<string | null>(null);

  // Scroll indicator fade states for horizontal category tabs
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Stable callback — no deps since scrollRef never changes reference.
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowLeftFade(scrollLeft > 5);
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 5);
    }
  }, []);

  // Recalculate scroll indicators on mount, resize, and when displayed list changes.
  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [displayList, checkScroll]);

  // Load more on scroll intersection (Infinite Scroll)
  useEffect(() => {
    if (visibleCount >= displayList.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMore();
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
  }, [visibleCount, displayList.length, loadMore]);

  const visibleProducts = displayList.slice(0, visibleCount);

  return (
    <>
      {/* Header */}
      <section
        id="catalog-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/products-hero.webp"
            alt="Warehouse shelves organized with heavy machinery hydraulic spare parts"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Products" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Product Catalog
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl">
            Genuine quality hydraulic spare parts for JCB, Terex, CAT, L770,
            Tata JD, and all heavy earthmoving equipment.
          </p>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Dribbble Sliding Tag Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            {/* Search Bar & Toggles */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md shrink-0">
              <div className="relative flex-grow">
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
                  className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBE00] focus:border-[#FFBE00] focus:bg-white transition-all duration-300 font-bold text-sm"
                />
                {searchVal && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                )}
              </div>

              {/* Customer Choice Toggle */}
              <button
                onClick={handleMostUsedToggle}
                className={`flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap select-none ${
                  showMostUsed
                    ? "bg-[#FFBE00]/15 text-[#9A3412] border-[#FFBE00] shadow-sm font-extrabold"
                    : "bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-100/50"
                }`}
              >
                <span>Customer Choice</span>
              </button>

              {/* Limited Stock Toggle */}
              <button
                onClick={handleLimitedToggle}
                className={`flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap select-none ${
                  showLimited
                    ? "bg-amber-50 text-amber-700 border-amber-400 shadow-sm font-extrabold"
                    : "bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-100/50"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${showLimited ? "bg-amber-500 animate-pulse" : "bg-gray-400"}`}
                />
                <span>Limited</span>
              </button>
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
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 28,
                            }}
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

          {displayList.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                <PackageOpen className="w-8 h-8 text-teckon-blue" />
              </div>
              <p className="font-semibold text-lg text-gray-700">
                No products found matching your criteria.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Try clearing your search query or selecting a different
                category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    clickedSlug={clickedSlug}
                    setClickedSlug={setClickedSlug}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Infinite Scroll Loader Trigger */}
          {visibleCount < displayList.length && (
            <div
              ref={loadMoreRef}
              className="mt-16 mb-4 flex flex-col items-center justify-center py-6 w-full"
            >
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
              <h3 className="text-2xl font-black text-white mb-2">
                Can&apos;t find what you need?
              </h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Our manufacturing workshop stocks and builds over 5,000
                hydraulic SKUs. Contact our Rajkot factory engineering team for
                custom replacement part sourcing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#FFBE00] text-[#0B0F19] font-black px-8 py-3.5 rounded-2xl hover:bg-[#d99e00] transition-all duration-300 text-sm shadow-lg hover:shadow-[0_0_15px_rgba(255,190,0,0.4)]"
                >
                  Request a Custom Part
                </Link>
                <a
                  href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20custom%20hydraulic%20spares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#128C7E] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#0f766a] transition-colors text-sm shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Sourcing</span>
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
    <Suspense
      fallback={
        <div className="py-32 text-center text-gray-500">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teckon-blue mx-auto mb-4"></div>
          <p className="font-semibold text-lg text-teckon-blue">
            Loading products...
          </p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
