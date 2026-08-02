"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "ai"; text: string };

const RESUME_PATH = "/resume/RESUME.pdf";

function AiMessage({ text }: { text: string }) {
  const hasResume = text.includes(RESUME_PATH);
  // Strip the raw path from the visible text; the button replaces it.
  const display = hasResume
    ? text.replace(RESUME_PATH, "").replace(/\s{2,}/g, " ").replace(/\s+([.,!?])/g, "$1").trim()
    : text;

  return (
    <div className="rounded-lg border border-line bg-raised/90 px-4 py-3 text-sm text-ink leading-relaxed shadow-xs">
      {display}
      {hasResume && (
        <a
          href={RESUME_PATH}
          download
          className="group mt-3 flex items-center gap-3 rounded-lg border border-line bg-surface hover:border-accent px-3 py-2.5 transition-colors"
        >
          <span className="grid place-items-center w-9 h-9 rounded-md bg-accent/10 text-accent shrink-0">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
          </span>
          <span className="flex flex-col min-w-0 leading-tight">
            <span className="text-sm font-bold text-ink truncate">RESUME.pdf</span>
            <span className="text-[11px] text-muted">PDF · Tap to download</span>
          </span>
          <span className="ml-auto text-muted group-hover:text-accent transition-colors shrink-0">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
          </span>
        </a>
      )}
    </div>
  );
}

const GREETING =
  "Hi! 👋 I'm A.V.E — John Dave's AI assistant. Ask me about his skills, projects, experience, or how to get in touch.";

const SUGGESTIONS = [
  { label: "Skills", query: "What are John Dave's main skills?" },
  { label: "Projects", query: "Tell me about his projects." },
  { label: "Experience", query: "What's his work experience?" },
  { label: "Contact", query: "How can I reach him?" },
];

function RobotHead({
  size = 48,
  isThinking = false,
  isOpen = false,
}: {
  size?: number;
  isThinking?: boolean;
  isOpen?: boolean;
}) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" width={size} height={size} overflow="visible" fill="none">
        <defs>
          <style>{`
            @keyframes botTalk {
              0%, 100% { transform: scaleY(0.72); }
              50%      { transform: scaleY(1.02); }
            }
            .bot-mouth-talk {
              transform-origin: 20px 24.6px;
              animation: botTalk 0.9s ease-in-out infinite;
            }
            @keyframes botBlink {
              0%, 92%, 100% { transform: scaleY(1); }
              95%           { transform: scaleY(0.1); }
              98%           { transform: scaleY(1); }
            }
            .bot-eyes-blink {
              transform-origin: 20px 19.8px;
              animation: botBlink 5s ease-in-out infinite;
              will-change: transform;
            }
          `}</style>
        </defs>

        <g className="bot">
          {/* Straight Vertical Antenna Stem — Pure Solid Orange */}
          <line x1="12.0" y1="16.0" x2="12.0" y2="9.0" stroke="#ff5500" strokeWidth="1.6" strokeLinecap="round" />

          {/* Upright Heart Icon — Pure Solid Orange */}
          <g transform="translate(12.0, 8.1) scale(0.8)">
            <path
              className="bot-heart"
              d="M 0 2.2 C 0 2.2 -3.5 -0.5 -3.5 -2.2 C -3.5 -3.6 -1.8 -4.3 -0.4 -3.2 L 0 -2.8 L 0.4 -3.2 C 1.8 -4.3 3.5 -3.6 3.5 -2.2 C 3.5 -0.5 0 2.2 0 2.2 Z"
              fill="#ff5500"
            />
          </g>

          {/* Left Ear — 3 Bars (Pure Solid Orange, overlapping inside head) */}
          <rect x="4.2" y="19.3" width="5.0" height="3.0" rx="0.6" fill="#ff5500" />
          <rect x="5.6" y="18.2" width="4.2" height="5.2" rx="0.6" fill="#ff5500" />
          <rect x="7.2" y="17.05" width="3.5" height="7.5" rx="0.6" fill="#ff5500" />

          {/* Right Ear — 3 Bars (Pure Solid Orange, overlapping inside head) */}
          <rect x="29.3" y="17.05" width="3.5" height="7.5" rx="0.6" fill="#ff5500" />
          <rect x="30.2" y="18.2" width="4.2" height="5.2" rx="0.6" fill="#ff5500" />
          <rect x="30.8" y="19.3" width="5.0" height="3.0" rx="0.6" fill="#ff5500" />

          {/* Short, Wide & Compact Speech Tail at bottom */}
          <path d="M10.5 27.5 L8.5 32.5 Q15 31 19.5 29.5 Z" fill="#ff5500" />

          {/* Main Orange Head Ellipse — Pure Solid Orange */}
          <ellipse cx="20" cy="20.8" rx="12" ry="11" fill="#ff5500" />

          {/* Crisp White Eyes */}
          {isThinking ? (
            <>
              <circle cx="15.8" cy="19" r="2.4" fill="#ffffff" />
              <circle cx="24.2" cy="19" r="2.4" fill="#ffffff" />
            </>
          ) : (
            <g className="bot-eyes-blink">
              <circle cx="15.8" cy="19.8" r="2.4" fill="#ffffff" />
              <circle cx="24.2" cy="19.8" r="2.4" fill="#ffffff" />
            </g>
          )}

          {/* Mouth */}
          {isThinking ? (
            /* Talking — soft open mouth that opens & closes */
            <ellipse
              className="bot-mouth-talk"
              cx="20"
              cy="24.6"
              rx="3.4"
              ry="2.4"
              fill="#ffffff"
            />
          ) : (
            /* Idle — friendly clean smile */
            <path
              d="M15.5 24 Q20 27.4 24.5 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </g>
      </svg>
    </div>
  );
}

