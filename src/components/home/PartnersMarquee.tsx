"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PartnersMarquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const partners = [
    "JCB India",
    "Terex Equipment",
    "Caterpillar",
    "Tata Construction",
    "L&T Construction",
    "Volvo CE",
    "Komatsu India",
    "Mahindra EPC",
    "Escorts Construction",
    "BEML Limited",
  ];

  const doubled = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="py-16 bg-white overflow-hidden border-b border-gray-100"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Trusted By
          </span>
          <h2 className="text-3xl font-black text-[#111111]">
            Our Trusted Partners
          </h2>
        </motion.div>
      </div>

      {/* Marquee Wrapper with Edge Fade Masking (matching pure white bg-white) */}
      <div className="relative overflow-hidden w-full py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
        <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-44 h-20 bg-slate-50/80 border border-slate-200/60 rounded-2xl flex items-center justify-center px-4 shadow-sm hover:border-[#FFBE00]/30 hover:bg-white hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,190,0,0.06)] transition-all duration-300 group/item select-none cursor-pointer"
            >
              <span className="text-[#0B0F19] font-extrabold text-sm group-hover/item:text-[#FF6B35] transition-colors text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
