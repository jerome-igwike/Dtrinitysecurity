import { Clock, Calendar, Share2, ArrowRight, ShieldAlert, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "articles");

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center bg-white flex flex-col items-center justify-center">

        <FileText className="w-16 h-16 text-gray-200 mb-4" />
        <h1 className="text-2xl font-serif text-gray-900 mb-2">Classified Document</h1>
        <p className="text-gray-500 text-sm mb-6">The briefing you requested is not available at your clearance level.</p>
        <Link href="/articles" className="px-6 py-3 bg-[#0a0a0a] text-white font-bold uppercase tracking-widest text-xs rounded-sm">
          Return to Base
        </Link>
      </div>
    );
  }

  const data = post.meta;

  return (
    <main className="bg-white min-h-screen">

      {/* ARTICLE HEADER */}
      <div className="relative h-[50vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            className="object-cover w-full h-full"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 pb-16">
          <div className="flex items-center gap-4 text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="bg-[#D4AF37] text-white px-2 py-1">{data.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {data.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {data.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
            {data.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-serif italic">
              {(data.author || 'D').charAt(0)}
            </div>
            <div>
              <p className="text-white text-sm font-bold">By {data.author || 'D Trinity'}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">D Trinity Intelligence</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

          {/* MAIN TEXT */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg text-gray-600 font-light leading-loose prose-h2:font-serif prose-h2:text-gray-900 prose-h3:font-serif prose-h3:text-gray-900 prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline">
              <MDXRemote source={post.content} />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4">Share this Briefing</h4>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" /> Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 space-y-8">
            {/* CTA WIDGET */}
            <div className="bg-[#0a0a0a] text-white p-8 rounded-sm">
              <ShieldAlert className="w-8 h-8 text-[#D4AF37] mb-4" />
              <h3 className="font-serif text-2xl mb-4">Security Concern?</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                If this briefing highlights a vulnerability in your current setup, contact our ops desk immediately.
              </p>
              <Link href="/contact" className="flex items-center justify-between w-full bg-[#D4AF37] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0a0a0a] transition-all">
                Secure Contact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RELATED LINKS */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">Related Protocols</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/services/close-protection" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
                    Close Protection Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
                    Residential Security Teams
                  </Link>
                </li>
                <li>
                  <Link href="/services/investigation" className="block text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
                    Private Investigation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}