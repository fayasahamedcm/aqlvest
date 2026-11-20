import Image from "next/image";
import { BookOpen, Leaf, ShieldCheck } from "@/components/icons";
import {
  ButtonLink,
  Callout,
  Eyebrow,
  PageIntro,
  Status,
} from "@/components/ui";
import { pageMeta, site } from "@/lib/site";
export const metadata = pageMeta(
  "About AqlVest — Halal Investing Education",
  "AqlVest teaches halal investing and trading from basics to advanced. Discover our Academy, upcoming Excel tools and Ramadan 2027 launch, insha Allah.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        label="The AqlVest philosophy"
        title="Knowledge gives intention a direction."
      >
        AqlVest teaches halal investing and trading, from the basics to advanced
        analysis. Our Academy and upcoming marketplace connect Islamic investing
        education with practical downloadable Excel tools.
      </PageIntro>
      <section className="container about-story">
        <div className="about-emblem">
          <Image
            src="/brand/original-logo.png"
            alt="The original AqlVest emblem, combining an arch, Arabic wordmark, open book, and research motif"
            sizes="600px"
            width={196}
            height={260}
          />
          <span>KNOWLEDGE. REFLECTION. INTENTION.</span>
        </div>
        <div>
          <Eyebrow>A more considered beginning</Eyebrow>
          <h2>{site.tagline}</h2>
          <p>
            The investment world can feel full of noise, unfamiliar language,
            and confident answers. We want to create space for something more
            useful: clear explanations, honest questions, and a better
            understanding of the decisions in front of you.
          </p>
          <p>
            Our official launch begins in Ramadan 2027, insha Allah. We’re
            preparing narrated English learning videos and practical Excel
            workbooks, with more lessons and products released progressively.
            Introductory written guides are available today.
          </p>
          <p>
            We’re an educational platform. We do not manage money, execute
            trades, issue religious rulings, or certify investments.
          </p>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <Eyebrow>What guides the work</Eyebrow>
          <h2>Principles, in practice.</h2>
          <div className="pillar-grid">
            {[
              {
                icon: BookOpen,
                title: "Understanding before action",
                text: "Explain the idea, make the assumptions visible, and give the learner room to think.",
              },
              {
                icon: ShieldCheck,
                title: "Clarity over certainty",
                text: "Name the source, acknowledge the limits, and keep financial research distinct from religious guidance.",
              },
              {
                icon: Leaf,
                title: "Useful, accessible progress",
                text: "Create resources that are approachable and practical. Release thoughtfully, improve with feedback.",
              },
            ].map((v) => (
              <article className="pillar" key={v.title}>
                <v.icon size={26} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="roadmap" className="section container roadmap">
        <div>
          <Eyebrow>AqlVest, progressively</Eyebrow>
          <h2>
            A foundation.
            <br />
            Then a little more.
          </h2>
          <p>
            Begin learning halal investing with us from Ramadan 2027, insha
            Allah. Lessons and products will follow progressively; individual
            product dates and final features will be confirmed before release.
          </p>
          <ButtonLink href="/contact">Help shape what’s next</ButtonLink>
        </div>
        <ol>
          <li>
            <span className="roadmap-number">01</span>
            <div>
              <span className="available">AVAILABLE NOW</span>
              <h3>The learning foundation</h3>
              <p>
                Introductory guides, a clear mission, and an open invitation for
                your feedback.
              </p>
            </div>
          </li>
          <li>
            <span className="roadmap-number">02</span>
            <div>
              <Status />
              <h3>AqlVest Academy / Ramadan 2027</h3>
              <p>
                Short English video lessons, from stock ownership and financial
                foundations to Shariah screening, analysis, and trading
                discipline.
              </p>
            </div>
          </li>
          <li>
            <span className="roadmap-number">03</span>
            <div>
              <Status />
              <h3>The Excel marketplace</h3>
              <p>
                Self Shariah screening, India and US stock research, IT-sector
                comparisons, and portfolio workbooks, released progressively.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <Callout />
    </>
  );
}
