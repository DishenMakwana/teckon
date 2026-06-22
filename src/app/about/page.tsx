import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
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
    description: "We implement environmentally responsible practices across our production facilities, minimizing waste and energy consumption.",
  },
  {
    icon: "⚙️",
    title: "Advanced Automation",
    description: "CNC and VMC machining centers, along with automated quality inspection, ensure precision and consistency in every part.",
  },
  {
    icon: "📈",
    title: "Efficient Production",
    description: "Lean manufacturing principles drive our operations, enabling faster turnaround times and competitive pricing for our clients.",
  },
];

const values = [
  { icon: "✅", title: "Quality", desc: "Uncompromising standards at every step" },
  { icon: "🤝", title: "Integrity", desc: "Honest dealings with every partner" },
  { icon: "💡", title: "Innovation", desc: "Continuously improving our products" },
  { icon: "👥", title: "Customer Focus", desc: "Your success drives our decisions" },
  { icon: "🏆", title: "Teamwork", desc: "Stronger together as a team" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/about-factory.webp" alt="Teckon manufacturing factory floor showcasing precision CNC machinery" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "About Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">About Teckon™</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Over 25 years of delivering premium hydraulic parts and spares across India and beyond.
          </p>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Our Foundation</span>
            <h2 className="text-4xl font-black text-[#111111]">Innovation Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-teckon-blue mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Leadership</span>
            <h2 className="text-4xl font-black text-[#111111]">Meet Our Founders</h2>
          </div>

          {/* Founder 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/founder-jc-neutral.webp" alt="Mr. J.C. Patel — Co-Founder & Director" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" priority />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFBE00] text-[#0B0F19] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                Co-Founder & Director
              </div>
              <h3 className="text-3xl font-black text-teckon-blue mb-2">Mr. J.C. Patel</h3>
              <a href="tel:+919426202945" className="text-[#FF6B35] font-semibold mb-4 block hover:underline">
                📞 +91-94262 02945
              </a>
              <p className="text-gray-600 leading-relaxed mb-4">
                As Co-Founder, Mr. J.C. Patel brings extensive expertise in hydraulic engineering and supply chain management. His technical knowledge and industry relationships have been instrumental in establishing Teckon™&apos;s reputation for quality and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With decades of experience in the hydraulic parts industry, Mr. J.C. Patel continues to guide product development and quality assurance, ensuring every Teckon™ part meets the highest standards of performance.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2 relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/founder-alpesh-white.webp" alt="Mr. Alpesh Patel — Co-Founder & Director" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" priority />
            </div>
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-teckon-blue text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                Co-Founder & Director
              </div>
              <h3 className="text-3xl font-black text-teckon-blue mb-2">Mr. Alpesh Patel</h3>
              <a href="tel:+919426915578" className="text-[#FF6B35] font-semibold mb-4 block hover:underline">
                📞 +91-94269 15578
              </a>
              <p className="text-gray-600 leading-relaxed mb-4">
                Co-Founder and driving force behind Teckon™&apos;s growth, Mr. Alpesh Patel has over 25 years of experience in hydraulic parts distribution and manufacturing. With a deep understanding of the construction equipment industry, he has built Teckon™ into a trusted name for hydraulic spares across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under his leadership, Teckon™ has expanded from a local distributor in Rajkot to a company with nationwide reach, earning ISO 9001:2015 certification and the trust of major equipment operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#111111]">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teckon-blue bg-slate-50 rounded-r-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-black text-teckon-blue mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                &ldquo;To be the leading manufacturer of hydraulic parts and spares in India, delivering innovation and precision to every client nationwide.&rdquo;
              </p>
            </div>
            <div className="border-l-4 border-[#FF6B35] bg-orange-50 rounded-r-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-black text-[#FF6B35] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                &ldquo;To manufacture and distribute world-class hydraulic parts through cutting-edge technology, continuous improvement, and an unwavering commitment to quality and customer satisfaction.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-teckon-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-3">{v.icon}</div>
                <div className="text-white font-bold mb-1">{v.title}</div>
                <div className="text-white/60 text-xs">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFBE00]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0B0F19] mb-4">Ready to Partner with Teckon™?</h2>
          <p className="text-[#0B0F19]/70 mb-8">Contact our team today for a quick quote on hydraulic spares for your equipment.</p>
          <Link href="/contact" className="inline-block bg-[#111111] text-white font-bold px-8 py-4 rounded-xl hover:bg-teckon-blue transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
