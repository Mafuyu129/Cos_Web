"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    <div className="group relative flex flex-col justify-between border border-[#071126]/15 bg-white transition-colors duration-300 hover:border-[#0038AE] dark:border-white/15 dark:bg-[#050C1D] dark:hover:border-[#48ACD6]">
      <div>
        {/* Studio Product Visual Frame */}
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-[4/3.6] overflow-hidden border-b border-[#071126]/10 dark:border-white/10"
        >
          <CosmeceuticalProductVisual product={product} size="card" />
        </Link>

        {/* Architectural Spec Content */}
        <div className="p-6">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-text-muted dark:text-white/55">
            <span>{locale === "th" ? product.categoryTh : product.category}</span>
            <span className="font-serif italic text-[#0038AE] dark:text-[#48ACD6]">
              MOQ 100 Pcs
            </span>
          </div>

          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-[#071126] transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6]">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-muted dark:text-white/70 sm:text-sm">
            {description}
          </p>

          {/* INCI Active Ingredient Line */}
          <div className="mt-4 border-t border-[#071126]/10 pt-3.5 dark:border-white/10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0038AE] dark:text-[#48ACD6]">
              {locale === "th" ? "KEY ACTIVES" : "KEY ACTIVES"}
            </p>
            <p className="mt-1 line-clamp-1 text-xs font-medium text-[#071126] dark:text-white/90">
              {product.ingredients.slice(0, 3).join(" / ")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Hairline Action Bar */}
      <div className="grid grid-cols-2 border-t border-[#071126]/15 dark:border-white/15">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-1.5 border-r border-[#071126]/15 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#071126] transition hover:bg-[#0038AE] hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-[#48ACD6] dark:hover:text-[#030816]"
        >
          <span>{locale === "th" ? "ดูสเปกสูตร" : "Formula Spec"}</span>
          <ArrowRight size={13} />
        </Link>

        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-[#F7F9FC] py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#0038AE] transition hover:bg-[#EE4D2D] hover:text-white dark:bg-white/[0.03] dark:text-[#9EE4FF] dark:hover:bg-[#EE4D2D] dark:hover:text-white"
        >
          <ShopeeIcon className="h-3.5 w-3.5" />
          <span>{locale === "th" ? "สั่งเทสเตอร์" : "Sample"}</span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
        </a>
      </div>
    </div>
  );
}


