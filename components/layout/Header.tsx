"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About",    href: "#about"   },
  { label: "Projects", href: "#work"    },
  { label: "Stack",    href: "#stack"   },
  { label: "Contact",  href: "#contact" },
];

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-display font-black text-xl tracking-tighter text-[#0d0d0d] dark:text-white">jDxve</span>
          </motion.div>

          {/* Desktop nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden sm:flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#ff5500] dark:hover:text-[#ff5500] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-[#0d0d0d] dark:bg-white transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#0d0d0d] dark:bg-white transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#0d0d0d] dark:bg-white transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-black/10 dark:border-white/10 bg-[#E8E8E8] dark:bg-[#0d0d0d] px-6 py-5 flex flex-col gap-5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-[#ff5500] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Floating theme toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-lg hover:text-[#ff5500] text-neutral-500 dark:text-neutral-400 transition-colors"
      >
        {isDark ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
