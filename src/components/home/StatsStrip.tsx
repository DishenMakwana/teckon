"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

function Counter({ end, suffix, label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-black text-[#FFBE00] mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 text-sm font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-teckon-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={25} suffix="+" label="Years of Experience" />
          <Counter end={100} suffix="+" label="Countries Served" />
          <Counter end={5000} suffix="+" label="Products in Stock" />
          <Counter end={99} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
}
