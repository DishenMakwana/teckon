"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    name: "JCB Hydraulic Spares",
    description: "Complete range of hydraulic pumps, cylinders, seals, valves and more for all JCB models including 3CX, 4CX and JS series.",
    image: "/images/product-jcb.png",
    href: "/products?category=jcb",
    badge: "Most Popular",
  },
  {
    name: "Terex Equipment Parts",
    description: "Precision-engineered hydraulic components for Terex backhoe loaders, rough terrain forklifts, and material handlers.",
    image: "/images/product-excavator.png",
    href: "/products?category=terex",
    badge: null,
  },
  {
    name: "CAT Components",
    description: "OEM-quality Caterpillar hydraulic spares for the CAT 424B, 428E, 432F series and excavator range.",
    image: "/images/product-jcb.png",
    href: "/products?category=cat",
    badge: null,
  },
  {
    name: "Breakers & Tippers",
    description: "Hydraulic breaker accumulators, diaphragms, and tipper cylinder assemblies for all major brands.",
    image: "/images/product-excavator.png",
    href: "/products?category=breakers",
    badge: null,
  },
  {
    name: "Excavator & Earthmoving",
    description: "Track rollers, boom cylinders, bucket cylinders and hydraulic pumps for excavators and earthmoving equipment.",
    image: "/images/product-excavator.png",
    href: "/products?category=excavator",
    badge: "New Stock",
  },
];

export default function ProductsCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">Our Catalogue</span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">Our Top Products</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Supplying precision-engineered hydraulic spares for India&apos;s leading construction equipment brands since 2000.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.name}>
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <SafeImage
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {cat.badge && (
                      <span className="absolute top-3 left-3 bg-[#FFBE00] text-[#0B0F19] text-xs font-bold px-3 py-1 rounded-full">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#111111] text-lg mb-2">{cat.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{cat.description}</p>
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-2 bg-teckon-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors"
                    >
                      View Products →
                    </Link>
                  </div>
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
            View Full Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
}
