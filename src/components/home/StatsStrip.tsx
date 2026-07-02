"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Map, Boxes, ShieldCheck } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
}

function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  {
    end: 25,
    suffix: "+",
    label: "Years of Experience",
    icon: Award,
    tag: "Est. 2000",
    description: "Serving construction & mining sectors for over two decades.",
  },
  {
    end: 10,
    suffix: "+",
    label: "States Served",
    icon: Map,
    tag: "Pan-India Logistics",
    description:
      "Robust supply network delivering to major active project sites.",
  },
  {
    end: 5000,
    suffix: "+",
    label: "Products in Stock",
    icon: Boxes,
    tag: "OEM-Spec Spares",
    description: "Massive inventory of high-precision hydraulic spares.",
  },
  {
    end: 99,
    suffix: "%",
    label: "Client Satisfaction",
    icon: ShieldCheck,
    tag: "ISO 9001 Certified",
    description: "Quality assurance and test-bed proven reliability.",
  },
];

export default function StatsStrip() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      className="relative bg-[#0B0F19] py-20 overflow-hidden border-y border-white/[0.06]"
      ref={containerRef}
    >
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,190,0,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                className="group relative bg-white/[0.01] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-6 md:p-8 flex flex-col justify-between items-center text-center overflow-hidden hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Glowing drop shadow orb inside card on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#FFBE00]/10 to-[#FF6B35]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                {/* Top yellow neon gradient border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFBE00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-[#FFBE00]/10 group-hover:border-[#FFBE00]/20 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#FFBE00] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Metric count */}
                <div className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-baseline justify-center gap-0.5 mb-2">
                  <Counter end={stat.end} duration={2000} />
                  <span className="text-[#FFBE00] font-black">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-white/90 font-extrabold text-sm md:text-base uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-white">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-white/50 text-xs leading-relaxed max-w-[220px] mb-5 group-hover:text-white/60 transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Micro-tag */}
                <div className="text-[#FFBE00] text-[9px] font-mono font-bold tracking-wider uppercase bg-[#FFBE00]/5 border border-[#FFBE00]/10 px-3 py-1 rounded-full group-hover:bg-[#FFBE00]/15 group-hover:border-[#FFBE00]/20 transition-all duration-300">
                  {stat.tag}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
