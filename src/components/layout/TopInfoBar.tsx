"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

export default function TopInfoBar() {
  return (
    <div className="bg-teckon-dark-blue text-white text-xs py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="mailto:shreejihyd4008@gmail.com" className="flex items-center gap-1.5 hover:text-[#FFBE00] transition-colors">
            <Mail size={12} />
            <span>shreejihyd4008@gmail.com</span>
          </a>
          <span className="text-white/30">|</span>
          <a href="tel:+916351879842" className="flex items-center gap-1.5 hover:text-[#FFBE00] transition-colors">
            <Phone size={12} />
            <span>+91-63518 79842</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a href="https://facebook.com/shreejihydraulics" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFBE00] transition-colors" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFBE00] transition-colors" aria-label="WhatsApp">
            <MessageCircle size={14} />
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/company/shreeji-hydraulics" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFBE00] transition-colors" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/shreejihydraulics" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFBE00] transition-colors" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
