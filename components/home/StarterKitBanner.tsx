"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

export function StarterKitBanner() {
  const { locale } = useLanguage();

  const launchPackages =
    locale === "th"
      ? [
          {
            tier: "TIER 01 • DISCOVERY SAMPLE",
            name: "ชุดทดลองเนื้อสูตรจริง (Tester Kit)",
            subtitle: "Try Before You Produce",
            highlight: "สั่งผ่าน Shopee Official",
            desc: "ทดสอบเนื้อสัมผัส กลิ่น การซึมซาบ และผลลัพธ์บนผิวจริงครบทั้ง 8 สูตรมาตรฐานจากห้องแล็บ ก่อนตัดสินใจสั่งผลิตล็อตแรก",
            features: [
              "รวมเทสเตอร์สูตรเวชสำอางยอดนิยม (เซรั่ม ครีม เจล มาสก์)",
              "แนบสเปกสารสกัด Active และค่า pH ประจำสูตร",
              "จัดส่งด่วนถึงบ้านผ่าน Shopee Official Store",
              "นำค่าเทสเตอร์มาหักเป็นส่วนลดเมื่อสั่งผลิตจริงได้"
            ],
            ctaText: "สั่งซื้อเทสเตอร์บน Shopee",
            ctaHref: company.shopeeUrl,
            external: true,
            featured: false
          },
          {
            tier: "TIER 02 • STARTER BRAND OEM",
            name: "แพ็กเกจเริ่มต้นสร้างแบรนด์ 100 ชิ้น",
            subtitle: "Turnkey Low-MOQ Launch",
            highlight: "MOQ เริ่มต้น 100 ชิ้น",
            desc: "ทางเลือกยอดนิยมสำหรับเจ้าของแบรนด์มือใหม่ เลือกสูตรเวชสำอางมาตรฐานที่พัฒนาสำเร็จแล้ว พร้อมดูแลบรรจุภัณฑ์และจดแจ้ง อย. ครบวงจร",
            features: [
              "ขั้นต่ำเริ่มต้นเพียง 100 ชิ้น (แบบซองเริ่มต้น 200 ชิ้น)",
              "คัดสรรบรรจุภัณฑ์ขวดดรอปเปอร์ ปั๊มสุญญากาศ หรือกระปุก",
              "บริการออกแบบฉลากและตรวจสอบความถูกต้องตามเกณฑ์ อย.",
              "ดำเนินการยื่นจดแจ้งเลขที่ใบรับจดแจ้ง อย. และบันทึก BMR"
            ],
            ctaText: "ปรึกษาแพ็กเกจ 100 ชิ้น",
            ctaHref: "/contact",
            external: false,
            featured: true
          },
          {
            tier: "TIER 03 • BESPOKE R&D ODM",
            name: "แพ็กเกจวิจัยและพัฒนาสูตรเฉพาะแบรนด์",
            subtitle: "Exclusive Custom Formulation",
            highlight: "1 Brand 1 Exclusive Formula",
            desc: "สร้างความแตกต่างในตลาดด้วยสูตรที่คิดค้นขึ้นใหม่เฉพาะแบรนด์คุณ ปรับแต่งสารสกัด Active เนื้อสัมผัส สี และกลิ่นโดยทีมนักเคมี R&D",
            features: [
              "ปรึกษาเจาะลึก Concept แบรนด์และกลุ่มเป้าหมายกับนักเคมี",
              "ขึ้นตัวอย่างสูตร (Lab Sample) เพื่อปรับจูนเนื้อสัมผัสจนพอใจ",
              "ทดสอบความคงตัวของสูตร (Stability & pH Control)",
              "ดูแลการผลิต บรรจุภัณฑ์ จดแจ้ง อย. และเอกสาร BMR ครบวงจร"
            ],
            ctaText: "นัดหมายทีมวิจัย R&D",
            ctaHref: "/contact",
            external: false,
            featured: false
          }
        ]
      : [
          {
            tier: "TIER 01 • DISCOVERY SAMPLE",
            name: "Real Sensory Discovery Sample Kit",
            subtitle: "Try Before You Produce",
            highlight: "Via Shopee Official",
            desc: "Test viscosity, absorption, scent, and real skin performance across our 8 clinical base formulas before committing to production.",
            features: [
              "Includes clinical serums, moisturizers, mask & cleanser",
              "Complete active ingredient & pH specification sheet",
              "Fast nationwide delivery via Shopee Official Store",
              "Sample kit fee credited toward your first production order"
            ],
            ctaText: "Order Kit on Shopee",
            ctaHref: company.shopeeUrl,
            external: true,
            featured: false
          },
          {
            tier: "TIER 02 • STARTER BRAND OEM",
            name: "Starter Brand Launch (MOQ 100 Pcs)",
            subtitle: "Turnkey Low-MOQ Launch",
            highlight: "Starter MOQ 100 Pcs",
            desc: "Designed for new founders. Select a proven clinical base formula with turnkey packaging coordination, label review, and Thai FDA filing.",
            features: [
              "Accessible minimum order from 100 pcs (200 pcs for sachets)",
              "Dropper, airless pump, and frosted jar vessel sourcing",
              "Brand label design & regulatory compliance check",
              "Full Thai FDA notification & BMR batch documentation"
            ],
            ctaText: "Inquire Starter Package",
            ctaHref: "/contact",
            external: false,
            featured: true
          },
          {
            tier: "TIER 03 • BESPOKE R&D ODM",
            name: "Bespoke Clinical R&D Formulation",
            subtitle: "Exclusive Custom Formulation",
            highlight: "100% Bespoke Formula",
            desc: "Stand out with a proprietary formulation engineered exclusively for your brand—customizing active concentrations, rheology, and scent.",
            features: [
              "1-on-1 formulation briefing with our R&D chemists",
              "Iterative lab prototyping until sensory feel is perfected",
              "Stability, compatibility, and pH 5.5 precision testing",
              "End-to-end manufacturing, Thai FDA filing & BMR records"
            ],
            ctaText: "Consult R&D Chemists",
            ctaHref: "/contact",
            external: false,
            featured: false
          }
        ];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#030816] py-20 text-white md:py-28">
      {/* Subtle Cobalt Illumination */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#0038AE]/30 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#48ACD6]/15 blur-[140px]" />

      <Container className="relative z-10">
        {/* Top Editorial Split Header */}
        <FadeUp>
          <div className="grid items-end gap-8 border-b border-white/15 pb-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="editorial-eyebrow text-[#48ACD6]">
                <span>BRAND LAUNCH PROGRAMS • แพ็กเกจเริ่มต้นสร้างแบรนด์</span>
              </div>
              <p className="mt-4 font-serif text-2xl font-light italic text-[#9EE4FF] sm:text-3xl">
                Start Small, Scale Confidently.
              </p>
              <h2 className="mt-2 text-3xl font-semibold leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[42px]">
                {locale === "th"
                  ? "เลือกรูปแบบการเริ่มต้นสร้างแบรนด์ที่เหมาะกับงบประมาณและเป้าหมายของคุณ"
                  : "Tailored Brand Launch Programs — From Discovery Samples to Bespoke R&D"}
              </h2>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 border border-white/15 bg-white/[0.03] p-4">
                <div className="relative h-16 w-20 shrink-0 overflow-hidden border border-white/15">
                  <Image
                    src="/images/hero/cosmetic-texture-swatches.jpg"
                    alt="Pherada Discovery Swatches"
                    fill
                    className="object-cover"
                    sizes="90px"
                  />
                </div>
                <div>
                  <p className="font-serif text-sm italic text-[#48ACD6]">
                    Sensory First Policy
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/80">
                    {locale === "th"
                      ? "เราแนะนำให้ลูกค้าทุกท่านได้ลองสัมผัสเนื้อเซรั่มและครีมจริงก่อนตัดสินใจสั่งผลิต เพื่อความมั่นใจสูงสุด"
                      : "We encourage every founder to test our real clinical textures on skin before mass production."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 3-Column Architectural Package Grid */}
        <div className="mt-12 grid gap-0 border border-white/15 lg:grid-cols-3">
          {launchPackages.map((pkg, idx) => (
            <FadeUp
              key={pkg.tier}
              delay={idx * 0.08}
              className={`flex flex-col justify-between p-8 sm:p-10 ${
                idx !== 2 ? "border-b border-white/15 lg:border-b-0 lg:border-r" : ""
              } ${
                pkg.featured
                  ? "bg-gradient-to-b from-[#002B88]/55 via-[#071536] to-[#030816]"
                  : "bg-[#050D22]/70"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold uppercase text-[#48ACD6]">
                    {pkg.tier}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold ${
                      pkg.featured
                        ? "bg-[#48ACD6] text-[#030816]"
                        : "border border-white/25 text-white/90"
                    }`}
                  >
                    {pkg.highlight}
                  </span>
                </div>

                <p className="mt-5 font-serif text-xl italic text-[#9EE4FF]">
                  {pkg.subtitle}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  {pkg.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                  {pkg.desc}
                </p>

                <div className="mt-7 space-y-3.5 border-t border-white/10 pt-6">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/90">
                      <Check size={16} className="mt-1 shrink-0 text-[#48ACD6]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-9 pt-4">
                {pkg.external ? (
                  <a
                    href={pkg.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-[#EE4D2D] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d73f20]"
                  >
                    <ShopeeIcon className="h-4 w-4" />
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <Link
                    href={pkg.ctaHref}
                    className={`flex w-full items-center justify-center gap-2 px-6 py-4 text-sm font-bold transition ${
                      pkg.featured
                        ? "bg-[#48ACD6] text-[#030816] hover:bg-white"
                        : "border border-white/25 bg-white/[0.04] text-white hover:border-[#48ACD6] hover:bg-[#48ACD6] hover:text-[#030816]"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

