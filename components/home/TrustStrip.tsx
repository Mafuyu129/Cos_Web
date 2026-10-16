"use client";

import { Beaker, ClipboardCheck, FlaskConical, ShieldCheck, Sparkles, Verified } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TrustStrip() {
  const { locale } = useLanguage();
  const items =
    locale === "th"
      ? [
          { icon: Sparkles, label: "เริ่มต้นผลิตเพียง 100 ชิ้น" },
          { icon: ShieldCheck, label: "จดแจ้ง อย. ถูกต้อง 100%" },
          { icon: Beaker, label: "ปรับแต่งสูตรเฉพาะแบรนด์คุณ" },
          { icon: ClipboardCheck, label: "บันทึก BMR ตรวจสอบย้อนกลับได้" },
          { icon: FlaskConical, label: "มีเซ็ตเทสเตอร์ให้ทดลองจริง" },
          { icon: Verified, label: "One-Stop Service พร้อมวางขาย" }
        ]
      : [
          { icon: Sparkles, label: "Low Starter MOQ from 100 Pcs" },
          { icon: ShieldCheck, label: "100% Thai FDA Compliant" },
          { icon: Beaker, label: "Bespoke Active Formulation" },
          { icon: ClipboardCheck, label: "BMR Quality & Batch Traceability" },
          { icon: FlaskConical, label: "Sample Tester Kits Available" },
          { icon: Verified, label: "Turnkey One-Stop Brand Launch" }
        ];

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#001F66] via-[#0038AE] to-[#1A7DA6] px-6 py-4 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex shrink-0 items-center gap-2 text-xs font-semibold text-white/95"
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

