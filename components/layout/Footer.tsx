const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Projects", href: "#work"    },
  { label: "Stack",   href: "#stack"   },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 flex flex-col items-center justify-center relative z-10 bg-[#E0E0E0] dark:bg-[#111]">
      <div className="font-display font-black text-4xl tracking-tighter text-[#0d0d0d] dark:text-white mb-3">jDxve</div>
      <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-5">
        MOBILE DEVELOPER · BACKEND DEVELOPER
      </p>
      <nav className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-[#ff5500] transition-colors">
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
