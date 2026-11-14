import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileSpreadsheet,
  ShieldCheck,
  Target,
} from "./icons";
import type { Article, Product } from "@/lib/content";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function Status() {
  return (
    <span className="status">
      <span />
      Coming soon
    </span>
  );
}
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""}`}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        <p className="intro-copy">{children}</p>
      </div>
    </section>
  );
}
export function Callout({
  title = "Good questions are a great beginning.",
  text = "Tell us what you want to learn or which resource would help your journey.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container cta-wrap">
      <div className="cta">
        <div>
          <Eyebrow>Let’s build thoughtfully</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </div>
    </section>
  );
}

export function ProductPreview({
  variant,
  large = false,
}: {
  variant: Product["preview"];
  large?: boolean;
}) {
  return (
    <div
      className={`product-preview preview-${variant} ${large ? "preview-large" : ""}`}
      aria-hidden="true"
    >
      <div className="preview-dot-grid" />
      {variant === "portfolio" ? (
        <div className="portfolio-mini">
          <div className="mini-top">
            <span>Portfolio overview</span>
            <span>•••</span>
          </div>
          <div className="portfolio-content">
            <div className="donut">
              <div />
            </div>
            <div className="legend">
              <span>
                <i />
                Equities
              </span>
              <span>
                <i />
                Cash allocation
              </span>
              <span>
                <i />
                Other assets
              </span>
            </div>
          </div>
          <div className="mini-note">Illustrative allocation</div>
        </div>
      ) : variant === "screen" ? (
        <div className="screen-mini">
          <div className="mini-top">
            <ShieldCheck size={17} />
            <span>Research with context</span>
          </div>
          {["Business activities", "Financial criteria", "Source evidence"].map(
            (t, i) => (
              <div className="screen-line" key={t}>
                <span className="screen-number">0{i + 1}</span>
                <span>{t}</span>
                <span className="skeleton small" />
              </div>
            ),
          )}
          <div className="mini-note">
            Methodology · Evidence · Understanding
          </div>
        </div>
      ) : variant === "calculator" || variant === "analysis" ? (
        <div className="calculator-mini">
          <div className="mini-top">
            <span>
              {variant === "analysis"
                ? "Understand the fundamentals"
                : "Your long-term perspective"}
            </span>
            <Target size={16} />
          </div>
          <div className="chart-bars">
            {[20, 32, 29, 46, 40, 60, 57, 76, 85, 100].map((v, i) => (
              <span key={i} style={{ height: `${v}%` }} />
            ))}
          </div>
          <div className="mini-note">
            Concept preview · No projected returns
          </div>
        </div>
      ) : (
        <div className="workbook-mini">
          <div className="workbook-spine" />
          <div className="workbook-cover">
            <FileSpreadsheet size={25} />
            <span>AqlVest resources</span>
            <strong>
              {variant === "journal" ? (
                <>
                  The thoughtful
                  <br />
                  investor’s journal.
                </>
              ) : (
                <>
                  Your research.
                  <br />
                  Better organised.
                </>
              )}
            </strong>
            <div className="workbook-rule" />
            <small>KNOWLEDGE INTO PRACTICE</small>
          </div>
        </div>
      )}
    </div>
  );
}
export function ProductCard({ product }: { product: Product }) {
  const base = product.type === "tool" ? "/tools" : "/marketplace";
  return (
    <article className="product-card">
      <Link
        href={`${base}/${product.slug}`}
        className="preview-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProductPreview variant={product.preview} />
      </Link>
      <div className="product-card-body">
        <div className="card-meta">
          <span>{product.category}</span>
          <Status />
        </div>
        <h3>
          <Link href={`${base}/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.description}</p>
        <Link className="text-link" href={`${base}/${product.slug}`}>
          Explore the concept <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
export function ArticleCard({
  article,
  index = 0,
}: {
  article: Article;
  index?: number;
}) {
  return (
    <article className="article-card">
      <div
        className={`article-art article-art-${index % 4}`}
        aria-hidden="true"
      >
        <div className="article-art-lines" />
        {index % 4 === 0 ? (
          <BookOpen />
        ) : index % 4 === 1 ? (
          <ShieldCheck />
        ) : index % 4 === 2 ? (
          <Target />
        ) : (
          <Check />
        )}
        <span>AQLVEST / FIELD NOTES</span>
      </div>
      <div className="article-card-body">
        <div className="card-meta">
          <span>{article.category}</span>
          <span>{article.minutes} min read</span>
        </div>
        <h3>
          <Link href={`/learn/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <Link href={`/learn/${article.slug}`} className="text-link">
          Read the guide <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
