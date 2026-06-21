"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Construction, Jaipur",
    quote: "Teckon has been our go-to supplier for JCB hydraulic spares for over 5 years. The quality is consistently excellent and delivery is always on time. Our fleet downtime has reduced by 30%.",
    rating: 5,
  },
  {
    name: "Manish Desai",
    company: "Desai Earthmovers, Pune",
    quote: "When our Terex loader's hydraulic cylinder failed on-site, Teckon had the exact replacement part delivered within 24 hours. Outstanding service and genuine quality parts.",
    rating: 5,
  },
  {
    name: "Suresh Agarwal",
    company: "Agarwal Infrastructure, Indore",
    quote: "We've been sourcing CAT 424 hydraulic components from Teckon for 3 years. Their pricing is competitive and the parts match OEM specifications perfectly. Highly recommended.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Singh Mining & Earthmovers, Udaipur",
    quote: "The Hitachi EX200 hydraulic pump spares we bought from Teckon have outperformed any other aftermarket spares we tried. Pressure stands solid at 350 bar under heavy load.",
    rating: 5,
  },
  {
    name: "Aniket Shinde",
    company: "Shinde Excavations, Nashik",
    quote: "Incredibly durable hydraulic seals and cylinder kits for our JCB 3CX fleet. We've experienced zero oil leakage since switching to Teckon's parts. Extremely satisfied!",
    rating: 5,
  },
  {
    name: "Devendra Rathore",
    company: "Rathore Roadworks, Indore",
    quote: "Their final drive motors and swing motor parts for Hitachi Zaxis-120 excavators are top-tier. Sourced multiple parts and all fit perfectly. Pricing is very competitive.",
    rating: 5,
  },
];

const gradients = [
  "from-[#FF6B35] to-[#FFBE00]",
  "from-[#1E293B] to-[#0B0F19]",
  "from-[#3B82F6] to-[#1D4ED8]",
  "from-[#10B981] to-[#047857]",
  "from-[#8B5CF6] to-[#6D28D9]",
  "from-[#EC4899] to-[#BE185D]"
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C2410C] font-semibold text-sm uppercase tracking-widest mb-3 block">Client Feedback</span>
          <h2 className="text-4xl font-black text-[#111111] mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read stories from contractors and fleet operators across India who trust Teckon for their heavy machinery hydraulic spares.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((t, i) => {
              const initials = t.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              const gradient = gradients[i % gradients.length];

              return (
                <SwiperSlide key={t.name} className="h-auto pb-12">
                  <div className="group bg-slate-50 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full min-h-[280px]">
                    {/* Card Accent Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFBE00] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                    <div>
                      {/* Header with Avatar and Reviewer Info */}
                      <div className="flex items-center gap-4 mb-5">
                        {/* Initial Avatar */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-black text-sm shadow-md shrink-0 select-none`}>
                          {initials}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-[#0B0F19] text-base leading-snug group-hover:text-[#FF6B35] transition-colors">{t.name}</h3>
                          <span className="text-gray-600 text-xs font-semibold block mt-0.5">{t.company}</span>
                        </div>
                      </div>

                      {/* Star Rating - prominent position */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={15} className="text-[#FFBE00] fill-[#FFBE00]" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-600 text-sm leading-relaxed italic relative z-10">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Decorative large quote mark */}
                    <div className="absolute bottom-2 right-6 text-slate-200 pointer-events-none font-serif text-8xl select-none leading-none opacity-45 group-hover:text-[#FF6B35]/10 group-hover:opacity-60 transition-all duration-300">
                      ”
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
