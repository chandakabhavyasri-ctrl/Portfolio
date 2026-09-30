import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : "text-left"}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/80 mb-3.5 ${
            centered ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
