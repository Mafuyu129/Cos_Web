"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FeaturedServices() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-[#F4F9FD] py-16 dark:border-white/10 dark:bg-[#04091A] md:py-24">
      <div className="pointer-events-none absolute inset-0 clinical-dots opacity-40" />
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={locale === "th" ? "ขอบเขตบริการโรงงานเวชสำอาง" : t("home.services.eyebrow")}
            title={
              locale === "th"
                ? "บริการวิจัย พัฒนา และผลิตเวชสำอางครบวงจร"
                : t("home.services.title")
            }
            description={
              locale === "th"
                ? "ครอบคลุมตั้งแต่ผลิตภัณฑ์ดูแลผิวหน้า ผิวกาย เส้นผม อโรมา บรรจุภัณฑ์ และการขึ้นทะเบียน อย. ในมาตรฐานเดียว"
                : t("home.services.description")
            }
          />
          <Button href="/services" variant="secondary">
            <span>{t("home.services.all")}</span>
            <ArrowRight size={16} />
          </Button>
        </div>
        <ServiceGrid limit={6} />
      </Container>
    </section>
  );
}

