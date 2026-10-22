import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "@/components/products/ProductsClient";
import { getProducts } from "@/lib/db";
import { Product } from "@/types/product";
import { COMPANY } from "@/lib/data";

export const unstable_instant: boolean = false;

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title:
    "Wholesales & Suppliers Store for Auto Parts | Earthmoving Spares Catalog | Teckon®",
  description:
    "Wholesales & suppliers store catalog for auto parts and earthmoving spares. Precision replacement parts for JCB, L&T, JD, Terex (TARAX), CAT, L770, Tata JD, and excavators.",
  keywords: [
    "Wholesales & Suppliers Store for Auto Parts",
    "earthmoving spares of wholesaler",
    "JCB spares wholesaler",
    "L&T spares wholesaler",
    "JD spares wholesaler",
    "TARAX spares supplier",
    "Terex Tarax parts wholesaler",
    "CAT components wholesaler",
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

export default async function ProductsPage(): Promise<React.JSX.Element> {
  const products: Product[] = await getProducts();

  const productsListSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wholesales & Suppliers Store for Auto Parts | Earthmoving Spares Catalog | Teckon®",
    description:
      "Wholesales & suppliers store catalog for auto parts and earthmoving spares. Precision replacement parts for JCB, L&T, JD, Terex (TARAX), CAT, L770, Tata JD, and excavators.",
    url: `${COMPANY.url}/products`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map(
        (p: Product, idx: number): Record<string, unknown> => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${COMPANY.url}/products/${p.slug}`,
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
