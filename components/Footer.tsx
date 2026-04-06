"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-[#050505] text-white border-t border-white/10 pt-20 pb-10">
         <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

               {/* COLUMN 1: BRAND IDENTITY */}
               <div className="space-y-6">
                  <Link href="/" className="flex items-center gap-3 group">
                     <Image src="/no-bg-logo.png" alt="D TRINITY" width={180} height={50} className="object-contain brightness-0 invert" />
                  </Link>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Providing bespoke security ecosystems for ultra-high-net-worth individuals, family offices, and sovereign entities. Intelligence-led. Absolute discretion.
                  </p>
                  <div className="flex gap-4 pt-4">
                     {/* Social Placeholders - Update hrefs when you have the accounts */}
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                        <Twitter className="w-4 h-4 text-white" />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                        <Instagram className="w-4 h-4 text-white" />
                     </a>
                  </div>
               </div>

               {/* COLUMN 2: OPERATIONS (Services) */}
               <div>
                  <h4 className="font-serif text-lg text-white mb-6">Operations</h4>
                  <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                     <li><Link href="/services/close-protection" className="hover:text-[#D4AF37] transition-colors">Close Protection</Link></li>
                     <li><Link href="/services/residential" className="hover:text-[#D4AF37] transition-colors">Residential Security</Link></li>
                     <li><Link href="/services/family-office" className="hover:text-[#D4AF37] transition-colors">Family Office</Link></li>
                     <li><Link href="/services/investigation" className="hover:text-[#D4AF37] transition-colors">Private Investigation</Link></li>
                     <li><Link href="/services/surveillance" className="hover:text-[#D4AF37] transition-colors">Surveillance</Link></li>
                     <li><Link href="/services/facility-management" className="hover:text-[#D4AF37] transition-colors">Secure Cleaning & Facilities</Link></li>
                     <li><Link href="/recruitment" className="hover:text-white transition-colors text-[#D4AF37]">Operative Recruitment</Link></li>
                  </ul>
               </div>

               {/* COLUMN 3: INTELLIGENCE (Company) */}
               <div>
                  <h4 className="font-serif text-lg text-white mb-6">Intelligence</h4>
                  <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                     <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">The Firm (About)</Link></li>
                     <li><Link href="/articles" className="hover:text-[#D4AF37] transition-colors">Security Briefings</Link></li>
                     <li><Link href="/news" className="hover:text-[#D4AF37] transition-colors">Press & Media</Link></li>
                     <li><Link href="/testimonials" className="hover:text-[#D4AF37] transition-colors">Client Verification</Link></li>
                     <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Secure Contact</Link></li>
                  </ul>
               </div>

               {/* COLUMN 4: SECURE CHANNEL */}
               <div>
                  <h4 className="font-serif text-lg text-white mb-6">Secure Channel</h4>
                  <ul className="space-y-6 text-sm text-gray-400">
                     <li className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                        <span>
                           Block B 35 Halley Garden,<br />
                           London SE13 5PA<br />
                           <br />
                           205 Mizzen Mast,<br />
                           London SE18 5NP
                        </span>
                     </li>
                     <li className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span>+44 (0) 20 3648 4525</span>
                     </li>
                     <li className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <a href="mailto:bookings@dtrinitysecurity.co" className="hover:text-white transition-colors">
                           bookings@dtrinitysecurity.co
                        </a>
                     </li>
                  </ul>
               </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                  &copy; {new Date().getFullYear()} D Trinity Security Ltd. All Rights Reserved.
               </p>

               <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  {/* NOTE: These link to contact for now to prevent 404s until we build legal pages */}
                  <Link href="/contact" className="hover:text-white transition-colors">Privacy Protocol</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Terms of Engagement</Link>
               </div>

               <p className="text-[10px] text-gray-700 uppercase tracking-widest">
                  Digital Architecture by <span className="text-gray-500 font-bold">DEVELIX INC.</span>
               </p>
            </div>

         </div>
      </footer>
   );
}