"use client";

import { ViewTransition } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Settings } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { ProductCardProps } from "@/types/product-components";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    y: -5,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 35,
      mass: 0.8,
    },
  },
};

const buttonVariants = {
  initial: { height: 0, opacity: 0, marginTop: 0, y: 10 },
  hover: {
    height: 44, // exact height in pixels
    opacity: 1,
    marginTop: 12,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
    },
  },
};

export default function ProductCard({
  product,
  clickedSlug,
  setClickedSlug,
}: ProductCardProps): React.JSX.Element {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col h-full w-full transition-shadow duration-300"
    >
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-col flex-1 w-full relative"
        onClick={() => setClickedSlug(product.slug)}
      >
        {/* Image container with hover specs fader */}
        <div
          className="relative h-44 border-b border-gray-100 overflow-hidden shrink-0"
          style={{
            backgroundColor: product.backgroundColor || "#F2F3F4",
          }}
        >
          {/* Stock Badge overlay */}
          {product.stockStatus === "limited" && (
            <div className="absolute top-3 left-3 z-10 group-hover:opacity-0 transition-opacity duration-300">
              <span className="flex items-center gap-1 bg-white/90 backdrop-blur-md text-[#0B0F19] text-[8px] font-extrabold px-2 py-0.5 rounded-md tracking-wider border border-gray-100 select-none shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                LIMITED
              </span>
            </div>
          )}

          <ViewTransition
            name={
              clickedSlug === product.slug
                ? `product-image-${product.slug}`
                : undefined
            }
          >
            <div className="absolute inset-0">
              <SafeImage
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 z-0"
                loading="eager"
              />
              <span
                className={`absolute bottom-3 right-3 bg-teckon-dark-blue/80
                  backdrop-blur-md text-white text-[10px]
                  font-black px-2.5 py-1 rounded-lg tracking-wider
                  border border-white/5 select-none z-10
                  animate-fade-in group-hover:opacity-0
                  transition-opacity`}
              >
                {product.categoryLabel}
              </span>
            </div>
          </ViewTransition>

          {/* Glassmorphic Specs Hover Overlay */}
          <div className="absolute inset-0 bg-[#0B0F19]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-center p-4 z-20">
            <span className="text-[10px] font-mono text-[#FFBE00] uppercase tracking-widest mb-3 font-bold flex items-center gap-1.5 border-b border-white/10 pb-1.5">
              <Settings className="w-3.5 h-3.5 text-[#FFBE00] shrink-0" />
              <span>Technical Specs</span>
            </span>
            <div className="space-y-2 text-xs text-white">
              {Object.entries(product.specs || {})
                .slice(0, 3)
                .map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center text-[11px]"
                  >
                    <span className="text-white/60 font-semibold truncate pr-2">
                      {key.replace(" (CC)", "")}
                    </span>
                    <span className="font-bold text-white truncate max-w-[120px] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {val}
                    </span>
                  </div>
                ))}
            </div>
            <div className="mt-4 text-[9px] text-[#FFBE00] font-mono text-right flex items-center justify-end gap-1 font-bold">
              View details <span>→</span>
            </div>
          </div>
        </div>

        {/* Content block */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-[#FF6B35] font-mono font-bold bg-[#FF6B35]/10 px-2 py-0.5 rounded-md">
              {product.model}
            </span>
            <span className="text-[10px] text-slate-400 font-mono font-medium">
              OEM Ref: {product.ref}
            </span>
          </div>

          <h3 className="font-extrabold text-[#0B0F19] text-base mb-2 min-h-[48px] line-clamp-2 leading-snug group-hover:text-[#FF6B35] transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs mb-2 min-h-[32px] line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Dribbble-style Hover Reveal Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            className="w-full overflow-hidden shrink-0"
          >
            <div className="w-full h-11 flex items-center justify-center bg-teckon-blue text-white text-xs font-black rounded-2xl group-hover:bg-[#FFBE00] group-hover:text-[#0B0F19] group-hover:shadow-[0_0_15px_rgba(255,190,0,0.3)] transition-colors tracking-wider uppercase">
              Inquire &amp; Details
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
