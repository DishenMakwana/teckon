"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Printer, Link as LinkIcon, Check, FileText, HelpCircle, Mail, MessageSquare } from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

interface Section {
  id: string;
  title: string;
  tldr: string;
  content: string;
}

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    tldr: "By using our website, you agree to these Terms. If you don't agree, please do not use the site.",
    content: "By accessing and using the Teckon™ Quality Spares website (teckon.in), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website. These terms may be updated periodically, and continued use of the site constitutes acceptance of any changes."
  },
  {
    id: "ip",
    title: "2. Intellectual Property Rights",
    tldr: "All site content (text, designs, logos, images) belongs to Shreeji Hydraulics. You cannot copy or distribute it without permission.",
    content: "All content on this website, including text, images, logos, product descriptions, and technical data, is the property of Shreeji Hydraulics (Teckon™ Quality Spares) and is protected under Indian copyright laws. You may not reproduce, distribute, or use any content without our prior written permission."
  },
  {
    id: "oem-disclaimer",
    title: "3. Use of OEM Part Numbers and Trademarks",
    tldr: "Manufacturer names and part numbers are used for identification only. We sell high-quality aftermarket replacements and are not affiliated with the OEMs.",
    content: "Our website lists products that are aftermarket replacements for parts sold by Original Equipment Manufacturers (OEMs). To help our customers identify the correct replacement part for their machinery, we use OEM names, part numbers, and descriptions. Please be aware of the following:\n\n(a) For Reference Only: All manufacturer names, part numbers, symbols, and descriptions are used for reference purposes only.\n\n(b) No Affiliation: It is not implied that any part listed is the product of these manufacturers. We are an independent manufacturer of aftermarket parts.\n\n(c) Aftermarket Products: The products sold on this Site are aftermarket replacement parts and are not original OEM parts, unless explicitly stated otherwise.\n\n(d) Ownership of Trademarks: All brand names, logos, and trademarks mentioned on this site are the property of their respective owners and are used here only for identification purposes."
  },
  {
    id: "product-info",
    title: "4. Product Information",
    tldr: "We aim for accuracy but reserve the right to change specifications or prices. Images are illustrative; actual parts may vary.",
    content: "We strive to ensure all product information, specifications, and pricing on this website are accurate. However, Teckon™ reserves the right to modify products, specifications, or prices without notice. Product images are for illustration purposes only. Actual products may vary. All sales are subject to our standard commercial terms."
  },
  {
    id: "prohibited",
    title: "5. Prohibited Use",
    tldr: "You must not use our site for illegal purposes, hacking, scraping, or sending malicious code.",
    content: "You agree not to: (a) use this website for any unlawful purpose, (b) attempt to gain unauthorized access to any part of the website, (c) transmit any malicious code or interfere with the website's functionality, (d) use automated tools to scrape or harvest data from our website, or (e) misrepresent your identity or affiliation."
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    tldr: "We are not liable for indirect damages. Our liability is strictly limited to the value of products purchased from us.",
    content: "To the maximum extent permitted by law, Teckon™ Quality Spares shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our liability shall not exceed the value of products purchased in the transaction giving rise to the claim."
  },
  {
    id: "warranty",
    title: "7. Warranty",
    tldr: "We offer a limited warranty on manufacturing defects. It does not cover improper installation or misuse.",
    content: "All Teckon™ hydraulic parts come with a limited warranty as specified at the time of purchase. Warranty covers manufacturing defects under normal operating conditions. Damage caused by improper installation, misuse, or unauthorized modifications is not covered. Warranty claims must be made within the warranty period with proof of purchase."
  },
  {
    id: "governing-law",
    title: "8. Governing Law",
    tldr: "These terms are governed by Indian law. Any legal disputes will be resolved exclusively in the courts of Rajkot, Gujarat.",
    content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat, India."
  }
];

