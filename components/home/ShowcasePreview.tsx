"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductGrid } from "@/components/showcase/ProductGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ShowcasePreview() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-primary/10 bg-white py-16 dark:border-white/10 dark:bg-dark-section md:py-20">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={t("home.showcase.eyebrow")}
            title={t("home.showcase.title")}
            description={t("home.showcase.description")}
          />
          <Button href="/showcase" variant="secondary">
            {t("home.showcase.all")}
          </Button>
        </div>
        <ProductGrid limit={4} />
      </Container>
    </section>
  );
}
