"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Work",    href: "#work"    },
  { label: "Stack",   href: "#stack"   },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-between items-center px-8 py-6 bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display font-black text-2xl tracking-tighter text-white"
      >
        jDxve
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest"
      >
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="text-neutral-500 hover:text-white transition-colors">
            {label}
          </a>
        ))}
      </motion.nav>
    </header>
  );
}
