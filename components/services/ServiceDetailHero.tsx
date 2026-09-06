"use client";

import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
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
    <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-b from-white via-light-bg to-white py-16 text-text-dark dark:border-white/10 dark:from-dark-bg dark:via-dark-section dark:to-dark-bg dark:text-white md:py-24">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[100px] dark:bg-primary/20" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-[2px] bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary dark:bg-accent/10 dark:text-accent">
            <Sparkles size={14} />
            <span>OEM / ODM Service</span>
          </div>

          <h1 className="font-serif text-4xl font-normal leading-tight text-text-dark dark:text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-text-muted dark:text-text-light md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button href="/contact">
              {locale === "th" ? "ขอใบเสนอราคา" : "Request Quote"} <ArrowRight size={18} />
            </Button>
            <Button href="/products" variant="secondary">
              {locale === "th" ? "ดูตัวอย่างผลิตภัณฑ์" : "View Samples"}
            </Button>
          </div>
        </div>

        {/* Feature & Category Specs Card */}
        <div className="relative overflow-hidden rounded-[4px] border border-primary/15 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-center justify-between border-b border-primary/10 pb-4 dark:border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-primary dark:text-accent" />
              <span className="font-serif text-lg font-medium text-text-dark dark:text-white">
                {locale === "th" ? "ขอบเขตผลิตภัณฑ์ในกลุ่มนี้" : "Production Capabilities"}
              </span>
            </div>
            <span className="rounded-[2px] bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              ISO & GMP
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[2px] border border-primary/10 bg-[#f8fafd] p-3 text-sm font-medium text-text-dark transition hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02] dark:text-white"
              >
                <Check size={16} className="shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-4 text-xs font-semibold text-text-muted dark:border-white/10 dark:text-text-light">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck size={15} />
              {locale === "th" ? "จดแจ้ง อย. ถูกต้อง 100%" : "Thai FDA Ready"}
            </span>
            <span>MOQ: {service.moq.split(" ")[0] || "100"} ชิ้น</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
