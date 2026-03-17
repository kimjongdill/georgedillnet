import Link from "next/link";

export default function Nav({ name }: { name: string }) {
  return (
    <header className="flex items-baseline justify-between px-6 py-8 md:px-12">
      <Link href="/" className="text-sm font-medium tracking-wide uppercase">
        {name}
      </Link>
      <nav className="flex gap-8 text-sm tracking-wide">
        <Link href="/" className="uppercase hover:opacity-50 transition-opacity">
          Work
        </Link>
        <Link href="/tools" className="uppercase hover:opacity-50 transition-opacity">
          Tools
        </Link>
        <Link href="/about" className="uppercase hover:opacity-50 transition-opacity">
          About
        </Link>
      </nav>
    </header>
  );
}
