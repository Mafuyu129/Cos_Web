"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "./Button";
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
    <section className="border-b border-primary/10 bg-gradient-to-br from-[#e8f6fc] to-[#e6ecff] py-16 text-text-dark dark:border-white/10 dark:from-[#0b1224] dark:to-[#050816] dark:text-white md:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {t("cta.eyebrow")}
            </p>
            <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl">
              {displayTitle ?? t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-8 text-text-muted dark:text-text-light">
              {displayDescription ?? t("cta.description")}
            </p>
          </div>
          <Button href="/contact">
            {t("cta.button")} <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
