"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Product } from "@/data/products";

export function ProductDetail({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const title = locale === "th" ? product.titleTh : product.title;
  const category = locale === "th" ? product.categoryTh : product.category;
  const description = locale === "th" ? product.shortDescriptionTh : product.shortDescription;
  const detailCards =
    locale === "th"
      ? [
          ["คอนเซปต์สินค้า", product.concept],
          ["เนื้อสัมผัส / วิธีใช้", product.texture],
          ["MOQ", product.moq],
          ["ระยะเวลาผลิต", product.timeline]
        ]
      : [
          ["Product concept", product.shortDescription],
          ["Texture / usage", "Designed as a practical product direction for brand development."],
          ["MOQ", "MOQ depends on product type and packaging. Please contact us for a suitable estimate."],
          ["Production timeline", "Timeline depends on formula, artwork and packaging confirmation."]
        ];
  const infoGroups =
    locale === "th"
      ? [
          ["สารสำคัญหลัก", product.ingredients],
          ["คุณสมบัติ", product.benefits],
          ["วิธีใช้", product.usage]
        ]
      : [
          ["Key ingredients", product.ingredients],
          ["Benefits", product.tags],
          ["How to use", ["Usage guidance can be adjusted by product type and final formula direction."]]
        ];

  return (
    <section className="bg-[#f8f9fc] py-16 dark:bg-dark-bg md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[4px] border border-primary/10 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="relative aspect-square">
            <Image src={product.image} alt={product.title} fill className="object-contain" />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
            {category}
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-tight text-text-dark dark:text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg font-medium leading-9 text-text-muted dark:text-text-light md:text-xl">
            {description}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {detailCards.map(([title, text]) => (
              <div key={title} className="rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <h2 className="font-serif text-[26px] font-medium text-text-dark dark:text-white">{title}</h2>
                <p className="mt-2 text-lg font-medium leading-9 text-text-muted dark:text-text-light">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="font-serif text-[28px] font-medium text-text-dark dark:text-white">
              {locale === "th" ? "ตัวเลือกบรรจุภัณฑ์" : "Packaging options"}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {product.packageOptions.map((option) => (
                <p key={option} className="flex items-center gap-2 text-lg font-medium text-text-muted dark:text-text-light">
                  <Check size={16} className="text-accent" />
                  {option}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {infoGroups.map(([heading, items]) => (
              <div
                key={heading as string}
                className="rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h2 className="font-serif text-[28px] font-medium text-text-dark dark:text-white">{heading as string}</h2>
                <div className="mt-4 grid gap-3">
                  {(items as string[]).map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-2 text-lg font-medium leading-9 text-text-muted dark:text-text-light"
                    >
                      <Check size={16} className="mt-1 shrink-0 text-accent" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button href="/contact" className="mt-8">
            {locale === "th" ? "เริ่มโปรเจกต์นี้" : "Start this project"} <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
