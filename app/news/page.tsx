"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  const pressReleases = [
    {
      slug: "expansion-middle-east",
      date: "10 DEC 2025",
      category: "Corporate Expansion",
      title: "D Trinity Security Announces Expansion into Middle East Markets",
      excerpt: "Responding to increased demand for close protection services in the UAE and Saudi Arabia, D Trinity confirms the establishment of a dedicated operational hub in Dubai.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea904f18f94?q=80&w=2070&auto=format&fit=crop"
    },
    {
      slug: "strategic-partnership",
      date: "22 NOV 2025",
      category: "Strategic Partnership",
      title: "Partnership Secured with 'IronFence' Cyber Defense Systems",
      excerpt: "Physical security is no longer enough. D Trinity integrates military-grade cyber protection into all Family Office contracts through a new strategic alliance.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      slug: "ceo-commentary",
      date: "05 NOV 2025",
      category: "Media Commentary",
      title: "CEO Tobenna Arthur Speaks on London's Rising Watch Theft Crime Wave",
      excerpt: "In an interview with The Times, our CEO discusses the tactics used by organized gangs in Mayfair and how Ultra-High-Net-Worth individuals can mitigate the risk.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      slug: "iso-certification",
      date: "15 OCT 2025",
      category: "Company Milestone",
      title: "D Trinity Achieves ISO 9001 and ISO 14001 Certification",
      excerpt: "The firm reinforces its commitment to operational excellence and environmental responsibility, setting a new standard for boutique security providers.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-6 backdrop-blur-md animate-fade-in">
             <Newspaper className="w-3 h-3 text-[#881337]" />
             <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                Corporate Communications
             </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 animate-fade-in-up">
            Press & Media.
          </h1>
          <p className="text-gray-400 font-light max-w-xl mx-auto animate-fade-in-up delay-100">
            Official announcements, press releases, and media resources.
          </p>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

          {/* LEFT: NEWS FEED */}
          <div className="lg:w-2/3 space-y-12">
             <h2 className="font-bold text-gray-900 uppercase tracking-widest text-xs border-b border-gray-100 pb-4 mb-8">
                Latest Releases
             </h2>

             {pressReleases.map((news, i) => (
                <Link href={`/news/${news.slug}`} key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer hover:bg-gray-50 transition-colors p-4 -mx-4 rounded-sm">
                   {/* Thumbnail */}
                   <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden bg-gray-100">
                      <Image 
                        src={news.image} 
                        alt={news.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                   </div>
                   
                   {/* Text */}
                   <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="text-[#881337] text-[10px] font-bold uppercase tracking-widest">{news.category}</span>
                         <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                         <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{news.date}</span>
                      </div>
                      <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-[#881337] transition-colors leading-tight">
                         {news.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                         {news.excerpt}
                      </p>
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors mt-auto">
                         Read Release <ArrowUpRight className="w-3 h-3 ml-1" />
                      </div>
                   </div>
                </Link>
             ))}

          </div>

          {/* RIGHT: MEDIA KIT & CONTACT */}
          <div className="lg:w-1/3 space-y-8">
             
             {/* Contact Card */}
             <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="font-serif text-xl text-gray-900 mb-6">Media Contact</h3>
                <p className="text-sm text-gray-500 mb-6">
                   For press inquiries, interview requests, or official commentary, please contact our press office.
                </p>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-[#881337]" />
                      <a href="mailto:press@dtrinitysecurity.co" className="hover:text-black transition-colors">press@dtrinitysecurity.co</a>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-[#881337]" />
                      <span>+44 (0) 20 7000 0000</span>
                   </div>
                </div>
             </div>

             {/* Download Kit */}
             <div className="bg-[#0a0a0a] text-white p-8">
                <h3 className="font-serif text-xl mb-4">Brand Assets</h3>
                <p className="text-sm text-gray-400 mb-6">
                   Download our official media kit, including high-res logos, director bios, and brand guidelines.
                </p>
                <button className="flex items-center justify-between w-full bg-white text-[#0a0a0a] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors">
                   Download Media Kit
                   <Download className="w-4 h-4" />
                </button>
             </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}