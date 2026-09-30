import React from "react";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-7 border-t border-slate-800">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p className="text-slate-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <span className="text-slate-500 hidden md:inline">
            Java Developer &bull; Software Engineer
          </span>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
