"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  PackageOpen,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { locale } = useLanguage();

  const eyebrow =
    locale === "th"
      ? "PHERADA COSMETICS • โรงงานวิจัยและผลิตเวชสำอาง OEM / ODM ครบวงจร"
      : "PHERADA COSMETICS • CLINICAL COSMECEUTICAL OEM / ODM FACTORY";

  const title =
    locale === "th" ? (
      <>
        เปลี่ยนไอเดียสู่
        <span className="mt-1 block bg-gradient-to-r from-[#0038AE] via-[#0B5ED7] to-[#48ACD6] bg-clip-text text-transparent dark:from-[#68A0FF] dark:via-[#48ACD6] dark:to-[#9EE4FF]">
          แบรนด์เวชสำอางระดับพรีเมียม
        </span>
        เริ่มต้นง่าย ในงบที่คุณกำหนดได้
      </>
    ) : (
      <>
        Turn Your Vision Into a
        <span className="mt-1 block bg-gradient-to-r from-[#0038AE] via-[#0B5ED7] to-[#48ACD6] bg-clip-text text-transparent dark:from-[#68A0FF] dark:via-[#48ACD6] dark:to-[#9EE4FF]">
          Premium Dermo Brand
        </span>
        Engineered for Real Growth
      </>
    );

  const subtitle =
    locale === "th"
      ? "มาตรฐาน อย. 100% • สารสกัดเกรดคลินิก • ผลิตขั้นต่ำเริ่มต้นเพียง 100 ชิ้น"
      : "100% Thai FDA Compliant • Clinical-Grade Actives • Starter MOQ from 100 Pcs";

  const body =
    locale === "th"
      ? "ห้างหุ้นส่วนจำกัด ภีรดา คอสเมติกส์ (Pherada Cosmetics) คือโรงงานวิจัยและรับผลิตเวชสำอางแบบ One-Stop Service ดูแลคุณตั้งแต่คิดค้นสูตร ปรับเนื้อสัมผัส ออกแบบบรรจุภัณฑ์ จดแจ้ง อย. จนถึงผลิตจริง พร้อมส่งเซ็ตตัวอย่างเทสเตอร์ให้ลองใช้บนผิวจริงก่อนสั่งผลิต"
      : "Pherada Cosmetics Ltd. bridges clinical formulation science with turnkey OEM/ODM execution—guiding your brand from active ingredient selection and sensory texture refinement to BMR quality control, Thai FDA filing, and mass production.";

  const highlights =
    locale === "th"
      ? [
          "เริ่มต้นผลิตเพียง 100 ชิ้น (Low MOQ)",
          "ปรับแต่งสารสกัดและเนื้อสูตรเฉพาะแบรนด์",
          "จดแจ้ง อย. และเอกสาร BMR ถูกต้อง 100%",
          "มีเซ็ตตัวอย่างเทสเตอร์ให้ลองใช้จริงก่อนผลิต"
        ]
      : [
          "Low Starter MOQ from 100 Pcs",
          "Bespoke Active Formulations & Textures",
          "100% Thai FDA Registration & BMR",
          "Real Sensory Tester Samples Available"
        ];

  return (
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-gradient-to-b from-[#F4F9FD] via-white to-[#EAF4FC] text-text-dark dark:border-white/10 dark:from-[#04091A] dark:via-[#07122B] dark:to-[#04091A] dark:text-white">
      {/* Subtle Ambient Brand Glows */}
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-50 dark:opacity-25" />
      <div className="pointer-events-none absolute -left-28 -top-20 h-[520px] w-[520px] rounded-full bg-[#0038AE]/12 blur-[130px] dark:bg-[#0038AE]/35" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full bg-[#48ACD6]/15 blur-[130px] dark:bg-[#48ACD6]/20" />

      <Container className="relative z-10 grid items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
        {/* Left Column: Brand Launch Positioning, Value Props & CTAs */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Status Pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#0038AE]/20 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0038AE] shadow-sm backdrop-blur-md dark:border-[#48ACD6]/30 dark:bg-white/[0.06] dark:text-[#48ACD6]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48ACD6] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0038AE] dark:bg-[#48ACD6]" />
            </span>
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-text-dark dark:text-white sm:text-5xl xl:text-[54px]">
            {title}
          </h1>

          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6] sm:text-sm">
            {subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted dark:text-text-light/85 md:text-lg">
            {body}
          </p>

          {/* 4 Brand Guarantee Pills */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-[#0038AE]/10 bg-white/80 px-3.5 py-2.5 text-xs font-semibold text-text-dark shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              >
                <CheckCircle2 size={16} className="shrink-0 text-[#48ACD6]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button href="/contact" className="px-8 py-3.5 text-sm">
              <FlaskConical size={17} />
              <span>{locale === "th" ? "ปรึกษาพัฒนาสูตรฟรี" : "Consult Formula Free"}</span>
              <ArrowRight size={17} />
            </Button>
            <Button href="/products" variant="secondary" className="px-7 py-3.5 text-sm">
              <PackageOpen size={16} className="text-[#48ACD6]" />
              <span>{locale === "th" ? "ดู 8 สูตรมาตรฐาน & สั่งเทสเตอร์" : "8 Standard Formulas & Samples"}</span>
            </Button>
          </div>

          {/* 4-Column Clinical Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                value: "8+",
                label: locale === "th" ? "สูตรเวชสำอางพร้อมผลิต" : "Clinical Base Formulas"
              },
              {
                value: "100",
                label: locale === "th" ? "ขั้นต่ำเริ่มต้น (ชิ้น)" : "Starter MOQ (Pcs)"
              },
              {
                value: "pH 5.5",
                label: locale === "th" ? "สมดุลผิวสุขภาพดี" : "Balanced Dermo pH"
              },
              {
                value: "100%",
                label: locale === "th" ? "จดแจ้ง อย. & ตรวจสอบได้" : "Thai FDA Compliant"
              }
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center rounded-2xl border border-[#0038AE]/12 bg-white/95 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="bg-gradient-to-r from-[#0038AE] to-[#48ACD6] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl dark:from-[#6BA3FF] dark:to-[#48ACD6]">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-xs font-semibold leading-relaxed text-text-muted dark:text-text-light/85">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Luxury Photorealistic Cosmeceutical Visual Showcase */}
        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-b from-[#0A1931] via-[#051026] to-[#04091A] p-3.5 shadow-2xl sm:p-4">
            {/* Main Luxury Bottles Photo */}
            <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
              <Image
                src="/images/hero/luxury-cosmetic-bottles.jpg"
                alt="Pherada Luxury Dermo-Cosmetics Studio Formulation"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Top Glass Badge */}
              <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{locale === "th" ? "สูตรเวชสำอางพร้อมผลิต (Ready Formulas)" : "Clinical Formulas"}</span>
              </div>

              {/* Bottom Inset: Real Texture Swatch Snippet */}
              <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between rounded-xl border border-white/20 bg-black/60 p-3 text-white backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/30">
                    <Image
                      src="/images/hero/cosmetic-texture-swatches.jpg"
                      alt="Sensory texture swatches"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">
                      {locale === "th" ? "สัมผัสเนื้อสูตรจริง (Sensory Test)" : "Real Sensory Textures"}
                    </p>
                    <p className="text-[11px] text-[#9EE4FF]">
                      {locale === "th" ? "เซรั่มฉ่ำน้ำ • ครีมเกราะผิว • แอมพูล" : "Aqua Serum • Barrier Cream"}
                    </p>
                  </div>
                </div>

                <span className="rounded-md border border-[#48ACD6]/40 bg-[#48ACD6]/20 px-2 py-1 font-mono text-[10px] font-bold text-[#9EE4FF]">
                  pH 5.5
                </span>
              </div>
            </div>

            {/* Bottom 2-Column Guarantee Cards */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5 text-white">
                <ShieldCheck size={16} className="shrink-0 text-[#48ACD6]" />
                <div>
                  <p className="font-bold">{locale === "th" ? "มาตรฐาน อย. 100%" : "Thai FDA Certified"}</p>
                  <p className="text-[10px] text-white/60">{locale === "th" ? "ถูกต้องตามกฎหมาย" : "Full Compliance"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5 text-white">
                <Sparkles size={16} className="shrink-0 text-[#FFB800]" />
                <div>
                  <p className="font-bold">{locale === "th" ? "เริ่มต้น 100 ชิ้น" : "MOQ from 100 Pcs"}</p>
                  <p className="text-[10px] text-white/60">{locale === "th" ? "ทุนไม่จม เริ่มง่าย" : "Low Risk Launch"}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
