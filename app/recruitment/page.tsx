"use client";

import { useState } from "react";
import { ShieldAlert, AlertTriangle, ChevronRight, CheckCircle, Lock, FileText, AlertCircle } from "lucide-react";
import { z } from "zod";

// Zod Schema updated to remove Service Record fields
const recruitmentSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(30),
  location: z.string().min(1, "Post code/location is required").max(100),
  // We don't strictly validate the File object via Zod on the client side to avoid browser compatibility issues, 
  // but we will ensure it's required in the HTML and check it in the submit handler.
});

export default function RecruitmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setServerError(null);

    const formData = new FormData(e.currentTarget);
    
    // Extract text fields for validation
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
    };

    const file = formData.get("cvFile") as File;

    // Client-Side Text Validation
    const parsedData = recruitmentSchema.safeParse(payload);
    if (!parsedData.success) {
      const fieldErrors: Record<string, string> = {};
      parsedData.error.issues.forEach((issue) => {
        fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Client-Side File Validation
    if (!file || file.size === 0) {
      setErrors({ cvFile: "You must attach a valid CV/Document." });
      setIsSubmitting(false);
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setErrors({ cvFile: "File size exceeds 5MB limit." });
      setIsSubmitting(false);
      return;
    }

    try {
      // DEV NOTE: We are sending formData directly. Do NOT set Content-Type to application/json. 
      // The browser will automatically set the multipart/form-data boundary.
      const res = await fetch('/api/recruitment', {
        method: 'POST',
        body: formData, 
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo(0, 0);
      } else if (res.status === 429) {
        setServerError("Transmission limit reached. Attempt blocked by firewall.");
      } else {
        setServerError("Transmission Error. Destination server rejected the payload.");
      }
    } catch (error) {
      console.error(error);
      setServerError("Secure Connection Failed. Check your network.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="bg-gray-50 min-h-screen">
        {/* SUCCESS SCREEN */}
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-lg w-full bg-white p-12 shadow-2xl border-t-4 border-[#D4AF37] text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
              <CheckCircle className="w-10 h-10 text-green-700" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">Dossier Transmitted.</h1>
            <p className="text-gray-500 text-sm mb-8">
              Your application and documents have been securely logged in the D Trinity server.
            </p>
            <button onClick={() => window.location.href = '/'} className="mt-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:underline">
              Return to Operations
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">

      <div className="pt-24 min-h-screen flex flex-col lg:flex-row">

        {/* LEFT PANEL (Dark Protocol Side) */}
        <div className="w-full lg:w-1/3 bg-[#0a0a0a] text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden lg:min-h-[calc(100vh-96px)]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-10">
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px]">
                Secure Channel 256-Bit
              </span>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Operative <br /><span className="text-[#D4AF37]">Intake.</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 border-l border-[#D4AF37] pl-6">
              You are applying for a position that requires the highest level of trust, discipline, and capability.
            </p>

            <div className="space-y-6 opacity-70">
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                <span>BS7858 Vetting Required</span>
              </div>
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase">
                <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
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
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#D4AF37] transition-colors">Full Legal Name</label>
                  <input required name="name" type="text" className={`w-full py-3 bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] outline-none transition-all font-medium text-lg placeholder-gray-300`} placeholder="First Name, Last Name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#D4AF37] transition-colors">Email Address</label>
                  <input required name="email" type="email" className={`w-full py-3 bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] outline-none transition-all text-lg`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#D4AF37] transition-colors">Secure Phone</label>
                  <input required name="phone" type="tel" className={`w-full py-3 bg-transparent border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] outline-none transition-all text-lg`} placeholder="+44" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#D4AF37] transition-colors">Post Code</label>
                  <input required name="location" type="text" className={`w-full py-3 bg-transparent border-b-2 ${errors.location ? 'border-red-500' : 'border-gray-300'} focus:border-[#D4AF37] outline-none transition-all text-lg`} />
                  {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                </div>
              </div>
            </div>

            {/* SECTION 02 - FILE UPLOAD */}
            <div>
              <h3 className="flex items-center gap-4 font-serif text-2xl text-gray-900 mb-8 pb-4 border-b border-gray-200">
                <span className="text-xs font-bold bg-[#0a0a0a] text-white px-3 py-1.5 rounded-sm tracking-widest">02</span>
                Documentation
              </h3>

              <div className="space-y-4 group bg-white shadow-xl p-8 border border-gray-100 rounded-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Lock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    <strong>OpSec Notice:</strong> Please attach a consolidated PDF containing your CV, SIA License copy, and relevant certifications. Max file size: 5MB.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-[#D4AF37] transition-colors">Attach Secure File</label>
                  <div className="relative">
                    <FileText className="w-5 h-5 absolute left-0 top-3 text-gray-400" />
                    <input
                      required
                      name="cvFile"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className={`w-full py-2 pl-8 bg-transparent border-b-2 ${errors.cvFile ? 'border-red-500' : 'border-gray-200'} focus:border-[#D4AF37] outline-none transition-all text-sm
                      file:mr-4 file:py-2 file:px-6 file:rounded-sm file:border-0 file:text-xs file:font-bold file:tracking-widest file:uppercase file:bg-[#D4AF37] file:text-gray-900 hover:file:bg-[#B5952F] file:cursor-pointer file:transition-colors cursor-pointer`}
                    />
                  </div>
                  {errors.cvFile && <p className="text-red-500 text-xs mt-1">{errors.cvFile}</p>}
                </div>
              </div>
            </div>

            {serverError && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-700">{serverError}</p>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 gap-6">
              <p className="text-[10px] text-gray-400 italic max-w-xs text-center md:text-left">
                *By clicking submit, you agree to BS7858 background checks and data processing under GDPR.
              </p>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#D4AF37] text-gray-900 font-extrabold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#B5952F] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
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