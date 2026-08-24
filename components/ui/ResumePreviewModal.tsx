"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export const RESUME_PATH = "/resume/RESUME.pdf";
export const RESUME_NAME = "RESUME.pdf";

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ResumePreviewModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [size, setSize] = useState<string | null>(null);

  // Lock scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // File size is read once, on first open, so replacing the PDF needs no code change.
  useEffect(() => {
    if (!open || size) return;
    let cancelled = false;
    fetch(RESUME_PATH, { method: "HEAD" })
      .then((res) => {
        const len = res.headers.get("content-length");
        if (!cancelled && len) setSize(formatSize(Number(len)));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [open, size]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[130] flex items-center justify-center p-3 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <button
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm cursor-default"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            className="relative flex flex-col w-full max-w-3xl h-[88vh] md:h-[86vh] rounded-xl border border-line bg-surface shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 border-b border-line px-4 md:px-5 py-3.5 shrink-0">
              <span className="grid place-items-center w-9 h-9 rounded-md bg-accent/10 text-accent shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </span>
              <span className="flex flex-col min-w-0 leading-tight">
                <span className="text-sm font-bold text-ink truncate">{RESUME_NAME}</span>
                <span className="font-mono text-[11px] text-faint">
                  PDF preview{size ? ` · ${size}` : ""}
                </span>
              </span>

              <button
                onClick={onClose}
                aria-label="Close"
                className="ml-auto grid place-items-center h-8 w-8 rounded-lg text-muted hover:text-ink hover:bg-line/60 active:scale-90 transition-all cursor-pointer shrink-0"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* Preview */}
            <div className="relative flex-1 min-h-0 bg-ink/[0.04]">
              <object
                data={`${RESUME_PATH}#view=FitH&toolbar=0&navpanes=0`}
                type="application/pdf"
                className="absolute inset-0 w-full h-full"
                aria-label="Resume document preview"
              >
                {/* Shown when the browser has no inline PDF viewer (common on mobile). */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <span className="grid place-items-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3 7V3.5L18.5 9H13z" />
                    </svg>
                  </span>
                  <p className="text-sm text-muted max-w-xs text-center">
                    Your browser can&apos;t show the PDF inline. Open it in a new tab or download it
                    below.
                  </p>
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-accent hover:underline underline-offset-4"
                  >
                    Open in new tab
                  </a>
                </div>
              </object>
            </div>

            {/* Footer actions */}
            <div className="relative z-10 flex items-center gap-3 border-t border-line px-4 md:px-5 py-3.5 shrink-0">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-accent transition-colors"
              >
                Open in new tab
              </a>
              <a
                href={RESUME_PATH}
                download
                className="ml-auto inline-flex items-center gap-2 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold uppercase tracking-widest text-xs px-4 py-2.5 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
                Download
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
