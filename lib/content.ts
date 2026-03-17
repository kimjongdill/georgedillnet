import { works as worksData } from "@/content/works";
import siteConfig from "@/content/site.json";
import type { Work, SiteConfig } from "./types";

export function getSiteConfig(): SiteConfig {
  return siteConfig as SiteConfig;
}

export function getAllWorks(): Work[] {
  return [...worksData].sort((a, b) => b.year - a.year);
}

export function getWorkBySlug(slug: string): Work | null {
  return worksData.find((w) => w.slug === slug) ?? null;
}

export function getFeaturedWorks(): Work[] {
  return getAllWorks().filter((w) => w.featured);
}
