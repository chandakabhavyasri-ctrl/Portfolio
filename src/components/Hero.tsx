"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
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
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
    >
      {/* Subtle background tech grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Mobile: Order = Image -> Name -> Role -> Description -> CTAs */}
        {/* Desktop: Two-column grid (Left: Content, Right: Portrait) */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Text & Actions */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Role / Discipline Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/80 mb-4 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>{personalInfo.roleTitle}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 inline-block">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700">
              Aspiring Software Engineer &amp; Java Backend Developer
            </p>

            {/* Concise Supporting Resume Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Computer Science graduate and Java Developer fresher with a solid
              foundation in <strong className="text-slate-900 font-semibold">Java</strong>,{" "}
              <strong className="text-slate-900 font-semibold">Spring Boot</strong>,{" "}
              <strong className="text-slate-900 font-semibold">Servlets</strong>,{" "}
              <strong className="text-slate-900 font-semibold">JDBC</strong>,{" "}
              <strong className="text-slate-900 font-semibold">SQL</strong>, and{" "}
              <strong className="text-slate-900 font-semibold">MySQL</strong>.
              Currently pursuing intensive Java Full Stack Development training at{" "}
              <span className="text-blue-700 font-semibold">JSPIDERS</span>.
            </p>

            {/* Meta Tags / Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 font-medium shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.availability}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>B.Tech CSE &bull; 8.1 CGPA</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("projects");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md transition-all duration-150"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100 shadow-2xs transition-all duration-150"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-4 lg:mb-0">
            <div className="relative group max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] w-full">
              
              {/* Subtle decorative framing */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/20 via-slate-200 to-indigo-500/20 rounded-2xl blur-xs -z-10 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-lg">
                <Image
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.name} - Java Developer`}
                  width={360}
                  height={480}
                  priority
                  className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-300 hover:scale-[1.01]"
                />
                
                {/* Subtle bottom info overlay tag */}
                <div className="p-3 bg-white/95 backdrop-blur-sm border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800">Bhavya Chandaka</span>
                  </div>
                  <span className="text-slate-500 font-medium">Java Full Stack</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
