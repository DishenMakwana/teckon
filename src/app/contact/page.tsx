import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactClient = dynamic(
  () => import("@/components/contact/ContactClient"),
  { ssr: true }
);

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
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

import { COMPANY } from "@/lib/data";

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Request a Quote & Contact Us | Teckon™ Quality Spares",
    description:
      "Get in touch with Shreeji Hydraulics (Teckon™) in Rajkot, Gujarat. Request custom quotes for hydraulic pumps, cylinder seal kits, and spares. Direct WhatsApp and phone contacts available.",
    url: "https://teckon.vercel.app/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phones.main,
      email: "shreejihyd4008@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "36-C Bhaktinagar, Udhyognagar, Gondal Road",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360004",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
