import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ProductsClient = dynamic(() => import("./ProductsClient"), { ssr: true });

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
  return <ProductsClient />;
}
