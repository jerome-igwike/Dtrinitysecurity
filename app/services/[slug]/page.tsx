"use client";

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
    subtitle: "Elite Discretion. Absolute Confidence.",
    description: "Our Close Protection operatives operate at the highest echelon of the industry. Selected exclusively from UK Special Forces, Royal Military Police, and elite corporate protection backgrounds, we design a customized security footprint that guarantees your safety without compromising your lifestyle and mobility.",
    features: ["Former Tier-One Military Operatives", "Advanced Counter-Surveillance", "Discrete Low-Profile Architecture", "Tactical Medical Support (FREC 4+)"],
    image: "https://media.istockphoto.com/id/983223912/photo/bodyguard-standing-at-businessman-car-and-reviewing-territory.webp?a=1&b=1&s=612x612&w=0&k=20&c=e_U_7OgtcHjNofBQ2YI2ysLGMnoJkutGOIdH8G31bYw=",
    stat: "100%",
    statLabel: "Client Confidentiality",
  },
  "residential": {
    title: "Residential Security",
    subtitle: "Impenetrable Security for Ultimate Sanctuaries.",
    description: "Your home must remain a sanctuary. D Trinity deploys highly trained Residential Security Teams (RST) that provide invisible but omnipresent protection. Integrating cutting-edge perimeter technology with proactive human intelligence, we intercept threats long before they reach your threshold.",
    features: ["24/7 Covert RST Deployment", "Strict Access & Perimeter Control", "Drone Counter-Measures & CCTV", "Rapid Threat Neutralisation"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    stat: "24/7",
    statLabel: "Active Perimeter Monitoring",
  },
  "family-office": {
    title: "Family Office Security",
    subtitle: "Safeguarding Legacy, Wealth, and Reputation.",
    description: "Generational wealth commands complex security protocols. We engineer comprehensive risk management strategies for Family Offices, mitigating physical vulnerabilities, neutralizing corporate espionage, and protecting digital footprints globally.",
    features: ["Global Risk & Threat Analysis", "International Travel Security", "Bespoke Staff Vetting", "Cyber Protocol Architecture"],
    image: "https://images.unsplash.com/photo-1555529733-0e670560f8e1?q=80&w=2070&auto=format&fit=crop",
    stat: "Global",
    statLabel: "Operational Reach",
  },
  "investigation": {
    title: "Private Investigation",
    subtitle: "Intelligence is the Ultimate Asset.",
    description: "Actionable intelligence relies on uncompromised investigation. Our covert divisions execute corporate due diligence, high-stakes asset tracing, and discrete private matters. We lawfully gather irrefutable, evidential-grade intelligence to protect your global interests.",
    features: ["Corporate Due Diligence", "Global Asset Tracing & Recovery", "Matrimonial & Private Surveillance", "Litigation Evidence Gathering"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    stat: "98%",
    statLabel: "Case Success Rate",
  },
  "surveillance": {
    title: "Surveillance Operations",
    subtitle: "Total Awareness. Zero Visibility.",
    description: "Actionable intelligence relies on uncompromised surveillance. Our covert teams are masters of the 'grey man' doctrine. Utilizing advanced technical optics and relentless mobile tracking, we gather legally admissible evidence for corporate due diligence, asset tracing, and high-stakes private matters.",
    features: ["Covert Mobile & Static Surveillance", "GPS Tracking & Counter-Surveillance", "Asset Tracing & Due Diligence", "Evidential Grade Intel Reports"],
    image: "https://images.unsplash.com/photo-1581568736305-49a04e012c13?q=80&w=2070&auto=format&fit=crop",
    stat: "HD",
    statLabel: "Intelligence Quality",
  },
  "chauffeurs": {
    title: "Secure Logistics & Chauffeurs",
    subtitle: "Uncompromised Transit Across Unpredictable Terrains.",
    description: "Movement exposes vulnerability. Our Security Chauffeurs are defensive driving experts capable of executing precise route planning and evasive maneuvers. Operating a fleet of high-end, discreet, and optional armoured vehicles, we ensure flawless, secure transit.",
    features: ["Advanced Defensive Driving", "Armoured & Discreet Fleet", "Strategic Route Reconnaissance", "Executive Airport Transfers"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    stat: "ZERO",
    statLabel: "Incidents on Route",
  },
  "events": {
    title: "Event Security",
    subtitle: "Precision Control for High-Profile Gatherings.",
    description: "High-value events demand flawless orchestration. D Trinity provides elite security management for charity galas, corporate summits, and private gatherings. Our personnel deliver uncompromising access control, crowd dynamics management, and secure VIP extraction mapping.",
    features: ["Discreet VIP Protection Units", "Strategic Access & Perimeter Control", "Hostile Environment Protocols", "Rapid Extraction Logistics"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    stat: "300+",
    statLabel: "Events Secured",
  },
  "assets": {
    title: "Asset Protection",
    subtitle: "Absolute Security for Invaluable Commodities.",
    description: "We orchestrate the secure transit, storage, and guarding of high-value assets. Whether fine art, sensitive corporate data, or high-value commodities, our heavily vetted logistics operatives assure safe passage through heavily fortified custodial networks.",
    features: ["Secure High-Value Transit", "Covert Armed & Unarmed Escorts", "Risk Assessed Storage Networks", "Encrypted Document Logistics"],
    image: "https://images.unsplash.com/photo-1635434473843-bac9feff5e8e?q=80&w=2070&auto=format&fit=crop",
    stat: "£1B+",
    statLabel: "Capital Protected",
  },
  "facility-management": {
    title: "Secure Cleaning & Facility Management",
    subtitle: "Premium Cleaning by Security-Cleared Personnel.",
    description: "Trusting someone with the cleanliness of your private estate or corporate facility shouldn't mean compromising your security. We provide premium deep cleaning, specialized housekeeping, and facility management services delivered exclusively by rigorously vetted, security-cleared personnel. We guarantee immaculate results and absolute confidentiality for your most sensitive environments.",
    features: ["Security-Vetted Cleaning Operatives", "Premium Deep Cleaning & Housekeeping", "Sensitive Environment Maintenance", "Strict Non-Disclosure Protocols"],
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
    stat: "Level 3",
    statLabel: "Vetting Standard",
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = servicesData[slug];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 text-center bg-white flex flex-col items-center justify-center">

        <h1 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-4">Service Protocol Not Found</h1>
        <Link href="/" className="px-6 py-3 bg-[#0a0a0a] text-white font-bold uppercase tracking-widest text-xs rounded-sm">
          Return to Base
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* HERO SECTION - Now Fully Responsive */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

        {/* OPTIMIZED IMAGE: Uses Next/Image with Priority */}
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            className="object-cover w-full h-full"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl pt-16 md:pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/30 rounded-full bg-white/10 mb-6 backdrop-blur-md animate-fade-in">
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
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
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 border-l-4 border-[#D4AF37] pl-6">
              Operational Brief
            </h2>
            <p className="text-gray-600 leading-loose text-base md:text-lg">
              {data.description}
            </p>

            <div className="bg-gray-50 p-6 md:p-8 border border-gray-100 rounded-sm">
              <div className="flex items-center gap-4 mb-2">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">{data.statLabel}</span>
              </div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{data.stat}</p>
            </div>
          </div>

          {/* RIGHT: Features & CTA */}
          <div className="lg:w-1/2 animate-fade-in-up delay-300">
            <div className="bg-[#0a0a0a] text-white p-8 md:p-10 rounded-sm relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-bl-full"></div>

              <h3 className="font-serif text-xl md:text-2xl mb-8 flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
                Protocol Includes:
              </h3>

              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:text-white transition-colors" />
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
                  className="flex items-center justify-between w-full bg-white text-[#0a0a0a] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group shadow-lg"
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

    </main>
  );
}