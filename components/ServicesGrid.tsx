import { ArrowRight, Shield, Home, Eye, Car, Users, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Close Protection",
    description: "Discreet, intelligence-led protection for high-profile individuals. Our operatives blend seamlessly into your lifestyle.",
    icon: <Shield className="w-5 h-5" />,
    image: "https://media.istockphoto.com/id/983223912/photo/bodyguard-standing-at-businessman-car-and-reviewing-territory.webp?a=1&b=1&s=612x612&w=0&k=20&c=e_U_7OgtcHjNofBQ2YI2ysLGMnoJkutGOIdH8G31bYw=",
    link: "/services/close-protection"
  },
  {
    title: "Residential Security",
    description: "24/7 presence protecting estates and London residences. We combine physical guarding with advanced access control.",
    icon: <Home className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    link: "/services/residential"
  },
  {
    title: "Surveillance",
    description: "Gathering intelligence and evidence with absolute discretion. Corporate due diligence and private matters handled sensitively.",
    icon: <Eye className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1684215031346-487c55714771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VydmVsbGlhbmNlfGVufDB8fDB8fHww",
    link: "/services/surveillance"
  },
  {
    title: "Secure Chauffeurs",
    description: "Security trained drivers and armoured vehicles for safe transit across the UK.",
    icon: <Car className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1759910093306-c849f52c03ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJlJTIwY2hhdWZmZXJzfGVufDB8fDB8fHww",
    link: "/services/chauffeurs"
  },
  {
    title: "Event Security",
    description: "High-profile event security management, crowd control, and VIP extraction planning.",
    icon: <Users className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    link: "/services/events"
  },
  {
    title: "Asset Protection",
    description: "Secure transit and storage for high-value items, fine art, and sensitive documents.",
    icon: <Lock className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1635434473843-bac9feff5e8e?q=80&w=2070&auto=format&fit=crop",
    link: "/services/assets"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <FadeIn direction="up" delay={0.2} className="text-center mb-12 md:mb-16">
          <span className="block text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-3 md:mb-4">
            Our Expertise
          </span>
          {/* Changed text back to dark gray for the white background */}
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-none">
            Bespoke Protection.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#D4AF37] mx-auto mt-6 md:mt-8 shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
        </FadeIn>

        {/* The Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={0.2 + (idx * 0.1)}
            >
              <Link
                href={service.link}
                className="group relative h-[350px] md:h-[500px] overflow-hidden rounded-xl md:rounded-sm cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 block border border-transparent hover:border-[#D4AF37]/50"
              >

                {/* 1. BACKGROUND IMAGE (Optimized with Grayscale Reveal) */}
                <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110 z-0 bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    priority={idx < 2}
                  />
                </div>

                {/* 2. GRADIENT OVERLAY (Kept dark to ensure text remains readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-90 md:group-hover:opacity-90 transition-opacity duration-500 z-10" />

                {/* 3. CONTENT */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">

                  {/* Icon Badge */}
                  <div className="mb-3 transform translate-y-0 transition-transform duration-500 md:group-hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center p-2.5 md:p-3 bg-[#D4AF37] text-gray-900 rounded-sm shadow-lg backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-500 md:group-hover:-translate-y-2 drop-shadow-lg">
                    {service.title}
                  </h3>

                  {/* Desktop Description */}
                  <div className="hidden md:block overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 font-light text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">
                      {service.description}
                    </p>
                  </div>

                  {/* "Explore" Indicator */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="md:hidden text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
                      View Service <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    </span>

                    <span className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors">
                      Explore Service
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>

                </div>

              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn direction="up" delay={0.6} className="mt-16 text-center px-4">
          <Link
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center px-12 py-5 bg-[#D4AF37] text-gray-900 font-extrabold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#B5952F] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Request Full Service List
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}