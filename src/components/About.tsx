import React from "react";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { aboutData, trainingData } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="section-container">
        <SectionHeading
          badge="About Me"
          title="Background & Engineering Focus"
          subtitle="A dedicated software engineering graduate with hands-on proficiency in Java backend development, relational database design, and web technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {aboutData.summary.map((para, index) => (
              <p key={index} className="text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Current Training Callout Card */}
            <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5 border border-blue-100">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                      {trainingData.course}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/70">
                      {trainingData.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Institution: <span className="font-semibold text-slate-800">{trainingData.institution}</span>
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {trainingData.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trainingData.modules.map((mod) => (
                      <span
                        key={mod}
                        className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Core Strengths &amp; Development Approach
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Strong foundation in Java OOP principles & clean code",
                  "Relational database modeling with SQL & MySQL",
                  "MVC pattern with Servlets & Spring Boot",
                  "Active team collaboration & problem solving",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Education
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    B.Tech CSE (8.1 CGPA)
                  </p>
                  <p className="text-xs text-slate-500">
                    Eluru College of Engg. &amp; Tech (JNTUK)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Primary Focus
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Java Backend Engineering
                  </p>
                  <p className="text-xs text-slate-500">
                    Core Java, Spring Boot, Servlets, JDBC
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Target Role
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Java Developer / Software Engineer
                  </p>
                  <p className="text-xs text-slate-500">
                    Entry-Level / Graduate Positions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Location
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Hyderabad, India
                  </p>
                  <p className="text-xs text-slate-500">
                    Open to On-site / Hybrid roles
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
