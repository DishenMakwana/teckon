"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Award, Compass, Users, CheckCircle2, ChevronRight } from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { EVENTS } from "@/lib/data";

const timelineStats = [
  {
    icon: Award,
    value: "9+",
    label: "Major Expos Visited",
    desc: "Excon, bauma CONEXPO & regional trade shows",
  },
  {
    icon: Compass,
    value: "10+ Years",
    label: "Industrial Journey",
    desc: "Tracking hydraulic component evolution since 2014",
  },
  {
    icon: Users,
    value: "Pan-India",
    label: "Partner Connections",
    desc: "Linked with leading OEMs and aftermarket specialists",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-[#0B0F19] text-slate-300 min-h-screen font-sans selection:bg-[#FFBE00]/30 selection:text-white">
      {/* Hero Section */}
      <section
        id="events-hero"
        className="relative py-24 border-b border-white/5 overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0B0F19]"
      >
        {/* Background Blueprint Grid and Radial Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFBE00]/5 rounded-full filter blur-[120px] pointer-events-none" />

        {/* Hero Background Trade Show Banner */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-[0.07] lg:opacity-[0.12] pointer-events-none mask-gradient">
          <Image
            src="/images/events-tradeshow.webp"
            alt="Heavy machinery trade show showcasing hydraulic components"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Events" }]} />
          
          <div className="max-w-3xl mt-8 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFBE00]/10 border border-[#FFBE00]/20 text-[#FFBE00] font-mono text-[10px] uppercase tracking-widest font-black">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE00] animate-pulse" />
              Expo Presence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Events &amp; Exhibitions
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Our engineering coordinators actively explore key automotive component and
              construction machinery trade shows across India. This keeps Teckon™ at the
              forefront of hydraulic engineering, materials science, and supply chain updates.
            </p>
          </div>

          {/* Stats strip integrated directly into the Hero for layout balance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {timelineStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6 relative overflow-hidden group hover:border-[#FFBE00]/25 transition-all duration-350 shadow-lg"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFBE00]/[0.01] rounded-bl-full group-hover:bg-[#FFBE00]/[0.02] transition-colors" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FFBE00] shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-xs font-bold text-[#FFBE00] uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Timeline Section */}
      <section id="timeline" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,25,0)_0%,rgba(15,23,42,0.5)_100%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-3">
            <span className="text-[#FFBE00] font-mono text-[9px] uppercase tracking-widest font-black block">
              CHRONOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Expo Journey
            </h2>
            <div className="w-12 h-1 bg-[#FFBE00] mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Elegant Vertical Timeline Center Line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-0.5 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#FFBE00]/40 via-white/10 to-[#FFBE00]/5 pointer-events-none" />

            <div className="space-y-16">
              {EVENTS.map((event, i) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row gap-8 items-stretch relative ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Index Dot indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-[#0B0F19] border-2 border-[#FFBE00] ring-4 ring-[#FFBE00]/15 z-20 pointer-events-none animate-pulse" />

                  {/* Content Card (Left or Right side depending on index) */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0 flex">
                    <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-3xl p-6 md:p-8 hover:border-[#FFBE00]/30 hover:bg-white/[0.04] transition-all duration-350 shadow-xl group relative overflow-hidden flex-1 flex flex-col justify-between">
                      {/* Blueprint grid effect in card background on hover */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />
                      
                      {/* Translucent year background watermark */}
                      <div className="absolute -top-3 -right-3 font-mono text-6xl font-black text-white/[0.02] group-hover:text-[#FFBE00]/[0.05] transition-colors pointer-events-none select-none">
                        {event.year}
                      </div>

                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFBE00]/10 border border-[#FFBE00]/20 text-[#FFBE00] font-mono text-[9px] uppercase tracking-wider font-black">
                            <CheckCircle2 className="w-3 h-3 text-[#FFBE00]" />
                            <span>Visited</span>
                          </span>
                          <span className="text-slate-500 font-mono text-xs">
                            {event.year}
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-white group-hover:text-[#FFBE00] transition-colors leading-snug">
                          {event.name}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                          {event.description}
                        </p>
                      </div>

                      {/* Micro-interactive read indicator */}
                      <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">
                          Association Verified
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#FFBE00] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Center Year Badge (Hidden on mobile) */}
                  <div className="hidden md:flex md:w-[8%] items-center justify-center z-10 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-white/5 text-white flex flex-col items-center justify-center shadow-2xl group-hover:border-[#FFBE00]/30 transition-colors">
                      <span className="text-[10px] font-mono text-[#FFBE00] uppercase tracking-widest font-black leading-none">
                        Year
                      </span>
                      <span className="font-mono font-black text-md mt-1 leading-none">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Image Card (Alternating opposite to content card) */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0">
                    <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-white/[0.05] shadow-xl group/img">
                      {/* Overlay card hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/20 to-transparent z-10 transition-opacity duration-350 opacity-90 group-hover/img:opacity-70" />
                      
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover scale-100 group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Small floating metadata label on top-left of image */}
                      <div className="absolute top-4 left-4 z-20 bg-[#0B0F19]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5 text-[10px] font-mono font-semibold text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-[#FFBE00]" />
                        <span>Visited in {event.year}</span>
                      </div>

                      {/* Floating overlay text at bottom */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col space-y-1">
                        <span className="text-white text-xs font-black uppercase tracking-wider">
                          {event.name}
                        </span>
                        <span className="text-[#FF6B35] text-[10px] font-bold">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F172A] to-[#0B0F19] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl text-center">
            {/* Glow Elements */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FFBE00]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B35]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Connect with Our Team
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Planning to visit the next premier construction machinery expo or heavy vehicle
                exhibitions in India? Get in touch to schedule a meeting with our engineers 
                or arrange a physical tour of our Rajkot manufacturing facility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBE00] text-[#0B0F19] font-bold px-8 py-4 rounded-xl hover:bg-[#FFBE00]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm shadow-lg shadow-[#FFBE00]/10"
                >
                  Schedule a Visit
                </Link>
                <a
                  href="mailto:shreejihyd4008@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Email our Coordinator
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
