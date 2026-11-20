"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive enhancement: server HTML and browsers without this API stay visible.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let elements: HTMLElement[] = [];
    function clear() {
      observer?.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.classList.remove("is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    }
    function start() {
      clear();
      if (motion.matches || !("IntersectionObserver" in window)) return;
      elements = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main .section-heading, main .pillar, main .product-card, main .article-card, main .mission-copy, main .mission-art, main .cta, main .academy-overview, main .academy-module, main .ramadan-banner, main .learning-next > div, main .roadmap > div, main .roadmap li, main .about-story > div, main .contact-info, main .contact-form, main .notice",
        ),
      );
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
            if (isIntersecting) target.classList.add("is-visible");
            else if (
              boundingClientRect.bottom <= 0 ||
              boundingClientRect.top >= window.innerHeight
            )
              target.classList.remove("is-visible");
          });
        },
        { rootMargin: "0px 0px -24px 0px", threshold: 0.06 },
      );
      elements.forEach((element, index) => {
        element.dataset.reveal = "";
        element.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
        if (element.getBoundingClientRect().top < window.innerHeight - 24)
          element.classList.add("is-visible");
        observer?.observe(element);
      });
    }
    start();
    motion.addEventListener("change", start);
    return () => {
      clear();
      motion.removeEventListener("change", start);
    };
  }, [pathname]);

  return null;
}
