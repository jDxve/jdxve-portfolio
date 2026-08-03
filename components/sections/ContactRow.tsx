"use client";

import { useContactModal } from "@/components/sections/ContactModal";
import ContactIcon from "@/components/sections/ContactIcon";

type ContactLink = {
  label: string;
  href: string;
  tag: string;
  value: string;
};

const ROW_CLASS =
  "group flex flex-1 items-center gap-4 px-5 md:px-6 py-4 text-left w-full";

function RowInner({ link }: { link: ContactLink }) {
  return (
    <>
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
    </>
  );
}

export default function ContactRow({ link }: { link: ContactLink }) {
  const open = useContactModal();

  // Email opens the contact modal instead of a mailto: link.
  if (link.label === "Email") {
    return (
      <button type="button" onClick={open} className={ROW_CLASS}>
        <RowInner link={link} />
      </button>
    );
  }

  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={ROW_CLASS}
    >
      <RowInner link={link} />
    </a>
  );
}
