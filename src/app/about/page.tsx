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
  "About AqlVest",
  "Discover AqlVest’s mission: accessible Islamic investment education, thoughtful digital resources, and a principled approach to financial understanding.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        label="The AqlVest philosophy"
        title="Knowledge gives intention a direction."
      >
        AqlVest is an Islamic investment education and digital products
        platform. Our purpose is simple: make financial understanding more
        accessible, without losing sight of principles.
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
            AqlVest 1.0 begins with introductory education and previews of
            resources we’re developing. We’ll release more content, tools, and
            digital products progressively, with their scope and limitations
            made clear.
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
            We’ll publish availability when each release is ready. There are no
            promised launch dates.
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
              <h3>Practical digital resources</h3>
              <p>
                Affordable workbooks, research journals, and guides to organise
                your thinking.
              </p>
            </div>
          </li>
          <li>
            <span className="roadmap-number">03</span>
            <div>
              <Status />
              <h3>Tools for deeper understanding</h3>
              <p>
                Calculators, portfolio organisation, and transparent screening
                education tools.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <Callout />
    </>
  );
}
