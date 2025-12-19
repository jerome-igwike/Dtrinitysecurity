"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Star, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsPage() {
  const reviews = [
    {
      role: "Principal, Family Office",
      location: "Kensington, London",
      text: "D Trinity transformed our daily operations. The team was invisible yet omnipresent. For the first time in years, my family felt truly at ease.",
      tag: "Residential Security"
    },
    {
      role: "Diplomatic Envoy",
      location: "G7 Summit Delegation",
      text: "The level of planning and route reconnaissance provided by the Chauffeur unit was military-grade. Flawless execution under high-pressure timelines.",
      tag: "Secure Transport"
    },
    {
      role: "UHNW Individual",
      location: "Monaco / London",
      text: "I have used close protection teams for twenty years. D Trinity is the first firm that understands the balance between safety and lifestyle. They are gentlemen first, operators second.",
      tag: "Close Protection"
    },
    {
      role: "Corporate CEO",
      location: "FTSE 100 Company",
      text: "We faced a credible insider threat. The investigation team handled the evidence gathering with absolute discretion. The issue was resolved without a single leak to the press.",
      tag: "Private Investigation"
    },
    {
      role: "Event Director",
      location: "Private Charity Gala",
      text: "Managing security for 300 VIPs is a nightmare. D Trinity made it look easy. Their vetting process for guests was rigorous but polite. The gold standard.",
      tag: "Event Security"
    },
    {
      role: "Asset Manager",
      location: "Mayfair",
      text: "Responsive. Intelligent. Lethal when necessary, but diplomatic always. They are the only number I have saved for emergencies.",
      tag: "Asset Protection"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-40">
           {/* Abstract Background */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-6 backdrop-blur-md animate-fade-in">
             <Star className="w-3 h-3 text-[#881337] fill-[#881337]" />
             <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                Client Confidentiality Guaranteed
             </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 animate-fade-in-up">
            Verified Intelligence.
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Our clients value discretion above all else. <br className="hidden md:block"/>
            Below are redacted statements from our operational logs.
          </p>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
               {/* Decorative Quote Icon */}
               <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100 group-hover:text-gray-50 transition-colors" />
               
               <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(star => (
                           <Star key={star} className="w-3 h-3 text-[#881337] fill-[#881337]" />
                        ))}
                     </div>
                     <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Verified</span>
                  </div>

                  <p className="text-gray-600 italic leading-relaxed mb-8 font-serif text-lg">
                     "{review.text}"
                  </p>

                  <div className="pt-6 border-t border-gray-100">
                     <p className="text-sm font-bold text-gray-900">{review.role}</p>
                     <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{review.location}</p>
                     <div className="mt-4 inline-block px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest rounded-sm">
                        {review.tag}
                     </div>
                  </div>
               </div>
            </div>
          ))}

        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="bg-[#881337] text-white py-16">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-white/80" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Privacy is our Policy.</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
               We never disclose client identities, locations, or operational details without express written consent. Your business stays yours.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-[#881337] font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300">
               Secure Your Consultation
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}