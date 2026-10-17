"use client";

import { ArrowRight } from "lucide-react";
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

      <section className="bg-[#F7F9FC] py-20 dark:bg-[#030816] md:py-28">
        <Container>
          <SectionHeader
            eyebrow="2 Formulation Routes"
            title="Two main laboratory paths before production"
            titleTh="2 เส้นทางหลักในการพัฒนาสูตรเวชสำอาง"
            description="Choose the route that fits your timeline, active ingredient direction, and launch goal."
            descriptionTh="เลือกระหว่างการใช้สูตรมาตรฐานที่ผ่านการทดสอบความคงตัวแล้ว หรือการวิจัยพัฒนาสูตรใหม่เพื่อสร้างจุดขายเฉพาะตัว"
            className="mb-12"
          />
          <div className="grid border border-[#071126]/15 dark:border-white/15 lg:grid-cols-2">
            {processPaths.map((path, idx) => (
              <article
                key={path.key}
                className={`flex flex-col justify-between bg-white dark:bg-[#050C1D] ${
                  idx === 0 ? "border-b border-[#071126]/15 lg:border-b-0 lg:border-r dark:border-white/15" : ""
                }`}
              >
                <div>
                  <div className="border-b border-white/15 bg-[#030816] p-8 text-white sm:p-10">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#48ACD6]">
                        ROUTE 0{idx + 1} • {path.key === "standard" ? "STANDARD RX FORMULA" : "CUSTOM R&D LAB"}
                      </span>
                      <span className="font-serif text-4xl font-light italic text-[#9EE4FF]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                      {locale === "th" ? path.title : path.titleEn}
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#9EE4FF]">
                      {locale === "th" ? path.subtitle : path.subtitleEn}
                    </p>
                  </div>

                  <div className="grid gap-6 p-8 sm:p-10">
                    <p className="text-sm leading-relaxed text-text-muted dark:text-white/75 sm:text-base">
                      {locale === "th" ? path.summary : path.summaryEn}
                    </p>
                    <div className="divide-y divide-[#071126]/10 border-t border-b border-[#071126]/10 dark:divide-white/10 dark:border-white/10">
                      {(locale === "th" ? path.highlights : path.highlightsEn).map((highlight, hIdx) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3.5 py-3.5 text-xs font-medium text-[#071126] dark:text-white/90 sm:text-sm"
                        >
                          <span className="font-serif text-sm italic text-[#0038AE] dark:text-[#48ACD6]">
                            0{hIdx + 1}
                          </span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#071126]/15 bg-[#F7F9FC] p-8 dark:border-white/15 dark:bg-white/[0.02] sm:p-10">
                  <p className="text-sm font-semibold text-[#071126] dark:text-white">
                    {locale === "th"
                      ? "ต้องการประเมินงบประมาณ MOQ หรือระยะเวลาของเส้นทางนี้?"
                      : "Need pricing, MOQ or timeline for this route?"}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted dark:text-white/65">
                    {locale === "th"
                      ? "แจ้งประเภทเวชสำอาง จำนวนผลิต และสารสกัดที่สนใจ เพื่อให้ทีมนักวิจัยสรุปแผนการผลิตให้คุณ"
                      : "Share your target product, quantity, and active direction for a tailored estimate."}
                  </p>
                  <Button href="/contact" className="mt-5 w-full sm:w-auto">
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

