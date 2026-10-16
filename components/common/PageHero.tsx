"use client";

import { FlaskConical, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
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
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-gradient-to-br from-[#04091A] via-[#002370] to-[#083B7A] text-white">
      {/* Clinical Grid & Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-25" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#0038AE]/50 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#48ACD6]/30 blur-[110px]" />

      {/* Decorative Molecular Hexagon SVG */}
      <svg
        className="pointer-events-none absolute right-6 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-[#48ACD6]/15 lg:block"
        viewBox="0 0 240 240"
        fill="none"
      >
        <polygon
          points="120,20 195,62 195,148 120,190 45,148 45,62"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polygon
          points="120,45 173,75 173,135 120,165 67,135 67,75"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="120" cy="20" r="5" fill="#48ACD6" fillOpacity="0.4" />
        <circle cx="195" cy="62" r="5" fill="#48ACD6" fillOpacity="0.4" />
        <circle cx="195" cy="148" r="5" fill="#0038AE" fillOpacity="0.6" />
        <circle cx="120" cy="190" r="5" fill="#48ACD6" fillOpacity="0.4" />
        <circle cx="45" cy="62" r="5" fill="#48ACD6" fillOpacity="0.4" />
      </svg>

      <Container className="relative z-10 py-14 md:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-[#48ACD6]/40 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase text-[#9EE4FF] backdrop-blur-md",
              locale === "th" ? "tracking-wide" : "tracking-[0.16em]"
            )}
          >
            <FlaskConical size={13} className="text-[#48ACD6]" />
            {displayEyebrow}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/80">
            <ShieldCheck size={13} className="text-emerald-400" />
            DERMO-COSMETIC OEM / ODM
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.18] tracking-tight text-white sm:text-4xl md:text-5xl">
          {displayTitle}
        </h1>

        {displayDescription ? (
          <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#CBEBFF]/90 md:text-lg">
            {displayDescription}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

