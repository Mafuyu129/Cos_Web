"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Clock } from "lucide-react";
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
      <article className="bg-[#F4F9FD] py-14 dark:bg-[#04091A] md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-[#0038AE]/15 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0D1936]">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0038AE] dark:text-[#48ACD6]">
                {locale === "th" ? "สารบัญบทความ" : "TABLE OF CONTENTS"}
              </p>
              <div className="mt-4 grid gap-2.5">
                {sections.map((section, idx) => (
                  <a
                    key={section.heading}
                    href={`#${encodeURIComponent(section.heading)}`}
                    className="flex items-start gap-2 rounded-lg p-2 text-sm font-medium text-text-muted transition hover:bg-[#F4F9FD] hover:text-[#0038AE] dark:text-text-light/85 dark:hover:bg-white/5 dark:hover:text-[#48ACD6]"
                  >
                    <span className="font-mono text-xs font-bold text-[#48ACD6]">0{idx + 1}.</span>
                    <span>{section.heading}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-[#0038AE]/15 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-[#0D1936] md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0038AE]/10 px-3 py-1 font-mono font-bold uppercase tracking-wider text-[#0038AE] dark:bg-[#48ACD6]/20 dark:text-[#48ACD6]">
                <BookOpen size={13} className="text-[#48ACD6]" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-text-muted dark:text-text-light">
                <Clock size={13} className="text-[#48ACD6]" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text-dark dark:text-white sm:text-4xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted dark:text-text-light/90 md:text-lg">
              {excerpt}
            </p>

            <div className="mt-8 grid gap-7 border-t border-[#0038AE]/10 pt-8 dark:border-white/10">
              {sections.map((section, idx) => (
                <section key={section.heading} id={encodeURIComponent(section.heading)}>
                  <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-text-dark dark:text-white">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0038AE] to-[#48ACD6] font-mono text-xs text-white">
                      0{idx + 1}
                    </span>
                    <span>{section.heading}</span>
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted dark:text-text-light/85 sm:text-base">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-9 rounded-2xl border border-[#0038AE]/15 bg-[#F4F9FD] p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="text-lg font-extrabold text-text-dark dark:text-white">
                {locale === "th" ? "เช็กลิสต์เตรียมความพร้อม (Founder Checklist)" : "Founder Readiness Checklist"}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl bg-white p-3 text-xs font-semibold text-text-dark shadow-sm dark:bg-[#081128] dark:text-white sm:text-sm"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-[#48ACD6]" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-9 border-t border-[#0038AE]/10 pt-8 dark:border-white/10">
              <h2 className="text-lg font-extrabold text-text-dark dark:text-white">
                {locale === "th" ? "บทความที่เกี่ยวข้อง" : "Related Clinical Guides"}
              </h2>
              <div className="mt-4 grid gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/knowledge/${item.slug}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] p-4 text-sm font-bold text-text-dark transition hover:border-[#48ACD6] hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
                  >
                    <span>{locale === "th" ? item.title : item.titleEn}</span>
                    <ArrowRight size={16} className="shrink-0 text-[#48ACD6]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </article>
      <CTASection
        titleTh="มีไอเดียสร้างแบรนด์เวชสำอางหลังอ่านบทความนี้หรือยัง?"
        titleEn="Ready to turn your cosmeceutical concept into a real product?"
      />
    </>
  );
}

