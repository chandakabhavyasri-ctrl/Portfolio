import React from "react";
import {
  FolderGit2,
  CheckCircle2,
  Database,
  Server,
  Layers,
  Sparkles,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projectsData } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  const primaryProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-white border-y border-slate-100">
      <div className="section-container">
        <SectionHeading
          badge="Portfolio Projects"
          title="Featured Engineering Projects"
          subtitle="Real-world applications showcasing Core Java, Spring Boot, Servlets, JDBC database connectivity, and full CRUD architecture."
        />

        {/* 1. PRIMARY FEATURED PROJECT: Student Management System */}
        <div className="mb-10">
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-700/60 overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Primary Featured Project</span>
                </div>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                  {primaryProject.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {primaryProject.title}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {primaryProject.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {primaryProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Architectural & Functional Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-700/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Implementations &amp; Features:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {primaryProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Footnote */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-blue-400" />
                  <span>Spring Boot Backend</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>MySQL Database</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>Java OOP Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 & 3. CORE JAVA ENTERPRISE PROJECTS (Employee & Library Management) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {secondaryProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-medium">
                    Servlets &bull; JDBC
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Core Capabilities:
                  </h4>
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-600">Enterprise Java Architecture</span>
                <span className="font-medium text-emerald-600">Full CRUD Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4. SECONDARY / COMPACT ML PROJECT (Hybrid Disaster Prediction) */}
        {secondaryProjects[2] && (
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-2xs">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200/60">
                    {secondaryProjects[2].category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Team Leadership &bull; Research
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {secondaryProjects[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {secondaryProjects[2].description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {secondaryProjects[2].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-white text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="md:w-72 shrink-0 bg-white p-3.5 rounded-lg border border-slate-200 text-xs space-y-2">
                <h4 className="font-bold text-slate-800 uppercase tracking-wide text-[11px]">
                  Project Contributions:
                </h4>
                {secondaryProjects[2].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-slate-600">
                    <span className="text-purple-600 font-bold">&bull;</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