function BotAvatar({
  size = 38,
  isThinking = false,
  isOpen = false,
}: {
  size?: number;
  isThinking?: boolean;
  isOpen?: boolean;
}) {
  return (
    <span className="shrink-0 inline-flex items-center justify-center">
      <RobotHead size={size} isThinking={isThinking} isOpen={isOpen} />
    </span>
  );
}

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "ai", text: GREETING }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const sendMessage = async (text: string) => {
    const q = text.trim();
    if (!q || typing) return;
    const next: Msg[] = [...messages, { role: "user", text: q }];
    setMessages(next);
    setInput("");
    setTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply =
        typeof data?.reply === "string" && data.reply.trim()
          ? data.reply
          : "Sorry, I'm having trouble responding right now. Please try again or reach John Dave via the Contact section.";
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "ai", text: "Sorry, I couldn't connect. Please try again in a moment." },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Panel */}
      <div
        aria-hidden={!open}
        className={`fixed bottom-24 right-4 sm:right-6 z-[110] w-[380px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[76vh] rounded-lg border border-line-strong bg-surface shadow-xl flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ease-out ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-3 pointer-events-none"
        }`}
      >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line px-5 py-4 bg-surface shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <BotAvatar size={34} isThinking={typing} isOpen={open} />
              <div className="flex flex-col min-w-0">
                <span className="font-display font-black text-base text-ink uppercase tracking-tight leading-none">
                  A.V.E
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {typing ? "Thinking…" : "Online"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Minimize chat"
              className="group grid place-items-center h-7 w-7 rounded-lg text-muted hover:text-ink hover:bg-line/60 active:scale-90 transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3.5 bg-surface">
            {messages.map((m, i) =>
              m.role === "ai" ? (
                <div key={i} className="flex items-start gap-2.5 max-w-[90%] self-start">
                  <div className="mt-0.5 shrink-0">
                    <BotAvatar size={22} isOpen={open} />
                  </div>
                  <AiMessage text={m.text} />
                </div>
              ) : (
                <div key={i} className="self-end max-w-[85%] rounded-lg bg-accent text-white px-4 py-3 text-sm font-medium leading-relaxed shadow-xs">
                  {m.text}
                </div>
              )
            )}

            {typing && (
              <div className="flex items-center gap-2.5 self-start">
                <BotAvatar size={22} isThinking={true} isOpen={open} />
                <div className="flex items-center gap-1.5 py-1">
                  <span className="w-2 h-2 rounded-full bg-accent/70 animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1s" }} />
                  <span className="w-2 h-2 rounded-full bg-accent/70 animate-bounce" style={{ animationDelay: "150ms", animationDuration: "1s" }} />
                  <span className="w-2 h-2 rounded-full bg-accent/70 animate-bounce" style={{ animationDelay: "300ms", animationDuration: "1s" }} />
                </div>
              </div>
            )}

            {messages.length === 1 && !typing && (
              <div className="pl-8 pt-1 flex flex-col gap-1.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-faint block">
                  Suggested Topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => sendMessage(s.query)}
                      className="rounded-md border border-line-strong bg-raised px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input Footer */}
          <div className="bg-surface px-3.5 pb-3.5 pt-1 shrink-0">
            <div className="flex items-center gap-2 rounded-xl bg-white dark:bg-raised pl-4 pr-1.5 py-1 ring-1 ring-line focus-within:ring-2 focus-within:ring-accent transition-shadow">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input);
                }}
                placeholder="Ask A.V.E a question..."
                style={{ border: "none", outline: "none", boxShadow: "none", background: "transparent" }}
                className="flex-1 min-w-0 appearance-none text-sm text-ink placeholder:text-faint"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={typing || !input.trim()}
                aria-label="Send message"
                className="shrink-0 grid place-items-center h-9 w-9 text-accent hover:text-accent-hover disabled:opacity-40 disabled:hover:text-accent transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="-rotate-45">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      {/* Launcher Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close A.V.E chat" : "Open A.V.E chat"}
        className="fixed bottom-5 right-5 sm:right-7 z-[110] hover:scale-105 transition-transform"
      >
        <RobotHead size={70} isThinking={typing} isOpen={open} />
      </button>
    </>
  );
}
