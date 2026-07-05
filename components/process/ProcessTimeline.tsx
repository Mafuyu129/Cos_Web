"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ProcessStep } from "@/data/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const { locale } = useLanguage();

  return (
    <div className="relative">
      <div className="grid border border-primary/10 bg-white dark:border-white/10 dark:bg-white/[0.04] md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="relative border-b border-primary/10 bg-white p-7 transition hover:bg-[#e6ecff] dark:border-white/10 dark:bg-transparent dark:hover:bg-white/[0.08] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div className="mb-5 font-serif text-4xl font-medium leading-none text-primary dark:text-accent">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-serif text-[28px] font-medium leading-tight text-text-dark dark:text-white">
              {locale === "th" ? step.title : step.titleEn}
            </h3>
            <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
              {locale === "th" ? step.description : step.descriptionEn}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
