"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { PRODUCTS } from "@/lib/data";

const categories = [
  { id: "all", label: "All Products" },
  { id: "jcb", label: "JCB Spares" },
  { id: "terex", label: "Terex Parts" },
  { id: "cat", label: "CAT Components" },
  { id: "breakers", label: "Breakers & Tippers" },
  { id: "l770", label: "L770 / Tata JD" },
  { id: "excavator", label: "Excavator Parts" },
  { id: "general", label: "General Hydraulics" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (categoryQuery) {
      setActive(categoryQuery);
    } else {
      setActive("all");
    }
  }, [categoryQuery]);

  const filtered = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/products-hero.png" alt="Warehouse shelves organized with heavy machinery hydraulic spare parts" fill sizes="100vw" className="object-cover" priority />
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

      {/* Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  active === cat.id
                    ? "bg-teckon-blue text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔩</div>
              <p className="font-semibold">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, index) => (
                <div
                  key={product.slug}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-52 bg-gray-100 overflow-hidden">
                    <SafeImage
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <span className="absolute top-3 left-3 bg-teckon-blue text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.categoryLabel}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400 font-mono">{product.model}</span>
                      <span className="text-xs text-gray-400 font-mono">{product.ref}</span>
                    </div>
                    <h3 className="font-bold text-[#111111] text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full flex items-center justify-center gap-2 bg-teckon-blue text-white text-sm font-bold py-2.5 rounded-xl hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Inquiry CTA */}
          <div className="mt-12 bg-teckon-blue rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-2">Can&apos;t find what you need?</h3>
            <p className="text-white/70 mb-6">Our team stocks over 5000 hydraulic SKUs. Contact us for custom parts sourcing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#FFBE00] text-[#0B0F19] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors">
                Request a Custom Part
              </Link>
              <a href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20b858] transition-colors">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
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
