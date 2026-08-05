import Image from "next/image";
import { projects, experiences } from "@/lib/data";
import SectionHeader from "@/components/layout/SectionHeader";

// GitHub repo octicon (book)
function RepoIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

// GitHub organization octicon (building)
function OrgIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor">
      <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.75.75 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

function ArrowIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

// Logo tile + vertical connector line down the list
function Rail({ children, last }: { children: React.ReactNode; last: boolean }) {
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="relative grid place-items-center w-12 h-12 rounded-lg border border-line bg-surface overflow-hidden text-muted">
        {children}
      </div>
      {!last && <span className="w-px flex-1 bg-line mt-2" />}
    </div>
  );
}

// Skills rendered as bordered pills — matching the Tech Stack section
function SkillLine({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-line-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted hover:border-accent hover:text-accent transition-colors cursor-default whitespace-nowrap"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-20 scroll-mt-16">
      {/* Experience */}
      <div id="experience" className="scroll-mt-20">
        <SectionHeader eyebrow="Professional" title="Experience" count={String(experiences.length).padStart(2, "0")} />

        <div className="flex flex-col">
          {experiences.map((exp, i) => {
            const last = i === experiences.length - 1;
            return (
              <article key={exp.role} className="flex gap-4 md:gap-5">
                <Rail last={last}>
                  <OrgIcon />
                </Rail>

                {/* Content */}
                <div className={`min-w-0 flex-1 ${last ? "pb-0" : "pb-10"}`}>
                  <h3 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-tight">
                    {exp.company}
                  </h3>

                  <p className="text-sm font-semibold text-ink mt-3">{exp.role}</p>
                  {exp.project && (
                    <p className="font-mono text-[11px] uppercase tracking-wide text-faint tabular mt-2">
                      {exp.project}
                    </p>
                  )}
                  <p className="font-mono text-[11px] uppercase tracking-wide text-faint tabular mt-1">
                    {exp.period}
                  </p>

                  {/* Description */}
                  <div className="mt-3 space-y-2.5 text-sm text-muted leading-relaxed">
                    {exp.bullets.map((b, j) => (
                      <p key={j}>
                        <span className="font-semibold text-ink">{b.lead}:</span> {b.text}
                      </p>
                    ))}
                  </div>

                  {/* Skills */}
                  <SkillLine tags={exp.tags} />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeader eyebrow="Selected Work" title="Projects" count={String(projects.length).padStart(2, "0")} />
      </div>

      {/* Projects — LinkedIn-style list with connector rail */}
      <div className="flex flex-col">
        {projects.map((project, i) => {
          const last = i === projects.length - 1;
          return (
            <article key={project.id} className="flex gap-4 md:gap-5">
              <Rail last={last}>
                {project.logo ? (
                  <Image src={project.logo} alt={project.title} fill className="object-contain p-1.5" />
                ) : (
                  <RepoIcon />
                )}
              </Rail>

              {/* Content */}
              <div className={`min-w-0 flex-1 ${last ? "pb-0" : "pb-14"}`}>
                {/* Title */}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-muted"
                  >
                    <h3 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="mt-0.5 shrink-0 text-faint group-hover:text-accent transition-colors">
                      <ArrowIcon size={13} />
                    </span>
                  </a>
                ) : (
                  <h3 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                )}

                {/* Subtitle — directly under the title */}
                <p className="font-mono text-[11px] uppercase tracking-wide text-faint tabular mt-1.5">
                  {project.subtitle}
                </p>

                {/* Role */}
                <p className="text-sm font-semibold text-ink mt-3">{project.role}</p>
                {/* Context */}
                {project.context && (
                  <p className="text-sm text-accent mt-1">{project.context}</p>
                )}
                {/* Date */}
                <p className="font-mono text-[11px] uppercase tracking-wide text-faint tabular mt-2">
                  {project.year}
                </p>

                {/* Award */}
                {project.award && (
                  <div className="flex items-center gap-2 mt-4">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                    <span className="text-xs font-bold text-ink leading-snug">
                      {project.award}
                      {project.awardCategory && (
                        <span className="text-muted font-normal"> · {project.awardCategory}</span>
                      )}
                    </span>
                  </div>
                )}

                {/* Description */}
                <div className="mt-4 space-y-3.5 text-sm text-muted leading-relaxed">
                  {project.bullets.map((b, j) => (
                    <p key={j}>{b}</p>
                  ))}
                </div>

                {/* Skills */}
                <SkillLine tags={project.tags} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
