import type { Metadata } from "next";

export const unstable_instant = false;

import { Suspense } from "react";

import ProductsClient from "@/components/products/ProductsClient";

export const metadata: Metadata = {
  title: "Genuine Hydraulic Spares Catalog | Teckon™ Quality Spares",
  description:
    "Browse our premium catalog of replacement hydraulic spare parts for JCB, Terex, CAT, L770, Tata JD, and excavators. High pressure pumps, seals, valves, and components.",
  keywords: [
    "JCB spares catalog",
    "Terex parts list",
    "CAT hydraulic components",
    "hydraulic gear pump catalog",
    "excavator seal kits",
    "tipper breaker spares",
    "heavy machinery spares Rajkot",
    "Teckon product catalog",
    "buy hydraulic parts online India",
  ],
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#FFBE00] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
