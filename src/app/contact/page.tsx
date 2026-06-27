import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactClient = dynamic(
  () => import("@/components/contact/ContactClient"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Request a Quote & Contact Us | Teckon™ Quality Spares",
  description:
    "Get in touch with Shreeji Hydraulics (Teckon™) in Rajkot, Gujarat. Request custom quotes for hydraulic pumps, cylinder seal kits, and spares. Direct WhatsApp and phone contacts available.",
  keywords: [
    "contact Shreeji Hydraulics",
    "JCB parts quotation",
    "request hydraulic spares price",
    "Rajkot hydraulic factory address",
    "Alpesh Patel phone number",
    "Teckon contact",
    "hydraulic spares WhatsApp inquiry",
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
