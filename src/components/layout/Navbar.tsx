"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Boxes,
  Cpu,
  Wrench,
  Settings,
  Hammer,
  Zap,
  Activity,
  Droplet,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
  {
    name: "JCB Spares",
    href: "/products?category=jcb",
    desc: "Hydraulic valves, pumps & seal kits",
    icon: Boxes,
  },
  {
    name: "Hitachi Parts",
    href: "/products?category=hitachi",
    desc: "Heavy excavator pumps & components",
    icon: Cpu,
  },
  {
    name: "Terex Parts",
    href: "/products?category=terex",
    desc: "Dumper & loader replacement spares",
    icon: Wrench,
  },
  {
    name: "CAT Components",
    href: "/products?category=cat",
    desc: "Precision parts for Caterpillar systems",
    icon: Settings,
  },
  {
    name: "Breakers & Tippers",
    href: "/products?category=breakers",
    desc: "Hammer spares & tipper cylinders",
    icon: Hammer,
  },
  {
    name: "L770 / Tata JD",
    href: "/products?category=l770",
    desc: "Compatible loader spares & seal kits",
    icon: Zap,
  },
  {
    name: "Excavator Parts",
    href: "/products?category=excavator",
    desc: "Hydraulic cylinders & control valves",
    icon: Activity,
  },
  {
    name: "Filters & Service",
    href: "/products?category=filters",
    desc: "High-grade hydraulic filter elements",
    icon: Droplet,
  },
  {
    name: "General Hydraulics",
    href: "/products?category=general",
    desc: "Hose fittings, adaptors & custom spares",
    icon: Layers,
  },
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      setMobileOpen((open) => (open ? false : open));
      setDropdownOpen(false);
    }, 0);
    return () => clearTimeout(handle);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

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
              <div className="text-[#1E293B] font-bold text-sm leading-tight">
                Quality Spares
              </div>
              <div className="text-gray-500 text-xs">Shreeji Hydraulics</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-base font-bold transition-colors ${
                      pathname.startsWith("/products")
                        ? "text-[#1E293B] bg-slate-100"
                        : "text-gray-700 hover:text-[#1E293B] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute top-full left-1/2 -translate-x-[35%] w-[720px] bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-100 rounded-3xl overflow-hidden mt-3 p-6 z-50 grid grid-cols-12 gap-6"
                      >
                        {/* Categories List */}
                        <div className="col-span-8">
                          <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                              Category Catalog
                            </span>
                            <Link
                              href="/products"
                              onClick={() => setDropdownOpen(false)}
                              className="text-xs font-bold text-[#FF6B35] hover:text-[#e05621] transition-colors flex items-center gap-1 group/all"
                            >
                              View All Products
                              <span className="group-hover:translate-x-0.5 transition-transform">
                                →
                              </span>
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                rel="nofollow"
                                onClick={() => setDropdownOpen(false)}
                                className="flex gap-3.5 p-2 rounded-2xl hover:bg-slate-50 transition-all duration-200 group/item"
                              >
                                <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover/item:bg-[#FFBE00]/10 group-hover/item:text-[#FFBE00] transition-colors shrink-0">
                                  <item.icon size={18} />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-[#1E293B] group-hover/item:text-[#FF6B35] transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-gray-500 font-medium leading-normal mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Calculator Sidebar Callout */}
                        <div className="col-span-4 flex flex-col">
                          <div className="bg-[#0B0F19] rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between h-full border border-white/5 shadow-inner">
                            {/* Grid bg overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                            {/* Glow accent */}
                            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#FFBE00]/10 rounded-full blur-xl pointer-events-none" />

                            <div className="relative z-10">
                              <span className="text-[9px] font-mono text-[#FFBE00] uppercase tracking-wider font-extrabold bg-[#FFBE00]/10 px-2.5 py-1 rounded-md">
                                Interactive Tool
                              </span>
                              <h4 className="text-white font-black text-base mt-4 leading-tight">
                                Telemetry &amp; Force Bench
                              </h4>
                              <p className="text-slate-400 text-[11px] mt-2.5 leading-relaxed font-medium">
                                Simulate bore, rod, and stroke dimensions to
                                calculate operating forces in real-time.
                              </p>
                            </div>

                            <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
                              <Link
                                href="/#diagnostics"
                                onClick={() => setDropdownOpen(false)}
                                className="inline-flex items-center gap-1.5 text-xs text-[#FFBE00] hover:text-[#d99e00] font-bold group/btn"
                              >
                                Launch Calculator
                                <span className="group-hover/btn:translate-x-1 transition-transform">
                                  →
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
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
                <div className="bg-[#FFBE00] text-[#0B0F19] px-3 py-1.5 rounded-lg font-black text-lg tracking-wide">
                  TECKON™
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
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
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-gray-500 hover:text-[#1E293B] hover:bg-gray-50 transition-colors"
                          >
                            <item.icon
                              size={13}
                              className="text-gray-400 shrink-0"
                            />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-4 pb-24 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:+916351879842"
                  className="flex items-center justify-center gap-2 bg-[#1E293B] text-white py-3 rounded-xl font-semibold text-sm"
                >
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
