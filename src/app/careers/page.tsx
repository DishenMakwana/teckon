import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { Rocket, Users, Trophy, Mail } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers | Teckon™ Quality Spares",
  description:
    "Join the Teckon™ team. We're looking for talented individuals passionate about hydraulic engineering and manufacturing excellence.",
  keywords: [
    "work at Shreeji Hydraulics",
    "careers in hydraulics",
    "CNC operator jobs Rajkot",
    "VMC programmer openings",
    "hydraulic engineer vacancies Gujarat",
    "manufacturing factory jobs Rajkot",
  ],
};

const cultureValues = [
  {
    icon: Rocket,
    title: "Growth Mindset",
    desc: "We invest in our people's professional development and continuous learning.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work alongside experienced hydraulic engineers and industry experts.",
  },
  {
    icon: Trophy,
    title: "Reward Excellence",
    desc: "Competitive compensation and recognition for outstanding performance.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        id="careers-hero"
        className="bg-teckon-dark-blue py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/careers-hero.webp"
            alt="Teckon professional engineering and manufacturing team working together"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Careers" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Join the Teckon™ Team
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Be part of India&apos;s leading hydraulic parts company. We&apos;re
            always looking for talented individuals who share our passion for
            quality and excellence.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Life at Teckon™
            </span>
            <h2 className="text-4xl font-black text-[#111111]">Our Culture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md hover:border-teckon-blue/10 hover:bg-white transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FFBE00]/10 group-hover:border-[#FFBE00]/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-teckon-blue group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-teckon-blue mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-600">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="opportunities" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Opportunities
          </span>
          <h2 className="text-4xl font-black text-[#111111] mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are always on the lookout for talented, driven, and passionate
            individuals who want to grow their careers in the hydraulic
            engineering and manufacturing industry. If you want to be a part of
            our dynamic team in India, please share your details and send your
            resume directly to our HR department.
          </p>
          <div className="inline-block bg-teckon-blue rounded-3xl p-8 border border-white/10 shadow-lg max-w-xl mx-auto w-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Submit Your Application
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              Click the button below to email your resume and experience details
              directly to{" "}
              <strong className="text-[#FFBE00]">
                shreejihyd4008@gmail.com
              </strong>
              . We will review your profile and get back to you if there is a
              matching opportunity.
            </p>
            <a
              href="mailto:shreejihyd4008@gmail.com?subject=Resume%20Submission%20—%20Teckon%E2%84%A2%20Quality%20Spares"
              className="inline-flex items-center gap-2 bg-[#FFBE00] text-[#0B0F19] font-bold px-8 py-4 rounded-xl hover:bg-[#d99e00] transition-colors text-base shadow-md"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span>Send Your Resume</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
