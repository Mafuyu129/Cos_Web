"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  eyebrowTh?: string;
  titleTh?: string;
  descriptionTh?: string;
  eyebrowEn?: string;
  titleEn?: string;
  descriptionEn?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  eyebrowTh,
  titleTh,
  descriptionTh,
  eyebrowEn,
  titleEn,
  descriptionEn,
  align = "left",
  className
}: SectionHeaderProps) {
  const { locale } = useLanguage();
  const displayEyebrow = locale === "th" ? eyebrowTh ?? eyebrow : eyebrowEn ?? eyebrow;
  const displayTitle = locale === "th" ? titleTh ?? title : titleEn ?? title;
  const displayDescription = locale === "th" ? descriptionTh ?? description : descriptionEn ?? description;

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {displayEyebrow ? (
        <div
          className={cn(
            "mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#0038AE]/15 bg-gradient-to-r from-[#0038AE]/10 to-[#48ACD6]/15 px-3.5 py-1 text-xs font-semibold uppercase text-[#0038AE] dark:border-[#48ACD6]/30 dark:from-[#0038AE]/30 dark:to-[#48ACD6]/20 dark:text-[#48ACD6]",
            locale === "th" ? "tracking-wide" : "tracking-[0.14em]"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#48ACD6]" />
          <span>{displayEyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-text-dark dark:text-white sm:text-4xl">
        {displayTitle}
      </h2>
      {displayDescription ? (
        <p className="mt-4 text-base font-normal leading-relaxed text-text-muted dark:text-text-light/85 md:text-lg">
          {displayDescription}
        </p>
      ) : null}
    </div>
  );
}

