"use client";

import { Beaker, CheckCircle2, Cpu, FileCheck, Layers, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function SimplePowerfulSection() {
  const { locale, t } = useLanguage();

  const title =
    locale === "th" ? (
      <>
        Beauty <em className="italic text-primary dark:text-accent">simplified,</em>
        <br />
        science amplified
      </>
    ) : (
      <>
        Beauty <em className="italic text-primary dark:text-accent">simplified,</em>
        <br />
        science amplified
      </>
    );

  const pillars =
    locale === "th"
      ? [
          {
            icon: Beaker,
            title: "วิจัยและพัฒนาสูตร R&D",
            desc: "เลือกจากสูตรมาตรฐานที่การันตีผลลัพธ์ หรือพัฒนาสูตรเอกลักษณ์ร่วมกับทีมนักเคมี",
            tag: "Formula R&D"
          },
          {
            icon: Cpu,
            title: "ผลิตตามมาตรฐานห้องสะอาด",
            desc: "ระบบเครื่องผสมความเร็วสูงและเครื่องบรรจุซีลอัตโนมัติ แม่นยำทุกแบตช์",
            tag: "Cleanroom Tech"
          },
          {
            icon: FileCheck,
            title: "เอกสาร อย. และ BMR ครบวงจร",
            desc: "ช่วยดูแลการจดแจ้งเครื่องสำอางถูกต้อง 100% พร้อมบันทึก BMR ตรวจสอบย้อนกลับได้",
            tag: "100% Regulatory"
          },
          {
            icon: Layers,
            title: "แพ็กเกจและส่งมอบพร้อมขาย",
            desc: "ประสานงานบรรจุภัณฑ์ ออกแบบฉลากถูกต้องตามกฎหมาย และจัดส่งถึงมือคุณ",
            tag: "Ready-to-Sell"
          }
        ]
      : [
          {
            icon: Beaker,
            title: "R&D & Active Formulation",
            desc: "Choose from proven standard formulations or develop unique active profiles.",
            tag: "Formula R&D"
          },
          {
            icon: Cpu,
            title: "Cleanroom Standard Manufacturing",
            desc: "Automated high-speed mixing, precision filling and sterile sealing.",
            tag: "Cleanroom Tech"
          },
          {
            icon: FileCheck,
            title: "Thai FDA Notification & BMR",
            desc: "100% compliant cosmetic registrations with complete batch manufacturing records.",
            tag: "100% Regulatory"
          },
          {
            icon: Layers,
            title: "Packaging & Launch Readiness",
            desc: "Seamless packaging coordination, compliant labeling and market-ready dispatch.",
            tag: "Ready-to-Sell"
          }
        ];

  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-white py-16 dark:border-white/10 dark:bg-dark-section md:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/15" />

      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: 4 Pillars Interactive Card Grid */}
        <FadeUp className="lg:col-span-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-[4px] border border-primary/15 bg-[#f8f9fc] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-dark-card/60 dark:hover:border-accent/40 dark:hover:bg-dark-card"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-accent/20 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-dark-bg">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted dark:text-text-light">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-medium leading-snug text-text-dark dark:text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-text-muted dark:text-text-light">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-primary dark:text-accent">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>{locale === "th" ? "มาตรฐาน Pherada" : "Pherada Standard"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Right Column: Philosophy, Stats and Overview */}
        <FadeUp delay={0.08} className="lg:col-span-6 lg:pl-6">
          <div className="inline-flex items-center gap-2 rounded-[2px] bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:bg-accent/10 dark:text-accent">
            <Sparkles size={14} />
            <span>{t("home.simple.eyebrow")}</span>
          </div>

          <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-text-dark dark:text-white sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base font-normal leading-relaxed text-text-muted dark:text-text-light md:text-lg">
            {locale === "th"
              ? "Pherada Cosmetics Ltd. ช่วยให้เจ้าของแบรนด์เริ่มต้นสร้างผลิตภัณฑ์เครื่องสำอางได้อย่างมั่นใจ ด้วยขั้นตอนการทำงานที่โปร่งใส ตรวจสอบได้จริงทุกขั้นตอน พร้อมทีมงานที่ดูแลตั้งแต่การเลือกสูตร แพ็กเกจ จนถึงเอกสารจดแจ้ง อย."
              : "Pherada Cosmetics Ltd. enables beauty entrepreneurs to launch skincare products with confidence, supported by transparent workflows from formula formulation to FDA approval and packaging."}
          </p>

          <p className="mt-3 text-sm font-normal leading-relaxed text-text-muted dark:text-text-light">
            {locale === "th"
              ? "เราเน้นความชัดเจนของขั้นตอน งานผลิตที่มีบันทึกควบคุมคุณภาพ (BMR) ทุกแบตช์ และการให้คำปรึกษาที่ตรงโจทย์งบประมาณของลูกค้าแต่ละท่าน"
              : "We focus on production traceability, batch records (BMR), and practical consultation tailored to each brand budget and timeline."}
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-primary/10 pt-6 dark:border-white/10">
            <div>
              <p className="font-serif text-3xl font-light text-primary dark:text-accent md:text-4xl">8+</p>
              <p
                className={cn(
                  "mt-1 text-xs uppercase text-text-muted dark:text-text-light",
                  locale === "th" ? "tracking-normal" : "tracking-[0.06em]"
                )}
              >
                {locale === "th" ? "สูตรจริงพร้อมผลิต" : "Factory formulas"}
              </p>
            </div>
            <div className="h-8 w-px bg-primary/10 dark:bg-white/10" />
            <div>
              <p className="font-serif text-3xl font-light text-primary dark:text-accent md:text-4xl">7</p>
              <p
                className={cn(
                  "mt-1 text-xs uppercase text-text-muted dark:text-text-light",
                  locale === "th" ? "tracking-normal" : "tracking-[0.06em]"
                )}
              >
                {locale === "th" ? "ขั้นตอนผลิตชัดเจน" : "Production steps"}
              </p>
            </div>
            <div className="h-8 w-px bg-primary/10 dark:bg-white/10" />
            <div>
              <p className="font-serif text-3xl font-light text-primary dark:text-accent md:text-4xl">2565</p>
              <p
                className={cn(
                  "mt-1 text-xs uppercase text-text-muted dark:text-text-light",
                  locale === "th" ? "tracking-normal" : "tracking-[0.06em]"
                )}
              >
                {locale === "th" ? "เริ่มจดทะเบียน" : "Registered"}
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
