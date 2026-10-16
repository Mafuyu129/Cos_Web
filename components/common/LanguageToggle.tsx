"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      aria-label="Toggle language"
      onClick={toggleLocale}
      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] px-3 font-mono text-xs font-semibold text-[#0038AE] transition hover:border-[#48ACD6] hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-[#48ACD6] dark:hover:bg-white/15"
    >
      <Languages size={15} />
      {locale === "th" ? "TH" : "EN"}
    </button>
  );
}

