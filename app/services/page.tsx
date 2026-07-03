import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Service"
        title="OEM / ODM services for complete cosmetic brands"
        titleTh="บริการ OEM / ODM สำหรับแบรนด์เครื่องสำอางครบวงจร"
        description="Facial care, body care, hair care, fragrance, packaging and Thai FDA documents in one production path."
        descriptionTh="ผลิตภัณฑ์ดูแลผิวหน้า ผิวกาย เส้นผม น้ำหอม แพ็กเกจ และเอกสาร อย. ในเส้นทางเดียว"
      />
      <section className="bg-[#f8f9fc] py-16 dark:bg-dark-bg md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Service Grid"
            title="Choose the service path that matches your brand"
            titleTh="เลือกบริการที่เหมาะกับแบรนด์ของคุณ"
            description="Each category can start from a standard formula or a custom formula direction."
            descriptionTh="แต่ละหมวดสามารถเริ่มจากสูตรมาตรฐาน หรือพัฒนาสูตรใหม่ตามคอนเซปต์"
            className="mb-12"
          />
          <ServiceGrid />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
