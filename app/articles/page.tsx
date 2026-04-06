import { Shield } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import ArticlesClient from "@/components/ArticlesClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArticlesHub() {
   const briefings = getAllPosts("articles");

   return (
      <main className="bg-white min-h-screen">
         <Navbar />

         {/* HERO SECTION */}
         <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] mt-20">
            <div className="absolute inset-0 opacity-30">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-white/5 mb-6 backdrop-blur-md animate-fade-in">
                  <Shield className="w-3 h-3 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-[10px]">
                     D'Trinity Intelligence
                  </span>
               </div>
               <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 animate-fade-in-up">
                  Security Briefings.
               </h1>
               <p className="text-gray-400 font-light max-w-xl mx-auto animate-fade-in-up delay-100">
                  Analysis, doctrine, and legal updates for the private security sector.
               </p>
            </div>
         </div>

         <ArticlesClient briefings={briefings} />
         
         <Footer />
      </main>
   );
}