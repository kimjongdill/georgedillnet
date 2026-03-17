import { getSiteConfig } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const site = getSiteConfig();
  return (
    <div className="px-6 md:px-12 pb-24 max-w-xl">
      <h1 className="text-sm uppercase tracking-wide text-zinc-400 mb-8">About</h1>
      <p className="text-sm leading-relaxed mb-8">{site.bio}</p>
      <dl className="text-sm space-y-2">
        <div className="flex gap-8">
          <dt className="text-zinc-400 w-24 shrink-0">Location</dt>
          <dd>{site.location}</dd>
        </div>
        {site.email && (
          <div className="flex gap-8">
            <dt className="text-zinc-400 w-24 shrink-0">Contact</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="hover:opacity-50 transition-opacity">
                {site.email}
              </a>
            </dd>
          </div>
        )}
        {site.instagram && (
          <div className="flex gap-8">
            <dt className="text-zinc-400 w-24 shrink-0">Instagram</dt>
            <dd>
              <a
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity"
              >
                @{site.instagram}
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
