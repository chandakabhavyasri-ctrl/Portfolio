import React from "react";
import { Briefcase, Building, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experienceData } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-200/70">
      <div className="section-container">
        <SectionHeading
          badge="Work History"
          title="Internship Experience"
          subtitle="Practical industry internships providing foundational exposure to software engineering, data analysis, and mobile development."
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>
                </div>

                <span className="self-start sm:self-auto px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  {exp.type}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                {exp.description}
              </p>

              {/* Skills Gained */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 mr-1">
                  Key Exposure:
                </span>
                {exp.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
