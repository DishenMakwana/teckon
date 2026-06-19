"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
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
                src="/images/about-factory.png"
                alt="Teckon manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 right-0 sm:-right-4 bg-[#FFBE00] text-[#0B0F19] rounded-xl p-4 shadow-xl">
              <div className="font-black text-2xl">25+</div>
              <div className="text-xs font-semibold">Years Industry Experience</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">About Teckon</span>
            <h2 className="text-4xl font-black text-[#111111] mb-2">
              India&apos;s Trusted
              <span className="block text-teckon-blue">Hydraulic Parts Leader</span>
            </h2>
            <div className="w-12 h-1.5 bg-[#FFBE00] rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Teckon is a leading manufacturer and distributor of hydraulic parts and spares, established in 2000 under the parent company <strong>Shreeji Hydraulics</strong>. We specialize in high-quality hydraulic components for JCB, Terex, Caterpillar, L770, Tata JD, and other heavy machinery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We combine advanced engineering with stringent quality control to deliver world-class hydraulic parts for industrial applications across India. Our ISO 9001:2015 certification reflects our unwavering commitment to quality.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🏭", label: "Advanced Manufacturing" },
                { icon: "🌍", label: "Pan-India Reach" },
                { icon: "✅", label: "ISO 9001:2015 Certified" },
                { icon: "🔧", label: "5000+ SKUs in Stock" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-teckon-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors"
            >
              Read More About Us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
