import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
  title: "Privacy Policy | Teckon™ Quality Spares",
  description: "Privacy policy for Teckon™ Quality Spares (Shreeji Hydraulics) — how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Data Collection",
    content: "We collect personal information such as your name, email address, phone number, and company details when you submit an inquiry form, contact us via email, or interact with our website. We only collect information that is necessary to process your inquiries and provide our services.",
  },
  {
    title: "2. Data Usage",
    content: "The information we collect is used solely to: (a) respond to your product inquiries and quotation requests, (b) provide customer support and after-sales service, (c) send relevant product updates and offers with your consent, and (d) improve our website and services. We do not sell or rent your personal data to third parties.",
  },
  {
    title: "3. Cookies",
    content: "Our website uses essential cookies to ensure proper functionality. We may use analytics cookies to understand how visitors use our site. You can control cookie settings through your browser preferences. Declining non-essential cookies will not affect your ability to use the website.",
  },
  {
    title: "4. Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorized personnel only.",
  },
  {
    title: "5. Data Sharing",
    content: "We do not share your personal information with third parties except: (a) with your explicit consent, (b) to comply with legal obligations, or (c) with trusted service providers who assist in our operations under strict confidentiality agreements.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, withdraw consent at any time, and lodge a complaint with the relevant data protection authority. To exercise these rights, contact us at shreejihyd4008@gmail.com.",
  },
  {
    title: "7. Contact for Privacy",
    content: "For any privacy-related questions or requests, please contact us at: Email: shreejihyd4008@gmail.com | Phone: +91-63518 79842 | Address: 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/policy-hero.webp" alt="Engineering blueprint showing technical details of hydraulic cylinder parts assembly" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-xl max-w-2xl">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-12">
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Teckon™ Quality Spares (Shreeji Hydraulics) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website or services.
            </p>
            <div className="flex flex-col gap-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-black text-teckon-blue mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
