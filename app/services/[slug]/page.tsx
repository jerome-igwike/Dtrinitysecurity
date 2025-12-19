"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, CheckCircle, ArrowRight, Lock, MapPin, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- THE SPEED BOOSTER
import { useParams } from "next/navigation";

// 1. DATA VAULT
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  stat: string;
  statLabel: string;
}> = {
  "close-protection": {
    title: "Close Protection",
    subtitle: "The Invisible Shield for High-Net-Worth Individuals.",
    description: "Our Close Protection operatives are not 'bodyguards'. They are intelligence-led security specialists recruited from UK Special Forces and elite police units. We provide a protective ecosystem that enables our clients to conduct business and live freely.",
    features: ["Former SAS / SBS Operatives", "Counter-Surveillance", "Covert Protection Profiles", "Trauma Life Support"],
    image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2070&auto=format&fit=crop",
    stat: "100%",
    statLabel: "Confidentiality",
  },
  "residential": {
    title: "Residential Security",
    subtitle: "Fortifying Your Sanctuary.",
    description: "Your home is the last line of defence. D Trinity provides 24/7 residential security teams (RST) that blend seamlessly into your lifestyle. We combine physical presence with advanced technical surveillance.",
    features: ["24/7 Residential Security Teams", "Access Control & Vetting", "CCTV & Drone Defense", "Rapid Response Protocols"],
    image: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2069&auto=format&fit=crop",
    stat: "24/7",
    statLabel: "Active Monitoring",
  },
  "family-office": {
    title: "Family Office Security",
    subtitle: "Protecting Legacy, Wealth, and Reputation.",
    description: "We integrate directly with Family Offices to provide a holistic risk management strategy. Beyond physical safety, we protect against reputational damage, cyber threats, and corporate espionage.",
    features: ["Holistic Risk Assessments", "Travel Security Management", "Staff Vetting", "Cyber & Digital Protection"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    stat: "Global",
    statLabel: "Operational Reach",
  },
  "investigation": {
    title: "Private Investigation",
    subtitle: "Intelligence is the Ultimate Asset.",
    description: "Information is power. D Trinity’s investigation division specializes in corporate due diligence, asset tracing, and matrimonial surveillance. We gather admissible evidence lawfully and discreetly.",
    features: ["Corporate Due Diligence", "Asset Tracing & Recovery", "Matrimonial Surveillance", "Litigation Support"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    stat: "98%",
    statLabel: "Case Success Rate",
  },
  "surveillance": {
    title: "Surveillance Services",
    subtitle: "Seeing Without Being Seen.",
    description: "Our surveillance teams are masters of the grey man concept. Whether tracking a person of interest or monitoring a hostile location, we utilize state-of-the-art optics and tracking technology.",
    features: ["Static & Mobile Surveillance", "GPS Vehicle Tracking", "Counter-Surveillance (TSCM)", "Detailed Intel Reports"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop",
    stat: "HD",
    statLabel: "Evidence Quality",
  },
  "chauffeurs": {
    title: "Security Chauffeurs",
    subtitle: "Secure Mobility in a Volatile World.",
    description: "A driver is just a driver. A security chauffeur is a trained operative capable of evasive driving and threat detection. Our fleet of armored and non-armored luxury vehicles ensures you arrive safely.",
    features: ["Advanced Evasive Driving", "Armored Vehicle Fleet", "Route Planning & Recon", "Airport Tarmac Access"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    stat: "ZERO",
    statLabel: "Incidents on Route",
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string; 
  const data = servicesData[slug];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center bg-white flex flex-col items-center justify-center">
        <Navbar />
         <h1 className="text-2xl md:text-3xl font-serif text-[#881337] mb-4">Service Protocol Not Found</h1>
         <Link href="/" className="px-6 py-3 bg-[#0a0a0a] text-white font-bold uppercase tracking-widest text-xs rounded-sm">
           Return to Base
         </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* HERO SECTION - Now Fully Responsive */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        
        {/* OPTIMIZED IMAGE: Uses Next/Image with Priority */}
        <div className="absolute inset-0">
          <Image 
            src={data.image} 
            alt={data.title} 
            fill 
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl pt-16 md:pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/30 rounded-full bg-white/10 mb-6 backdrop-blur-md animate-fade-in">
             <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#881337]" />
             <span className="text-white/90 font-bold tracking-[0.2em] uppercase text-[8px] md:text-[10px]">
                D Trinity Operations
             </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 animate-fade-in-up leading-tight">
            {data.title}
          </h1>
          <p className="text-base md:text-xl text-gray-200 font-light max-w-xl md:max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100 px-4">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* DETAILS SECTION - Stacked on Mobile, Row on Desktop */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: Description */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8 animate-fade-in-up delay-200">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 border-l-4 border-[#881337] pl-6">
              Operational Brief
            </h2>
            <p className="text-gray-600 leading-loose text-base md:text-lg">
              {data.description}
            </p>
            
            <div className="bg-gray-50 p-6 md:p-8 border border-gray-100 rounded-sm">
              <div className="flex items-center gap-4 mb-2">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#881337]" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">{data.statLabel}</span>
              </div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{data.stat}</p>
            </div>
          </div>

          {/* RIGHT: Features & CTA */}
          <div className="lg:w-1/2 animate-fade-in-up delay-300">
             <div className="bg-[#0a0a0a] text-white p-8 md:p-10 rounded-sm relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#881337] opacity-10 rounded-bl-full"></div>
                
                <h3 className="font-serif text-xl md:text-2xl mb-8 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-[#881337]" />
                  Protocol Includes:
                </h3>

                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                  {data.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-[#881337] shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      <span className="text-gray-300 text-sm tracking-wide group-hover:text-white transition-colors leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-[10px] md:text-xs text-gray-400 mb-6 uppercase tracking-widest">
                    Requires Security Consultation
                  </p>
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-between w-full bg-white text-[#0a0a0a] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#881337] hover:text-white transition-all duration-300 group shadow-lg"
                  >
                    Request Deployment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* GLOBAL COVERAGE BANNER */}
      <section className="bg-gray-100 py-12 md:py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-4">
             <MapPin className="w-6 h-6 text-gray-400" />
             <h3 className="font-serif text-xl md:text-2xl text-gray-900">Available Nationwide & Internationally</h3>
             <p className="text-xs md:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
               D Trinity assets can be deployed to any location in the UK within 4 hours.
             </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}