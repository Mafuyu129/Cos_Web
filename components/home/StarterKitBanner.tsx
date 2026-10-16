"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, FlaskConical, PackageOpen, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

export function StarterKitBanner() {
  const { locale } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#040C28] via-[#002B88] to-[#084B7C] py-16 text-white md:py-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#48ACD6]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#0038AE]/40 blur-[120px]" />

      <Container>
        <div className="relative z-10 grid items-center gap-10 rounded-3xl border border-white/15 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl lg:grid-cols-12 lg:p-12">
          {/* Left Column: Compelling pitch for new brand founders */}
          <FadeUp className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#48ACD6]/40 bg-[#48ACD6]/15 px-3.5 py-1 text-xs font-semibold text-[#9EE4FF]">
              <PackageOpen size={14} className="text-[#48ACD6]" />
              <span>
                {locale === "th"
                  ? "PHERADA DISCOVERY KIT • ชุดทดลองก่อนตัดสินใจผลิต"
                  : "PHERADA DISCOVERY KIT • TRY BEFORE YOU PRODUCE"}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {locale === "th" ? (
                <>
                  สัมผัสเนื้อจริง กลิ่นจริง <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#9EE4FF] via-[#48ACD6] to-white bg-clip-text text-transparent">
                    ทดลอง 8 สูตรเวชสำอาง
                  </span>{" "}
                  ก่อนสั่งผลิต
                </>
              ) : (
                <>
                  Experience Real Sensory Textures <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#9EE4FF] via-[#48ACD6] to-white bg-clip-text text-transparent">
                    Try 8 Dermo-Cosmetic Formulas
                  </span>{" "}
                  First
                </>
              )}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#D2E9FB] sm:text-base">
              {locale === "th"
                ? "อยากสร้างแบรนด์แต่ไม่รู้จะเลือกสูตรไหน? Pherada จัดส่งเซ็ตขนาดทดลอง (Tester Samples) ครบทั้ง 8 สูตรเวชสำอางยอดนิยม พร้อมคู่มือส่วนผสม Active, ค่า pH และคำแนะนำในการวางจุดขาย ให้คุณทดลองใช้บนผิวจริงก่อนสั่งผลิตขั้นต่ำ"
                : "Not sure which formula matches your brand? Order our Discovery Sample Kit featuring 8 clinical base formulas with active ingredient profiles and pH specs to test sensory feel and performance before manufacturing."}
            </p>

            {/* Benefit Checkpoints */}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                locale === "th" ? "ครบ 8 เนื้อสัมผัสยอดนิยม (เซรั่ม ครีม เจล มาสก์)" : "8 popular cosmetic textures (Serums, Creams, Gel)",
                locale === "th" ? "คัดสรรสารสกัด Active เกรดคลินิกเห็นผลชัด" : "High-purity clinical actives with visible results",
                locale === "th" ? "ทดลองกับผิวจริงเพื่อความมั่นใจก่อนลงทุน" : "Test on real skin before committing capital",
                locale === "th" ? "สั่งซื้อง่าย ส่งด่วนตรงถึงบ้านผ่าน Shopee" : "Easy direct order with fast home delivery via Shopee"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-xs font-medium text-white/90 sm:text-sm">
                  <CheckCircle2 size={16} className="shrink-0 text-[#48ACD6]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={company.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#EE4D2D] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#d73f20] hover:scale-105"
              >
                <ShopeeIcon className="h-4 w-4" />
                <span>{locale === "th" ? "สั่งซื้อชุดทดลองบน Shopee" : "Order Sample Kit on Shopee"}</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={company.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <FlaskConical size={16} className="text-[#48ACD6]" />
                <span>{locale === "th" ? "ปรึกษาพัฒนาสูตรทาง LINE" : "Consult Formula on LINE"}</span>
              </a>
            </div>
          </FadeUp>

          {/* Right Column: Visual Showcase Box */}
          <FadeUp delay={0.1} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-md sm:p-7">
              {/* Texture Swatch Image Preview */}
              <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/20 shadow-md">
                <Image
                  src="/images/hero/cosmetic-texture-swatches.jpg"
                  alt="Real Pherada Dermo-Cosmetics Texture Swatches"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-bold">Real Sensory Swatches</span>
                  <span className="rounded bg-[#48ACD6]/30 px-2 py-0.5 font-mono text-[10px] text-[#9EE4FF] backdrop-blur-sm">
                    8 Formulas
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#FFB800]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    PHERADA SAMPLE BOX
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                  READY TO SHIP
                </span>
              </div>

              {/* 5 Formula Pills Preview */}
              <div className="mt-4 space-y-2">
                {[
                  { name: "01. Clarielle Acne & Sebum Serum", active: "BHA + Niacinamide + Bisabolol" },
                  { name: "02. Veilance Barrier Repair Emulsion", active: "Ceramide Complex + Squalane" },
                  { name: "03. Lumea Radiance Brightening Serum", active: "Tranexamic Acid + Aquaxyl" },
                  { name: "04. Eloria Peptide Firming Ampoule", active: "Copper Peptide + Tripeptide" },
                  { name: "05. Aeri Hyaluron Hydrating Gel-Cream", active: "8D Hyaluronic + Panthenol B5" }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs transition hover:bg-white/10"
                  >
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-[11px] text-[#9EE4FF]">{item.active}</p>
                    </div>
                    <span className="font-mono text-[10px] text-white/60">Sample 10ml</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-[#48ACD6]/30 bg-[#48ACD6]/10 p-3 text-center">
                <p className="text-xs font-semibold text-[#9EE4FF]">
                  {locale === "th"
                    ? "★ ค่าชุดทดลองสามารถนำมาใช้เป็นส่วนลดในการสั่งผลิตจริงได้"
                    : "★ Sample kit fee can be credited against your first mass production order"}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
