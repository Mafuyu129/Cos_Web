"use client";

import { FlaskConical, Menu, PhoneCall, ShieldCheck, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
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
      {/* Top Clinical Telemetry Bar */}
      <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#00226B] via-[#0038AE] to-[#1D7EA6] text-white lg:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wider text-[#9EE4FF]">
              <FlaskConical size={13} className="text-[#48ACD6]" />
              DERMO-COSMETIC OEM / ODM LAB
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <ShieldCheck size={13} className="text-[#48ACD6]" />
              {locale === "th"
                ? "มาตรฐานการผลิตเวชสำอาง • จดแจ้ง อย. & BMR ครบวงจร"
                : "Clinical Formulation • 100% Thai FDA & BMR Traceability"}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${company.phone[0].replaceAll("-", "")}`}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/90 transition hover:text-[#48ACD6]"
            >
              <PhoneCall size={12} className="text-[#48ACD6]" />
              <span>{company.phone[0]}</span>
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a
              href={company.shopeeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white transition hover:text-[#9EE4FF]"
            >
              <ShopeeIcon className="h-3.5 w-3.5 text-[#FF7A59]" />
              <span>{locale === "th" ? "สั่งขนาดทดลอง (Shopee Official)" : "Order Lab Samples (Shopee)"}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation Header */}
      <div className="border-b border-[#0038AE]/10 bg-white/90 shadow-[0_4px_24px_-6px_rgba(0,56,174,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#04091A]/90">
        <Container className="flex h-[76px] items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3.5" onClick={() => setOpen(false)}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] opacity-70 blur-[2px] transition group-hover:opacity-100" />
              <BrandMark className="relative h-11 w-11 rounded-xl border border-white/50" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-wider text-[#0038AE] dark:text-white">
                  PHERADA
                </span>
                <span className="rounded-md bg-[#0038AE]/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-[#0038AE] dark:bg-[#48ACD6]/20 dark:text-[#48ACD6]">
                  LAB
                </span>
              </div>
              <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted dark:text-[#48ACD6]">
                {locale === "th" ? "โรงงานผลิตเวชสำอาง & สกินแคร์" : "Cosmeceutical OEM / ODM"}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-2xl border border-[#0038AE]/10 bg-[#F4F9FD]/80 p-1.5 dark:border-white/10 dark:bg-white/[0.04] xl:flex">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200",
                    locale === "th" ? "tracking-normal text-[13px]" : "uppercase tracking-wider",
                    active
                      ? "bg-gradient-to-r from-[#0038AE] to-[#48ACD6] text-white shadow-sm"
                      : "text-text-muted hover:bg-white hover:text-[#0038AE] dark:text-text-light dark:hover:bg-white/10 dark:hover:text-white"
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Button href="/contact" className="min-h-10 rounded-xl px-5 py-2.5 text-xs">
              <Sparkles size={14} />
              <span>{t("nav.quote")}</span>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] text-[#0038AE] dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </div>

      {open ? (
        <div className="border-b border-[#0038AE]/15 bg-white/98 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#04091A]/98 lg:hidden">
          <Container className="grid gap-1.5 py-5">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition",
                    active
                      ? "bg-gradient-to-r from-[#0038AE] to-[#48ACD6] text-white"
                      : "text-text-dark hover:bg-[#0038AE]/5 dark:text-text-light dark:hover:bg-white/10"
                  )}
                >
                  <span>{t(item.labelKey)}</span>
                  <span className="font-mono text-[10px] opacity-70">→</span>
                </Link>
              );
            })}
            <div className="mt-3 grid gap-2 border-t border-[#0038AE]/10 pt-3 dark:border-white/10">
              <Button href="/contact" onClick={() => setOpen(false)} className="w-full">
                {t("nav.start")}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

