"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: The Text Pitch */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="text-[#881337] font-bold tracking-widest uppercase text-xs mb-2 block">
                Who We Are
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 font-bold leading-tight">
                Not Just Guards. <br />
                <span className="italic text-gray-500">Guardians.</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              D Trinity operates at the intersection of military precision and corporate diplomacy. We do not provide "generic" security; we engineer bespoke protection ecosystems. 
              <br /><br />
              From high-net-worth individuals in Mayfair to visiting dignitaries in York, our operatives are selected for their ability to blend in, not stand out.
            </p>

            {/* The "Why Us" List */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              {[
                "Former Military & Specialist Police Surveillance",
                "Intelligence-Led Risk Assessment",
                "Discreet Residential & Asset Protection"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#881337]" />
                  <span className="text-gray-800 font-medium text-sm tracking-wide uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <div className="inline-block border-l-4 border-[#881337] pl-6">
                <p className="text-gray-900 font-serif italic text-xl">
                  "Safety is not the absence of threat. It is the presence of capability."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: The "Related Image" (High-End Suit/Detail) */}
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl group">
            {/* Direct Link to a "Security Detail/Suit" Image */}
            <img 
              src="https://images.unsplash.com/photo-1551855350-c86caeaf8707?q=80&w=2070&auto=format&fit=crop" 
              alt="Close Protection Detail"
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            
            {/* Decorative Border Box */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
            
            {/* Bottom Overlay Label */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-serif text-2xl">Precision. Integrity. Vigilance.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}