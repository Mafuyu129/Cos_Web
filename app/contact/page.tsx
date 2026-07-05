"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

export default function ContactPage() {
  const { locale } = useLanguage();
  const address = locale === "th" ? company.address : company.addressEn;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote for your cosmetic brand"
        titleTh="ขอใบเสนอราคาสำหรับแบรนด์เครื่องสำอางของคุณ"
        description="Send initial details so our team can estimate formula, quantity, packaging and required documents."
        descriptionTh="กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานประเมินสูตร จำนวนผลิต แพ็กเกจ และเอกสารที่เกี่ยวข้อง"
      />
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Quote Form"
              title="Tell us what you want to produce"
              titleTh="บอกเราว่าคุณต้องการผลิตอะไร"
              description="Fill in the brief and our team will use it to discuss the right production route."
              descriptionTh="กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานใช้คุยรายละเอียดเส้นทางผลิตที่เหมาะสม"
              className="mb-10"
            />
            <QuoteForm />
          </div>
          <aside className="rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] md:p-8 lg:self-start">
            <h2 className="font-serif text-4xl font-medium text-text-dark dark:text-white">
              {locale === "th" ? "ข้อมูลติดต่อบริษัท" : "Company contact"}
            </h2>
            <div className="mt-6 grid gap-5 text-lg font-medium text-text-muted dark:text-text-light">
              <div className="flex gap-3">
                <Phone size={20} className="mt-0.5 text-accent" />
                <span className="flex flex-wrap gap-x-2 gap-y-1">
                  {company.phone.map((phone, index) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replaceAll("-", "")}`}
                      className="transition hover:text-primary dark:hover:text-white"
                    >
                      {phone}
                      {index < company.phone.length - 1 ? "," : ""}
                    </a>
                  ))}
                </span>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="flex gap-3 transition hover:text-primary dark:hover:text-white"
              >
                <Mail size={20} className="mt-0.5 text-accent" />
                <span>{company.email}</span>
              </a>
              <a
                href={company.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-primary dark:hover:text-white"
              >
                <MessageCircle size={20} className="mt-0.5 text-accent" />
                <span>Line: {company.line}</span>
              </a>
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-primary dark:hover:text-white"
              >
                <MapPin size={20} className="mt-0.5 text-accent" />
                <span>{address}</span>
              </a>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
