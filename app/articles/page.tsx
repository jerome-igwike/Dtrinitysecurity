import { Calendar, ArrowRight, Shield, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";

export default function ArticlesHub() {
   const briefings = getAllPosts("articles");

   return (
      <main className="bg-white min-h-screen">

         {/* HERO SECTION */}
         <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 opacity-30">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-6 backdrop-blur-md animate-fade-in">
                  <Shield className="w-3 h-3 text-[#881337]" />
                  <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                     D Trinity Intelligence
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

         {/* SEARCH / FILTER BAR */}
         <div className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
               <p className="text-xs font-bold uppercase tracking-widest text-gray-500 hidden md:block">
                  {briefings.length} Classified Documents Available
               </p>
               <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 w-full md:w-auto">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                     type="text"
                     placeholder="Search briefing logs..."
                     className="bg-transparent border-none outline-none text-xs w-full md:w-48 placeholder:text-gray-400 text-gray-900 uppercase tracking-wide"
                  />
               </div>
            </div>
         </div>

         {/* ARTICLES GRID */}
         <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

               {briefings.map((post, i) => (
                  <Link href={`/articles/${post.slug}`} key={i} className="group flex flex-col bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                     {/* Image Wrapper */}
                     <div className="relative h-48 w-full overflow-hidden">
                        <Image
                           src={post.image}
                           alt={post.title}
                           fill
                           className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-[#881337] text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
                           {post.category}
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                           <Calendar className="w-3 h-3" /> {post.date}
                        </div>

                        <h3 className="font-serif text-xl text-gray-900 mb-4 group-hover:text-[#881337] transition-colors">
                           {post.title}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                           {post.excerpt}
                        </p>

                        <div className="flex items-center text-[#881337] text-xs font-bold uppercase tracking-widest pt-6 border-t border-gray-100 mt-auto">
                           Read Briefing <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                     </div>
                  </Link>
               ))}

            </div>
         </section>

      </main>
   );
}