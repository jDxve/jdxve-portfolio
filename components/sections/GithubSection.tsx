const GITHUB_USER = "jDxve";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

type Day = { date: string; count: number };

// Dot size + tone per contribution level — ink scale, accent for the busiest days.
const LEVELS = [
  { size: 3, cls: "bg-ink/[0.08]" },
  { size: 4, cls: "bg-ink/25" },
  { size: 5, cls: "bg-ink/45" },
  { size: 6.5, cls: "bg-ink/70" },
  { size: 8, cls: "bg-accent" },
];

function levelOf(count: number) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

async function getContributions(): Promise<{ total: number; days: Day[] } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return {
      total: data?.total?.lastYear ?? 0,
      days: Array.isArray(data?.contributions) ? data.contributions : [],
    };
  } catch {
    return null;
  }
}

async function getRepoCount(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data?.public_repos === "number" ? data.public_repos : null;
  } catch {
    return null;
  }
}

export default async function GithubSection() {
  const [data, repoCount] = await Promise.all([getContributions(), getRepoCount()]);

  // Pad the front so each column aligns to a weekday, GitHub-style.
  const cells: (Day | null)[] = [];
  if (data?.days.length) {
    const offset = new Date(data.days[0].date).getDay();
    for (let i = 0; i < offset; i++) cells.push(null);
    cells.push(...data.days);
  }

  return (
    <div id="github" className="scroll-mt-16">
      {/* Header matching the achievement entry style */}
      <div className="mb-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-faint block mb-4">
          Open Source
        </span>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 md:gap-5 border-b border-line pb-3"
        >
          <div className="w-5 shrink-0 self-start mt-1 text-muted group-hover:text-accent transition-colors">
            <GitHubIcon />
          </div>
          <span className="inline-flex items-start gap-2">
            <h2 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-none group-hover:text-accent transition-colors">
              GitHub
            </h2>
            <span className="mt-0.5 shrink-0 text-faint group-hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </span>
        </a>
      </div>

      {/* Contribution dot-matrix */}
      {cells.length > 0 && (
        <>
          <div className="overflow-x-auto pb-1">
            <div
              className="grid grid-flow-col gap-[3px] w-max"
              style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
            >
              {cells.map((day, i) => {
                if (!day) return <span key={i} className="w-[9px] h-[9px]" />;
                const lvl = LEVELS[levelOf(day.count)];
                return (
                  <span key={i} className="grid place-items-center w-[9px] h-[9px]">
                    <span
                      className={`rounded-full ${lvl.cls}`}
                      style={{ width: lvl.size, height: lvl.size }}
                    />
                  </span>
                );
              })}
            </div>
          </div>

          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-faint tabular">
            {data!.total.toLocaleString()} contributions in the last year
            {repoCount !== null && (
              <span className="text-line-strong"> | </span>
            )}
            {repoCount !== null && `${repoCount} public repos`}
          </p>
        </>
      )}
    </div>
  );
}
