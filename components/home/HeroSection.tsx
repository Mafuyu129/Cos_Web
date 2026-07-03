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

  return (
    <section className="overflow-hidden border-b border-primary/10 bg-white text-text-dark">
      <Container className="grid min-h-[560px] items-stretch gap-0 px-0 md:min-h-[620px] lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center px-6 py-16 md:px-10 lg:px-0 lg:pr-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
          <h1 className="font-serif text-[56px] font-light leading-[1.08] tracking-normal text-text-dark md:text-[76px]">
            The <em className="font-normal italic text-primary">Blue</em>
            <br />
            Factory
          </h1>
          <p className="mt-6 text-2xl font-light text-primary md:text-3xl">
            {t("hero.subtitle")}
          </p>
          <p className="mt-6 max-w-[420px] text-[15px] font-light leading-8 text-text-muted">
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
          className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#e6ecff] to-[#e8f6fc]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/10" />
          <div className="absolute bottom-12 left-10 h-16 w-16 rounded-full bg-primary/10" />
          <div className="flex items-end gap-6 px-12">
            <div className="flex flex-col items-center gap-3">
              <div className="h-5 w-12 rounded-t-[4px] bg-[#002080]" />
              <div className="relative h-40 w-[72px] overflow-hidden rounded-b-2xl rounded-t-lg bg-primary after:absolute after:left-3 after:top-6 after:h-14 after:w-4 after:rounded-full after:bg-white/20" />
              <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted">Serum</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-4 w-10 rounded-t-[4px] bg-[#3090b8]" />
              <div className="relative h-32 w-[58px] overflow-hidden rounded-b-2xl rounded-t-lg bg-accent after:absolute after:left-3 after:top-5 after:h-12 after:w-3 after:rounded-full after:bg-white/20" />
              <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted">Mist</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-3 w-9 rounded-t-[4px] border border-primary/10 bg-[#e8f6fc]" />
              <div className="relative h-24 w-[54px] overflow-hidden rounded-lg border border-primary/10 bg-white after:absolute after:left-3 after:top-4 after:h-10 after:w-3 after:rounded-full after:bg-primary/10" />
              <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted">Cream</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
