"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#work"       },
  { label: "Experience", href: "#experience" },
  { label: "Stack",      href: "#stack"      },
  { label: "Contact",    href: "#contact"    },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-line">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a href="#about" aria-label="Home">
          <span className="font-display font-black text-2xl tracking-tighter text-ink">jDxve</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7 md:gap-9 text-[10px] font-bold uppercase tracking-widest">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                className={`transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-line bg-surface px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
