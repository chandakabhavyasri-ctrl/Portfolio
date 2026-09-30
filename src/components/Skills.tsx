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
  // Category icon mapping
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming":
        return <Code className="w-5 h-5 text-blue-600" />;
      case "Backend Development":
        return <Server className="w-5 h-5 text-indigo-600" />;
      case "Web Technologies":
        return <Globe className="w-5 h-5 text-sky-600" />;
      case "Databases":
        return <Database className="w-5 h-5 text-emerald-600" />;
      case "Core Concepts":
        return <Layers className="w-5 h-5 text-purple-600" />;
      case "Tools & IDEs":
        return <Wrench className="w-5 h-5 text-amber-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="section-container">
        <SectionHeading
          badge="Technical Skills"
          title="Skills &amp; Competencies"
          subtitle="A categorized overview of programming languages, backend frameworks, databases, and foundational engineering principles."
        />

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/90 text-slate-800 border border-slate-200/70 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>{category.skills.length} core {category.skills.length === 1 ? "skill" : "skills"}</span>
                <span className="text-blue-600">Verified &bull; Resume</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  Professional &amp; Soft Skills
                </h3>
                <p className="text-xs text-slate-500">
                  Key interpersonal strengths and collaboration capabilities
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
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
