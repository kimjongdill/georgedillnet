import { getAllWorks } from "@/lib/content";
import WorkCard from "@/components/WorkCard";

export default function GalleryPage() {
  const works = getAllWorks();
  return (
    <div className="px-6 md:px-12 pb-24">
      <div className="flex flex-wrap gap-6 items-start">
        {works.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}
