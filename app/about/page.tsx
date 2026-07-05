"use client";

import { Beaker, Handshake, ShieldCheck, Target } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

const pillars = [
  {
    title: "Vision & Mission",
    titleTh: "วิสัยทัศน์และพันธกิจ",
    text: "เป็นโรงงานคู่คิดสำหรับเจ้าของแบรนด์ใหม่และ SME ที่ต้องการเริ่มต้นอย่างเป็นระบบ",
    textEn: "A practical factory partner for new brand owners and SMEs who want to start with a clear system.",
    icon: Target
  },
  {
    title: "Research & Innovation",
    titleTh: "วิจัยและนวัตกรรม",
    text: "พัฒนาสูตรและปรับสัมผัส กลิ่น สี และสารสำคัญให้เข้ากับตำแหน่งแบรนด์",
    textEn: "Formula development with texture, scent, color and active direction aligned to each brand position.",
    icon: Beaker
  },
  {
    title: "Quality & Safety",
    titleTh: "คุณภาพและความปลอดภัย",
    text: "ควบคุมการผลิต ตรวจคุณภาพ และจัดการเอกสารเพื่อความพร้อมในการจำหน่าย",
    textEn: "Production control, quality checks and document handling for market-ready products.",
    icon: ShieldCheck
  },
  {
    title: "Long Term Partnership",
    titleTh: "พาร์ทเนอร์ระยะยาว",
    text: "ช่วยวางแผนต่อยอดสินค้าใหม่ ปรับแพ็กเกจ และพัฒนาไลน์ผลิตภัณฑ์ระยะยาว",
    textEn: "Support for new product planning, packaging updates and long-term product line development.",
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
        eyebrow="About Pherada"
        title={company.nameEn}
        titleTh={company.nameTh}
        description={`${company.nameTh} คือโรงงานรับผลิตเครื่องสำอางครบวงจรในคอนเซปต์ The Blue Factory ดูแลตั้งแต่ให้คำปรึกษา สูตร แพ็กเกจ เอกสาร ไปจนถึงผลิตจริง`}
        descriptionEn="Pherada Cosmetics Ltd. is a one-stop cosmetic factory under The Blue Factory concept, supporting consultation, formula, packaging, documents and production."
      />

      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <FadeUp>
            <SectionHeader
              eyebrow="Company Story"
              title="A focused factory partner for modern cosmetic brands"
              titleTh="โรงงานคู่คิดสำหรับแบรนด์เครื่องสำอางยุคใหม่"
              description={`Pherada Cosmetics เริ่มก่อตั้งและจดทะเบียนพาณิชย์เมื่อวันที่ ${company.registeredAt} โดยประกอบกิจการผลิต จำหน่าย เก็บรักษา และนำเข้าเครื่องสำอาง ประเภทผิวกายและเส้นผม`}
              descriptionEn="Pherada Cosmetics was registered as a cosmetic manufacturing business focused on production, sales, storage and import support for body and hair cosmetic products."
            />
          </FadeUp>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeUp key={pillar.title} delay={index * 0.08}>
                  <div className="h-full rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                    <Icon size={30} className="text-primary dark:text-accent" />
                    <h2 className="mt-5 font-serif text-[28px] font-medium leading-tight text-text-dark dark:text-white">
                      {locale === "th" ? pillar.titleTh : pillar.title}
                    </h2>
                    <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
                      {locale === "th" ? pillar.text : pillar.textEn}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-dark-section md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Team / Factory"
              title="Factory thinking, founder-friendly communication"
              titleTh="ทีมโรงงานที่คุยง่ายสำหรับเจ้าของแบรนด์"
              description={`ข้อมูลโรงงานระบุบุคลากร 3 คน และสถานที่ผลิตลักษณะ ${company.factoryInfo.rooms} พร้อมเครื่องชั่ง เครื่องผสม เครื่องบรรจุ และเครื่องซีลสำหรับงานผลิตเครื่องสำอาง`}
              descriptionEn="The factory information lists a lean team, production rooms and essential equipment for cosmetic production, filling and sealing."
            />
          </div>
          <div className="rounded-[4px] border border-primary/10 bg-light-bg p-8 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="font-serif text-3xl font-medium text-text-dark dark:text-white">
              {locale === "th" ? "ที่ตั้งโรงงาน" : "Factory location"}
            </h2>
            <p className="mt-4 text-xl font-medium leading-9 text-text-muted dark:text-text-light">{address}</p>
            <div className="mt-6 grid gap-3 text-lg font-medium text-text-muted dark:text-text-light">
              <p>{locale === "th" ? "ประเภทธุรกิจ" : "Business scope"}: {businessScope}</p>
              <p>{locale === "th" ? "สถานที่เก็บรักษา" : "Storage location"}: {storageAddress}</p>
              <p>{locale === "th" ? "เครื่องจักร" : "Equipment"}: {machines}</p>
            </div>
            <p className="mt-6 text-base font-semibold text-primary dark:text-accent">
              {company.tagline}
            </p>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
