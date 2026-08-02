"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";

const ContactModalContext = createContext<() => void>(() => {});

/** Call this inside any client component to open the shared contact modal. */
export function useContactModal() {
  return useContext(ContactModalContext);
}

export default function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <ContactModalContext.Provider value={openModal}>
      {children}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[90] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {/* Backdrop */}
                <button
                  aria-label="Close dialog"
                  onClick={() => setOpen(false)}
                  className="absolute inset-0 bg-ink/40 backdrop-blur-sm cursor-default"
                />

                {/* Dialog */}
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Send a message"
                  className="relative w-full max-w-lg rounded-xl border border-line bg-surface shadow-2xl px-6 md:px-7 pb-6 md:pb-7 pt-5 max-h-[90vh] overflow-y-auto overflow-x-hidden"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Portfolio skin grain */}
                  <span className="noise-panel rounded-xl" aria-hidden="true" />

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="absolute top-5 right-6 md:right-7 z-10 grid place-items-center h-7 w-7 rounded-lg text-muted hover:text-ink hover:bg-line/60 active:scale-90 transition-all cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>

                  <div className="relative">
                    <ContactForm />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </ContactModalContext.Provider>
  );
}
