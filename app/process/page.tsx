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
        eyebrow="Production Process"
        title="Choose the right production path for your brand"
        titleTh="เลือกเส้นทางการผลิตที่เหมาะกับแบรนด์ของคุณ"
        description="Start faster with a standard formula or develop a custom formula for your brand difference."
        descriptionTh="เริ่มแบบเร็วด้วยสูตรมาตรฐาน หรือพัฒนาสูตรใหม่เพื่อความต่างของแบรนด์ โดยคุยรายละเอียดกับทีมก่อนเริ่มผลิตจริง"
      />

      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <SectionHeader
            eyebrow="2 Paths"
            title="Two main paths before production"
            titleTh="2 ทางเลือกหลักก่อนเริ่มผลิต"
            description="Choose the route that fits your timeline, formula direction and launch goal."
            descriptionTh="ใช้ข้อมูลจากโปสเตอร์เดิม แต่ตัดรายละเอียดเชิงลึกออก เหลือเฉพาะสิ่งที่ช่วยให้ลูกค้าตัดสินใจว่าควรคุยเส้นทางไหนกับทีมงาน"
            className="mb-12"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {processPaths.map((path) => (
              <article
                key={path.key}
                className="overflow-hidden rounded-[4px] border border-primary/10 bg-white dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="border-b border-primary/10 bg-[#f8f9fc] p-6 text-text-dark dark:border-white/10 dark:bg-white/[0.04] dark:text-white md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent md:text-base">
                        {path.key === "standard" ? "Standard Formula" : "Custom Formula"}
                      </p>
                      <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
                        {locale === "th" ? path.title : path.titleEn}
                      </h2>
                      <p className="mt-4 max-w-xl text-lg font-medium leading-9 text-text-muted dark:text-text-light">
                        {locale === "th" ? path.subtitle : path.subtitleEn}
                      </p>
                    </div>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                      {path.key === "standard" ? (
                        <PackageCheck size={28} className="text-accent" />
                      ) : (
                        <FlaskConical size={28} className="text-accent" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="grid gap-6 p-6 md:p-8">
                  <p className="text-base leading-8 text-text-muted dark:text-text-light md:text-lg">
                    {locale === "th" ? path.summary : path.summaryEn}
                  </p>
                  <div className="grid gap-3">
                    {(locale === "th" ? path.highlights : path.highlightsEn).map((highlight) => (
                      <p
                        key={highlight}
                        className="flex gap-3 text-base leading-8 text-text-muted dark:text-text-light md:text-lg"
                      >
                        <BadgeCheck size={18} className="mt-1 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>
                  <div className="rounded-lg border border-border bg-light-bg p-5 dark:border-white/10 dark:bg-white/[0.05]">
                    <p className="text-lg font-semibold text-text-dark dark:text-white">
                      {locale === "th"
                        ? "ต้องการทราบราคา MOQ หรือเวลาผลิตของสินค้าคุณโดยตรง"
                        : "Need pricing, MOQ or timeline for your product?"}
                    </p>
                    <p className="mt-2 text-base leading-8 text-text-muted dark:text-text-light">
                      {locale === "th"
                        ? "ส่งประเภทสินค้า จำนวนที่ต้องการ และ mood ของแบรนด์มาให้ทีมงาน เพื่อประเมินทางเลือกที่เหมาะที่สุด"
                        : "Send product type, target quantity and brand mood so our team can suggest the right route."}
                    </p>
                  </div>
                  <Button href="/contact" className="w-full sm:w-auto">
                    {locale === "th" ? "คุยรายละเอียดเส้นทางนี้" : "Discuss this path"} <ArrowRight size={18} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-dark-section md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Quick Timeline"
            title="Production timeline overview"
            titleTh="ภาพรวมขั้นตอนที่ลูกค้าควรรู้"
            description="This sequence applies to both paths. Budget, timeline and quantity are summarized by product brief."
            descriptionTh="ลำดับนี้ใช้ได้กับทั้งสองเส้นทาง ส่วนตัวเลขเชิงลึกเรื่องงบประมาณ ระยะเวลา และจำนวนผลิต จะสรุปตามโจทย์สินค้าแต่ละแบรนด์"
            className="mb-12"
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <CTASection
        title={locale === "th" ? "ยังไม่แน่ใจว่าควรเริ่มจากสูตรแบบไหน" : "Not sure which formula path to start with?"}
        description={
          locale === "th"
            ? "ส่งประเภทสินค้า งบประมาณ และจำนวนที่ต้องการผลิตมาให้ทีมงาน เราจะช่วยแนะนำเส้นทางที่เหมาะที่สุดก่อนเริ่มงานจริง"
            : "Send your product type, budget and target quantity. Our team will suggest the best route before production starts."
        }
      />
    </>
  );
}
