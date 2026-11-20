import { Callout, PageIntro, ProductCard } from "@/components/ui";
import { products } from "@/lib/content";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import { CircleHelp } from "@/components/icons";
export const metadata = pageMeta(
  "Shariah Screening & Halal Investment Tools",
  "Explore upcoming tools for halal investing, Shariah screening, portfolio planning and financial analysis. Discover AqlVest’s downloadable Excel research workbooks.",
  "/tools",
);
export default function Tools() {
  return (
    <>
      <PageIntro
        label="The toolkit / Coming soon"
        title="Better questions. Clearer tools."
      >
        We’re building practical ways to explore the numbers, organise your
        research, and understand the assumptions behind an investment decision.
      </PageIntro>
      <section className="container catalogue-section">
        <div className="notice">
          <CircleHelp size={21} />
          <p>
            <strong>A preview of what’s ahead.</strong> These tools are in
            development. No screening, tracking, or calculations are available
            yet. The visuals show concepts, not functioning tools or live data.
          </p>
        </div>
        <div className="product-grid two-columns">
          {products
            .filter((p) => p.type === "tool")
            .map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
        </div>
      </section>
      <section className="container tools-marketplace-link">
        <h2>Looking for the Excel workbooks?</h2>
        <p>
          Our Self Shariah Screener, India &amp; US Stock Research Dashboard,
          and IT Sector Shariah Research Workbook are being prepared for the
          marketplace.
        </p>
        <Link href="/marketplace" className="text-link">
          Preview the Excel collection →
        </Link>
      </section>
      <Callout
        title="A tool you wish existed?"
        text="Tell us which part of your research could use a little more clarity."
      />
    </>
  );
}
