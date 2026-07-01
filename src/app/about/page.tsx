import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us — Teckon™ Quality Spares | Shreeji Hydraulics",
  description:
    "Learn about Teckon™ (Shreeji Hydraulics), established in 2000 in Rajkot, Gujarat. Meet our founders Mr. Alpesh Patel and Mr. J.C. Patel and discover our vision and values.",
  keywords: [
    "About Teckon",
    "Shreeji Hydraulics history",
    "Mr. Alpesh Patel",
    "Mr. J.C. Patel",
    "hydraulic parts manufacturing history",
    "Rajkot spares manufacturer",
    "Teckon values and team",
  ],
};

const pillars = [
  {
    icon: "🌱",
    title: "Sustainable Manufacturing",
    description:
      "We implement environmentally responsible practices across our production facilities, minimizing waste and energy consumption.",
  },
  {
    icon: "⚙️",
    title: "Advanced Automation",
    description:
      "CNC and VMC machining centers, along with automated quality inspection, ensure precision and consistency in every part.",
  },
  {
    icon: "📈",
    title: "Efficient Production",
    description:
      "Lean manufacturing principles drive our operations, enabling faster turnaround times and competitive pricing for our clients.",
  },
];

const values = [
  {
    icon: "✅",
    title: "Quality",
    desc: "Uncompromising standards at every step",
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "Honest dealings with every partner",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Continuously improving our products",
  },
  {
    icon: "👥",
    title: "Customer Focus",
    desc: "Your success drives our decisions",
  },
  { icon: "🏆", title: "Teamwork", desc: "Stronger together as a team" },
];

const founders = [
  {
    name: "Mr. J.C. Patel",
    role: "Co-Founder & Director",
    image: "/images/founder-jc-neutral.webp",
    alt: "Mr. J.C. Patel, Co-Founder and Director at Shreeji Hydraulics",
    focus: "Engineering judgement",
    note: "Guides technical review, product reliability, and the inspection habits that keep Teckon parts consistent.",
    phone: "+91 94262 02945",
  },
  {
    name: "Mr. Alpesh Patel",
    role: "Co-Founder & Director",
    image: "/images/founder-alpesh-white.webp",
    alt: "Mr. Alpesh Patel, Co-Founder and Director at Shreeji Hydraulics",
    focus: "Market execution",
    note: "Leads customer relationships, sourcing discipline, and the day-to-day growth of the Teckon network.",
    phone: "+91 94269 15578",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        id="about-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/about-factory.webp"
            alt="Teckon manufacturing factory floor showcasing precision CNC machinery"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "About Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            About Teckon™
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Over 25 years of delivering premium hydraulic parts and spares
            across India and beyond.
          </p>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section id="pillars" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Our Foundation
            </span>
            <h2 className="text-4xl font-black text-[#111111]">
              Innovation Pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-teckon-blue mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="leadership" className="bg-slate-50 py-18 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-[#C2410C]">
                Leadership
              </span>
              <h2 className="mt-3 text-4xl font-black text-[#111111] sm:text-5xl">
                Founders close to work.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Teckon stays personal at decision level. Technical calls, customer
              commitments, and supplier choices remain visible to leadership.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm hover:shadow-[0_24px_48px_rgba(0,0,0,0.04)] hover:border-slate-300/60 transition-all duration-500"
              >
                <div className="grid min-h-[420px] sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[320px] bg-slate-50 overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col justify-between p-7">
                    <div>
                      <div className="mb-5 inline-flex rounded-full bg-[#FFBE00]/20 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#9A3412]">
                        {founder.focus}
                      </div>
                      <h3 className="text-3xl font-black text-[#111111]">
                        {founder.name}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-slate-500">
                        {founder.role}
                      </p>
                      <p className="mt-6 text-sm leading-7 text-slate-600">
                        {founder.note}
                      </p>
                    </div>
                    <div>
                      <div className="mt-8 h-px bg-slate-100 w-full" />
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                          Shreeji Hydraulics
                        </p>
                        <a
                          href={`tel:${founder.phone.replace(/\s+/g, "")}`}
                          className="group/btn inline-flex items-center gap-2.5 rounded-full bg-[#111111] hover:bg-[#FFBE00] px-4.5 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:text-[#111111] transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(255,190,0,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-12" />
                          <span>{founder.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#111111]">
              Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teckon-blue bg-slate-50 rounded-r-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-black text-teckon-blue mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                &ldquo;To be the leading manufacturer of hydraulic parts and
                spares in India, delivering innovation and precision to every
                client nationwide.&rdquo;
              </p>
            </div>
            <div className="border-l-4 border-[#FF6B35] bg-orange-50 rounded-r-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-black text-[#FF6B35] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                &ldquo;To manufacture and distribute world-class hydraulic parts
                through cutting-edge technology, continuous improvement, and an
                unwavering commitment to quality and customer
                satisfaction.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 bg-teckon-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <div className="text-white font-bold mb-1">{v.title}</div>
                <div className="text-white/60 text-xs">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 bg-[#FFBE00]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0B0F19] mb-4">
            Ready to Partner with Teckon™?
          </h2>
          <p className="text-[#0B0F19]/70 mb-8">
            Contact our team today for a quick quote on hydraulic spares for
            your equipment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white font-bold px-8 py-4 rounded-xl hover:bg-teckon-blue transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
