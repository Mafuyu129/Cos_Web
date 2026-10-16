"use client";

import { ArrowRight, Beaker, CheckCircle2, Sparkles } from "lucide-react";
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

  const badges =
    locale === "th"
      ? ["ปรึกษาทีมวิจัย R&D ฟรี", "MOQ เริ่มต้น 100 ชิ้น", "ดูแลจดแจ้ง อย. ครบวงจร"]
      : ["Free R&D Lab Consultation", "Starter MOQ 100 Pcs", "Full Thai FDA Registration"];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[#48ACD6]/30 bg-gradient-to-br from-[#002066] via-[#0038AE] to-[#1D82AB] p-8 text-white shadow-premium md:p-14">
          {/* Background laboratory grid & glows */}
          <div className="pointer-events-none absolute inset-0 surface-grid opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#48ACD6]/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#0038AE]/60 blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#9EE4FF] backdrop-blur-md">
              <Beaker size={14} className="text-[#48ACD6]" />
              <span>{t("cta.eyebrow")} • CLINICAL OEM / ODM</span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {displayTitle ?? t("cta.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#CBEBFF]/90 md:text-lg">
              {displayDescription ?? t("cta.description")}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/90">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm"
                >
                  <CheckCircle2 size={14} className="text-[#48ACD6]" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Button
                href="/contact"
                variant="light"
                className="bg-white text-[#0038AE] hover:bg-[#E8F7FC]"
              >
                <Sparkles size={16} className="text-[#0038AE]" />
                <span>{t("cta.button")}</span>
                <ArrowRight size={17} />
              </Button>
              <Button
                href="/products"
                variant="secondary"
                className="border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20"
              >
                {locale === "th" ? "ดูสูตรเวชสำอางพร้อมผลิต" : "Explore Clinical Formulas"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

