import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
  title: "Careers | Teckon™ Quality Spares",
  description:
    "Join the Teckon™ team. We're looking for talented individuals passionate about hydraulic engineering and manufacturing excellence.",
};

const cultureValues = [
  { icon: "🚀", title: "Growth Mindset", desc: "We invest in our people's professional development and continuous learning." },
  { icon: "🤝", title: "Collaborative Culture", desc: "Work alongside experienced hydraulic engineers and industry experts." },
  { icon: "🏆", title: "Reward Excellence", desc: "Competitive compensation and recognition for outstanding performance." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/careers-hero.png" alt="Teckon professional engineering and manufacturing team working together" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Careers" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Join the Teckon™ Team</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Be part of India&apos;s leading hydraulic parts company. We&apos;re always looking for talented individuals who share our passion for quality and excellence.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">Life at Teckon™</span>
            <h2 className="text-4xl font-black text-[#111111]">Our Culture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((v) => (
              <div key={v.title} className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-teckon-blue mb-3">{v.title}</h3>
                <p className="text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">Opportunities</span>
          <h2 className="text-4xl font-black text-[#111111] mb-6">Start Your Journey With Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are always on the lookout for talented, driven, and passionate individuals who want to grow their careers in the hydraulic engineering and manufacturing industry. If you want to be a part of our dynamic team in India, please share your details and send your resume directly to our HR department.
          </p>
          <div className="inline-block bg-teckon-blue rounded-3xl p-8 border border-white/10 shadow-lg max-w-xl mx-auto w-full">
            <h3 className="text-xl font-bold text-white mb-4">Submit Your Application</h3>
            <p className="text-slate-300 text-sm mb-6">
              Click the button below to email your resume and experience details directly to <strong className="text-[#FFBE00]">shreejihyd4008@gmail.com</strong>. We will review your profile and get back to you if there is a matching opportunity.
            </p>
            <a
              href="mailto:shreejihyd4008@gmail.com?subject=Resume%20Submission%20—%20Teckon%E2%84%A2%20Quality%20Spares"
              className="inline-flex items-center gap-2 bg-[#FFBE00] text-[#0B0F19] font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-teckon-blue transition-colors text-base shadow-md"
            >
              📧 Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
