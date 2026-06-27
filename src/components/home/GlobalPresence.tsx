"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const IndiaMap = dynamic(() => import("./IndiaMapChart"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
});

export default function GlobalPresence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="presence" className="py-20 bg-teckon-blue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FFBE00] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Coverage
          </span>
          <h2 className="text-4xl font-black text-white mb-4">
            Our Nationwide Presence
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Headquartered in Rajkot, Gujarat, Teckon serves clients across India
            with a robust supply network.
          </p>
        </motion.div>

        {inView ? (
          <IndiaMap />
        ) : (
          <div className="h-[500px] bg-white/5 rounded-2xl flex items-center justify-center">
            <div className="text-white/40 text-sm animate-pulse">
              Loading map...
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
