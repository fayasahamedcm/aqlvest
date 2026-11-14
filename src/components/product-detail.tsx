import Link from "next/link";
import { ArrowLeft, Check, CircleHelp } from "lucide-react";
import { ProductPreview, Eyebrow, ButtonLink, Status } from "./ui";
import type { Product } from "@/lib/content";
export function ProductDetail({ product: p }: { product: Product }) {
  const base = p.type === "tool" ? "/tools" : "/marketplace";
  return (
    <>
      <section className="container product-detail">
        <Link href={base} className="text-link">
          <ArrowLeft size={16} />
          {p.type === "tool" ? "All planned tools" : "The marketplace"}
        </Link>
        <div className="product-detail-grid">
          <ProductPreview variant={p.preview} large />
          <div>
            <div className="detail-meta">
              <Eyebrow>{p.category}</Eyebrow>
              <Status />
            </div>
            <h1>{p.name}</h1>
            <p className="intro-copy">{p.description}</p>
            <h2>What we’re exploring</h2>
            <ul className="feature-list">
              {p.includes.map((i) => (
                <li key={i}>
                  <Check size={17} />
                  {i}
                </li>
              ))}
            </ul>
            <p className="detail-note">
              This is a planned concept. Scope and availability may change.{" "}
              {p.type === "workbook"
                ? "Format, compatibility, licensing, and pricing will be published at release."
                : "No calculations, screening results, or live financial data are available."}
            </p>
            <ButtonLink
              href={`/contact?interest=${encodeURIComponent(p.name)}`}
            >
              Share your interest
            </ButtonLink>
            <p className="interest-note">
              Send a note to the founder. No account or mailing list signup.
            </p>
          </div>
        </div>
        <div className="notice">
          <CircleHelp size={22} />
          <p>
            For education and general research only. This preview is not an
            investment recommendation, financial advice, or a Shariah
            certification. <Link href="/disclaimer">Read our disclaimer.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
