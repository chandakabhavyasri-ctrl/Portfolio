import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { educationData, trainingData } from "@/data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-200/70">
      <div className="section-container">
        <SectionHeading
          badge="Academics &amp; Training"
          title="Education &amp; Credentials"
          subtitle="Formal academic qualifications, coursework fundamentals, and specialized Java Full Stack engineering training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Formal Education: Left 7 Columns */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Formal Education</span>
            </h3>

            {educationData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {item.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {item.duration && (
                      <span className="text-xs text-slate-500 font-medium px-2.5 py-1 bg-slate-50 rounded-md border border-slate-200">
                        {item.duration}
                      </span>
                    )}
                    <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>

                {item.details && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-2.5 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Specialized Training: Right 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>Specialized Training</span>
            </h3>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  {trainingData.status}
                </span>
                <span className="text-xs font-bold text-slate-600">
                  {trainingData.institution}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                {trainingData.course}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {trainingData.description}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2.5">
                  Core Training Modules:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {trainingData.modules.map((mod) => (
                    <div
                      key={mod}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-slate-700 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hands-on coding, OOP principles &amp; database design</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
