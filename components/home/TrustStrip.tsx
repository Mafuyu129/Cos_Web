"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function TrustStrip() {
  const { locale } = useLanguage();
  const items =
    locale === "th"
      ? [
          { code: "OEM", label: "รับผลิตตามสูตรมาตรฐาน เริ่มต้น 100 ชิ้น" },
          { code: "ODM", label: "พัฒนาสูตรและเนื้อสัมผัสใหม่เฉพาะแบรนด์" },
          { code: "R&D", label: "วิจัยสารสกัดเวชสำอางเกรดคลินิก" },
          { code: "FDA", label: "ขึ้นทะเบียนจดแจ้ง อย. และเอกสาร BMR 100%" },
          { code: "PACKAGING", label: "คัดสรรบรรจุภัณฑ์และออกแบบฉลากครบวงจร" }
        ]
      : [
          { code: "OEM", label: "Ready-to-Produce Formulas from 100 Pcs" },
          { code: "ODM", label: "Bespoke Texture & Formula Engineering" },
          { code: "R&D", label: "Clinical-Grade Active Ingredient Research" },
          { code: "FDA", label: "100% Thai FDA Notification & BMR Records" },
          { code: "PACKAGING", label: "Turnkey Vessel Sourcing & Brand Design" }
        ];

  return (
    <div className="border-b border-[#071126]/10 bg-[#002880] text-white dark:border-white/10 dark:bg-[#051029]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
        {items.map((item) => (
          <div key={item.code} className="flex items-center gap-3 px-5 py-3.5">
            <span className="font-serif text-sm italic tracking-wider text-[#9EE4FF]">
              {item.code}
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-xs font-medium text-white/90">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


