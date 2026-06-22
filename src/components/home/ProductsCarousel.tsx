"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    name: "JCB Spares",
    description: "Complete range of hydraulic pumps, cylinders, seals, valves and more for all JCB models including 3CX, 4CX and JS series.",
    image: "/images/product-jcb.webp",
    href: "/products?category=jcb",
    badge: "Most Popular",
  },
  {
    name: "Hitachi Parts",
    description: "High-performance hydraulic pumps, swing motors, final drives, and cylinder seal kits for Hitachi Zaxis and EX excavators.",
    image: "/images/product-excavator.webp",
    href: "/products?category=hitachi",
    badge: "New Stock",
  },
  {
    name: "Terex Parts",
    description: "Precision-engineered hydraulic components for Terex backhoe loaders, rough terrain forklifts, and material handlers.",
    image: "/images/product-excavator.webp",
    href: "/products?category=terex",
    badge: null,
  },
  {
    name: "CAT Components",
    description: "OEM-quality Caterpillar hydraulic spares for the CAT 424B, 428E, 432F series and excavator range.",
    image: "/images/product-jcb.webp",
    href: "/products?category=cat",
    badge: null,
  },
  {
    name: "Breakers & Tippers",
    description: "Hydraulic breaker accumulators, diaphragms, and tipper cylinder assemblies for all major brands.",
    image: "/images/product-excavator.webp",
    href: "/products?category=breakers",
    badge: null,
  },
  {
    name: "L770 / Tata JD",
    description: "Specialized hydraulic spares and accessories for L770, Tata JD backhoes, and agricultural loaders.",
    image: "/images/product-jcb.webp",
    href: "/products?category=l770",
    badge: null,
  },
  {
    name: "Excavator Parts",
    description: "Heavy-duty track rollers, boom cylinders, bucket cylinders and replacement hydraulic parts for all major excavators.",
    image: "/images/product-excavator.webp",
    href: "/products?category=excavator",
    badge: null,
  },
  {
    name: "Filters & Service",
    description: "High-efficiency universal spin-on hydraulic filters, engine oil filters, fuel filters, and service parts.",
    image: "/images/product-jcb.webp",
    href: "/products?category=filters",
    badge: null,
  },
  {
    name: "General Hydraulics",
    description: "Universal gear pumps, piston pumps, control valves, accumulators, and standard hydraulic fittings.",
    image: "/images/product-excavator.webp",
    href: "/products?category=general",
    badge: null,
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
              1024: { slidesPerView: 3 },
            }}
            className=""
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.name} className="pb-12">
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <SafeImage
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    {cat.badge && (
                      <span className="absolute top-3 left-3 bg-[#FFBE00] text-[#0B0F19] text-xs font-bold px-3 py-1 rounded-full">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-[#111111] text-lg mb-2">{cat.name}</div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cat.description}</p>
                    <Link
                      href={cat.href}
                      rel="nofollow"
                      className="w-full flex items-center justify-center bg-teckon-blue text-white text-sm font-bold py-2.5 rounded-xl hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors cursor-pointer"
                    >
                      View Details
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
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
