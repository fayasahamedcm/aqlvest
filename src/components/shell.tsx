"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "./icons";
import { navigation, site } from "@/lib/site";

export function Brand({
  light = false,
  onNavigate,
}: {
  light?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      onClick={onNavigate}
    >
      <span className="sr-only">Home: </span>
      <Image
        src="/brand/original-logo.png"
        width={34}
        height={46}
        sizes="100px"
        alt=""
        priority
      />
      <span>
        Aql<span className="brand-vest">Vest</span>
        <small>KNOWLEDGE. PRINCIPLES.</small>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand onNavigate={() => setOpen(false)} />
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname.startsWith(n.href) ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small header-contact">
          Get in touch <ArrowUpRight size={15} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
        >
          {[
            { href: "/", label: "Home" },
            ...navigation,
            { href: "/contact", label: "Contact" },
          ].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === n.href ? "page" : undefined}
            >
              {n.label}
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand light />
            <p>{site.tagline}</p>
            <p>
              A thoughtful approach to Islamic investment education and digital
              resources.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h2>Explore</h2>
              {navigation.map((n) => (
                <Link href={n.href} key={n.href}>
                  {n.label}
                </Link>
              ))}
            </div>
            <div>
              <h2>Connect</h2>
              <Link href="/contact">Contact us</Link>
              <a href={`mailto:${site.email}`}>
                Email the founder <ArrowUpRight size={13} />
              </a>
              <Link href="/about#roadmap">What’s ahead</Link>
            </div>
            <div>
              <h2>The essentials</h2>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of use</Link>
              <Link href="/disclaimer">Financial & Shariah disclaimer</Link>
              <Link href="/legal">Legal notice</Link>
            </div>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p>
            For education and general information only. AqlVest does not provide
            investment, financial, tax, legal, or Shariah advice, issue fatwas,
            or certify investments. Investing involves risk, including loss of
            capital. Seek qualified guidance for your circumstances.
          </p>
          <p>
            Upcoming tools and products are in development. Previews are
            illustrative, with no live market data or screening results.
          </p>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AqlVest. All rights reserved.
          </span>
          <span>Built on knowledge. Grounded in principles.</span>
        </div>
      </div>
    </footer>
  );
}
