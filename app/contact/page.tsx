"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { ShieldCheck, Mail, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        alert("Transmission Failed. Server busy.");
      }
    } catch (error) {
      console.error(error);
      alert("Connection Error. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-lg w-full bg-white p-12 shadow-2xl border-t-4 border-[#881337] text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
              <CheckCircle className="w-10 h-10 text-green-700" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">Inquiry Transmitted.</h1>
            <p className="text-gray-500 text-sm mb-8">
              Your message has been securely routed to our Booking Desk. A consultant will review your requirements immediately.
            </p>
            <button onClick={() => window.location.reload()} className="text-xs font-bold uppercase tracking-widest text-[#881337] hover:underline">
              Send Another Message
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Spacing Fix: pt-24 ensures it sits perfectly below the new Slim Navbar */}
      <div className="pt-24 min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT PANEL: HQ INFO (Dark) */}
        <div className="w-full lg:w-5/12 bg-[#0a0a0a] text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden lg:min-h-[calc(100vh-96px)]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 opacity-80">
               <ShieldCheck className="w-5 h-5 text-[#881337]" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase">D Trinity HQ</span>
            </div>
            
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Establish <br /><span className="text-[#881337]">Secure Contact.</span>
            </h1>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-12 border-l border-[#881337] pl-6 max-w-sm">
              For immediate security concerns or bespoke consultation requests. Our communication channels are monitored 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[#881337] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-300">London Operations</h4>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white transition-colors">
                    1 Canada Square, Canary Wharf<br />London, E14 5AB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[#881337] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-300">Secure Line</h4>
                  <p className="text-sm text-gray-500 font-mono group-hover:text-white transition-colors">
                    +44 (0) 20 7000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[#881337] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-300">Encrypted Mail</h4>
                  <p className="text-sm text-gray-500 font-mono group-hover:text-white transition-colors">
                    bookings@dtrinitysecurity.co
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Response Time: &lt; 4 Hours
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: FORM (Light) */}
        <div className="w-full lg:w-7/12 bg-gray-50 p-8 lg:p-24 border-l border-gray-200">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-10 animate-fade-in-up">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Client Name</label>
                <input required name="name" type="text" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all font-serif text-lg" placeholder="Enter full name" />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Email Address</label>
                <input required name="email" type="email" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg" placeholder="official@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Phone (Optional)</label>
                <input name="phone" type="tel" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg" placeholder="+44" />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Subject</label>
                <select name="subject" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg cursor-pointer">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Close Protection">Close Protection</option>
                  <option value="Residential Security">Residential Security</option>
                  <option value="Consultancy">Security Consultancy</option>
                  <option value="Urgent">Urgent / Emergency</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 group">
               <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Briefing / Message</label>
               <textarea required name="message" rows={4} className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg resize-none" placeholder="Outline your requirements..."></textarea>
            </div>

            <div className="pt-4 flex items-center justify-end">
               <button 
                 disabled={isSubmitting}
                 type="submit" 
                 className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#881337] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#4C0519] transition-all shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isSubmitting ? "Transmitting..." : "Send Message"}
                 {!isSubmitting && <ArrowRight className="w-4 h-4" />}
               </button>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}