"use client";

import { CheckCircle2, FlaskConical } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ProcessStep } from "@/data/process";
import type { Service } from "@/data/services";

type SerializableService = Omit<Service, "icon">;

export function ServiceDetailSections({
  service,
  processSteps
}: {
  service: SerializableService;
  processSteps: ProcessStep[];
}) {
  const { locale } = useLanguage();
  const title = locale === "th" ? service.titleTh : service.title;
  const moqText =
    locale === "th"
      ? service.moq
      : "MOQ depends on product type, formula and packaging. Contact us for a suitable estimate.";
  const timelineText =
    locale === "th"
      ? service.timeline
      : "Production timing depends on formula confirmation, artwork and packaging readiness.";

  return (
    <>
      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="What we can produce"
            eyebrowTh="รายการเวชสำอางที่รับผลิต"
            title={`Products in ${service.title}`}
            titleTh={`ผลิตภัณฑ์ในกลุ่ม${service.titleTh}`}
            description="Items can be customized by active concentration, pH, texture, and clinical packaging."
            descriptionTh="สามารถปรับความเข้มข้นของสารสกัด Active เนื้อสัมผัส กลิ่น และบรรจุภัณฑ์ตามตำแหน่งทางการตลาดของแบรนด์"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3.5 rounded-2xl border border-[#0038AE]/15 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0D1936]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-base font-bold text-text-dark dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#0038AE]/12 bg-white py-16 dark:border-white/10 dark:bg-[#081128] md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            [locale === "th" ? "ทิศทางสูตร (Active Directions)" : "Formula Directions", service.formulaOptions.join(" • "), "01"],
            [locale === "th" ? "จำนวนผลิตขั้นต่ำ (Starter MOQ)" : "Starter MOQ", moqText, "02"],
            [locale === "th" ? "ระยะเวลาผลิต (Lead Time)" : "Production Timeline", timelineText, "03"]
          ].map(([heading, text, code]) => (
            <div
              key={heading}
              className="relative overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-[#F4F9FD] p-6 dark:border-white/10 dark:bg-[#0D1936]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
              <div className="flex items-center justify-between">
                <FlaskConical size={18} className="text-[#48ACD6]" />
                <span className="font-mono text-[10px] font-bold text-[#0038AE] dark:text-[#48ACD6]">{code}</span>
              </div>
              <h2 className="mt-4 text-lg font-extrabold text-text-dark dark:text-white">{heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-text-light/85">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Production Steps"
            eyebrowTh="โปรโตคอลการผลิต"
            title="Typical path for this service"
            titleTh="ขั้นตอนการดำเนินงานมาตรฐาน"
            description="Every project summarizes formulation specs and FDA documents before production starts."
            descriptionTh="ทุกโปรเจกต์ได้รับการดูแลตั้งแต่สรุปสเปกสูตร ทดสอบความคงตัว ไปจนถึงจดแจ้ง อย. และผลิตจริง"
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0D1936]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] font-mono text-sm font-bold text-white">
                    0{step.number}
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-[#0038AE] dark:text-[#48ACD6]">
                    STEP 0{step.number}
                  </span>
                </div>
                <h2 className="mt-4 text-base font-extrabold leading-snug text-text-dark dark:text-white">
                  {locale === "th" ? step.title : step.titleEn}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-text-muted dark:text-text-light/85 sm:text-sm">
                  {locale === "th" ? step.description : step.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        titleTh={`เริ่มพัฒนาและผลิต${service.titleTh}กับ Pherada Lab`}
        titleEn={`Start your ${title} project with Pherada Lab`}
      />
    </>
  );
}

