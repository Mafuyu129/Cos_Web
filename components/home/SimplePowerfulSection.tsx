"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  Cpu,
  FileCheck,
  FlaskConical,
  Layers,
  Microscope,
  Sparkles
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SimplePowerfulSection() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const pillars =
    locale === "th"
      ? [
          {
            icon: Beaker,
            code: "LAB // 01",
            title: "วิจัยและพัฒนาสูตรเวชสำอาง R&D",
            desc: "คัดสรรสารสกัด Active เข้มข้นระดับคลินิก ปรับเนื้อสัมผัส ค่า pH และความคงตัวของสูตรโดยทีมนักเคมีเฉพาะทาง",
            tag: "Clinical R&D"
          },
          {
            icon: Cpu,
            code: "LAB // 02",
            title: "มาตรฐานห้องสะอาด & เครื่องจักรแม่นยำ",
            desc: "ควบคุมความสะอาดทุกขั้นตอนด้วยระบบเครื่องชั่ง เครื่องผสมความเร็วสูง เครื่องบรรจุ และเครื่องซีลมาตรฐาน",
            tag: "Cleanroom Tech"
          },
          {
            icon: FileCheck,
            code: "LAB // 03",
            title: "ขึ้นทะเบียน อย. & บันทึก BMR 100%",
            desc: "ดูแลเอกสารจดแจ้งเครื่องสำอางถูกต้องตามกฎหมาย พร้อมจัดทำ Batch Manufacturing Record ตรวจสอบย้อนกลับได้",
            tag: "FDA & BMR"
          },
          {
            icon: Layers,
            code: "LAB // 04",
            title: "บรรจุภัณฑ์เวชสำอางพร้อมจัดจำหน่าย",
            desc: "แนะนำขวดดรอปเปอร์ ขวดปั๊มสุญญากาศ (Airless) กระปุก และฉลากที่ช่วยรักษาความเสถียรของสารสกัด",
            tag: "Dermo Packaging"
          }
        ]
      : [
          {
            icon: Beaker,
            code: "LAB // 01",
            title: "Dermo-Cosmetic R&D Formulation",
            desc: "High-purity clinical actives, balanced pH, and stability-tested textures engineered by our cosmetic chemists.",
            tag: "Clinical R&D"
          },
          {
            icon: Cpu,
            code: "LAB // 02",
            title: "Cleanroom Precision Manufacturing",
            desc: "Controlled hygiene protocols with precision weighing, high-shear mixing, automated filling and sealing.",
            tag: "Cleanroom Tech"
          },
          {
            icon: FileCheck,
            code: "LAB // 03",
            title: "100% Thai FDA & BMR Traceability",
            desc: "Full cosmetic regulatory filing and complete Batch Manufacturing Records for every production lot.",
            tag: "FDA & BMR"
          },
          {
            icon: Layers,
            code: "LAB // 04",
            title: "Clinical Packaging & Launch",
            desc: "Airless pumps, UV-protected droppers, and compliant clinical labeling ready for retail and clinic channels.",
            tag: "Dermo Packaging"
          }
        ];

  const activeMatrix =
    locale === "th"
      ? [
          {
            code: "DERMO-PROTOCOL 01",
            tab: "ลดสิว & คุมความมัน",
            concern: "Acne-Prone & Sebum Control Formula",
            headline: "สูตรเวชสำอางสำหรับผิวเป็นสิวง่าย ลดการอุดตันและรอยแดง",
            mechanism:
              "ผสานการทำงานของ BHA และ Niacinamide ช่วยลดการสะสมของแบคทีเรีย P.acnes ควบคุมความมันส่วนเกิน พร้อมปลอบประโลมผิวอักเสบด้วย Bisabolol 95 และ Allantoin โดยไม่ทำให้ผิวแห้งลอก",
            ph: "pH 5.0 – 5.5",
            texture: "Lightweight的水 Aqua-Serum ซึมไว ไม่เหนอะหนะ",
            actives: ["Niacinamide (Vitamin B3)", "Salicylic Acid (BHA)", "Bisabolol 95", "Witch Hazel", "Allantoin"],
            recommendedProduct: "Clarielle Serum (แคลริแอล เซรั่ม)",
            slug: "clarielle-serum"
          },
          {
            code: "DERMO-PROTOCOL 02",
            tab: "เสริมเกราะผิวแข็งแรง",
            concern: "Skin Barrier Repair & Sensitive Care",
            headline: "สูตรฟื้นบำรุงปราการผิว (Skin Barrier) สำหรับผิวบอบบางแพ้ง่าย",
            mechanism:
              "เติมเต็มโครงสร้างไขมันระหว่างเซลล์ผิวด้วย Ceramide และ Squalane ช่วยล็อกความชุ่มชื้นยาวนาน ลดการสูญเสียน้ำใต้ผิว (TEWL) และลดโอกาสการระคายเคืองจากมลภาวะ",
            ph: "pH 5.5 Balanced",
            texture: "Silky Barrier Emulsion นุ่มลื่น เคลือบปกป้องผิว",
            actives: ["Ceramide Complex", "Plant Squalane", "Niacinamide", "Tocopherol (Vit E)", "Aquaxyl"],
            recommendedProduct: "Veilance Serum (เวลานซ์ เซรั่ม)",
            slug: "veilance-serum"
          },
          {
            code: "DERMO-PROTOCOL 03",
            tab: "ลดจุดด่างดำ & ผิวกระจ่างใส",
            concern: "Melanin Control & Clinical Radiance",
            headline: "สูตรตัดวงจรความหมองคล้ำ รอยสิว และปรับสีผิวสม่ำเสมอ",
            mechanism:
              "ทำงานร่วมกันระหว่าง Tranexamic Acid และ Vitamin B3 ช่วยยับยั้งการส่งผ่านเม็ดสีเมลานินสู่ผิวชั้นบน พร้อม Panthenol และ Aquaxyl เติมน้ำให้ผิวดูฉ่ำโกลว์สุขภาพดี",
            ph: "pH 5.2 – 5.8",
            texture: "Crystal Essence Serum ซึมลึก ให้ผิวโกลว์ใส",
            actives: ["Tranexamic Acid", "Niacinamide", "Panthenol (Vit B5)", "Aquaxyl", "Allantoin"],
            recommendedProduct: "Lumea Serum (ลูเมีย เซรั่ม)",
            slug: "lumea-serum"
          },
          {
            code: "DERMO-PROTOCOL 04",
            tab: "เปปไทด์ชะลอวัย & ผิวอิ่มฟู",
            concern: "Peptide Firming & Cellular Rejuvenation",
            headline: "สูตรนวัตกรรมเปปไทด์เข้มข้น เพื่อผิวกระชับ เรียบเนียน ดูอ่อนเยาว์",
            mechanism:
              "ใช้ Copper Peptide และ Tripeptide ช่วยส่งสัญญาณกระตุ้นการสร้างคอลลาเจนตามธรรมชาติ ผสานสารสกัดโสมดำ (Black Ginseng) ต้านอนุมูลอิสระและคืนความยืดหยุ่นให้ผิว",
            ph: "pH 5.5 – 6.0",
            texture: "Concentrated Peptide Ampoule เข้มข้นแต่บางเบา",
            actives: ["Copper Peptide", "Tripeptide", "Black Ginseng Extract", "Vitamin E", "Bloomsurfact"],
            recommendedProduct: "Eloria Serum (เอโลเรีย เซรั่ม)",
            slug: "eloria-serum"
          }
        ]
      : [
          {
            code: "DERMO-PROTOCOL 01",
            tab: "Acne & Sebum Control",
            concern: "Acne-Prone & Blemish Control",
            headline: "Clinical Clarifying Formula for Acne-Prone & Oily Skin",
            mechanism:
              "Synergizes Niacinamide and soothing botanicals (Bisabolol 95, Witch Hazel, Allantoin) to regulate sebum, calm redness, and refine pores without compromising the skin barrier.",
            ph: "pH 5.0 – 5.5",
            texture: "Fast-absorbing Weightless Aqua Serum",
            actives: ["Niacinamide (Vitamin B3)", "Salicylic Acid (BHA)", "Bisabolol 95", "Witch Hazel", "Allantoin"],
            recommendedProduct: "Clarielle Serum",
            slug: "clarielle-serum"
          },
          {
            code: "DERMO-PROTOCOL 02",
            tab: "Skin Barrier Repair",
            concern: "Lipid Barrier & Sensitive Skin Care",
            headline: "Biomimetic Lipid & Ceramide Complex for Compromised Skin",
            mechanism:
              "Replenishes intercellular lipids with Ceramide and Squalane to reduce trans-epidermal water loss (TEWL), soothe sensitivity, and restore long-lasting resilience.",
            ph: "pH 5.5 Balanced",
            texture: "Comforting Silky Barrier Serum",
            actives: ["Ceramide Complex", "Plant Squalane", "Niacinamide", "Tocopherol (Vit E)", "Aquaxyl"],
            recommendedProduct: "Veilance Serum",
            slug: "veilance-serum"
          },
          {
            code: "DERMO-PROTOCOL 03",
            tab: "Melanin & Brightening",
            concern: "Hyperpigmentation & Radiance",
            headline: "Multi-Pathway Brightening with Tranexamic Acid & B3",
            mechanism:
              "Targets dark spots, post-acne marks, and uneven tone using Tranexamic Acid and Niacinamide while Aquaxyl and Panthenol deeply hydrate for a glass-skin glow.",
            ph: "pH 5.2 – 5.8",
            texture: "Luminous Essence Serum",
            actives: ["Tranexamic Acid", "Niacinamide", "Panthenol (Vit B5)", "Aquaxyl", "Allantoin"],
            recommendedProduct: "Lumea Serum",
            slug: "lumea-serum"
          },
          {
            code: "DERMO-PROTOCOL 04",
            tab: "Peptide Anti-Aging",
            concern: "Collagen Support & Firming",
            headline: "Bio-Active Copper Peptide & Black Ginseng Rejuvenation",
            mechanism:
              "Combines Copper Peptide and Tripeptide with antioxidant-rich Black Ginseng to visibly smooth fine lines, improve elasticity, and restore youthful bounce.",
            ph: "pH 5.5 – 6.0",
            texture: "Rich Yet Weightless Peptide Ampoule",
            actives: ["Copper Peptide", "Tripeptide", "Black Ginseng Extract", "Vitamin E", "Bloomsurfact"],
            recommendedProduct: "Eloria Serum",
            slug: "eloria-serum"
          }
        ];

  const currentProtocol = activeMatrix[activeTab];

  return (
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-white py-16 dark:border-white/10 dark:bg-[#081128] md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#48ACD6]/10 blur-[110px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#0038AE]/10 blur-[110px]" />

      <Container className="space-y-16">
        {/* Top Row: Clinical Philosophy & 4 Core Pillars */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <FadeUp className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0038AE]/15 bg-gradient-to-r from-[#0038AE]/10 to-[#48ACD6]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0038AE] dark:border-[#48ACD6]/30 dark:text-[#48ACD6]">
              <Microscope size={14} className="text-[#48ACD6]" />
              <span>{locale === "th" ? "มาตรฐานการวิจัยและผลิตเวชสำอาง" : "CLINICAL COSMECEUTICAL STANDARD"}</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-text-dark dark:text-white sm:text-4xl">
              {locale === "th" ? (
                <>
                  วิทยาศาสตร์เวชสำอางที่{" "}
                  <span className="text-brand-gradient">วัดผลได้จริง</span> เพื่อความสำเร็จของแบรนด์คุณ
                </>
              ) : (
                <>
                  Science-Backed{" "}
                  <span className="text-brand-gradient">Dermo-Cosmetics</span> Engineered for Brand Growth
                </>
              )}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-text-muted dark:text-text-light/85">
              {locale === "th"
                ? "Pherada Cosmetics ออกแบบกระบวนการทำงานให้ตอบโจทย์เจ้าของแบรนด์เวชสำอางและสกินแคร์ยุคใหม่ เน้นความโปร่งใสของส่วนผสม (Active Transparency) เอกสารควบคุมคุณภาพระดับห้องปฏิบัติการ (BMR) และการขึ้นทะเบียน อย. ที่ถูกต้อง 100%"
                : "Pherada Cosmetics bridges laboratory formulation science with turnkey OEM/ODM execution—offering active ingredient transparency, traceable Batch Manufacturing Records (BMR), and 100% Thai FDA compliance."}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#0038AE]/10 pt-6 dark:border-white/10">
              <div className="rounded-xl bg-[#F4F9FD] p-3.5 dark:bg-white/[0.04]">
                <p className="text-2xl font-extrabold text-[#0038AE] dark:text-[#48ACD6]">8+</p>
                <p className="mt-0.5 text-xs text-text-muted dark:text-text-light/80">
                  {locale === "th" ? "สูตรเวชสำอางหลัก" : "Clinical Formulas"}
                </p>
              </div>
              <div className="rounded-xl bg-[#F4F9FD] p-3.5 dark:bg-white/[0.04]">
                <p className="text-2xl font-extrabold text-[#0038AE] dark:text-[#48ACD6]">7 Steps</p>
                <p className="mt-0.5 text-xs text-text-muted dark:text-text-light/80">
                  {locale === "th" ? "โปรโตคอลการผลิต" : "Lab Workflow"}
                </p>
              </div>
              <div className="rounded-xl bg-[#F4F9FD] p-3.5 dark:bg-white/[0.04]">
                <p className="text-2xl font-extrabold text-[#0038AE] dark:text-[#48ACD6]">BMR</p>
                <p className="mt-0.5 text-xs text-text-muted dark:text-text-light/80">
                  {locale === "th" ? "ตรวจสอบย้อนกลับได้" : "Full Traceability"}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.code}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-gradient-to-b from-white to-[#F4F9FD] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:from-[#0D1936] dark:to-[#081128]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6] opacity-75 transition group-hover:opacity-100" />
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white shadow-md">
                          <Icon size={20} />
                        </div>
                        <span className="rounded-md border border-[#0038AE]/15 bg-[#0038AE]/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0038AE] dark:border-[#48ACD6]/30 dark:bg-[#48ACD6]/10 dark:text-[#48ACD6]">
                          {pillar.code} • {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug text-text-dark dark:text-white">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-text-muted dark:text-text-light/80 sm:text-sm">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 border-t border-[#0038AE]/10 pt-3 text-xs font-semibold text-[#0038AE] dark:border-white/10 dark:text-[#48ACD6]">
                      <CheckCircle2 size={14} className="text-[#48ACD6]" />
                      <span>{locale === "th" ? "รับรองมาตรฐาน Pherada Lab" : "Pherada Lab Verified"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>

        {/* Bottom Row: Interactive Clinical Active Formulation Explorer */}
        <FadeUp delay={0.12}>
          <div className="overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-br from-[#F4F9FD] via-white to-[#E8F6FC] p-6 shadow-soft dark:border-white/10 dark:from-[#04091A] dark:via-[#0D1936] dark:to-[#07142E] md:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-[#0038AE]/12 pb-6 dark:border-white/10 lg:flex-row lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#0038AE] dark:text-[#48ACD6]">
                  <FlaskConical size={15} className="text-[#48ACD6]" />
                  <span>INTERACTIVE DERMO-ACTIVE FORMULATION MATRIX</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-text-dark dark:text-white sm:text-3xl">
                  {locale === "th"
                    ? "เจาะลึกกลุ่มสารสกัดเวชสำอาง (Active Ingredients) ตามปัญหาผิว"
                    : "Explore Clinical Bio-Active Formulations by Skin Target"}
                </h3>
              </div>

              {/* Category Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {activeMatrix.map((item, idx) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                      activeTab === idx
                        ? "bg-gradient-to-r from-[#0038AE] to-[#48ACD6] text-white shadow-md"
                        : "border border-[#0038AE]/15 bg-white text-text-muted hover:border-[#0038AE] hover:text-[#0038AE] dark:border-white/10 dark:bg-white/[0.05] dark:text-text-light"
                    }`}
                  >
                    {item.tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Protocol Display Panel */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-md bg-[#0038AE]/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#0038AE] dark:bg-[#48ACD6]/20 dark:text-[#48ACD6]">
                  <span>{currentProtocol.code}</span>
                  <span>•</span>
                  <span>{currentProtocol.concern}</span>
                </div>

                <h4 className="mt-3 text-2xl font-extrabold text-text-dark dark:text-white">
                  {currentProtocol.headline}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-text-muted dark:text-text-light/85 sm:text-base">
                  {currentProtocol.mechanism}
                </p>

                <div className="mt-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
                    {locale === "th" ? "สารสำคัญหลักในสูตร (Key Clinical Actives):" : "Key Clinical Actives:"}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {currentProtocol.actives.map((active) => (
                      <span
                        key={active}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#0038AE]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#0038AE] shadow-sm dark:border-[#48ACD6]/30 dark:bg-white/[0.06] dark:text-[#9EE4FF]"
                      >
                        <Sparkles size={12} className="text-[#48ACD6]" />
                        {active}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Spec Card inside Matrix */}
              <div className="rounded-2xl border border-[#0038AE]/20 bg-gradient-to-br from-[#00226B] via-[#0038AE] to-[#1A7DA6] p-6 text-white shadow-lg lg:col-span-5">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9EE4FF]">
                    LAB SPECIFICATION
                  </span>
                  <span className="rounded-full bg-white/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white">
                    {currentProtocol.ph}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#9EE4FF]">
                      {locale === "th" ? "เนื้อสัมผัส (Texture Profile)" : "Texture Profile"}
                    </p>
                    <p className="mt-0.5 font-semibold text-white">{currentProtocol.texture}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#9EE4FF]">
                      {locale === "th" ? "สูตรมาตรฐานแนะนำ (Matched Base Formula)" : "Matched Base Formula"}
                    </p>
                    <p className="mt-0.5 text-base font-bold text-[#9EE4FF]">
                      {currentProtocol.recommendedProduct}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href={`/products/${currentProtocol.slug}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#0038AE] shadow transition hover:bg-[#E8F7FC]"
                  >
                    <span>{locale === "th" ? "ดูสเปกสูตรนี้" : "View Formula Spec"}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20"
                  >
                    {locale === "th" ? "สั่งพัฒนาสูตร" : "Customize"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

