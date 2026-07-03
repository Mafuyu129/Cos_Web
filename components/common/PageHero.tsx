"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowTh?: string;
  titleTh?: string;
  descriptionTh?: string;
  eyebrowEn?: string;
  titleEn?: string;
  descriptionEn?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  eyebrowTh,
  titleTh,
  descriptionTh,
  eyebrowEn,
  titleEn,
  descriptionEn
}: PageHeroProps) {
  const { locale } = useLanguage();
  const displayEyebrow = locale === "th" ? eyebrowTh ?? eyebrow : eyebrowEn ?? eyebrow;
  const displayTitle = locale === "th" ? titleTh ?? title : titleEn ?? title;
  const displayDescription = locale === "th" ? descriptionTh ?? description : descriptionEn ?? description;

  return (
    <section className="border-b border-primary/10 bg-white text-text-dark dark:border-white/10 dark:bg-dark-bg dark:text-white">
      <Container className="py-16 md:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
          {displayEyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-6xl font-medium leading-tight md:text-7xl">
          {displayTitle}
        </h1>
        {displayDescription ? (
          <p className="mt-6 max-w-2xl text-xl font-medium leading-9 text-text-muted dark:text-text-light md:text-2xl">
            {displayDescription}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
