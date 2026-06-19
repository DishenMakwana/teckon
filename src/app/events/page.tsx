import type { Metadata } from 'next';
import Image from 'next/image';
import BreadcrumbBar from '@/components/ui/BreadcrumbBar';
import { EVENTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Events & Exhibitions | Teckon Quality Spares',
  description:
    "Teckon's presence at major construction equipment trade shows and exhibitions across India.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teckon-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/events-tradeshow.png"
            alt="Industrial heavy machinery trade show showcasing hydraulic components"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbBar items={[{ label: 'Events' }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-6 mb-4">
            Events & Exhibitions
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Our team visits and explores key automotive component and construction equipment expos
            to stay updated on the latest hydraulic engineering advancements and build industry partnerships.
          </p>
        </div>
      </section>

      {/* Events Banner Image */}
      {/* <section className="relative h-64 overflow-hidden">
        <Image src="/images/events-tradeshow.png" alt="Trade show exhibition" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0F19]/60 flex items-center justify-center">
          <p className="text-white text-xl font-semibold">Building partnerships at industry events across India</p>
        </div>
      </section> */}

      {/* Events Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-widest mb-3 block">
              Presence
            </span>
            <h2 className="text-4xl font-black text-[#111111]">
              Our Expo Journey
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-teckon-blue/20 hidden md:block" />
            <div className="flex flex-col gap-8">
              {EVENTS.map((event, i) => (
                <div
                  key={event.name}
                  className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="md:w-5/12">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {event.type === 'upcoming' && (
                        <span className="inline-block bg-[#FFBE00] text-[#0B0F19] text-xs font-bold px-3 py-1 rounded-full mb-3">
                          Upcoming
                        </span>
                      )}
                      <h3 className="text-xl font-black text-teckon-blue mb-1">
                        {event.name}
                      </h3>
                      <div className="text-[#FF6B35] font-semibold text-sm mb-2">
                        {event.location}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className="md:w-2/12 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-teckon-blue text-white flex items-center justify-center font-black text-lg shadow-lg">
                      {event.year}
                    </div>
                  </div>

                  {/* Image placeholder */}
                  <div className="md:w-5/12 w-full">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-200">
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover opacity-80"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-teckon-blue/40 flex items-end p-3">
                        <span className="text-white text-xs font-semibold">
                          {event.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFBE00] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0B0F19] mb-4">
            Connect with Our Team
          </h2>
          <p className="text-[#0B0F19]/70 mb-8">
            Planning to attend an upcoming industry expo? Contact us to schedule a meeting
            or arrange a visit to our Rajkot manufacturing facility.
          </p>
          <a
            href="mailto:shreejihyd4008@gmail.com"
            className="inline-block bg-[#111111] text-white font-bold px-8 py-4 rounded-xl hover:bg-teckon-blue transition-colors">
            Schedule a Meeting →
          </a>
        </div>
      </section>
    </>
  );
}
