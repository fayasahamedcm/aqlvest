export type LegalPage = {
  title: string;
  intro: string;
  sections: { title: string; text: string[] }[];
};
export const legalPages: Record<string, LegalPage> = {
  privacy: {
    title: "Privacy policy",
    intro:
      "A simple website should have a clear explanation of what happens to your information.",
    sections: [
      {
        title: "Who to contact",
        text: [
          "AqlVest is the publisher of this website. For questions about privacy or to exercise a privacy right, contact founder@aqlvest.com with the subject “Privacy request”.",
        ],
      },
      {
        title: "Information processed when you visit",
        text: [
          "Our hosting provider, Vercel, processes technical request information to deliver and protect the website. This may include IP address, browser information, requested URLs, timestamps, and security or error logs. Hosting data may be processed in locations outside your country, subject to the provider’s applicable arrangements.",
          "We do not run advertising trackers, behavioural analytics, user accounts, or financial API connections. We do not use this website to collect investment holdings, payment details, or identity documents.",
        ],
      },
      {
        title: "Contacting AqlVest",
        text: [
          "The contact composer runs in your browser. It does not send your form entries to AqlVest or store them on our servers. Opening a prepared email passes the draft to your chosen email application; copying a draft puts its contents on your device’s clipboard.",
          "If you choose to send us an email, AqlVest and the relevant email service providers process your email address, name, message, and associated email metadata to respond and handle your request. Avoid sending sensitive personal or financial information.",
        ],
      },
      {
        title: "Purposes, retention, and sharing",
        text: [
          "Technical information is processed to provide the website, diagnose faults, and prevent abuse. Correspondence is processed to respond to you and manage the request. Where applicable, the legal basis is our legitimate interest in operating a secure website and responding to correspondence, steps requested by you, or a legal obligation.",
          "We do not sell personal information. Data may be processed by hosting and email service providers and disclosed where legally required. Correspondence is retained only as long as needed for the request and applicable recordkeeping obligations. Technical log retention follows the hosting provider’s configured service policies.",
        ],
      },
      {
        title: "Cookies and device storage",
        text: [
          "AqlVest does not set advertising or analytics cookies, and does not intentionally store personal information in browser storage. Search and filter choices on the learning page are held only in the current page’s memory. Hosting infrastructure may process information needed to secure and deliver requests.",
        ],
      },
      {
        title: "Your choices and rights",
        text: [
          "Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or object to the processing of personal information, request portability, or complain to a relevant data protection authority. Email founder@aqlvest.com to make a request. We may need enough information to verify that the request relates to you.",
          "External links have their own privacy policies. The website is for general education and is not directed at children. This policy may change as the platform develops; any material new data collection will require an updated policy before launch.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of use",
    intro:
      "These terms describe the scope of AqlVest 1.0 and the basis on which its educational material is made available.",
    sections: [
      {
        title: "Educational purpose",
        text: [
          "AqlVest provides general Islamic investment education and previews of planned digital products. Information is not tailored to your circumstances and is not a substitute for qualified financial, legal, tax, or religious advice. Read the financial and Shariah disclaimer together with these terms.",
        ],
      },
      {
        title: "Using the website",
        text: [
          "Use the website lawfully. Do not attempt to disrupt it, gain unauthorised access, introduce malicious material, or misrepresent its content as an endorsement or certification. You are responsible for your own research and decisions.",
        ],
      },
      {
        title: "Content and intellectual property",
        text: [
          "Unless otherwise identified, AqlVest’s branding and original website content are owned by AqlVest or used with permission. You may read and link to our material for personal educational use. Permission is required for commercial redistribution or presenting the material as your own. Third-party names and publications remain the property of their respective owners.",
        ],
      },
      {
        title: "Upcoming products and availability",
        text: [
          "Coming Soon means a tool or resource is not available. Concept previews are illustrative. Features, scope, release timing, format, compatibility, and future pricing may change. No payment, purchase, subscription, reservation, or entitlement is created by sharing interest.",
          "There are no sales, payments, user accounts, or financial API services in AqlVest 1.0. Any future transaction will be covered by product-specific information and applicable terms published before purchase.",
        ],
      },
      {
        title: "Accuracy, links, and service limits",
        text: [
          "We aim to explain clearly, but material may be incomplete, out of date, or contain errors. Check original sources and current publications. We may update content or interrupt access for maintenance. External links are provided for context and do not imply endorsement or control of those services.",
        ],
      },
      {
        title: "Responsibility and mandatory rights",
        text: [
          "To the extent permitted by applicable law, AqlVest is not responsible for losses arising from reliance on general educational content or third-party material. Nothing in these terms excludes liability or restricts rights that cannot lawfully be excluded or restricted. These terms do not promise investment outcomes.",
        ],
      },
      {
        title: "Questions and updates",
        text: [
          "Questions about these terms or a possible content error can be sent to founder@aqlvest.com. We may revise these terms as the service evolves. Changes will be reflected on this page.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Financial & Shariah disclaimer",
    intro:
      "Education helps you ask better questions. It does not make an investment decision or a religious ruling for you.",
    sections: [
      {
        title: "No personalised advice",
        text: [
          "AqlVest content is for education and general information only. It is not investment, financial, tax, legal, accounting, or Shariah advice. It does not take your objectives, financial position, experience, jurisdiction, or ability to bear loss into account. Nothing is an offer, recommendation, or solicitation to buy, sell, or hold any investment.",
        ],
      },
      {
        title: "Investment risk",
        text: [
          "All investments involve risk, including loss of some or all capital. Diversification does not guarantee against loss. Past performance and illustrative scenarios do not predict future results. Costs, taxes, inflation, market conditions, liquidity, and personal circumstances can materially affect outcomes. Consult an appropriately qualified adviser where needed.",
        ],
      },
      {
        title: "No fatwas or certification",
        text: [
          "AqlVest does not issue fatwas, provide religious rulings, act as a Shariah supervisory board, or certify securities, funds, products, or transactions. References to Islamic investing or screening frameworks are explanatory. Seek qualified Shariah guidance for religious decisions.",
          "Different authorities and providers may use different methodologies, definitions, calculations, and review procedures. Always consult the relevant current original publication and qualified guidance. A screening outcome is not a guarantee of financial suitability or continuing acceptability.",
        ],
      },
      {
        title: "AqlVest 1.0 and concept previews",
        text: [
          "Screening calculators, portfolio trackers, financial calculators, and downloadable products shown on this website are planned and not available. No live screening engine, market feed, brokerage connection, or financial API is connected. Visuals do not represent actual portfolios, certified results, or investment performance.",
        ],
      },
      {
        title: "Independent verification",
        text: [
          "Check facts, sources, dates, assumptions, and the scope of any methodology before relying on information. External organisations and methodology providers are not represented as partners, reviewers, or endorsers of AqlVest. We do not claim independent scholarly review of the introductory guides.",
        ],
      },
      {
        title: "Questions or corrections",
        text: [
          "If you identify an error or unclear explanation, email founder@aqlvest.com. We welcome specific source references and will consider corrections.",
        ],
      },
    ],
  },
  legal: {
    title: "Legal notice",
    intro: "Information about this website and how to reach its publisher.",
    sections: [
      {
        title: "Website publisher",
        text: [
          "AqlVest publishes aqlvest.com as an Islamic investment education and digital products platform. For publisher, editorial, legal, privacy, and accessibility enquiries, contact founder@aqlvest.com.",
          "AqlVest 1.0 is an educational website. It does not accept payments, provide brokerage or investment management services, or offer regulated investment advice.",
        ],
      },
      {
        title: "Contact and content corrections",
        text: [
          "Email founder@aqlvest.com with a clear subject and the URL of the relevant page. For copyright concerns, identify the material, your rights in it, and a way to contact you. For accessibility issues, describe the page and the difficulty encountered.",
        ],
      },
      {
        title: "Hosting",
        text: [
          "This website is prepared for hosting on Vercel. Technical processing is described in the privacy policy. Links to other websites are provided for further reading; their publishers are responsible for their own content.",
        ],
      },
    ],
  },
};
