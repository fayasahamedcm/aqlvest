import { notFound } from "next/navigation";
import { products } from "@/lib/content";
import { pageMeta } from "@/lib/site";
import { ProductDetail } from "@/components/product-detail";
export const dynamicParams = false;
export function generateStaticParams() {
  return products
    .filter((p) => p.type === "tool")
    .map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug && p.type === "tool");
  return p
    ? pageMeta(p.name, `${p.description} Coming soon.`, `/tools/${slug}`)
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug && p.type === "tool");
  if (!p) notFound();
  return <ProductDetail product={p} />;
}
