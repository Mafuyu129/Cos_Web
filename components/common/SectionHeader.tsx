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
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
          {displayEyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-5xl font-medium leading-tight text-text-dark dark:text-white md:text-6xl">
        {displayTitle}
      </h2>
      {displayDescription ? (
        <p className="mt-5 text-xl font-medium leading-9 text-text-muted dark:text-text-light md:text-2xl">
          {displayDescription}
        </p>
      ) : null}
    </div>
  );
}
