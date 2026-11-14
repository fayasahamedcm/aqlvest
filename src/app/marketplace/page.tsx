import { Callout, PageIntro, ProductCard } from "@/components/ui";
import { products } from "@/lib/content";
import { pageMeta } from "@/lib/site";
import { FileSpreadsheet } from "@/components/icons";
export const metadata = pageMeta(
  "Digital workbooks & research resources",
  "Discover upcoming affordable Excel workbooks, portfolio planning templates, and downloadable investment research resources from AqlVest.",
  "/marketplace",
);
export default function Marketplace() {
  return (
    <>
      <PageIntro
        label="The marketplace / Coming soon"
        title="A little structure. A lot of possibility."
      >
        Thoughtfully planned Excel workbooks and downloadable resources to help
        turn your learning into an organised research practice. Designed with
        accessibility and affordability in mind.
      </PageIntro>
      <section className="container catalogue-section">
        <div className="notice">
          <FileSpreadsheet size={23} />
          <p>
            <strong>Our shelves are taking shape.</strong> All resources are
            coming soon. Downloads and purchases are not available. Formats,
            compatibility, licensing, and pricing will be confirmed before
            release.
          </p>
        </div>
        <div className="product-grid">
          {products
            .filter((p) => p.type === "workbook")
            .map((p) => (
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
