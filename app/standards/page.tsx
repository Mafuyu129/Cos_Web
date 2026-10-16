"use client";

import Image from "next/image";
import { CheckCircle2, ClipboardCheck, FileCheck2, FlaskConical, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { company } from "@/data/company";

const standards = [
  {
    code: "STD // 01",
    title: "Thai FDA Compliance",
    titleTh: "มาตรฐานจดแจ้ง อย. ไทย",
    text: "ตรวจสอบความถูกต้องของสารสกัด (INCI Name) อัตราส่วนตามกฎหมาย และฉลากเพื่อยื่นจดแจ้งเครื่องสำอางอย่างถูกต้อง",
    textEn: "Full INCI ingredient review, concentration compliance, and label verification for Thai FDA notification.",
    icon: ShieldCheck
  },
  {
    code: "STD // 02",
    title: "Licensed Facility",
    titleTh: "สถานที่ผลิตได้รับอนุญาต",
    text: "สถานที่ผลิตและเก็บรักษาเครื่องสำอางมีเอกสารรับรองชัดเจน แบ่งกั้นห้องปฏิบัติการอย่างเป็นระบบ",
    textEn: "Registered cosmetic production and storage facility with structured clean-zone room separation.",
    icon: FileCheck2
  },
  {
    code: "STD // 03",
    title: "Clinical QC Inspection",
    titleTh: "กระบวนการตรวจสอบ QC",
    text: "ตรวจสอบค่า pH ความหนืด สี กลิ่น เนื้อสัมผัส ความสะอาดของบรรจุภัณฑ์ และการซีลก่อนส่งมอบทุกแบตช์",
    textEn: "Rigorous inspection of pH, viscosity, color, scent, texture, and packaging seal integrity.",
    icon: FlaskConical
  },
  {
    code: "STD // 04",
    title: "BMR Traceability",
    titleTh: "ระบบบันทึกการผลิต BMR",
    text: "จัดทำ Batch Manufacturing Record บันทึกข้อมูลวัตถุดิบและขั้นตอนการผลิตเพื่อการตรวจสอบย้อนกลับ 100%",
    textEn: "Complete Batch Manufacturing Records (BMR) logging raw materials and process parameters for traceability.",
    icon: ClipboardCheck
  }
];

export default function StandardsPage() {
  const { locale } = useLanguage();
  const companyRows =
    locale === "th"
      ? [
          ["ชื่อนิติบุคคล", company.nameTh],
          ["สถานที่ผลิตเวชสำอาง/เครื่องสำอาง", company.factoryInfo.productionAddress],
          ["สถานที่เก็บรักษา", company.factoryInfo.storageAddress],
          ["ขอบเขตการประกอบกิจการ", company.businessScope],
          ["โครงสร้างห้องปฏิบัติการและสถานที่ผลิต", company.factoryInfo.rooms],
          ["เครื่องจักรและอุปกรณ์ควบคุมการผลิต", company.factoryInfo.machines]
        ]
      : [
          ["Legal Entity", company.nameEn],
          ["Production Facility", company.factoryInfo.productionAddressEn],
          ["Storage Facility", company.factoryInfo.storageAddressEn],
          ["Registered Scope", company.businessScopeEn],
          ["Facility Layout", company.factoryInfo.roomsEn],
          ["Manufacturing Equipment", company.factoryInfo.machinesEn]
        ];

  const workflow =
    locale === "th"
      ? [
          "ตรวจสอบโครงสร้างสูตร สารสกัด Active และความปลอดภัยตามเกณฑ์ อย.",
          "ตรวจความถูกต้องของฉลากภาษาไทย/อังกฤษ และยื่นจดแจ้งเลขที่ใบรับจดแจ้ง",
          "ควบคุมการผลิตในห้องสะอาดพร้อมบันทึกเอกสาร BMR ประจำแบตช์",
          "ตรวจสอบคุณภาพขั้นสุดท้าย (Final QC) ก่อนจัดส่งสินค้าถึงมือเจ้าของแบรนด์"
        ]
      : [
          "Formula active concentration and Thai FDA regulatory review",
          "Compliant cosmetic label verification and official FDA filing",
          "Clean-zone batch manufacturing with complete BMR logging",
          "Final laboratory QC inspection prior to dispatch"
        ];

  return (
    <>
      <PageHero
        eyebrow="Clinical Quality & Regulatory"
        title="Quality assurance, BMR traceability & Thai FDA workflow"
        titleTh="มาตรฐานการควบคุมคุณภาพ เอกสาร BMR และการจดแจ้ง อย."
        description="Every cosmeceutical formula is backed by regulatory documentation and batch traceability."
        descriptionTh="สร้างความเชื่อมั่นให้แบรนด์เวชสำอางของคุณด้วยระบบควบคุมคุณภาพห้องปฏิบัติการ เอกสาร BMR และการขึ้นทะเบียน อย. ถูกต้องตามกฎหมาย"
      />

      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container>
          <SectionHeader
            eyebrow="4 Pillars of Assurance"
            title="Clinical standards for cosmeceutical manufacturing"
            titleTh="4 มาตรฐานหลักของโรงงาน Pherada Cosmetics"
            description="Pherada focuses on Thai FDA compliance, laboratory QC checks, and traceable BMR production records."
            descriptionTh="เราให้ความสำคัญสูงสุดกับความปลอดภัยของสูตร ความถูกต้องของเอกสาร อย. และการบันทึกข้อมูลการผลิตทุกแบตช์"
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {standards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white shadow-md">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-[#0038AE] dark:text-[#48ACD6]">
                        {item.code}
                      </span>
                    </div>
                    <h2 className="mt-5 text-lg font-extrabold leading-snug text-text-dark dark:text-white">
                      {locale === "th" ? item.titleTh : item.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-text-light/85">
                      {locale === "th" ? item.text : item.textEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#0038AE]/12 bg-white py-16 dark:border-white/10 dark:bg-[#081128] md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Official Registration Data"
              title="ข้อมูลสถานที่ผลิตจากเอกสารการจดทะเบียน"
              titleEn="Official Facility & Registration Information"
              description="ข้อมูลบริษัท สถานที่ผลิต สถานที่เก็บรักษา และขอบเขตประกอบกิจการตามเอกสารการจดทะเบียนอย่างเป็นทางการ"
              descriptionEn="Verified company profile, production facility, storage facility, and equipment scope from official filings."
            />
            <div className="mt-8 grid gap-3.5">
              {companyRows.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#0038AE]/15 bg-[#F4F9FD] p-4 dark:border-white/10 dark:bg-[#0D1936]"
                >
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-text-dark dark:text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0038AE]/20 bg-[#F4F9FD] p-4 shadow-premium dark:border-white/10 dark:bg-[#0D1936]">
            <div className="mb-3 flex items-center justify-between px-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
                OFFICIAL DOCUMENT // THAI FDA FILING
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={12} /> VERIFIED
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#0038AE]/10 bg-white">
              <Image
                src="/images/factory/fda-general-info.png"
                alt="Pherada FDA general information document"
                width={595}
                height={842}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Regulatory & QC Workflow"
            title="From formula INCI review to BMR batch release"
            titleTh="ขั้นตอนการตรวจสอบเอกสารและควบคุมคุณภาพก่อนส่งมอบ"
            description="ทีมงานช่วยตรวจสอบข้อมูลสำคัญตั้งแต่สูตร ฉลาก เอกสารจดแจ้ง อย. รายละเอียดผลิตจริง และบันทึก BMR"
            descriptionEn="Our regulatory & QC team verifies formula specs, labels, FDA notifications, and BMR batch records."
          />
          <div className="grid gap-3.5">
            {workflow.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-[#0038AE]/15 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0D1936]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] font-mono text-sm font-bold text-white shadow-sm">
                  0{index + 1}
                </span>
                <p className="text-sm font-bold text-text-dark dark:text-white sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        titleTh="สร้างแบรนด์เวชสำอางอย่างมั่นใจด้วยระบบเอกสาร อย. และ BMR ที่ถูกต้อง"
        titleEn="Launch your cosmeceutical brand with compliant FDA & BMR documentation"
      />
    </>
  );
}

