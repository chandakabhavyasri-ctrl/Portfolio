import React from "react";
import {
  CheckCircle2,
  Database,
  Server,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projectsData } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  const primaryProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="section-container">
        <SectionHeading
          badge="Featured Projects"
          title="Software Engineering Projects"
          subtitle="Production-grade applications engineered with Core Java, Spring Boot, Servlets, JDBC database connectivity, and full CRUD architecture."
        />

        {/* 1. PRIMARY FEATURED PROJECT: Student Management System */}
        <div className="mb-8">
          <div className="rounded-xl bg-white border-2 border-blue-600/40 p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-lg hover:border-blue-600 hover:-translate-y-1 transition-all duration-300">
            {/* Header Tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>Primary Project</span>
              </div>
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                {primaryProject.category}
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {primaryProject.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  {primaryProject.description}
                </p>
              </div>

              {primaryProject.githubUrl && (
                <a
                  href={primaryProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-blue-700 active:bg-slate-950 transition-all shrink-0 shadow-2xs hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {primaryProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Implementations & Features */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Key Architectural &amp; Functional Highlights:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {primaryProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Footer Callouts */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-600" />
                <span>Spring Boot REST Backend</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>MySQL Relational Persistence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Java OOP Modular Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 & 3. CORE JAVA ENTERPRISE PROJECTS (Employee & Library Management) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {secondaryProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Servlets &bull; JDBC
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
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

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-500">Enterprise Java Architecture</span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 4. SECONDARY ML PROJECT (Hybrid Disaster Prediction) */}
        {secondaryProjects[2] && (
          <div className="bg-slate-50/70 rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    {secondaryProjects[2].category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Team Leadership &bull; Research Project
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {secondaryProjects[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {secondaryProjects[2].description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {secondaryProjects[2].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-semibold bg-white text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="md:w-72 shrink-0 bg-white p-3.5 rounded-lg border border-slate-200 text-xs space-y-1.5">
                <h4 className="font-bold text-slate-800 uppercase tracking-wide text-[11px]">
                  Project Contributions:
                </h4>
                {secondaryProjects[2].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-slate-600">
                    <span className="text-blue-600 font-bold">&bull;</span>
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
