import HalftoneImage from "@/components/ui/HalftoneImage";
import GithubSection from "@/components/sections/GithubSection";

function CvHeading({ title }: { title: string }) {
  return (
    <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-faint mb-4">{title}</h2>
  );
}

// Small icon aligned to the top of each entry's title.
function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-5 shrink-0 self-start text-muted mt-1.5">
      {children}
    </div>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-[1100px] mx-auto px-2 lg:px-4 pt-8 pb-20 scroll-mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 lg:gap-14">
        {/* ---------- Sidebar ---------- */}
        <aside className="flex flex-col gap-6">
          {/* Photo — halftone dot portrait */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <HalftoneImage src="/my_profile.jpeg" alt="John Dave B. Bañas" />
          </div>

          {/* Identity block */}
          <div>
            <h1 className="font-display font-black text-[26px] md:text-[28px] text-ink tracking-tight leading-[1.15]">
              John Dave B. Bañas
            </h1>
            <p className="font-mono text-xs text-faint mt-1.5 tracking-wide">@jDxve</p>
            <p className="text-sm font-semibold text-accent mt-2 uppercase tracking-wider">
              Mobile Application Developer
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-line" />

          {/* Details — uniform stroke icons */}
          <div className="flex flex-col gap-3">
            {/* Location */}
            <span className="inline-flex items-center gap-3 font-mono text-sm text-muted">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-faint">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Albay, Philippines
            </span>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jdv-b%C3%B1s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-faint">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              linkedin.com/in/jdv-bñs
            </a>

            {/* Resume */}
            <a
              href="/resume/RESUME.pdf"
              download
              className="inline-flex items-center gap-3 font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-faint">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              resume/jDxve
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

        {/* ---------- Main: profile details ---------- */}
        <div className="min-w-0">
          <div className="flex flex-col gap-10">
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
                <div className="flex gap-4 md:gap-5">
                  <IconTile>
                    <CapIcon />
                  </IconTile>
                  <div className="min-w-0">
                    <h3 className="font-display font-black text-xl md:text-2xl text-ink uppercase tracking-tight leading-tight">
                      BS Information Technology
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-accent tabular mt-1">
                      2022 — 2026
                    </p>
                    <p className="text-sm text-muted mt-2.5">
                      Bicol University College of Science · Legazpi City, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <CvHeading title="Achievements" />
                <div className="flex gap-4 md:gap-5">
                  <IconTile>
                    <TrophyIcon />
                  </IconTile>
                  <div className="min-w-0">
                    <h3 className="font-display font-black text-xl md:text-2xl text-ink uppercase tracking-tight leading-tight">
                      Grand Winner — Naga City Mayoral Hackathon
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-accent tabular mt-1">
                      2026
                    </p>
                    <p className="text-sm text-muted mt-2.5 mb-2.5">1st Place · Social Services Challenge</p>
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

              {/* GitHub contributions */}
              <GithubSection />
          </div>
        </div>
      </div>
    </section>
  );
}
