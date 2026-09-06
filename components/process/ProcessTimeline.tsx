"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ProcessStep } from "@/data/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const { locale } = useLanguage();

  return (
    <div className="relative">
      <div className="grid rounded-[4px] border border-primary/15 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group relative flex flex-col justify-between border-b border-primary/10 bg-white p-7 transition-all duration-300 hover:bg-[#f2f7ff] dark:border-white/10 dark:bg-transparent dark:hover:bg-white/[0.05] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className="font-serif text-4xl font-light leading-none text-primary dark:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-[2px] bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary dark:bg-accent/15 dark:text-accent">
                  Phase {index + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium leading-snug text-text-dark transition group-hover:text-primary dark:text-white dark:group-hover:text-accent">
                {locale === "th" ? step.title : step.titleEn}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-text-muted dark:text-text-light">
                {locale === "th" ? step.description : step.descriptionEn}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-1.5 border-t border-primary/10 pt-3 text-[11px] font-semibold text-primary dark:border-white/10 dark:text-accent">
              <CheckCircle2 size={13} className="text-emerald-500" />
              <span>{locale === "th" ? "ตรวจสอบและควบคุมคุณภาพ" : "Quality Assured"}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
