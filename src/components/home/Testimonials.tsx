"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Construction, Jaipur",
    quote: "Teckon has been our go-to supplier for JCB hydraulic spares for over 5 years. The quality is consistently excellent and delivery is always on time. Our fleet downtime has reduced by 30%.",
    rating: 5,
  },
  {
    name: "Manish Desai",
    company: "Desai Earthmovers, Pune",
    quote: "When our Terex loader's hydraulic cylinder failed on-site, Teckon had the exact replacement part delivered within 24 hours. Outstanding service and genuine quality parts.",
    rating: 5,
  },
  {
    name: "Suresh Agarwal",
    company: "Agarwal Infrastructure, Indore",
    quote: "We've been sourcing CAT 424 hydraulic components from Teckon for 3 years. Their pricing is competitive and the parts match OEM specifications perfectly. Highly recommended.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">Client Feedback</span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">What Our Clients Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-[#FFBE00] fill-[#FFBE00]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-bold text-[#111111] text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
