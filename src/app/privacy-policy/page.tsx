import type { Metadata } from "next";
import PrivacyPolicyClient from "@/components/privacy-policy/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Teckon™ Quality Spares",
  description: "Privacy policy for Teckon™ Quality Spares (Shreeji Hydraulics) — how we collect, use, and protect your data.",
  keywords: [
    "Teckon privacy policy",
    "Shreeji Hydraulics terms privacy",
    "cookie policy heavy machinery parts site",
    "user data protection hydraulics website",
  ],
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
