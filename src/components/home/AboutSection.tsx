"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-factory.webp"
                alt="Teckon manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 right-0 sm:-right-4 bg-[#FFBE00] text-[#0B0F19] rounded-xl p-4 shadow-xl">
              <div className="font-black text-2xl">25+</div>
              <div className="text-xs font-semibold">
                Years Industry Experience
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">
              About Teckon™
            </span>
            <h2 className="text-4xl font-black text-white mb-2">
              India&apos;s Trusted
              <span className="block text-[#FFBE00]">
                Hydraulic Parts Leader
              </span>
            </h2>
            <div className="w-12 h-1.5 bg-[#FFBE00] rounded-full mb-6" />
            <p className="text-slate-300 leading-relaxed mb-4">
              Teckon™ is a premier brand of hydraulic parts and spares,
              manufactured and distributed by{" "}
              <strong>Shreeji Hydraulics</strong> since 2000. Operating out of
              our specialized manufacturing facility in Rajkot, Gujarat, we
              specialize in high-performance hydraulic cylinders, pump
              assemblies, seal kits, control valves, and high-tensile pins and
              bushes engineered specifically for JCB, Terex, Caterpillar, L770,
              Tata JD, and other heavy earthmoving machinery.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              We combine state-of-the-art CNC and VMC precision machining with
              stringent quality assurance protocols to deliver world-class
              hydraulic solutions. Every component undergoes strict testing
              under high-pressure conditions to ensure flawless operation
              on-site. Our ISO 9001:2015 certification reflects our unwavering
              commitment to engineering standards, durability, and customer
              satisfaction across India.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🏭", label: "Advanced Manufacturing" },
                { icon: "🌍", label: "Pan-India Reach" },
                { icon: "✅", label: "ISO 9001:2015 Certified" },
                { icon: "🔧", label: "5000+ SKUs in Stock" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm text-slate-200 font-medium bg-white/5 border border-white/10 rounded-xl p-3 shadow-inner"
                >
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#FFBE00] text-[#0B0F19] font-black px-6 py-3 rounded-xl hover:bg-[#d99e00] transition-colors shadow-lg"
            >
              Read More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
