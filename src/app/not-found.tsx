import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Teckon™ Quality Spares",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-[#FFBE00] text-[#0B0F19] font-black text-8xl w-32 h-32 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
        404
      </div>
      <h1 className="text-4xl font-black text-[#111111] mb-4">Page Not Found</h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL might be incorrect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-teckon-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-[#FFBE00] hover:text-[#0B0F19] transition-colors">
          Go to Homepage
        </Link>
        <Link href="/products" className="bg-gray-100 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
          Browse Products
        </Link>
        <Link href="/contact" className="bg-[#FF6B35] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e55a25] transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
