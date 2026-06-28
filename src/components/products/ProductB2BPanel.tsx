"use client";

import { useState } from "react";
import { Check, Truck, Send, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductB2BPanelProps {
  product: {
    slug: string;
    name: string;
    model: string;
    ref: string;
    category: string;
    specs: Record<string, string | undefined>;
    weight?: string;
    material?: string;
    isoCertified?: boolean;
    crossReferences?: string[];
    stockStatus?: string;
  };
}

export default function ProductB2BPanel({ product }: ProductB2BPanelProps) {
  // RFQ Form states
  const [qty, setQty] = useState<number>(5);
  const [rfqSubmitted, setRfqSubmitted] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !contactInfo) return;

    const productUrl =
      typeof window !== "undefined"
        ? window.location.href
        : `https://teckon.vercel.app/products/${product.slug}`;
    const message = `Hello Teckon, I want to request a bulk pricing quote:\n- *Name*: ${fullName}\n- *Contact*: ${contactInfo}\n- *Product*: ${product.name}\n- *Model*: ${product.model}\n- *OEM Ref*: ${product.ref}\n- *Quantity*: ${qty} units\n- *URL*: ${productUrl}`;
    const whatsappUrl = `https://wa.me/919426915578?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setRfqSubmitted(true);
    setTimeout(() => {
      setRfqSubmitted(false);
      setFullName("");
      setContactInfo("");
      setQty(5);
    }, 4000);
  };

  return (
    <div className="flex flex-col space-y-6 mt-10">
      {/* 1. Fitment Checker & Live Shipping Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col justify-start space-y-4">
        <div>
          <h4 className="text-teckon-dark-blue font-black text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
            <Truck className="h-4.5 w-4.5 text-[#FFBE00]" />
            Shipping &amp; Logistics
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Fast dispatch and reliable transport options to your project site or
            workshop.
          </p>
        </div>

        {/* Delivery Timeline Estimator Table */}
        <div className="space-y-1.5 pt-4 border-t border-gray-100 w-full">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
            Estimated Delivery Times
          </span>
          <div className="border border-gray-100 rounded-xl overflow-hidden text-[10px] w-full">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 font-black text-slate-500 py-1.5 px-3">
              <div>Region</div>
              <div className="text-center">Single Part</div>
              <div className="text-center">Bulk Order</div>
            </div>
            <div className="grid grid-cols-3 py-2 px-3 border-b border-gray-50 text-gray-700 font-bold">
              <div>Gujarat</div>
              <div className="text-center text-emerald-600">1–2 Days</div>
              <div className="text-center text-slate-600">2–4 Days</div>
            </div>
            <div className="grid grid-cols-3 py-2 px-3 text-gray-700 font-bold">
              <div>Rest of India</div>
              <div className="text-center text-slate-600">2–4 Days</div>
              <div className="text-center text-slate-600">4–6 Days</div>
            </div>
          </div>

          <div className="flex items-start gap-1.5 bg-amber-50 border border-amber-200/60 rounded-lg px-3 py-2 mt-1">
            <Info size={12} className="text-amber-500 mt-0.5 shrink-0" />
            <span className="text-[10px] text-amber-700/80 leading-relaxed">
              Delivery timelines may be extended during Gujarat public holidays
              as transport and logistics services remain closed.
            </span>
          </div>
        </div>
      </div>

      {/* 2. Bulk Order Wholesale RFQ Panel */}
      <div className="bg-[#0B0F19] rounded-3xl p-6 md:p-8 border border-white/5 shadow-xl relative overflow-hidden text-slate-300">
        {/* Glow circles */}
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#FFBE00]/5 rounded-full filter blur-2xl pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF6B35]/5 rounded-full filter blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 text-center lg:text-left space-y-2">
            <span className="text-[#FFBE00] font-mono text-[9px] uppercase tracking-widest font-black flex items-center justify-center lg:justify-start gap-1">
              💼 Wholesale Sourcing
            </span>
            <h4 className="text-white font-black text-xl leading-tight">
              Request Bulk Pricing Quote
            </h4>
            <p className="text-slate-400 text-xs max-w-sm mx-auto lg:mx-0">
              Submit your project demands below. Our sales coordinators will
              provide a custom quotation with shipping rates inside 2 hours.
            </p>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!rfqSubmitted ? (
                <motion.form
                  key="rfq-form"
                  onSubmit={handleRfqSubmit}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#FFBE00] focus:border-[#FFBE00]"
                    />
                    <input
                      type="text"
                      placeholder="Phone or Email"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#FFBE00] focus:border-[#FFBE00]"
                    />
                  </div>

                  <div className="flex gap-3 items-center">
                    {/* Qty Counter */}
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-xl shrink-0">
                      <button
                        type="button"
                        onClick={() => setQty((prev) => Math.max(5, prev - 1))}
                        className="px-3 py-2 text-white hover:text-[#FFBE00] text-xs font-black disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={qty <= 5}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-black text-white">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty((prev) => prev + 1)}
                        className="px-3 py-2 text-white hover:text-[#FFBE00] text-xs font-black"
                      >
                        +
                      </button>
                    </div>

                    {/* Pre-filled Message display */}
                    <div className="text-[10px] text-slate-400 font-mono flex-grow truncate px-2 select-none">
                      Bulk order: {product.name} ({product.model})
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-black py-3 rounded-xl transition-colors text-xs uppercase tracking-wide cursor-pointer shadow-md"
                  >
                    <Send size={12} />
                    <span>Submit Quote Request</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="rfq-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/5 border border-[#FFBE00]/30 rounded-2xl p-6 text-center space-y-3 shadow-inner"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFBE00]/20 flex items-center justify-center mx-auto">
                    <Check size={20} className="text-[#FFBE00]" />
                  </div>
                  <div>
                    <h5 className="text-white font-black text-sm">
                      Quote Request Received!
                    </h5>
                    <p className="text-slate-400 text-[10px] mt-1 leading-relaxed">
                      Thank you, {fullName}. We have pre-filled the request for{" "}
                      {qty}x {product.name} ({product.model}). A pricing sheet
                      will be sent to {contactInfo} shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
