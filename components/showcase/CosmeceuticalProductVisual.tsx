"use client";

import Image from "next/image";
import type { Product } from "@/data/products";

type VisualSpec = {
  code: string;
  photo: string;
  objectPosition?: string;
  subLabel: string;
  activeHighlight: string;
  ph: string;
  volume: string;
};

const visualSpecs: Record<string, VisualSpec> = {
  "viora-mask": {
    code: "NO. 01",
    photo: "/images/products/studio-mask-jar.jpg",
    objectPosition: "center center",
    subLabel: "RADIANCE EXFOLIATING MASK",
    activeHighlight: "AHA + BHA + Pentafruit",
    ph: "pH 4.5",
    volume: "50g / 1.76 oz"
  },
  "clarielle-serum": {
    code: "NO. 02",
    photo: "/images/products/studio-serum.jpg",
    objectPosition: "center center",
    subLabel: "BLEMISH & SEBUM CONTROL",
    activeHighlight: "Niacinamide + Bisabolol 95",
    ph: "pH 5.2",
    volume: "30ml / 1.0 fl.oz"
  },
  "veilance-serum": {
    code: "NO. 03",
    photo: "/images/hero/luxury-cosmetic-bottles.jpg",
    objectPosition: "left center",
    subLabel: "CERAMIDE BARRIER REPAIR",
    activeHighlight: "Ceramide + Squalane + B3",
    ph: "pH 5.5",
    volume: "30ml / 1.0 fl.oz"
  },
  "lumea-serum": {
    code: "NO. 04",
    photo: "/images/products/studio-serum.jpg",
    objectPosition: "center 35%",
    subLabel: "TRANEXAMIC BRIGHTENING",
    activeHighlight: "Tranexamic Acid + Aquaxyl",
    ph: "pH 5.4",
    volume: "30ml / 1.0 fl.oz"
  },
  "eloria-serum": {
    code: "NO. 05",
    photo: "/images/hero/cosmetic-texture-swatches.jpg",
    objectPosition: "right center",
    subLabel: "PEPTIDE FIRMING AMPOULE",
    activeHighlight: "Copper Peptide + Tripeptide",
    ph: "pH 5.6",
    volume: "30ml / 1.0 fl.oz"
  },
  "aeri-moisture": {
    code: "NO. 06",
    photo: "/images/products/studio-cream-jar.jpg",
    objectPosition: "center center",
    subLabel: "HYDRO-LIGHT GEL CREAM",
    activeHighlight: "Hyaluron + Vit B12 + B3",
    ph: "pH 5.5",
    volume: "50g / 1.76 oz"
  },
  "serenia-moisture": {
    code: "NO. 07",
    photo: "/images/hero/luxury-cosmetic-bottles.jpg",
    objectPosition: "right bottom",
    subLabel: "SOOTHING BARRIER CREAM",
    activeHighlight: "Allantoin + Aquaxyl + B12",
    ph: "pH 5.5",
    volume: "50g / 1.76 oz"
  },
  "velisse-cleanser": {
    code: "NO. 08",
    photo: "/images/products/studio-cleanser-pump.jpg",
    objectPosition: "center center",
    subLabel: "DERMO GENTLE CLEANSER",
    activeHighlight: "Niacinamide + Aloe Extract",
    ph: "pH 5.5",
    volume: "150ml / 5.0 fl.oz"
  }
};

export function CosmeceuticalProductVisual({
  product,
  size = "card"
}: {
  product: Product;
  size?: "card" | "detail";
}) {
  const spec = visualSpecs[product.slug] ?? {
    code: "NO. 01",
    photo: "/images/products/studio-serum.jpg",
    objectPosition: "center center",
    subLabel: "DERMO-COSMETIC FORMULA",
    activeHighlight: product.ingredients.slice(0, 2).join(" + "),
    ph: "pH 5.5",
    volume: "30ml"
  };

  const isDetail = size === "detail";

  return (
    <div className="group/visual relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#030816] text-white">
      {/* Real Studio Product Photography */}
      <Image
        src={spec.photo}
        alt={`${product.title} — Pherada Cosmetics Studio Formulation`}
        fill
        className="object-cover transition-transform duration-700 group-hover/visual:scale-105"
        style={{ objectPosition: spec.objectPosition ?? "center center" }}
        sizes={isDetail ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 768px) 100vw, 380px"}
      />

      {/* Subtle Editorial Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030816]/90 via-[#030816]/15 to-[#030816]/55" />

      {/* Top Architectural Telemetry Bar */}
      <div className="relative z-10 flex w-full items-center justify-between border-b border-white/15 px-4 py-2.5 text-[10px] tracking-[0.18em]">
        <span className="font-serif text-xs italic tracking-wider text-[#9EE4FF]">
          {spec.code} • {spec.ph}
        </span>
        <span className="font-mono uppercase text-white/80">
          {product.category}
        </span>
      </div>

      {/* Bottom Active Concentration & Volume Caption */}
      <div className="relative z-10 w-full p-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#48ACD6]">
          {spec.subLabel}
        </p>
        <div className="mt-1 flex items-baseline justify-between gap-2">
          <p className="truncate font-serif text-sm italic text-white/95">
            {spec.activeHighlight}
          </p>
          <span className="shrink-0 font-mono text-[10px] text-white/60">
            {spec.volume}
          </span>
        </div>
      </div>
    </div>
  );
}

