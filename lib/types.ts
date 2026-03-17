export interface Work {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  edition: number | string | null; // null = unique work, "open" = open edition, number = limited
  colors: number | null;  // number of screen print colors, null if n/a
  images: string[];       // filenames relative to /public/works/[slug]/
  description: string;
  tags: string[];
  featured: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  instagram: string | null;
  location: string;
  seo: {
    defaultTitle: string;
    titleTemplate: string; // e.g. "%s — Artist Name"
    description: string;
    url: string;
  };
}
