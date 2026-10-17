"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";
import type { Product } from "@/data/products";
import { CosmeceuticalProductVisual } from "./CosmeceuticalProductVisual";

export function ProductDetail({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const title = locale === "th" ? product.titleTh : product.title;
  const category = locale === "th" ? product.categoryTh : product.category;
  const description = locale === "th" ? product.shortDescriptionTh : product.shortDescription;
  const shopeeUrl = product.shopeeUrl || company.shopeeUrl;

  const detailCards =
    locale === "th"
      ? [
          ["01 / CLINICAL CONCEPT", product.concept],
          ["02 / TEXTURE & SENSORY", product.texture],
          ["03 / STARTER MOQ", product.moq],
          ["04 / PRODUCTION TIMELINE", product.timeline]
        ]
      : [
          ["01 / CLINICAL CONCEPT", product.shortDescription],
          ["02 / TEXTURE & SENSORY", "Engineered for high dermal absorption and daily skin comfort."],
          ["03 / STARTER MOQ", product.moq],
          ["04 / PRODUCTION TIMELINE", product.timeline]
        ];

  const infoGroups =
    locale === "th"
      ? [
          ["สารสำคัญระดับคลินิก (KEY ACTIVES)", product.ingredients],
          ["ประสิทธิภาพของสูตร (CLINICAL BENEFITS)", product.benefits],
          ["ขั้นตอนการใช้ (APPLICATION STEPS)", product.usage]
        ]
      : [
          ["KEY ACTIVE INGREDIENTS", product.ingredients],
          ["CLINICAL FORMULA BENEFITS", product.benefits],
          ["APPLICATION PROTOCOL", product.usage]
        ];

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-16 dark:bg-[#030816] md:py-24">
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Left Column: Studio Product Photography & Sample Dispatch */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="border border-[#071126]/15 bg-white p-4 dark:border-white/15 dark:bg-[#050C1D]">
            <div className="aspect-[4/3.8] w-full">
              <CosmeceuticalProductVisual product={product} size="detail" />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#071126]/10 pt-3.5 text-xs dark:border-white/10">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0038AE] dark:text-[#48ACD6]">
                THE BLUE FACTORY • READY FORMULA
              </span>
              <span className="font-serif italic text-text-muted dark:text-white/70">
                {locale === "th" ? "พร้อมผลิต OEM / ODM" : "Ready for OEM / ODM"}
              </span>
            </div>
          </div>

          {/* Shopee Sample Order Card */}
          <div className="border border-white/15 bg-[#030816] p-7 text-white">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48ACD6]">
                  SAMPLE DISPATCH
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {locale === "th" ? "สั่งชุดเทสเตอร์ทดลองบน Shopee" : "Order Lab Sample on Shopee"}
                </h3>
              </div>
              <ShopeeIcon className="h-6 w-6 text-[#EE4D2D]" />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/75">
              {locale === "th"
                ? "ทดสอบเนื้อสัมผัสและผลลัพธ์บนผิวจริงก่อนตัดสินใจสั่งผลิต OEM จัดส่งตรงจากห้องปฏิบัติการ Pherada Cosmetics ผ่านร้านค้า Shopee ทางการ"
                : "Order authentic lab test samples directly manufactured by Pherada via our verified Shopee storefront."}
            </p>

            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 bg-[#EE4D2D] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#d84022]"
            >
              <ShopeeIcon className="h-4 w-4" />
              <span>{locale === "th" ? "คลิกสั่งซื้อขนาดทดลองบน Shopee" : "Buy Sample on Shopee"}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Formula Dossier */}
        <div>
          <div className="editorial-eyebrow text-[#0038AE] dark:text-[#48ACD6]">
            <span>{category} • MOQ 100 PCS • THAI FDA READY</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#071126] dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-text-muted dark:text-white/75 md:text-lg">
            {description}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact">
              <span>{locale === "th" ? "ขอใบเสนอราคาผลิตสูตรนี้" : "Request OEM Quote for Formula"}</span>
              <ArrowRight size={16} />
            </Button>
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#EE4D2D] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#d84022]"
            >
              <ShopeeIcon className="h-4 w-4" />
              <span>{locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Buy Sample on Shopee"}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* 4 Architectural Specification Cells */}
          <div className="mt-10 grid border-t border-l border-[#071126]/15 dark:border-white/15 sm:grid-cols-2">
            {detailCards.map(([cardTitle, text]) => (
              <div
                key={cardTitle}
                className="border-r border-b border-[#071126]/15 bg-white p-6 dark:border-white/15 dark:bg-[#050C1D]"
              >
                <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0038AE] dark:text-[#48ACD6]">
                  {cardTitle}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#071126]/85 dark:text-white/80">{text}</p>
              </div>
            ))}
          </div>

          {/* Compatible Clinical Packaging */}
          <div className="mt-8 border border-[#071126]/15 bg-white p-6 dark:border-white/15 dark:bg-[#050C1D]">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0038AE] dark:text-[#48ACD6]">
              {locale === "th" ? "บรรจุภัณฑ์ที่รองรับ (COMPATIBLE VESSELS)" : "COMPATIBLE CLINICAL PACKAGING"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.packageOptions.map((option) => (
                <span
                  key={option}
                  className="inline-flex items-center gap-2 border border-[#071126]/15 bg-[#F7F9FC] px-4 py-2 text-xs font-semibold text-[#071126] dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                >
                  <Check size={14} className="text-[#48ACD6]" />
                  {option}
                </span>
              ))}
            </div>
          </div>

          {/* Key Actives, Clinical Benefits & Usage Protocol */}
          <div className="mt-8 grid border-t border-l border-[#071126]/15 dark:border-white/15 lg:grid-cols-3">
            {infoGroups.map(([heading, items]) => (
              <div
                key={heading as string}
                className="border-r border-b border-[#071126]/15 bg-white p-6 dark:border-white/15 dark:bg-[#050C1D]"
              >
                <h2 className="border-b border-[#071126]/10 pb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0038AE] dark:border-white/10 dark:text-[#48ACD6]">
                  {heading as string}
                </h2>
                <div className="mt-4 space-y-3">
                  {(items as string[]).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-text-muted dark:text-white/75"
                    >
                      <Check size={14} className="mt-0.5 shrink-0 text-[#0038AE] dark:text-[#48ACD6]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


