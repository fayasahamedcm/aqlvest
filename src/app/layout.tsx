import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Header, Footer } from "@/components/shell";
import { site } from "@/lib/site";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";
import "./enhancements.css";
const sans = localFont({
  src: [
    { path: "../../public/brand/dm-sans-regular.ttf", weight: "400" },
    { path: "../../public/brand/dm-sans-semibold.ttf", weight: "600" },
  ],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | AqlVest" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  themeColor: "#0b2132",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Suspense>
          <Header />
        </Suspense>
        <main id="main">{children}</main>
        <Footer />
        <Suspense>
          <ScrollReveal />
        </Suspense>
      </body>
    </html>
  );
}
