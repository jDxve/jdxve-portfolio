import Image from "next/image";
import { projects, experiences } from "@/lib/data";
import SectionHeader from "@/components/layout/SectionHeader";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line-strong px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-muted hover:text-accent hover:border-accent transition-colors cursor-default">
      {children}
    </span>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm text-muted leading-relaxed">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="text-faint font-bold shrink-0 mt-0.5">—</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

// GitHub organization octicon
function OrgIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" className={className}>
      <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.75.75 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-20 scroll-mt-16">
      <SectionHeader eyebrow="Selected Work" title="Projects" count={String(projects.length).padStart(2, "0")} />

      {/* Projects */}
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-lg border border-line bg-raised/60 p-6 md:p-7 hover:border-line-strong transition-colors"
          >
            {/* Header: logo (top-left) + title */}
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-md border border-line bg-surface shrink-0 overflow-hidden">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={project.title}
                    fill
                    sizes="112px"
                    className="object-contain p-3"
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="group/link flex items-center gap-2 min-w-0"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-faint group-hover/link:text-accent shrink-0 transition-colors">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-mono text-lg md:text-xl font-bold text-accent group-hover/link:underline underline-offset-2 truncate">
                      {project.title}
                    </span>
                  </a>
                  <span className="ml-auto shrink-0 font-mono text-[11px] text-faint tabular">{project.year}</span>
                </div>
                <p className="text-sm text-muted mt-1.5">{project.subtitle}</p>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-2 text-[11px] font-mono uppercase tracking-wide">
                  <span className="text-accent font-bold">{project.role}</span>
                  {project.context && (
                    <>
                      <span className="text-faint">·</span>
                      <span className="text-muted">{project.context}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Award */}
            {project.award && (
              <div className="flex items-center gap-2 mt-4 rounded-md border border-accent/30 bg-accent/5 px-3 py-2">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
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

            {/* Body */}
            <div className="mt-5 pt-5 border-t border-line">
              <Bullets items={project.bullets} />
              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Experience */}
      <div id="experience" className="mt-20 scroll-mt-20">
        <SectionHeader eyebrow="Professional" title="Experience" count={String(experiences.length).padStart(2, "0")} />

        <div className="flex flex-col gap-5">
          {experiences.map((exp) => (
            <article key={exp.role} className="rounded-lg border border-line bg-raised/60 p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-black text-xl md:text-2xl text-ink uppercase tracking-tight leading-tight">
                  {exp.role}
                </h3>
                <span className="font-mono text-[11px] text-faint tabular shrink-0 mt-1">{exp.period}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-2 text-[11px] font-mono uppercase tracking-wide">
                <OrgIcon className="text-faint shrink-0" />
                <span className="text-accent font-bold">{exp.company}</span>
                <span className="text-faint">·</span>
                <span className="text-muted">{exp.project}</span>
              </div>

              <div className="mt-5 pt-5 border-t border-line">
                <Bullets items={exp.bullets} />
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
