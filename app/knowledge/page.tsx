"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { articles } from "@/data/knowledge";

export default function KnowledgePage() {
  const { locale } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow="Knowledge"
        title="Cosmetic factory knowledge for brand owners"
        titleTh="บทความสำหรับเจ้าของแบรนด์เครื่องสำอาง"
        description="รวบรวมคู่มือความรู้สำหรับเจ้าของแบรนด์มือใหม่ เข้าใจง่ายเรื่องสูตร ขั้นต่ำ MOQ เอกสาร อย. และฉลากสินค้า"
        descriptionEn="Essential guides for new beauty brand founders to understand formulations, starter MOQ, Thai FDA compliance and labeling rules."
      />
      <section className="bg-gradient-to-b from-[#f8fafd] via-white to-[#f0f6fa] py-16 dark:bg-gradient-to-b dark:from-dark-bg dark:via-dark-section dark:to-dark-bg md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Guides & Articles"
            title="Start smarter before your first production run"
            titleTh="เริ่มต้นให้ชัดก่อนเริ่มผลิตจริงครั้งแรก"
            description="ความรู้เชิงลึกจากประสบการณ์โรงงาน ช่วยให้คุณวางแผนงบประมาณและเวลาได้อย่างแม่นยำ"
            descriptionTh="ความรู้เชิงลึกจากประสบการณ์โรงงาน ช่วยให้คุณวางแผนงบประมาณและเวลาได้อย่างแม่นยำ"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-primary/15 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-text-muted dark:text-text-light">
                    <span className="rounded-[2px] bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary dark:bg-accent/10 dark:text-accent">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-5 font-serif text-2xl font-medium leading-snug text-text-dark transition group-hover:text-primary dark:text-white dark:group-hover:text-accent sm:text-3xl">
                    {locale === "th" ? article.title : article.titleEn}
                  </h2>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-text-muted dark:text-text-light">
                    {locale === "th" ? article.excerpt : article.excerptEn}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-primary/10 pt-4 text-xs font-semibold uppercase tracking-wider text-primary transition group-hover:text-[#002f94] dark:border-white/10 dark:text-accent">
                  <span>{locale === "th" ? "อ่านบทความฉบับเต็ม" : "Read Full Article"}</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
