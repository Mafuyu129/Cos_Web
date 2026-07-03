import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductGrid } from "@/components/showcase/ProductGrid";

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Showcase"
        title="Product directions for premium cosmetic brands"
        titleTh="แนวทางสินค้าเพื่อพัฒนาเป็นแบรนด์เครื่องสำอาง"
        description="เลือกดูตัวอย่างสินค้าตามหมวดหมู่ แล้วต่อยอดเป็นสูตรและแพ็กเกจของแบรนด์คุณ"
        descriptionEn="Explore product concepts by category, then develop them into your own formula and packaging."
      />
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Product Grid"
            title="Explore cosmetic product concepts"
            titleTh="สำรวจคอนเซปต์สินค้าเครื่องสำอาง"
            description="Categories include Facial Care, Body Care, Scrub, Soap & Shampoo, Sunscreen, Oral Care, Fragrance Diffuser and Spa Product."
            descriptionTh="หมวดสินค้า Facial Care, Body Care, Scrub, Soap & Shampoo, Sunscreen, Oral Care, Fragrance Diffuser และ Spa Product"
            className="mb-12"
          />
          <ProductGrid />
        </Container>
      </section>
    </>
  );
}
