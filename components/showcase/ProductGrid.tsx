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
    All: locale === "th" ? "ทุกกลุ่มสูตรเวชสำอาง" : "All Clinical Formulas",
    Mask: locale === "th" ? "มาสก์ผลัดเซลล์ผิว (Mask)" : "Clinical Mask",
    Serum: locale === "th" ? "เซรั่มเข้มข้น (Dermo Serum)" : "Dermo Serum",
    Moisturizer: locale === "th" ? "มอยส์เจอร์ไรเซอร์ (Barrier Cream)" : "Barrier Moisturizer",
    Cleanser: locale === "th" ? "คลีนเซอร์ (Gentle Cleanser)" : "Gentle Cleanser"
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
        <div className="mb-8 flex flex-wrap gap-2.5">
          {productCategories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-200",
                  active
                    ? "border-transparent bg-gradient-to-r from-[#0038AE] to-[#48ACD6] text-white shadow-md"
                    : "border-[#0038AE]/15 bg-white text-text-muted hover:border-[#0038AE] hover:text-[#0038AE] dark:border-white/10 dark:bg-white/[0.04] dark:text-text-light dark:hover:text-white"
                )}
              >
                <span>{categoryLabels[item] ?? item}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[10px] font-bold",
                    active
                      ? "bg-white/25 text-white"
                      : "bg-[#0038AE]/10 text-[#0038AE] dark:bg-white/10 dark:text-[#48ACD6]"
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

