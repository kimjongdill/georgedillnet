import Image from "next/image";
import { getAllWorks, getSiteConfig } from "@/lib/content";
import WorkCard from "@/components/WorkCard";

export default function GalleryPage() {
  const works = getAllWorks();
  const site = getSiteConfig();
  return (
    <>
      {/* Hero */}
      <div className="relative" style={{ height: "60vh" }}>
        <Image
          src="/prints.png"
          alt="4 copies of 'pink poof jacket club' laid out in a grid."
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">{site.name}</h1>
          <p className="mt-3 text-xs tracking-widest uppercase">{site.tagline}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 md:px-12 pb-24 pt-8">
        <div className="flex flex-wrap gap-6 items-start justify-center md:justify-start">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </>
  );
}
