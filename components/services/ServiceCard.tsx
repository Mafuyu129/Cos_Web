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
      className="group block h-full rounded-[4px] border border-primary/10 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:bg-[#e6ecff] dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-serif text-5xl font-medium leading-none text-primary dark:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-[2px] bg-light-bg text-primary transition group-hover:bg-white dark:bg-white/10 dark:text-accent">
          <Icon size={22} />
        </span>
      </div>
      <h3 className="font-serif text-3xl font-medium text-text-dark dark:text-white">{title}</h3>
      <p className="mt-4 min-h-20 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
        {description}
      </p>
      <div className="mt-8 flex items-center gap-2 text-base font-bold text-primary dark:text-accent">
        {t("card.viewService")} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
