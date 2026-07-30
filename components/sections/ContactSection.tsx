import { contactLinks } from "@/lib/data";
import SectionHeader from "@/components/layout/SectionHeader";

function ContactIcon({ label, className }: { label: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 22,
    height: 22,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  if (label === "Email")
    return (
      <svg {...common}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    );
  if (label === "Phone")
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.85 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.45 5.45l1.07-1.07a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    );
  if (label === "GitHub")
    return (
      <svg {...common}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  if (label === "LinkedIn")
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  return null;
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-24 scroll-mt-16">
      <SectionHeader eyebrow="Get In Touch" title="Connect" count={String(contactLinks.length).padStart(2, "0")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* Left: pitch + status + CTA */}
        <div className="rounded-lg border border-line bg-raised/50 p-6 md:p-7 flex flex-col">
          <h3 className="font-display font-black text-2xl md:text-3xl text-ink uppercase tracking-tight leading-tight mb-3">
            Let&apos;s build<br />
            <span className="text-accent">something great</span>
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-5">
            Open to new opportunities, collaborations, and projects. Whether you have a role, a
            challenge, or just want to talk tech — reach out.
          </p>

          <a
            href="mailto:johndavebanas03@gmail.com"
            className="mt-auto rounded-lg bg-accent hover:bg-accent-hover text-white text-center font-bold uppercase tracking-widest text-sm py-3.5 transition-colors"
          >
            Send a Message →
          </a>
        </div>

        {/* Right: contact list */}
        <div className="rounded-lg border border-line bg-raised/50 flex flex-col divide-y divide-line overflow-hidden">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-1 items-center gap-4 px-5 md:px-6 py-4 hover:bg-raised transition-colors"
            >
              <span className="flex items-center justify-center w-7 text-muted group-hover:text-accent transition-colors shrink-0">
                <ContactIcon label={link.label} />
              </span>
              <div className="min-w-0 flex-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-faint block mb-0.5">
                  {link.tag}
                </span>
                <span className="font-display font-black text-base text-ink uppercase tracking-tight group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <span className="hidden sm:block font-mono text-xs text-muted group-hover:text-accent transition-colors tabular truncate">
                  {link.value}
                </span>
                <span className="text-faint group-hover:text-accent transition-colors font-bold shrink-0">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
