import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
  title: "Careers | Teckon Quality Spares",
  description:
    "Join the Teckon team. We're looking for talented individuals passionate about hydraulic engineering and manufacturing excellence.",
};

const cultureValues = [
  { icon: "🚀", title: "Growth Mindset", desc: "We invest in our people's professional development and continuous learning." },
  { icon: "🤝", title: "Collaborative Culture", desc: "Work alongside experienced hydraulic engineers and industry experts." },
  { icon: "🏆", title: "Reward Excellence", desc: "Competitive compensation and recognition for outstanding performance." },
];

const openings = [
  { title: "Hydraulic Systems Engineer", dept: "Engineering", type: "Full-time", location: "Rajkot, Gujarat" },
  { title: "Sales Executive — Industrial", dept: "Sales", type: "Full-time", location: "Rajkot / Remote" },
  { title: "Quality Control Inspector", dept: "Manufacturing", type: "Full-time", location: "Rajkot, Gujarat" },
  { title: "Logistics Coordinator", dept: "Operations", type: "Full-time", location: "Rajkot, Gujarat" },
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
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Join the Teckon Team</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Be part of India&apos;s leading hydraulic parts company. We&apos;re always looking for talented individuals who share our passion for quality and excellence.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">Life at Teckon</span>
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

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">Opportunities</span>
            <h2 className="text-4xl font-black text-[#111111]">Current Openings</h2>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-teckon-blue transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-[#111111] text-lg mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-50 text-teckon-blue text-xs font-semibold px-2.5 py-1 rounded-full">{job.dept}</span>
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">{job.type}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">📍 {job.location}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:shreejihyd4008@gmail.com?subject=Job Application — Teckon"
                    className="shrink-0 bg-teckon-blue text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* General CTA */}
          <div className="bg-teckon-blue rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Don&apos;t see a match?</h3>
            <p className="text-white/70 mb-6">
              We&apos;re always looking for talented individuals. Send your resume and we&apos;ll keep you in mind for future openings.
            </p>
            <a
              href="mailto:shreejihyd4008@gmail.com?subject=Resume%20Submission%20—%20Teckon%20Quality%20Spares"
              className="inline-block bg-[#FFBE00] text-[#0B0F19] font-bold px-8 py-3 rounded-xl hover:bg-white transition-colors"
            >
              📧 Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
