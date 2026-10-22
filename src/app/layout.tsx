import "./globals.css";
import { Outfit } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuickAccessRail from "@/components/layout/QuickAccessRail";
import BackToTop from "@/components/ui/BackToTop";
import Preloader from "@/components/layout/Preloader";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { COMPANY } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Teckon® Quality Spares | Premium Hydraulic Parts",
    template: "%s | Teckon® Quality Spares",
  },
  description:
    "Shreeji Hydraulics (Teckon®) — Wholesaler & Suppliers Store for Auto Parts and Earthmoving Spares. High-performance replacement parts for JCB, L&T, JD, Terex (TARAX), CAT, and heavy machinery. ISO 9001:2015 certified in Rajkot, Gujarat.",
  metadataBase: new URL(COMPANY.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/teckon.ico", sizes: "any" },
    ],
    apple: "/teckon.png",
  },
  keywords: [
    "Wholesaler & Suppliers Store for Auto Parts",
    "earthmoving spares of wholesaler",
    "earthmoving spares wholesaler",
    "JCB spares wholesaler",
    "L&T spares wholesaler",
    "JD spares wholesaler",
    "TARAX spares supplier",
    "Terex Tarax parts wholesaler",
    "CAT earthmoving spares wholesaler",
    "auto parts wholesaler Rajkot",
    "hydraulic parts",
    "hydraulic spares",
    "JCB spares",
    "JCB parts",
    "JCB 3dx spares",
    "JCB 3dx parts",
    "Terex parts",
    "Terex spares",
    "TARAX parts",
    "CAT hydraulics",
    "CAT parts",
    "Tata JD parts",
    "L&T spares",
    "L770 spares",
    "Hitachi excavator parts",
    "heavy machinery spares India",
    "earthmoving equipment parts",
    "hydraulic pump assembly",
    "hydraulic seal kits",
    "control valves",
    "hydraulic cylinder repair",
    "pins and bushes",
    "breaker tipper spares",
    "Teckon",
    "Teckon®",
    "Teckon Quality Spares",
    "Shreeji Hydraulics",
    "Shreeji Hydraulics Rajkot",
    "Rajkot hydraulics",
    "hydraulic parts manufacturer Gujarat",
    "Alpesh Patel Shreeji Hydraulics",
    "J.C. Patel Shreeji Hydraulics",
    "JCB aftermarket hydraulic gear pump manufacturer",
    "Heavy duty hydraulic gear pump Rajkot",
    "ISO 9001:2015 hydraulic spares manufacturer Gujarat",
    "Premium replacement parts for JCB backhoe loaders",
    "B2B hydraulic parts exporter India",
    "High durability aftermarket excavator spares",
    "Construction equipment hydraulic spares supplier",
    "aftermarket JCB 3DX hydraulic pump manufacturers in Rajkot",
    "heavy machinery replacement parts supplier Gujarat",
    "construction equipment hydraulic seal kits distributor India",
    "high pressure hydraulic gear pump for JCB excavator",
    "Terex backhoe loader hydraulic cylinder spares replacement",
    "ISO certified earthmover spare parts manufacturer",
    "buy premium B2B hydraulic spares Rajkot",
  ],
  openGraph: {
    title:
      "Teckon® — Wholesaler & Suppliers Store for Auto Parts & Earthmoving Spares",
    description:
      "Wholesaler & suppliers store for heavy machinery auto parts and earthmoving spares. Specializing in JCB, L&T, JD, Terex (TARAX), and CAT replacement parts. ISO 9001:2015 certified in Rajkot, India.",
    url: COMPANY.url,
    siteName: "Teckon® Quality Spares",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${COMPANY.url}/og-image.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Teckon Quality Spares — Wholesaler & Suppliers Store for Auto Parts & Earthmoving Spares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Teckon® — Wholesaler & Suppliers Store for Auto Parts & Earthmoving Spares",
    description:
      "Wholesaler & suppliers store for heavy machinery auto parts and earthmoving spares. Specializing in JCB, L&T, JD, Terex (TARAX), and CAT replacement parts. ISO 9001:2015 certified in Rajkot, India.",
    images: [`${COMPANY.url}/og-image.png`],
  },
};

/**
 * Organization + LocalBusiness JSON-LD schema injected into every page.
 *
 * Using both types lets Google understand the entity as both a brand
 * (Organization) and a physical business (LocalBusiness) eligible for
 * Knowledge Panel and Local Pack features.
 */
const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: COMPANY.name,
  alternateName: COMPANY.brandFull,
  description:
    "ISO 9001:2015 certified manufacturer of premium hydraulic spare parts for JCB, Terex, CAT, and heavy machinery. Established in Rajkot, Gujarat since 2000.",
  foundingDate: String(COMPANY.founded),
  url: COMPANY.url,
  logo: `${COMPANY.url}/teckon.png`,
  image: `${COMPANY.url}/teckon.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phones.main,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "gu"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "36-C, Gondal Rd, UDHYOGNAGAR, Bhakti Nagar",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360002",
    addressCountry: "IN",
  },
  sameAs: [
    COMPANY.social.facebook,
    COMPANY.social.linkedin,
    COMPANY.social.instagram,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${outfit.variable} preloader-active`}
      data-scroll-behavior="smooth"
    >
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />

      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Preloader />

        <Suspense fallback={<div className="h-16 bg-[#0B0F19]" />}>
          <Navbar />
        </Suspense>
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
        <QuickAccessRail />
        <BackToTop />
        <Suspense fallback={null}>
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
