import type { Metadata } from "next";
import TermsClient from "@/components/terms/TermsClient";

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

export default function TermsPage() {
  return <TermsClient />;
}
