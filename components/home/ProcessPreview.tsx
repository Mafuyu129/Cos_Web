"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { processSteps } from "@/data/process";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProcessPreview() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-[#F4F9FD] py-16 dark:border-white/10 dark:bg-[#04091A] md:py-24">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-40" />
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={locale === "th" ? "โปรโตคอลการผลิตเวชสำอาง" : t("home.process.eyebrow")}
            title={t("home.process.title")}
            description={t("home.process.description")}
          />
          <Button href="/process" variant="secondary">
            <span>{t("home.process.all")}</span>
            <ArrowRight size={16} />
          </Button>
        </div>
        <ProcessTimeline steps={processSteps.slice(0, 6)} />
      </Container>
    </section>
  );
}

