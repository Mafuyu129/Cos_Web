"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function TrustStrip() {
  const { locale } = useLanguage();
  const items =
    locale === "th"
      ? ["OEM / ODM", "R&D Formula", "Thai FDA", "QC Workflow", "One Stop Service"]
      : ["OEM / ODM", "R&D Formula", "Thai FDA", "QC Workflow", "One Stop Service"];

  return (
    <div className="overflow-hidden bg-primary px-6 py-3 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 md:gap-12">
        {items.map((item) => (
          <div key={item} className="flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] opacity-90">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
