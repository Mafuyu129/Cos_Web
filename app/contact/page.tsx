"use client";

import { ExternalLink, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

export default function ContactPage() {
  const { locale } = useLanguage();
  const address = locale === "th" ? company.address : company.addressEn;

  return (
    <>
      <PageHero
        eyebrow="Contact Pherada Lab"
        title="Request a clinical OEM / ODM quotation"
        titleTh="ปรึกษาทีมวิจัย R&D และขอใบเสนอราคาผลิตเวชสำอาง"
        description="Send your initial product brief so our R&D and production team can estimate formulation, MOQ, packaging, and Thai FDA timeline."
        descriptionTh="แจ้งรายละเอียดผลิตภัณฑ์เบื้องต้นเพื่อให้ทีมงานประเมินทิศทางสูตรเวชสำอาง จำนวนผลิตขั้นต่ำ บรรจุภัณฑ์ และขั้นตอนการจดแจ้ง อย."
      />
      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="OEM / ODM Brief"
              title="Tell us what cosmeceutical product you want to build"
              titleTh="บอกโจทย์ผลิตภัณฑ์เวชสำอางที่คุณต้องการสร้าง"
              description="Fill in the brief below and our laboratory team will guide you to the right production route."
              descriptionTh="กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานใช้ประเมินเส้นทางการพัฒนาสูตรและการผลิตที่เหมาะสมที่สุด"
              className="mb-8"
            />
            <QuoteForm />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="border border-white/15 bg-[#030816] p-8 text-white">
              <div className="border-b border-white/15 pb-5">
                <p className="editorial-eyebrow text-[#48ACD6]">
                  DIRECT LABORATORY CHANNELS
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {locale === "th" ? "ช่องทางติดต่อโรงงานโดยตรง" : "Direct Factory Contact"}
                </h2>
              </div>

              <div className="divide-y divide-white/10 text-sm">
                <div className="flex items-start gap-3.5 py-4">
                  <Phone size={17} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#48ACD6]">
                      {locale === "th" ? "โทรศัพท์ฝ่ายผลิตและประสานงาน" : "PHONE CONSULTATION"}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-semibold text-white">
                      {company.phone.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replaceAll("-", "")}`}
                          className="transition hover:text-[#48ACD6]"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={company.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 py-4 transition hover:text-[#48ACD6]"
                >
                  <MessageCircle size={17} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#48ACD6]">
                      LINE OFFICIAL ACCOUNT
                    </p>
                    <p className="mt-1 font-semibold text-white">LINE: {company.line}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3.5 py-4 transition hover:text-[#48ACD6]"
                >
                  <Mail size={17} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#48ACD6]">EMAIL</p>
                    <p className="mt-1 font-semibold text-white">{company.email}</p>
                  </div>
                </a>

                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 py-4 transition hover:text-[#48ACD6]"
                >
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#48ACD6]">
                      {locale === "th" ? "ที่ตั้งโรงงานและห้องปฏิบัติการ" : "FACTORY ADDRESS"}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/80">{address}</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 border-t border-white/15 pt-6">
                <a
                  href={company.shopeeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-[#EE4D2D] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#d84022]"
                >
                  <span className="flex items-center gap-2">
                    <ShopeeIcon className="h-4 w-4" />
                    <span>{locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Order Samples on Shopee"}</span>
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="border border-[#071126]/15 bg-white p-6 dark:border-white/15 dark:bg-[#050C1D]">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0038AE] dark:text-[#48ACD6]">
                <ShieldCheck size={16} className="text-[#48ACD6]" />
                <span>{locale === "th" ? "การรักษาความลับของสูตรลูกค้า (NDA)" : "Formula Confidentiality Assured"}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-text-muted dark:text-white/70">
                {locale === "th"
                  ? "ข้อมูลการพัฒนาสูตรเฉพาะ (Custom Formula) และข้อมูลแบรนด์ของท่านจะถูกเก็บรักษาเป็นความลับภายใต้มาตรฐานของ Pherada Cosmetics"
                  : "All custom formulation briefs and brand specifications are strictly protected by Pherada Cosmetics."}
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}


