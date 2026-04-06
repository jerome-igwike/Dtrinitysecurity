"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function FacilityBanner() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-gray-900 border-t border-gray-800 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop"
          alt="Secure Facility Cleaning"
          fill
          className="object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Content */}
        <div className="w-full lg:w-1/2">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-[10px]">
                Specialist Division
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
              Secure Cleaning & <br className="hidden md:block" /> Facility Protocol
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-2 border-[#D4AF37] pl-5 font-light">
              Trusting someone with the cleanliness of your private estate or corporate facility shouldn't mean compromising your security. We provide premium deep cleaning and specialised housekeeping delivered exclusively by rigorously vetted, security-cleared personnel.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
            <Link
              href="/services/facility-management"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#D4AF37] text-gray-900 font-extrabold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl group border border-[#D4AF37] hover:border-white"
            >
              Explore the Division
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
