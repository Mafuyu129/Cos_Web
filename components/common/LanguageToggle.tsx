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
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-white px-3 text-sm font-bold text-text-dark transition hover:bg-light-bg dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      <Languages size={16} />
      {locale === "th" ? "TH" : "EN"}
    </button>
  );
}
