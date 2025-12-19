"use client";

import { ArrowRight, Shield, Home, Eye, Car, Users, Lock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Close Protection",
    description: "Discreet, intelligence-led protection for high-profile individuals. Our operatives blend seamlessly into your lifestyle.",
    icon: <Shield className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", 
    link: "/services/close-protection"
  },
  {
    title: "Residential Security",
    description: "24/7 presence protecting estates and London residences. We combine physical guarding with advanced access control.",
    icon: <Home className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop", 
    link: "/services/residential"
  },
  {
    title: "Surveillance",
    description: "Gathering intelligence and evidence with absolute discretion. Corporate due diligence and private matters handled sensitively.",
    icon: <Eye className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop", 
    link: "/services/investigation"
  },
  {
    title: "Secure Chauffeurs",
    description: "Security trained drivers and armoured vehicles for safe transit across the UK.",
    icon: <Car className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop", 
    link: "/services/chauffeurs"
  },
  {
    title: "Event Security",
    description: "High-profile event management, crowd control, and VIP extraction planning.",
    icon: <Users className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop", 
    link: "/services/events"
  },
  {
    title: "Asset Protection",
    description: "Secure transit and storage for high-value items, fine art, and sensitive documents.",
    icon: <Lock className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop", 
    link: "/services/assets"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Container: Restored padding (px-4) so cards don't touch the edges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <span className="block text-[#881337] font-bold tracking-[0.2em] uppercase text-xs mb-3 md:mb-4">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-none">
            Bespoke Protection.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#881337] mx-auto mt-6 md:mt-8"></div>
        </div>

        {/* The Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link 
              href={service.link}
              key={idx} 
              // Mobile: h-[350px] (Balanced), Rounded Corners (Elegant)
              // Desktop: h-[500px] (Cinematic)
              className="group relative h-[350px] md:h-[500px] overflow-hidden rounded-xl md:rounded-sm cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              
              {/* 1. BACKGROUND IMAGE */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              {/* 2. GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 md:opacity-80 md:group-hover:opacity-90 transition-opacity duration-500" />

              {/* 3. CONTENT */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
                
                {/* Icon Badge */}
                <div className="mb-3 transform translate-y-0 transition-transform duration-500 md:group-hover:-translate-y-2">
                   <div className="inline-flex items-center justify-center p-2.5 md:p-3 bg-[#881337] text-white rounded-sm shadow-lg backdrop-blur-sm">
                     {service.icon}
                   </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-500 md:group-hover:-translate-y-2 shadow-black drop-shadow-lg">
                  {service.title}
                </h3>

                {/* Desktop Description (Hidden on mobile) */}
                <div className="hidden md:block overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6 border-l-2 border-[#881337] pl-4">
                    {service.description}
                  </p>
                </div>
                
                {/* "Explore" Indicator - Refined for mobile */}
                <div className="flex items-center gap-2 mt-1">
                   {/* Mobile Version: Simple text, easy to read */}
                   <span className="md:hidden text-[10px] font-bold uppercase tracking-widest text-white/80 flex items-center gap-2">
                     View Service <ArrowRight className="w-3 h-3 text-[#881337]" />
                   </span>
                   
                   {/* Desktop Version: Hover effect */}
                   <span className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                    Explore Service
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                   </span>
                </div>

              </div>
              
              {/* Decorative Border (Desktop Only) */}
              <div className="absolute inset-4 border border-white/0 md:group-hover:border-white/20 transition-all duration-500 z-10 pointer-events-none"></div>

            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center px-4">
           <Link 
            href="/contact" 
            className="w-full md:w-auto inline-flex items-center justify-center px-12 py-5 bg-[#881337] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#4C0519] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Request Full Service List
          </Link>
        </div>

      </div>
    </section>
  );
}