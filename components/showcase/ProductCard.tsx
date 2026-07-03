"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const title = locale === "th" ? product.titleTh : product.title;
  const category = locale === "th" ? product.categoryTh : product.category;
  const description = locale === "th" ? product.shortDescriptionTh : product.shortDescription;

  return (
    <Link
      href={`/showcase/${product.slug}`}
      className="group block transition duration-200 hover:-translate-y-1"
    >
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-[4px] border border-primary/10 bg-[#f8f9fc] dark:border-white/10 dark:bg-white/[0.04]">
        <div className="absolute right-3 top-3 z-10 rounded-[2px] bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          {category}
        </div>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-10 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-medium text-text-dark dark:text-white">{title}</h3>
        <p className="mt-2 text-base font-medium leading-8 text-text-muted dark:text-text-light">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-bold text-primary dark:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
