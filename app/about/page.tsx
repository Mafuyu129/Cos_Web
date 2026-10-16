"use client";

import { Beaker, Building2, Cpu, Handshake, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

const pillars = [
  {
    code: "01",
    title: "Vision & Mission",
    titleTh: "วิสัยทัศน์และพันธกิจ",
    text: "เป็นโรงงานวิจัยและผลิตเวชสำอางคู่คิดสำหรับเจ้าของแบรนด์ใหม่และ SME ที่ต้องการเริ่มต้นอย่างเป็นระบบและโปร่งใส",
    textEn: "A science-driven cosmeceutical factory partner for new brand owners and SMEs who want a transparent launch system.",
    icon: Target
  },
  {
    code: "02",
    title: "Dermo-Active R&D",
    titleTh: "วิจัยและนวัตกรรมเวชสำอาง",
    text: "พัฒนาสูตรเวชสำอางโดยคัดสรรสารสกัด Active เข้มข้น ปรับค่า pH เนื้อสัมผัส และความคงตัวให้เหมาะกับสภาพผิว",
    textEn: "Clinical formula development with active ingredients, pH balance, and sensory profile tailored to skin needs.",
    icon: Beaker
  },
  {
    code: "03",
    title: "Quality & Regulatory",
    titleTh: "คุณภาพและมาตรฐาน อย.",
    text: "ควบคุมการผลิตตามมาตรฐานความสะอาด ตรวจสอบคุณภาพ QC บันทึก BMR และขึ้นทะเบียนจดแจ้ง อย. ครบวงจร",
    textEn: "Cleanroom production control, QC verification, BMR batch traceability, and complete Thai FDA registration.",
    icon: ShieldCheck
  },
  {
    code: "04",
    title: "Long-Term Brand Partner",
    titleTh: "พาร์ทเนอร์เติบโตระยะยาว",
    text: "ช่วยวางแผนขยายไลน์ผลิตภัณฑ์เวชสำอาง ปรับปรุงบรรจุภัณฑ์ และต่อยอดจุดขายให้แบรนด์เติบโตอย่างยั่งยืน",
    textEn: "Strategic support for expanding clinical product lines, packaging upgrades, and sustainable brand growth.",
    icon: Handshake
  }
];

export default function AboutPage() {
  const { locale } = useLanguage();
  const address = locale === "th" ? company.address : company.addressEn;
  const businessScope = locale === "th" ? company.businessScope : company.businessScopeEn;
  const storageAddress = locale === "th" ? company.factoryInfo.storageAddress : company.factoryInfo.storageAddressEn;
  const machines = locale === "th" ? company.factoryInfo.machines : company.factoryInfo.machinesEn;

  return (
    <>
      <PageHero
        eyebrow="About Pherada Lab"
        title={company.nameEn}
        titleTh={company.nameTh}
        description={`${company.nameTh} คือโรงงานวิจัยและรับผลิตเวชสำอางและเครื่องสำอางครบวงจรในคอนเซปต์ The Blue Factory ดูแลตั้งแต่ให้คำปรึกษา พัฒนาสูตร R&D บรรจุภัณฑ์ เอกสาร อย. ไปจนถึงการผลิตจริง`}
        descriptionEn="Pherada Cosmetics Ltd. is a one-stop cosmeceutical and skincare factory under The Blue Factory concept, supporting R&D formulation, packaging, Thai FDA registration, and cleanroom production."
      />

      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container>
          <FadeUp>
            <SectionHeader
              eyebrow="Company Story & Philosophy"
              title="A science-focused factory partner for modern dermo-cosmetic brands"
              titleTh="โรงงานผลิตเวชสำอางคู่คิดสำหรับแบรนด์ยุคใหม่"
              description={`Pherada Cosmetics เริ่มก่อตั้งและจดทะเบียนพาณิชย์เมื่อวันที่ ${company.registeredAt} โดยประกอบกิจการผลิต จำหน่าย เก็บรักษา และนำเข้าเครื่องสำอางและเวชสำอาง มุ่งเน้นมาตรฐานการผลิตที่ตรวจสอบได้ทุกขั้นตอน`}
              descriptionEn="Registered on December 9, 2022, Pherada Cosmetics specializes in cosmetic and cosmeceutical manufacturing, storage, and regulatory support."
            />
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeUp key={pillar.title} delay={index * 0.06}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white shadow-md">
                          <Icon size={22} />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-[#0038AE] dark:text-[#48ACD6]">
                          {pillar.code}
                        </span>
                      </div>
                      <h2 className="mt-5 text-lg font-extrabold leading-snug text-text-dark dark:text-white">
                        {locale === "th" ? pillar.titleTh : pillar.title}
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-text-light/85">
                        {locale === "th" ? pillar.text : pillar.textEn}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#0038AE]/12 bg-white py-16 dark:border-white/10 dark:bg-[#081128] md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Facility & Engineering"
              title="Cleanroom mindset, founder-friendly communication"
              titleTh="มาตรฐานห้องปฏิบัติการ ที่คุยง่ายและใส่ใจเจ้าของแบรนด์"
              description={`สถานที่ผลิตลักษณะ ${company.factoryInfo.rooms} แบ่งสัดส่วนชัดเจน พร้อมเครื่องชั่งความละเอียดสูง เครื่องผสม เครื่องบรรจุ และเครื่องซีลมาตรฐานสำหรับงานผลิตเวชสำอาง`}
              descriptionEn="Structured production rooms and precision equipment for weighing, mixing, filling, and sealing cosmeceutical products."
            />

            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#0038AE]/20 bg-[#F4F9FD] px-4 py-2.5 font-mono text-xs font-bold text-[#0038AE] dark:border-[#48ACD6]/30 dark:bg-white/5 dark:text-[#48ACD6]">
              <span>“{company.tagline}”</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-gradient-to-br from-[#04091A] via-[#00257A] to-[#0B5080] p-7 text-white shadow-premium md:p-9">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#48ACD6]">
                    FACILITY SPECIFICATION
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-white">
                    {locale === "th" ? "ข้อมูลสถานที่ผลิตและเครื่องจักร" : "Factory & Equipment Profile"}
                  </h2>
                </div>
                <Building2 size={28} className="text-[#48ACD6]" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#9EE4FF]">
                    <MapPin size={14} className="text-[#48ACD6]" />
                    <span>{locale === "th" ? "ที่ตั้งสถานที่ผลิต" : "PRODUCTION LOCATION"}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{address}</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#9EE4FF]">
                    <ShieldCheck size={14} className="text-[#48ACD6]" />
                    <span>{locale === "th" ? "ขอบเขตธุรกิจ" : "BUSINESS SCOPE"}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{businessScope}</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#9EE4FF]">
                    <Cpu size={14} className="text-[#48ACD6]" />
                    <span>{locale === "th" ? "เครื่องจักรในสายการผลิต" : "LAB & PRODUCTION EQUIPMENT"}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{machines}</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#9EE4FF]">
                    <Users size={14} className="text-[#48ACD6]" />
                    <span>{locale === "th" ? "สถานที่เก็บรักษา & โครงสร้าง" : "STORAGE & LAYOUT"}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    {locale === "th" ? company.factoryInfo.rooms : company.factoryInfo.roomsEn} • {storageAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

