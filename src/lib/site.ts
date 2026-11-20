import type { Metadata } from "next";
export const site = {
  name: "AqlVest",
  url: "https://aqlvest.com",
  email: "founder@aqlvest.com",
  tagline: "Investing with Knowledge. Guided by Principles.",
  title: "Learn Halal Investing & Trading | AqlVest",
  launch: "Ramadan 2027, insha Allah",
  description:
    "Learn halal investing and trading from basics to advanced with AqlVest. Explore Islamic investing, Shariah screening and upcoming Excel tools. Ramadan 2027, insha Allah.",
};
export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | AqlVest`, description, url: path },
  };
}
export const navigation = [
  { href: "/learn", label: "Learn" },
  { href: "/tools", label: "Tools" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/about", label: "About" },
];
