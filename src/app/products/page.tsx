import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "@/components/products/ProductsClient";
import { PRODUCTS, Product } from "@/lib/data";

export const unstable_instant: boolean = false;

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
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
    "where to buy aftermarket JCB backhoe loader spares",
    "heavy equipment replacement hydraulic pump catalog",
    "excavator hydraulic cylinder seal kits wholesale price",
    "hydraulic spare parts for CAT construction machinery",
    "industrial grade loader pins and bushes online",
    "quality replacement gear pumps for earthmoving machinery",
  ],
};

export default function ProductsPage(): React.JSX.Element {
  const productsListSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Genuine Hydraulic Spares Catalog | Teckon™ Quality Spares",
    description:
      "Browse our premium catalog of replacement hydraulic spare parts for JCB, Terex, CAT, L770, Tata JD, and excavators. High pressure pumps, seals, valves, and components.",
    url: "https://teckon.vercel.app/products",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map(
        (p: Product, idx: number): Record<string, unknown> => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `https://teckon.vercel.app/products/${p.slug}`,
          name: p.name,
        })
      ),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsListSchema) }}
      />
      <Suspense
        fallback={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#FFBE00] border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <ProductsClient />
      </Suspense>
    </>
  );
}
