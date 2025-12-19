"use client";

import { ArrowRight, CheckCircle, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function Recruitment() {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-white border-t border-gray-100">
      
      {/* LEFT COLUMN (THE VISUAL)
          - h-[500px]: Forces the image to be visible on mobile.
          - lg:h-auto: Allows it to stretch to match the text on desktop.
      */}
      <div className="relative w-full h-[500px] lg:h-auto lg:w-1/2 bg-gray-900 overflow-hidden group">
        
        {/* THE LOCAL IMAGE
            - src="/recruitment-bg.jpg": Looks for the file in your public folder.
            - grayscale contrast-125: Applies the 'Ops' look automatically.
        */}
        <img 
          src="/recruitment-bg.jpg" 
          alt="Specialist Security Unit"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 grayscale contrast-125 transition-transform duration-[3s] group-hover:scale-105"
        />
        
        {/* CINEMATIC OVERLAYS */}
        {/* 1. Dark Fade from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        {/* 2. Burgundy Tint (Branding) */}
        <div className="absolute inset-0 bg-[#881337]/10 mix-blend-overlay" />

        {/* FLOATING DOSSIER BADGE */}
        <div className="absolute bottom-8 left-8 max-w-xs bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-sm z-20 animate-fade-in-up">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-[#881337] rounded-sm shadow-lg border border-white/10">
               <ShieldAlert className="w-6 h-6 text-white" />
             </div>
             <div>
               <p className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-1">Specialist Division</p>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                 <p className="text-gray-300 text-[10px] uppercase tracking-wide font-medium">Status: Active Recruitment</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (THE BRIEFING)
          - lg:min-h-[700px]: Forces the layout to be tall and majestic on desktop.
      */}
      <div className="w-full lg:w-1/2 lg:min-h-[700px] flex flex-col justify-center px-8 py-20 lg:p-24 bg-white">
        
        <div className="max-w-xl mx-auto lg:mx-0">
          <span className="flex items-center gap-2 text-[#881337] font-bold tracking-[0.2em] uppercase text-xs mb-6">
            <span className="w-8 h-[2px] bg-[#881337]"></span>
            Join The Elite
          </span>
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1]">
            We Don't Hire Guards. <br />
            <span className="text-gray-400">We Select Operators.</span>
          </h2>

          <p className="text-gray-600 text-lg font-light leading-relaxed mb-10 border-l-4 border-[#881337] pl-6">
            D Trinity is not a volume employer. We operate a stringent selection process, seeking individuals with exemplary service records in the British Military, Police, or Specialist Intelligence Services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-14">
            {[
              "Ex-Military / Police Background",
              "SIA Close Protection License",
              "Full UK Driving License",
              "Advanced Medical (FREC3+)"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group cursor-default">
                <CheckCircle className="w-5 h-5 text-[#881337]/50 group-hover:text-[#881337] transition-colors" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest group-hover:text-black transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link 
            href="/recruitment"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#881337] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto"
          >
            Commence Vetting
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="mt-8 text-[10px] text-gray-400 italic uppercase tracking-wider text-center md:text-left">
            *Applications are processed via secure server only.
          </p>
        </div>
      </div>
    </section>
  );
}