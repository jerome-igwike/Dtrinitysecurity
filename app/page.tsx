import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ServicesGrid from "@/components/ServicesGrid";
import FacilityBanner from "@/components/FacilityBanner";
import Testimonials from "@/components/Testimonials";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Introduction />
      <ServicesGrid />
      <FacilityBanner />
      {/* Cinematic Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
      <Testimonials />
      <Recruitment />
    </main>
  );
}