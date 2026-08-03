"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About",    href: "#about"   },
  { label: "Projects", href: "#work"    },
  { label: "Stack",    href: "#stack"   },
  { label: "Contact",  href: "#contact" },
];

export default function Header() {
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
    /* Desktop: fixed left sidebar */
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-[130px] z-50 flex-col items-start px-4 py-7 gap-10">
        {/* Brand */}
        <a
          href="#about"
          aria-label="Home"
          className="font-display font-black text-2xl tracking-tight text-ink leading-none pl-2"
        >
          jDxve
        </a>

        {/* Nav links */}
        <nav className="flex flex-col gap-5 pl-2">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                className={`flex items-center font-sans text-sm transition-all duration-500 ease-in-out ${
                  isActive
                    ? "text-ink font-semibold"
                    : "text-muted font-normal hover:text-ink"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-accent transition-all duration-500 ease-in-out overflow-hidden ${
                    isActive ? "w-4 opacity-100 mr-1" : "w-0 opacity-0 mr-0"
                  }`}
                >
                  →
                </span>
                {label}
              </a>
            );
          })}
        </nav>
    </aside>
  );
}
