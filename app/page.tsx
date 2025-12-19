import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Recruitment from "@/components/Recruitment"; // <--- Import

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <ServicesGrid />
      <Testimonials />
      <Recruitment /> {/* <--- Add here */}
    </main>
  );
}