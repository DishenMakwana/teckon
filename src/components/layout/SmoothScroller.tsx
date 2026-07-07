"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface SmoothScrollerProps {
  children: React.ReactNode;
}

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
