import type { Metadata } from "next";
import Image from "next/image";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { PRODUCTS } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Teckon™ Quality Spares`,
    description: product.description,
    keywords: [
      product.name,
      `${product.name} replacement`,
      `${product.name} spares`,
      product.model,
      product.ref,
      product.categoryLabel,
      "heavy machinery hydraulic parts",
      "aftermarket OEM replacement spares",
    ],
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/products-hero.webp" alt="Warehouse shelves organized with heavy machinery hydraulic spare parts" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">{product.name}</h1>
          <p className="text-white/70 text-xl max-w-2xl">{product.categoryLabel}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <SafeImage src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="eager" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden bg-gray-100">
                  <SafeImage src={product.image} alt={`${product.name} detail`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover opacity-80" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-3xl mb-2">🔩</div>
                    <div className="text-xs">Additional Views</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex gap-3 mb-4 text-xs font-mono text-gray-400">
                <span>Model: {product.model}</span>
                <span>|</span>
                <span>Ref: {product.ref}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{product.description}</p>

              {/* Specs */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-[#111111] mb-4 text-lg">Technical Specifications</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <tr key={key} className="border-b border-gray-200 last:border-0">
                        <td className="py-2.5 font-semibold text-gray-600 pr-4 w-40">{key}</td>
                        <td className="py-2.5 text-gray-800">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?subject=${encodeURIComponent(`Quote Request: ${product.name}`)}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FF6B35] text-white font-bold py-4 rounded-xl hover:bg-[#e55a25] transition-colors text-lg"
                >
                  📋 Request a Quote
                </Link>
                <a
                  href={`https://wa.me/919426915578?text=Hello%20Teckon,%20I%20need%20a%20quote%20for%20${encodeURIComponent(product.name)}%20(${product.model})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#128C7E] text-white font-bold py-4 rounded-xl hover:bg-[#0f766a] transition-colors text-lg"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-16">
            <h2 className="text-2xl font-black text-[#111111] mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                      <SafeImage src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="font-bold text-sm text-[#111111] mb-1">{p.name}</div>
                    <div className="text-xs text-teckon-blue font-medium">{p.model}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
