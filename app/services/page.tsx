"use client";

import Navbar from "@/components/Navbar";
import { Shield, Home, Users, Lock, Car, Eye, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Close Protection",
    icon: <Shield className="w-8 h-8 text-burgundy-900" />,
    description: "Discreet protection for high-profile individuals. Our operatives are drawn from specialist military and police backgrounds.",
    features: ["SIA Level 3 Licensed", "Route Reconnaissance", "Counter-Surveillance"]
  },
  {
    title: "Residential Security",
    icon: <Home className="w-8 h-8 text-burgundy-900" />,
    description: "24/7 presence for private estates. We combine physical guarding with advanced access control systems.",
    features: ["Perimeter Defense", "CCTV Monitoring", "Key Holding"]
  },
  {
    title: "Event Security",
    icon: <Users className="w-8 h-8 text-burgundy-900" />,
    description: "Comprehensive planning for corporate functions, private parties, and high-net-worth gatherings.",
    features: ["Guest List Management", "Crowd Control", "VIP Extraction"]
  },
  {
    title: "Secure Transport",
    icon: <Car className="w-8 h-8 text-burgundy-900" />,
    description: "Security chauffeurs trained in defensive driving and anti-ambush techniques for safe transit.",
    features: ["Luxury Fleet", "Route Planning", "Airport Transfers"]
  },
  {
    title: "Asset Protection",
    icon: <Lock className="w-8 h-8 text-burgundy-900" />,
    description: "Secure guarding and transportation of high-value items, fine art, and sensitive documentation.",
    features: ["Tracked Delivery", "Armoured Transport", "Secure Storage"]
  },
  {
    title: "Surveillance",
    icon: <Eye className="w-8 h-8 text-burgundy-900" />,
    description: "Gathering intelligence and evidence for corporate and private clients with absolute discretion.",
    features: ["Background Checks", "Matrimonial Investigation", "Corporate Fraud"]
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header - Simple & Clean */}
      <div className="pt-32 pb-16 text-center px-4 bg-gray-50 border-b border-gray-100">
        <span className="text-burgundy-900 font-bold tracking-widest uppercase text-xs">
          Our Capabilities
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900">
          Operational Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Tailored security solutions for a changing world.
        </p>
      </div>

      {/* The "Clean" Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-gray-200 p-8 hover:border-burgundy-900/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 rounded-sm"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-burgundy-900 group-hover:text-white transition-colors duration-300">
                {/* The icon changes color on hover */}
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 border-t border-gray-100 pt-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    <Check className="w-3 h-3 text-burgundy-900" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-burgundy-900 text-white p-12 text-center rounded-sm">
          <h2 className="text-3xl font-serif font-bold mb-4">Need a bespoke solution?</h2>
          <p className="text-gray-200 mb-8">We build security packages around your specific lifestyle and risks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-burgundy-900 px-8 py-3 font-bold uppercase text-sm rounded-sm hover:bg-gray-100 transition-colors">
            Contact Operations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}