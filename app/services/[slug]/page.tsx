import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
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

  return (
    <>
      <ServiceDetailHero service={service} />
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="What we can produce"
            title={`Products in ${service.title}`}
            description="รายการสามารถปรับตามสูตร บรรจุภัณฑ์ และเป้าหมายแบรนด์"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {service.items.map((item) => (
              <div key={item} className="rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <CheckCircle2 size={22} className="text-primary dark:text-accent" />
                <p className="mt-3 text-lg font-bold text-text-dark dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-dark-section md:py-28">
        <Container className="grid gap-5 md:grid-cols-3">
          {[
            ["Formula options", service.formulaOptions.join(" / ")],
            ["MOQ", service.moq],
            ["Timeline", service.timeline]
          ].map(([title, text]) => (
            <div key={title} className="rounded-[4px] border border-primary/10 bg-light-bg p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="font-serif text-3xl font-medium text-text-dark dark:text-white">{title}</h2>
              <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Production Steps"
            title="Typical path for this service"
            description="ทุกโปรเจกต์จะสรุปขั้นตอนและเอกสารก่อนเริ่มผลิตจริง"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.number} className="rounded-[4px] border border-primary/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-serif text-4xl font-medium text-primary dark:text-accent">{step.number}</p>
                <h2 className="mt-3 font-serif text-2xl font-medium text-text-dark dark:text-white">{step.title}</h2>
                <p className="mt-2 text-lg font-medium leading-9 text-text-muted dark:text-text-light">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title={`Start your ${service.title} project`} />
    </>
  );
}
