"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { locale, t } = useLanguage();
  const eyebrow =
    locale === "th"
      ? "Science-backed cosmetic factory"
      : "OEM / ODM Cosmetic Factory";
  const body =
    locale === "th"
      ? "โรงงานรับผลิตเครื่องสำอาง OEM / ODM แบบครบวงจร ดูแลตั้งแต่สูตร บรรจุภัณฑ์ เอกสาร ไปจนถึงผลิตจริง เพื่อให้แบรนด์เริ่มต้นได้ชัดเจนและมั่นใจ"
      : "Full-service OEM / ODM cosmetic manufacturing, from formula and packaging to documents and production.";
  const title =
    locale === "th"
      ? "โรงงานรับผลิตเครื่องสำอางครบวงจร"
      : "Complete cosmetic manufacturing";
  const subtitle =
    locale === "th"
      ? "OEM / ODM, สูตร, แพ็กเกจ, เอกสาร และผลิตจริง"
      : "OEM / ODM, formula, packaging, documents and production";

  return (
    <section className="overflow-hidden border-b border-primary/10 bg-white text-text-dark dark:border-white/10 dark:bg-dark-bg dark:text-white">
      <Container className="grid min-h-[560px] items-stretch gap-0 px-0 md:min-h-[620px] lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center px-6 py-16 md:px-10 lg:px-0 lg:pr-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h1 className="max-w-[720px] font-serif text-[46px] font-light leading-[1.12] tracking-normal text-text-dark dark:text-white md:text-[62px]">
            {title}
          </h1>
          <p className="mt-6 text-xl font-light text-primary dark:text-accent md:text-2xl">
            {subtitle}
          </p>
          <p className="mt-6 max-w-[520px] text-lg font-light leading-9 text-text-muted dark:text-text-light">
            {body}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">
              {t("hero.primary")} <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="secondary">
              {t("hero.secondary")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#e6ecff] to-[#e8f6fc] dark:from-[#0b1224] dark:to-[#050816]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/10 dark:bg-accent/15" />
          <div className="absolute bottom-12 left-10 h-16 w-16 rounded-full bg-primary/10 dark:bg-white/10" />
          <div className="flex items-end gap-6 px-12">
            <div className="flex flex-col items-center gap-3">
              <div className="h-5 w-12 rounded-t-[4px] bg-[#002080]" />
              <div className="relative h-40 w-[72px] overflow-hidden rounded-b-2xl rounded-t-lg bg-primary after:absolute after:left-3 after:top-6 after:h-14 after:w-4 after:rounded-full after:bg-white/20" />
              <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted dark:text-text-light">Serum</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-4 w-10 rounded-t-[4px] bg-[#3090b8]" />
              <div className="relative h-32 w-[58px] overflow-hidden rounded-b-2xl rounded-t-lg bg-accent after:absolute after:left-3 after:top-5 after:h-12 after:w-3 after:rounded-full after:bg-white/20" />
              <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted dark:text-text-light">Mist</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-3 w-9 rounded-t-[4px] border border-primary/10 bg-[#e8f6fc] dark:border-white/15 dark:bg-white/10" />
              <div className="relative h-24 w-[54px] overflow-hidden rounded-lg border border-primary/10 bg-white after:absolute after:left-3 after:top-4 after:h-10 after:w-3 after:rounded-full after:bg-primary/10 dark:border-white/15 dark:bg-white/10 dark:after:bg-white/15" />
              <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted dark:text-text-light">Cream</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
