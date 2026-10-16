"use client";

import type { Product } from "@/data/products";

type VisualSpec = {
  code: string;
  vessel: "jar" | "dropper" | "airless" | "pump";
  subLabel: string;
  activeHighlight: string;
  ph: string;
  volume: string;
  accentGradient: string;
  badgeColor: string;
};

const visualSpecs: Record<string, VisualSpec> = {
  "viora-mask": {
    code: "RX-01",
    vessel: "jar",
    subLabel: "RADIANCE EXFOLIATING MASK",
    activeHighlight: "AHA + BHA + Pentafruit",
    ph: "pH 4.5",
    volume: "50g / 1.76 oz",
    accentGradient: "from-[#0038AE] via-[#3A56D4] to-[#48ACD6]",
    badgeColor: "#0038AE"
  },
  "clarielle-serum": {
    code: "RX-02",
    vessel: "dropper",
    subLabel: "BLEMISH & SEBUM CONTROL",
    activeHighlight: "Niacinamide + Bisabolol 95",
    ph: "pH 5.2",
    volume: "30ml / 1.0 fl.oz",
    accentGradient: "from-[#0038AE] via-[#0B5ED7] to-[#48ACD6]",
    badgeColor: "#0038AE"
  },
  "veilance-serum": {
    code: "RX-03",
    vessel: "airless",
    subLabel: "CERAMIDE BARRIER REPAIR",
    activeHighlight: "Ceramide + Squalane + B3",
    ph: "pH 5.5",
    volume: "30ml / 1.0 fl.oz",
    accentGradient: "from-[#002B88] via-[#0038AE] to-[#48ACD6]",
    badgeColor: "#0038AE"
  },
  "lumea-serum": {
    code: "RX-04",
    vessel: "dropper",
    subLabel: "TRANEXAMIC BRIGHTENING",
    activeHighlight: "Tranexamic Acid + Aquaxyl",
    ph: "pH 5.4",
    volume: "30ml / 1.0 fl.oz",
    accentGradient: "from-[#0038AE] via-[#2578B5] to-[#48ACD6]",
    badgeColor: "#48ACD6"
  },
  "eloria-serum": {
    code: "RX-05",
    vessel: "airless",
    subLabel: "PEPTIDE FIRMING AMPOULE",
    activeHighlight: "Copper Peptide + Tripeptide",
    ph: "pH 5.6",
    volume: "30ml / 1.0 fl.oz",
    accentGradient: "from-[#001F66] via-[#0038AE] to-[#48ACD6]",
    badgeColor: "#0038AE"
  },
  "aeri-moisture": {
    code: "RX-06",
    vessel: "jar",
    subLabel: "HYDRO-LIGHT GEL CREAM",
    activeHighlight: "Hyaluron + Vit B12 + B3",
    ph: "pH 5.5",
    volume: "50g / 1.76 oz",
    accentGradient: "from-[#0038AE] via-[#1E82B8] to-[#48ACD6]",
    badgeColor: "#48ACD6"
  },
  "serenia-moisture": {
    code: "RX-07",
    vessel: "jar",
    subLabel: "SOOTHING BARRIER CREAM",
    activeHighlight: "Allantoin + Aquaxyl + B12",
    ph: "pH 5.5",
    volume: "50g / 1.76 oz",
    accentGradient: "from-[#002984] via-[#0038AE] to-[#48ACD6]",
    badgeColor: "#0038AE"
  },
  "velisse-cleanser": {
    code: "RX-08",
    vessel: "pump",
    subLabel: "DERMO GENTLE CLEANSER",
    activeHighlight: "Niacinamide + Aloe Extract",
    ph: "pH 5.5",
    volume: "150ml / 5.0 fl.oz",
    accentGradient: "from-[#0038AE] via-[#2180B3] to-[#48ACD6]",
    badgeColor: "#48ACD6"
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
    code: "RX-LAB",
    vessel: "dropper",
    subLabel: "DERMO-COSMETIC FORMULA",
    activeHighlight: product.ingredients.slice(0, 2).join(" + "),
    ph: "pH 5.5",
    volume: "30ml",
    accentGradient: "from-[#0038AE] to-[#48ACD6]",
    badgeColor: "#0038AE"
  };

  const isDetail = size === "detail";

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#EEF6FC] via-white to-[#DFF1FA] p-4 dark:from-[#071128] dark:via-[#0D1A3A] dark:to-[#050C1E]">
      {/* Clinical Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-45 dark:opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#48ACD6]/25 blur-2xl dark:bg-[#48ACD6]/20" />

      {/* Decorative Molecular Hexagon */}
      <svg
        className="pointer-events-none absolute right-2 top-8 h-24 w-24 text-[#0038AE]/10 dark:text-[#48ACD6]/15"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,8 86,28 86,72 50,92 14,72 14,28" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="8" r="3" fill="#48ACD6" />
        <circle cx="86" cy="28" r="3" fill="#0038AE" />
        <circle cx="86" cy="72" r="3" fill="#48ACD6" />
      </svg>

      {/* Top Telemetry Row */}
      <div className="relative z-10 flex w-full items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-md border border-[#0038AE]/20 bg-white/90 px-2 py-0.5 font-mono text-[10px] font-bold text-[#0038AE] shadow-sm dark:border-[#48ACD6]/30 dark:bg-[#04091A]/80 dark:text-[#48ACD6]">
          {spec.code} • {spec.ph}
        </span>
        <span className="rounded-md bg-[#0038AE] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
          {product.category}
        </span>
      </div>

      {/* Center 3D-Style Cosmeceutical Vessel */}
      <div className={`relative z-10 my-auto flex items-center justify-center py-2 ${isDetail ? "scale-125" : "scale-100"}`}>
        {spec.vessel === "dropper" && (
          <div className="flex flex-col items-center">
            <div className="h-4 w-3.5 rounded-t-full bg-gradient-to-b from-white to-[#CBEBFF] border border-[#0038AE]/20 shadow-sm" />
            <div className="h-3 w-8 rounded-t-sm bg-gradient-to-r from-[#cddbe8] via-white to-[#b5cadc] border-b border-[#0038AE]/20" />
            <div className="h-1.5 w-4 bg-[#48ACD6]" />
            <div
              className={`relative h-32 w-16 overflow-hidden rounded-b-xl rounded-t-md border border-white/50 bg-gradient-to-br ${spec.accentGradient} p-2 shadow-[0_14px_28px_-6px_rgba(0,56,174,0.45)]`}
            >
              <div className="absolute left-1.5 top-1.5 h-24 w-1.5 rounded-full bg-white/30" />
              <div className="mt-4 rounded-md border border-white/60 bg-white/95 p-1.5 text-left text-[#0A1931] shadow-sm">
                <p className="font-mono text-[6px] font-bold tracking-widest text-[#0038AE]">PHERADA LAB</p>
                <p className="mt-0.5 truncate text-[7.5px] font-extrabold text-[#0A1931]">
                  {product.title.replace(" Serum", "")}
                </p>
                <p className="font-mono text-[5.5px] font-semibold text-[#0038AE]">DERMO SERUM</p>
                <div className="mt-1 h-0.5 w-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                <p className="mt-0.5 font-mono text-[5px] text-slate-500">{spec.volume}</p>
              </div>
            </div>
          </div>
        )}

        {spec.vessel === "airless" && (
          <div className="flex flex-col items-center">
            <div className="h-5 w-11 rounded-t-md border border-[#0038AE]/20 bg-gradient-to-b from-white to-[#e3eef7] shadow-sm" />
            <div className="h-2 w-12 bg-gradient-to-r from-[#0038AE] via-[#48ACD6] to-[#0038AE]" />
            <div
              className={`relative h-36 w-[66px] overflow-hidden rounded-b-xl border border-white/50 bg-gradient-to-br ${spec.accentGradient} p-2 shadow-[0_14px_28px_-6px_rgba(0,56,174,0.45)]`}
            >
              <div className="absolute left-1.5 top-1.5 h-28 w-1.5 rounded-full bg-white/30" />
              <div className="mt-3.5 rounded-md border border-white/60 bg-white/95 p-1.5 text-left text-[#0A1931] shadow-sm">
                <p className="font-mono text-[6px] font-bold tracking-widest text-[#0038AE]">PHERADA LAB</p>
                <p className="mt-0.5 truncate text-[7.5px] font-extrabold text-[#0A1931]">
                  {product.title.replace(" Serum", "")}
                </p>
                <p className="font-mono text-[5.5px] font-semibold text-[#0038AE]">AIRLESS RX</p>
                <div className="mt-1 h-0.5 w-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                <p className="mt-0.5 font-mono text-[5px] text-slate-500">{spec.volume}</p>
              </div>
            </div>
          </div>
        )}

        {spec.vessel === "jar" && (
          <div className="flex flex-col items-center pt-4">
            <div className="h-5 w-24 rounded-t-lg border border-[#0038AE]/20 bg-gradient-to-r from-[#d6e4f0] via-white to-[#bfd4e6] shadow-sm" />
            <div className="h-1.5 w-[92px] bg-gradient-to-r from-[#0038AE] via-[#48ACD6] to-[#0038AE]" />
            <div
              className={`relative h-24 w-24 overflow-hidden rounded-b-2xl border border-white/50 bg-gradient-to-br ${spec.accentGradient} p-2.5 shadow-[0_14px_28px_-6px_rgba(0,56,174,0.45)]`}
            >
              <div className="absolute left-2 top-1.5 h-16 w-2 rounded-full bg-white/25" />
              <div className="mt-1 rounded-md border border-white/70 bg-white/95 p-1.5 text-left text-[#0A1931] shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[5.5px] font-bold text-[#0038AE]">PHERADA</span>
                  <span className="font-mono text-[5.5px] font-bold text-[#48ACD6]">{spec.code}</span>
                </div>
                <p className="mt-0.5 truncate text-[7.5px] font-extrabold text-[#0A1931]">{product.title}</p>
                <div className="mt-1 h-0.5 w-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                <p className="mt-0.5 font-mono text-[5px] text-slate-500">{spec.volume}</p>
              </div>
            </div>
          </div>
        )}

        {spec.vessel === "pump" && (
          <div className="flex flex-col items-center">
            <div className="h-2 w-7 rounded-t-sm bg-[#0038AE]" />
            <div className="h-3 w-3 bg-[#48ACD6]" />
            <div className="h-3 w-8 rounded-t-sm bg-gradient-to-r from-[#d2e2f0] via-white to-[#bfd4e6]" />
            <div
              className={`relative h-36 w-[68px] overflow-hidden rounded-b-xl rounded-t-lg border border-white/50 bg-gradient-to-br ${spec.accentGradient} p-2 shadow-[0_14px_28px_-6px_rgba(0,56,174,0.45)]`}
            >
              <div className="absolute left-1.5 top-1.5 h-28 w-1.5 rounded-full bg-white/30" />
              <div className="mt-4 rounded-md border border-white/70 bg-white/95 p-1.5 text-left text-[#0A1931] shadow-sm">
                <p className="font-mono text-[6px] font-bold text-[#0038AE]">PHERADA LAB</p>
                <p className="mt-0.5 truncate text-[7.5px] font-extrabold text-[#0A1931]">{product.title}</p>
                <p className="font-mono text-[5.5px] font-semibold text-[#0038AE]">CLEANSER</p>
                <div className="mt-1 h-0.5 w-full bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                <p className="mt-0.5 font-mono text-[5px] text-slate-500">{spec.volume}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Active Concentration Strip */}
      <div className="relative z-10 w-full rounded-lg border border-[#0038AE]/15 bg-white/90 px-2.5 py-1.5 text-center backdrop-blur-md dark:border-white/10 dark:bg-[#04091A]/85">
        <p className="truncate font-mono text-[10px] font-semibold text-[#0038AE] dark:text-[#48ACD6]">
          {spec.activeHighlight}
        </p>
      </div>
    </div>
  );
}
