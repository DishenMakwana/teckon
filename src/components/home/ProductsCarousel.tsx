"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";

import "swiper/css";
import "swiper/css/pagination";

const categoriesList = [
  "jcb",
  "hitachi",
  "terex",
  "cat",
  "breakers",
  "l770",
  "excavator",
  "filters",
  "general",
];

// Pre-select one product from each category for SSR stability
const defaultProducts = categoriesList
  .map((cat) => PRODUCTS.find((p) => p.category === cat))
  .filter(Boolean) as typeof PRODUCTS;

export default function ProductsCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [products, setProducts] = useState<typeof PRODUCTS>(defaultProducts);
  const [clickedSlug, setClickedSlug] = useState<string | null>(null);

  useEffect(() => {
    // Pick one random product from each category
    const selected: typeof PRODUCTS = [];
    for (const cat of categoriesList) {
      const catProducts = PRODUCTS.filter((p) => p.category === cat);
      if (catProducts.length > 0) {
        const randomProduct =
          catProducts[Math.floor(Math.random() * catProducts.length)];
        selected.push(randomProduct);
      }
    }
    const timer = setTimeout(() => {
      setProducts(selected);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="catalogue" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Our Catalogue
          </span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">
            Our Top Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Supplying precision-engineered hydraulic spares for India&apos;s
            leading construction equipment brands since 2000.
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
              <SwiperSlide
                key={product.slug}
                className="pb-12 flex animate-fade-in"
              >
                <ProductCard
                  product={product}
                  clickedSlug={clickedSlug}
                  setClickedSlug={setClickedSlug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
