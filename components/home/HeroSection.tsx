"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker, CheckCircle2, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { locale, t } = useLanguage();

  const eyebrow =
    locale === "th"
      ? "The Blue Factory • Scientific Cosmetic OEM / ODM"
      : "The Blue Factory • Scientific Cosmetic OEM / ODM";

  const title =
    locale === "th" ? (
      <>
        โรงงานรับผลิตเครื่องสำอาง
        <span className="block text-primary dark:text-accent">
          ครบวงจร One Stop Service
        </span>
      </>
    ) : (
      <>
        Complete Cosmetic
        <span className="block text-primary dark:text-accent">
          Manufacturing Factory
        </span>
      </>
    );

  const subtitle =
    locale === "th"
      ? "OEM / ODM, สูตรมาตรฐาน & พัฒนาสูตรเฉพาะ, บรรจุภัณฑ์ และจดแจ้ง อย."
      : "OEM / ODM, standard & custom formulations, packaging and Thai FDA registration";

  const body =
    locale === "th"
      ? "Pherada Cosmetics Ltd. ดูแลคุณตั้งแต่คอนเซปต์แรก การพัฒนาสูตรในห้องปฏิบัติการ การผลิตตามมาตรฐานความสะอาด จนถึงการส่งมอบสินค้าพร้อมจัดจำหน่าย พร้อมเปิดให้สั่งซื้อขนาดทดลองผ่าน Shopee ทางการได้ทันที"
      : "Pherada Cosmetics Ltd. guides your brand from initial brief and laboratory R&D to cleanroom manufacturing and ready-to-sell delivery, with sample ordering available via Shopee.";

  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-b from-white via-light-bg to-white text-text-dark dark:border-white/10 dark:from-dark-bg dark:via-dark-section dark:to-dark-bg dark:text-white">
      {/* Ambient background light gradients */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/20" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[110px] dark:bg-accent/15" />

      <Container className="relative z-10 grid min-h-[620px] items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
        {/* Left Column: Headlines, Value Props & CTAs */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-[2px] border border-primary/20 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/5 dark:text-accent">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-normal text-text-dark dark:text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-4 font-serif text-lg font-light text-primary dark:text-accent md:text-xl">
            {subtitle}
          </p>

          <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-text-muted dark:text-text-light md:text-lg">
            {body}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button href="/contact">
              {t("hero.primary")} <ArrowRight size={18} />
            </Button>
            <Button href="/products" variant="secondary" className="gap-2">
              <ShoppingBag size={16} />
              {locale === "th" ? "ดูสินค้า & สั่งขนาดทดลอง" : "Products & Samples"}
            </Button>
          </div>

          {/* Metrics bar */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-primary/10 pt-6 dark:border-white/10">
            <div>
              <p className="font-serif text-2xl font-medium text-primary dark:text-accent sm:text-3xl">8+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted dark:text-text-light">
                {locale === "th" ? "สูตรมาตรฐานพร้อมผลิต" : "Base Formulas"}
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-medium text-primary dark:text-accent sm:text-3xl">100</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted dark:text-text-light">
                {locale === "th" ? "MOQ เริ่มต้น (ชิ้น)" : "Starter MOQ (pcs)"}
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-medium text-emerald-600 dark:text-emerald-400 sm:text-3xl">100%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted dark:text-text-light">
                {locale === "th" ? "จดแจ้ง อย. ถูกต้อง" : "Thai FDA Ready"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Luxury Cosmetic Formulation Showcase */}
        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          {/* Main Visual Frame */}
          <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[4px] border border-primary/15 bg-gradient-to-br from-[#f0f5ff] via-white to-[#e8f6fc] p-8 shadow-premium backdrop-blur-md dark:border-white/10 dark:from-[#0b1224] dark:via-dark-card dark:to-[#050816]">
            {/* Subtle Lab Blueprint Grid Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] surface-grid dark:opacity-[0.06]" />

            {/* Glowing laboratory orb in center */}
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl dark:bg-accent/15" />

            {/* Floating Science Tag 1 (Top Left) */}
            <motion.div
              className="absolute left-4 top-5 z-20 flex items-center gap-2 rounded-[2px] border border-primary/20 bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-md dark:border-white/15 dark:bg-dark-card/95"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-[11px] font-semibold text-text-dark dark:text-white">
                Niacinamide 10% + Zinc
              </span>
            </motion.div>

            {/* Floating Science Tag 2 (Bottom Right) */}
            <motion.div
              className="absolute bottom-5 right-4 z-20 flex items-center gap-2 rounded-[2px] border border-accent/30 bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-md dark:border-white/15 dark:bg-dark-card/95"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Beaker className="h-3.5 w-3.5 text-primary dark:text-accent" />
              <span className="text-[11px] font-semibold text-text-dark dark:text-white">
                Hyaluronic Complex
              </span>
            </motion.div>

            {/* Cosmetic Bottles Architectural Display */}
            <div className="relative z-10 flex items-end justify-center gap-6 pt-6">
              {/* Serum Dropper Bottle */}
              <motion.div
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                {/* Dropper Cap */}
                <div className="relative flex flex-col items-center">
                  <div className="h-4 w-4 rounded-t-sm bg-[#1a2542] dark:bg-[#2a3860]" />
                  <div className="h-4 w-12 rounded-t-[2px] border-b border-black/20 bg-[#002b8a] dark:bg-[#1a44a6]" />
                </div>
                {/* Bottle Body */}
                <div className="relative h-48 w-20 overflow-hidden rounded-b-xl rounded-t-[2px] border border-primary/30 bg-gradient-to-br from-[#0038AE] via-[#0b2866] to-[#051438] p-3 text-center shadow-2xl">
                  {/* Glass highlight sheen */}
                  <div className="absolute left-2 top-2 h-40 w-2.5 rounded-full bg-white/20 blur-[1px]" />
                  {/* Bottle Label */}
                  <div className="mt-8 rounded-[2px] border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">Pherada</p>
                    <p className="mt-0.5 font-serif text-[10px] font-semibold uppercase text-white">Active Serum</p>
                    <p className="mt-1 text-[7px] text-white/70">30 ml • 1.0 fl.oz</p>
                  </div>
                </div>
                <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted dark:text-text-light">
                  Serum
                </span>
              </motion.div>

              {/* Essence / Mist Spray Bottle */}
              <motion.div
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                {/* Spray Cap */}
                <div className="relative flex flex-col items-center">
                  <div className="h-7 w-9 rounded-t-[2px] bg-[#3a9ec9] dark:bg-[#48acd6]" />
                  <div className="h-2 w-11 bg-[#257d9f]" />
                </div>
                {/* Bottle Body */}
                <div className="relative h-40 w-16 overflow-hidden rounded-b-xl rounded-t-[2px] border border-accent/40 bg-gradient-to-br from-[#48ACD6] via-[#2a87ad] to-[#125370] p-2.5 text-center shadow-xl">
                  <div className="absolute left-2 top-2 h-32 w-2 rounded-full bg-white/25 blur-[1px]" />
                  <div className="mt-6 rounded-[2px] border border-white/25 bg-white/15 p-1.5 backdrop-blur-sm">
                    <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/90">Pherada</p>
                    <p className="mt-0.5 font-serif text-[9px] font-semibold uppercase text-white">Hydra Mist</p>
                    <p className="mt-1 text-[6px] text-white/80">100 ml</p>
                  </div>
                </div>
                <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted dark:text-text-light">
                  Mist
                </span>
              </motion.div>

              {/* Cream Luxury Jar */}
              <motion.div
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                {/* Jar Metallic Lid */}
                <div className="h-5 w-16 rounded-t-[3px] border-b border-black/15 bg-gradient-to-r from-[#d9e2ec] via-[#f0f4f8] to-[#bcccdc] shadow-sm dark:from-[#334155] dark:via-[#475569] dark:to-[#1e293b]" />
                {/* Jar Glass Body */}
                <div className="relative h-28 w-[68px] overflow-hidden rounded-b-lg border border-primary/20 bg-gradient-to-b from-white to-[#e8f3fa] p-2 text-center shadow-lg dark:border-white/20 dark:from-[#111a2e] dark:to-[#0a1120]">
                  <div className="absolute left-2 top-1 h-20 w-2 rounded-full bg-primary/10 blur-[1px] dark:bg-white/15" />
                  <div className="mt-3 rounded-[2px] border border-primary/15 bg-white/80 p-1.5 dark:border-white/15 dark:bg-white/5">
                    <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-primary dark:text-accent">Lab</p>
                    <p className="mt-0.5 font-serif text-[8px] font-semibold text-text-dark dark:text-white">Moisture</p>
                    <p className="text-[6px] text-text-muted dark:text-text-light">50 g</p>
                  </div>
                </div>
                <span className="font-serif text-xs uppercase tracking-[0.14em] text-text-muted dark:text-text-light">
                  Cream
                </span>
              </motion.div>
            </div>

            {/* Quality Standard Bar At Bottom */}
            <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between border-t border-primary/10 pt-2 text-[10px] text-text-muted dark:border-white/10 dark:text-text-light">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 size={12} />
                {locale === "th" ? "แล็บมาตรฐานสากล" : "GMP Certified Lab"}
              </span>
              <span className="font-mono uppercase tracking-wider">
                {locale === "th" ? "พัฒนาสูตรเฉพาะคุณ" : "Custom R&D Available"}
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
