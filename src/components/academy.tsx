import Link from "next/link";
import { BookOpen, ArrowUpRight, Check } from "lucide-react";
import { ButtonLink, Eyebrow, Status } from "./ui";
import { site } from "@/lib/site";

export function RamadanInvitation() {
  return (
    <section className="container ramadan-section">
      <div className="ramadan-banner">
        <div className="ramadan-symbol" aria-hidden="true">
          ☾
        </div>
        <div>
          <Eyebrow>A new beginning, with intention</Eyebrow>
          <h2>
            Learn halal investing
            <br />
            <em>starting this Ramadan.</em>
          </h2>
          <p>
            Our official launch begins in Ramadan 2027, insha Allah. Join us as
            we build a learning journey from the very basics of investing and
            trading to advanced research and analysis.
          </p>
        </div>
        <div className="ramadan-action">
          <span>{site.launch}</span>
          <ButtonLink href="/learn#academy">
            Explore the learning journey
          </ButtonLink>
          <Link
            className="text-link"
            href="/contact?interest=AqlVest%20Academy%20Ramadan%202027"
          >
            Share your interest <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Academy({ compact = false }: { compact?: boolean }) {
  const stages = [
    {
      level: "01 / BEGINNER",
      title: "Start with the basics",
      text: "What a share represents, how markets work, financial goals, and the foundations of halal investing.",
      topics: [
        "Stock market basics",
        "Islamic investing principles",
        "Risk and financial foundations",
      ],
    },
    {
      level: "02 / INTERMEDIATE",
      title: "Learn to research",
      text: "Read annual reports, understand business fundamentals, and explore why Shariah screening methodologies differ.",
      topics: [
        "Financial statements and ratios",
        "Valuation and business analysis",
        "Shariah screening methodologies",
      ],
    },
    {
      level: "03 / ADVANCED",
      title: "Develop your process",
      text: "Build on the foundations with portfolio thinking, technical analysis, trading discipline, and deeper investment research.",
      topics: [
        "Portfolio construction and review",
        "Technical analysis and risk management",
        "Trading psychology and research practice",
      ],
    },
  ];
  return (
    <section
      id={compact ? undefined : "academy"}
      className={`academy-section section ${compact ? "academy-compact" : ""}`}
    >
      <div className="container">
        <div className="academy-overview">
          <div>
            <Eyebrow>AqlVest Academy / Coming soon</Eyebrow>
            <h2>
              From your first question
              <br />
              to a deeper understanding.
            </h2>
          </div>
          <div>
            <p>
              Learn halal investing and trading, from beginner to advanced. Our
              planned English video lessons combine clear narration, animated
              diagrams, and practical examples to make complex ideas easier to
              follow.
            </p>
            <p>
              {compact
                ? "The series begins in Ramadan 2027, insha Allah. Start with the stock market basics, then progress through analysis, Shariah screening, and a disciplined research process."
                : "The planned series spans eight modules, with lessons typically around 5–8 minutes. Learn at your own pace, then put each idea into practice with research exercises and upcoming Excel workbooks."}
            </p>
          </div>
        </div>
        {compact ? (
          <div className="academy-preview">
            <div className="lesson-preview" aria-hidden="true">
              <BookOpen size={36} />
              <span>EPISODE 01</span>
              <strong>What is a stock?</strong>
              <span>A simple idea. A stronger foundation.</span>
            </div>
            <div>
              <Status />
              <h3>Your first lesson starts here.</h3>
              <p>
                “What Is a Stock?” introduces company ownership using a simple
                business example, then connects it to the questions a halal
                investor should ask. Videos are being prepared and are not
                published on this site yet.
              </p>
              <ButtonLink href="/learn#academy" secondary>
                Discover AqlVest Academy
              </ButtonLink>
            </div>
          </div>
        ) : (
          <>
            <div className="academy-modules">
              {stages.map((stage) => (
                <article className="academy-module" key={stage.level}>
                  <span>{stage.level}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                  <ul>
                    {stage.topics.map((t) => (
                      <li key={t}>
                        <Check size={16} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="academy-release">
              <BookOpen size={24} />
              <div>
                <h3>First planned lesson: What Is a Stock?</h3>
                <p>
                  A simple introduction to company ownership and the foundations
                  of halal investing. The video series begins with our official
                  launch in Ramadan 2027, insha Allah. Episodes will be released
                  progressively; videos are not available here yet.
                </p>
              </div>
              <ButtonLink
                href="/contact?interest=AqlVest%20Academy%20Ramadan%202027"
                secondary
              >
                Share your interest
              </ButtonLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
