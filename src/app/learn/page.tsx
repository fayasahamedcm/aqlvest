import { LearningLibrary } from "@/components/learning-library";
import { Callout, Eyebrow, PageIntro, Status } from "@/components/ui";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta(
  "Learn Islamic investing",
  "Explore introductory guides to Islamic investing, Shariah screening methodologies, financial foundations, and thoughtful trading principles.",
  "/learn",
);
export default function Learn() {
  return (
    <>
      <PageIntro
        label="The learning library"
        title="Invest in your understanding."
      >
        Plain-language guides for a more thoughtful investment journey. Start
        with the foundations, follow your curiosity, and take it one idea at a
        time.
      </PageIntro>
      <section className="container library-section">
        <LearningLibrary />
      </section>
      <section className="container learning-next">
        <div>
          <Eyebrow>A library that grows with you</Eyebrow>
          <h2>More depth, one release at a time.</h2>
          <p>
            We’re planning deeper learning paths, methodology explainers, and
            practical research exercises.
          </p>
        </div>
        <div className="upcoming-topics">
          {[
            "Reading company financial statements",
            "A closer look at screening frameworks",
            "Building your personal research routine",
          ].map((t) => (
            <div key={t}>
              <span>{t}</span>
              <Status />
            </div>
          ))}
        </div>
      </section>
      <Callout
        title="What would you like to understand next?"
        text="Help shape our learning library. We welcome your questions and topic suggestions."
      />
    </>
  );
}
