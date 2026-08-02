"use client";

import { useContactModal } from "@/components/sections/ContactModal";

export default function ContactCta() {
  const open = useContactModal();
  return (
    <button
      onClick={open}
      className="mt-auto rounded-lg bg-accent hover:bg-accent-hover text-white text-center font-bold uppercase tracking-widest text-sm py-3.5 transition-colors cursor-pointer"
    >
      Send a Message →
    </button>
  );
}
