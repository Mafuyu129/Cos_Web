"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

export function HeroSection() {
  const { locale } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#030816] text-white">
      {/* Deep Cobalt & Sapphire Architectural Lighting */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#0038AE]/35 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[540px] w-[540px] rounded-full bg-[#48ACD6]/18 blur-[150px]" />

      {/* Giant Background Architectural Serif Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[130px] font-light italic leading-none tracking-tight text-white/[0.025] lg:text-[210px]"
      >
        The Blue Factory
      </div>

      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Statement & Partner Positioning */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="editorial-eyebrow text-[#48ACD6]">
              <span>
                {locale === "th"
                  ? "THE BLUE FACTORY • โรงงานวิจัยและผลิตเวชสำอาง OEM / ODM"
                  : "THE BLUE FACTORY • CLINICAL OEM & ODM LABORATORY"}
              </span>
            </div>

            {/* Editorial English Display Super-Title (BazicSkin + Skin Solution Lab Fusion) */}
            <p className="mt-5 font-serif text-2xl font-light italic tracking-wide text-[#9EE4FF] sm:text-3xl lg:text-[36px]">
              “Your Skincare Dream. Our Formulation Science.”
            </p>

            {/* Primary Statement Headline */}
            <h1 className="mt-3 text-3xl font-semibold leading-[1.18] tracking-tight text-white sm:text-5xl xl:text-[54px]">
              {locale === "th" ? (
                <>
                  เราเป็นมากกว่าโรงงานผลิต <br className="hidden sm:inline" />
                  แต่คือ{" "}
                  <span className="border-b border-[#48ACD6]/60 pb-1 text-[#48ACD6]">
                    พาร์ทเนอร์สร้างแบรนด์เวชสำอาง
                  </span>
                  ของคุณ
                </>
              ) : (
                <>
                  More Than a Factory — <br className="hidden sm:inline" />
                  Your{" "}
                  <span className="border-b border-[#48ACD6]/60 pb-1 text-[#48ACD6]">
                    Dermo-Cosmetic Brand
                  </span>{" "}
                  Partner
                </>
              )}
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="mt-6 max-w-2xl border-l-2 border-[#48ACD6] pl-5 text-base font-normal leading-relaxed text-white/90 md:text-lg">
              {locale === "th"
                ? "ห้างหุ้นส่วนจำกัด ภีรดา คอสเมติกส์ (Pherada Cosmetics) ผสานศาสตร์การวิจัยสารสกัดเวชสำอางระดับคลินิก เข้ากับการออกแบบเนื้อสัมผัสที่เรียบหรูแต่ทรงพลัง (A Simple is Powerful) ดูแลครบวงจรตั้งแต่คิดค้นสูตร บรรจุภัณฑ์ จดแจ้ง อย. และเอกสาร BMR เริ่มต้นสร้างแบรนด์ได้ตั้งแต่ 100 ชิ้น"
                : "Pherada Cosmetics Ltd. unites clinical formulation science with sensory luxury ('A Simple is Powerful'). We guide founders from bespoke active R&D and packaging architecture to Thai FDA registration and full BMR batch traceability—starting at just 100 pieces."}
            </p>

            {/* Editorial Action Row */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#48ACD6] px-8 py-4 text-sm font-bold text-[#030816] transition hover:bg-white"
              >
                <span>
                  {locale === "th" ? "ปรึกษาสร้างแบรนด์ & พัฒนาสูตรฟรี" : "Start Your Brand Consultation"}
                </span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:border-[#48ACD6] hover:bg-white/[0.1]"
              >
                <span>
                  {locale === "th" ? "สำรวจ 8 สูตรมาตรฐาน & สั่งเทสเตอร์" : "Explore 8 Base Formulas & Samples"}
                </span>
                <ArrowUpRight size={16} className="text-[#48ACD6]" />
              </Link>
            </div>

            {/* Direct Sample Store Note */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span>
                {locale === "th"
                  ? "✦ มีเซ็ตเทสเตอร์เนื้อสูตรจริงจัดส่งให้ทดสอบก่อนสั่งผลิต"
                  : "✦ Real sensory formula sample kits available before production"}
              </span>
              <a
                href={company.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#48ACD6] underline underline-offset-4 transition hover:text-white"
              >
                <span>{locale === "th" ? "สั่งซื้อเทสเตอร์ผ่าน Shopee Official" : "Order Samples on Shopee"}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Asymmetric Studio Composition */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Architectural Frame */}
              <div className="relative aspect-[4/4.6] w-full overflow-hidden border border-white/15 bg-[#07122B]">
                <Image
                  src="/images/hero/luxury-cosmetic-bottles.jpg"
                  alt="Pherada Cosmetics — The Blue Factory Bespoke Skincare Collection"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030816]/90 via-transparent to-[#030816]/20" />

                {/* Top Editorial Index Label */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between border-b border-white/15 pb-3 text-xs text-white/85">
                  <span>COLLECTION NO. 01</span>
                  <span className="font-serif text-sm italic text-[#9EE4FF]">
                    The Blue Factory Edition
                  </span>
                </div>

                {/* Bottom Caption Inside Frame */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-xl italic text-[#9EE4FF]">
                      A Simple is Powerful
                    </p>
                    <p className="mt-1 text-xs text-white/90 sm:text-sm">
                      {locale === "th"
                        ? "เวชสำอางสูตรเข้มข้น ปรับแต่งเนื้อสัมผัสและสารสกัดเฉพาะแบรนด์คุณ"
                        : "Clinical-grade formulations tailored exclusively to your brand identity"}
                    </p>
                  </div>
                  <span className="shrink-0 border border-[#48ACD6]/40 bg-[#030816]/80 px-3 py-1.5 font-mono text-xs font-semibold text-[#48ACD6]">
                    pH 5.5
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Chemist & Sensory Strip */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="group relative flex items-center gap-3.5 border border-white/15 bg-[#07122B]/90 p-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-white/20">
                    <Image
                      src="/images/hero/clinical-lab-scientist.jpg"
                      alt="Pherada R&D Cosmetic Chemist"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-sm italic text-[#48ACD6]">R&D Laboratory</p>
                    <p className="text-sm font-semibold text-white">
                      {locale === "th" ? "ทีมนักเคมีวิจัยสูตร" : "In-House Chemists"}
                    </p>
                    <p className="mt-0.5 text-xs text-white/75">
                      {locale === "th" ? "พัฒนาสูตรเฉพาะแบรนด์" : "Bespoke ODM / OEM"}
                    </p>
                  </div>
                </div>

                <Link
                  href="/products"
                  className="group relative flex items-center gap-3.5 border border-white/15 bg-[#07122B]/90 p-3.5 transition hover:border-[#48ACD6]"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-white/20">
                    <Image
                      src="/images/hero/cosmetic-texture-swatches.jpg"
                      alt="Sensory Swatches"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-sm italic text-[#48ACD6]">Sensory Library</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#48ACD6]">
                      {locale === "th" ? "สัมผัสเนื้อสูตรจริง →" : "Texture Swatches →"}
                    </p>
                    <p className="mt-0.5 text-xs text-white/75">
                      {locale === "th" ? "เซรั่ม • ครีม • เจล • มาสก์" : "Serum • Cream • Gel"}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Architectural Hairline Ledger (BazicSkin-Inspired Spec Bar) */}
        <div className="mt-14 grid grid-cols-2 border-t border-white/15 pt-8 sm:grid-cols-4 lg:mt-20">
          {[
            {
              index: "01",
              metric: "100 PCS",
              label: locale === "th" ? "จำนวนขั้นต่ำเริ่มต้นสร้างแบรนด์" : "Accessible Starter Brand MOQ",
              sub: locale === "th" ? "ลดความเสี่ยง ทุนไม่จม" : "Low-risk market entry"
            },
            {
              index: "02",
              metric: "08+ RX",
              label: locale === "th" ? "สูตรเวชสำอางมาตรฐานพร้อมผลิต" : "Clinical Ready-to-Produce Formulas",
              sub: locale === "th" ? "พร้อมส่งเทสเตอร์ให้ลองจริง" : "Sample kits ready to ship"
            },
            {
              index: "03",
              metric: locale === "th" ? company.factoryInfo.rooms : company.factoryInfo.roomsEn,
              label: locale === "th" ? "โครงสร้างโรงงานแยกโซนมาตรฐาน" : "Dedicated Cleanroom Zoning",
              sub: locale === "th" ? "แยกส่วนผลิต ชั่งผสม บรรจุ และ QC" : "Hygienic separated lab workflow"
            },
            {
              index: "04",
              metric: "100% FDA",
              label: locale === "th" ? "จดแจ้ง อย. และบันทึก BMR ครบวงจร" : "Full Thai FDA & BMR Traceability",
              sub: locale === "th" ? "ถูกต้องตามกฎหมาย ตรวจสอบย้อนกลับได้" : "Complete batch documentation"
            }
          ].map((item, idx) => (
            <div
              key={item.index}
              className={`py-3 ${
                idx !== 0 ? "sm:border-l sm:border-white/15 sm:pl-6" : ""
              } ${idx % 2 === 1 ? "border-l border-white/15 pl-4 sm:pl-6" : "pr-4"}`}
            >
              <span className="font-mono text-xs text-[#48ACD6]">
                /{item.index}
              </span>
              <p className="mt-1 font-serif text-2xl font-semibold text-white sm:text-3xl">
                {item.metric}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/75">{item.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

