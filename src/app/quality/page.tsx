import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  DraftingCompass,
  Hammer,
  Microscope,
  Ruler,
  Boxes,
  BadgeCheck,
  Award,
  Globe,
  Wrench,
  Activity,
} from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
  alternates: { canonical: "/quality" },
  title: "Quality & Manufacturing | Teckon™ Quality Spares",
  description:
    "ISO 9001:2015 certified hydraulic parts manufacturing. Learn about Teckon™'s precision manufacturing process, quality control, and certifications.",
  keywords: [
    "ISO 9001:2015 certified",
    "hydraulic parts quality control",
    "CNC machining Rajkot",
    "VMC manufacturing Gujarat",
    "precision hydraulic engineering",
    "hydraulic testing standards",
    "Teckon quality assurance",
  ],
};

const steps = [
  {
    num: "01",
    icon: DraftingCompass,
    title: "Design & Development",
    description:
      "Every part begins with CAD/CAM engineering analysis. Our design team ensures dimensional accuracy and compatibility with OEM specifications for hydraulic systems.",
  },
  {
    num: "02",
    icon: Hammer,
    title: "Forging & Machining",
    description:
      "CNC, VMC, and specialized hydraulic machining centers produce parts with tight tolerances. We use premium raw materials from certified steel suppliers.",
  },
  {
    num: "03",
    icon: Microscope,
    title: "Lab Testing",
    description:
      "Pressure testing, metallurgical analysis, and hardness testing verify material integrity and performance characteristics before assembly.",
  },
  {
    num: "04",
    icon: Ruler,
    title: "Quality Control",
    description:
      "CMM (Coordinate Measuring Machine) inspection and tolerance verification ensure every part meets precise dimensional specifications.",
  },
  {
    num: "05",
    icon: Boxes,
    title: "Assembly",
    description:
      "Precision assembly in a controlled, clean environment. Seals, bearings, and components are assembled following standardized procedures.",
  },
  {
    num: "06",
    icon: BadgeCheck,
    title: "Final Testing",
    description:
      "Hydraulic pressure and performance testing on certified test benches. Only parts that pass all tests receive the Teckon™ quality approval.",
  },
];

const certs = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    desc: "Quality Management System certification for consistent manufacturing excellence",
  },
  {
    icon: Globe,
    title: "Make in India",
    desc: "Proudly manufactured in India — contributing to the nation's industrial growth",
  },
  {
    icon: Wrench,
    title: "Authorized Distributor",
    desc: "Authorized distributor for major hydraulic component brands in India",
  },
  {
    icon: Activity,
    title: "Lab Tested",
    desc: "All parts undergo pressure testing and metallurgical analysis before dispatch",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section
        id="quality-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/quality-manufacturing.webp"
            alt="Heavy machinery parts manufacturing facility showcasing rigorous quality control testing"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Quality" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Precision | Performance | Perfection
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Teckon™ is ISO 9001:2015 certified, maintaining the highest
            standards across every stage of production. All hydraulic parts
            undergo rigorous testing to ensure reliability and durability.
          </p>
        </div>
      </section>

      {/* Manufacturing Image */}
      {/* <section id="assurance" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/quality-manufacturing.webp"
              alt="Teckon quality control laboratory"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/70 to-transparent flex items-center">
              <div className="p-8">
                <div className="text-[#FFBE00] font-bold text-sm uppercase tracking-widest mb-2">
                  ISO 9001:2015
                </div>
                <div className="text-white text-3xl font-black">
                  World-Class Quality Control
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Manufacturing Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Our Process
            </span>
            <h2 className="text-4xl font-black text-[#111111]">
              Manufacturing Process
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every Teckon™ hydraulic part passes through a rigorous 6-stage
              manufacturing and quality process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                >
                  <span className="absolute right-6 top-4 text-6xl font-mono font-black text-[#FFBE00]/10 select-none group-hover:text-[#FFBE00]/25 transition-colors duration-300">
                    {step.num}
                  </span>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#FFBE00]/10 group-hover:border-[#FFBE00]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-teckon-blue group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-teckon-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFBE00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Credentials
            </span>
            <h2 className="text-4xl font-black text-[#111111]">
              Certifications & Accreditations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="flex flex-col items-center text-center bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-teckon-blue/20 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FFBE00]/10 group-hover:border-[#FFBE00]/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-teckon-blue group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-black text-teckon-blue mb-2 text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-teckon-blue py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Request Our Quality Documentation
          </h2>
          <p className="text-white/70 mb-8">
            Get our ISO certificates and technical data sheets. Contact us
            today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFBE00] text-[#0B0F19] font-bold px-8 py-4 rounded-xl hover:bg-[#d99e00] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
