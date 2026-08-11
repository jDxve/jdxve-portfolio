import { NextResponse } from "next/server";
import { projects, experiences, categories, contactLinks } from "@/lib/data";

export const runtime = "edge";

type ChatMessage = { role: "user" | "ai"; text: string };

function buildPortfolioContext(): string {
  const skills = categories
    .map((c) => `- ${c.label}: ${c.items.join(", ")}`)
    .join("\n");

  const projs = projects
    .map((p) => {
      const award = p.award
        ? ` Award: ${p.award}${p.awardCategory ? ` (${p.awardCategory})` : ""}.`
        : "";
      const ctx = p.context ? ` (${p.context})` : "";
      return `- ${p.title} — ${p.subtitle}. Role: ${p.role}${ctx}. Year: ${p.year}.${award} ${p.bullets.join(" ")} Tech: ${p.tags.join(", ")}.${p.repo ? ` Repo: ${p.repo}` : ""}`;
    })
    .join("\n");

  const exp = experiences
    .map((e) => {
      const proj = e.project ? ` — ${e.project}` : "";
      const bullets = e.bullets.map((b) => `${b.lead}: ${b.text}`).join(" ");
      return `- ${e.role} at ${e.company} (${e.period})${proj}. ${bullets} Tech: ${e.tags.join(", ")}.`;
    })
    .join("\n");

  const contact = contactLinks.map((c) => `- ${c.label}: ${c.value}`).join("\n");

  return `PROFILE
Name: John Dave B. Bañas
Title: Mobile Application Developer
Location: Albay, Philippines
Status: Open to work.
Resume: A downloadable PDF resume/CV is available at /resume/RESUME.pdf
About: Mobile Developer specializing in cross-platform Flutter applications and an aspiring Mobile Software Engineer. Focused on clean architecture, clean code, and constantly adopting new tech to build efficient, scalable apps.

EDUCATION
BS Information Technology — Bicol University College of Science, Legazpi City, Philippines (2022–2026).

ACHIEVEMENTS
Grand Winner — 1st Naga City Mayoral Hackathon (Social Services Challenge, 2026), with the MyNagAlaga app. Article: https://bicol-u.edu.ph/buenos-sweep-top-awards-at-1st-naga-city-mayoral-hackathon/

TECHNICAL SKILLS
${skills}

PROJECTS
${projs}

EXPERIENCE
${exp}

CONTACT
${contact}`;
}

const SYSTEM_PROMPT = `You are A.V.E, the friendly AI assistant on John Dave B. Bañas's developer portfolio website. Think of yourself as a warm, welcoming guide who's genuinely happy to help visitors get to know John Dave and his work.

PERSONALITY & TONE:
- Be warm, polite, and personable — greet people kindly and make them feel welcome.
- Sound natural and conversational, like a helpful human, not a scripted bot. Vary your phrasing.
- Be genuinely enthusiastic about John Dave's projects and skills, but stay honest and grounded.
- Keep replies short and easy to read — aim for 2-3 sentences (about 60 words). Be brief by default; only go longer if truly necessary.
- End answers in an inviting way when it feels natural — offer a relevant follow-up or gently point to something else they might want to explore (e.g. "Want to hear about the tech behind it?").
- A single, tasteful emoji is okay once in a while, but don't overdo it.

RULES:
- If asked your name or who you are, warmly introduce yourself as A.V.E, John Dave's portfolio assistant.
- Answer ONLY using the portfolio information provided below.
- If a question is unrelated to John Dave, or something you don't have info on, kindly and apologetically let them know you can only help with questions about John Dave's portfolio — then friendly-suggest what you CAN cover: his skills, projects, experience, education, achievements, or contact info.
- Never invent or guess facts, projects, dates, tech, or contact details that aren't listed. If unsure, say so honestly and gently.
- If someone (like an employer or recruiter) asks for John Dave's resume or CV, or to download it, respond warmly, encourage them, and ALWAYS include the exact path /resume/RESUME.pdf in your reply so it can become a download button.
- Refer to him as "John Dave" and speak about him in the third person.
- Respond in plain text only — no markdown, asterisks, or [label](url) link syntax. Write any URLs plainly.

PORTFOLIO INFORMATION:
${buildPortfolioContext()}`;

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || "gemini-flash-lite-latest";

  if (!apiKey) {
    return NextResponse.json({ error: "Chat is not configured." }, { status: 500 });
  }

  let messages: ChatMessage[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Keep the conversation lightweight and map to Gemini's format.
  const contents = messages
    .slice(-8)
    .map((m) => ({
      role: m.role === "ai" ? "model" : "user",
      parts: [{ text: String(m.text ?? "") }],
    }));

  // Gemini requires the conversation to start with a user turn.
  while (contents.length && contents[0].role === "model") contents.shift();

  if (!contents.length) {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.65,
            // Enough headroom that short replies never get truncated.
            maxOutputTokens: 600,
            topP: 0.95,
          },
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`Gemini API error (${res.status}) for model "${model}":`, detail);
      return NextResponse.json(
        { error: "The assistant is unavailable right now." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text).join("") ??
      "";

    return NextResponse.json({
      reply: reply.trim() || "Sorry, I couldn't come up with an answer for that.",
    });
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      return NextResponse.json(
        { error: "The assistant is taking too long to respond. Please try again." },
        { status: 504 }
      );
    }
    return NextResponse.json(
      { error: "The assistant is unavailable right now." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
