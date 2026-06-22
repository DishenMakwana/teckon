import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

export const metadata: Metadata = {
  title: "Terms & Conditions | Teckon™ Quality Spares",
  description: "Terms and conditions for using Teckon™ Quality Spares (Shreeji Hydraulics) website and services.",
  keywords: [
    "Teckon terms of service",
    "Shreeji Hydraulics terms & conditions",
    "OEM reference disclaimer",
    "replacement parts catalog rules",
  ],
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the Teckon™ Quality Spares website (teckon.in), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website. These terms may be updated periodically, and continued use of the site constitutes acceptance of any changes.",
  },
  {
    title: "2. Intellectual Property Rights",
    content: "All content on this website, including text, images, logos, product descriptions, and technical data, is the property of Shreeji Hydraulics (Teckon™ Quality Spares) and is protected under Indian copyright laws. You may not reproduce, distribute, or use any content without our prior written permission.",
  },
  {
    title: "3. Use of OEM Part Numbers and Trademarks",
    content: "Our website lists products that are aftermarket replacements for parts sold by Original Equipment Manufacturers (OEMs). To help our customers identify the correct replacement part for their machinery, we use OEM names, part numbers, and descriptions. Please be aware of the following: (a) For Reference Only: All manufacturer names, part numbers, symbols, and descriptions are used for reference purposes only. (b) No Affiliation: It is not implied that any part listed is the product of these manufacturers. We are an independent manufacturer of aftermarket parts. (c) Aftermarket Products: The products sold on this Site are aftermarket replacement parts and are not original OEM parts, unless explicitly stated otherwise. (d) Ownership of Trademarks: All brand names, logos, and trademarks mentioned on this site are the property of their respective owners and are used here only for identification purposes.",
  },
  {
    title: "4. Product Information",
    content: "We strive to ensure all product information, specifications, and pricing on this website are accurate. However, Teckon™ reserves the right to modify products, specifications, or prices without notice. Product images are for illustration purposes only. Actual products may vary. All sales are subject to our standard commercial terms.",
  },
  {
    title: "5. Prohibited Use",
    content: "You agree not to: (a) use this website for any unlawful purpose, (b) attempt to gain unauthorized access to any part of the website, (c) transmit any malicious code or interfere with the website's functionality, (d) use automated tools to scrape or harvest data from our website, or (e) misrepresent your identity or affiliation.",
  },
  {
    title: "6. Limitation of Liability",
    content: "To the maximum extent permitted by law, Teckon™ Quality Spares shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our liability shall not exceed the value of products purchased in the transaction giving rise to the claim.",
  },
  {
    title: "7. Warranty",
    content: "All Teckon™ hydraulic parts come with a limited warranty as specified at the time of purchase. Warranty covers manufacturing defects under normal operating conditions. Damage caused by improper installation, misuse, or unauthorized modifications is not covered. Warranty claims must be made within the warranty period with proof of purchase.",
  },
  {
    title: "8. Governing Law",
    content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat, India.",
  }
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/policy-hero.webp" alt="Engineering blueprint showing technical details of hydraulic cylinder parts assembly" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Terms & Conditions" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Terms & Conditions</h1>
          <p className="text-white/70 text-xl max-w-2xl">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-12">
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Please read these Terms and Conditions carefully before using the Teckon™ Quality Spares website or engaging our services. These terms constitute a legally binding agreement between you and Shreeji Hydraulics (Teckon™ Quality Spares).
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
