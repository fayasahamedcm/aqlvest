import { Callout, PageIntro, ProductCard } from "@/components/ui";
import { products } from "@/lib/content";
import { pageMeta } from "@/lib/site";
import { CircleHelp } from "@/components/icons";
export const metadata = pageMeta(
  "Tools for thoughtful investing",
  "Preview upcoming Shariah screening education tools, portfolio trackers, investment calculators, and financial analysis resources.",
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
      <Callout
        title="A tool you wish existed?"
        text="Tell us which part of your research could use a little more clarity."
      />
    </>
  );
}
