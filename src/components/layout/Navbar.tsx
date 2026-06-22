"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
  { name: "JCB Spares", href: "/products?category=jcb" },
  { name: "Hitachi Parts", href: "/products?category=hitachi" },
  { name: "Terex Parts", href: "/products?category=terex" },
  { name: "CAT Components", href: "/products?category=cat" },
  { name: "Breakers & Tippers", href: "/products?category=breakers" },
  { name: "L770 / Tata JD", href: "/products?category=l770" },
  { name: "Excavator Parts", href: "/products?category=excavator" },
  { name: "Filters & Service", href: "/products?category=filters" },
  { name: "General Hydraulics", href: "/products?category=general" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", dropdown: productCategories },
  { name: "Quality", href: "/quality" },
  { name: "Events", href: "/events" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      setMobileOpen((open) => (open ? false : open));
    }, 0);
    return () => clearTimeout(handle);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#FFBE00] text-[#0B0F19] px-3 py-1.5 rounded-lg font-black text-lg tracking-wide group-hover:bg-[#1E293B] group-hover:text-white transition-colors">
              TECKON™
            </div>
            <div className="hidden sm:block">
              <div className="text-[#1E293B] font-bold text-sm leading-tight">Quality Spares</div>
              <div className="text-gray-500 text-xs">Shreeji Hydraulics</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-base font-bold transition-colors ${
                      pathname.startsWith("/products")
                        ? "text-[#1E293B] bg-slate-100"
                        : "text-gray-700 hover:text-[#1E293B] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden py-2 mt-1"
                      >
                        <div className="border-b border-gray-100 mb-2 pb-2">
                          <Link
                            href="/products"
                            className="block px-4 py-2.5 text-sm font-semibold text-[#FF6B35] hover:bg-orange-50 transition-colors"
                          >
                            View All Products →
                          </Link>
                        </div>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            rel="nofollow"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1E293B] hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-base font-bold transition-colors ${
                    pathname === link.href
                      ? "text-[#1E293B] bg-slate-100 font-black"
                      : "text-gray-700 hover:text-[#1E293B] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* 
            <button className="p-2 text-gray-600 hover:text-[#1E293B] hover:bg-gray-100 rounded-lg transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 bg-[#FFBE00] text-[#0B0F19] font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#d99e00] transition-colors"
            >
              Get Quote
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="bg-[#FFBE00] text-[#0B0F19] px-3 py-1.5 rounded-lg font-black text-lg tracking-wide">TECKON™</div>
                <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>
              <nav className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                        pathname === link.href
                          ? "bg-[#1E293B] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            rel="nofollow"
                            className="block px-4 py-2 rounded-lg text-xs text-gray-500 hover:text-[#1E293B] hover:bg-gray-50 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-4 pb-24 border-t border-gray-100 flex flex-col gap-3">
                <a href="tel:+916351879842" className="flex items-center justify-center gap-2 bg-[#1E293B] text-white py-3 rounded-xl font-semibold text-sm">
                  📞 Call +91-63518 79842
                </a>
                <a
                  href="https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#128C7E] text-white py-3 rounded-xl font-semibold text-sm"
                >
                  💬 WhatsApp Inquiry
                </a>
                <a
                  href="mailto:shreejihyd4008@gmail.com"
                  className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 rounded-xl font-semibold text-sm"
                >
                  ✉️ shreejihyd4008@gmail.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
