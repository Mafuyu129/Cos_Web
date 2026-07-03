import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { company } from "@/data/company";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote for your cosmetic brand"
        titleTh="ขอใบเสนอราคาสำหรับแบรนด์เครื่องสำอางของคุณ"
        description="Send initial details so our team can estimate formula, quantity, packaging and required documents."
        descriptionTh="กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานประเมินสูตร จำนวนผลิต แพ็กเกจ และเอกสารที่เกี่ยวข้อง"
      />
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Quote Form"
              title="Tell us what you want to produce"
              titleTh="บอกเราว่าคุณต้องการผลิตอะไร"
              description="Fill in the brief and our team will use it to discuss the right production route."
              descriptionTh="กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานใช้คุยรายละเอียดเส้นทางผลิตที่เหมาะสม"
              className="mb-10"
            />
            <QuoteForm />
          </div>
          <aside className="rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] md:p-8 lg:self-start">
            <h2 className="font-serif text-4xl font-medium text-text-dark dark:text-white">Company contact</h2>
            <div className="mt-6 grid gap-5 text-lg font-medium text-text-muted dark:text-text-light">
              <p className="flex gap-3">
                <Phone size={20} className="mt-0.5 text-accent" />
                <span>{company.phone.join(", ")}</span>
              </p>
              <p className="flex gap-3">
                <Mail size={20} className="mt-0.5 text-accent" />
                <span>{company.email}</span>
              </p>
              <p className="flex gap-3">
                <MessageCircle size={20} className="mt-0.5 text-accent" />
                <span>Line: {company.line}</span>
              </p>
              <p className="flex gap-3">
                <MapPin size={20} className="mt-0.5 text-accent" />
                <span>{company.address}</span>
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
