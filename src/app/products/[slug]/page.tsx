import type { Metadata } from "next";
import Image from "next/image";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { PRODUCTS } from "@/lib/data";
import ProductImageViewer from "@/components/products/ProductImageViewer";
import { ArrowRight, RotateCw, Shield, Layers, Award, Wrench, MessageSquare } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Teckon™ Quality Spares`,
    description: product.description,
    keywords: [
      product.name,
      `${product.name} replacement`,
      `${product.name} spares`,
      product.model,
      product.ref,
      product.categoryLabel,
      "heavy machinery hydraulic parts",
      "aftermarket OEM replacement spares",
    ],
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  // Find other products in same category for Related Products
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <>
      {/* Premium Header */}
      <section id="product-hero" className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        {/* Decorative Grid & Blur */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBE00]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/products-hero.webp" alt="Warehouse shelves organized with heavy machinery hydraulic spare parts" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4 leading-tight">{product.name}</h1>
          <div className="inline-flex items-center gap-2 bg-[#FFBE00]/10 border border-[#FFBE00]/20 rounded-full px-3 py-1 text-xs font-bold text-[#FFBE00]">
            🔩 {product.categoryLabel}
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section id="details" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Image Viewer & Blueprint Grid (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Product Main Zoom Viewer */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <ProductImageViewer src={product.image} alt={product.name} />
              </div>

              {/* Technical Blueprint Thumbnail Box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-2xl overflow-hidden bg-[#bebcbd] border border-gray-200/50 shadow-sm flex items-center justify-center p-3 select-none">
                  <SafeImage src={product.image} alt={`${product.name} detail view`} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-contain p-2 opacity-70" />
                  <div className="absolute bottom-2 left-2 bg-[#0B0F19]/60 backdrop-blur-md rounded px-1.5 py-0.5 text-[8px] font-mono text-white/80 border border-white/5 uppercase">
                    Studio Photo
                  </div>
                </div>

                <div className="relative h-32 rounded-2xl overflow-hidden bg-[#0B0F19] border border-white/10 flex flex-col items-center justify-center text-center p-4 select-none shadow-inner">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                  <div className="relative z-10 text-[#FFBE00] text-2xl mb-1">🛠️</div>
                  <div className="relative z-10 text-[9px] font-mono font-bold text-white/50 tracking-wider uppercase mb-1">CAD Blueprint</div>
                  <div className="relative z-10 text-[10px] font-bold text-white/80 leading-none">ISO Standard Fit</div>
                </div>
              </div>

            </div>

            {/* Right Column: Spec Bento Grid & CTAs (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Product Description */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 w-fit">
                  <span className="font-bold text-[#FF6B35]">Model: {product.model}</span>
                  <span>|</span>
                  <span className="font-medium">OEM Ref: {product.ref}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{product.description}</p>
              </div>

              {/* Dribbble Bento Specs Grid */}
              <div className="space-y-4">
                <h3 className="font-black text-[#0B0F19] text-xl tracking-wide uppercase font-mono flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-[#FFBE00]" />
                  Technical Specifications
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Object.entries(product.specs).map(([key, val]) => {
                    const isRotation = key.toLowerCase().includes("rotation");
                    const isDisplacement = key.toLowerCase().includes("displacement") || key.toLowerCase().includes("cc");
                    const isMaterial = key.toLowerCase().includes("material");

                    if (isRotation) {
                      const isClockwise = val.toLowerCase().includes("clockwise") && !val.toLowerCase().includes("anti");
                      return (
                        <div key={key} className="col-span-1 bg-gradient-to-br from-slate-900 to-[#1E293B] border border-white/10 rounded-2xl p-4 flex flex-col justify-between items-center text-center shadow-md min-h-[140px] relative overflow-hidden group">
                          {/* Rotating Gear/Arrow overlay */}
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 mb-2 relative">
                            <RotateCw
                              className="h-6 w-6 text-[#FFBE00]"
                              style={{
                                animation: `spin 6s linear infinite ${isClockwise ? "" : "reverse"}`
                              }}
                            />
                            <span className="absolute text-[8px] font-mono font-bold text-white/40">ROT</span>
                          </div>
                          <div>
                            <div className="text-[10px] font-mono font-semibold text-white/50 uppercase tracking-wider mb-1">{key}</div>
                            <div className="text-xs font-black text-white">{val}</div>
                          </div>
                        </div>
                      );
                    }

                    if (isDisplacement) {
                      return (
                        <div key={key} className="col-span-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between min-h-[140px] shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-8 h-8 rounded-lg bg-[#FFBE00]/10 flex items-center justify-center text-lg mb-2">
                            <Layers className="h-4.5 w-4.5 text-[#FFBE00]" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">{key}</div>
                            <div className="text-sm font-black text-slate-900 font-mono">{val}</div>
                          </div>
                        </div>
                      );
                    }

                    if (isMaterial) {
                      return (
                        <div key={key} className="col-span-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between min-h-[140px] shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-lg mb-2">
                            <Shield className="h-4.5 w-4.5 text-orange-500" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">{key}</div>
                            <div className="text-sm font-black text-slate-900">{val}</div>
                          </div>
                        </div>
                      );
                    }

                    // General Specs card
                    return (
                      <div key={key} className="col-span-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between min-h-[140px] shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-lg mb-2 text-slate-500">
                          <Award className="h-4.5 w-4.5 text-slate-500" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 truncate" title={key}>{key}</div>
                          <div className="text-xs font-extrabold text-slate-800 line-clamp-2 leading-tight" title={val}>{val}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inquiry Action Box */}
              <div className="bg-[#0B0F19] rounded-3xl p-6 border border-white/5 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Accent glow block */}
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#FFBE00]/10 rounded-full filter blur-xl pointer-events-none" />
                
                <div className="text-center md:text-left">
                  <h4 className="text-white font-black text-base mb-1 tracking-wide uppercase font-mono flex items-center justify-center md:justify-start gap-1.5">
                    <MessageSquare className="h-4 w-4 text-[#FFBE00]" />
                    Instant Sourcing Quote
                  </h4>
                  <p className="text-slate-400 text-xs">Request pricing and lead time directly from our factory floor.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Quote Request: ${product.name}`)}`}
                    className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white hover:bg-[#e55a25] font-black px-6 py-3.5 rounded-2xl transition-all text-sm tracking-wide shadow-lg"
                  >
                    📋 Email Quote
                  </Link>
                  <a
                    href={`https://wa.me/919426915578?text=Hello%20Teckon,%20I%20need%20a%20price%20quote%20for%20${encodeURIComponent(product.name)}%20(${product.model})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#128C7E] text-white hover:bg-[#0f766a] font-bold px-6 py-3.5 rounded-2xl transition-colors text-sm shadow-lg"
                  >
                    💬 WhatsApp Chat
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Related Products Grid */}
          {relatedProducts.length > 0 && (
            <div id="related-products" className="mt-20 border-t border-slate-100 pt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-[#0B0F19] tracking-tight">Related Spares Catalog</h2>
                <Link href="/products" className="text-[#FF6B35] hover:text-[#e55a25] text-sm font-bold flex items-center gap-1 group">
                  View full catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group bg-gray-50/50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-32 rounded-xl overflow-hidden mb-4 bg-[#bebcbd] border border-gray-200/50 shrink-0">
                      <SafeImage src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="font-extrabold text-sm text-[#0B0F19] mb-1 line-clamp-2 leading-snug group-hover:text-[#FF6B35] transition-colors">{p.name}</div>
                    <div className="text-[10px] text-[#FF6B35] font-mono font-bold mt-auto">{p.model}</div>
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
