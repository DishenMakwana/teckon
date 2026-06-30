"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service if available
    console.error("Root layout error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[100dvh] bg-[#0B0F19] flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,190,0,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 space-y-8 bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl">
        {/* Error icon block */}
        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-red-500 animate-pulse" />
        </div>

        {/* Header copy */}
        <div className="space-y-3">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Something Went Wrong
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            An unexpected error occurred in the system. The details have been
            logged and our technical support team is reviewing it.
          </p>
        </div>

        {/* Error reference detail */}
        {error.digest && (
          <div className="bg-slate-900/60 rounded-2xl p-3 border border-white/5 font-mono text-[10px] text-slate-500 select-all">
            Reference: {error.digest}
          </div>
        )}

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#FFBE00] hover:bg-[#FFBE00]/90 text-[#0B0F19] text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
          >
            <RotateCcw className="h-4 w-4" />
            Try again
          </button>
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-98"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
