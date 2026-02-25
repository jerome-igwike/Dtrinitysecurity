import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";

export default function NewsPage() {
   const newsItems = getAllPosts("news");

   return (
      <main className="bg-white min-h-screen">
         <Navbar />

         {/* HERO SECTION */}
         <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 opacity-40">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-6 backdrop-blur-md animate-fade-in">
                  <Newspaper className="w-3 h-3 text-[#881337]" />
                  <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                     Corporate Communications
                  </span>
               </div>
               <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 animate-fade-in-up">
                  Press & Media.
               </h1>
               <p className="text-gray-400 font-light max-w-xl mx-auto animate-fade-in-up delay-100">
                  Official announcements, press releases, and media resources.
               </p>
            </div>
         </div>

         <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

               {/* LEFT: NEWS FEED */}
               <div className="lg:w-2/3 space-y-12">
                  <h2 className="font-bold text-gray-900 uppercase tracking-widest text-xs border-b border-gray-100 pb-4 mb-8">
                     Latest Releases
                  </h2>

                  {newsItems.map((news, i) => (
                     <Link href={`/news/${news.slug}`} key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer hover:bg-gray-50 transition-colors p-4 -mx-4 rounded-sm">
                        {/* Thumbnail */}
                        <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden bg-gray-100">
                           <Image
                              src={news.image}
                              alt={news.title}
                              fill
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                           />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col w-full">
                           <div className="flex items-center gap-3 mb-2">
                              <span className="text-[#881337] text-[10px] font-bold uppercase tracking-widest">{news.category}</span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{news.date}</span>
                           </div>
                           <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-[#881337] transition-colors leading-tight">
                              {news.title}
                           </h3>
                           <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                              {news.excerpt}
                           </p>
                           <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors mt-auto">
                              Read Release <ArrowUpRight className="w-3 h-3 ml-1" />
                           </div>
                        </div>
                     </Link>
                  ))}

               </div>

               {/* RIGHT: MEDIA KIT & CONTACT */}
               <div className="lg:w-1/3 space-y-8">

                  {/* Contact Card */}
                  <div className="bg-gray-50 p-8 border border-gray-100">
                     <h3 className="font-serif text-xl text-gray-900 mb-6">Media Contact</h3>
                     <p className="text-sm text-gray-500 mb-6">
                        For press inquiries, interview requests, or official commentary, please contact our press office.
                     </p>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                           <Mail className="w-4 h-4 text-[#881337]" />
                           <a href="mailto:press@dtrinitysecurity.co" className="hover:text-black transition-colors">press@dtrinitysecurity.co</a>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                           <Phone className="w-4 h-4 text-[#881337]" />
                           <span>+44 (0) 20 7000 0000</span>
                        </div>
                     </div>
                  </div>

                  {/* Download Kit */}
                  <div className="bg-[#0a0a0a] text-white p-8">
                     <h3 className="font-serif text-xl mb-4">Brand Assets</h3>
                     <p className="text-sm text-gray-400 mb-6">
                        Download our official media kit, including high-res logos, director bios, and brand guidelines.
                     </p>
                     <button className="flex items-center justify-between w-full bg-white text-[#0a0a0a] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors">
                        Download Media Kit
                        <Download className="w-4 h-4" />
                     </button>
                  </div>

               </div>

            </div>
         </section>

         <Footer />
      </main>
   );
}