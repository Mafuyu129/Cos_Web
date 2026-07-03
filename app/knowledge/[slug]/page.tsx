import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { Container } from "@/components/common/Container";
import { articles } from "@/data/knowledge";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article ? `${article.title} | Pherada Knowledge` : "Article" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="bg-light-bg py-16 dark:bg-dark-bg md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-accent">
                Table of contents
              </p>
              <div className="mt-5 grid gap-3">
                {article.sections.map((section) => (
                  <a
                    key={section.heading}
                    href={`#${section.heading}`}
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
            <h1 className="mt-4 font-serif text-5xl font-medium leading-tight text-text-dark dark:text-white md:text-7xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl font-medium leading-9 text-text-muted dark:text-text-light md:text-2xl">
              {article.excerpt}
            </p>
            <div className="mt-10 grid gap-8">
              {article.sections.map((section) => (
                <section key={section.heading} id={section.heading}>
                  <h2 className="font-serif text-4xl font-medium text-text-dark dark:text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-xl font-medium leading-10 text-text-muted dark:text-text-light">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
            <div className="mt-10 rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="font-serif text-4xl font-medium text-text-dark dark:text-white">Checklist</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {article.checklist.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-lg font-medium text-text-muted dark:text-text-light">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-serif text-4xl font-medium text-text-dark dark:text-white">Related articles</h2>
              <div className="mt-5 grid gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/knowledge/${item.slug}`}
                    className="flex items-center justify-between gap-4 rounded-[4px] border border-primary/10 bg-white p-5 text-lg font-bold text-text-dark hover:bg-[#e6ecff] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
                  >
                    {item.title}
                    <ArrowRight size={16} className="text-accent" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </article>
      <CTASection title="Have a product idea after reading?" />
    </>
  );
}
