"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StatsStrip from "@/components/home/StatsStrip";
import ProductsCarousel from "@/components/home/ProductsCarousel";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import GlobalPresence from "@/components/home/GlobalPresence";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100dvh-64px)] md:min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.webp"
            alt="Heavy machinery at construction site"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-[#1E293B]/70 to-[#0B0F19]/80" />
        </div>

        {/* Decorative yellow accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFBE00] via-[#FF6B35] to-[#FFBE00] z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-12 flex flex-col justify-center items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#FFBE00] text-[#0B0F19] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full mb-4 md:mb-6 animate-pulse"
          >
            🏭 ISO 9001:2015 Certified | Precision Engineered | Pan-India Coverage
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 md:mb-6"
          >
            Premium Hydraulic
            <span className="block text-[#FFBE00]">Parts & Spares</span>
            <span className="block text-lg sm:text-2xl md:text-4xl font-bold text-white/80 mt-1 md:mt-2">
              for Heavy Machinery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8"
          >
            Teckon™ is a premium manufacturer of hydraulic parts &amp; spares for heavy machinery. Since 2000, we have been a trusted leader delivering precision-engineered hydraulic spares across India, specializing in JCB, Terex, CAT, Tata JD, L770, breakers, tippers, and excavator components.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md sm:max-w-none px-4 sm:px-0 mb-6 md:mb-8"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFBE00] text-[#0B0F19] font-black px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg hover:bg-[#d99e00] transition-colors shadow-xl"
            >
              🔩 Explore Products
            </Link>
            <a
              href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#128C7E] text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg hover:bg-[#0f766a] transition-colors shadow-xl"
            >
              💬 WhatsApp Inquiry
            </a>
            <a
              href="tel:+916351879842"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg hover:bg-white/20 transition-colors"
            >
              📞 Call Now
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 md:mt-10 text-white/50 text-[10px] sm:text-xs md:text-sm"
          >
            <span>✅ JCB Specialists</span>
            <span className="hidden sm:block text-white/20">|</span>
            <span>✅ Terex Parts</span>
            <span className="hidden sm:block text-white/20">|</span>
            <span>✅ CAT Components</span>
            <span className="hidden sm:block text-white/20">|</span>
            <span>✅ OEM Specifications</span>
          </motion.div>
        </div>
      </section>

      <StatsStrip />
      <ProductsCarousel />
      <AboutSection />
      <WhyChooseUs />

      {/* Industries & Machinery We Serve - SEO Text Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Applications</span>
            <h2 className="text-4xl font-black text-[#111111] mb-4">Industries &amp; Machinery We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our premium hydraulic parts and spares are engineered to meet the demanding requirements of various heavy industries, ensuring maximum efficiency and minimal downtime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[#FF6B35] font-bold text-xl mb-3">Construction &amp; Earthmoving</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply high-performance hydraulic cylinders, pumps, and seal kits specifically built for backhoe loaders, excavators, and crawler tractors. Our components are widely used on JCB 3DX, CAT 424B, and Hitachi EX200 models to maintain high operating pressure and precise fluid control in rough terrains.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[#FF6B35] font-bold text-xl mb-3">Mining &amp; Heavy Excavation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Heavy machinery used in quarrying and mining operations requires hydraulic spares that can withstand extreme pressure, high temperatures, and abrasive dust. Teckon provides robust breaker spares, tipper cylinders, control valves, and heavy-duty pins and bushes designed for maximum wear resistance and longevity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[#FF6B35] font-bold text-xl mb-3">Infrastructure &amp; Roadworks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Precision is key in road building and infrastructure development. Our premium line of valves, hydraulic hoses, and specialized fittings ensure smooth hydraulic flow and quick response rates for pavers, vibratory rollers, and loaders. We keep your projects moving without unexpected breakdown delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PartnersMarquee />
      <GlobalPresence />
      <Testimonials />
      <BlogSection />

      {/* CTA Banner */}
      <section className="bg-[#FFBE00] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0B0F19] mb-4">
            Need Hydraulic Spares for Your Equipment?
          </h2>
          <p className="text-[#0B0F19]/70 mb-8">
            Contact our technical team for same-day quotes on JCB, Terex, CAT, and all other heavy machinery hydraulic parts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#111111] text-white font-bold px-8 py-4 rounded-xl hover:bg-teckon-blue transition-colors"
            >
              Get a Quick Quote
            </Link>
            <a
              href="tel:+916351879842"
              className="bg-white text-[#0B0F19] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              📞 +91-63518 79842
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
