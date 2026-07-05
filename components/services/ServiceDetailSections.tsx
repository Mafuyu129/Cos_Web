"use client";

import { CheckCircle2 } from "lucide-react";
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
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="What we can produce"
            eyebrowTh="ผลิตอะไรได้บ้าง"
            title={`Products in ${service.title}`}
            titleTh={`สินค้าในกลุ่ม${service.titleTh}`}
            description="Items can be adjusted by formula, packaging and brand goal."
            descriptionTh="รายการสามารถปรับตามสูตร บรรจุภัณฑ์ และเป้าหมายแบรนด์"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {service.items.map((item) => (
              <div key={item} className="rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <CheckCircle2 size={22} className="text-primary dark:text-accent" />
                <p className="mt-3 text-lg font-bold text-text-dark dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-dark-section md:py-28">
        <Container className="grid gap-5 md:grid-cols-3">
          {[
            [locale === "th" ? "ตัวเลือกสูตร" : "Formula options", service.formulaOptions.join(" / ")],
            [locale === "th" ? "จำนวนผลิตขั้นต่ำ" : "MOQ", moqText],
            [locale === "th" ? "ระยะเวลาผลิต" : "Timeline", timelineText]
          ].map(([heading, text]) => (
            <div key={heading} className="rounded-[4px] border border-primary/10 bg-light-bg p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="font-serif text-[28px] font-medium text-text-dark dark:text-white">{heading}</h2>
              <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Production Steps"
            eyebrowTh="ขั้นตอนผลิต"
            title="Typical path for this service"
            titleTh="เส้นทางผลิตโดยทั่วไปสำหรับบริการนี้"
            description="Every project summarizes steps and documents before production starts."
            descriptionTh="ทุกโปรเจกต์จะสรุปขั้นตอนและเอกสารก่อนเริ่มผลิตจริง"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.number} className="rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-serif text-3xl font-medium text-primary dark:text-accent">{step.number}</p>
                <h2 className="mt-3 font-serif text-[26px] font-medium leading-tight text-text-dark dark:text-white">
                  {locale === "th" ? step.title : step.titleEn}
                </h2>
                <p className="mt-2 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
                  {locale === "th" ? step.description : step.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        titleTh={`เริ่มโปรเจกต์${service.titleTh}`}
        titleEn={`Start your ${title} project`}
      />
    </>
  );
}
