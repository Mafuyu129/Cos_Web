"use client";

import { useMemo, useState } from "react";
import { productCategories, products } from "@/data/products";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState("All");
  const { locale } = useLanguage();
  const categoryLabels: Record<string, string> = {
    All: locale === "th" ? "ทั้งหมด" : "All",
    Mask: locale === "th" ? "มาสก์บำรุงผิว" : "Face Mask",
    Serum: locale === "th" ? "เซรั่มเข้มข้น" : "Serum",
    Moisturizer: locale === "th" ? "มอยส์เจอร์ไรเซอร์" : "Moisturizer",
    Cleanser: locale === "th" ? "ผลิตภัณฑ์ทำความสะอาด" : "Cleanser"
  };

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: products.length };
    products.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    const list = category === "All" ? products : products.filter((product) => product.category === category);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [category, limit]);

  return (
    <div>
      {!limit ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {productCategories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-[2px] border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                  active
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-primary/15 bg-white text-text-muted hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-text-light dark:hover:text-white"
                )}
              >
                <span>{categoryLabels[item] ?? item}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 text-[10px]",
                    active ? "bg-white/20 text-white" : "bg-primary/5 text-primary dark:bg-white/10 dark:text-accent"
                  )}
                >
                  {counts[item] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
