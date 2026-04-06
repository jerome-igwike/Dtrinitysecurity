import { Quote, Star, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Arthur P.",
      role: "Principal, Family Office",
      location: "Kensington, London",
      text: "D Trinity transformed our daily operations. The team was invisible yet omnipresent. For the first time in years, my family felt truly at ease.",
      tag: "Residential Security"
    },
    {
      name: "James W.",
      role: "Diplomatic Envoy",
      location: "G7 Summit Delegation",
      text: "The level of planning and route reconnaissance provided by the transport unit was military-grade. Flawless execution under high-pressure timelines.",
      tag: "Secure Transport"
    },
    {
      name: "Eleanor S.",
      role: "Private Client",
      location: "Monaco / London",
      text: "I have used close protection teams for twenty years. D Trinity is the first firm that understands the balance between safety and lifestyle. Gentlemen first, operators second.",
      tag: "Close Protection"
    },
    {
      name: "Marcus V.",
      role: "Corporate CEO",
      location: "FTSE 100 Company",
      text: "We faced a credible insider threat. The intelligence team handled the evidence gathering with absolute discretion. Resolved without a single leak to the press.",
      tag: "Private Investigation"
    },
    {
      name: "Jonathan D.",
      role: "Event Director",
      location: "Private Charity Gala",
      text: "Managing security for 300 VIPs is a nightmare. D Trinity made it look effortless. Their vetting process for guests was rigorous but impeccably polite. The gold standard.",
      tag: "Event Security"
    },
    {
      name: "William C.",
      role: "Asset Manager",
      location: "Mayfair, London",
      text: "Responsive. Intelligent. Highly capable when necessary, but diplomatic always. They are the only number I have saved for critical operational emergencies.",
      tag: "Asset Protection"
    }
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen">

      {/* HERO SECTION */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
            alt="Secure Operations"
            fill
            priority
            className="object-cover opacity-30 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-24 pb-12">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 mb-6 backdrop-blur-md">
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-[10px]">
                Client Confidentiality Guaranteed
              </span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight">
              Verified Intelligence.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Our clients value discretion above all else. <br className="hidden md:block" />
              Below are redacted statements from our operational logs, verifying our commitment to absolute security.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {reviews.map((review, i) => (
            <FadeIn key={i} direction="up" delay={0.2 + (i * 0.1)}>
              <div className="h-full bg-white/5 p-10 border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500 group relative flex flex-col justify-between">
                
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-[#D4AF37]/10 transition-colors duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-black/50 px-2 py-1 rounded-sm">
                      Verified
                    </span>
                  </div>

                  <p className="text-gray-300 italic leading-relaxed mb-8 font-serif text-lg">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-bold text-white uppercase tracking-wider">{review.name}</p>
                  <p className="text-xs text-[#D4AF37] uppercase tracking-widest mt-1">{review.role}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{review.location}</p>
                    <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-bold text-gray-400 uppercase tracking-widest rounded-sm">
                      {review.tag}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* TRUST BANNER CTA */}
      <section className="relative py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D4AF37]/5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn direction="up" delay={0.2}>
            <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-[#D4AF37]" />
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Privacy is our Protocol.</h2>
            <p className="text-gray-400 text-lg mx-auto mb-10 leading-relaxed font-light">
              We never disclose client identities, locations, or operational details without express written consent. Your business remains strictly confidential.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-12 py-5 bg-[#D4AF37] text-gray-900 font-extrabold uppercase tracking-[0.2em] text-xs hover:bg-[#B5952F] transition-all shadow-xl hover:shadow-[#D4AF37]/20 rounded-sm"
            >
              Secure Your Consultation
            </Link>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}