const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Projects", href: "#work"    },
  { label: "Stack",   href: "#stack"   },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center justify-center relative z-10 bg-[#E0E0E0] dark:bg-[#111]">
      <div className="font-display font-black text-4xl tracking-tighter text-[#0d0d0d] dark:text-white mb-5">jDxve</div>
      <p className="text-[10px] font-mono tracking-widest uppercase text-neutral-600 dark:text-neutral-300 mb-0 text-center px-4">
        MOBILE DEVELOPER | BACKEND DEVELOPER
      </p>
    </footer>
  );
}
