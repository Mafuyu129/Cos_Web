"use client";

import { FadeUp } from "@/components/common/FadeUp";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SimplePowerfulSection() {
  const { locale, t } = useLanguage();
  const title =
    locale === "th" ? (
      <>
        Beauty <em className="italic text-primary">simplified,</em>
        <br />
        science amplified
      </>
    ) : (
      <>
        Beauty <em className="italic text-primary">simplified,</em>
        <br />
        science amplified
      </>
    );
  const bodyOne =
    locale === "th"
      ? "Pherada Cosmetics Ltd. ช่วยให้เจ้าของแบรนด์เริ่มต้นสินค้าได้ง่ายขึ้น ด้วยทีมที่ดูแลตั้งแต่การเลือกสูตร พัฒนาสูตร แพ็กเกจ ฉลาก และเอกสารที่เกี่ยวข้อง"
      : "Pherada Cosmetics Ltd. helps brand owners build cosmetic products with formula selection, R&D, packaging, labeling and document support.";
  const bodyTwo =
    locale === "th"
      ? "เราเน้นความชัดเจนของขั้นตอน งานผลิตที่ตรวจสอบได้ และคำแนะนำที่เหมาะกับโจทย์ของแต่ละแบรนด์"
      : "We focus on clear production steps, traceable workflow and practical guidance for each brand brief.";

  return (
    <section className="border-b border-primary/10 bg-white dark:border-white/10 dark:bg-dark-section">
      <Container className="grid gap-0 px-0 lg:grid-cols-2">
        <FadeUp className="flex min-h-[420px] items-center justify-center border-b border-primary/10 bg-[#f8f9fc] p-12 dark:border-white/10 dark:bg-dark-bg lg:border-b-0 lg:border-r">
          <div className="relative h-[260px] w-[230px]">
            <div className="absolute left-8 top-0 h-8 w-40 rounded-t-lg bg-primary" />
            <div className="absolute bottom-0 left-4 flex h-28 w-44 items-center justify-center rounded-xl border border-primary/10 bg-white dark:border-white/10 dark:bg-white/10">
              <span className="font-serif text-xs uppercase tracking-[0.16em] text-text-muted dark:text-text-light">Pherada</span>
            </div>
            <div className="absolute right-2 top-8 h-5 w-7 rounded-t bg-[#3090b8]" />
            <div className="absolute right-1 top-12 h-36 w-9 rounded-b-3xl rounded-t bg-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.08} className="flex flex-col justify-center px-6 py-16 md:px-12">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{t("home.simple.eyebrow")}</span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-text-dark dark:text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-9 text-text-muted dark:text-text-light">{bodyOne}</p>
          <p className="mt-4 max-w-xl text-lg font-medium leading-9 text-text-muted dark:text-text-light">{bodyTwo}</p>
          <div className="mt-8 flex gap-8 border-t border-primary/10 pt-6 dark:border-white/10">
            {[
              ["8", locale === "th" ? "สูตรจริงในโรงงาน" : "Factory formulas"],
              ["7", locale === "th" ? "ขั้นตอนผลิต" : "Production steps"],
              ["2565", locale === "th" ? "เริ่มจดทะเบียน" : "Registered"]
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-serif text-3xl font-light leading-none text-primary md:text-4xl">{num}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.06em] text-text-muted dark:text-text-light">{label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
