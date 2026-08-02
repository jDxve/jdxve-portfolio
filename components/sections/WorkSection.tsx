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

// GitHub organization octicon (building)
function OrgIcon({ className, size = 15 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" className={className}>
      <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.75.75 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-20 scroll-mt-16">
      <SectionHeader eyebrow="Selected Work" title="Projects" count={String(projects.length).padStart(2, "0")} />

      {/* Projects */}
      <div className="flex flex-col">
        {projects.map((project, i) => {
          const last = i === projects.length - 1;
          return (
            <div key={project.id} className="flex gap-4 md:gap-5">
              {/* Timeline: project logo + connector line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative grid place-items-center w-12 h-12 rounded-xl border border-line bg-raised overflow-hidden text-muted">
                  {project.logo ? (
                    <Image src={project.logo} alt={project.title} fill className="object-contain p-2" />
                  ) : (
                    <OrgIcon size={20} />
                  )}
                </div>
                {!last && <span className="w-px flex-1 bg-line mt-2" />}
              </div>

              {/* Content */}
              <div className={`min-w-0 flex-1 ${last ? "pb-1" : "pb-10"}`}>
                {/* Title (repo link) */}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2"
                  >
                    <h3 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-tight group-hover/link:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                )}
                <p className="font-mono text-[11px] text-faint mt-1">{project.subtitle}</p>

                {/* Role + year */}
                <p className="font-sans font-bold text-sm text-ink mt-4">{project.role}</p>
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent tabular mt-0.5">
                  {project.year}
                  {project.context ? ` · ${project.context}` : ""}
                </p>

                {/* Award */}
                {project.award && (
                  <div className="flex items-center gap-2 mt-3">
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

                {/* Description */}
                <div className="mt-3 space-y-2.5 text-sm text-muted leading-relaxed">
                  {project.bullets.map((b, j) => (
                    <p key={j}>{b}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Experience */}
      <div id="experience" className="mt-20 scroll-mt-20">
        <SectionHeader eyebrow="Professional" title="Experience" count={String(experiences.length).padStart(2, "0")} />

        <div className="flex flex-col">
          {experiences.map((exp, i) => {
            const last = i === experiences.length - 1;
            return (
              <div key={exp.role} className="flex gap-4 md:gap-5">
                {/* Timeline: company avatar + connector line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="grid place-items-center w-12 h-12 rounded-xl border border-line bg-raised text-muted">
                    <OrgIcon size={20} />
                  </div>
                  {!last && <span className="w-px flex-1 bg-line mt-2" />}
                </div>

                {/* Content */}
                <div className={`min-w-0 flex-1 ${last ? "pb-1" : "pb-10"}`}>
                  {/* Company */}
                  <h3 className="font-display font-black text-lg md:text-xl text-ink uppercase tracking-tight leading-tight">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-[11px] text-faint mt-1">{exp.project}</p>

                  {/* Role + dates */}
                  <p className="font-sans font-bold text-sm text-ink mt-4">{exp.role}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent tabular mt-0.5">
                    {exp.period}
                  </p>

                  {/* Description */}
                  <div className="mt-3 space-y-2.5 text-sm text-muted leading-relaxed">
                    {exp.bullets.map((b, j) => (
                      <p key={j}>{b}</p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
