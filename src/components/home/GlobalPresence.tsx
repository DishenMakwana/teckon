"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const IndiaMap = dynamic(() => import("./IndiaMapChart"), { ssr: false, loading: () => (
  <div className="h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
    <div className="text-gray-400">Loading map...</div>
  </div>
) });

export default function GlobalPresence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-teckon-blue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FFBE00] font-semibold text-sm uppercase tracking-widest mb-3 block">Coverage</span>
          <h2 className="text-4xl font-black text-white mb-4">Our Nationwide Presence</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Headquartered in Rajkot, Gujarat, Teckon serves clients across India with a robust supply network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Pan-India Supply Network</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Teckon&apos;s distribution network spans across India&apos;s major construction equipment markets. We maintain strong dealer relationships across Gujarat, Rajasthan, Maharashtra, and Madhya Pradesh — ensuring fast delivery of critical hydraulic spares.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-8">
              {[
                { state: "Gujarat", note: "Headquartered in Rajkot — primary supply hub" },
                { state: "Rajasthan", note: "Strong presence in Jaipur & Jodhpur" },
                { state: "Maharashtra", note: "Distribution hub in Pune & Mumbai" },
                { state: "Madhya Pradesh", note: "Network in Indore & Bhopal" },
              ].map((item) => (
                <div key={item.state} className="flex items-start gap-3 bg-white/10 rounded-xl p-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFBE00] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white font-semibold text-sm">{item.state}</span>
                    <span className="text-white/60 text-xs ml-2">— {item.note}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Strong Reach Across 4 States",
                "Trusted Hydraulic Spares Network",
                "Fast Nationwide Delivery",
              ].map((chip) => (
                <span key={chip} className="bg-[#FFBE00] text-[#0B0F19] text-xs font-bold px-3 py-1.5 rounded-full">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white/5 rounded-2xl p-4"
          >
            {inView ? (
              <IndiaMap />
            ) : (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-white/40 text-sm">Loading map...</div>
              </div>
            )}
            <div className="flex items-center gap-3 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-[#FFBE00]" />
                <span className="text-white/70 text-xs">Strong Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-white/20" />
                <span className="text-white/70 text-xs">Other States</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
