"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  FlaskConical,
  Microscope,
  ShieldCheck,
  ShoppingBag,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { locale, t } = useLanguage();

  const eyebrow =
    locale === "th"
      ? "PHERADA DERMO-LAB • โรงงานวิจัยและผลิตเวชสำอาง OEM / ODM"
      : "PHERADA DERMO-LAB • CLINICAL COSMECEUTICAL OEM / ODM";

  const title =
    locale === "th" ? (
      <>
        ยกระดับแบรนด์ด้วยมาตรฐาน
        <span className="mt-1 block bg-gradient-to-r from-[#0038AE] via-[#0B5ED7] to-[#48ACD6] bg-clip-text text-transparent dark:from-[#68A0FF] dark:via-[#48ACD6] dark:to-[#9EE4FF]">
          โรงงานผลิตเวชสำอางครบวงจร
        </span>
      </>
    ) : (
      <>
        Clinical-Grade
        <span className="mt-1 block bg-gradient-to-r from-[#0038AE] via-[#0B5ED7] to-[#48ACD6] bg-clip-text text-transparent dark:from-[#68A0FF] dark:via-[#48ACD6] dark:to-[#9EE4FF]">
          Cosmeceutical OEM / ODM Lab
        </span>
      </>
    );

  const subtitle =
    locale === "th"
      ? "Research-Driven Formulation • Active Ingredients เข้มข้น • มาตรฐานห้องสะอาด & จดแจ้ง อย. 100%"
      : "Research-Driven Formulation • High-Purity Clinical Actives • Cleanroom & 100% Thai FDA Compliance";

  const body =
    locale === "th"
      ? "ห้างหุ้นส่วนจำกัด ภีรดา คอสเมติกส์ (Pherada Cosmetics) ผสานวิทยาศาสตร์เวชสำอางเข้ากับการผลิตแบบ One-Stop Service ดูแลตั้งแต่วิจัยสูตร R&D คัดสรรสารสกัดระดับคลินิก บรรจุภัณฑ์ การควบคุมคุณภาพ BMR จนถึงขึ้นทะเบียน อย. พร้อมเปิดให้สั่งขนาดทดลองผ่าน Shopee ทางการ"
      : "Pherada Cosmetics Ltd. combines dermo-cosmetic science with One-Stop OEM/ODM manufacturing—guiding your brand from R&D active formulation and cleanroom production to BMR quality control and Thai FDA registration.";

  const highlights =
    locale === "th"
      ? [
          "พัฒนาสูตรเวชสำอางโดยทีม R&D",
          "สารสกัด Active เกรดคลินิก",
          "บันทึกควบคุมคุณภาพ BMR ทุกแบตช์",
          "ดูแลจดแจ้ง อย. และฉลากครบวงจร"
        ]
      : [
          "Custom Dermo-Cosmetic R&D",
          "Clinical-Grade Active Ingredients",
          "100% Batch Record (BMR) QC",
          "Full Thai FDA & Label Compliance"
        ];

  return (
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-gradient-to-b from-[#F4F9FD] via-white to-[#EAF4FC] text-text-dark dark:border-white/10 dark:from-[#04091A] dark:via-[#07122B] dark:to-[#04091A] dark:text-white">
      {/* Clinical Laboratory Grid & Ambient Brand Glows */}
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-60 dark:opacity-30" />
      <div className="pointer-events-none absolute -left-28 -top-20 h-[520px] w-[520px] rounded-full bg-[#0038AE]/15 blur-[130px] dark:bg-[#0038AE]/35" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full bg-[#48ACD6]/20 blur-[130px] dark:bg-[#48ACD6]/25" />

      <Container className="relative z-10 grid items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
        {/* Left Column: Clinical Positioning, Value Props & CTAs */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Clinical Telemetry Status Pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#0038AE]/20 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0038AE] shadow-sm backdrop-blur-md dark:border-[#48ACD6]/30 dark:bg-white/[0.06] dark:text-[#48ACD6]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48ACD6] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0038AE] dark:bg-[#48ACD6]" />
            </span>
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-text-dark dark:text-white sm:text-5xl xl:text-[56px]">
            {title}
          </h1>

          <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6] sm:text-sm">
            {subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted dark:text-text-light/85 md:text-lg">
            {body}
          </p>

          {/* 4 Clinical Check Pills */}
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
              <span>{t("hero.primary")}</span>
              <ArrowRight size={17} />
            </Button>
            <Button href="/products" variant="secondary" className="px-7 py-3.5 text-sm">
              <ShoppingBag size={16} className="text-[#48ACD6]" />
              <span>{locale === "th" ? "ดูสูตรเวชสำอาง & สั่งขนาดทดลอง" : "Clinical Formulas & Samples"}</span>
            </Button>
          </div>

          {/* 4-Column Clinical Telemetry Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                value: "8+",
                code: "RX-BASE",
                label: locale === "th" ? "สูตรเวชสำอางพร้อมผลิต" : "Clinical Base Formulas"
              },
              {
                value: "100",
                code: "MOQ-PCS",
                label: locale === "th" ? "ขั้นต่ำเริ่มต้น (ชิ้น)" : "Starter MOQ (Pcs)"
              },
              {
                value: "pH 5.5",
                code: "DERMO-SPEC",
                label: locale === "th" ? "สมดุลเกราะป้องกันผิว" : "Skin-Barrier Balanced"
              },
              {
                value: "100%",
                code: "FDA / BMR",
                label: locale === "th" ? "จดแจ้ง อย. ถูกต้อง" : "Thai FDA & BMR Ready"
              }
            ].map((stat) => (
              <div
                key={stat.code}
                className="rounded-2xl border border-[#0038AE]/12 bg-white/90 p-3.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-[#0038AE] to-[#48ACD6] bg-clip-text text-2xl font-extrabold text-transparent dark:from-[#6BA3FF] dark:to-[#48ACD6]">
                    {stat.value}
                  </span>
                  <span className="rounded bg-[#0038AE]/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[#0038AE] dark:bg-[#48ACD6]/20 dark:text-[#48ACD6]">
                    {stat.code}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-text-muted dark:text-text-light/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Dermo-Cosmetic Formulation Laboratory Chamber */}
        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-br from-[#040B24] via-[#00257A] to-[#0B4F7C] p-6 text-white shadow-premium sm:p-7">
            {/* Top Clinical Chamber Header */}
            <div className="relative z-20 flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#48ACD6]/20 text-[#48ACD6]">
                  <Microscope size={17} />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#48ACD6]">
                    PHERADA LAB // CHAMBER 01
                  </p>
                  <p className="text-xs font-semibold text-white">
                    {locale === "th" ? "ห้องปฏิบัติการวิจัยและพัฒนาสูตรเวชสำอาง" : "Dermo-Cosmetic Formulation Suite"}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE R&D
              </span>
            </div>

            {/* Subtle Hexagonal Molecular SVG Background */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 400 460"
              fill="none"
            >
              <g stroke="#48ACD6" strokeWidth="1">
                <polygon points="80,70 120,48 160,70 160,115 120,137 80,115" />
                <polygon points="160,70 200,48 240,70 240,115 200,137 160,115" />
                <polygon points="120,137 160,115 200,137 200,182 160,204 120,182" />
                <polygon points="280,120 320,98 360,120 360,165 320,187 280,165" />
                <line x1="160" y1="204" x2="160" y2="250" strokeDasharray="3 3" />
                <line x1="240" y1="115" x2="280" y2="120" strokeDasharray="3 3" />
              </g>
              <circle cx="160" cy="70" r="4" fill="#48ACD6" />
              <circle cx="200" cy="137" r="4" fill="#48ACD6" />
              <circle cx="120" cy="137" r="4" fill="#0038AE" />
              <circle cx="280" cy="120" r="4" fill="#48ACD6" />
            </svg>

            {/* Glowing Bio-Active Core Orb */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#48ACD6]/30 blur-3xl" />

            {/* Floating Active Molecule Badge 1 */}
            <motion.div
              className="absolute left-5 top-20 z-20 flex items-center gap-2 rounded-xl border border-[#48ACD6]/40 bg-[#04091A]/85 px-3 py-2 shadow-lg backdrop-blur-md"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#48ACD6]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[#48ACD6]">ACTIVE CONCENTRATE</p>
                <p className="text-[11px] font-bold text-white">Niacinamide 10% + BHA</p>
              </div>
            </motion.div>

            {/* Floating Active Molecule Badge 2 */}
            <motion.div
              className="absolute right-5 top-28 z-20 flex items-center gap-2 rounded-xl border border-[#48ACD6]/40 bg-[#04091A]/85 px-3 py-2 shadow-lg backdrop-blur-md"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <Beaker className="h-3.5 w-3.5 text-[#48ACD6]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[#48ACD6]">SKIN BARRIER</p>
                <p className="text-[11px] font-bold text-white">Ceramide NP + Peptides</p>
              </div>
            </motion.div>

            {/* 3D Cosmeceutical Vessels Display */}
            <div className="relative z-10 mt-16 flex items-end justify-center gap-4 pb-6 pt-10 sm:gap-6">
              {/* Vessel 1: Clinical Dropper Ampoule */}
              <motion.div
                className="group flex flex-col items-center"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Rubber bulb & collar */}
                <div className="h-5 w-4 rounded-t-full bg-gradient-to-b from-white to-[#CBEBFF] shadow-sm" />
                <div className="h-3.5 w-9 rounded-t-sm border-b border-[#0038AE]/30 bg-gradient-to-r from-[#d8e6f3] via-white to-[#b8d0e8]" />
                <div className="h-2 w-5 bg-[#48ACD6]/60" />
                {/* Ampoule Glass Body */}
                <div className="relative h-44 w-20 overflow-hidden rounded-b-2xl rounded-t-lg border border-white/30 bg-gradient-to-br from-[#0038AE] via-[#002880] to-[#041238] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
                  {/* Glass Highlight */}
                  <div className="absolute left-1.5 top-2 h-36 w-2 rounded-full bg-white/25 blur-[0.5px]" />
                  {/* Measurement ticks */}
                  <div className="absolute right-1.5 top-6 flex flex-col gap-2 opacity-40">
                    <span className="h-px w-2 bg-white" />
                    <span className="h-px w-1.5 bg-white" />
                    <span className="h-px w-2 bg-white" />
                    <span className="h-px w-1.5 bg-white" />
                  </div>
                  {/* Clinical White Label */}
                  <div className="mt-6 rounded-lg border border-[#48ACD6]/40 bg-white/95 p-2 text-left text-[#0A1931] shadow-sm">
                    <div className="flex items-center justify-between border-b border-[#0038AE]/15 pb-1">
                      <span className="font-mono text-[7px] font-bold tracking-wider text-[#0038AE]">PHERADA</span>
                      <span className="rounded bg-[#0038AE] px-1 font-mono text-[6px] font-bold text-white">RX-02</span>
                    </div>
                    <p className="mt-1 text-[9px] font-extrabold leading-tight text-[#0A1931]">CLARIELLE</p>
                    <p className="font-mono text-[7px] font-semibold text-[#0038AE]">ACNE SERUM</p>
                    <div className="mt-1.5 h-1 w-full rounded-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                    <p className="mt-1 font-mono text-[6px] text-slate-500">30 ML / 1.0 FL.OZ</p>
                  </div>
                </div>
                <span className="mt-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#9EE4FF]">
                  DERMO SERUM
                </span>
              </motion.div>

              {/* Vessel 2: Airless Clinical Pump Bottle (Center Hero) */}
              <motion.div
                className="group flex flex-col items-center"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Airless Pump Cap */}
                <div className="h-6 w-12 rounded-t-lg border border-white/40 bg-gradient-to-b from-white/95 to-[#d8ecf8] shadow-md" />
                <div className="h-2.5 w-14 bg-gradient-to-r from-[#0038AE] via-[#48ACD6] to-[#0038AE]" />
                {/* Pump Bottle Body */}
                <div className="relative h-52 w-24 overflow-hidden rounded-b-2xl border border-[#48ACD6]/50 bg-gradient-to-br from-[#48ACD6] via-[#1778A8] to-[#0038AE] p-3 shadow-[0_24px_50px_rgba(0,20,60,0.6)]">
                  <div className="absolute left-2 top-2 h-44 w-2.5 rounded-full bg-white/30 blur-[0.5px]" />
                  {/* Clinical Label */}
                  <div className="mt-6 rounded-xl border border-white/60 bg-white/95 p-2.5 text-left text-[#0A1931] shadow-md">
                    <div className="flex items-center justify-between border-b border-[#0038AE]/15 pb-1">
                      <span className="font-mono text-[7px] font-bold tracking-wider text-[#0038AE]">PHERADA LAB</span>
                      <span className="rounded bg-[#48ACD6] px-1 font-mono text-[6px] font-bold text-[#04091A]">RX-05</span>
                    </div>
                    <p className="mt-1.5 text-[10px] font-extrabold leading-tight text-[#0A1931]">ELORIA</p>
                    <p className="font-mono text-[7px] font-semibold text-[#0038AE]">PEPTIDE COMPLEX</p>
                    <p className="mt-1 text-[6.5px] leading-tight text-slate-600">
                      Copper Tripeptide-1 &amp; Barrier Matrix
                    </p>
                    <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                    <p className="mt-1 font-mono text-[6px] text-slate-500">50 ML • AIRLESS</p>
                  </div>
                </div>
                <span className="mt-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-white">
                  AIRLESS ACTIVES
                </span>
              </motion.div>

              {/* Vessel 3: Clinical Barrier Cream Jar */}
              <motion.div
                className="group flex flex-col items-center"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Jar Lid */}
                <div className="h-5 w-20 rounded-t-lg border-b border-[#0038AE]/25 bg-gradient-to-r from-[#d9e8f5] via-white to-[#c2d9ed] shadow" />
                {/* Jar Body */}
                <div className="relative h-28 w-[84px] overflow-hidden rounded-b-2xl border border-white/40 bg-gradient-to-b from-white via-[#EBF6FC] to-[#BCE6F9] p-2.5 shadow-xl">
                  <div className="mt-1.5 rounded-lg border border-[#0038AE]/20 bg-white/95 p-2 text-left text-[#0A1931]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[6.5px] font-bold text-[#0038AE]">PHERADA</span>
                      <span className="font-mono text-[6px] font-bold text-[#48ACD6]">RX-06</span>
                    </div>
                    <p className="mt-0.5 text-[8.5px] font-extrabold text-[#0A1931]">AERI MOISTURE</p>
                    <p className="font-mono text-[6.5px] text-[#0038AE]">HYALURON + B12</p>
                    <div className="mt-1 h-0.5 w-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                  </div>
                </div>
                <span className="mt-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#9EE4FF]">
                  DERMO CREAM
                </span>
              </motion.div>
            </div>

            {/* Bottom Lab Telemetry Footer */}
            <div className="relative z-20 mt-2 grid grid-cols-2 gap-2 rounded-2xl border border-white/15 bg-[#04091A]/70 p-3 text-[11px] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="shrink-0 text-[#48ACD6]" />
                <div>
                  <p className="font-mono text-[9px] text-white/60">QUALITY CONTROL</p>
                  <p className="font-semibold text-white">
                    {locale === "th" ? "มาตรฐาน BMR & อย." : "BMR & Thai FDA Verified"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                <FlaskConical size={15} className="shrink-0 text-[#48ACD6]" />
                <div>
                  <p className="font-mono text-[9px] text-white/60">CUSTOM R&D</p>
                  <p className="font-semibold text-white">
                    {locale === "th" ? "พัฒนาสูตรเฉพาะแบรนด์" : "Bespoke Active Lab"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

