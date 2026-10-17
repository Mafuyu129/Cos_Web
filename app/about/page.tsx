"use client";

import Image from "next/image";
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
    textEn: "A science-driven cosmeceutical factory partner for new brand owners and SMEs who want a transparent launch system."
  },
  {
    code: "02",
    title: "Dermo-Active R&D",
    titleTh: "วิจัยและนวัตกรรมเวชสำอาง",
    text: "พัฒนาสูตรเวชสำอางโดยคัดสรรสารสกัด Active เข้มข้น ปรับค่า pH เนื้อสัมผัส และความคงตัวให้เหมาะกับสภาพผิว",
    textEn: "Clinical formula development with active ingredients, pH balance, and sensory profile tailored to skin needs."
  },
  {
    code: "03",
    title: "Quality & Regulatory",
    titleTh: "คุณภาพและมาตรฐาน อย.",
    text: "ควบคุมการผลิตตามมาตรฐานความสะอาด ตรวจสอบคุณภาพ QC บันทึก BMR และขึ้นทะเบียนจดแจ้ง อย. ครบวงจร",
    textEn: "Cleanroom production control, QC verification, BMR batch traceability, and complete Thai FDA registration."
  },
  {
    code: "04",
    title: "Long-Term Brand Partner",
    titleTh: "พาร์ทเนอร์เติบโตระยะยาว",
    text: "ช่วยวางแผนขยายไลน์ผลิตภัณฑ์เวชสำอาง ปรับปรุงบรรจุภัณฑ์ และต่อยอดจุดขายให้แบรนด์เติบโตอย่างยั่งยืน",
    textEn: "Strategic support for expanding clinical product lines, packaging upgrades, and sustainable brand growth."
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

      <section className="border-b border-[#071126]/10 bg-[#F7F9FC] py-20 dark:border-white/10 dark:bg-[#030816] md:py-28">
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

          <div className="mt-14 grid border-t border-l border-[#071126]/15 dark:border-white/15 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <FadeUp key={pillar.title} delay={index * 0.06}>
                <div className="flex h-full flex-col justify-between border-r border-b border-[#071126]/15 bg-white p-8 dark:border-white/15 dark:bg-[#050C1D]">
                  <div>
                    <span className="font-serif text-4xl font-light italic text-[#0038AE] dark:text-[#48ACD6]">
                      {pillar.code}
                    </span>
                    <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted dark:text-white/50">
                      {pillar.title}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-[#071126] dark:text-white">
                      {locale === "th" ? pillar.titleTh : pillar.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted dark:text-white/70">
                      {locale === "th" ? pillar.text : pillar.textEn}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-[#050C1D] md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Facility & Engineering"
              title="Cleanroom mindset, founder-friendly communication"
              titleTh="มาตรฐานห้องปฏิบัติการ ที่คุยง่ายและใส่ใจเจ้าของแบรนด์"
              description={`สถานที่ผลิตลักษณะ ${company.factoryInfo.rooms} แบ่งสัดส่วนชัดเจน พร้อมเครื่องชั่งความละเอียดสูง เครื่องผสม เครื่องบรรจุ และเครื่องซีลมาตรฐานสำหรับงานผลิตเวชสำอาง`}
              descriptionEn="Structured production rooms and precision equipment for weighing, mixing, filling, and sealing cosmeceutical products."
            />

            <p className="mt-6 font-serif text-2xl italic text-[#0038AE] dark:text-[#48ACD6]">
              “{company.tagline}”
            </p>

            <div className="relative mt-6 aspect-[16/11] overflow-hidden border border-[#071126]/15 bg-[#030816] dark:border-white/15">
              <Image
                src="/images/hero/clinical-lab-scientist.jpg"
                alt="Pherada Cosmetics Formulation R&D Scientist"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030816]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-sm italic text-[#9EE4FF]">
                  In-House Formulation R&D
                </p>
                <p className="mt-0.5 text-xs text-white/85">
                  {locale === "th"
                    ? "การวิจัยและพัฒนาสูตรเวชสำอางโดยนักวิทยาศาสตร์เครื่องสำอาง"
                    : "Clinical-grade active ingredients & pH stability testing"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/15 bg-[#030816] p-8 text-white sm:p-12">
              <div className="border-b border-white/15 pb-6">
                <span className="editorial-eyebrow text-[#48ACD6]">
                  FACILITY SPECIFICATION
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  {locale === "th" ? "ข้อมูลสถานที่ผลิตและเครื่องจักรมาตรฐาน" : "Factory & Equipment Profile"}
                </h2>
              </div>

              <div className="mt-8 grid gap-px bg-white/15 sm:grid-cols-2">
                <div className="bg-[#050D22] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48ACD6]">
                    01 / {locale === "th" ? "ที่ตั้งสถานที่ผลิต" : "PRODUCTION LOCATION"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{address}</p>
                </div>

                <div className="bg-[#050D22] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48ACD6]">
                    02 / {locale === "th" ? "ขอบเขตธุรกิจ" : "BUSINESS SCOPE"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{businessScope}</p>
                </div>

                <div className="bg-[#050D22] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48ACD6]">
                    03 / {locale === "th" ? "เครื่องจักรในสายการผลิต" : "LAB & PRODUCTION EQUIPMENT"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{machines}</p>
                </div>

                <div className="bg-[#050D22] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48ACD6]">
                    04 / {locale === "th" ? "สถานที่เก็บรักษา & โครงสร้าง" : "STORAGE & LAYOUT"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
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


