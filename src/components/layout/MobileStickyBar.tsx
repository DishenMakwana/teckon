"use client";

import Link from "next/link";
import { Phone, MessageCircle, Send } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="grid grid-cols-3 bg-[#111111] border-t border-[#FFBE00]/30 pb-safe">
        <a
          href="tel:+916351879842"
          className="flex flex-col items-center justify-center py-3 gap-1 text-white hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors group"
          aria-label="Call us"
        >
          <Phone size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-[#128C7E] text-white hover:bg-[#0f766a] transition-colors group"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-[#FF6B35] text-white hover:bg-[#e55a25] transition-colors group"
          aria-label="Quick Inquiry"
        >
          <Send size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold">Inquiry</span>
        </Link>
      </div>
    </div>
  );
}
