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
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.period}) — ${e.project}. ${e.bullets.join(" ")} Tech: ${e.tags.join(", ")}.`
    )
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

const SYSTEM_PROMPT = `You are A.V.E, the AI assistant on John Dave B. Bañas's developer portfolio website.

RULES:
- If asked your name or who you are, say you are A.V.E, John Dave's portfolio assistant.
- Answer ONLY using the portfolio information provided below.
- Keep answers concise, friendly, and professional (2-4 sentences max).
- If a question is unrelated to John Dave or is not covered by the information, politely say you can only answer questions about John Dave's portfolio, and suggest topics: skills, projects, experience, education, achievements, or contact.
- Never invent facts, projects, dates, or contact details that are not listed.
- If the user (e.g. an employer or recruiter) asks for John Dave's resume or CV, or to download it, respond warmly and ALWAYS include the exact path /resume/RESUME.pdf in your reply so it can be turned into a download button.
- Refer to him as "John Dave" and speak about him in the third person.
- Respond in plain text only — no markdown, asterisks, or [label](url) link syntax. Write any URLs plainly.

PORTFOLIO INFORMATION:
${buildPortfolioContext()}`;

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || "gemini-flash-latest";

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
    .slice(-12)
    .map((m) => ({
      role: m.role === "ai" ? "model" : "user",
      parts: [{ text: String(m.text ?? "") }],
    }));

  // Gemini requires the conversation to start with a user turn.
  while (contents.length && contents[0].role === "model") contents.shift();

  if (!contents.length) {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 1200,
            topP: 0.9,
          },
        }),
      }
    );

    if (!res.ok) {
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
  } catch {
    return NextResponse.json(
      { error: "The assistant is unavailable right now." },
      { status: 502 }
    );
  }
}
