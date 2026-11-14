import type { Metadata } from "next";
export const site = {
  name: "AqlVest",
  url: "https://aqlvest.com",
  email: "founder@aqlvest.com",
  tagline: "Investing with Knowledge. Guided by Principles.",
  description:
    "Build your understanding of Islamic investing with AqlVest. Explore clear education, upcoming financial tools, and thoughtfully designed digital workbooks.",
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
