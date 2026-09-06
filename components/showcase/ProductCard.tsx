"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const title = locale === "th" ? product.titleTh : product.title;
  const category = locale === "th" ? product.categoryTh : product.category;
  const description = locale === "th" ? product.shortDescriptionTh : product.shortDescription;
  const shopeeUrl = product.shopeeUrl || company.shopeeUrl;

  return (
    <div className="group relative flex flex-col justify-between rounded-[4px] border border-primary/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-accent/40">
      {/* Top Ambient Glow on hover */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-accent/15" />

      <div>
        {/* Product Visual Display Box */}
        <Link
          href={`/products/${product.slug}`}
          className="relative mb-5 block aspect-[4/3] overflow-hidden rounded-[3px] border border-primary/10 bg-gradient-to-br from-[#f8fafd] via-white to-[#f0f6fa] p-4 transition-colors duration-300 group-hover:border-primary/20 dark:border-white/10 dark:from-[#0a1020] dark:via-dark-card dark:to-[#050816]"
        >
          {/* Category Badge */}
          <div className="absolute left-3 top-3 z-10 rounded-[2px] bg-primary/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm backdrop-blur-sm">
            {category}
          </div>

          {/* Shopee Sample Available Pill */}
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-[2px] bg-[#EE4D2D] px-2 py-0.5 text-[10px] font-medium text-white shadow-sm">
            <ShopeeIcon className="h-3 w-3" />
            <span>Shopee</span>
          </div>

          {/* Bottle Vector Art */}
          <div className="relative h-full w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Content Section */}
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-xl font-medium leading-snug text-text-dark transition hover:text-primary dark:text-white dark:hover:text-accent sm:text-2xl">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-2 text-sm font-normal leading-relaxed text-text-muted dark:text-text-light">
            {description}
          </p>

          {/* Active Ingredients Tags */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[2px] border border-primary/10 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary dark:border-white/10 dark:bg-white/5 dark:text-accent"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: Details + Direct Shopee Buy */}
      <div className="mt-6 grid grid-cols-2 gap-2 border-t border-primary/10 pt-4 dark:border-white/10">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center rounded-[2px] border border-primary/20 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-white dark:border-white/20 dark:text-accent dark:hover:bg-accent dark:hover:text-dark-bg"
        >
          {locale === "th" ? "รายละเอียด" : "Details"}
        </Link>

        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-[2px] bg-[#EE4D2D] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#d84022] hover:shadow-md"
        >
          <ShopeeIcon className="h-3.5 w-3.5" />
          <span>{locale === "th" ? "ซื้อบน Shopee" : "Buy on Shopee"}</span>
          <ExternalLink className="h-3 w-3 opacity-80" />
        </a>
      </div>
    </div>
  );
}
