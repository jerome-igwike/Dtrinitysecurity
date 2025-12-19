"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBackground = !isHome || scrolled || isOpen;

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      dropdown: [
        { name: "About The Firm", href: "/about" }, 
        { name: "Recruitment", href: "/recruitment" }
      ] 
    },
    { 
      name: "Services", 
      dropdown: [
        { name: "Close Protection", href: "/services/close-protection" },
        { name: "Residential Security", href: "/services/residential" },
        { name: "Family Office", href: "/services/family-office" },
        { name: "Private Investigation", href: "/services/investigation" },
        { name: "Surveillance", href: "/services/surveillance" },
        { name: "Security Chauffeurs", href: "/services/chauffeurs" }
      ] 
    },
    { 
      name: "Articles", 
      dropdown: [
        { name: "Security Briefings", href: "/articles" }, 
        { name: "Press & Media", href: "/news" } 
      ] 
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <nav
        className={`w-full transition-all duration-500 ease-in-out ${
          showBackground
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className={`transition-colors duration-300 ${showBackground ? "text-[#881337]" : "text-white"}`}>
                <ShieldCheck className="h-7 w-7" />
            </div>
            <span className={`font-serif text-lg font-bold tracking-wide transition-colors duration-300 ${showBackground ? "text-gray-900" : "text-white"}`}>
              D TRINITY
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-full"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {item.dropdown ? (
                    <button 
                      className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors
                      ${showBackground ? "text-gray-700 hover:text-[#881337]" : "text-white/90 hover:text-white"}`}
                    >
                      {item.name}
                      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors
                      ${showBackground ? "text-gray-700 hover:text-[#881337]" : "text-white/90 hover:text-white"}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-60">
                    <div className="bg-white border-t-[3px] border-[#881337] rounded-b-sm shadow-xl py-1 animate-fade-in-up">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-2.5 text-[11px] font-bold text-gray-500 hover:bg-gray-50 hover:text-[#881337] uppercase tracking-wide transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`px-5 py-2.5 font-bold text-[10px] tracking-[0.2em] uppercase rounded-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5
              ${showBackground 
                ? "bg-[#881337] hover:bg-[#4C0519] text-white" 
                : "bg-white text-[#881337] hover:bg-gray-50"}`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-1 transition-colors ${showBackground ? "text-gray-900" : "text-white"}`}
            >
              {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-50 last:border-0">
                {item.dropdown ? (
                  <div className="py-2">
                    <span className="block px-6 py-2 text-xs font-bold text-[#881337] uppercase tracking-widest opacity-80">
                      {item.name}
                    </span>
                    <div className="bg-gray-50/50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block pl-10 pr-6 py-3 text-[11px] font-bold text-gray-600 hover:text-[#881337] uppercase tracking-wide border-l-2 border-transparent hover:border-[#881337]"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-4 text-xs font-bold text-gray-900 hover:text-[#881337] uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="p-6 bg-gray-50">
              <Link
                href="/contact"
                className="block w-full text-center py-4 bg-[#881337] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}