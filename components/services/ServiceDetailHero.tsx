"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
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
    <section className="border-b border-primary/10 bg-white py-16 text-text-dark dark:border-white/10 dark:bg-dark-bg dark:text-white md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
            OEM / ODM Service
          </p>
          <h1 className="font-serif text-5xl font-medium leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-9 text-text-muted dark:text-text-light md:text-xl">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              {locale === "th" ? "ขอใบเสนอราคา" : "Request Quote"} <ArrowRight size={18} />
            </Button>
            <Button href="/process" variant="secondary">
              {locale === "th" ? "ดูขั้นตอนผลิต" : "View Process"}
            </Button>
          </div>
        </div>
        <div className="rounded-[4px] border border-primary/10 bg-[#f8f9fc] p-8 dark:border-white/10 dark:bg-white/[0.04]">
          <Sparkles size={44} className="text-primary dark:text-accent" />
          <div className="mt-8 grid gap-4">
            {service.items.slice(0, 5).map((item) => (
              <p key={item} className="flex items-center gap-3 text-lg font-medium text-text-muted dark:text-text-light">
                <Check size={18} className="text-accent" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
