"use client";

import { Beaker, ClipboardCheck, FlaskConical, ShieldCheck, Sparkles, Verified } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TrustStrip() {
  const { locale } = useLanguage();
  const items =
    locale === "th"
      ? [
          { icon: FlaskConical, label: "DERMO-COSMETIC OEM / ODM" },
          { icon: Beaker, label: "CLINICAL R&D FORMULATION" },
          { icon: ShieldCheck, label: "100% THAI FDA NOTIFICATION" },
          { icon: ClipboardCheck, label: "BMR BATCH TRACEABILITY" },
          { icon: Sparkles, label: "HIGH-PURITY BIO-ACTIVES" },
          { icon: Verified, label: "ONE-STOP BRAND LAUNCH" }
        ]
      : [
          { icon: FlaskConical, label: "DERMO-COSMETIC OEM / ODM" },
          { icon: Beaker, label: "CLINICAL R&D FORMULATION" },
          { icon: ShieldCheck, label: "100% THAI FDA NOTIFICATION" },
          { icon: ClipboardCheck, label: "BMR BATCH TRACEABILITY" },
          { icon: Sparkles, label: "HIGH-PURITY BIO-ACTIVES" },
          { icon: Verified, label: "ONE-STOP BRAND LAUNCH" }
        ];

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#001F66] via-[#0038AE] to-[#1A7DA6] px-6 py-4 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex shrink-0 items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/95"
            >
              <Icon size={14} className="text-[#48ACD6]" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

