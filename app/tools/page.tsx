import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
};

const tools = [
  {
    slug: "screen-separator",
    title: "Screen Separator",
    description: "Separate a photo into color layers for screen printing.",
  },
];

export default function ToolsPage() {
  return (
    <div className="px-6 md:px-12 pb-24">
      <h1 className="text-sm uppercase tracking-wide text-zinc-400 mb-8">Tools</h1>
      <ul className="space-y-px max-w-lg">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={`/tools/${tool.slug}`}
              className="flex items-baseline justify-between py-4 border-b border-zinc-100 hover:opacity-50 transition-opacity"
            >
              <span className="text-sm font-medium">{tool.title}</span>
              <span className="text-xs text-zinc-400">{tool.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
