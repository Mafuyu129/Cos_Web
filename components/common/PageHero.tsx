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
    <section className="relative overflow-hidden border-b border-white/10 bg-[#030917] text-white">
      {/* Subtle architectural sapphire radial light */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[460px] w-[460px] rounded-full bg-[#0038AE]/35 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-[#48ACD6]/18 blur-[130px]" />

      {/* Architectural Editorial Serif Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-6 hidden select-none font-serif text-[120px] font-light italic leading-none tracking-tight text-white/[0.035] lg:block xl:text-[156px]"
      >
        The Blue Factory
      </div>

      <Container className="relative z-10 py-16 md:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="editorial-eyebrow text-[#48ACD6]">
            {displayEyebrow}
          </span>
          <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
          <span className="font-serif text-sm italic tracking-wide text-white/60">
            The Blue Factory • Pherada Cosmetics
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.16] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
          {displayTitle}
        </h1>

        {displayDescription ? (
          <p className="mt-5 max-w-2xl border-l border-[#48ACD6]/40 pl-5 text-base font-normal leading-relaxed text-white/75 md:text-lg">
            {displayDescription}
          </p>
        ) : null}
      </Container>
    </section>
  );
}


