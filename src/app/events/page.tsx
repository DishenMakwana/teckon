"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { EVENTS } from "@/lib/data";

export default function EventsPage() {
  const eventsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Events & Exhibitions | Teckon™ Quality Spares",
    description:
      "Our team visits and explores key automotive component and construction equipment expos to stay updated on engineering advancements.",
    url: "https://teckon.vercel.app/events",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: EVENTS.length,
      itemListElement: EVENTS.map((event, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Event",
          name: event.name,
          startDate: `${event.year}-01-01`,
          location: {
            "@type": "Place",
            name: event.location,
            address: event.location,
          },
          image: event.image,
          description: event.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsListSchema) }}
      />
      {/* Hero (Restored Original Section) */}
      <section
        id="events-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/events-tradeshow.webp"
            alt="Industrial heavy machinery trade show showcasing hydraulic components"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Events" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Events &amp; Exhibitions
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Our team visits and explores key automotive component and
            construction equipment expos to stay updated on the latest hydraulic
            engineering advancements and build industry partnerships.
          </p>
        </div>
      </section>

      {/* Events Timeline Section (Light Themed) */}
      <section id="timeline" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Presence
            </span>
            <h2 className="text-4xl font-black text-[#111111]">
              Our Expo Journey
            </h2>
          </div>

          <div className="relative">
            {/* Elegant Vertical Timeline Center Line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-0.5 top-2 bottom-2 w-0.5 bg-slate-200 pointer-events-none" />

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
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-white border-2 border-teckon-blue ring-4 ring-teckon-blue/10 z-20 pointer-events-none" />

                  {/* Content Card (Left or Right side depending on index) */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0 flex">
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:border-[#FFBE00]/45 hover:shadow-xl transition-all duration-350 shadow-sm group relative overflow-hidden flex-1 flex flex-col justify-between">
                      {/* Translucent year background watermark (Visibility improved) */}
                      <div className="absolute -top-1 -right-1 font-mono text-6xl font-black text-slate-200/80 group-hover:text-[#FFBE00]/20 transition-colors pointer-events-none select-none">
                        {event.year}
                      </div>

                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFBE00]/10 border border-[#FFBE00]/20 text-[#C2410C] font-mono text-[9px] uppercase tracking-wider font-black">
                            <CheckCircle2 className="w-3 h-3 text-[#C2410C]" />
                            <span>Visited</span>
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-[#111111] group-hover:text-teckon-blue transition-colors leading-snug">
                          {event.name}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs text-[#FF6B35] font-semibold">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Year Badge (Hidden on mobile) */}
                  <div className="hidden md:flex md:w-[8%] items-center justify-center z-10 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/60 text-[#111111] flex flex-col items-center justify-center shadow-sm group-hover:border-[#FFBE00]/30 transition-colors">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black leading-none">
                        Year
                      </span>
                      <span className="font-mono font-black text-md mt-1 leading-none text-teckon-blue">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Image Card (Stretched to match text card height, redundant info removed) */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0 flex">
                    <div className="relative w-full rounded-3xl overflow-hidden border border-gray-100 shadow-sm group/img h-full min-h-[240px] md:min-h-full flex-1">
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover scale-100 group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA (Restored Original Section) */}
      <section id="cta" className="bg-[#FFBE00] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0B0F19] mb-4">
            Connect with Our Team
          </h2>
          <p className="text-[#0B0F19]/70 mb-8">
            Planning to attend an upcoming industry expo? Contact us to schedule
            a meeting or arrange a visit to our Rajkot manufacturing facility.
          </p>
          <a
            href="mailto:shreejihyd4008@gmail.com"
            className="inline-block bg-[#111111] text-white font-bold px-8 py-4 rounded-xl hover:bg-teckon-blue transition-colors"
          >
            Schedule a Meeting
          </a>
        </div>
      </section>
    </>
  );
}
