import { Outfit } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopInfoBar from "@/components/layout/TopInfoBar";
import QuickAccessRail from "@/components/layout/QuickAccessRail";
import BackToTop from "@/components/ui/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Teckon™ Quality Spares | Premium Hydraulic Parts & Equipment",
    template: "%s | Teckon™ Quality Spares",
  },
  description:
    "Shreeji Hydraulics (Teckon™) — Premium hydraulic parts & spares for JCB, Terex, CAT, Tata, and all heavy machinery. ISO 9001:2015 certified. Based in Rajkot, Gujarat.",
  metadataBase: new URL("https://teckon.in"),
  alternates: {
    canonical: "/",
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
    title: "Teckon™ Quality Spares | Premium Hydraulic Parts & Equipment",
    description: "Shreeji Hydraulics (Teckon™) — Premium hydraulic parts & spares for JCB, Terex, CAT, Tata, and all heavy machinery. ISO 9001:2015 certified. Based in Rajkot, Gujarat.",
    url: "https://teckon.in",
    siteName: "Teckon™ Quality Spares",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teckon™ Quality Spares | Premium Hydraulic Parts & Equipment",
    description: "Shreeji Hydraulics (Teckon™) — Premium hydraulic spares for JCB, Terex, CAT, and all heavy machinery.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable} data-scroll-behavior="smooth">
      <body className="font-sans bg-white text-gray-900 antialiased">
        {/* <TopInfoBar /> */}
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
        <QuickAccessRail />
        <BackToTop />
      </body>
    </html>
  );
}
