"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Sparkles, Terminal, Code2, Database } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Information & Actions */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Professional Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs mb-4">
              <Terminal className="w-3.5 h-3.5 text-blue-700" />
              <span>{personalInfo.roleTitle}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-slate-900 tracking-tight leading-[1.2]">
              Hi, I&apos;m{" "}
              <span className="text-blue-700 font-bold">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-2.5 text-base sm:text-lg font-medium text-slate-700">
              {personalInfo.headline}
            </p>

            {/* Supporting Summary */}
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Computer Science graduate and aspiring Java Developer with a solid foundation in{" "}
              <strong className="text-slate-900 font-semibold">Core Java</strong>,{" "}
              <strong className="text-slate-900 font-semibold">Spring Boot</strong>,{" "}
              <strong className="text-slate-900 font-semibold">Servlets</strong>,{" "}
              <strong className="text-slate-900 font-semibold">JDBC</strong>,{" "}
              <strong className="text-slate-900 font-semibold">SQL</strong>, and{" "}
              <strong className="text-slate-900 font-semibold">MySQL</strong>.
              Currently pursuing intensive Java Full Stack Development training at{" "}
              <span className="text-blue-700 font-semibold">JSPIDERS</span>.
            </p>

            {/* Metadata Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-700">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.availability}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200 text-blue-900 font-medium shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>B.Tech CSE &bull; 8.1 CGPA</span>
              </div>
            </div>

            {/* Production Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("projects");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-slate-900 text-white hover:bg-blue-700 active:bg-slate-950 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("contact");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white text-slate-800 border border-slate-300 hover:border-blue-600 hover:bg-blue-50/40 active:bg-slate-100 shadow-2xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Irregular Oval Portrait Frame with Minimalist Floating Badges */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-2 lg:mb-0">
            <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] w-full flex items-center justify-center">
              
              {/* Subtle Decorative Navy Glow Behind Oval */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-2xl -z-10" />

              {/* Floating Badge 1: Top Left */}
              <div className="absolute -top-3 -left-3 sm:-left-6 z-20 animate-float-badge-1">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-md text-xs font-semibold text-slate-800">
                  <div className="p-1 rounded bg-blue-50 text-blue-700">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Java &amp; Spring Boot</span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 z-20 animate-float-badge-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-md text-xs font-semibold text-slate-800">
                  <div className="p-1 rounded bg-blue-50 text-blue-700">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <span>JSPIDERS Full Stack</span>
                </div>
              </div>

              {/* Main Irregular Morphing Oval Image Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 p-2 bg-gradient-to-tr from-blue-700/30 via-slate-200 to-blue-600/20 irregular-oval-wrapper shadow-xl animate-float-slow">
                <div className="w-full h-full irregular-oval-wrapper bg-white overflow-hidden border-2 border-white">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Java Developer`}
                    width={340}
                    height={440}
                    priority
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
