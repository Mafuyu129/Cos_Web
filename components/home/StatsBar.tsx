"use client";

import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const stats = [
  ["8", "stats.services"],
  ["7", "stats.steps"],
  ["100+", "stats.moq"],
  ["2565", "stats.delivery"]
];

export function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-[#0038AE]/15 bg-white py-6 dark:border-white/10 dark:bg-[#071126]">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-xl border border-[#0038AE]/10 bg-[#F4F9FD] p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <p className="font-mono text-3xl font-extrabold text-[#0038AE] dark:text-[#48ACD6] md:text-4xl">{value}</p>
            <p className="mt-1 text-xs font-semibold text-text-muted dark:text-text-light/80">
              {t(label)}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
