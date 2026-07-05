"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        description="บทความสั้นสำหรับเจ้าของแบรนด์ที่ต้องการเข้าใจสูตร MOQ เอกสาร อย. และฉลาก"
        descriptionEn="Short articles for brand owners who want to understand formula, MOQ, Thai FDA documents and labels."
      />
      <section className="bg-light-bg py-20 dark:bg-dark-bg md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Articles"
            title="Start smarter before your first production run"
            titleTh="เริ่มต้นให้ชัดก่อนผลิตจริงครั้งแรก"
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group rounded-[4px] border border-primary/10 bg-white p-7 transition hover:-translate-y-1 hover:bg-[#e6ecff] dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {article.category} • {article.readingTime}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-text-dark dark:text-white">
                  {locale === "th" ? article.title : article.titleEn}
                </h2>
                <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
                  {locale === "th" ? article.excerpt : article.excerptEn}
                </p>
                <p className="mt-6 flex items-center gap-2 text-base font-semibold text-primary dark:text-accent">
                  {locale === "th" ? "อ่านบทความ" : "Read article"}{" "}
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
