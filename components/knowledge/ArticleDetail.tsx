"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Article } from "@/data/knowledge";

export function ArticleDetail({
  article,
  related
}: {
  article: Article;
  related: Article[];
}) {
  const { locale } = useLanguage();
  const title = locale === "th" ? article.title : article.titleEn;
  const excerpt = locale === "th" ? article.excerpt : article.excerptEn;
  const sections = article.sections.map((section) => ({
    heading: locale === "th" ? section.heading : section.headingEn,
    body: locale === "th" ? section.body : section.bodyEn
  }));
  const checklist = locale === "th" ? article.checklist : article.checklistEn;

  return (
    <>
      <article className="bg-light-bg py-16 dark:bg-dark-bg md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
                {locale === "th" ? "สารบัญ" : "Table of contents"}
              </p>
              <div className="mt-5 grid gap-3">
                {sections.map((section) => (
                  <a
                    key={section.heading}
                    href={`#${encodeURIComponent(section.heading)}`}
                    className="text-lg font-medium text-text-muted hover:text-primary dark:text-text-light dark:hover:text-accent"
                  >
                    {section.heading}
                  </a>
                ))}
              </div>
            </div>
          </aside>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
              {article.category} • {article.readingTime}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-medium leading-tight text-text-dark dark:text-white md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg font-medium leading-9 text-text-muted dark:text-text-light md:text-xl">
              {excerpt}
            </p>
            <div className="mt-10 grid gap-8">
              {sections.map((section) => (
                <section key={section.heading} id={encodeURIComponent(section.heading)}>
                  <h2 className="font-serif text-3xl font-medium text-text-dark dark:text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-lg font-medium leading-9 text-text-muted dark:text-text-light">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
            <div className="mt-10 rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="font-serif text-3xl font-medium text-text-dark dark:text-white">
                {locale === "th" ? "เช็กลิสต์" : "Checklist"}
              </h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {checklist.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-lg font-medium text-text-muted dark:text-text-light">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-serif text-3xl font-medium text-text-dark dark:text-white">
                {locale === "th" ? "บทความที่เกี่ยวข้อง" : "Related articles"}
              </h2>
              <div className="mt-5 grid gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/knowledge/${item.slug}`}
                    className="flex items-center justify-between gap-4 rounded-[4px] border border-primary/10 bg-white p-5 text-lg font-bold text-text-dark hover:bg-[#e6ecff] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
                  >
                    {locale === "th" ? item.title : item.titleEn}
                    <ArrowRight size={16} className="text-accent" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </article>
      <CTASection
        titleTh="มีไอเดียสินค้าหลังอ่านบทความนี้หรือยัง"
        titleEn="Have a product idea after reading?"
      />
    </>
  );
}
