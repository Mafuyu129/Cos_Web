"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]/90 dark:hover:border-[#48ACD6]"
    >
      {/* Top clinical accent gradient */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6] opacity-75 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#48ACD6]/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <Icon size={22} />
          </div>
          <span className="rounded-lg border border-[#0038AE]/15 bg-[#F4F9FD] px-2.5 py-1 font-mono text-[11px] font-bold text-[#0038AE] dark:border-[#48ACD6]/30 dark:bg-white/[0.05] dark:text-[#48ACD6]">
            LAB-MOD // {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-xl font-extrabold leading-snug text-text-dark transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6]">
          {title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-text-light/85">
          {description}
        </p>

        {/* Highlighted items chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.items.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-lg border border-[#0038AE]/12 bg-[#F4F9FD] px-2.5 py-1 text-xs font-semibold text-text-dark dark:border-white/10 dark:bg-white/[0.05] dark:text-text-light"
            >
              {item}
            </span>
          ))}
          {service.items.length > 4 ? (
            <span className="px-1.5 py-1 font-mono text-xs font-semibold text-[#0038AE] dark:text-[#48ACD6]">
              +{service.items.length - 4}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-[#0038AE]/10 pt-4 text-xs font-bold text-[#0038AE] dark:border-white/10 dark:text-[#48ACD6]">
        <span className="flex items-center gap-1.5 text-text-muted dark:text-text-light/80">
          <CheckCircle2 size={14} className="text-[#48ACD6]" />
          <span>OEM / ODM Ready</span>
        </span>
        <span className="inline-flex items-center gap-1.5 uppercase tracking-wider">
          {t("card.viewService")}
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

