"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ProcessStep } from "@/data/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const { locale } = useLanguage();

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]/90"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6] opacity-70 transition-opacity group-hover:opacity-100" />

          <div>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] font-mono text-base font-extrabold text-white shadow-sm">
                {String(step.number).padStart(2, "0")}
              </div>
              <span className="rounded-lg border border-[#0038AE]/12 bg-[#F4F9FD] px-2.5 py-1 text-[11px] font-semibold text-[#0038AE] dark:border-white/10 dark:bg-white/5 dark:text-[#48ACD6]">
                {locale === "th" ? `ขั้นตอนที่ ${step.number}` : `Step 0${step.number}`}
              </span>
            </div>

            <h3 className="text-lg font-extrabold leading-snug text-text-dark transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6]">
              {locale === "th" ? step.title : step.titleEn}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-text-light/85">
              {locale === "th" ? step.description : step.descriptionEn}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#0038AE]/10 pt-3.5 text-xs font-semibold text-[#0038AE] dark:border-white/10 dark:text-[#48ACD6]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#48ACD6]" />
              <span>{locale === "th" ? "ควบคุมคุณภาพมาตรฐานแล็บ" : "Clinical QC Verified"}</span>
            </span>
            <span className="font-mono text-[10px] opacity-75">BMR LOG</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

