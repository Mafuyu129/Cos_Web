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
    <section className="border-y border-border bg-white py-6 dark:border-white/10 dark:bg-dark-section">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-lg bg-light-bg p-5 dark:bg-white/[0.04]">
            <p className="text-3xl font-black text-primary dark:text-accent md:text-4xl">{value}</p>
            <p className="mt-1 text-sm font-medium text-text-muted dark:text-text-light">
              {t(label)}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
