"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_TEXT = "TECKON";
const LETTERS = LOGO_TEXT.split("");

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 1000;

    const tick = () => {
      const elapsed = performance.now() - start;
      const eased = 1 - Math.pow(1 - Math.min(elapsed / duration, 1), 3);
      setProgress(Math.round(eased * 100));
    };

    const frame = setInterval(tick, 16);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 350);
    }, duration);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
      clearInterval(frame);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
        >
          {/* Rich gradient base */}
          <div className="absolute inset-0 bg-[#0B0F19]" />

          {/* Animated color orbs */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#FFBE00]/25 blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -25, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-[#d97706]/20 blur-[110px]"
          />
          <motion.div
            animate={{
              x: [0, 25, -35, 0],
              y: [0, -20, 35, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1e3a5f]/30 blur-[120px]"
          />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Expanding pulse rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.6, opacity: 0.5 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
              className="absolute w-32 h-32 rounded-full border border-[#FFBE00]/30"
            />
          ))}

          {/* Logo cluster */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            <div className="flex items-center gap-4 select-none">
              {/* Badge with clip reveal + shimmer */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden bg-[#FFBE00] text-[#0B0F19] px-5 py-2.5 rounded-xl font-black text-2xl tracking-wide shadow-lg shadow-[#FFBE00]/20"
              >
                <span className="relative z-10 flex">
                  {LETTERS.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 24, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                      style={{ transformOrigin: "bottom center" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.65, type: "spring", stiffness: 400, damping: 15 }}
                    className="inline-block text-sm align-super ml-0.5"
                  >
                    ™
                  </motion.span>
                </span>
                {/* Shimmer sweep */}
                <motion.div
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Tagline — staggered slide in */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
                className="text-left hidden sm:block"
              >
                <div className="text-white font-bold text-lg leading-tight">Quality Spares</div>
                <div className="text-[#94a3b8] text-xs mt-0.5">Shreeji Hydraulics</div>
              </motion.div>
            </div>

            {/* Orbital loader dots */}
            <div className="relative w-14 h-14">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.2 + i * 0.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                  style={{ transformOrigin: "center center" }}
                >
                  <div
                    className="absolute w-2.5 h-2.5 rounded-full bg-[#FFBE00] shadow-[0_0_12px_#FFBE00]"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 120}deg) translateY(-22px) translateX(-50%)`,
                    }}
                  />
                </motion.div>
              ))}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-3 rounded-full border-2 border-[#FFBE00]/20"
              />
            </div>

            {/* Progress bar */}
            <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#FFBE00] via-[#f59e0b] to-[#FFBE00]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#64748b] text-[10px] font-mono tracking-widest -mt-6"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
