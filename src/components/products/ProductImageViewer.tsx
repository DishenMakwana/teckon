"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

interface ProductImageViewerProps {
  src: string;
  alt: string;
  backgroundColor?: string;
}

export default function ProductImageViewer({
  src,
  alt,
  backgroundColor = "#F2F3F4",
}: ProductImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [dragKey, setDragKey] = useState(0); // Used to force reset drag position

  const closeViewer = () => {
    setIsOpen(false);
    setScale(1);
    setDragKey((prev) => prev + 1);
  };

  // Handle escape key to close modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeViewer();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setDragKey((prevKey) => prevKey + 1); // Reset position
      }
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setDragKey((prev) => prev + 1);
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2);
    }
  };

  return (
    <>
      {/* Main Trigger Image View */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative h-80 rounded-2xl overflow-hidden border border-gray-200/50 shadow-md cursor-zoom-in group"
        style={{ backgroundColor }}
      >
        <SafeImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
          loading="eager"
        />

        {/* Overlay hover prompt */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold text-gray-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Maximize2 className="h-4 w-4 text-teckon-blue" />
            <span>Click to Zoom</span>
          </div>
        </div>
      </div>

      {/* Lightbox / Viewer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-md select-none"
          >
            {/* Background close click */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={closeViewer}
            />

            {/* Header controls (Close Button) */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={closeViewer}
                title="Close image viewer"
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:rotate-90 cursor-pointer shadow-lg backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Zoomable Image Container */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <motion.div
                key={dragKey}
                drag={scale > 1}
                dragElastic={0.15}
                dragConstraints={{
                  left: -400 * (scale - 1),
                  right: 400 * (scale - 1),
                  top: -250 * (scale - 1),
                  bottom: 250 * (scale - 1),
                }}
                animate={{ scale }}
                onDoubleClick={handleDoubleClick}
                title={
                  scale > 1
                    ? "Double click to reset. Drag to pan."
                    : "Double click to zoom."
                }
                className={`relative max-w-full max-h-[80vh] flex items-center justify-center ${
                  scale > 1
                    ? "cursor-grab active:cursor-grabbing"
                    : "cursor-zoom-in"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg select-none pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Floating Controls Bar at Bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-slate-900/80 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full shadow-2xl">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                title="Zoom Out"
                className="p-2 text-white hover:text-[#FFBE00] disabled:text-white/30 disabled:hover:text-white/30 transition-colors cursor-pointer"
              >
                <ZoomOut className="h-5 w-5" />
              </button>

              <span className="text-white text-xs font-mono font-bold w-12 text-center select-none">
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={scale >= 4}
                title="Zoom In"
                className="p-2 text-white hover:text-[#FFBE00] disabled:text-white/30 disabled:hover:text-white/30 transition-colors cursor-pointer"
              >
                <ZoomIn className="h-5 w-5" />
              </button>

              <div className="h-4 w-px bg-white/10" />

              <button
                onClick={handleReset}
                disabled={scale === 1}
                title="Reset Zoom"
                className="p-2 text-white hover:text-[#FFBE00] disabled:text-white/30 disabled:hover:text-white/30 transition-colors cursor-pointer"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
