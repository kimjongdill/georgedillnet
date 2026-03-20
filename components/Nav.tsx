"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export default function Nav({ name }: { name: string }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 h-16 border-b border-zinc-100">
      <Link href="/" className="text-sm font-medium tracking-wide uppercase">
        {name}
      </Link>
      <nav className="flex gap-8 text-sm tracking-wide">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="uppercase hover:opacity-50 transition-opacity">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
