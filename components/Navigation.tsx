"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav className="flex items-center justify-between px-8 md:px-16 h-16">
        <a
          href="#top"
          className="font-light tracking-[0.2em] text-sm uppercase transition-colors duration-500"
          style={{ color: scrolled ? "#0f172a" : "rgba(255,255,255,0.9)" }}
        >
          Your Name
        </a>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest uppercase transition-colors duration-500 hover:opacity-60"
                style={{ color: scrolled ? "#334155" : "rgba(255,255,255,0.8)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
