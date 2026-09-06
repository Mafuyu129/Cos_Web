"use client";

import Image from "next/image";
import { ArrowRight, Check, ExternalLink, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";
import type { Product } from "@/data/products";

export function ProductDetail({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const title = locale === "th" ? product.titleTh : product.title;
  const category = locale === "th" ? product.categoryTh : product.category;
  const description = locale === "th" ? product.shortDescriptionTh : product.shortDescription;
  const shopeeUrl = product.shopeeUrl || company.shopeeUrl;

  const detailCards =
    locale === "th"
      ? [
          ["คอนเซปต์ผลิตภัณฑ์", product.concept],
          ["เนื้อสัมผัสและวิธีใช้", product.texture],
          ["MOQ ขั้นต่ำในการผลิต", product.moq],
          ["ระยะเวลาการผลิตโดยประมาณ", product.timeline]
        ]
      : [
          ["Product Concept", product.shortDescription],
          ["Texture & Application", "Designed as a practical formulation direction for brand development."],
          ["Starter OEM MOQ", product.moq],
          ["Estimated Timeline", product.timeline]
        ];

  const infoGroups =
    locale === "th"
      ? [
          ["สารสำคัญหลัก (Key Actives)", product.ingredients],
          ["คุณสมบัติเด่นของสูตร", product.benefits],
          ["วิธีใช้และคำแนะนำ", product.usage]
        ]
      : [
          ["Key Active Ingredients", product.ingredients],
          ["Formula Benefits", product.benefits],
          ["How to Use", product.usage]
        ];

  return (
    <section className="bg-gradient-to-b from-[#f8fafd] via-white to-[#f0f6fa] py-16 dark:bg-gradient-to-b dark:from-dark-bg dark:via-dark-section dark:to-dark-bg md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        {/* Left Column: Product Showcase & Shopee Sample Box */}
        <div className="space-y-6 lg:sticky lg:top-28">
          {/* Main Visual Box */}
          <div className="relative overflow-hidden rounded-[4px] border border-primary/15 bg-white p-10 shadow-premium dark:border-white/10 dark:bg-white/[0.04]">
            {/* Ambient inner glow */}
            <div className="pointer-events-none absolute inset-0 surface-grid opacity-[0.03] dark:opacity-[0.06]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />

            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Packaging Badge */}
            <div className="mt-4 flex items-center justify-between border-t border-primary/10 pt-3 text-xs text-text-muted dark:border-white/10 dark:text-text-light">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary dark:text-accent">
                PHERADA LAB STANDARD
              </span>
              <span className="text-[11px] font-medium">สูตรมาตรฐานโรงงาน</span>
            </div>
          </div>

          {/* Shopee Sample Order Box */}
          <div className="rounded-[4px] border border-orange-500/30 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/50 p-6 shadow-sm dark:border-orange-500/20 dark:from-orange-950/20 dark:via-dark-card dark:to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-[#EE4D2D] text-white shadow-sm">
                  <ShopeeIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-text-dark dark:text-white">
                    {locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Order Sample on Shopee"}
                  </h3>
                  <p className="text-[11px] text-text-muted dark:text-text-light">
                    {locale === "th" ? "ทดลองเนื้อสัมผัสและกลิ่นก่อนสั่งผลิตจริง" : "Test texture & scent before full production"}
                  </p>
                </div>
              </div>

              <span className="rounded-[2px] bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                Official
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-text-muted dark:text-text-light">
              {locale === "th"
                ? "ท่านสามารถกดสั่งซื้อขนาดทดลองส่งตรงจากโรงงาน Pherada ได้ทันทีผ่านร้านค้า Shopee ทางการ การันตีคุณภาพสูตรจริง 100%"
                : "Order test samples directly manufactured by Pherada via our verified Shopee storefront with fast shipping."}
            </p>

            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#EE4D2D] px-5 py-3 font-serif text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#d84022] hover:shadow-md"
            >
              <ShopeeIcon className="h-4 w-4" />
              <span>{locale === "th" ? "คลิกสั่งซื้อบน Shopee" : "Buy Sample on Shopee"}</span>
              <ExternalLink size={15} className="opacity-90" />
            </a>

            <div className="mt-3.5 flex items-center justify-around border-t border-orange-200/60 pt-3 text-[11px] text-text-muted dark:border-white/10 dark:text-text-light">
              <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                <ShieldCheck size={13} />
                {locale === "th" ? "ของแท้จากแล็บ" : "100% Authentic"}
              </span>
              <span className="flex items-center gap-1">
                <Truck size={13} className="text-accent" />
                {locale === "th" ? "จัดส่งรวดเร็ว" : "Fast Delivery"}
              </span>
              <span className="flex items-center gap-1">
                <Sparkles size={13} className="text-primary dark:text-accent" />
                {locale === "th" ? "เริ่มที่ 1 ชิ้น" : "From 1 Pc"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Specs and Formulations */}
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-[2px] bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:bg-accent/10 dark:text-accent">
              {category}
            </span>
            <span className="rounded-[2px] border border-primary/20 px-2.5 py-1 text-xs font-medium text-text-muted dark:border-white/15 dark:text-text-light">
              MOQ: {product.moq.split(" ")[0] || "100"} ชิ้น
            </span>
          </div>

          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-text-dark dark:text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-base font-normal leading-relaxed text-text-muted dark:text-text-light md:text-lg">
            {description}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact">
              {locale === "th" ? "ขอใบเสนอราคาผลิตสูตรนี้" : "Request Production Quote"} <ArrowRight size={18} />
            </Button>
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#EE4D2D] px-7 py-3 font-serif text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#d84022]"
            >
              <ShopeeIcon className="h-4 w-4" />
              <span>{locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Buy Sample on Shopee"}</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* 4 Detail Specification Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {detailCards.map(([cardTitle, text]) => (
              <div
                key={cardTitle}
                className="rounded-[4px] border border-primary/10 bg-white p-5 shadow-sm transition hover:border-primary/25 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h2 className="font-serif text-lg font-medium text-primary dark:text-accent">{cardTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-text-light">{text}</p>
              </div>
            ))}
          </div>

          {/* Packaging Options */}
          <div className="mt-6 rounded-[4px] border border-primary/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="font-serif text-xl font-medium text-text-dark dark:text-white">
              {locale === "th" ? "ตัวเลือกบรรจุภัณฑ์ที่รองรับ" : "Compatible Packaging Options"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.packageOptions.map((option) => (
                <span
                  key={option}
                  className="inline-flex items-center gap-2 rounded-[2px] border border-primary/15 bg-light-bg px-3.5 py-1.5 text-xs font-semibold text-text-dark dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  <Check size={14} className="text-accent" />
                  {option}
                </span>
              ))}
            </div>
          </div>

          {/* Key Actives, Benefits and Usage Groups */}
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {infoGroups.map(([heading, items]) => (
              <div
                key={heading as string}
                className="rounded-[4px] border border-primary/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h2 className="font-serif text-base font-medium text-text-dark dark:text-white">{heading as string}</h2>
                <div className="mt-3.5 space-y-2">
                  {(items as string[]).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-text-muted dark:text-text-light"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
