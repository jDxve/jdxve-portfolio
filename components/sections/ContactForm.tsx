"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const FIELD =
  "w-full rounded-lg border-2 border-line bg-raised px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent";
const LABEL = "block text-[11px] font-bold uppercase tracking-[0.18em] text-faint mb-2";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const sending = status === "sending";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4">
        <span className="text-accent mb-5">
          <svg viewBox="0 0 24 24" width="52" height="52" fill="currentColor">
            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2l-10 6.5L2 6z" />
            <path d="M22 8.34V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.34l10 6.5 10-6.5z" />
          </svg>
        </span>
        <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight mb-2">
          Message sent
        </h3>
        <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Header — lives in the form so it disappears on the success screen */}
      <div className="pr-8">
        <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight">
          Send a message
        </h3>
        <p className="text-muted text-sm mt-1">
          I&apos;ll get back to you as soon as I can.
        </p>
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={LABEL}>Name</label>
          <input id="cf-name" name="name" required maxLength={120} placeholder="Your name" className={FIELD} />
        </div>
        <div>
          <label htmlFor="cf-email" className={LABEL}>Email</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} placeholder="you@company.com" className={FIELD} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className={LABEL}>Subject</label>
        <input id="cf-subject" name="subject" maxLength={160} placeholder="Opportunity / Collaboration / Hello" className={FIELD} />
      </div>

      <div>
        <label htmlFor="cf-message" className={LABEL}>Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Tell me about the role, project, or idea…"
          className={`${FIELD} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent font-medium" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-accent hover:bg-accent-hover text-white font-bold uppercase tracking-widest text-sm px-6 py-3.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {sending ? (
          <>
            <svg viewBox="0 0 24 24" width="16" height="16" className="animate-spin" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 12a9 9 0 1 1-6.22-8.56" />
            </svg>
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
