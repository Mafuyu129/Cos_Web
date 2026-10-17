"use client";

import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { ShopeeIcon } from "./ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50">
      {/* Top Architectural Editorial Bar */}
      <div className="hidden border-b border-white/10 bg-[#020611] text-white/85 lg:block">
        <Container className="flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="font-semibold uppercase tracking-[0.18em] text-[#48ACD6]">
              THE BLUE FACTORY
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span className="font-serif text-sm italic text-white/85">
              From the Concept to Global Success
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span className="text-white/85">
              {locale === "th"
                ? "โรงงานวิจัยและรับผลิตเวชสำอาง OEM / ODM มาตรฐาน อย. & BMR"
                : "Clinical Cosmeceutical OEM / ODM • Thai FDA & BMR Standard"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phone[0].replaceAll("-", "")}`}
              className="inline-flex items-center gap-1.5 font-medium text-white/90 transition hover:text-[#48ACD6]"
            >
              <PhoneCall size={13} className="text-[#48ACD6]" />
              <span>{company.phone[0]}</span>
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a
              href={company.shopeeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white transition hover:text-[#48ACD6]"
            >
              <ShopeeIcon className="h-3.5 w-3.5 text-[#FF6B4A]" />
              <span>{locale === "th" ? "สั่งชุดเทสเตอร์ทดลอง (Shopee)" : "Order Discovery Samples"}</span>
              <ArrowUpRight size={13} className="opacity-80" />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Luxury Navigation Header */}
      <div className="border-b border-[#071126]/10 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#030816]/95">
        <Container className="flex h-[78px] items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3.5" onClick={() => setOpen(false)}>
            <BrandMark className="h-11 w-11 rounded-lg border border-[#0038AE]/15 transition duration-300 group-hover:border-[#48ACD6] dark:border-white/15" />
            <div className="leading-tight">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-[0.1em] text-[#071126] dark:text-white">
                  PHERADA
                </span>
                <span className="font-serif text-base italic text-[#0038AE] dark:text-[#48ACD6]">
                  The Blue Factory
                </span>
              </div>
              <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted dark:text-white/70">
                COSMECEUTICAL OEM & ODM LABORATORY
              </span>
            </div>
          </Link>

          {/* Architectural Hairline Nav */}
          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 font-medium transition-colors duration-200",
                    locale === "th" ? "text-[15px]" : "uppercase tracking-[0.12em] text-xs",
                    active
                      ? "font-semibold text-[#0038AE] dark:text-[#48ACD6]"
                      : "text-[#071126]/85 hover:text-[#0038AE] dark:text-white/85 dark:hover:text-white"
                  )}
                >
                  {t(item.labelKey)}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#0038AE] transition-transform duration-300 dark:bg-[#48ACD6]",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex h-10 items-center gap-2 bg-[#0038AE] px-5 text-sm font-semibold text-white transition hover:bg-[#002880] dark:bg-[#48ACD6] dark:text-[#030816] dark:hover:bg-white"
            >
              <span>{t("nav.quote")}</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center border border-[#071126]/15 bg-transparent text-[#071126] dark:border-white/15 dark:text-white"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </div>

      {open ? (
        <div className="border-b border-[#071126]/15 bg-white shadow-2xl dark:border-white/10 dark:bg-[#030816] lg:hidden">
          <Container className="divide-y divide-[#071126]/10 py-4 dark:divide-white/10">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3.5 text-base font-medium transition",
                    active
                      ? "font-semibold text-[#0038AE] dark:text-[#48ACD6]"
                      : "text-[#071126] dark:text-white/90"
                  )}
                >
                  <span>{t(item.labelKey)}</span>
                  <ArrowUpRight size={16} className="opacity-60" />
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#0038AE] py-3.5 text-sm font-semibold text-white"
              >
                <span>{t("nav.start")}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}


