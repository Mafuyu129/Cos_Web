"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FeaturedServices() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-primary/10 bg-white py-16 dark:border-white/10 dark:bg-dark-section md:py-20">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={t("home.services.eyebrow")}
            title={t("home.services.title")}
            description={t("home.services.description")}
          />
          <Button href="/services" variant="secondary">
            {t("home.services.all")}
          </Button>
        </div>
        <ServiceGrid limit={3} />
      </Container>
    </section>
  );
}
