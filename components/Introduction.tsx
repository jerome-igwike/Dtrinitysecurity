import { CheckCircle } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn"; // Our premium animation wrapper

export default function Introduction() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: The Text Pitch */}
          <div className="space-y-8">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-2 block">
                  Who We Are
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-500 font-bold leading-tight">
                  Not Just Guards. <br />
                  <span className="italic text-gray-900">Guardians.</span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                D Trinity operates at the intersection of expert security management and corporate diplomacy. We do not provide &quot;generic&quot; security; we engineer bespoke protection ecosystems.
                <br /><br />
                From high-net-worth individuals in Mayfair to visiting dignitaries in York and Bradford, our operatives are selected for their ability to blend in, not stand out.
              </p>
            </FadeIn>

            {/* The "Why Us" List */}
            <FadeIn direction="right" delay={0.6}>
              <div className="space-y-4 pt-4 border-t border-gray-100">
                {[
                  "Expert Security Management & Surveillance",
                  "Intelligence-Led Risk Assessment",
                  "Discreet Residential & Asset Protection"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-gray-800 font-medium text-sm tracking-wide uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.8}>
              <div className="pt-6">
                <div className="inline-block border-l-4 border-[#D4AF37] pl-6">
                  <p className="text-gray-900 font-serif italic text-xl">
                    &quot;Safety is not the absence of threat. It is the presence of capability.&quot;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: The "Related Image" (High-End Suit/Detail) */}
          <FadeIn direction="left" delay={0.4} className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl group">
            {/* Optimized Next.js Image */}
            <Image
              src="https://images.unsplash.com/photo-1581568736305-49a04e012c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHx8MA%3D%3D"
              
              alt="Close Protection Detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105"
            />

            {/* Decorative Border Box (z-10 ensures it sits above the Next Image) */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none z-10"></div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-10">
              <p className="text-white font-serif text-2xl">Precision. Integrity. Vigilance.</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}