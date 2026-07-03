"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { processSteps } from "@/data/process";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProcessPreview() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-primary/10 bg-[#f8f9fc] py-16 dark:border-white/10 dark:bg-dark-bg md:py-20">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={t("home.process.eyebrow")}
            title={t("home.process.title")}
            description={t("home.process.description")}
          />
          <Button href="/process" variant="secondary">
            {t("home.process.all")}
          </Button>
        </div>
        <ProcessTimeline steps={processSteps.slice(0, 3)} />
      </Container>
    </section>
  );
}
