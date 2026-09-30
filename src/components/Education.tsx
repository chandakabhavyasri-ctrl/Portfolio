import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { educationData, trainingData } from "@/data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 lg:py-24 bg-white border-y border-slate-100">
      <div className="section-container">
        <SectionHeading
          badge="Academics &amp; Training"
          title="Education &amp; Certification"
          subtitle="Academic credentials, core coursework, and specialized Java Full Stack engineering training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Formal Education: Left 7 Columns */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Formal Education</span>
            </h3>

            {educationData.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {item.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {item.duration && (
                      <span className="text-xs text-slate-500 font-medium px-2.5 py-1 bg-white rounded-md border border-slate-200">
                        {item.duration}
                      </span>
                    )}
                    <span className="text-xs font-bold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-md border border-blue-200">
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>

                {item.details && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-2.5">
                    {item.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Professional Training: Right 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>Specialized Training</span>
            </h3>

            <div className="bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-slate-50 rounded-xl p-6 border border-blue-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/90 px-2.5 py-1 rounded-md border border-blue-200">
                  {trainingData.status}
                </span>
                <span className="text-xs font-bold text-slate-600">
                  {trainingData.institution}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mt-2">
                {trainingData.course}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                {trainingData.description}
              </p>

              <div className="mt-5 pt-4 border-t border-blue-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2.5">
                  Core Training Modules:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {trainingData.modules.map((mod) => (
                    <div
                      key={mod}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white border border-blue-200/70 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-white/80 border border-blue-100 text-xs text-slate-600 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Hands-on coding, OOPs principles &amp; database design</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
