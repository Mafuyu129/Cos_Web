"use client";

import { ExternalLink, FlaskConical, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
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
            <div className="overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-br from-[#04091A] via-[#00257A] to-[#0B5080] p-7 text-white shadow-premium">
              <div className="flex items-center gap-2.5 border-b border-white/15 pb-4">
                <FlaskConical size={20} className="text-[#48ACD6]" />
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#48ACD6]">
                    DIRECT LABORATORY CHANNELS
                  </p>
                  <h2 className="text-xl font-extrabold text-white">
                    {locale === "th" ? "ช่องทางติดต่อโรงงานโดยตรง" : "Direct Factory Contact"}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 text-sm">
                <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#9EE4FF]">
                      {locale === "th" ? "โทรศัพท์ฝ่ายผลิตและประสานงาน" : "PHONE CONSULTATION"}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-bold text-white">
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
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#48ACD6]"
                >
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#9EE4FF]">
                      LINE OFFICIAL ACCOUNT
                    </p>
                    <p className="mt-1 font-bold text-white">Line: {company.line}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#48ACD6]"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#9EE4FF]">EMAIL</p>
                    <p className="mt-1 font-bold text-white">{company.email}</p>
                  </div>
                </a>

                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#48ACD6]"
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#9EE4FF]">
                      {locale === "th" ? "ที่ตั้งโรงงานและห้องปฏิบัติการ" : "FACTORY ADDRESS"}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/90">{address}</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 border-t border-white/15 pt-5">
                <a
                  href={company.shopeeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-[#EE4D2D] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#d84022]"
                >
                  <span className="flex items-center gap-2">
                    <ShopeeIcon className="h-4 w-4" />
                    <span>{locale === "th" ? "สั่งขนาดทดลองบน Shopee" : "Order Samples on Shopee"}</span>
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#0038AE]/15 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0D1936]">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0038AE] dark:text-[#48ACD6]">
                <ShieldCheck size={17} className="text-[#48ACD6]" />
                <span>{locale === "th" ? "การรักษาความลับของสูตรลูกค้า (NDA)" : "Formula Confidentiality Assured"}</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted dark:text-text-light/80">
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

