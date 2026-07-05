"use client";

import { useMemo, useState } from "react";
import { productCategories, products } from "@/data/products";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState("All");
  const { locale, t } = useLanguage();
  const categoryLabels: Record<string, string> = {
    All: t("product.filter.all"),
    Mask: locale === "th" ? "มาสก์" : "Mask",
    Serum: locale === "th" ? "เซรั่ม" : "Serum",
    Moisturizer: locale === "th" ? "มอยส์เจอร์ไรเซอร์" : "Moisturizer",
    Cleanser: locale === "th" ? "คลีนเซอร์" : "Cleanser"
  };

  const filtered = useMemo(() => {
    const list = category === "All" ? products : products.filter((product) => product.category === category);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [category, limit]);

  return (
    <div>
      {!limit ? (
        <div className="mb-10 flex flex-wrap gap-2">
          {productCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-base font-semibold transition",
                category === item
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-text-muted hover:border-accent dark:border-white/10 dark:bg-white/[0.04] dark:text-text-light"
              )}
            >
              {categoryLabels[item] ?? item}
            </button>
          ))}
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
