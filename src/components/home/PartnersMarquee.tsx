"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PartnersMarquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const partners = [
    "JCB India", "Terex Equipment", "Caterpillar", "Tata Construction",
    "L&T Construction", "Volvo CE", "Komatsu India", "Mahindra EPC",
    "Escorts Construction", "BEML Limited",
  ];

  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Trusted By</span>
          <h2 className="text-3xl font-black text-[#111111]">Our Trusted Partners</h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-44 h-20 bg-white border border-gray-200 rounded-xl flex items-center justify-center px-4 shadow-sm hover:border-teckon-blue hover:shadow-md transition-all"
            >
              <span className="text-gray-600 font-semibold text-sm text-center">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
