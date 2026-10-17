"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ProcessStep } from "@/data/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const { locale } = useLanguage();

  return (
    <div className="grid border-t border-l border-[#071126]/15 dark:border-white/15 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="group relative flex flex-col justify-between border-r border-b border-[#071126]/15 bg-white p-8 transition-colors duration-300 hover:bg-[#F7F9FC] dark:border-white/15 dark:bg-[#050C1D] dark:hover:bg-white/[0.03]"
        >
          <div>
            <div className="mb-6 flex items-baseline justify-between border-b border-[#071126]/10 pb-4 dark:border-white/10">
              <span className="font-serif text-4xl font-light italic text-[#0038AE] dark:text-[#48ACD6]">
                0{step.number}
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted dark:text-white/50">
                {locale === "th" ? `PHASE 0${step.number}` : `PHASE 0${step.number}`}
              </span>
            </div>

            <h3 className="text-lg font-semibold leading-snug text-[#071126] transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6] sm:text-xl">
              {locale === "th" ? step.title : step.titleEn}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-text-muted dark:text-white/70">
              {locale === "th" ? step.description : step.descriptionEn}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between pt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#0038AE] dark:text-[#48ACD6]">
            <span>{locale === "th" ? "บันทึกควบคุมคุณภาพ BMR" : "BMR Traceability"}</span>
            <span className="font-serif italic">The Blue Factory</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}


