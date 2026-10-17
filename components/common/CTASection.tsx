"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";
import { Container } from "./Container";

type CTASectionProps = {
  title?: string;
  description?: string;
  titleTh?: string;
  descriptionTh?: string;
  titleEn?: string;
  descriptionEn?: string;
};

export function CTASection({
  title,
  description,
  titleTh,
  descriptionTh,
  titleEn,
  descriptionEn
}: CTASectionProps) {
  const { locale, t } = useLanguage();
  const displayTitle = locale === "th" ? titleTh ?? title : titleEn ?? title;
  const displayDescription =
    locale === "th" ? descriptionTh ?? description : descriptionEn ?? description;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#030816] py-20 text-white md:py-28">
      {/* Subtle Cobalt Illumination */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0038AE]/40 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#48ACD6]/20 blur-[150px]" />

      {/* Architectural Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-8 hidden select-none font-serif text-[130px] font-light italic leading-none text-white/[0.03] lg:block"
      >
        Pherada Lab
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-10 border border-white/15 bg-white/[0.02] p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
          <div className="lg:col-span-8">
            <div className="editorial-eyebrow text-[#48ACD6]">
              <span>{t("cta.eyebrow")} • THE BLUE FACTORY</span>
            </div>

            <p className="mt-4 font-serif text-2xl font-light italic text-[#9EE4FF] sm:text-3xl">
              “From the Concept to Global Success.”
            </p>

            <h2 className="mt-2 text-3xl font-semibold leading-[1.18] tracking-tight text-white sm:text-4xl md:text-5xl">
              {displayTitle ?? t("cta.title")}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {displayDescription ?? t("cta.description")}
            </p>
          </div>

          <div className="flex flex-col gap-3.5 lg:col-span-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#48ACD6] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#030816] transition hover:bg-white"
            >
              <span>{t("cta.button")}</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={company.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/[0.04] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#48ACD6] hover:text-[#48ACD6]"
            >
              <span>LINE OFFICIAL: {company.line}</span>
              <ArrowUpRight size={15} />
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65 underline underline-offset-4 transition hover:text-white"
            >
              <span>{locale === "th" ? "สำรวจ 8 สูตรมาตรฐานพร้อมผลิต" : "Explore 8 Base Formulas"}</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


