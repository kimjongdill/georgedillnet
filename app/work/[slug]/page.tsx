import { getAllWorks, getWorkBySlug } from "@/lib/content";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  const site = getSiteConfig();
  return {
    title: work.title,
    description: `${work.medium}, ${work.year}. ${work.dimensions}.`,
    openGraph: {
      images: work.images[0]
        ? [`/works/${work.slug}/${work.images[0]}`]
        : [],
      url: `${site.seo.url}/work/${work.slug}`,
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <div className="px-6 md:px-12 pb-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl">
        {/* Images */}
        <div className="flex flex-col gap-4">
          {work.images.map((img, i) => (
            <div key={i} className="bg-zinc-100">
              <Image
                src={`/works/${work.slug}/${img}`}
                alt={`${work.title} — image ${i + 1}`}
                width={800}
                height={1000}
                className="w-full h-auto"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Metadata */}
        <div className="md:sticky md:top-8 self-start pt-1">
          <h1 className="text-xl font-medium mb-6">{work.title}</h1>
          <dl className="text-sm space-y-2 mb-8">
            <div className="flex gap-8">
              <dt className="text-zinc-400 w-24 shrink-0">Year</dt>
              <dd>{work.year}</dd>
            </div>
            <div className="flex gap-8">
              <dt className="text-zinc-400 w-24 shrink-0">Medium</dt>
              <dd>{work.medium}</dd>
            </div>
            <div className="flex gap-8">
              <dt className="text-zinc-400 w-24 shrink-0">Dimensions</dt>
              <dd>{work.dimensions}</dd>
            </div>
            {work.edition && (
              <div className="flex gap-8">
                <dt className="text-zinc-400 w-24 shrink-0">Edition</dt>
                <dd>Ed. {work.edition}</dd>
              </div>
            )}
            {work.colors && (
              <div className="flex gap-8">
                <dt className="text-zinc-400 w-24 shrink-0">Colors</dt>
                <dd>{work.colors}</dd>
              </div>
            )}
          </dl>
          {work.description && (
            <p className="text-sm text-zinc-600 leading-relaxed">{work.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
