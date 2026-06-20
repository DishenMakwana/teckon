"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teckon-dark-blue text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-6 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="bg-[#FFBE00] text-[#0B0F19] px-3 py-1.5 rounded-lg font-black text-xl hover:bg-white hover:text-teckon-dark-blue transition-colors">
                TECKON™
              </Link>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Premium Hydraulic Parts & Spares for Heavy Machinery. Trusted by industry leaders across India since 2000.
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://facebook.com/shreejihydraulics" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919426915578" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={14} />
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/shreeji-hydraulics" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0077B5] transition-colors" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/shreejihydraulics" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-colors" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
            
            {/* Certifications & Badges */}
            <div className="flex items-center gap-4 mt-6">
              {/* ISO 9001 Badge */}
              <div className="bg-white rounded-xl p-2 flex items-center justify-center h-32 w-32 shadow-md shrink-0 relative">
                <Image
                  src="/images/iso-certified.png"
                  alt="ISO 9001:2015 Certified Logo"
                  fill
                  sizes="128px"
                  className="object-contain p-2"
                  loading="eager"
                />
              </div>
              {/* Make in India Badge */}
              <div className="bg-white rounded-xl p-2 flex items-center justify-center h-32 w-[204px] shadow-md shrink-0 relative">
                <Image
                  src="/images/make-in-india.png"
                  alt="Make in India Logo"
                  fill
                  sizes="204px"
                  className="object-contain p-2"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="font-bold text-[#FFBE00] mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Quality", href: "/quality" },
                { name: "Events", href: "/events" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-white/70 text-sm hover:text-[#FFBE00] transition-colors">
                    <ChevronRight size={12} className="text-[#FFBE00]/40 group-hover:text-[#FFBE00] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="font-bold text-[#FFBE00] mb-4 uppercase tracking-wider text-xs">Product Range</h3>
            <ul className="flex flex-col gap-2">
              {[
                { name: "JCB Hydraulic Spares", href: "/products?category=jcb" },
                { name: "Terex Parts", href: "/products?category=terex" },
                { name: "CAT 424 Components", href: "/products?category=cat" },
                { name: "Breakers & Tippers", href: "/products?category=breakers" },
                { name: "L770 / Tata JD Spares", href: "/products?category=l770" },
                { name: "Excavator Parts", href: "/products?category=excavator" },
                { name: "General Hydraulics", href: "/products?category=general" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-white/70 text-sm hover:text-[#FFBE00] transition-colors">
                    <ChevronRight size={12} className="text-[#FFBE00]/40 group-hover:text-[#FFBE00] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="font-bold text-[#FFBE00] mb-4 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 text-[#FFBE00] shrink-0" />
                <span>36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004</span>
              </li>
              <li>
                <a href="tel:+916351879842" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFBE00] transition-colors">
                  <Phone size={14} className="text-[#FFBE00]" /> +91-63518 79842
                </a>
              </li>
              <li>
                <a href="tel:+919426915578" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFBE00] transition-colors">
                  <Phone size={14} className="text-[#FFBE00]" /> +91-94269 15578 (Alpesh)
                </a>
              </li>
              <li>
                <a href="mailto:shreejihyd4008@gmail.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFBE00] transition-colors">
                  <Mail size={14} className="text-[#FFBE00]" /> shreejihyd4008@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">© {new Date().getFullYear()} Shreeji Hydraulics. <Link href="/" className="hover:text-white underline">TECKON™</Link> is a registered trademark of Shreeji Hydraulics in India. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/50 text-xs hover:text-[#FFBE00] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/50 text-xs hover:text-[#FFBE00] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
