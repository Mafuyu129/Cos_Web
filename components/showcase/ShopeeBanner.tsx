"use client";

import { ExternalLink, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { company } from "@/data/company";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ShopeeBanner({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const shopeeUrl = company.shopeeUrl || "https://th.shp.ee/N9Rs9s4y";

  return (
    <div
      className={`rounded-[4px] border border-primary/15 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04] ${className}`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-[2px] bg-[#EE4D2D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#EE4D2D]">
            <ShopeeIcon className="h-3.5 w-3.5" />
            <span>{locale === "th" ? "ร้านค้าทางการบน Shopee" : "Official Shopee Store"}</span>
          </div>

          <h2 className="font-serif text-2xl font-medium leading-snug text-text-dark dark:text-white sm:text-3xl">
            {locale === "th"
              ? "สั่งซื้อผลิตภัณฑ์และตัวอย่างสูตรผ่าน Shopee"
              : "Order Products & Formula Samples on Shopee"}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-text-light sm:text-base">
            {locale === "th"
              ? "สามารถสั่งซื้อสินค้าจริงและขนาดทดลองของ Pherada Cosmetics ผ่านร้านค้า Shopee อย่างเป็นทางการ เพื่อทดลองเนื้อสัมผัสและกลิ่นก่อนตัดสินใจสั่งผลิต"
              : "Shop authentic Pherada products and test formula samples directly on our official Shopee store with safe payment and fast delivery."}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-text-muted dark:text-text-light sm:text-sm">
            <span className="flex items-center gap-1.5 text-[#EE4D2D]">
              <ShieldCheck className="h-4 w-4" />
              {locale === "th" ? "การันตีของแท้ 100%" : "100% Authentic"}
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-accent" />
              {locale === "th" ? "จัดส่งรวดเร็วทั่วประเทศ" : "Fast Nationwide Delivery"}
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary dark:text-accent" />
              {locale === "th" ? "สั่งชิ้นเดี่ยวเพื่อทดลองได้" : "Available in Sample Sizes"}
            </span>
          </div>
        </div>

        <div className="flex shrink-0">
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-[2px] bg-[#EE4D2D] px-7 py-3.5 font-serif text-sm font-medium uppercase tracking-[0.14em] text-white shadow-sm transition duration-200 hover:bg-[#d84022]"
          >
            <ShopeeIcon className="h-4 w-4" />
            <span>{locale === "th" ? "ไปที่ร้านค้า Shopee" : "Visit Shopee Store"}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
