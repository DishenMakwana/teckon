import "./globals.css";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuickAccessRail from "@/components/layout/QuickAccessRail";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import BackToTop from "@/components/ui/BackToTop";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    icon: "/teckon.ico",
    apple: "/apple-touch-icon.png",
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
  ],
  openGraph: {
    title: "Teckon™ Quality Spares | Premium Hydraulic Parts",
    description:
      "Shreeji Hydraulics (Teckon™) offers premium hydraulic parts & spares for JCB, Terex, CAT, and heavy machinery. ISO 9001:2015 certified in Rajkot, Gujarat.",
    url: "https://teckon.vercel.app",
    siteName: "Teckon™ Quality Spares",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teckon™ Quality Spares | Premium Hydraulic Parts",
    description:
      "Shreeji Hydraulics (Teckon™) offers premium hydraulic parts & spares for JCB, Terex, CAT, and heavy machinery.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shreeji Hydraulics",
  "alternateName": "Teckon™ Quality Spares",
  "url": "https://teckon.vercel.app",
  "logo": "https://teckon.vercel.app/apple-touch-icon.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-63518-79842",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "gu"],
    },
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "36-C Bhaktinagar, Udhyognagar, Gondal Road",
    "addressLocality": "Rajkot",
    "addressRegion": "Gujarat",
    "postalCode": "360004",
    "addressCountry": "IN",
  },
  "sameAs": [
    "https://facebook.com/shreejihydraulics",
    "https://linkedin.com/company/shreeji-hydraulics",
    "https://instagram.com/shreejihydraulics",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased pb-16 md:pb-0">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E2K9Y2K7XG"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E2K9Y2K7XG', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '123456789012345');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* <TopInfoBar /> */}
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
        <QuickAccessRail />
        <MobileStickyBar />
        <BackToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}

