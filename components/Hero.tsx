"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* 1. IMAGE LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-breathe" // <--- Added animate-breathe here
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
        
        {/* Badge - Hardcoded Burgundy */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 shadow-2xl md:hidden">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#881337] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#881337]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-200 uppercase">
            Operations: London • York
          </span>
        </div>

        {/* Headline - Strong & Simple */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl text-white">
          Elite Protection. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
            Absolute Discretion.
          </span>
        </h1>

        {/* Divider - Hardcoded Burgundy */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="w-20 h-[2px] bg-[#881337] shadow-[0_0_15px_#881337]"></div>
          <p className="max-w-xs sm:max-w-3xl mx-auto text-base sm:text-xl text-gray-300 font-light leading-relaxed px-2">
            Bespoke security ecosystems for those who cannot afford to leave safety to chance. <br className="hidden md:block" />
            <span className="text-white font-medium">SIA Licensed Veterans. Intelligence-Led Operations.</span>
          </p>
        </div>

        {/* Buttons - Hardcoded Burgundy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full px-4 sm:px-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-[#881337] text-white font-bold text-xs tracking-[0.15em] uppercase rounded-lg hover:bg-[#4C0519] transition-all shadow-lg hover:shadow-[#881337]/50 flex items-center justify-center gap-3 group"
          >
            Start Consultation
            <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="tel:02036484525"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-lg hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-4 h-4" />
            020 3648 4525
          </a>
        </div>
      </div>
    </section>
  );
}