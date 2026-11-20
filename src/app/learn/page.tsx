import { LearningLibrary } from "@/components/learning-library";
import { Callout, Eyebrow, PageIntro, Status } from "@/components/ui";
import { pageMeta } from "@/lib/site";
import { Academy, RamadanInvitation } from "@/components/academy";
export const metadata = pageMeta(
  "Learn Halal Investing & Trading — AqlVest Academy",
  "Learn halal investing from beginner to advanced. Explore Islamic investing guides, Shariah screening and upcoming AqlVest Academy videos from Ramadan 2027, insha Allah.",
  "/learn",
);
export default function Learn() {
  return (
    <>
      <PageIntro
        label="Learn halal investing and trading"
        title="Every confident step begins with understanding."
      >
        Start with the stock market basics. Progress into financial analysis,
        Shariah screening, portfolio thinking, and trading principles. Our
        official Academy launch begins in Ramadan 2027, insha Allah;
        introductory written guides are available to explore today.
      </PageIntro>
      <Academy />
      <section id="library" className="container library-section">
        <Eyebrow>Read a guide today</Eyebrow>
        <h2 className="library-heading">Your learning library.</h2>
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
      <RamadanInvitation />
      <Callout
        title="What would you like to understand next?"
        text="Help shape our learning library. We welcome your questions and topic suggestions."
      />
    </>
  );
}
