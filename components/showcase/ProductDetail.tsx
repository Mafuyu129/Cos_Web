"use client";

import {
  ArrowRight,
  Beaker,
  Check,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Truck
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
          ["คอนเซปต์เวชสำอาง (Clinical Concept)", product.concept],
          ["เนื้อสัมผัสและโปรโตคอลการใช้", product.texture],
          ["จำนวนผลิตขั้นต่ำ (Starter MOQ)", product.moq],
          ["ระยะเวลาการผลิต (Lead Time)", product.timeline]
        ]
      : [
          ["Clinical Concept", product.shortDescription],
          ["Texture & Application Protocol", "Engineered for high dermal absorption and daily skin comfort."],
          ["Starter OEM MOQ", product.moq],
          ["Estimated Production Timeline", product.timeline]
        ];

  const infoGroups =
    locale === "th"
      ? [
          ["สารสำคัญระดับคลินิก (Key Actives)", product.ingredients],
          ["ประสิทธิภาพของสูตร (Clinical Benefits)", product.benefits],
          ["ขั้นตอนการใช้ (Application Steps)", product.usage]
        ]
      : [
          ["Key Active Ingredients", product.ingredients],
          ["Clinical Formula Benefits", product.benefits],
          ["Application Protocol", product.usage]
        ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F9FD] via-white to-[#EAF4FC] py-14 dark:from-[#04091A] dark:via-[#081128] dark:to-[#04091A] md:py-20">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-40" />

      <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Left Column: Clinical Specimen Display & Shopee Sample Box */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-[#0D1936]">
            <div className="aspect-[4/3.6] w-full">
              <CosmeceuticalProductVisual product={product} size="detail" />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#0038AE]/10 pt-3.5 text-xs text-text-muted dark:border-white/10 dark:text-text-light">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
                <FlaskConical size={13} className="text-[#48ACD6]" />
                PHERADA DERMO-LAB STANDARD
              </span>
              <span className="rounded-md bg-[#0038AE]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0038AE] dark:bg-[#48ACD6]/20 dark:text-[#48ACD6]">
                {locale === "th" ? "พร้อมผลิต OEM / ODM" : "Ready for OEM / ODM"}
              </span>
            </div>
          </div>

          {/* Shopee Sample Order Card */}
          <div className="overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-br from-[#04091A] via-[#002880] to-[#0B5A8A] p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EE4D2D] text-white shadow-md">
                  <ShopeeIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    {locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Order Lab Sample on Shopee"}
                  </h3>
                  <p className="text-xs text-[#CBEBFF]/85">
                    {locale === "th" ? "ทดสอบเนื้อสัมผัสและผลลัพธ์ก่อนสั่งผลิตจริง" : "Test texture & active feel before OEM run"}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-[#48ACD6]/40 bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#9EE4FF]">
                OFFICIAL
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#CBEBFF]/90">
              {locale === "th"
                ? "กดสั่งซื้อขนาดทดลองส่งตรงจากห้องปฏิบัติการ Pherada Cosmetics ได้ทันทีผ่านร้านค้า Shopee ทางการ การันตีคุณภาพสูตรจริง 100%"
                : "Order authentic lab test samples directly manufactured by Pherada via our verified Shopee storefront."}
            </p>

            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#EE4D2D] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#d84022]"
            >
              <ShopeeIcon className="h-4 w-4" />
              <span>{locale === "th" ? "คลิกสั่งซื้อขนาดทดลองบน Shopee" : "Buy Sample on Shopee"}</span>
              <ExternalLink size={15} />
            </a>

            <div className="mt-4 flex items-center justify-around border-t border-white/15 pt-3 text-[11px] text-white/85">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#48ACD6]" />
                {locale === "th" ? "สูตรแท้จากแล็บ" : "100% Lab Authentic"}
              </span>
              <span className="flex items-center gap-1">
                <Truck size={13} className="text-[#48ACD6]" />
                {locale === "th" ? "จัดส่งรวดเร็ว" : "Fast Shipping"}
              </span>
              <span className="flex items-center gap-1">
                <Sparkles size={13} className="text-[#48ACD6]" />
                {locale === "th" ? "เริ่มที่ 1 ชิ้น" : "From 1 Unit"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clinical Dossier, Active Ingredients & Specifications */}
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0038AE]/20 bg-[#0038AE]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0038AE] dark:border-[#48ACD6]/30 dark:bg-[#48ACD6]/15 dark:text-[#48ACD6]">
              <Beaker size={13} className="text-[#48ACD6]" />
              {category}
            </span>
            <span className="rounded-full border border-[#0038AE]/15 bg-white px-3 py-1 font-mono text-xs font-semibold text-text-muted dark:border-white/15 dark:bg-white/5 dark:text-text-light">
              MOQ: 100+ Pcs
            </span>
            <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              THAI FDA READY
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text-dark dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-text-muted dark:text-text-light/90 md:text-lg">
            {description}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Button href="/contact">
              <span>{locale === "th" ? "ขอใบเสนอราคาผลิตสูตรนี้" : "Request OEM Quote for Formula"}</span>
              <ArrowRight size={17} />
            </Button>
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#EE4D2D] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d84022]"
            >
              <ShopeeIcon className="h-4 w-4" />
              <span>{locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Buy Sample on Shopee"}</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* 4 Clinical Specification Cards */}
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {detailCards.map(([cardTitle, text]) => (
              <div
                key={cardTitle}
                className="relative overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0D1936]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
                  {cardTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-text-light/85">{text}</p>
              </div>
            ))}
          </div>

          {/* Compatible Clinical Packaging */}
          <div className="mt-6 rounded-2xl border border-[#0038AE]/15 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0D1936]">
            <h2 className="text-base font-extrabold text-text-dark dark:text-white">
              {locale === "th" ? "บรรจุภัณฑ์เวชสำอางที่รองรับ (Compatible Clinical Packaging)" : "Compatible Clinical Packaging"}
            </h2>
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              {product.packageOptions.map((option) => (
                <span
                  key={option}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] px-4 py-2 text-xs font-bold text-[#0038AE] dark:border-white/15 dark:bg-white/5 dark:text-[#9EE4FF]"
                >
                  <Check size={14} className="text-[#48ACD6]" />
                  {option}
                </span>
              ))}
            </div>
          </div>

          {/* Key Actives, Clinical Benefits & Usage Protocol */}
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {infoGroups.map(([heading, items]) => (
              <div
                key={heading as string}
                className="rounded-2xl border border-[#0038AE]/15 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0D1936]"
              >
                <h2 className="border-b border-[#0038AE]/10 pb-2.5 text-sm font-extrabold text-[#0038AE] dark:border-white/10 dark:text-[#48ACD6]">
                  {heading as string}
                </h2>
                <div className="mt-3.5 space-y-2.5">
                  {(items as string[]).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-text-muted dark:text-text-light/85"
                    >
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#48ACD6]" />
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

