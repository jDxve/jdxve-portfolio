const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Work",    href: "#work"    },
  { label: "Stack",   href: "#stack"   },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#ff5500]/30 py-16 flex flex-col items-center justify-center relative z-10">
      <div className="font-display font-black text-4xl tracking-tighter text-white mb-3">jDxve</div>
      <p className="text-[8px] font-mono tracking-[0.4em] uppercase text-neutral-400 mb-10">
        MOBILE DEVELOPER · BACKEND DEVELOPER
      </p>
      <nav className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-300">
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-white transition-colors">
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
