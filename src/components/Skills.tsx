import React from "react";
import {
  Code,
  Server,
  Globe,
  Database,
  Layers,
  Wrench,
  Users,
  Check,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { skillCategories, softSkills } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return <Code className="w-4 h-4 text-blue-600" />;
      case "Backend Engineering":
        return <Server className="w-4 h-4 text-blue-600" />;
      case "Web Technologies":
        return <Globe className="w-4 h-4 text-blue-600" />;
      case "Databases & Storage":
        return <Database className="w-4 h-4 text-blue-600" />;
      case "Core Computer Science":
        return <Layers className="w-4 h-4 text-blue-600" />;
      case "Tools & Environments":
        return <Wrench className="w-4 h-4 text-blue-600" />;
      default:
        return <Code className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="section-container">
        <SectionHeading
          badge="Technical Skills"
          title="Skills &amp; Technologies"
          subtitle="A categorized inventory of programming languages, backend frameworks, databases, and core software engineering concepts."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-200 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>{category.skills.length} competencies</span>
                <span className="text-blue-700">Resume Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Banner */}
        <div className="mt-8 bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  Professional &amp; Interpersonal Skills
                </h3>
                <p className="text-xs text-slate-500">
                  Key collaboration strengths and work methodologies
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs"
                >
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