export default function TermsClient() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Filter sections by search query
  const filteredSections = SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tldr.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Set up Intersection Observer to track scroll position
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the middle of viewport
    });

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [searchQuery]); // Re-observe when DOM elements filter/mount

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const copyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Header */}
      <section id="terms-hero" className="bg-teckon-dark-blue py-20 relative overflow-hidden print:hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBE00]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/policy-hero.webp"
            alt="Engineering blueprint showing technical details of hydraulic cylinder parts assembly"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Terms & Conditions" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Terms & Conditions</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl">
            Last updated: June 2026 • Governing trade guidelines
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="terms-content" className="py-16 bg-gray-50 print:bg-white print:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Navigation & Search (print:hidden) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 print:hidden">
              
              {/* Search Box */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Search size={14} className="text-[#FF6B35]" />
                  Search Terms
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FFBE00] focus:border-[#FFBE00] focus:bg-white transition-all font-semibold"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 text-xs font-black cursor-pointer"
                    >
                      CLEAR
                    </button>
                  )}
                </div>
              </div>

              {/* Sidebar Navigation */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block border-b border-gray-100 pb-2">
                  📄 Sections
                </span>
                <nav className="flex flex-col gap-1.5">
                  {SECTIONS.map((s) => {
                    const isSectionVisible = filteredSections.some((fs) => fs.id === s.id);
                    if (!isSectionVisible) return null;
                    const isActive = activeSection === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className={`text-left text-xs font-extrabold px-3 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                          isActive
                            ? "bg-[#FFBE00]/15 text-[#9A3412] border-l-3 border-[#FFBE00] pl-2.5 shadow-sm"
                            : "text-slate-600 hover:text-slate-800 hover:bg-slate-50 border-l-3 border-transparent"
                        }`}
                      >
                        <FileText size={13} className={isActive ? "text-[#FFBE00]" : "text-slate-400"} />
                        <span className="truncate">{s.title}</span>
                      </button>
                    );
                  })}
                  {filteredSections.length === 0 && (
                    <p className="text-slate-400 text-xs text-center py-4 italic">No matching sections</p>
                  )}
                </nav>
              </div>

              {/* Utility card */}
              <div className="bg-[#0B0F19] rounded-2xl p-5 border border-white/5 shadow-md relative overflow-hidden text-slate-300">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="text-[#FFBE00] text-[9px] uppercase tracking-widest font-black flex items-center gap-1">
                    <HelpCircle size={10} />
                    Utility Actions
                  </span>
                  <h3 className="text-white font-black text-sm">Need a physical copy?</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    You can print this document directly or save it as a local PDF for your compliance reference.
                  </p>
                  <button
                    onClick={handlePrint}
                    className="w-full flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-black py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wide cursor-pointer"
                  >
                    <Printer size={13} />
                    Print / Save PDF
                  </button>
                </div>
              </div>

            </aside>

            {/* Right Column: Main Content Card */}
            <main className="lg:col-span-8 space-y-6 print:lg:col-span-12">
              
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 sm:p-8 md:p-10 print:border-none print:shadow-none print:p-0">
                
                {/* Introduction statement */}
                <div className="prose prose-slate max-w-none border-b border-gray-100 pb-6 mb-8 print:pb-3 print:mb-5">
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                    Please read these Terms and Conditions carefully before using the Teckon™ Quality Spares website or engaging our services. These terms constitute a legally binding agreement between you and Shreeji Hydraulics (Teckon™ Quality Spares).
                  </p>
                </div>

                {/* Section blocks */}
                <div className="space-y-10 print:space-y-6">
                  {filteredSections.map((s) => {
                    const isCopied = copiedSection === s.id;
                    return (
                      <article
                        key={s.id}
                        id={s.id}
                        className="scroll-mt-24 border-b border-slate-100 pb-8 last:border-b-0 last:pb-0 print:scroll-mt-0 print:border-none print:pb-0"
                      >
                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-4 group">
                          <h2 className="text-lg sm:text-xl font-black text-teckon-blue">
                            {s.title}
                          </h2>
                          <button
                            onClick={() => copyLink(s.id)}
                            className="p-1.5 rounded-lg bg-slate-50 hover:bg-[#FFBE00]/10 text-slate-400 hover:text-[#9A3412] border border-slate-200 transition-all flex items-center justify-center gap-1 text-[9px] font-black uppercase tracking-wider cursor-pointer print:hidden"
                            title="Copy link to this section"
                          >
                            {isCopied ? (
                              <>
                                <Check size={11} className="text-emerald-600 animate-scale-in" />
                                <span className="text-emerald-700 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <LinkIcon size={11} />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* TL;DR Summary Block (print:hidden) */}
                        <div className="bg-slate-50/80 border-l-4 border-[#FFBE00] rounded-r-2xl p-4 mb-4 select-none print:hidden flex gap-3">
                          <div className="w-6 h-6 rounded-lg bg-[#FFBE00]/10 flex items-center justify-center text-xs shrink-0 font-bold text-[#FF6B35]">
                            💡
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">
                              TL;DR Summary
                            </span>
                            <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                              {s.tldr}
                            </p>
                          </div>
                        </div>

                        {/* Core Content */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                          {s.content}
                        </p>
                      </article>
                    );
                  })}
                  
                  {filteredSections.length === 0 && (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      <p className="text-slate-400 text-sm font-bold">No sections match your search terms.</p>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="mt-3 text-xs font-black text-[#FF6B35] hover:underline uppercase"
                      >
                        Reset Search Filter
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Sticky bottom floating support contact bar (print:hidden) */}
              <div className="bg-slate-900 border border-white/5 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row gap-4 items-center justify-between text-slate-300 print:hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg">
                    ⚙️
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-wider">
                      Teckon Trading Support
                    </h4>
                    <p className="text-slate-400 text-[11px]">Have commercial questions or need wholesale contract review?</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto shrink-0">
                  <a
                    href="mailto:shreejihyd4008@gmail.com?subject=Terms%20and%20Conditions%20Inquiry"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold px-4 py-2.5 rounded-xl transition-all text-xs"
                  >
                    <Mail size={12} />
                    <span>Email Support</span>
                  </a>
                  <a
                    href="https://wa.me/919426915578?text=Hello%20Teckon,%20I%20have%20a%20question%20about%20your%20commercial%2520terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#128C7E] hover:bg-[#0f766a] text-white font-bold px-4 py-2.5 rounded-xl transition-colors text-xs"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </main>

          </div>
        </div>
      </section>
    </>
  );
}
