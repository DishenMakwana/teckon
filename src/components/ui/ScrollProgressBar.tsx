"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const totalHeight = docHeight - windowHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-16 left-0 h-[3.5px] bg-[#FFBE00] z-[45] transition-all duration-75 ease-out shadow-[0_1px_5px_rgba(255,190,0,0.5)]"
      style={{ width: `${progress}%` }}
    />
  );
}
