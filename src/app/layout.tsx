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
    default: "Teckon Quality Spares | Premium Hydraulic Parts & Equipment",
    template: "%s | Teckon Quality Spares",
  },
  description:
    "Shreeji Hydraulics (Teckon) — Premium hydraulic parts & spares for JCB, Terex, CAT, Tata, and all heavy machinery. ISO 9001:2015 certified. Based in Rajkot, Gujarat.",
  keywords: [
    "hydraulic parts",
    "JCB spares",
    "Terex parts",
    "CAT hydraulics",
    "hydraulic spares India",
    "Teckon",
    "Shreeji Hydraulics",
    "Rajkot hydraulics",
  ],
  openGraph: {
    siteName: "Teckon Quality Spares",
    type: "website",
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
        <TopInfoBar />
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
        <QuickAccessRail />
        <BackToTop />
      </body>
    </html>
  );
}
