"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "./Button";
import { Container } from "./Container";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title,
  description
}: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="border-b border-primary/10 bg-gradient-to-br from-[#e8f6fc] to-[#e6ecff] py-16 text-text-dark md:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {t("cta.eyebrow")}
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight md:text-5xl">{title ?? t("cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] font-light leading-8 text-text-muted">
              {description ?? t("cta.description")}
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
