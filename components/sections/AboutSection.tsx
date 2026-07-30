import Image from "next/image";

function CvHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-ink shrink-0">{title}</h2>
      <div className="flex-1 h-px bg-line" />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-28 pb-20 scroll-mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 lg:gap-14">
        {/* ---------- Sidebar: GitHub profile ---------- */}
        <aside className="flex flex-col">
          {/* Photo with Open to Work banner */}
          <div className="relative">
            {/* Round orange glow */}
            <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-full bg-accent/30 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-lg border border-line overflow-hidden bg-raised">
            <Image
              src="/my_profile.jpeg"
              alt="John Dave B. Bañas"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover object-top"
              unoptimized
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-ink/70 backdrop-blur-md px-3 py-2">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap">
                Open to Work
              </span>
            </div>
          </div>
          </div>

          {/* Identity — stretched end-to-end to the photo width */}
          <h1 aria-label="John Dave B. Bañas" className="mt-5">
            <svg viewBox="0 0 320 38" className="w-full fill-ink" role="img">
              <text
                x="0"
                y="30"
                textLength="320"
                lengthAdjust="spacingAndGlyphs"
                className="font-display"
                style={{ fontWeight: 900, fontSize: 30 }}
              >
                John Dave B. Bañas
              </text>
            </svg>
          </h1>
          <p className="text-base font-bold text-muted mt-2.5">
            Mobile Application Developer
          </p>

          {/* Links */}
          <div className="mt-5 flex flex-col gap-2.5">
            <a href="https://github.com/jDxve" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="shrink-0">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              github.com/jDxve
            </a>
            <a href="https://linkedin.com/in/jdv-b%C3%B1s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              linkedin.com/in/jdv-bñs
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="mt-auto rounded-lg bg-accent hover:bg-accent-hover text-white text-center font-bold uppercase tracking-widest text-xs py-3.5 transition-colors"
          >
            Get in touch
          </a>
        </aside>

        {/* ---------- Main: GitHub .md file ---------- */}
        <div className="min-w-0">
          <div className="rounded-lg border border-line bg-raised/60 overflow-hidden">
            {/* File header bar */}
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 bg-raised">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="text-faint">
                <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
              </svg>
              <span className="font-mono text-xs text-muted">README.md</span>
            </div>

            {/* File body */}
            <div className="p-6 md:p-8 flex flex-col gap-10">
              {/* About */}
              <div>
                <CvHeading title="About Me" />
                <p className="text-muted text-base leading-relaxed">
                  Hi, I&apos;m John Dave — a{" "}
                  <span className="text-ink font-semibold">Mobile Developer</span> specializing in
                  cross-platform applications and an{" "}
                  <span className="text-ink font-semibold">aspiring Mobile Software Engineer</span>.
                  Focused on clean architecture, clean code, and constantly adopting new tech to
                  build efficient, scalable apps.
                </p>
              </div>

              {/* Education */}
              <div>
                <CvHeading title="Education" />
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6">
                  <span className="font-mono text-xs text-muted tabular md:pt-1.5">2022 — 2026</span>
                  <div>
                    <h3 className="font-display font-black text-xl md:text-2xl text-ink uppercase tracking-tight leading-tight mb-1.5">
                      BS Information Technology
                    </h3>
                    <p className="text-sm text-muted">
                      Bicol University College of Science · Legazpi City, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <CvHeading title="Achievements" />
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6">
                  <span className="font-mono text-xs text-accent tabular md:pt-1.5">2026</span>
                  <div>
                    <h3 className="font-display font-black text-xl md:text-2xl text-ink uppercase tracking-tight leading-tight mb-1.5">
                      Grand Winner — Naga City Mayoral Hackathon
                    </h3>
                    <p className="text-sm text-muted mb-2.5">1st Place · Social Services Challenge</p>
                    <a
                      href="https://bicol-u.edu.ph/buenos-sweep-top-awards-at-1st-naga-city-mayoral-hackathon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline underline-offset-2"
                    >
                      Read the article on Bicol University
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
