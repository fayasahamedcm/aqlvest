import { notFound } from "next/navigation";
import Link from "next/link";
import { legalPages } from "@/lib/legal";
import { pageMeta } from "@/lib/site";
import { PageIntro } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(legalPages).map((legal) => ({ legal }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal } = await params;
  const p = legalPages[legal];
  return p ? pageMeta(p.title, p.intro, `/${legal}`) : {};
}
export default async function Legal({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal } = await params;
  const p = legalPages[legal];
  if (!p) notFound();
  return (
    <>
      <PageIntro label="The essentials" title={p.title}>
        {p.intro}
      </PageIntro>
      <div className="container legal-layout">
        <nav aria-label="Legal pages">
          {Object.entries(legalPages).map(([slug, page]) => (
            <Link
              key={slug}
              href={`/${slug}`}
              aria-current={legal === slug ? "page" : undefined}
            >
              {page.title}
            </Link>
          ))}
        </nav>
        <article className="legal-body">
          <p className="legal-date">Last updated: 14 November 2026</p>
          {p.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
          ))}
          <p className="legal-contact">
            Contact:{" "}
            <a href="mailto:founder@aqlvest.com">founder@aqlvest.com</a>
          </p>
        </article>
      </div>
    </>
  );
}
