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
            "editorial-eyebrow mb-4 text-[#0038AE] dark:text-[#48ACD6]",
            align === "center" && "justify-center"
          )}
        >
          <span>{displayEyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-2xl font-bold leading-[1.35] text-text-dark dark:text-white sm:text-3xl lg:text-4xl">
        {displayTitle}
      </h2>
      {displayDescription ? (
        <p className="mt-3 text-sm font-normal leading-relaxed text-text-muted dark:text-white/80 sm:mt-4 sm:text-base md:text-lg">
          {displayDescription}
        </p>
      ) : null}
    </div>
  );
}


