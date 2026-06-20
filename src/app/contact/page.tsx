"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // Simulate processing
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/contact-hero.png" alt="A clean modern office workspace with phone, notebook, and heavy machinery blueprint" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Contact Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Contact Us</h1>
          <p className="text-white/70 text-xl max-w-2xl">Get a quick quote or reach out to our technical team.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004",
                href: "https://maps.app.goo.gl/uxAsDhUD7DvfASts8",
              },
              {
                icon: Mail,
                title: "Email",
                content: "shreejihyd4008@gmail.com",
                href: "mailto:shreejihyd4008@gmail.com",
              },
              {
                icon: Phone,
                title: "Call Sales",
                content: "+91-63518 79842",
                href: "tel:+916351879842",
              },
              {
                icon: MessageCircle,
                title: "Alpesh Patel",
                content: "+91-94269 15578",
                href: "https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares",
              },
              {
                icon: MessageCircle,
                title: "J.C. Patel",
                content: "+91-94262 02945",
                href: "https://wa.me/919426202945?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teckon-blue hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-teckon-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFBE00] transition-colors">
                      <Icon size={20} className="text-white group-hover:text-[#0B0F19] transition-colors" />
                    </div>
                    <div className="font-bold text-[#111111] mb-1">{card.title}</div>
                  </div>
                  <div className="text-gray-500 text-sm mt-2">{card.content}</div>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-black text-[#111111] mb-6">Send an Inquiry</h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 font-semibold">
                  ✅ Thank you! Your inquiry has been submitted. We&apos;ll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      {...register("fullName", { required: "Name is required" })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      {...register("phone", { required: "Phone is required" })}
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
                    <input
                      {...register("city")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
                    <input
                      {...register("country")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                      placeholder="India"
                      defaultValue="India"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Product / Subject</label>
                    <select
                      {...register("subject")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all bg-white"
                    >
                      <option value="">Select product type</option>
                      <option>JCB Hydraulic Spares</option>
                      <option>Terex Parts</option>
                      <option>CAT Components</option>
                      <option>Breakers & Tippers</option>
                      <option>L770 / Tata JD Spares</option>
                      <option>Excavator Parts</option>
                      <option>General Hydraulics</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all resize-none"
                    placeholder="Describe the hydraulic parts you need, your equipment model, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6B35] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#e55a25] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[400px] h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.442907409264!2d70.79357007503632!3d22.27978987969395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb00052e5469%3A0xd14f057e5cdfa24e!2sSHREEJI%20HYDRAULICS%20(TECKON)!5e0!3m2!1sen!2sin!4v1718800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teckon™ Shreeji Hydraulics Location — Gondal Road, Rajkot, Gujarat"
                className="w-full h-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
