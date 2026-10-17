"use client";

import { ArrowUpRight } from "lucide-react";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { company } from "@/data/company";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ShopeeBanner({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const shopeeUrl = company.shopeeUrl || "https://th.shp.ee/N9Rs9s4y";

  return (
    <div
      className={`relative overflow-hidden border border-[#071126]/15 bg-[#030816] p-8 text-white dark:border-white/15 md:p-12 ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#0038AE]/35 blur-[110px]" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="editorial-eyebrow text-[#48ACD6]">
            <span>OFFICIAL SAMPLE DISPATCH • SHOPEE STORE</span>
          </div>

          <p className="mt-3 font-serif text-xl italic text-[#9EE4FF]">
            Test Sensory Feel Before Mass Production
          </p>

          <h2 className="mt-1 text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {locale === "th"
              ? "สั่งซื้อขนาดทดลองจากห้องแล็บ Pherada ผ่าน Shopee ทางการ"
              : "Order Clinical Formula Samples Directly on Shopee"}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            {locale === "th"
              ? "ทดสอบเนื้อสัมผัส ประสิทธิภาพของสารสกัด Active และความอ่อนโยนต่อผิวก่อนตัดสินใจสั่งผลิต OEM จริง จัดส่งตรงจากโรงงาน Pherada Cosmetics"
              : "Test clinical textures, active absorption, and skin compatibility before full OEM production—shipped directly from Pherada Cosmetics Lab."}
          </p>
        </div>

        <div className="flex shrink-0">
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#EE4D2D] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#d84022]"
          >
            <ShopeeIcon className="h-4 w-4" />
            <span>{locale === "th" ? "สั่งซื้อเทสเตอร์บน Shopee" : "Visit Official Shopee Store"}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}


