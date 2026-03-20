import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/lib/types";

export default function WorkCard({ work }: { work: Work }) {
  const thumb = work.images[0];
  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div className="bg-zinc-100 overflow-hidden mb-3">
        {thumb && (
          <Image
            src={`/${thumb}`}
            alt={work.title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="h-72 md:h-[40vh] w-auto transition-all duration-500"
          />
        )}
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{work.title}</span>
        <span className="text-xs text-zinc-500">{work.year}</span>
      </div>
      <p className="text-xs text-zinc-500 mt-0.5">{work.medium}</p>
    </Link>
  );
}
