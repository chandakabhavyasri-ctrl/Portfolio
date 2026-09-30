"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xs border-b border-slate-200 shadow-2xs"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-slate-900 group"
          >
            <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs tracking-tight transition-colors group-hover:bg-blue-700">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Java Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-2xs"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg px-4 py-4 space-y-1">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-100 mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
