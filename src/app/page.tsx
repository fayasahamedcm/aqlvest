import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileSpreadsheet,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "@/components/icons";
import {
  ArticleCard,
  ButtonLink,
  Callout,
  Eyebrow,
  ProductCard,
} from "@/components/ui";
import { articles, products } from "@/lib/content";
import { site } from "@/lib/site";
import { Academy, RamadanInvitation } from "@/components/academy";

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-spark spark-one">✦</div>
      <div className="visual-spark spark-two">✧</div>
      <div className="research-window">
        <div className="window-bar">
          <div>
            <span />
            <span />
            <span />
          </div>
          <span>AQLVEST / A NEW PERSPECTIVE</span>
          <ShieldCheck size={15} />
        </div>
        <div className="window-body">
          <div className="window-title">
            <div>
              <span className="overline">THE PRINCIPLED INVESTOR</span>
              <h2>
                Clarity starts
                <br />
                with understanding.
              </h2>
            </div>
            <div className="window-icon">
              <Leaf size={26} />
            </div>
          </div>
          <div className="journey-steps">
            <div>
              <span className="journey-check">
                <Check size={14} />
              </span>
              <span>Build your knowledge</span>
              <BookOpen size={16} />
            </div>
            <div>
              <span className="journey-check">
                <Check size={14} />
              </span>
              <span>Understand the principles</span>
              <ShieldCheck size={16} />
            </div>
            <div>
              <span className="journey-next">03</span>
              <span>Research with intention</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div className="growth-visual">
            <div className="growth-caption">
              <span>Perspective over predictions.</span>
              <span>LEARN · REFLECT · GROW</span>
            </div>
            <svg viewBox="0 0 420 100" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#29b792" stopOpacity=".3" />
                  <stop offset="1" stopColor="#29b792" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 92C40 92 35 68 75 72S115 72 145 52S180 65 210 43S240 45 275 28S325 32 350 14S390 15 420 2V100H0Z"
                fill="url(#area)"
              />
              <path
                d="M0 92C40 92 35 68 75 72S115 72 145 52S180 65 210 43S240 45 275 28S325 32 350 14S390 15 420 2"
                stroke="#51c8a2"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="window-footer">
            <span className="live-dot" />A learning journey, at your own pace.
          </div>
        </div>
      </div>
      <div className="floating-note">
        <div className="note-icon">
          <BookOpen size={21} />
        </div>
        <div>
          <span>YOUR STRONGEST ASSET</span>
          <strong>A little more knowledge.</strong>
        </div>
        <span className="note-star">✦</span>
      </div>
      <p className="visual-caption">
        A visual expression of our mission. Not investment performance.
      </p>
    </div>
  );
}
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    knowsAbout: [
      "Halal investing",
      "Islamic investing",
      "Shariah screening",
      "Investment education",
      "Trading education",
    ],
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    logo: `${site.url}/brand/original-logo.svg`,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Link href="/learn#academy" className="launch-pill">
              <span />
              Official launch: Ramadan 2027, insha Allah
              <ArrowUpRight size={13} />
            </Link>
            <h1>
              Learn halal investing.
              <br />
              <em>Grow with knowledge.</em>
            </h1>
            <p>
              Halal investing and trading, taught from the basics to advanced
              analysis. Build your understanding of Islamic investing, Shariah
              screening, and a more disciplined approach to research.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/learn#academy">Explore the Academy</ButtonLink>
              <Link href="/marketplace" className="text-link">
                Preview Excel tools <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-footnote">
              <ShieldCheck size={16} />
              <span>Education first. Principles always.</span>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="container hero-bottom">
          <span>YOUR JOURNEY, WITH INTENTION</span>
          <div>
            <BookOpen size={17} />
            Knowledge to understand
          </div>
          <div>
            <ShieldCheck size={17} />
            Principles to guide
          </div>
          <div>
            <Leaf size={17} />
            Resources to grow
          </div>
        </div>
      </section>
      <RamadanInvitation />
      <Academy compact />
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>One purpose. Three ways forward.</Eyebrow>
            <h2>
              Think clearly.
              <br />
              Invest intentionally.
            </h2>
          </div>
          <p>
            Knowledge is the foundation. We’re building an accessible space to
            connect Islamic investing principles with practical financial
            understanding.
          </p>
        </div>
        <div className="pillar-grid">
          {[
            {
              n: "01",
              icon: BookOpen,
              title: "Learn, from the ground up",
              text: "A planned video journey from stock market basics and Islamic investing principles to advanced analysis and trading discipline.",
              href: "/learn",
              link: "Explore the library",
            },
            {
              n: "02",
              icon: ShieldCheck,
              title: "Understand the tools",
              text: "Upcoming calculators and research tools designed to make the questions behind the numbers clearer.",
              href: "/tools",
              link: "See planned tools",
            },
            {
              n: "03",
              icon: FileSpreadsheet,
              title: "Put knowledge to work",
              text: "Upcoming downloadable Excel tools for manual Shariah screening, India and US stock research, and portfolio planning.",
              href: "/marketplace",
              link: "Discover the marketplace",
            },
          ].map((p) => (
            <article className="pillar" key={p.n}>
              <div className="pillar-top">
                <span className="icon-box">
                  <p.icon size={24} />
                </span>
                <span>{p.n}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link href={p.href} className="text-link">
                {p.link}
                <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="product-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>In the making</Eyebrow>
              <h2>
                Practical resources.
                <br />
                Thoughtfully built.
              </h2>
            </div>
            <div>
              <p>
                A first look at what we’re creating. Every tool and product
                below is in development.
              </p>
              <Link className="text-link" href="/about#roadmap">
                Our roadmap <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="product-grid">
            {[
              products.find((p) => p.slug === "self-shariah-screener")!,
              products.find(
                (p) => p.slug === "shariah-stock-research-dashboard",
              )!,
              products.find((p) => p.slug === "it-shariah-comparison")!,
            ].map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <p className="section-note">
            <Sparkles size={15} />
            Good things take care. Features, availability, and pricing will be
            announced as each release is ready.
          </p>
        </div>
      </section>
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-art" aria-hidden="true">
            <div className="arch arch-one" />
            <div className="arch arch-two" />
            <div className="arch arch-three" />
            <div className="mission-book">
              <BookOpen strokeWidth={1} />
            </div>
            <span className="mission-art-word">عقل</span>
            <span className="mission-art-label">THOUGHTFUL BY NATURE.</span>
          </div>
          <div className="mission-copy">
            <Eyebrow>The thinking behind AqlVest</Eyebrow>
            <h2>
              Before the investment,
              <br />
              <em>the understanding.</em>
            </h2>
            <p>
              We believe financial education should make room for both your
              goals and your values. AqlVest brings those conversations together
              through clear explanations and considered resources.
            </p>
            <p>
              No shortcuts to certainty. No promises of returns. Just an
              invitation to learn more, ask better questions, and approach your
              journey with intention.
            </p>
            <ButtonLink href="/about" secondary>
              Get to know AqlVest
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>From the learning library</Eyebrow>
            <h2>
              A stronger foundation
              <br />
              starts here.
            </h2>
          </div>
          <Link href="/learn" className="text-link">
            View all guides <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="article-grid home-articles">
          {articles.slice(0, 3).map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      </section>
      <section className="container philosophy-strip">
        <ShieldCheck size={28} />
        <div>
          <h2>Grounded in education. Honest about limitations.</h2>
          <p>
            AqlVest is an educational platform. We don’t issue fatwas, certify
            investments, or offer personalised financial advice.
          </p>
        </div>
        <Link
          href="/disclaimer"
          aria-label="Read our financial and Shariah disclaimer"
        >
          <ArrowUpRight size={24} />
        </Link>
      </section>
      <Callout />
    </>
  );
}
