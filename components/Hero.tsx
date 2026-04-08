"use client";

import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import FadeIn from "@/components/FadeIn";

const slides = [
  {
    id: 1,
    badge: "Operations: London • York • Birmingham • Bradford",
    headline: "Elite Protection.",
    subheadline: "Absolute Discretion.",
    text: "Premium security ecosystems, Uncompromised protection, Integrated solutions. SIA Licensed Professionals. Corporate Security Specialists.",
    image: "https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?q=80&w=3840&auto=format&fit=crop"
  },
  {
    id: 2,
    badge: "24/7 Intelligence Center",
    headline: "Modern Control.",
    subheadline: "Real-Time Monitoring.",
    text: "State-of-the-art CCTV surveillance and rapid response systems. Leveraging modern technology to secure your corporate infrastructure round the clock.",
    image: "https://images.unsplash.com/flagged/photo-1570343271132-8949dd284a04?q=80&w=3840&auto=format&fit=crop"
  },
  {
    id: 3,
    badge: "Asset & Estate Security Management",
    headline: "Dynamic Security.",
    subheadline: "Active Site Security.",
    text: "Professional on-site personnel and streamlined access control. We utilize modern protocols to secure your assets and daily operations efficiently.",
    image: "https://plus.unsplash.com/premium_photo-1661964274973-c739a6a5d520?q=80&w=3840&auto=format&fit=crop"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // NEW: Track hover state

  useEffect(() => {
    // If user is hovering, don't run the interval
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]); // Add isPaused to dependency array so it reacts instantly

  const slide = slides[currentSlide];

  return (
    <section 
      // NEW: Added group/hero for CSS pausing, and onMouseEnter/Leave for React pausing
      className="group/hero relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* 1. IMAGE LAYER (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((s, index) => (
          <div
            key={s.id}
            // NEW: group-hover/hero:[animation-play-state:paused] pauses the Ken Burns zoom when hovered
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 z-10 animate-ken-burns group-hover/hero:[animation-play-state:paused]" 
                : "opacity-0 z-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.headline}
              fill
              unoptimized
              priority={index === 0}
              quality={90}
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60 z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-20" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16">
        
        {/* We use key={slide.id} to force React to remount the FadeIn components so the animations replay on slide change */}
        <div key={slide.id} className="flex flex-col items-center">
          
          {/* Badge */}
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-200 uppercase">
                {slide.badge}
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.4}>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter mb-4 leading-[1.1] drop-shadow-2xl text-white">
              {slide.headline} <br />
              <span className="block text-3xl sm:text-5xl lg:text-6xl mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 font-light tracking-wide">
                {slide.subheadline}
              </span>
            </h1>
          </FadeIn>

          {/* Divider & Text */}
          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="w-20 h-[2px] bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>
              <p className="max-w-xs sm:max-w-3xl mx-auto text-base sm:text-xl text-gray-300 font-light leading-relaxed px-2">
                {slide.text}
              </p>
            </div>
          </FadeIn>

         {/* Buttons */}
          <FadeIn direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full px-4 sm:px-0">
              
              {/* NEW: Increased padding to py-5 px-12, font to text-sm, added shadow-2xl for extreme visibility */}
              <Link
                href="/contact"
                className="w-full sm:w-auto px-12 py-5 bg-[#D4AF37] text-gray-900 font-extrabold text-sm tracking-[0.15em] uppercase rounded-lg hover:bg-[#B5952F] transition-all shadow-2xl hover:shadow-[#D4AF37]/50 flex items-center justify-center gap-3 group/btn"
              >
                Start Enquiry
                <ArrowRight className="w-5 h-5 text-gray-800 group-hover/btn:text-gray-900 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:07517735406"
                className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-[0.15em] uppercase rounded-lg hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                +44 7517 735406
              </a>
            </div>
          </FadeIn>
        </div>

        {/* 3. CAROUSEL DOTS */}
        <div className="absolute bottom-10 left-0 flex justify-center w-full gap-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                idx === currentSlide ? "w-8 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}