"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SimplePowerfulSection() {
  const { locale } = useLanguage();
  const [activeTexture, setActiveTexture] = useState(0);

  const factoryPillars =
    locale === "th"
      ? [
          {
            num: "01",
            en: "OEM • Standard Formulas",
            title: "รับผลิตตามสูตรมาตรฐานพร้อมจำหน่าย (Low MOQ 100 ชิ้น)",
            desc: "คัดสรรสูตรเวชสำอางที่ผ่านการทดสอบความเสถียรและผลลัพธ์แล้ว พร้อมผลิตภายใต้ชื่อแบรนด์ของคุณด้วยจำนวนขั้นต่ำเพียง 100 ชิ้น"
          },
          {
            num: "02",
            en: "ODM • Bespoke Formulation",
            title: "พัฒนาสูตรใหม่และออกแบบเนื้อสัมผัสเฉพาะแบรนด์",
            desc: "ปรับจูนความเข้มข้นของสารสกัด Active เนื้อสัมผัส สี กลิ่น และค่า pH 5.5 ให้เป็นเอกลักษณ์หนึ่งเดียวในตลาดโดยทีมนักเคมี R&D"
          },
          {
            num: "03",
            en: "R&D • Clinical Active Science",
            title: "วิจัยสารสกัดเวชสำอางเกรดคลินิกที่วัดผลได้จริง",
            desc: "ผสานสารสำคัญที่มีงานวิจัยรองรับ เช่น Copper Peptide, Tranexamic Acid, Ceramide Complex และ BHA ในสัดส่วนที่ปลอดภัยและทรงประสิทธิภาพ"
          },
          {
            num: "04",
            en: "One-Stop • Packaging, FDA & BMR",
            title: "ดูแลบรรจุภัณฑ์ จดแจ้ง อย. และเอกสาร BMR ครบวงจร",
            desc: "บริการครบจบในที่เดียว ตั้งแต่คัดเลือกขวดดรอปเปอร์/ปั๊มสุญญากาศ ออกแบบฉลาก ยื่นจดแจ้ง อย. และบันทึก Batch Manufacturing Record ทุกการผลิต"
          }
        ]
      : [
          {
            num: "01",
            en: "OEM • Standard Formulas",
            title: "Ready-to-Launch Clinical Formulas (Starter MOQ 100 Pcs)",
            desc: "Stability-tested dermo-cosmetic base formulas ready for private-label production under your brand starting at 100 pieces."
          },
          {
            num: "02",
            en: "ODM • Bespoke Formulation",
            title: "Custom Formula & Sensory Texture Engineering",
            desc: "Tailor active concentrations, viscosity, skin feel, scent direction, and balanced pH 5.5 exclusively for your brand positioning."
          },
          {
            num: "03",
            en: "R&D • Clinical Active Science",
            title: "Evidence-Based Bio-Active Ingredient Systems",
            desc: "Formulated with proven clinical actives—Copper Peptide, Tranexamic Acid, Ceramide Complex, and Salicylic Acid—for visible skin transformation."
          },
          {
            num: "04",
            en: "One-Stop • Packaging, FDA & BMR",
            title: "Turnkey Packaging, Thai FDA Filing & BMR Traceability",
            desc: "End-to-end execution from airless pump and dropper sourcing to compliant label artwork, Thai FDA notification, and full BMR records."
          }
        ];

  const textureArchitecture =
    locale === "th"
      ? [
          {
            num: "01",
            categoryEn: "SERUM & AMPOULE",
            title: "เซรั่มและแอมพูลเข้มข้น (Concentrated Serum)",
            subtitle: "โมเลกุลขนาดเล็ก ซึมลึกเข้าสู่ผิวอย่างรวดเร็วโดยไม่ทิ้งความเหนอะหนะ",
            sensory:
              "เนื้อสัมผัสแบบ Water-Based ถึง Viscous Essence ที่ออกแบบมาเพื่อนำพาสารสกัด Active เข้มข้น (เช่น Niacinamide, Tranexamic Acid, Copper Peptide) เข้าจัดการปัญหาผิวเฉพาะจุด ทั้งสิว จุดด่างดำ และริ้วรอย",
            viscosity: "Low – Medium (บางเบา ซึมไว)",
            absorption: "Immediate (ซึมเข้าผิวใน 10–15 วินาที)",
            finish: "Dewy / Non-Sticky (ชุ่มชื้นสบายผิว)",
            ph: "pH 5.0 – 5.6",
            actives: ["Niacinamide (Vit B3)", "Tranexamic Acid", "Copper Peptide", "Bisabolol 95"],
            matchedFormula: "Clarielle / Veilance / Lumea / Eloria Serum",
            slug: "clarielle-serum"
          },
          {
            num: "02",
            categoryEn: "CREAM & EMULSION",
            title: "ครีมบำรุงและอิมัลชันเสริมเกราะผิว (Barrier Cream)",
            subtitle: "โครงสร้าง Lamellar Lipid โอบอุ้มและล็อกความชุ่มชื้นยาวนาน",
            sensory:
              "เนื้อครีมนุ่มละมุนที่ผสานสมดุลระหว่างน้ำและน้ำมันสกัดธรรมชาติ ช่วยเคลือบปกป้องชั้นผิว (Skin Barrier) ลดการสูญเสียน้ำใต้ผิว (TEWL) เหมาะสำหรับผิวแห้ง ผิวแพ้ง่าย หรือใช้เป็นไนท์ครีมฟื้นฟูผิว",
            viscosity: "Medium – Rich (เข้มข้น นุ่มลื่น)",
            absorption: " Cushioning (เคลือบปกป้องผิวอย่างนุ่มนวล)",
            finish: "Velvety Satin (เนียนนุ่ม อิ่มฟู)",
            ph: "pH 5.5 Balanced",
            actives: ["Ceramide Complex", "Plant Squalane", "Allantoin", "Aquaxyl", "Vitamin B12"],
            matchedFormula: "Serenia Moisture (ซีเรเนีย มอยส์เจอร์)",
            slug: "serenia-moisture"
          },
          {
            num: "03",
            categoryEn: "HYDRO GEL-CREAM",
            title: "เจลครีมเติมน้ำบางเบา (Hydro-Light Gel)",
            subtitle: "แตกตัวเป็นละอองน้ำเมื่อสัมผัสผิว ตอบโจทย์สภาพอากาศเมืองไทย",
            sensory:
              "นวัตกรรมเนื้อเจลกึ่งครีมที่มอบความเย็นสดชื่นและเติมน้ำให้ผิวทันทีโดยไม่เพิ่มความมันส่วนเกิน เหมาะอย่างยิ่งสำหรับผิวมัน ผิวผสม และผู้ที่ต้องการมอยส์เจอร์ไรเซอร์ทาตอนเช้าก่อนลงกันแดด",
            viscosity: "Light Gel-Emulsion (เจลครีมไร้น้ำหนัก)",
            absorption: "Fast Water-Break (ซึมไว ไม่พันเมคอัพ)",
            finish: "Fresh Matte-Glow (สดชื่น ไม่มันวาว)",
            ph: "pH 5.5 Balanced",
            actives: ["Sodium Hyaluronate", "Vitamin B12", "Rose Extract", "Macadamia Oil"],
            matchedFormula: "Aeri Moisture (แอริ มอยส์เจอร์)",
            slug: "aeri-moisture"
          },
          {
            num: "04",
            categoryEn: "TREATMENT MASK",
            title: "มาสก์ผลัดเซลล์ผิวและบูสต์ออร่า (Treatment Mask)",
            subtitle: "ทรีตเมนต์เข้มข้นพิเศษ ฟื้นบำรุงผิวหมองคล้ำใน 5–10 นาที",
            sensory:
              "เนื้อมาสก์ครีมเจลสีม่วงพาสเทลที่เกลี่ยง่าย ไม่แห้งตึงจนแสบผิว ผสานกรดผลไม้ AHA และ BHA ในระดับที่อ่อนโยนเพื่อช่วยผลัดเซลล์ผิวเสื่อมสภาพ เผยผิวใหม่ที่ดูเรียบเนียนกระจ่างใส",
            viscosity: "Rich Cushion Mask (เนื้อมาสก์เกาะผิวดี)",
            absorption: "5–10 Min Rinse-Off (มาสก์แล้วล้างออก)",
            finish: "Smooth & Radiant (ผิวเนียนนุ่ม กระจ่างใสทันที)",
            ph: "pH 4.5 – 5.0",
            actives: ["Glycolic Acid (AHA)", "Salicylic Acid (BHA)", "Fision Pentafruit", "Aloe Vera"],
            matchedFormula: "Viora Mask (วีโอร่า มาสก์)",
            slug: "viora-mask"
          },
          {
            num: "05",
            categoryEn: "CLEANSER & BODY CARE",
            title: "คลีนเซอร์ โลชั่น สครับ และบอดี้แคร์ (Cleanser & Body)",
            subtitle: "ทำความสะอาดและบำรุงผิวกายด้วยสัมผัสระดับลักชัวรีสปา",
            sensory:
              "ครอบคลุมตั้งแต่เจลล้างหน้าและสบู่เหลวสูตรอ่อนโยนที่ให้ฟองละเอียดนุ่มโดยไม่ทำลายสมดุลผิว ไปจนถึงบอดี้โลชั่น บอดี้ออยล์ และสครับขัดผิวที่โดดเด่นด้วยกลิ่นอโรมาเอกลักษณ์เฉพาะแบรนด์",
            viscosity: "Silky Liquid / Creamy Scrub",
            absorption: "Clean & Comforting (สะอาด นุ่มชุ่มชื้น)",
            finish: "Soft & Supple (ผิวไม่แห้งเอี๊ยดหลังล้าง)",
            ph: "pH 5.5 Skin-Friendly",
            actives: ["Niacinamide", "Aloe Vera Extract", "Natural Botanical Oils", "Gentle Surfactants"],
            matchedFormula: "Velisse Cleanser & Body Care Line",
            slug: "velisse-cleanser"
          }
        ]
      : [
          {
            num: "01",
            categoryEn: "SERUM & AMPOULE",
            title: "Concentrated Clinical Serum & Ampoule",
            subtitle: "Micro-molecular delivery for rapid, deep dermal penetration without tackiness.",
            sensory:
              "Engineered with weightless aqua-gel to silky essence rheology, our serums deliver high-potency bio-actives (Niacinamide, Tranexamic Acid, Copper Peptide) directly to target blemishes, hyperpigmentation, and fine lines.",
            viscosity: "Low – Medium Fluidity",
            absorption: "Immediate (10–15 seconds)",
            finish: "Luminous & Non-Sticky",
            ph: "pH 5.0 – 5.6",
            actives: ["Niacinamide (Vit B3)", "Tranexamic Acid", "Copper Peptide", "Bisabolol 95"],
            matchedFormula: "Clarielle / Veilance / Lumea / Eloria Serum",
            slug: "clarielle-serum"
          },
          {
            num: "02",
            categoryEn: "CREAM & EMULSION",
            title: "Biomimetic Barrier Cream & Emulsion",
            subtitle: "Lamellar lipid architecture that seals hydration and fortifies the skin barrier.",
            sensory:
              "A velvety emulsion balancing aqueous humectants with botanical emollients to prevent trans-epidermal water loss (TEWL) and calm reactive, compromised skin.",
            viscosity: "Medium – Rich Cream",
            absorption: "Cushioning Protective Veil",
            finish: "Velvety Satin Bounce",
            ph: "pH 5.5 Balanced",
            actives: ["Ceramide Complex", "Plant Squalane", "Allantoin", "Aquaxyl", "Vitamin B12"],
            matchedFormula: "Serenia Moisture",
            slug: "serenia-moisture"
          },
          {
            num: "03",
            categoryEn: "HYDRO GEL-CREAM",
            title: "Hydro-Light Water-Break Gel Cream",
            subtitle: "Refreshing moisture burst tailored for humid climates and oily/combination skin.",
            sensory:
              "Transforms upon skin contact into a cooling hydration veil—replenishing moisture reserves without clogging pores or interfering with daily sunscreen and makeup.",
            viscosity: "Weightless Gel-Emulsion",
            absorption: "Rapid Water-Break",
            finish: "Fresh Breathable Glow",
            ph: "pH 5.5 Balanced",
            actives: ["Sodium Hyaluronate", "Vitamin B12", "Rose Extract", "Macadamia Oil"],
            matchedFormula: "Aeri Moisture",
            slug: "aeri-moisture"
          },
          {
            num: "04",
            categoryEn: "TREATMENT MASK",
            title: "Radiance Exfoliating & Resurfacing Mask",
            subtitle: "5–10 minute clinical wash-off treatment for instant luminosity and pore refinement.",
            sensory:
              "A smooth lavender cream-gel mask combining gentle AHA/BHA resurfacing with soothing Aloe Vera and Allantoin to sweep away dullness without irritation.",
            viscosity: "Cushioned Cream-Gel",
            absorption: "5–10 Min Rinse-Off Protocol",
            finish: "Refined, Glass-Skin Radiance",
            ph: "pH 4.5 – 5.0",
            actives: ["Glycolic Acid (AHA)", "Salicylic Acid (BHA)", "Fision Pentafruit", "Aloe Vera"],
            matchedFormula: "Viora Mask",
            slug: "viora-mask"
          },
          {
            num: "05",
            categoryEn: "CLEANSER & BODY CARE",
            title: "pH-Balanced Cleanser, Body Lotion & Spa Care",
            subtitle: "Micro-foam cleansing and sensory body formulations with signature scent profiles.",
            sensory:
              "From non-stripping amino/botanical liquid cleansers to indulgent body lotions, oils, and exfoliating scrubs designed for retail, clinic, and luxury spa brands.",
            viscosity: "Silky Liquid / Emulsion",
            absorption: "Clean & Non-Stripping",
            finish: "Soft, Hydrated Comfort",
            ph: "pH 5.5 Skin-Friendly",
            actives: ["Niacinamide", "Aloe Vera Extract", "Natural Botanical Oils", "Gentle Surfactants"],
            matchedFormula: "Velisse Cleanser & Body Care Line",
            slug: "velisse-cleanser"
          }
        ];

  const currentTexture = textureArchitecture[activeTexture];

  return (
    <section className="relative overflow-hidden border-b border-[#071126]/10 bg-[#F7F9FC] py-20 dark:border-white/10 dark:bg-[#050C1D] md:py-28">
      <Container className="space-y-24">
        {/* PART 1: THE BLUE FACTORY PHILOSOPHY (Editorial Split + Architectural Hairline List) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Editorial Chemist & Lab Visual */}
          <FadeUp className="lg:col-span-5">
            <div className="editorial-eyebrow text-[#0038AE] dark:text-[#48ACD6]">
              <span>THE BLUE FACTORY PHILOSOPHY</span>
            </div>

            <p className="mt-4 font-serif text-3xl font-light italic text-[#0038AE] dark:text-[#9EE4FF] sm:text-4xl">
              “A Simple is Powerful.”
            </p>

            <h2 className="mt-2 text-3xl font-semibold leading-[1.2] tracking-tight text-[#071126] dark:text-white sm:text-4xl">
              {locale === "th"
                ? "ความเรียบง่ายที่ทรงพลัง คือหัวใจของการพัฒนาสูตรเวชสำอาง"
                : "Where Formulation Purity Meets Measurable Skin Efficacy"}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-text-muted dark:text-white/70 sm:text-base">
              {locale === "th"
                ? "ที่ Pherada Cosmetics เราเชื่อว่าสกินแคร์ที่ดีไม่จำเป็นต้องซับซ้อนเกินความจำเป็น แต่ต้องคัดสรรสารสกัด Active ที่ตรงจุด ในความเข้มข้นที่เห็นผลจริง พร้อมเนื้อสัมผัสที่ผู้ใช้หลงรักตั้งแต่ครั้งแรกที่สัมผัส"
                : "At Pherada Cosmetics, we believe extraordinary skincare is born from precision—combining clinically proven active concentrations with unforgettable sensory textures."}
            </p>

            {/* Editorial Studio Lab Image Frame */}
            <div className="relative mt-8 aspect-[4/3.3] w-full overflow-hidden border border-[#071126]/15 bg-[#030816] dark:border-white/15">
              <Image
                src="/images/hero/clinical-lab-scientist.jpg"
                alt="Pherada Cosmetics R&D Formulation Chemist"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030816]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <p className="font-serif text-sm italic text-[#9EE4FF]">
                    Formulation & Quality Control
                  </p>
                  <p className="text-xs font-medium text-white/90">
                    {locale === "th"
                      ? "ควบคุมการวิจัย ชั่งตวง และตรวจสอบคุณภาพทุกแบตช์ (BMR)"
                      : "Precision R&D and full Batch Manufacturing Record (BMR) control"}
                  </p>
                </div>
                <span className="border border-white/25 bg-black/50 px-2.5 py-1 font-mono text-[10px] tracking-widest text-[#48ACD6]">
                  LAB QC
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Skin Solution Lab + BazicSkin Architectural OEM / ODM / R&D Breakdown */}
          <FadeUp delay={0.1} className="lg:col-span-7 lg:pl-6">
            <div className="border-t border-[#071126]/15 dark:border-white/15">
              {factoryPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="group grid gap-4 border-b border-[#071126]/15 py-7 transition-colors hover:bg-white/70 dark:border-white/15 dark:hover:bg-white/[0.02] sm:grid-cols-12 sm:items-baseline sm:px-4"
                >
                  <div className="sm:col-span-4">
                    <span className="font-serif text-3xl font-light italic text-[#0038AE] dark:text-[#48ACD6]">
                      {pillar.num}
                    </span>
                    <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#071126]/60 dark:text-white/55">
                      {pillar.en}
                    </p>
                  </div>

                  <div className="sm:col-span-8">
                    <h3 className="text-lg font-semibold text-[#071126] transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6] sm:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-white/70">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-[#030816] p-6 text-white dark:border dark:border-white/15">
              <div>
                <p className="font-serif text-lg italic text-[#9EE4FF]">
                  From Concept to Global Success
                </p>
                <p className="text-xs text-white/75">
                  {locale === "th"
                    ? "ไม่ว่าคุณจะเป็นเจ้าของแบรนด์มือใหม่ หรือแบรนด์ที่ต้องการขยายไลน์สินค้า ทีมนักเคมีของเราพร้อมดูแลคุณ"
                    : "Whether launching your first hero product or expanding an existing line, our chemists are ready."}
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#48ACD6] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#48ACD6] transition hover:bg-[#48ACD6] hover:text-[#030816]"
              >
                <span>{locale === "th" ? "ดูบริการทั้งหมด" : "Explore Services"}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* PART 2: SENSORY TEXTURE & FORMULATION ARCHITECTURE (Inspired by BazicSkin /body/) */}
        <FadeUp delay={0.12}>
          <div className="border border-[#071126]/15 bg-white dark:border-white/15 dark:bg-[#030816]">
            {/* Top Architectural Header */}
            <div className="grid border-b border-[#071126]/15 dark:border-white/15 lg:grid-cols-12">
              <div className="p-7 sm:p-10 lg:col-span-7 lg:border-r lg:border-[#071126]/15 lg:dark:border-white/15">
                <div className="editorial-eyebrow text-[#0038AE] dark:text-[#48ACD6]">
                  <span>SENSORY & TEXTURE ARCHITECTURE</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#071126] dark:text-white sm:text-3xl">
                  {locale === "th"
                    ? "สถาปัตยกรรมเนื้อสัมผัสเวชสำอาง เลือกเนื้อสูตรที่ใช่สำหรับแบรนด์คุณ"
                    : "Cosmetic Texture Architecture — Engineered for Sensory Perfection"}
                </h3>
                <p className="mt-2 text-sm text-text-muted dark:text-white/65">
                  {locale === "th"
                    ? "เปรียบเทียบความหนืด การซึมซาบ ฟินิชผิว และสารสกัดหลักของแต่ละเนื้อผลิตภัณฑ์จากห้องปฏิบัติการ Pherada"
                    : "Explore the viscosity, absorption speed, skin finish, and active profile of each Pherada formulation category."}
                </p>
              </div>

              {/* Right Macro Texture Visual */}
              <div className="relative min-h-[200px] overflow-hidden bg-[#030816] lg:col-span-5">
                <Image
                  src="/images/hero/cosmetic-texture-swatches.jpg"
                  alt="Macro Cosmetic Texture Swatches — Serum, Cream, Gel, Ampoule"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030816]/80 via-[#030816]/30 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7 text-white">
                  <span className="font-serif text-2xl italic text-[#9EE4FF]">
                    Sensory Formulation Lab
                  </span>
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                    SERUM • CREAM • GEL • MASK • CLEANSER
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Texture Selector Bar (Hairline Tabs) */}
            <div className="grid grid-cols-2 border-b border-[#071126]/15 dark:border-white/15 sm:grid-cols-3 lg:grid-cols-5">
              {textureArchitecture.map((item, idx) => {
                const isSelected = activeTexture === idx;
                return (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => setActiveTexture(idx)}
                    className={`flex flex-col items-start justify-between border-b border-r border-[#071126]/10 p-5 text-left transition-all dark:border-white/10 lg:border-b-0 ${
                      isSelected
                        ? "bg-[#030816] text-white dark:bg-[#0038AE]"
                        : "bg-[#F7F9FC]/60 text-[#071126] hover:bg-white dark:bg-white/[0.02] dark:text-white/75 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      className={`font-serif text-2xl italic ${
                        isSelected ? "text-[#48ACD6] dark:text-[#9EE4FF]" : "text-[#0038AE] dark:text-[#48ACD6]"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
                      {item.categoryEn}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Texture Architectural Specification Sheet */}
            <div className="grid lg:grid-cols-12">
              <div className="p-7 sm:p-10 lg:col-span-7 lg:border-r lg:border-[#071126]/15 lg:dark:border-white/15">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl italic text-[#0038AE] dark:text-[#48ACD6]">
                    /{currentTexture.num}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0038AE] dark:text-[#48ACD6]">
                    {currentTexture.categoryEn}
                  </span>
                </div>

                <h4 className="mt-3 text-2xl font-semibold text-[#071126] dark:text-white sm:text-3xl">
                  {currentTexture.title}
                </h4>

                <p className="mt-1.5 font-serif text-lg italic text-[#0038AE] dark:text-[#9EE4FF]">
                  {currentTexture.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-text-muted dark:text-white/75 sm:text-base">
                  {currentTexture.sensory}
                </p>

                <div className="mt-6 pt-4 border-t border-[#071126]/10 dark:border-white/10">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#071126]/60 dark:text-white/55">
                    {locale === "th" ? "สารสกัดสำคัญที่นิยมใช้ในเนื้อสูตรนี้ (Key Clinical Actives)" : "Key Clinical Actives"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {currentTexture.actives.map((act) => (
                      <span
                        key={act}
                        className="border border-[#071126]/15 bg-[#F7F9FC] px-3.5 py-1.5 text-xs font-medium text-[#071126] dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sensory Telemetry Ledger */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] p-7 dark:bg-[#061026] sm:p-10 lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between border-b border-[#071126]/15 pb-3 dark:border-white/15">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0038AE] dark:text-[#48ACD6]">
                      SENSORY PROFILE SPEC
                    </span>
                    <span className="font-mono text-xs font-bold text-[#071126] dark:text-white">
                      {currentTexture.ph}
                    </span>
                  </div>

                  <div className="divide-y divide-[#071126]/10 dark:divide-white/10">
                    <div className="py-3.5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted dark:text-white/50">
                        {locale === "th" ? "ความหนืดของเนื้อสูตร (Viscosity)" : "Viscosity"}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#071126] dark:text-white">
                        {currentTexture.viscosity}
                      </p>
                    </div>
                    <div className="py-3.5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted dark:text-white/50">
                        {locale === "th" ? "การซึมซาบเข้าสู่ผิว (Absorption)" : "Absorption"}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#071126] dark:text-white">
                        {currentTexture.absorption}
                      </p>
                    </div>
                    <div className="py-3.5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted dark:text-white/50">
                        {locale === "th" ? "ความรู้สึกหลังทา (Skin Finish)" : "Skin Finish"}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#071126] dark:text-white">
                        {currentTexture.finish}
                      </p>
                    </div>
                    <div className="py-3.5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted dark:text-white/50">
                        {locale === "th" ? "สูตรมาตรฐานอ้างอิง (Matched Formula)" : "Matched Base Formula"}
                      </p>
                      <p className="mt-1 font-serif text-lg italic text-[#0038AE] dark:text-[#48ACD6]">
                        {currentTexture.matchedFormula}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 pt-4">
                  <Link
                    href={`/products/${currentTexture.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#0038AE] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#002880] dark:bg-[#48ACD6] dark:text-[#030816]"
                  >
                    <span>{locale === "th" ? "ดูสูตรอ้างอิง" : "View Formula"}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border border-[#071126]/20 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#071126] transition hover:border-[#0038AE] hover:text-[#0038AE] dark:border-white/20 dark:bg-transparent dark:text-white"
                  >
                    {locale === "th" ? "สั่งพัฒนาเนื้อนี้" : "Custom R&D"}
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


