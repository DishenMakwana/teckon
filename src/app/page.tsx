import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { HardHat, Layers, Route, Phone } from "lucide-react";

import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";

const ProductsCarousel = dynamic(
  () => import("@/components/home/ProductsCarousel"),
  { ssr: true }
);
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  ssr: true,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  ssr: true,
});
import DiagnosticsBenchLoader from "@/components/home/DiagnosticsBenchLoader";
const PartnersMarquee = dynamic(
  () => import("@/components/home/PartnersMarquee"),
  { ssr: true }
);
const GlobalPresence = dynamic(
  () => import("@/components/home/GlobalPresence"),
  { ssr: true }
);
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: true,
});
const BlogSection = dynamic(() => import("@/components/home/BlogSection"), {
  ssr: true,
});

const industries = [
  {
    icon: HardHat,
    title: "Construction & Earthmoving",
    description:
      "We supply high-performance hydraulic cylinders, pumps, and seal kits specifically built for backhoe loaders, excavators, and crawler tractors. Our components are widely used on JCB 3DX, CAT 424B, and Hitachi EX200 models to maintain high operating pressure and precise fluid control in rough terrains.",
  },
  {
    icon: Layers,
    title: "Mining & Heavy Excavation",
    description:
      "Heavy machinery used in quarrying and mining operations requires hydraulic spares that can withstand extreme pressure, high temperatures, and abrasive dust. Teckon provides robust breaker spares, tipper cylinders, control valves, and heavy-duty pins and bushes designed for maximum wear resistance and longevity.",
  },
  {
    icon: Route,
    title: "Infrastructure & Roadworks",
    description:
      "Precision is key in road building and infrastructure development. Our premium line of valves, hydraulic hoses, and specialized fittings ensure smooth hydraulic flow and quick response rates for pavers, vibratory rollers, and loaders. We keep your projects moving without unexpected breakdown delays.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <StatsStrip />
      <Suspense
        fallback={
          <div className="h-[450px] bg-slate-900/5 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#FFBE00] border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <ProductsCarousel />
      </Suspense>
      <AboutSection />
      <WhyChooseUs />
      <Suspense
        fallback={
          <div className="h-96 bg-teckon-dark-blue flex items-center justify-center">
            <div className="text-teckon-yellow font-mono animate-pulse">
              Initializing Diagnostics Bench...
            </div>
          </div>
        }
      >
        <DiagnosticsBenchLoader />
      </Suspense>

      {/* Industries & Machinery We Serve - SEO Text Section */}
      <section
        id="industries"
        className="py-20 bg-slate-50 border-t border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Applications
            </span>
            <h2 className="text-4xl font-black text-[#111111] mb-4">
              Industries &amp; Machinery We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our premium hydraulic parts and spares are engineered to meet the
              demanding requirements of various heavy industries, ensuring
              maximum efficiency and minimal downtime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#FFBE00]/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#FFBE00]/10 group-hover:border-[#FFBE00]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-teckon-blue group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-[#0B0F19] font-black text-xl mb-3 group-hover:text-teckon-blue transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PartnersMarquee />
      <GlobalPresence />
      <Suspense
        fallback={
          <div className="h-[350px] bg-slate-900/5 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#FFBE00] border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Testimonials />
      </Suspense>
      <BlogSection />

      {/* CTA Banner */}
      <section id="cta" className="bg-[#FFBE00] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0B0F19] mb-4">
            Need Hydraulic Spares for Your Equipment?
          </h2>
          <p className="text-[#0B0F19]/70 mb-8">
            Contact our technical team for same-day quotes on JCB, Terex, CAT,
            and all other heavy machinery hydraulic parts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111111] text-white font-bold px-8 py-4 rounded-xl hover:bg-teckon-blue transition-colors"
            >
              Get a Quick Quote
            </Link>
            <a
              href="tel:+916351879842"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0B0F19] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200/50"
            >
              <Phone className="w-5 h-5 text-teckon-blue" />
              +91-63518 79842
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
