"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Printer, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// 1. PRESS RELEASE DATABASE
const newsData: Record<string, {
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  content: React.ReactNode;
}> = {
  "expansion-middle-east": {
    title: "D Trinity Security Announces Expansion into Middle East Markets",
    category: "Corporate Expansion",
    date: "10 DEC 2025",
    location: "DUBAI, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea904f18f94?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="font-bold text-gray-900 mb-6">FOR IMMEDIATE RELEASE</p>
        <p className="mb-6">
          <strong>DUBAI, UAE</strong> — D Trinity Security, the London-based boutique security firm, today announced the official opening of its new operational hub in Dubai. This strategic move is a direct response to the increasing demand for specialized close protection and asset management services from Ultra-High-Net-Worth (UHNW) clients in the region.
        </p>
        <p className="mb-6">
          The new hub will serve as a gateway for operations across the Gulf Cooperation Council (GCC) countries, providing seamless security continuity for clients travelling between London and the Middle East.
        </p>
        <blockquote className="border-l-4 border-[#881337] pl-6 my-8 italic text-gray-700 font-serif text-lg">
          "The security landscape in the Middle East is evolving. Our clients require more than just manpower; they require intelligence-led risk management that operates across borders. Dubai is the natural next step for D Trinity."
          <footer className="text-sm font-bold text-gray-900 mt-2 not-italic">— Tobenna Arthur, CEO</footer>
        </blockquote>
        <p>
          The expansion also includes partnerships with local luxury concierge services, ensuring that D Trinity can offer a holistic lifestyle management package that includes secure transport, residential security, and event protection.
        </p>
      </>
    )
  },
  "strategic-partnership": {
    title: "Partnership Secured with 'IronFence' Cyber Defense Systems",
    category: "Strategic Partnership",
    date: "22 NOV 2025",
    location: "LONDON, UK",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="font-bold text-gray-900 mb-6">FOR IMMEDIATE RELEASE</p>
        <p className="mb-6">
          <strong>LONDON, UK</strong> — Recognizing the convergence of physical and digital threats, D Trinity Security has entered into a strategic alliance with IronFence Cyber Defense, a leader in digital perimeter security.
        </p>
        <p className="mb-6">
          This partnership integrates military-grade cyber protection into all D Trinity Family Office contracts. Clients will now benefit from 24/7 dark web monitoring, device encryption, and digital footprint scrubbing alongside their physical protection teams.
        </p>
      </>
    )
  },
  "ceo-commentary": {
    title: "CEO Tobenna Arthur Speaks on London's Rising Watch Theft Crime Wave",
    category: "Media Commentary",
    date: "05 NOV 2025",
    location: "LONDON, UK",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">
          In a recent interview with <em>The Times</em>, D Trinity CEO Tobenna Arthur discussed the sharp rise in violent watch thefts across Mayfair and Chelsea. He highlighted the sophisticated spotting techniques used by organized gangs and offered advice to UHNW individuals.
        </p>
        <p className="mb-6">
          "The attackers are often aware of the watch's value before the victim even leaves the restaurant," Arthur noted. "We advise clients to utilize secure transport for door-to-door movements and to avoid displaying high-value assets in unsecured public spaces."
        </p>
      </>
    )
  },
  "iso-certification": {
    title: "D Trinity Achieves ISO 9001 and ISO 14001 Certification",
    category: "Company Milestone",
    date: "15 OCT 2025",
    location: "LONDON, UK",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="font-bold text-gray-900 mb-6">FOR IMMEDIATE RELEASE</p>
        <p className="mb-6">
          <strong>LONDON, UK</strong> — D Trinity Security is proud to announce it has been awarded ISO 9001 (Quality Management) and ISO 14001 (Environmental Management) certifications. This milestone underscores the firm's commitment to operational excellence.
        </p>
        <p className="mb-6">
          "This is not just a badge," said Jerome Igwike, Director of Operations. "It is proof that our internal processes meet the highest international standards, giving our corporate clients total peace of mind."
        </p>
      </>
    )
  }
};

export default function PressReleasePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = newsData[slug];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center bg-white flex flex-col items-center justify-center">
        <Navbar />
         <h1 className="text-2xl font-serif text-gray-900 mb-2">Press Release Not Found</h1>
         <Link href="/news" className="mt-4 px-6 py-3 bg-[#0a0a0a] text-white font-bold uppercase tracking-widest text-xs rounded-sm">
           Return to Newsroom
         </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* HEADER IMAGE */}
      <div className="relative h-[40vh] w-full">
         <Image src={data.image} alt={data.title} fill className="object-cover" priority />
         <div className="absolute inset-0 bg-black/50"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-serif text-3xl md:text-5xl max-w-4xl text-center px-6 leading-tight">
               {data.title}
            </h1>
         </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
           
           {/* META DATA */}
           <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
              <Link href="/news" className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#881337] transition-colors">
                 <ArrowLeft className="w-3 h-3 mr-2" /> Back to News
              </Link>
              <div className="flex gap-4">
                 <button className="text-gray-400 hover:text-black"><Printer className="w-4 h-4" /></button>
                 <button className="text-gray-400 hover:text-black"><Share2 className="w-4 h-4" /></button>
              </div>
           </div>

           <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              <span className="text-[#881337]">{data.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {data.date}</span>
           </div>

           {/* CONTENT */}
           <div className="prose prose-lg text-gray-700 leading-loose">
              {data.content}
           </div>

           {/* BOILERPLATE */}
           <div className="mt-16 bg-gray-50 p-8 border-t-4 border-[#881337]">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-4">About D Trinity Security</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                 D Trinity Security is a London-based private security firm specializing in intelligence-led protection for UHNW individuals, Family Offices, and sovereign entities. Founded by former UK military and intelligence veterans, the firm provides bespoke risk management solutions globally.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                 <strong>Media Contact:</strong> press@dtrinitysecurity.co | +44 (0) 20 7000 0000
              </div>
           </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}