import { Callout, PageIntro, ProductCard } from "@/components/ui";
import { products } from "@/lib/content";
import { pageMeta } from "@/lib/site";
import { FileSpreadsheet } from "@/components/icons";
export const metadata = pageMeta(
  "Halal Investing Excel Tools & Shariah Research Workbooks",
  "Preview AqlVest Excel tools for halal investing: a Self Shariah Screener, India and US research dashboard, and IT-sector comparison workbooks. Coming soon.",
  "/marketplace",
);
export default function Marketplace() {
  return (
    <>
      <PageIntro
        label="The marketplace / Coming soon"
        title="Your research. A clearer framework."
      >
        A marketplace for downloadable Excel tools that support your halal
        investing research. Explore the AqlVest workbooks in development, from
        manual Shariah screening to fundamental analysis and portfolio planning.
      </PageIntro>
      <section className="container catalogue-section">
        <div className="notice">
          <FileSpreadsheet size={23} />
          <p>
            <strong>In development for the AqlVest marketplace.</strong> Our
            official platform launch begins in Ramadan 2027, insha Allah.
            Products will be released progressively after review; downloads and
            purchases are not available yet. Compatibility, licensing, pricing,
            and individual release dates will be confirmed before publication.
          </p>
        </div>
        <div className="product-grid">
          {[
            ...products.slice(-3),
            ...products.slice(0, -3).filter((p) => p.type === "workbook"),
          ].map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <section className="container resource-promise">
        <div>
          <span>01 / PRACTICAL</span>
          <h2>Less blank-page thinking.</h2>
          <p>
            Planned prompts and clear structures to help you organise the
            questions that matter.
          </p>
        </div>
        <div>
          <span>02 / UNDERSTANDABLE</span>
          <h2>Know what’s behind it.</h2>
          <p>
            Instructions and transparent assumptions will be part of every
            release.
          </p>
        </div>
        <div>
          <span>03 / ACCESSIBLE</span>
          <h2>Built for everyday learners.</h2>
          <p>
            We aim to make useful resources approachable and affordable, with
            details published at launch.
          </p>
        </div>
      </section>
      <Callout
        title="Help shape the first collection."
        text="Share the workbook or research resource that would be most useful to you."
      />
    </>
  );
}
