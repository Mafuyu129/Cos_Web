"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductGrid } from "@/components/showcase/ProductGrid";
import { ShopeeBanner } from "@/components/showcase/ShopeeBanner";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ShowcasePreview() {
  const { locale, t } = useLanguage();

  return (
    <section className="border-b border-[#0038AE]/15 bg-white py-16 dark:border-white/10 dark:bg-[#081128] md:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={locale === "th" ? "สูตรมาตรฐานห้องแล็บ (RX BASE FORMULAS)" : t("home.showcase.eyebrow")}
            title={locale === "th" ? "สูตรเวชสำอางและสกินแคร์พร้อมผลิต" : t("home.showcase.title")}
            description={
              locale === "th"
                ? "คัดสรรสารสกัดเข้มข้นระดับคลินิก พร้อมข้อมูล Active Ingredients ชัดเจน สามารถสั่งขนาดทดลองไปทดสอบเนื้อสัมผัสผ่าน Shopee ทางการได้ทันที"
                : t("home.showcase.description")
            }
          />
          <Button href="/products" variant="secondary">
            <span>{locale === "th" ? "ดูสูตรทั้งหมด (8 สูตร)" : t("home.showcase.all")}</span>
            <ArrowRight size={16} />
          </Button>
        </div>
        <ProductGrid limit={4} />
        <div className="mt-12">
          <ShopeeBanner />
        </div>
      </Container>
    </section>
  );
}

