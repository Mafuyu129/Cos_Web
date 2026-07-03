"use client";

import { FadeUp } from "@/components/common/FadeUp";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <FadeUp key={service.slug} delay={index * 0.05}>
          <ServiceCard service={service} index={index} />
        </FadeUp>
      ))}
    </div>
  );
}
