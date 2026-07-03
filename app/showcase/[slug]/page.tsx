import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/common/CTASection";
import { ProductDetail } from "@/components/showcase/ProductDetail";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product ? `${product.title} | Pherada Showcase` : "Product" };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <>
      <ProductDetail product={product} />
      <CTASection title={`Request a quote for ${product.title}`} />
    </>
  );
}
