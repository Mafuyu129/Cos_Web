"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
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
        eyebrow="Cosmeceutical Knowledge Hub"
        title="Dermo-cosmetic & OEM knowledge for brand founders"
        titleTh="คลังความรู้การสร้างแบรนด์เวชสำอางและสกินแคร์"
        description="รวบรวมคู่มือเชิงลึกสำหรับเจ้าของแบรนด์เวชสำอาง เข้าใจง่ายเรื่องการพัฒนาสูตร ขั้นต่ำ MOQ การขึ้นทะเบียน อย. และข้อกำหนดฉลาก"
        descriptionEn="Essential clinical & OEM guides for beauty brand founders—covering active formulations, starter MOQ, Thai FDA compliance, and labeling."
      />
      <section className="bg-[#F4F9FD] py-16 dark:bg-[#04091A] md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Clinical Guides & Insights"
            title="Start smarter before your first production run"
            titleTh="วางแผนสร้างแบรนด์เวชสำอางอย่างเป็นระบบก่อนเริ่มผลิตจริง"
            description="ความรู้จากประสบการณ์จริงของโรงงาน Pherada Cosmetics ช่วยให้คุณบริหารงบประมาณและเวลาได้อย่างแม่นยำ"
            descriptionTh="ความรู้จากประสบการณ์จริงของโรงงาน Pherada Cosmetics ช่วยให้คุณบริหารงบประมาณและเวลาได้อย่างแม่นยำ"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#48ACD6] hover:shadow-premium dark:border-white/10 dark:bg-[#0D1936]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0038AE] to-[#48ACD6]" />
                <div>
                  <div className="flex items-center justify-between text-xs text-text-muted dark:text-text-light">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#0038AE]/15 bg-[#F4F9FD] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0038AE] dark:border-[#48ACD6]/30 dark:bg-white/5 dark:text-[#48ACD6]">
                      <BookOpen size={12} className="text-[#48ACD6]" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock size={12} className="text-[#48ACD6]" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-extrabold leading-snug text-text-dark transition group-hover:text-[#0038AE] dark:text-white dark:group-hover:text-[#48ACD6] sm:text-2xl">
                    {locale === "th" ? article.title : article.titleEn}
                  </h2>

                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-text-light/85">
                    {locale === "th" ? article.excerpt : article.excerptEn}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-[#0038AE]/10 pt-4 text-xs font-bold uppercase tracking-wider text-[#0038AE] dark:border-white/10 dark:text-[#48ACD6]">
                  <span>{locale === "th" ? "อ่านบทความฉบับเต็ม" : "Read Full Guide"}</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

