import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceDetailSections } from "@/components/services/ServiceDetailSections";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service ? `${service.title} | Pherada Cosmetics` : "Service" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const serializableService = {
    title: service.title,
    titleTh: service.titleTh,
    slug: service.slug,
    category: service.category,
    shortDescription: service.shortDescription,
    shortDescriptionTh: service.shortDescriptionTh,
    description: service.description,
    items: service.items,
    formulaOptions: service.formulaOptions,
    timeline: service.timeline,
    moq: service.moq
  };

  return (
    <>
      <ServiceDetailHero service={serializableService} />
      <ServiceDetailSections service={serializableService} processSteps={processSteps} />
    </>
  );
}
