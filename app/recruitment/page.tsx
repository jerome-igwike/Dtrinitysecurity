"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { ShieldAlert, Upload, CheckCircle, AlertTriangle, ChevronRight, FileText, X, Lock } from "lucide-react";

export default function RecruitmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("File is too large. Max 5MB.");
        return;
      }
      setSelectedFile(file);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedFile) {
      alert("CRITICAL: CV/Resume is required for vetting.");
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("resume", selectedFile);

    try {
      const res = await fetch('/api/recruitment', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        const errorData = await res.json();
        alert(`Transmission Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Secure Connection Failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="bg-gray-50 min-h-screen">
        <Navbar />
        {/* SUCCESS SCREEN */}
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-lg w-full bg-white p-12 shadow-2xl border-t-4 border-[#881337] text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
              <CheckCircle className="w-10 h-10 text-green-700" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">Dossier Transmitted.</h1>
            <p className="text-gray-500 text-sm mb-8">
              Your application has been encrypted and logged in the D Trinity secure server.
            </p>
            <button onClick={() => window.location.href = '/'} className="mt-4 text-xs font-bold uppercase tracking-widest text-[#881337] hover:underline">
              Return to Operations
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* TIGHTENED SPACING: 'pt-24' 
          This sits much closer to the navbar for a premium feel. */}
      <div className="pt-24 min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT PANEL (Dark Protocol Side) */}
        <div className="w-full lg:w-1/3 bg-[#0a0a0a] text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden lg:min-h-[calc(100vh-96px)]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-10">
               <Lock className="w-3 h-3 text-[#881337]" />
               <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                  Secure Channel 256-Bit
               </span>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Operative <br /><span className="text-[#881337]">Intake.</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 border-l border-[#881337] pl-6">
              You are applying for a position that requires the highest level of trust, discipline, and capability.
            </p>
            
            <div className="space-y-6 opacity-70">
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase">
                <ShieldAlert className="w-4 h-4 text-[#881337]" />
                <span>BS7858 Vetting Required</span>
              </div>
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase">
                <AlertTriangle className="w-4 h-4 text-[#881337]" />
                <span>NDA Protocols Active</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              D Trinity Security Ltd <br />
              London Operations Centre
            </p>
          </div>
        </div>

        {/* RIGHT PANEL (The Form) */}
        <div className="w-full lg:w-2/3 bg-gray-50 p-8 lg:p-24 border-l border-gray-200">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-16 animate-fade-in-up">
            
            {/* SECTION 01 */}
            <div>
              <h3 className="flex items-center gap-4 font-serif text-2xl text-gray-900 mb-8 pb-4 border-b border-gray-200">
                <span className="text-xs font-bold bg-[#0a0a0a] text-white px-3 py-1.5 rounded-sm tracking-widest">01</span>
                Personal Intelligence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Full Legal Name</label>
                  <input required name="name" type="text" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all font-medium text-lg placeholder-gray-300" placeholder="SURNAME, First Name" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Email Address</label>
                  <input required name="email" type="email" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Secure Phone</label>
                  <input required name="phone" type="tel" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg" placeholder="+44" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Base Location</label>
                  <input required name="location" type="text" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all text-lg" />
                </div>
              </div>
            </div>

            {/* SECTION 02 */}
            <div>
              <h3 className="flex items-center gap-4 font-serif text-2xl text-gray-900 mb-8 pb-4 border-b border-gray-200">
                <span className="text-xs font-bold bg-[#0a0a0a] text-white px-3 py-1.5 rounded-sm tracking-widest">02</span>
                Service Record
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">SIA License No.</label>
                  <input required name="siaNumber" type="text" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all font-mono text-lg tracking-wider" maxLength={16} placeholder="0000 0000 0000 0000" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#881337] transition-colors">Primary Background</label>
                  <div className="relative">
                    <select name="background" className="w-full py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#881337] outline-none transition-all cursor-pointer text-lg appearance-none rounded-none">
                      <option value="Military">HM Forces (Army/Navy/RAF)</option>
                      <option value="Police">Police Service</option>
                      <option value="Special Forces">Special Forces (UKSF)</option>
                      <option value="Civilian CP">Civilian Close Protection</option>
                    </select>
                    <ChevronRight className="w-4 h-4 absolute right-0 top-4 text-gray-400 pointer-events-none rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 03 - UPLOAD */}
            <div>
              <h3 className="flex items-center gap-4 font-serif text-2xl text-gray-900 mb-8 pb-4 border-b border-gray-200">
                <span className="text-xs font-bold bg-[#0a0a0a] text-white px-3 py-1.5 rounded-sm tracking-widest">03</span>
                Documentation
              </h3>
              
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden" 
              />
              
              {!selectedFile ? (
                <div 
                  onClick={() => fileInputRef.current?.click()} 
                  className="group relative border-2 border-dashed border-gray-300 bg-white h-40 flex flex-col items-center justify-center cursor-pointer hover:border-[#881337] hover:bg-red-50/10 transition-all duration-300 rounded-sm"
                >
                   <div className="p-4 bg-gray-50 rounded-full mb-3 group-hover:scale-110 group-hover:bg-[#881337]/10 transition-all">
                     <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#881337]" />
                   </div>
                   <p className="text-sm font-bold text-gray-700 tracking-wide">Upload CV / Service Record</p>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">PDF or DOCX (Max 5MB)</p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-6 bg-[#0a0a0a] text-white rounded-sm shadow-xl border-l-4 border-[#881337]">
                  <div className="flex items-center gap-5">
                    <FileText className="w-8 h-8 text-[#881337]" />
                    <div>
                      <p className="text-base font-bold tracking-wide">{selectedFile.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Ready for transmission</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => setSelectedFile(null)} className="p-3 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 gap-6">
               <p className="text-[10px] text-gray-400 italic max-w-xs text-center md:text-left">
                 *By clicking submit, you agree to BS7858 background checks and data processing under GDPR.
               </p>
               <button 
                 disabled={isSubmitting}
                 type="submit" 
                 className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#881337] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#4C0519] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isSubmitting ? "Encrypting Data..." : "Submit Dossier"}
                 {!isSubmitting && <ChevronRight className="w-4 h-4" />}
               </button>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}