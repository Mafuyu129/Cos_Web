"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const { locale, t } = useLanguage();
  const title = locale === "th" ? service.titleTh : service.title;
  const description = locale === "th" ? service.shortDescriptionTh : service.shortDescription;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col justify-between rounded-[4px] border border-primary/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-accent/40"
    >
      {/* Top right ambient highlight */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-accent/15" />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-serif text-3xl font-light leading-none text-primary/60 dark:text-accent/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-[2px] bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:bg-accent/20 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-dark-bg">
            <Icon size={22} />
          </span>
        </div>

        <h3 className="font-serif text-2xl font-medium leading-snug text-text-dark transition group-hover:text-primary dark:text-white dark:group-hover:text-accent">
          {title}
        </h3>

        <p className="mt-3 text-sm font-normal leading-relaxed text-text-muted dark:text-text-light">
          {description}
        </p>

        {/* Highlighted items chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.items.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-[2px] border border-primary/10 bg-[#f8fafd] px-2.5 py-1 text-xs font-medium text-text-dark dark:border-white/10 dark:bg-white/5 dark:text-text-light"
            >
              {item}
            </span>
          ))}
          {service.items.length > 3 ? (
            <span className="px-1 py-1 text-xs text-text-muted dark:text-text-light font-mono">
              +{service.items.length - 3}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 border-t border-primary/10 pt-4 text-xs font-semibold uppercase tracking-wider text-primary transition group-hover:text-[#002f94] dark:border-white/10 dark:text-accent">
        <span>{t("card.viewService")}</span>
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
