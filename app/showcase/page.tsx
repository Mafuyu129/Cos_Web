import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductGrid } from "@/components/showcase/ProductGrid";
import { ShopeeBanner } from "@/components/showcase/ShopeeBanner";

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Showcase"
        title="Product directions & official Shopee store"
        titleTh="ผลิตภัณฑ์และร้านค้าทางการบน Shopee"
        description="เลือกดูสูตรผลิตภัณฑ์ตัวอย่าง สั่งซื้อขนาดทดลองผ่าน Shopee หรือต่อยอดเป็นแบรนด์ของคุณเอง"
        descriptionEn="Explore product concepts, order authentic samples directly on Shopee, or develop them into your own brand."
      />
      <section className="bg-light-bg py-12 dark:bg-dark-bg md:py-20">
        <Container className="space-y-12">
          {/* Prominent Shopee Store Banner */}
          <ShopeeBanner />

          <div>
            <SectionHeader
              eyebrow="Catalog & Order"
              title="Explore cosmetic product concepts & samples"
              titleTh="รายการผลิตภัณฑ์และขนาดทดลอง"
              description="เลือกดูผลิตภัณฑ์ตามหมวดหมู่ พร้อมสั่งซื้อผ่าน Shopee หรือติดต่อฝ่ายผลิต OEM"
              descriptionTh="เลือกดูผลิตภัณฑ์ตามหมวดหมู่ พร้อมสั่งซื้อผ่าน Shopee หรือติดต่อฝ่ายผลิต OEM"
              className="mb-10"
            />
            <ProductGrid />
          </div>
        </Container>
      </section>
    </>
  );
}
