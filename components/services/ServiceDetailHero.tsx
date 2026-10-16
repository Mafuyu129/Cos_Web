"use client";

import { ArrowRight, Check, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Service } from "@/data/services";

type ServiceDetailHeroProps = {
  service: Omit<Service, "icon">;
};

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const { locale } = useLanguage();
  const title = locale === "th" ? service.titleTh : service.title;
  const description = locale === "th" ? service.description : service.shortDescription;

  return (
    <section className="relative overflow-hidden border-b border-[#0038AE]/15 bg-gradient-to-br from-[#04091A] via-[#002370] to-[#083B7A] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-25" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#0038AE]/40 blur-[110px]" />
      <div className="pointer-events-none absolute right-10 bottom-0 h-80 w-80 rounded-full bg-[#48ACD6]/25 blur-[110px]" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#48ACD6]/40 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#9EE4FF] backdrop-blur-md">
            <FlaskConical size={14} className="text-[#48ACD6]" />
            <span>DERMO-COSMETIC OEM / ODM MODULE</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#CBEBFF]/90 md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button
              href="/contact"
              variant="light"
              className="bg-white text-[#0038AE] hover:bg-[#E8F7FC]"
            >
              <span>{locale === "th" ? "ขอใบเสนอราคาบริการนี้" : "Request Service Quote"}</span>
              <ArrowRight size={17} />
            </Button>
            <Button
              href="/products"
              variant="secondary"
              className="border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20"
            >
              {locale === "th" ? "ดูตัวอย่างสูตรมาตรฐาน" : "View Base Formulas"}
            </Button>
          </div>
        </div>

        {/* Clinical Capabilities Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-premium backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <div className="flex items-center gap-2.5">
              <Sparkles size={18} className="text-[#48ACD6]" />
              <span className="text-base font-bold text-white">
                {locale === "th" ? "ขอบเขตผลิตภัณฑ์ที่รับผลิต" : "Clinical Production Scope"}
              </span>
            </div>
            <span className="rounded-full border border-[#48ACD6]/40 bg-[#48ACD6]/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#9EE4FF]">
              LAB CERTIFIED
            </span>
          </div>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-xs font-semibold text-white transition hover:border-[#48ACD6]/50"
              >
                <Check size={15} className="shrink-0 text-[#48ACD6]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-semibold text-[#CBEBFF]">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <ShieldCheck size={15} />
              {locale === "th" ? "จดแจ้ง อย. & BMR ครบวงจร" : "100% Thai FDA & BMR Ready"}
            </span>
            <span className="font-mono">{service.moq}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

