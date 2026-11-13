import { contactLinks } from "@/lib/data";
import SectionHeader from "@/components/layout/SectionHeader";
import ContactModalProvider from "@/components/sections/ContactModal";
import ContactCta from "@/components/sections/ContactCta";
import ContactRow from "@/components/sections/ContactRow";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-14 md:pt-20 pb-16 md:pb-24 scroll-mt-16">
      <SectionHeader eyebrow="Get In Touch" title="Connect" count={String(contactLinks.length).padStart(2, "0")} />

      <ContactModalProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Left: pitch + CTA (opens contact modal) */}
          <div className="rounded-xl border border-line bg-surface/50 p-5 sm:p-6 md:p-7 flex flex-col">
            <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-ink uppercase tracking-tight leading-tight mb-2 sm:mb-3">
              Let&apos;s build<br />
              <span className="text-accent">something great</span>
            </h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5">
              Open to new opportunities, collaborations, and projects. Whether you have a role, a
              challenge, or just want to talk tech — reach out.
            </p>

            <ContactCta />
          </div>

          {/* Right: contact list */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {contactLinks.map((link) => (
              <ContactRow key={link.label} link={link} />
            ))}
          </div>
        </div>
      </ContactModalProvider>
    </section>
  );
}
