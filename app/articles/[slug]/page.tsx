"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, User, Calendar, Share2, ArrowRight, ShieldAlert, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// 1. THE INTELLIGENCE DATABASE
const articlesData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: React.ReactNode;
}> = {
  "close-protection": {
    title: "The Evolution of Close Protection: Beyond the 'Bodyguard' Myth",
    category: "Operational Doctrine",
    date: "12 DEC 2025",
    readTime: "5 MIN READ",
    author: "Tobenna Arthur",
    image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-[#881337] first-letter:mr-3 first-letter:float-left">
          The image of the 'bodyguard'—a towering figure in sunglasses pushing through crowds—is a relic of the past. In the modern threat landscape, if your protection officer has to physically intervene, the operation has already failed.
        </p>
        <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">The Grey Man Theory</h3>
        <p className="mb-6">
          At D Trinity, we subscribe to the doctrine of the 'Grey Man'. Our operatives are trained to blend into the principal's lifestyle, whether that is a corporate boardroom in Canary Wharf or a private gala in Monaco. The goal is to provide a protective bubble that is impermeable yet invisible.
        </p>
        <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Intelligence-Led Protection</h3>
        <p className="mb-6">
          Physical presence is the last line of defence. The first line is intelligence. Before a principal moves, our advance teams have already mapped the route, identified choke points, and liaised with local law enforcement. We do not react to threats; we preempt them.
        </p>
      </>
    )
  },
  "family-office": {
    title: "Securing the Dynasty: Risk Management for Family Offices",
    category: "Strategic Advisory",
    date: "08 DEC 2025",
    readTime: "7 MIN READ",
    author: "Jerome Igwike",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">
          Family Offices face a unique convergence of threats. They hold the wealth of a corporation but often lack the structured security governance of a PLC. This makes them prime targets for everything from cyber-espionage to kidnapping.
        </p>
        <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">The Insider Threat</h3>
        <p className="mb-6">
          Statistically, the greatest threat to a Family Office comes from within. Disgruntled staff, unvetted contractors, or loose digital hygiene can expose a family to blackmail or theft. D Trinity implements 'Zero Trust' protocols, ensuring that access to the family's inner circle is strictly controlled and monitored.
        </p>
        <p className="mb-6">
          We act as the Chief Security Officer (CSO) for the family, vetting every member of staff from the nanny to the private pilot, ensuring that your legacy is protected from all angles.
        </p>
      </>
    )
  },
  "residential": {
    title: "Fortifying the Sanctuary: Modern Residential Security",
    category: "Physical Security",
    date: "28 NOV 2025",
    readTime: "4 MIN READ",
    author: "Operations Desk",
    image: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2069&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">
          Your home should be the one place where you can switch off. However, for high-net-worth individuals, the home is often the softest target. The challenge is to secure the property without turning it into a fortress that feels like a prison.
        </p>
        <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Layered Defence</h3>
        <p className="mb-6">
          D Trinity employs a concentric circle approach. 
          <br/><strong>Zone 1:</strong> The Perimeter (Sensors, CCTV, Physical Barriers).
          <br/><strong>Zone 2:</strong> The Grounds (RST Patrols, K9 Units).
          <br/><strong>Zone 3:</strong> The Inner Sanctum (Panic Rooms, Biometric Access).
        </p>
      </>
    )
  },
  "events": {
    title: "High-Profile Event Security: Order in Chaos",
    category: "Crowd Science",
    date: "15 NOV 2025",
    readTime: "6 MIN READ",
    author: "Tobenna Arthur",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">
          From shareholders' meetings to private galas, events are dynamic environments where risks can escalate in seconds. The key to successful event security is 'Guest Experience'. The security must be rigorous, but the guests should never feel policed.
        </p>
        <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Access Control as an Art Form</h3>
        <p className="mb-6">
          We utilize non-invasive screening technology and behavioral detection officers who can spot a threat by body language alone. This allows legitimate guests to flow freely while threats are neutralized quietly at the periphery.
        </p>
      </>
    )
  },
  "nsa-2023": {
    title: "The National Security Act 2023: What Clients Need to Know",
    category: "Legal Briefing",
    date: "01 NOV 2025",
    readTime: "10 MIN READ",
    author: "Legal Compliance",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2069&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-6">
          The UK's new National Security Act 2023 has fundamentally changed the landscape for foreign entities and high-net-worth individuals operating in Britain. It introduces new offences for espionage, sabotage, and foreign interference.
        </p>
        <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">Implications for Private Security</h3>
        <p className="mb-6">
          For our international clients, this means that vetting and due diligence are no longer just optional—they are a legal necessity. D Trinity ensures that all your operations in the UK are fully compliant with the new legislation, protecting you not just from physical threats, but from legal exposure.
        </p>
      </>
    )
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = articlesData[slug];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center bg-white flex flex-col items-center justify-center">
        <Navbar />
         <FileText className="w-16 h-16 text-gray-200 mb-4" />
         <h1 className="text-2xl font-serif text-gray-900 mb-2">Classified Document</h1>
         <p className="text-gray-500 text-sm mb-6">The briefing you requested is not available at your clearance level.</p>
         <Link href="/" className="px-6 py-3 bg-[#0a0a0a] text-white font-bold uppercase tracking-widest text-xs rounded-sm">
           Return to Base
         </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* ARTICLE HEADER */}
      <div className="relative h-[50vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={data.image} 
            alt={data.title} 
            fill 
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl px-6 pb-16">
          <div className="flex items-center gap-4 text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="bg-[#881337] text-white px-2 py-1">{data.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {data.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {data.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
            {data.title}
          </h1>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-serif italic">
                {data.author.charAt(0)}
             </div>
             <div>
                <p className="text-white text-sm font-bold">By {data.author}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">D Trinity Intelligence</p>
             </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* MAIN TEXT */}
          <div className="lg:w-2/3">
             <div className="prose prose-lg text-gray-600 font-light leading-loose">
                {data.content}
             </div>

             <div className="mt-16 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4">Share this Briefing</h4>
                <div className="flex gap-4">
                   <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" /> Copy Link
                   </button>
                </div>
             </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 space-y-8">
             {/* CTA WIDGET */}
             <div className="bg-[#0a0a0a] text-white p-8 rounded-sm">
                <ShieldAlert className="w-8 h-8 text-[#881337] mb-4" />
                <h3 className="font-serif text-2xl mb-4">Security Concern?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                   If this briefing highlights a vulnerability in your current setup, contact our ops desk immediately.
                </p>
                <Link href="/contact" className="flex items-center justify-between w-full bg-[#881337] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0a0a0a] transition-all">
                   Secure Contact
                   <ArrowRight className="w-4 h-4" />
                </Link>
             </div>

             {/* RELATED LINKS */}
             <div className="bg-gray-50 p-8 border border-gray-100">
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">Related Protocols</h4>
                <ul className="space-y-4">
                   <li>
                      <Link href="/services/close-protection" className="block text-sm text-gray-600 hover:text-[#881337] transition-colors">
                         Close Protection Services
                      </Link>
                   </li>
                   <li>
                      <Link href="/services/residential" className="block text-sm text-gray-600 hover:text-[#881337] transition-colors">
                         Residential Security Teams
                      </Link>
                   </li>
                   <li>
                      <Link href="/services/investigation" className="block text-sm text-gray-600 hover:text-[#881337] transition-colors">
                         Private Investigation
                      </Link>
                   </li>
                </ul>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}