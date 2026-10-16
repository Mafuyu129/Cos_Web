"use client";

import { ArrowRight, BadgeCheck, FlaskConical, PackageCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { processPaths, processSteps } from "@/data/process";

export default function ProcessPage() {
  const { locale } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow="Clinical Production Protocol"
        title="Choose the right formulation & production path"
        titleTh="เลือกเส้นทางการวิจัยและผลิตเวชสำอางที่เหมาะกับแบรนด์คุณ"
        description="Start faster with a proven RX base formula or develop a custom dermo-cosmetic formulation with our R&D lab."
        descriptionTh="เริ่มสร้างแบรนด์อย่างรวดเร็วด้วยสูตรมาตรฐานห้องแล็บ (RX Base) หรือวิจัยพัฒนาสูตรเวชสำอางเฉพาะแบรนด์ร่วมกับทีม R&D"
      />

      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container>
          <SectionHeader
            eyebrow="2 Formulation Routes"
            title="Two main laboratory paths before production"
            titleTh="2 เส้นทางหลักในการพัฒนาสูตรเวชสำอาง"
            description="Choose the route that fits your timeline, active ingredient direction, and launch goal."
            descriptionTh="เลือกระหว่างการใช้สูตรมาตรฐานที่ผ่านการทดสอบความคงตัวแล้ว หรือการวิจัยพัฒนาสูตรใหม่เพื่อสร้างจุดขายเฉพาะตัว"
            className="mb-12"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {processPaths.map((path, idx) => (
              <article
                key={path.key}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#0038AE]/15 bg-white shadow-soft transition-all duration-300 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]"
              >
                <div>
                  <div className="border-b border-[#0038AE]/12 bg-gradient-to-r from-[#04091A] via-[#002880] to-[#0B5080] p-7 text-white md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#48ACD6]/40 bg-white/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#9EE4FF]">
                          ROUTE 0{idx + 1} • {path.key === "standard" ? "STANDARD RX FORMULA" : "CUSTOM R&D LAB"}
                        </span>
                        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                          {locale === "th" ? path.title : path.titleEn}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-[#CBEBFF]/90">
                          {locale === "th" ? path.subtitle : path.subtitleEn}
                        </p>
                      </div>
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 text-[#48ACD6]">
                        {path.key === "standard" ? <PackageCheck size={26} /> : <FlaskConical size={26} />}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-6 p-7 md:p-8">
                    <p className="text-sm leading-relaxed text-text-muted dark:text-text-light/85 sm:text-base">
                      {locale === "th" ? path.summary : path.summaryEn}
                    </p>
                    <div className="grid gap-3">
                      {(locale === "th" ? path.highlights : path.highlightsEn).map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-xl border border-[#0038AE]/10 bg-[#F4F9FD] p-3.5 text-xs font-semibold text-text-dark dark:border-white/10 dark:bg-white/[0.04] dark:text-white sm:text-sm"
                        >
                          <BadgeCheck size={18} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#0038AE]/10 bg-[#F4F9FD]/60 p-7 dark:border-white/10 dark:bg-white/[0.02] md:p-8">
                  <p className="text-sm font-bold text-text-dark dark:text-white">
                    {locale === "th"
                      ? "ต้องการประเมินงบประมาณ MOQ หรือระยะเวลาของเส้นทางนี้?"
                      : "Need pricing, MOQ or timeline for this route?"}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted dark:text-text-light/80">
                    {locale === "th"
                      ? "แจ้งประเภทเวชสำอาง จำนวนผลิต และสารสกัดที่สนใจ เพื่อให้ทีมนักวิจัยสรุปแผนการผลิตให้คุณ"
                      : "Share your target product, quantity, and active direction for a tailored estimate."}
                  </p>
                  <Button href="/contact" className="mt-4 w-full sm:w-auto">
                    <span>{locale === "th" ? "ปรึกษาเส้นทางการผลิตนี้" : "Discuss This Route"}</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#0038AE]/12 bg-white py-16 dark:border-white/10 dark:bg-[#081128] md:py-24">
        <Container>
          <SectionHeader
            eyebrow="7-Step Protocol"
            title="End-to-end cosmeceutical production workflow"
            titleTh="7 ขั้นตอนมาตรฐานการผลิตเวชสำอางครบวงจร"
            description="Every batch follows strict QC checkpoints and Batch Manufacturing Record (BMR) documentation."
            descriptionTh="ทุกขั้นตอนดำเนินงานภายใต้การควบคุมคุณภาพและบันทึก BMR เพื่อความมั่นใจสูงสุดของเจ้าของแบรนด์"
            className="mb-12"
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <CTASection
        title={locale === "th" ? "ต้องการคำปรึกษาในการเลือกสูตรมาตรฐานหรือพัฒนาสูตรใหม่?" : "Need guidance choosing between standard or custom formula?"}
        description={
          locale === "th"
            ? "ส่งประเภทสินค้า งบประมาณ และจำนวนที่ต้องการผลิตมาให้ทีม R&D ของเราช่วยวิเคราะห์เส้นทางที่คุ้มค่าที่สุด"
            : "Send your product type, budget and target quantity. Our R&D team will suggest the best route."
        }
      />
    </>
  );
}

