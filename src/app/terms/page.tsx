import type { Metadata } from "next";
import TermsClient from "@/components/terms/TermsClient";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms & Conditions | Teckon™ Quality Spares",
  description:
    "Terms and conditions for using Teckon™ Quality Spares (Shreeji Hydraulics) website and services.",
  keywords: [
    "Teckon terms of service",
    "Shreeji Hydraulics terms & conditions",
    "OEM reference disclaimer",
    "replacement parts catalog rules",
  ],
};

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions | Teckon™ Quality Spares",
    "description": "Terms and conditions for using Teckon™ Quality Spares (Shreeji Hydraulics) website and services.",
    "url": "https://teckon.vercel.app/terms"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsClient />
    </>
  );
}
