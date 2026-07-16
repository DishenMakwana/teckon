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
    default: "Teckon™ Quality Spares | Premium Hydraulic Parts",
    template: "%s | Teckon™ Quality Spares",
  },
  description:
    "Shreeji Hydraulics (Teckon™) offers premium hydraulic parts & spares for JCB, Terex, CAT, and heavy machinery. ISO 9001:2015 certified in Rajkot, Gujarat.",
  metadataBase: new URL("https://teckon.vercel.app"),
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
    "hydraulic parts",
    "hydraulic spares",
    "JCB spares",
    "JCB parts",
    "JCB 3dx spares",
    "JCB 3dx parts",
    "Terex parts",
    "Terex spares",
    "CAT hydraulics",
    "CAT parts",
    "Tata JD parts",
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
    "Teckon™",
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
    title: "Teckon™ Quality Spares | Premium Hydraulic Parts",
    description:
      "Shreeji Hydraulics (Teckon™) offers premium hydraulic parts & spares for JCB, Terex, CAT, and heavy machinery. ISO 9001:2015 certified in Rajkot, Gujarat.",
    url: "https://teckon.vercel.app",
    siteName: "Teckon™ Quality Spares",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/teckon.png",
        width: 512,
        height: 512,
        alt: "Teckon Quality Spares Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teckon™ Quality Spares | Premium Hydraulic Parts",
    description:
      "Shreeji Hydraulics (Teckon™) offers premium hydraulic parts & spares for JCB, Terex, CAT, and heavy machinery.",
    images: ["/teckon.png"],
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
    streetAddress: "36-C Bhaktinagar, Udhyognagar, Gondal Road",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360004",
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
