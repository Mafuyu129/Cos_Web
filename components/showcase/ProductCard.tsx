"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, FlaskConical } from "lucide-react";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";
import type { Product } from "@/data/products";
import { CosmeceuticalProductVisual } from "./CosmeceuticalProductVisual";

export function ProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const title = locale === "th" ? product.titleTh : product.title;
  const description = locale === "th" ? product.shortDescriptionTh : product.shortDescription;
  const shopeeUrl = product.shopeeUrl || company.shopeeUrl;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]/90 dark:hover:border-[#48ACD6]">
      {/* Top gradient bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6] opacity-75 transition-opacity group-hover:opacity-100" />

      <div>
        {/* Product Clinical Visual Box */}
        <Link
          href={`/products/${product.slug}`}
          className="relative mb-4 block aspect-[4/3.4] overflow-hidden rounded-xl border border-[#0038AE]/10 transition-transform duration-300 group-hover:scale-[1.01] dark:border-white/10"
        >
          <CosmeceuticalProductVisual product={product} size="card" />
        </Link>

        {/* Content Section */}
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-lg font-extrabold leading-snug text-text-dark transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6]">
              {title}
            </h3>
          </Link>

          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted dark:text-text-light/80 sm:text-sm">
            {description}
          </p>

          {/* Key Clinical Actives Preview */}
          <div className="mt-3.5 rounded-xl border border-[#0038AE]/10 bg-[#F4F9FD] p-2.5 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
              <FlaskConical size={11} className="text-[#48ACD6]" />
              <span>{locale === "th" ? "สารสกัดหลัก (Key Actives)" : "Key Clinical Actives"}</span>
            </p>
            <p className="mt-1 line-clamp-1 text-xs font-medium text-text-dark dark:text-white/90">
              {product.ingredients.slice(0, 3).join(" • ")}
            </p>
          </div>

          {/* Formulation Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#0038AE]/15 bg-[#0038AE]/5 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#0038AE] dark:border-[#48ACD6]/25 dark:bg-[#48ACD6]/10 dark:text-[#9EE4FF]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: Clinical Spec + Direct Shopee Sample */}
      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[#0038AE]/10 pt-4 dark:border-white/10">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-[#0038AE]/25 bg-white px-3 py-2.5 text-xs font-bold text-[#0038AE] transition hover:bg-[#0038AE] hover:text-white dark:border-[#48ACD6]/30 dark:bg-white/5 dark:text-[#48ACD6] dark:hover:bg-[#48ACD6] dark:hover:text-[#04091A]"
        >
          <span>{locale === "th" ? "สเปกสูตร" : "Formula Spec"}</span>
          <ArrowRight size={13} />
        </Link>

        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#EE4D2D] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#d84022] hover:shadow-md"
        >
          <ShopeeIcon className="h-3.5 w-3.5" />
          <span>{locale === "th" ? "สั่งทดลอง" : "Sample"}</span>
          <ExternalLink className="h-3 w-3 opacity-80" />
        </a>
      </div>
    </div>
  );
}

