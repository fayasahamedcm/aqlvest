export type Category =
  | "Islamic investing"
  | "Shariah methodologies"
  | "Financial foundations"
  | "Trading principles";
export type Article = {
  slug: string;
  title: string;
  description: string;
  category: Category;
  minutes: number;
  takeaway: string;
  sections: { title: string; paragraphs: string[] }[];
  sources: { label: string; href: string }[];
};
export const articles: Article[] = [
  {
    slug: "a-thoughtful-start-to-islamic-investing",
    title: "A thoughtful start to Islamic investing",
    description:
      "Bring your financial goals and your principles into the same conversation.",
    category: "Islamic investing",
    minutes: 5,
    takeaway:
      "Start with the questions you need to answer, before looking for something to buy.",
    sections: [
      {
        title: "Begin with purpose",
        paragraphs: [
          "Before comparing investments, write down what the money is for and when you may need it. A short-term expense and a long-term goal call for different conversations about access, uncertainty, and potential loss.",
          "Islamic investing adds a principles-based review to that financial preparation. Understanding a business and how an investment is structured matters alongside understanding its risks. A label alone is not a complete research process.",
        ],
      },
      {
        title: "Separate the financial and Shariah questions",
        paragraphs: [
          "Ask two separate questions: does this investment fit my financial circumstances, and what is the basis for considering it acceptable under the Shariah methodology I follow? An investment can meet a screening framework and still expose you to substantial financial loss.",
          "For religious guidance, speak with a qualified Shariah scholar. For suitability, tax, or personal planning, consult an appropriately qualified professional in your jurisdiction. AqlVest does not make either decision for you.",
        ],
      },
      {
        title: "Build a repeatable learning habit",
        paragraphs: [
          "Read the original product documents. Note the source and date of any screening opinion, the framework used, and the limits of the evidence. Make room for unanswered questions instead of treating uncertainty as approval.",
          "Your starting exercise: make a one-page research checklist with your goal, time horizon, ability to bear loss, product structure, fees, and questions for a qualified adviser. Revisit it as your circumstances change.",
        ],
      },
    ],
    sources: [
      {
        label: "Investor.gov — Five questions to ask before you invest",
        href: "https://www.investor.gov/introduction-investing/getting-started/five-questions-ask-you-invest",
      },
      {
        label: "AAOIFI — Shari’ah standards",
        href: "https://aaoifi.com/shariaa-standards/?lang=en",
      },
    ],
  },
  {
    slug: "why-shariah-methodologies-differ",
    title: "Why Shariah methodologies can differ",
    description:
      "Understand why a screening result needs a framework, a date, and context.",
    category: "Shariah methodologies",
    minutes: 6,
    takeaway:
      "A screening conclusion only makes sense within the specific methodology and evidence behind it.",
    sections: [
      {
        title: "A methodology is a set of definitions",
        paragraphs: [
          "A Shariah screening methodology describes how an authority or provider approaches business activities and financial characteristics. Its definitions, scope, review process, and treatment of particular activities matter.",
          "AAOIFI publishes Shari’ah standards, while index providers publish methodologies for their own index series. These are different sources with different purposes. Refer to the applicable original publication rather than assuming that a summary is interchangeable with the standard.",
        ],
      },
      {
        title: "Read the framework, then the result",
        paragraphs: [
          "When comparing research, record the exact methodology and edition, the financial period being assessed, and the source of the underlying information. Check the definitions and calculation basis in that methodology.",
          "Do not combine a threshold from one framework with a denominator from another. A simple pass/fail label cannot explain missing information, review dates, or the judgment behind an interpretation.",
        ],
      },
      {
        title: "Use differences as a reason to investigate",
        paragraphs: [
          "Different conclusions are a prompt for further reading and qualified guidance. They are not evidence that one result is automatically correct or that the most permissive conclusion should be chosen.",
          "AqlVest 1.0 provides introductory education. Screening calculators are planned and are not available on this website. No company or product is certified by AqlVest.",
        ],
      },
    ],
    sources: [
      {
        label: "AAOIFI — Shari’ah standards",
        href: "https://aaoifi.com/shariaa-standards/?lang=en",
      },
      {
        label: "MSCI — Islamic indexes and methodology resources",
        href: "https://www.msci.com/indexes/group/islamic-indexes",
      },
    ],
  },
  {
    slug: "risk-diversification-and-your-time-horizon",
    title: "Risk, diversification, and your time horizon",
    description:
      "Three connected ideas that belong in every investment research process.",
    category: "Financial foundations",
    minutes: 5,
    takeaway:
      "Diversification can reduce concentration risk, but it cannot guarantee against investment losses.",
    sections: [
      {
        title: "Risk is more than a moving price",
        paragraphs: [
          "An investment can lose value, become difficult to sell, or fail to provide the money you need at the time you need it. Your ability to bear loss and your comfort with uncertainty are related but distinct considerations.",
          "A longer time horizon does not guarantee a positive outcome. Consider your financial obligations and need for accessible cash before taking investment risk.",
        ],
      },
      {
        title: "Understand what you actually own",
        paragraphs: [
          "Diversification means spreading exposure rather than relying on a single investment. Holding several funds does not automatically mean broad diversification if they contain many of the same underlying investments.",
          "Read holdings, costs, and concentration information. A narrowly focused fund may still have significant exposure to one sector, market, or type of business.",
        ],
      },
      {
        title: "Make a research note",
        paragraphs: [
          "For an investment you are studying, write down what could go wrong, how concentrated its exposures are, and how a loss could affect your goal. Add the fees and any limits on access to your money.",
          "Keep that financial review separate from the Shariah review. Passing a religious screening process is not a promise of safety or performance.",
        ],
      },
    ],
    sources: [
      {
        label: "Investor.gov — Asset allocation and diversification",
        href: "https://www.investor.gov/introduction-investing/getting-started/asset-allocation",
      },
    ],
  },
  {
    slug: "a-process-before-a-trade",
    title: "Build a process before you place a trade",
    description:
      "Learn to document your reasoning, manage uncertainty, and question the hype.",
    category: "Trading principles",
    minutes: 4,
    takeaway:
      "A documented decision process helps you examine your reasoning; it does not remove market risk.",
    sections: [
      {
        title: "Slow down the decision",
        paragraphs: [
          "Before acting on a social post or price move, ask what evidence supports the idea. Separate a verifiable fact from a forecast or an opinion. Be cautious about promises of quick, reliable, or guaranteed returns.",
          "Understand the product, how orders work, the total costs, and what can happen in volatile markets. Do not assume that a popular strategy is appropriate for your circumstances or acceptable under the Shariah guidance you follow.",
        ],
      },
      {
        title: "Keep a decision journal",
        paragraphs: [
          "Record the reason you are researching an investment, the assumptions you are making, what evidence would challenge those assumptions, and the risks you have identified. Date the entry and link the original sources.",
          "Review the process as well as the outcome. A profitable outcome does not prove that a decision was well researched; a loss alone does not explain which assumption was wrong.",
        ],
      },
      {
        title: "Respect the limits",
        paragraphs: [
          "Trading can result in substantial losses. Borrowing, leverage, complex instruments, and particular transaction structures introduce additional financial and Shariah questions requiring qualified guidance.",
          "This lesson is about research habits. It does not recommend a strategy, a security, a transaction, or a religious ruling. AqlVest does not provide signals or execute trades.",
        ],
      },
    ],
    sources: [
      {
        label: "Investor.gov — How to avoid investment fraud",
        href: "https://www.investor.gov/protect-your-investments/fraud/how-avoid-fraud",
      },
    ],
  },
];
export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  type: "tool" | "workbook";
  preview:
    "screen" | "portfolio" | "calculator" | "analysis" | "workbook" | "journal";
  includes: string[];
};
export const products: Product[] = [
  {
    slug: "screening-explorer",
    name: "Shariah screening explorer",
    category: "Research with context",
    description:
      "A planned workspace for understanding screening criteria and the questions behind a methodology.",
    type: "tool",
    preview: "screen",
    includes: [
      "Clearly named methodology and version",
      "Transparent calculation inputs and limitations",
      "Educational explanations alongside criteria",
    ],
  },
  {
    slug: "portfolio-tracker",
    name: "Portfolio tracker",
    category: "See the bigger picture",
    description:
      "A planned way to organise holdings, understand allocations, and keep your research in one place.",
    type: "tool",
    preview: "portfolio",
    includes: [
      "Manual holdings and allocation views",
      "Research notes and review dates",
      "Clear separation of data and assumptions",
    ],
  },
  {
    slug: "investment-calculator",
    name: "Investment planning calculator",
    category: "Explore the possibilities",
    description:
      "A planned calculator to explore contributions, time horizons, and hypothetical growth scenarios.",
    type: "tool",
    preview: "calculator",
    includes: [
      "Editable assumptions and contribution schedules",
      "Scenario comparisons with transparent formulas",
      "Explicit treatment of uncertainty and limitations",
    ],
  },
  {
    slug: "financial-analysis",
    name: "Financial analysis toolkit",
    category: "Go beyond the headline",
    description:
      "Planned learning tools for reading financial statements and understanding business fundamentals.",
    type: "tool",
    preview: "analysis",
    includes: [
      "Statement reading guides",
      "Clearly explained financial ratios",
      "Source references and research prompts",
    ],
  },
  {
    slug: "investment-research-workbook",
    name: "Investment research workbook",
    category: "Excel workbook",
    description:
      "A thoughtfully structured workbook for organising company research and documenting your thinking.",
    type: "workbook",
    preview: "workbook",
    includes: [
      "Company research and source log",
      "Financial statement review worksheets",
      "Decision notes and research checklist",
    ],
  },
  {
    slug: "portfolio-planner-workbook",
    name: "Portfolio planning workbook",
    category: "Excel workbook",
    description:
      "A planned, approachable spreadsheet for mapping holdings, allocations, and long-term goals.",
    type: "workbook",
    preview: "portfolio",
    includes: [
      "Manual portfolio and allocation sheets",
      "Goal and contribution planning",
      "Instructions with illustrative examples",
    ],
  },
  {
    slug: "investor-research-journal",
    name: "Investor research journal",
    category: "Research resource",
    description:
      "A planned downloadable companion for intentional research, reflection, and disciplined review.",
    type: "workbook",
    preview: "journal",
    includes: [
      "Repeatable research prompts",
      "Assumption and evidence logs",
      "Periodic reflection templates",
    ],
  },
];
