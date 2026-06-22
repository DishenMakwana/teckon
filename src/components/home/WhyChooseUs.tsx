"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Map, BadgeCheck, Wrench } from "lucide-react";

const usps = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "Our state-of-the-art facility in Rajkot integrates advanced CNC turning centers, vertical machining centers (VMC), and specialized hydraulic test rigs to produce parts with micron-level dimensional accuracy.",
  },
  {
    icon: Map,
    title: "Pan-India Reach",
    description: "We serve contractors, dealers, and fleet operators across India from our primary distribution hubs. Our optimized logistics network ensures reliable, on-time shipment of critical spares to minimize your machine downtime.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    description: "We are an ISO 9001:2015 certified manufacturer. Every single hydraulic seal, cylinder component, and pin undergoes strict quality control checks and stress tests at multiple production stages to ensure field reliability.",
  },
  {
    icon: Wrench,
    title: "Specialized Solutions",
    description: "Our experienced engineering team provides custom hydraulic fabrication and technical consulting. We deliver bespoke parts built to exact OEM drawings and specifications for JCB, Terex, CAT, and Hitachi fleets.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Our Advantages</span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">Why Choose Teckon?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With 25+ years in the hydraulic parts industry, Teckon stands apart through quality, reliability, and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teckon-blue transition-colors">
                  <Icon size={22} className="text-teckon-blue group-hover:text-white transition-colors" />
                </div>
                <div className="font-bold text-[#111111] mb-2">{usp.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
