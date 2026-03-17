"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  name: string;
  tagline: string;
}

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export default function Header({ name, tagline }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative sticky top-0 z-50 bg-white overflow-hidden transition-[height] duration-300 ease-in-out ${
        scrolled ? "h-16 border-b border-zinc-100" : "h-[70vh]"
      }`}
    >
      <Image
        src="/prints.png"
        alt=""
        fill
        className="object-cover transition-opacity duration-300"
        style={{ opacity: scrolled ? 0 : 0.6 }}
        priority
      />

      {/* Hero content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-200 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight">{name}</h1>
        <p className="mt-3 text-xs tracking-widest uppercase">{tagline}</p>
      </div>

      {/* Nav bar */}
      <div
        className={`absolute inset-x-0 top-0 flex items-center justify-between px-6 md:px-12 h-16 transition-opacity duration-200 delay-150 ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
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
      </div>
    </header>
  );
}
