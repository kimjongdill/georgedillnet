import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/content";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const site = getSiteConfig();

export const metadata: Metadata = {
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  metadataBase: new URL(site.seo.url),
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Header name={site.name} tagline={site.tagline} />
        <main>{children}</main>
      </body>
    </html>
  );
}
