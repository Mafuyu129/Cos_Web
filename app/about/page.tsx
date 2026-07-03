import { Beaker, Handshake, ShieldCheck, Target } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { company } from "@/data/company";

const pillars = [
  {
    title: "Vision & Mission",
    text: "เป็นโรงงานคู่คิดสำหรับเจ้าของแบรนด์ใหม่และ SME ที่ต้องการเริ่มต้นอย่างเป็นระบบ",
    icon: Target
  },
  {
    title: "Research & Innovation",
    text: "พัฒนาสูตรและปรับสัมผัส กลิ่น สี และสารสำคัญให้เข้ากับตำแหน่งแบรนด์",
    icon: Beaker
  },
  {
    title: "Quality & Safety",
    text: "ควบคุมการผลิต ตรวจคุณภาพ และจัดการเอกสารเพื่อความพร้อมในการจำหน่าย",
    icon: ShieldCheck
  },
  {
    title: "Long Term Partnership",
    text: "ช่วยวางแผนต่อยอดสินค้าใหม่ ปรับแพ็กเกจ และพัฒนาไลน์ผลิตภัณฑ์ระยะยาว",
    icon: Handshake
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pherada"
        title={company.nameEn}
        description={`${company.nameTh} คือโรงงานรับผลิตเครื่องสำอางครบวงจรในคอนเซปต์ The Blue Factory ดูแลตั้งแต่ให้คำปรึกษา สูตร แพ็กเกจ เอกสาร ไปจนถึงผลิตจริง`}
      />

      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <FadeUp>
            <SectionHeader
              eyebrow="Company Story"
              title="A focused factory partner for modern cosmetic brands"
              description={`Pherada Cosmetics เริ่มก่อตั้งและจดทะเบียนพาณิชย์เมื่อวันที่ ${company.registeredAt} โดยประกอบกิจการผลิต จำหน่าย เก็บรักษา และนำเข้าเครื่องสำอาง ประเภทผิวกายและเส้นผม`}
            />
          </FadeUp>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeUp key={pillar.title} delay={index * 0.08}>
                  <div className="h-full rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                    <Icon size={30} className="text-primary dark:text-accent" />
                    <h2 className="mt-5 font-serif text-3xl font-medium text-text-dark dark:text-white">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
                      {pillar.text}
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
              description={`ข้อมูลโรงงานระบุบุคลากร 3 คน และสถานที่ผลิตลักษณะ ${company.factoryInfo.rooms} พร้อมเครื่องชั่ง เครื่องผสม เครื่องบรรจุ และเครื่องซีลสำหรับงานผลิตเครื่องสำอาง`}
            />
          </div>
          <div className="rounded-[4px] border border-primary/10 bg-light-bg p-8 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="font-serif text-4xl font-medium text-text-dark dark:text-white">Factory location</h2>
            <p className="mt-4 text-xl font-medium leading-9 text-text-muted dark:text-text-light">{company.address}</p>
            <div className="mt-6 grid gap-3 text-lg font-medium text-text-muted dark:text-text-light">
              <p>ประเภทธุรกิจ: {company.businessScope}</p>
              <p>สถานที่เก็บรักษา: {company.factoryInfo.storageAddress}</p>
              <p>เครื่องจักร: {company.factoryInfo.machines}</p>
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
