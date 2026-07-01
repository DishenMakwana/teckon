"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOGO_TEXT = "TECKON";
const LETTERS = LOGO_TEXT.split("");

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 1000;

    const tick = () => {
      const elapsed = performance.now() - start;
      const eased = 1 - Math.pow(1 - Math.min(elapsed / duration, 1), 3);
      setProgress(Math.round(eased * 100));
    };

    const frame = window.setInterval(tick, 16);
    const timer = window.setTimeout(() => {
      setProgress(100);
      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        document.documentElement.classList.remove("preloader-active");
      }, 350);
    }, duration);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("preloader-active");
      window.clearTimeout(timer);
      window.clearInterval(frame);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(10px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#0B0F19]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,190,0,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(30,64,175,0.18),_transparent_36%),linear-gradient(135deg,_#0B0F19_0%,_#111827_48%,_#1E293B_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,190,0,0.06)_50%,transparent_100%)]" />
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <motion.div
            animate={{
              x: [0, 48, -24, 0],
              y: [0, -40, 24, 0],
              scale: [1, 1.1, 0.96, 1],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFBE00]/20 blur-[110px]"
          />
          <motion.div
            animate={{
              x: [0, -54, 26, 0],
              y: [0, 38, -24, 0],
              scale: [1, 0.92, 1.08, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-16 h-[24rem] w-[24rem] rounded-full bg-[#1E293B]/35 blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 28, -34, 0],
              y: [0, -28, 32, 0],
              scale: [1, 1.03, 0.97, 1],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35]/10 blur-[140px]"
          />

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.65, opacity: 0.4 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
              className="absolute h-28 w-28 rounded-full border border-white/20"
            />
          ))}

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/10 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ delay: 0.75, duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <div className="relative flex items-center gap-2 sm:gap-3">
                <div className="flex items-center rounded-2xl border border-[#FFBE00]/40 bg-[#FFBE00] px-4 py-2.5 text-2xl font-black tracking-[0.25em] text-[#0B0F19] shadow-[0_0_24px_rgba(255,190,0,0.16)] sm:text-3xl">
                  {LETTERS.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 24, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + index * 0.07,
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
                    transition={{
                      delay: 0.7,
                      type: "spring",
                      stiffness: 450,
                      damping: 18,
                    }}
                    className="ml-1 inline-block align-super text-sm"
                  >
                    ™
                  </motion.span>
                </div>
                <div className="hidden h-14 w-px bg-white/15 sm:block" />
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  className="hidden text-left sm:block"
                >
                  <div className="text-sm font-semibold text-white">
                    Quality Spares
                  </div>
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-300">
                    Shreeji Hydraulics
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45, ease: "easeOut" }}
              className="mt-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-slate-300"
            >
              Refreshing experience
            </motion.div>

            <div className="mt-8 flex w-56 flex-col items-center sm:w-64">
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#ffbe00] via-[#38bdf8] to-[#8b5cf6]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.36em] text-slate-400">
                {progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
