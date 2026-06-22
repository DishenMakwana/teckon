"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { PRODUCTS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SlidersHorizontal } from "lucide-react";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [active, setActive] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        router.push(`/products?${params.toString()}`, { scroll: false });
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

  return (
    <>
      {/* Header */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/products-hero.webp" alt="Warehouse shelves organized with heavy machinery hydraulic spare parts" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Products" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Product Catalog
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Genuine quality hydraulic spare parts for JCB, Terex, CAT, L770, Tata JD, and all heavy equipment.
          </p>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search & Filter Control Bar */}
          <div className="flex flex-row gap-4 justify-between items-center mb-12 w-full">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search by name, model, or ref..."
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
                {active !== "all" && (
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
                      const isSelected = active === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            handleCategoryChange(cat.id);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold transition-colors duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#FFBE00]/10 text-[#0B0F19]"
                              : "text-gray-600 hover:bg-gray-50 hover:text-[#0B0F19]"
                          }`}
                        >
                          <span>{cat.label}</span>
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

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-5xl mb-4">🔩</div>
              <p className="font-semibold text-lg text-gray-700">No products found matching your criteria.</p>
              <p className="text-sm text-gray-400 mt-1">Try clearing your search query or selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <motion.div
                    key={product.slug}
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
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-40 bg-gray-100 overflow-hidden">
                      <SafeImage
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <span className="absolute top-3 left-3 bg-teckon-blue text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {product.categoryLabel}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400 font-mono">{product.model}</span>
                        <span className="text-xs text-gray-400 font-mono">{product.ref}</span>
                      </div>
                      <h3 className="font-bold text-[#111111] text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <Link
                        href={`/products/${product.slug}`}
                        className="w-full flex items-center justify-center bg-teckon-blue text-white text-sm font-bold py-2.5 rounded-xl hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Inquiry CTA */}
          <div className="mt-12 bg-teckon-blue rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-2">Can&apos;t find what you need?</h3>
            <p className="text-white/70 mb-6">Our team stocks over 5000 hydraulic SKUs. Contact us for custom parts sourcing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#FFBE00] text-[#0B0F19] font-bold px-6 py-3 rounded-xl hover:bg-[#d99e00] transition-colors">
                Request a Custom Part
              </Link>
              <a href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares" target="_blank" rel="noopener noreferrer" className="bg-[#128C7E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0f766a] transition-colors">
                💬 WhatsApp Us
              </a>
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
