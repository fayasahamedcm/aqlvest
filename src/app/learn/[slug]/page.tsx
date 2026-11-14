import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/content";
import { pageMeta } from "@/lib/site";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { ArticleCard, Eyebrow } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return a ? pageMeta(a.title, a.description, `/learn/${slug}`) : {};
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <>
      <header className="article-header container">
        <Link href="/learn" className="text-link">
          <ArrowLeft size={16} />
          Learning library
        </Link>
        <Eyebrow>{a.category}</Eyebrow>
        <h1>{a.title}</h1>
        <p className="intro-copy">{a.description}</p>
        <div className="article-byline">
          <span>AqlVest editorial</span>
          <span>
            <Clock3 size={14} />
            {a.minutes} min read
          </span>
          <span>Introductory guide · November 2026</span>
        </div>
      </header>
      <div className="container article-layout">
        <aside className="article-toc">
          <h2>In this guide</h2>
          {a.sections.map((s, i) => (
            <a key={s.title} href={`#section-${i + 1}`}>
              <span>0{i + 1}</span>
              {s.title}
            </a>
          ))}
          <a href="#sources">Sources & further reading</a>
        </aside>
        <article className="article-body">
          <div className="takeaway">
            <span>THE IDEA TO TAKE WITH YOU</span>
            <p>{a.takeaway}</p>
          </div>
          {a.sections.map((s, i) => (
            <section key={s.title} id={`section-${i + 1}`}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <section id="sources" className="article-sources">
            <h2>Sources & further reading</h2>
            <p>
              Consult the original publications for their full context and
              current versions. External organisations do not endorse AqlVest.
            </p>
            {a.sources.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
                <ArrowUpRight size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </section>
          <div className="article-disclaimer">
            <strong>A note on scope</strong>
            <p>
              This is general education, not investment advice, a screening
              conclusion, or a religious ruling. It may not address your
              circumstances. Read our{" "}
              <Link href="/disclaimer">financial and Shariah disclaimer</Link>.
            </p>
          </div>
        </article>
      </div>
      <section className="container section related-guides">
        <Eyebrow>Keep your curiosity going</Eyebrow>
        <h2>Continue learning.</h2>
        <div className="article-grid">
          {articles
            .filter((x) => x.slug !== a.slug)
            .slice(0, 2)
            .map((x, i) => (
              <ArticleCard key={x.slug} article={x} index={i + 1} />
            ))}
        </div>
      </section>
    </>
  );
}
