"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Wrench, Phone } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Page Not Found | Teckon™ Quality Spares";
  }, []);

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFBE00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Modern, Clean Minimalist Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-lg w-full flex flex-col items-center text-center px-6"
      >
        {/* Minimal Yellow 404 Block */}
        <motion.div
          variants={blockVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
          className="w-32 h-32 bg-[#FFBE00] rounded-[32px] flex items-center justify-center shadow-[0_20px_50px_rgba(255,190,0,0.25)] relative group cursor-pointer mb-10"
        >
          <span className="text-5xl font-black text-[#0B0F19] tracking-tighter select-none">
            404
          </span>
          {/* Subtle reflection overlay for premium look */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none opacity-60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed mb-10 font-normal"
        >
          The page you&apos;re looking for doesn&apos;t exist. It may have been
          moved or the URL might be incorrect.
        </motion.p>

        {/* Minimal Actions Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full"
        >
          <Link href="/" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto h-12 flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-[#2D3748] text-white text-xs font-bold px-6 rounded-2xl transition-colors tracking-wider uppercase shadow-md shadow-black/10"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
            </motion.div>
          </Link>

          <Link href="/products" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto h-12 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold px-6 rounded-2xl transition-colors tracking-wider uppercase"
            >
              <Wrench className="h-4 w-4" />
              Browse Products
            </motion.div>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto h-12 flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white text-xs font-bold px-6 rounded-2xl transition-colors tracking-wider uppercase shadow-md shadow-[#FF6B35]/15"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
