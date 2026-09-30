import React from "react";
import {
  GraduationCap,
  Layers,
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
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white border-y border-slate-100">
      <div className="section-container">
        <SectionHeading
          badge="About Me"
          title="Background & Technical Focus"
          subtitle="A dedicated software engineering graduate with hands-on experience in Java backend development and modern web technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base">
            {aboutData.summary.map((para, index) => (
              <p key={index} className="text-slate-700">
                {para}
              </p>
            ))}

            {/* Current Training Callout Box */}
            <div className="mt-6 p-5 rounded-xl bg-blue-50/70 border border-blue-200/80">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                      {trainingData.course}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-200/70 text-blue-900">
                      {trainingData.status}
                    </span>
                  </div>
                  <p className="text-xs text-blue-900/80 font-medium mt-0.5">
                    Institution: <strong className="font-semibold text-slate-900">{trainingData.institution}</strong>
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700">
                    {trainingData.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trainingData.modules.map((mod) => (
                      <span
                        key={mod}
                        className="px-2 py-0.5 rounded-md bg-white border border-blue-200 text-blue-800 text-xs font-medium"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Commitments / What I Bring */}
            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Core Strengths &amp; Engineering Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Strong grasp of Java OOP principles & clean code",
                  "Reliable relational database design with SQL & MySQL",
                  "Hands-on MVC pattern with Servlets & Spring Boot",
                  "Collaborative team communication & problem solving",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Fact Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Education
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    B.Tech CSE (8.1 CGPA)
                  </p>
                  <p className="text-xs text-slate-600">
                    Eluru College of Engg. &amp; Tech (JNTUK)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Core Specialization
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Java Backend Development
                  </p>
                  <p className="text-xs text-slate-600">
                    Spring Boot, Servlets, JDBC, SQL
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Target Role
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Java Developer / Software Engineer
                  </p>
                  <p className="text-xs text-slate-600">
                    Entry-Level / Graduate Positions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Location Preference
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Hyderabad, India
                  </p>
                  <p className="text-xs text-slate-600">
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
