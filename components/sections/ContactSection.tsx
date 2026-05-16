import { contactLinks } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-32">
      <div className="border-t border-white/5 pt-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5500] block mb-3">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase leading-none">
              LET&apos;S<br />CONNECT
            </h2>
          </div>
          <div>
            <div className="w-10 h-0.5 bg-white mb-6" />
            <p className="text-neutral-400 text-base leading-relaxed max-w-md">
              Open to new opportunities, collaborations, and projects.
              Whether you have a role, a challenge, or just want to talk
              tech — reach out.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-white/5">
        {contactLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 hover:pl-4 transition-all duration-300 gap-4 md:gap-0"
          >
            <div className="flex items-center gap-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-500 block mb-1">
                  {link.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight group-hover:text-[#ff5500] transition-colors">
                  {link.label}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-12 md:ml-0">
              <span className="font-mono text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {link.value}
              </span>
              <span className="text-neutral-600 group-hover:text-[#ff5500] transition-colors font-bold text-lg">→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-24 border border-white/5 bg-white/[0.02] p-10 md:p-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-3">
              READY TO BUILD<br />
              <span className="text-[#ff5500]">SOMETHING GREAT?</span>
            </h2>
            <p className="text-neutral-500 text-sm">Open to full-time roles, freelance, and collaborations.</p>
          </div>
          <a
            href="mailto:johndavebanas03@gmail.com"
            className="bg-[#ff5500] hover:bg-[#ff5500]/80 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 clip-path-cyber cyber-button transition-colors whitespace-nowrap inline-block"
          >
            Send a Message →
          </a>
        </div>
      </div>
    </section>
  );
}
