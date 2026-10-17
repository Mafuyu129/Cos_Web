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
        <div className="mb-10 flex flex-wrap border-b border-[#071126]/15 dark:border-white/15">
          {productCategories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "relative inline-flex items-center gap-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-all",
                  active
                    ? "bg-[#030816] text-white dark:bg-[#48ACD6] dark:text-[#030816]"
                    : "text-text-muted hover:text-[#0038AE] dark:text-white/70 dark:hover:text-white"
                )}
              >
                <span>{categoryLabels[item] ?? item}</span>
                <span
                  className={cn(
                    "font-serif text-sm italic",
                    active ? "text-[#48ACD6] dark:text-[#030816]" : "text-[#0038AE] dark:text-[#48ACD6]"
                  )}
                >
                  ({counts[item] ?? 0})
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


