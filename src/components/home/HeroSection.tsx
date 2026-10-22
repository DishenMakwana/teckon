"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  Settings,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function HeroSection(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-64px)] md:min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden"
    >
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
          <Factory className="w-3.5 h-3.5 shrink-0 text-[#0B0F19]" />
          <span>
            Wholesales &amp; Suppliers Store | JCB, L&amp;T, JD, Terex, CAT |
            Earthmoving Spares
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 md:mb-6"
        >
          <span>Wholesales &amp; Suppliers Store</span>
          <span className="block text-[#FFBE00]">
            for Auto &amp; Earthmoving Spares
          </span>
          <span className="block text-lg sm:text-2xl md:text-3xl font-bold text-white/80 mt-1 md:mt-2">
            JCB • L&amp;T • JD • Terex • CAT Machinery
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8"
        >
          {`${COMPANY.brand} is India's trusted Wholesales & Suppliers Store for heavy auto parts and earthmoving spares. Since ${COMPANY.founded}, we provide precision-engineered replacement parts for JCB, L&T, JD, Terex, CAT, Tata JD, L770, breakers, and excavator fleets.`}
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
            <Settings className="w-4 h-4 shrink-0" />
            <span>Explore Products</span>
          </Link>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#128C7E] text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg hover:bg-[#0f766a] transition-colors shadow-xl"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>WhatsApp Inquiry</span>
          </a>
          <a
            href={`tel:${COMPANY.phones.mainRaw}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Call Now</span>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 md:mt-10 text-white/50 text-[10px] sm:text-xs md:text-sm"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#FFBE00]" />
            <span>JCB Spares Wholesaler</span>
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#FFBE00]" />
            <span>L&amp;T &amp; JD Spares</span>
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#FFBE00]" />
            <span>Terex Parts</span>
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#FFBE00]" />
            <span>CAT Components</span>
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#FFBE00]" />
            <span>Earthmoving Spares Supplier</span>
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#FFBE00]" />
            <span>OEM Specifications</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
