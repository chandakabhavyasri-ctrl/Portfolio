"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Sparkles, Terminal, Code2 } from "lucide-react";
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
      className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-white border-b border-slate-100"
    >
      <div className="section-container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Information & Actions */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Professional Role Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>{personalInfo.roleTitle}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.2]">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 font-bold">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-2.5 text-base sm:text-lg font-medium text-slate-700">
              {personalInfo.headline}
            </p>

            {/* Supporting Summary (Strictly Resume Facts) */}
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
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-600">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{personalInfo.availability}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50/70 border border-blue-200/70 text-blue-800 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>B.Tech CSE &bull; 8.1 CGPA</span>
              </div>
            </div>

            {/* Production Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("projects");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-2xs"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Framed Portrait */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-2 lg:mb-0">
            <div className="max-w-[270px] sm:max-w-[300px] lg:max-w-[330px] w-full">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Java Developer`}
                  width={330}
                  height={440}
                  priority
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                
                {/* Clean Bottom Meta Card */}
                <div className="px-4 py-3 bg-slate-50/90 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800">{personalInfo.name}</span>
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
