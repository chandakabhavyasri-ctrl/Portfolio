"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs group-hover:bg-blue-700 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 leading-tight">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Java Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA in desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
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
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity">
          <div className="bg-white border-b border-slate-200 shadow-xl p-5 space-y-2">
            <nav className="flex flex-col space-y-1">
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
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </a>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center"
              >
                Contact Bhavya
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
