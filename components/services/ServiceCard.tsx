"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

const serviceVisuals: Record<string, { photo: string; position?: string; tagEn: string }> = {
  "facial-care": {
    photo: "/images/products/studio-serum.jpg",
    position: "center center",
    tagEn: "CLINICAL SKINCARE"
  },
  "body-care": {
    photo: "/images/products/studio-cream-jar.jpg",
    position: "center center",
    tagEn: "BODY & SPA FORMULATION"
  },
  "hair-care": {
    photo: "/images/products/studio-cleanser-pump.jpg",
    position: "center center",
    tagEn: "SCALP & HAIR CARE"
  },
  "fragrance-aroma": {
    photo: "/images/hero/luxury-cosmetic-bottles.jpg",
    position: "center center",
    tagEn: "SCENT & AROMA DESIGN"
  },
  "packaging-labeling": {
    photo: "/images/products/studio-mask-jar.jpg",
    position: "center center",
    tagEn: "VESSEL & BRAND ARTWORK"
  },
  "fda-document-service": {
    photo: "/images/hero/clinical-lab-scientist.jpg",
    position: "center top",
    tagEn: "THAI FDA & BMR COMPLIANCE"
  }
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { locale, t } = useLanguage();
  const title = locale === "th" ? service.titleTh : service.title;
  const description = locale === "th" ? service.shortDescriptionTh : service.shortDescription;
  const visual = serviceVisuals[service.slug] ?? {
    photo: "/images/hero/luxury-cosmetic-bottles.jpg",
    position: "center center",
    tagEn: "OEM / ODM SERVICE"
  };

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col justify-between border border-[#071126]/15 bg-white transition-colors duration-300 hover:border-[#0038AE] dark:border-white/15 dark:bg-[#050C1D] dark:hover:border-[#48ACD6]"
    >
      <div>
        {/* Editorial Photographic Header */}
        <div className="relative aspect-[16/9.5] w-full overflow-hidden border-b border-[#071126]/10 bg-[#030816] dark:border-white/10">
          <Image
            src={visual.photo}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: visual.position }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030816]/85 via-[#030816]/20 to-transparent" />

          <div className="absolute inset-x-5 bottom-4 flex items-end justify-between text-white">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48ACD6]">
                {visual.tagEn}
              </span>
              <p className="mt-0.5 font-serif text-lg italic text-white/95">
                {service.title}
              </p>
            </div>
            <span className="font-serif text-3xl font-light italic leading-none text-[#9EE4FF]">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Architectural Card Body */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-semibold leading-snug text-[#071126] transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6]">
            {title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-white/70">
            {description}
          </p>

          {/* Capabilities Line */}
          <div className="mt-5 border-t border-[#071126]/10 pt-4 dark:border-white/10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted dark:text-white/50">
              {locale === "th" ? "ครอบคลุมรายการผลิต (CAPABILITIES)" : "CAPABILITIES"}
            </p>
            <p className="mt-1.5 text-xs font-medium text-[#071126] dark:text-white/85">
              {service.items.join("  •  ")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Hairline Footer */}
      <div className="flex items-center justify-between border-t border-[#071126]/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#0038AE] transition group-hover:bg-[#0038AE] group-hover:text-white dark:border-white/15 dark:text-[#48ACD6] dark:group-hover:bg-[#48ACD6] dark:group-hover:text-[#030816] sm:px-7">
        <span>{t("card.viewService")}</span>
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}


