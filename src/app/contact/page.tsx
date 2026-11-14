import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight, Mail, ShieldCheck } from "@/components/icons";
import { PageIntro } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";
export const metadata = pageMeta(
  "Contact AqlVest",
  "Ask a question, suggest a learning topic, discuss collaboration, or share interest in upcoming AqlVest tools and workbooks.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        label="An open conversation"
        title="Good ideas start with a question."
      >
        A learning suggestion, a resource you’d love to see, or a thoughtful
        collaboration. We’d like to hear from you.
      </PageIntro>
      <section className="container contact-grid">
        <div className="contact-info">
          <span className="icon-box">
            <Mail size={26} />
          </span>
          <h2>A direct line to AqlVest.</h2>
          <p>
            Email the founder directly, or use the composer to prepare a message
            in your own mail app.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={19} />
          </a>
          <div className="contact-scope">
            <ShieldCheck size={20} />
            <div>
              <h3>A note before you write</h3>
              <p>
                We welcome general questions and feedback. We can’t provide
                personal investment recommendations, religious rulings, or
                individual financial planning.
              </p>
              <p>
                For privacy requests, use the topic “Privacy request”. We don’t
                promise a response time.
              </p>
            </div>
          </div>
        </div>
        <Suspense fallback={<p>Loading email composer…</p>}>
          <ContactForm />
        </Suspense>
      </section>
      <section className="container contact-faq">
        <h2>A few things to know.</h2>
        <details>
          <summary>Can I use a calculator or buy a workbook today?</summary>
          <p>
            Tools and marketplace products are still in development. Each
            preview is clearly marked Coming Soon. Availability, pricing, and
            product details will be announced when ready.
          </p>
        </details>
        <details>
          <summary>Can AqlVest tell me whether an investment is halal?</summary>
          <p>
            No. AqlVest provides general education and does not issue fatwas or
            certify investments. Refer religious questions to a qualified
            Shariah scholar and financial suitability questions to an
            appropriately qualified adviser.
          </p>
        </details>
        <details>
          <summary>
            Does the contact form send my message automatically?
          </summary>
          <p>
            No. It prepares an email for your own mail app. You review and send
            it there. You can also copy the draft into your email provider. The
            website does not store your message.
          </p>
        </details>
      </section>
    </>
  );
}
