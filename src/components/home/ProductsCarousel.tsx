"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PRODUCTS } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

const categoriesList = ["jcb", "hitachi", "terex", "cat", "breakers", "l770", "excavator", "filters", "general"];

// Pre-select one product from each category for SSR stability
const defaultProducts = categoriesList.map(cat => 
  PRODUCTS.find(p => p.category === cat)
).filter(Boolean);

export default function ProductsCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [products, setProducts] = useState<any[]>(defaultProducts);

  useEffect(() => {
    // Pick one random product from each category
    const selected: any[] = [];
    for (const cat of categoriesList) {
      const catProducts = PRODUCTS.filter(p => p.category === cat);
      if (catProducts.length > 0) {
        const randomProduct = catProducts[Math.floor(Math.random() * catProducts.length)];
        selected.push(randomProduct);
      }
    }
    setProducts(selected);
  }, []);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Our Catalogue</span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">Our Top Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Supplying precision-engineered hydraulic spares for India&apos;s leading construction equipment brands since 2000.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className=""
          >
            {products.map((product) => (
              <SwiperSlide key={product.slug} className="pb-12 flex">
                <div
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-1 w-full"
                >
                  <Link href={`/products/${product.slug}`} className="flex flex-col flex-1 w-full">
                    <div className="relative h-40 bg-[#bebcbd] border-b border-gray-200/50 overflow-hidden">
                      <SafeImage
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <span className="absolute bottom-3 right-3 bg-teckon-blue text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {product.categoryLabel}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400 font-mono">{product.model}</span>
                        <span className="text-xs text-gray-400 font-mono">{product.ref}</span>
                      </div>
                      <h3 className="font-bold text-[#111111] text-lg mb-2 min-h-[56px] line-clamp-2">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-4 min-h-[40px] line-clamp-2">{product.description}</p>
                      <div className="w-full flex items-center justify-center bg-teckon-blue text-white text-sm font-bold py-2.5 rounded-xl group-hover:bg-[#FFBE00] group-hover:text-[#0B0F19] transition-colors mt-auto">
                        View Details
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="text-center mt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border-2 border-teckon-blue text-teckon-blue font-bold px-6 py-3 rounded-xl hover:bg-teckon-blue hover:text-white transition-colors"
          >
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
