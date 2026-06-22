"use client";

import Link from "next/link";
import { Phone, MessageCircle, Send } from "lucide-react";

export default function QuickAccessRail() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
      <a
        href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#128C7E] text-white px-3 py-3 rounded-l-xl shadow-lg hover:px-6 transition-all duration-300"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-semibold">
          WhatsApp
        </span>
      </a>
      <a
        href="tel:+916351879842"
        className="group flex items-center bg-teckon-blue text-white px-3 py-3 rounded-l-xl shadow-lg hover:px-6 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-semibold">
          Call Now
        </span>
      </a>
      <Link
        href="/contact"
        className="group flex items-center bg-[#FF6B35] text-white px-3 py-3 rounded-l-xl shadow-lg hover:px-6 transition-all duration-300"
        aria-label="Quick Inquiry"
      >
        <Send size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-semibold">
          Inquiry
        </span>
      </Link>
    </div>
  );
}
