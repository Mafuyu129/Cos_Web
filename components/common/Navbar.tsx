"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-dark-bg/95">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark className="h-9 w-9 rounded-[2px]" />
          <span className="leading-tight">
            <span className="block font-serif text-2xl font-normal uppercase leading-none tracking-[0.14em] text-primary">
              Pherada
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-semibold uppercase text-text-muted transition hover:text-primary dark:text-text-light dark:hover:text-accent",
                  locale === "th" ? "tracking-normal" : "tracking-[0.06em]",
                  active && "text-primary dark:text-accent"
                )}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button href="/contact" className="min-h-11 px-5 py-2.5">
            {t("nav.quote")}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-border bg-white text-text-dark dark:border-white/15 dark:bg-white/10 dark:text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-white dark:border-white/10 dark:bg-dark-bg lg:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-3 text-sm font-semibold uppercase text-text-dark hover:bg-primary/5 dark:text-text-light dark:hover:bg-white/10 dark:hover:text-white",
                  locale === "th" ? "tracking-normal" : "tracking-[0.08em]"
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <Button href="/contact" onClick={() => setOpen(false)} className="mt-2 w-full">
              {t("nav.start")}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
