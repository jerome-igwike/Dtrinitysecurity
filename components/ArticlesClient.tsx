"use client";

import { useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContentMetadata } from "@/lib/mdx";

export default function ArticlesClient({ briefings }: { briefings: ContentMetadata[] }) {
  const [query, setQuery] = useState("");

  const filteredBriefings = briefings.filter((post) => {
    const q = query.toLowerCase();
    return post.title.toLowerCase().includes(q) || post.category.toLowerCase().includes(q);
  });

  return (
    <>
      {/* SEARCH / FILTER BAR */}
      <div className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hidden md:block">
            {filteredBriefings.length} Classified Documents Found
          </p>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-sm border border-gray-200 w-full md:w-auto focus-within:border-[#D4AF37] transition-colors">
            <Search className="w-4 h-4 text-[#D4AF37]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search briefing logs..."
              className="bg-transparent border-none outline-none text-xs w-full md:w-48 placeholder:text-gray-400 text-gray-900 uppercase tracking-wide"
            />
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBriefings.map((post, i) => (
            <Link href={`/articles/${post.slug}`} key={i} className="group flex flex-col bg-white border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden bg-[#0a0a0a]">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                ) : null}
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-gray-900 text-[10px] font-extrabold uppercase px-3 py-1 tracking-widest">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-4 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[#0a0a0a] group-hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest pt-6 border-t border-gray-100 mt-auto transition-colors">
                  Read Briefing <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
          
          {filteredBriefings.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-400 text-xs uppercase tracking-widest">
              <p>No briefings match your search query.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
