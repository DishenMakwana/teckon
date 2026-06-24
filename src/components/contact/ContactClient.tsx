"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import { sendInquiryAction } from "@/app/actions/contact";

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  city: string;
  country: string;
  subject: string;
  message: string;
}

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      city: "",
      country: "India",
      subject: "",
      message: "",
    }
  });

  const onSubmit = async (data: FormData) => {
    setSubmitted(false);
    setSubmitError(null);
    try {
      // Combine country code and 10-digit phone number for email delivery
      const combinedData = {
        ...data,
        phone: `${data.countryCode} ${data.phone}`,
      };
      const result = await sendInquiryAction(combinedData);
      if (result.success) {
        setSubmitted(true);
        reset({
          fullName: "",
          email: "",
          countryCode: "+91",
          phone: "",
          city: "",
          country: "India",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Map technical/backend errors to user-friendly messages
        if (result.error === "CONFIGURATION_ERROR" || result.error === "DELIVERY_ERROR" || result.error === "SYSTEM_ERROR") {
          setSubmitError("We couldn't process your inquiry at this time due to a temporary system error. Please try again later or contact us directly at shreejihyd4008@gmail.com / +91-63518 79842.");
        } else {
          setSubmitError(result.error || "Failed to send inquiry. Please try again.");
        }
      }
    } catch {
      setSubmitError("An unexpected network error occurred. Please try again later or contact us directly.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section id="contact-hero" className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/contact-hero.webp" alt="A clean modern office workspace with phone, notebook, and heavy machinery blueprint" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: "Contact Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">Contact Us</h1>
          <p className="text-white/70 text-xl max-w-2xl">Get a quick quote or reach out to our technical team.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section id="contact-form" className="py-12 bg-white">
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-black text-[#111111] mb-6">Send an Inquiry</h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 font-semibold">
                  ✅ Thank you! Your inquiry has been submitted. We&apos;ll get back to you shortly.
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-700 font-semibold">
                  ❌ {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      {...register("fullName", { required: "Please enter your full name" })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      {...register("email", { 
                        required: "Please enter your email address", 
                        pattern: { 
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, 
                          message: "Please enter a valid email address (e.g. name@domain.com)" 
                        } 
                      })}
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
                    <div className="flex gap-2">
                      <select
                        {...register("countryCode", {
                          onChange: (e) => {
                            const code = e.target.value;
                            const countryMap: Record<string, string> = {
                              "+91": "India",
                              "+86": "China",
                              "+971": "United Arab Emirates",
                              "+966": "Saudi Arabia",
                              "+44": "United Kingdom",
                              "+1": "United States",
                              "+977": "Nepal",
                              "+880": "Bangladesh",
                            };
                            setValue("country", countryMap[code] || "");
                          }
                        })}
                        className="w-28 shrink-0 border border-gray-200 rounded-xl pl-3 pr-7 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all bg-white font-medium custom-select-sm"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+966">🇸🇦 +966</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+977">🇳🇵 +977</option>
                        <option value="+880">🇧🇩 +880</option>
                      </select>
                      <input
                        {...register("phone", { 
                          required: "Please enter your 10-digit phone number",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone number must be exactly 10 digits"
                          }
                        })}
                        type="tel"
                        maxLength={10}
                        onInput={(e) => {
                          // Allow only numerical values, slice to 10 digits
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").slice(0, 10);
                        }}
                        className="flex-1 min-w-0 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all"
                        placeholder="Enter 10-digit number"
                      />
                    </div>
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
                      className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all bg-white custom-select"
                    >
                      <option value="">Select product type</option>
                      <option>JCB Spares</option>
                      <option>Hitachi Parts</option>
                      <option>Terex Parts</option>
                      <option>CAT Components</option>
                      <option>Breakers & Tippers</option>
                      <option>L770 / Tata JD</option>
                      <option>Excavator Parts</option>
                      <option>Filters & Services</option>
                      <option>General Hydraulics</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea
                    {...register("message", { required: "Please describe your inquiry or parts requirement" })}
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teckon-blue focus:ring-2 focus:ring-teckon-blue/10 transition-all resize-none"
                    placeholder="Describe the hydraulic parts you need, your equipment model, and any specific requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
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
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teckon™ Shreeji Hydraulics Location — Gondal Road, Rajkot, Gujarat"
                className="w-full h-full min-h-[400px] border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
