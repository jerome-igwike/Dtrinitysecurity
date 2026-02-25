import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Introduction />
      <ServicesGrid />
      <Testimonials />
      <Recruitment />
    </main>
  );
}