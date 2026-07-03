import Image from "next/image";
import { ClipboardCheck, FileCheck2, FlaskConical, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { company } from "@/data/company";

const standards = [
  {
    title: "Thai FDA Standard",
    text: "ดูแลข้อมูลสูตร ฉลาก และเอกสารสำหรับจดแจ้งเครื่องสำอางตามขั้นตอน",
    icon: ShieldCheck
  },
  {
    title: "Certificate card",
    text: "แสดงข้อมูลสถานที่ผลิตและเอกสารสำคัญที่เกี่ยวข้องกับการผลิต",
    icon: FileCheck2
  },
  {
    title: "QC process",
    text: "ตรวจความเรียบร้อยของสินค้า สี กลิ่น เนื้อสัมผัส บรรจุภัณฑ์ และการติดฉลาก",
    icon: FlaskConical
  },
  {
    title: "BMR document",
    text: "จัดเก็บบันทึกการผลิตและข้อมูล batch เพื่อใช้ติดตามงานผลิต",
    icon: ClipboardCheck
  }
];

export default function StandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Standards"
        title="Quality, safety and document workflow"
        description="ระบบเอกสารและการควบคุมคุณภาพสำหรับแบรนด์ที่ต้องการความน่าเชื่อถือ"
      />
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Trust System"
            title="Factory standards for cosmetic production"
            description="Pherada ให้ความสำคัญกับการจดแจ้ง อย. การตรวจ QC และบันทึกเอกสารการผลิต"
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {standards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[4px] border border-primary/10 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
                  <Icon size={30} className="text-primary dark:text-accent" />
                  <h2 className="mt-5 font-serif text-3xl font-medium text-text-dark dark:text-white">{item.title}</h2>
                  <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-white py-20 dark:bg-dark-section md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="FDA General Information"
              title="ข้อมูลทั่วไปจากเอกสาร อย."
              description="ข้อมูลบริษัท สถานที่ผลิต สถานที่เก็บรักษา และขอบเขตประกอบกิจการตามเอกสารที่อยู่ในโฟลเดอร์ Doc"
            />
            <div className="mt-8 grid gap-4">
              {[
                ["ชื่อองค์กร", company.nameTh],
                ["สถานที่ผลิต", company.factoryInfo.productionAddress],
                ["สถานที่เก็บรักษา", company.factoryInfo.storageAddress],
                ["ประเภทธุรกิจ", company.businessScope],
                ["ลักษณะสถานที่ผลิต", company.factoryInfo.rooms],
                ["เครื่องจักร", company.factoryInfo.machines]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-light-bg p-5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {label}
                  </p>
                  <p className="mt-2 text-base leading-8 text-text-muted dark:text-text-light md:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-white shadow-soft dark:border-white/10">
            <Image
              src="/images/factory/fda-general-info.png"
              alt="Pherada FDA general information document"
              width={595}
              height={842}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>
      <section className="bg-white py-20 dark:bg-dark-section md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Document Workflow"
            title="From formula data to production records"
            description="ทีมงานช่วยตรวจข้อมูลสำคัญตั้งแต่สูตร ฉลาก เอกสารจดแจ้ง รายละเอียดผลิตจริง และบันทึก BMR"
          />
          <div className="grid gap-4">
            {["Formula and ingredient review", "Label and FDA notification support", "Production batch record", "Final QC before delivery"].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-lg border border-border bg-light-bg p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-base font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-lg font-semibold text-text-dark dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title="Prepare your brand with the right documents" />
    </>
  );
}
