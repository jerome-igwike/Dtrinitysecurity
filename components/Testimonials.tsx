"use client";

import { Quote, ShieldCheck, Award, Lock, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-t border-white/5 relative">
      
      {/* Background Texture (Subtle Noise) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: THE HEADER (Split Layout) */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#881337]"></span>
              <span className="text-[#881337] font-bold tracking-[0.2em] uppercase text-xs">
                Uncompromising Standards
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-none text-white">
              Reputation is <br />
              <span className="text-gray-500">Everything.</span>
            </h2>
          </div>
          
          {/* Trust Stats - The "Legacy" Metrics */}
          <div className="flex gap-12 text-left animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Client Retention</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">Zero</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Security Breaches</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: THE MASONRY GRID (Structure & Weight) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Large Featured Testimonial (Spans 8 cols) */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 p-10 md:p-14 relative group animate-fade-in-up delay-100">
            <Quote className="w-12 h-12 text-[#881337] mb-8 opacity-80" />
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-gray-200 italic mb-10">
              "The level of discretion and professionalism demonstrated by the D Trinity team is unmatched. They have seamlessly integrated into our family's life, providing absolute peace of mind without ever being intrusive."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#881337] flex items-center justify-center font-serif font-bold text-white">
                H
              </div>
              <div>
                <p className="font-bold text-white tracking-wider uppercase text-sm">Head of Family Office</p>
                <p className="text-gray-500 text-xs tracking-wide uppercase">Kensington • Verified Client</p>
              </div>
            </div>
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#881337]/30 rounded-tr-lg opacity-50"></div>
          </div>

          {/* Stacked Smaller Testimonials (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Card 1 */}
            <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 animate-fade-in-up delay-200 hover:border-white/20 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#881337] fill-[#881337]" />)}
              </div>
              <p className="font-serif text-lg text-gray-300 italic mb-6">
                "Their intelligence-led approach to our merger was evident. An indispensable asset to our executive suite."
              </p>
              <div>
                <p className="font-bold text-white text-xs uppercase">CEO, FTSE 100 Company</p>
                <p className="text-[#881337] text-[10px] uppercase">Corporate Security</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 animate-fade-in-up delay-300 hover:border-white/20 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#881337] fill-[#881337]" />)}
              </div>
              <p className="font-serif text-lg text-gray-300 italic mb-6">
                "I have worked with many CP teams, but D Trinity is in a different league. Sharp, educated, and polite."
              </p>
              <div>
                <p className="font-bold text-white text-xs uppercase">Diplomatic Envoy</p>
                <p className="text-[#881337] text-[10px] uppercase">Close Protection</p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3: THE ACCREDITATIONS BAR (The "Legacy" Strip) */}
        <div className="border-t border-white/10 pt-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in-up delay-500">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden md:block">Accreditations & Standards:</span>
          
          {/* Placeholder Logos - Text for now, replace with Images later */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 group">
                <ShieldCheck className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-bold text-gray-400 text-sm group-hover:text-white">SIA Licensed</span>
            </div>
            <div className="flex items-center gap-2 group">
                <Award className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-bold text-gray-400 text-sm group-hover:text-white">ISO 9001</span>
            </div>
            <div className="flex items-center gap-2 group">
                <Lock className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-bold text-gray-400 text-sm group-hover:text-white">GDPR Compliant</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}