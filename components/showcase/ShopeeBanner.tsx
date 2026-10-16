"use client";

import { ExternalLink, FlaskConical, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { company } from "@/data/company";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ShopeeBanner({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const shopeeUrl = company.shopeeUrl || "https://th.shp.ee/N9Rs9s4y";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-r from-[#04091A] via-[#002B88] to-[#0B5A8A] p-7 text-white shadow-premium md:p-10 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-20" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#48ACD6]/25 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EE4D2D] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              <ShopeeIcon className="h-3.5 w-3.5" />
              <span>{locale === "th" ? "SHOPEE OFFICIAL STORE" : "OFFICIAL SHOPEE STORE"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#48ACD6]/40 bg-white/10 px-3 py-1 font-mono text-[11px] font-semibold text-[#9EE4FF]">
              <FlaskConical size={12} className="text-[#48ACD6]" />
              LAB SAMPLE DISPATCH
            </span>
          </div>

          <h2 className="text-2xl font-extrabold leading-snug text-white sm:text-3xl">
            {locale === "th"
              ? "สั่งซื้อขนาดทดลองจากห้องแล็บ Pherada ผ่าน Shopee ทางการ"
              : "Order Clinical Formula Samples Directly on Shopee"}
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-[#CBEBFF]/90 sm:text-base">
            {locale === "th"
              ? "ทดสอบเนื้อสัมผัส ประสิทธิภาพของสารสกัด Active และความอ่อนโยนต่อผิวก่อนตัดสินใจสั่งผลิต OEM จริง จัดส่งตรงจากโรงงาน Pherada Cosmetics"
              : "Test clinical textures, active absorption, and skin compatibility before full OEM production—shipped directly from Pherada Cosmetics Lab."}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90 sm:text-sm">
            <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-[#48ACD6]" />
              {locale === "th" ? "สูตรแท้จากห้องแล็บ 100%" : "100% Lab Authentic"}
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <Truck className="h-4 w-4 text-[#48ACD6]" />
              {locale === "th" ? "จัดส่งไวทั่วประเทศ" : "Fast Nationwide Shipping"}
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
              <Sparkles className="h-4 w-4 text-[#48ACD6]" />
              {locale === "th" ? "สั่งเริ่มต้น 1 ชิ้นเพื่อทดสอบได้" : "Order From 1 Sample Unit"}
            </span>
          </div>
        </div>

        <div className="flex shrink-0">
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#EE4D2D] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#d84022]"
          >
            <ShopeeIcon className="h-4 w-4" />
            <span>{locale === "th" ? "ไปที่ร้านค้า Shopee ทางการ" : "Visit Official Shopee Store"}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

