"use client";

import { ShieldCheck, Target, Lock, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
   return (
      <main className="bg-white min-h-screen">

         {/* HERO SECTION */}
         <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
               <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                  alt="Corporate Headquarters Lobby"
                  fill
                  priority
                  className="object-cover w-full h-full"
                  quality={90}
               />
               <div className="absolute inset-0 bg-[#0a0a0a]/80"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl pt-24 md:pt-20 pb-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-6 backdrop-blur-md animate-fade-in">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#881337]" />
                  <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                     Established 2022
                  </span>
               </div>
               <h1 className="font-serif text-4xl md:text-7xl text-white mb-6 animate-fade-in-up leading-tight">
                  The organization.
               </h1>
               <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                  D'Trinity Security was founded on a single principle: <br className="hidden md:block" />
                  <span className="text-white block mt-2 md:inline">True security is felt, not seen.</span>
               </p>
            </div>
         </div>

         {/* NARRATIVE SECTION */}
         <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

               {/* LEFT: The Text (The Pitch) */}
               <div className="lg:w-1/2 space-y-8">
                  <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight">
                     We are not bodyguards. <br />
                     <span className="text-[#881337]">We are risk architects.</span>
                  </h2>
                  <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                     <p>
                        In a volatile world, standard security is reactive. It waits for a threat to appear. D Trinity is proactive. We operate on intelligence, foresight, and meticulous planning.
                     </p>
                     <p>
                        Headquartered in London, our organization recruits exclusively from the top tier of the British security establishment. We do not just &quot;watch the door.&quot; We analyze the environment, vet the staff, secure the digital perimeter, and ensure that our clients can live their lives without interruption or intrusion.
                     </p>
                  </div>

                  {/* THE SIGNATURE - The "Seal of Approval" */}
                  <div className="pt-8 border-t border-gray-100 mt-8">
                     <div className="font-serif italic text-3xl md:text-4xl text-gray-400 opacity-80" style={{ fontFamily: 'Georgia, serif' }}>
                        Arthur Onyedibe
                     </div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-[#881337] mt-2">Chief Security Officer</p>
                  </div>
               </div>

               {/* RIGHT: Abstract Ops Images (No Faces = More Professional) */}
               <div className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4 w-full mt-8 lg:mt-0">
                  <div className="relative h-48 md:h-80 w-full rounded-sm overflow-hidden mt-0 md:mt-12">
                     <Image
                        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
                        alt="CCTV Surveillance"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                     />
                  </div>
                  <div className="relative h-48 md:h-80 w-full rounded-sm overflow-hidden">
                     <Image
                        src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
                        alt="Security Control Center"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                     />
                  </div>
               </div>

            </div>
         </section>

         {/* STATS BAR (Black) */}
         <section className="bg-[#0a0a0a] text-white py-16 md:py-20 border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
               <div className="space-y-2 flex flex-col items-center md:items-start">
                  <h3 className="text-4xl md:text-5xl font-serif text-[#881337]">100%</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">SIA Licensed</p>
               </div>
               <div className="space-y-2 flex flex-col items-center md:items-start">
                  <h3 className="text-4xl md:text-5xl font-serif text-[#881337]">24/7</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Global Response</p>
               </div>
               <div className="space-y-2 flex flex-col items-center md:items-start">
                  <h3 className="text-4xl md:text-5xl font-serif text-[#881337]">BS7858</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Vetting Standard</p>
               </div>
               <div className="space-y-2 flex flex-col items-center md:items-start">
                  <h3 className="text-4xl md:text-5xl font-serif text-[#881337]">Zero</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Breaches</p>
               </div>
            </div>
         </section>

         {/* VALUES GRID */}
         <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-12 md:mb-16">
                  <span className="text-[#881337] font-bold tracking-widest uppercase text-xs">Our Ethos</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-4">The D Trinity Corporate Standard.</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#881337] transition-colors">
                        <Lock className="w-6 h-6 text-gray-900 group-hover:text-white" />
                     </div>
                     <h3 className="font-serif text-xl mb-4">Absolute Discretion</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        GDPR and confidential ethical background in customer centered security services and all information management.
                     </p>
                  </div>

                  <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#881337] transition-colors">
                        <Target className="w-6 h-6 text-gray-900 group-hover:text-white" />
                     </div>
                     <h3 className="font-serif text-xl mb-4">Precision Planning</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        Every movement is mapped. Every route is reconnoitered. We leave nothing to chance.
                     </p>
                  </div>

                  <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#881337] transition-colors">
                        <Award className="w-6 h-6 text-gray-900 group-hover:text-white" />
                     </div>
                     <h3 className="font-serif text-xl mb-4">Elite Personnel</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        We do not employ bouncers. We employ career security professionals with backgrounds in hostile environments.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA SECTION */}
         <section className="relative py-20 px-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Office"
                  fill
                  className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-[#881337]/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-2xl">
               <h2 className="font-serif text-3xl md:text-5xl mb-6">Join The Ranks.</h2>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/recruitment" className="w-full sm:w-auto px-8 py-4 bg-white text-[#881337] font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors">
                     Operative Application
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#881337] transition-colors">
                     Hire Security Team
                  </Link>
               </div>
            </div>
         </section>

      </main>
   );
}