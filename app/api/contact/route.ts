import { NextResponse } from "next/server";

export const runtime = "edge";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** Honeypot — real users never fill this. */
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "johndavebanas03@gmail.com";
  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bots without sending anything.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const subject = clean(body.subject, 160);
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const heading = subject || "New portfolio message";
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#0d0d0d">
      <h2 style="margin:0 0 16px;font-size:18px">${escapeHtml(heading)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 0;color:#6b6b6b;width:88px">From</td><td style="padding:6px 0">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#6b6b6b">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}" style="color:#ff5500;text-decoration:none">${escapeHtml(email)}</a></td></tr>
      </table>
      <div style="margin:16px 0;padding:16px;background:#f4f4f4;border-radius:8px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>
      <p style="font-size:12px;color:#6b6b6b;margin:0">Sent from your portfolio contact form.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio · ${heading}`,
        html,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Couldn't send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Couldn't send your message. Please try again." }, { status: 502 });
  }
}
