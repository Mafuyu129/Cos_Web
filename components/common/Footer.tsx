"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/common/BrandMark";
import { company } from "@/data/company";
import { navItems } from "@/data/nav";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "./Container";

export function Footer() {
  const { locale, t } = useLanguage();
  const secondaryName = locale === "th" ? company.nameEn : company.concept;
  const address = locale === "th" ? company.address : company.addressEn;

  return (
    <footer className="border-t border-border bg-light-bg text-text-dark dark:border-white/10 dark:bg-dark-bg dark:text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandMark className="h-12 w-12 rounded-xl" />
            <div>
              <p className="text-lg font-bold">{locale === "th" ? company.nameTh : company.nameEn}</p>
              <p className="text-base text-text-muted dark:text-text-light">{secondaryName}</p>
            </div>
          </div>
          <p className="max-w-md text-base leading-8 text-text-muted dark:text-text-light">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-accent">
          <p
            className={cn(
              "mb-4 text-base font-semibold uppercase text-accent",
              locale === "th" ? "tracking-normal" : "tracking-[0.18em]"
            )}
          >
            {t("footer.site")}
          </p>
          <div className="grid gap-2 text-base text-text-muted dark:text-text-light">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary dark:hover:text-white">
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p
            className={cn(
              "mb-4 text-base font-semibold uppercase text-accent",
              locale === "th" ? "tracking-normal" : "tracking-[0.18em]"
            )}
          >
            {t("footer.contact")}
          </p>
          <div className="grid gap-3 text-base text-text-muted dark:text-text-light">
            <div className="flex gap-3">
              <Phone size={18} className="mt-0.5 text-accent" />
              <span className="flex flex-wrap gap-x-2 gap-y-1">
                {company.phone.map((phone, index) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replaceAll("-", "")}`}
                    className="transition hover:text-primary dark:hover:text-white"
                  >
                    {phone}
                    {index < company.phone.length - 1 ? "," : ""}
                  </a>
                ))}
              </span>
            </div>
            <a
              href={`mailto:${company.email}`}
              className="flex gap-3 transition hover:text-primary dark:hover:text-white"
            >
              <Mail size={18} className="mt-0.5 text-accent" />
              <span>{company.email}</span>
            </a>
            <a
              href={company.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 transition hover:text-primary dark:hover:text-white"
            >
              <MessageCircle size={18} className="mt-0.5 text-accent" />
              <span>Line: {company.line}</span>
            </a>
            <a
              href={company.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 transition hover:text-primary dark:hover:text-white"
            >
              <MapPin size={18} className="mt-0.5 text-accent" />
              <span>{address}</span>
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-border py-5 text-center text-sm text-text-muted dark:border-white/10 dark:text-text-light">
        © 2026 {company.nameEn}. All rights reserved.
      </div>
    </footer>
  );
}
