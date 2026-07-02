"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search,
  Printer,
  Link as LinkIcon,
  Check,
  FileText,
  HelpCircle,
  Mail,
  MessageSquare,
  Lightbulb,
  Shield,
} from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

interface Section {
  id: string;
  title: string;
  tldr: string;
  content: string;
}

const SECTIONS: Section[] = [
  {
    id: "collection",
    title: "1. Data Collection",
    tldr: "We collect your contact details when you inquire (via forms/WhatsApp) and automatic technical details (IP, browser) to optimize site performance.",
    content:
      "We collect information about you in two primary ways: (a) Personally Identifiable Information: This is information you voluntarily provide to us when expressing interest in our products or services, such as your name, email address, phone number, city, country, company name, and details specified in contact forms or WhatsApp inquiries. (b) Derivative/Usage Data: Our servers automatically collect certain technical details when you visit the website, including your IP address, browser type, operating system, page response times, access durations, and referral pages. This is used for internal analytics to optimize performance.",
  },
  {
    id: "usage",
    title: "2. Data Usage",
    tldr: "We only use your info to answer quotes, support your machinery needs, and improve our services. We never sell or rent your data.",
    content:
      "The information we collect is used solely to: (a) respond to your product inquiries and quotation requests, (b) provide customer support and after-sales service, (c) send relevant product updates and offers with your consent, and (d) improve our website and services. We do not sell or rent your personal data to third parties.",
  },
  {
    id: "cookies",
    title: "3. Cookies",
    tldr: "We use essential cookies to run the site, and basic analytics to understand usage. You can disable them in your browser settings.",
    content:
      "Our website uses essential cookies to ensure proper functionality. We may use analytics cookies to understand how visitors use our site. You can control cookie settings through your browser preferences. Declining non-essential cookies will not affect your ability to use the website.",
  },
  {
    id: "security",
    title: "4. Data Security",
    tldr: "We use industry-standard encryption and strict access controls to protect your data from unauthorized access.",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorized personnel only.",
  },
  {
    id: "sharing",
    title: "5. Data Sharing",
    tldr: "We only share data if legally required, or with trusted service partners (like Resend for email) under strict confidentiality.",
    content:
      "We do not sell or rent your personal information to third parties. We may disclose your data in certain limited situations: (a) to comply with legal processes or regulations, (b) to protect our company rights or property, or (c) with trusted third-party service providers who assist in our operations (such as Resend for email delivery, hosting providers, or client support) under strict confidentiality agreements and only to perform tasks on our behalf.",
  },
  {
    id: "rights",
    title: "6. Your Rights",
    tldr: "You can request to see, edit, or delete your personal data at any time by contacting our support team.",
    content:
      "You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, withdraw consent at any time, and lodge a complaint with the relevant data protection authority.",
  },
];

export default function PrivacyPolicyClient() {
  const [activeSection, setActiveSection] = useState<string>("collection");
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
      <section
        id="privacy-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden print:hidden"
      >
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
          <BreadcrumbBar items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl">
            Last updated: June 2026 • Standard transparency guidelines
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section
        id="privacy-content"
        className="py-16 bg-gray-50 print:bg-white print:py-0"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Navigation & Search (print:hidden) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 print:hidden">
              {/* Search Box */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Search size={14} className="text-[#FF6B35]" />
                  Search Policy
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
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 border-b border-gray-100 pb-2">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>Sections</span>
                </span>
                <nav className="flex flex-col gap-1.5">
                  {SECTIONS.map((s) => {
                    const isSectionVisible = filteredSections.some(
                      (fs) => fs.id === s.id
                    );
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
                        <FileText
                          size={13}
                          className={
                            isActive ? "text-[#FFBE00]" : "text-slate-400"
                          }
                        />
                        <span className="truncate">{s.title}</span>
                      </button>
                    );
                  })}
                  {filteredSections.length === 0 && (
                    <p className="text-slate-400 text-xs text-center py-4 italic">
                      No matching sections
                    </p>
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
                  <h3 className="text-white font-black text-sm">
                    Need a physical copy?
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    You can print this document directly or save it as a local
                    PDF for your compliance reference.
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
                    Teckon™ Quality Spares (Shreeji Hydraulics) is committed to
                    protecting your privacy. This policy explains how we
                    collect, use, and safeguard your personal information when
                    you use our website or services.
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
                                <Check
                                  size={11}
                                  className="text-emerald-600 animate-scale-in"
                                />
                                <span className="text-emerald-700 font-bold">
                                  Copied
                                </span>
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
                            <Lightbulb className="w-4 h-4 text-[#FF6B35]" />
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
                      <p className="text-slate-400 text-sm font-bold">
                        No sections match your search terms.
                      </p>
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
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#FFBE00]" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-wider">
                      Compliance Officer Support
                    </h4>
                    <p className="text-slate-400 text-[11px]">
                      Have questions regarding your data privacy rights?
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto shrink-0">
                  <a
                    href="mailto:shreejihyd4008@gmail.com?subject=Privacy%20Policy%20Inquiry"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold px-4 py-2.5 rounded-xl transition-all text-xs"
                  >
                    <Mail size={12} />
                    <span>Email Support</span>
                  </a>
                  <a
                    href="https://wa.me/919426915578?text=Hello%20Teckon,%20I%20have%20a%20question%20about%20my%20data%20privacy"
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
