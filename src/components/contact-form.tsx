"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Check, Mail } from "./icons";
import { site } from "@/lib/site";
export function ContactForm() {
  const params = useSearchParams();
  const interest = params.get("interest")?.slice(0, 120) || "";
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState("");
  const [mailto, setMailto] = useState("");
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim(),
      email = String(data.get("email")).trim(),
      topic = String(data.get("topic")).trim(),
      message = String(data.get("message")).trim();
    if (!name || !email || !topic || !message) return;
    const body = `Name: ${name}\nReply email: ${email}\n\n${message}`;
    setDraft(`To: ${site.email}\nSubject: AqlVest — ${topic}\n\n${body}`);
    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(`AqlVest — ${topic}`)}&body=${encodeURIComponent(body)}`,
    );
    setPrepared(true);
    setCopied(false);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={prepare}
      onChange={() => setPrepared(false)}
    >
      <div className="form-heading">
        <Mail size={22} />
        <h2>Start a conversation</h2>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={100}
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            required
            placeholder="you@example.com"
          />
        </div>
      </div>
      <label htmlFor="topic">What’s on your mind?</label>
      <select
        id="topic"
        name="topic"
        defaultValue={interest ? "Product interest" : ""}
        required
      >
        <option value="" disabled>
          Select a topic
        </option>
        <option>General question</option>
        <option>Learning suggestion</option>
        <option>Product interest</option>
        <option>Collaboration</option>
        <option>Privacy request</option>
        <option>Report an issue</option>
      </select>
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        rows={6}
        minLength={10}
        maxLength={3000}
        defaultValue={interest ? `I’m interested in ${interest}. ` : ""}
        placeholder="Tell us how we can help…"
        required
      />
      <p className="form-note">
        This form prepares an email in your own mail app. Nothing is sent or
        stored by this website. Please don’t include account details or
        sensitive financial information.
      </p>
      <button type="submit" className="button">
        Prepare email <ArrowUpRight size={17} />
      </button>
      {prepared && (
        <div className="email-ready" role="status">
          <Check size={20} />
          <div>
            <strong>Your email draft is ready.</strong>
            <p>
              Open it in your mail app and press send there. If you don’t use a
              mail app, copy the draft into your email service.
            </p>
            <div className="draft-actions">
              <a href={mailto} className="button button-small">
                Open email app <ArrowUpRight size={15} />
              </a>
              <button type="button" onClick={copy} className="text-link">
                {copied ? "Draft copied" : "Copy draft"}
              </button>
            </div>
            <label htmlFor="email-draft">Email draft</label>
            <textarea
              id="email-draft"
              readOnly
              value={draft}
              rows={7}
              onFocus={(e) => e.currentTarget.select()}
            />
          </div>
        </div>
      )}
    </form>
  );
}
