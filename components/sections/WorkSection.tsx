import Image from "next/image";
import { projects } from "@/lib/data";

const experienceTags = ["NestJS", "PostgreSQL", "Next.js", "TypeScript", "Drizzle ORM", "JWT"];

export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-6">
      <div className="border-t border-black/10 dark:border-white/10 pt-20 mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5500]">Selected Work</span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#0d0d0d] dark:text-white mt-2 uppercase">Projects</h2>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div key={project.id} className="group border-t border-black/10 dark:border-white/10 pt-10 pb-16">

            {/* Row 1 — number + title */}
            <div className="flex items-baseline gap-5 mb-10">
              <span className="font-mono text-[#ff5500] text-xs font-bold shrink-0">{project.id} /</span>
              <h3 className="text-5xl md:text-7xl font-display font-black text-[#0d0d0d] dark:text-white leading-none tracking-tighter">
                {project.title}
              </h3>
            </div>

            {/* Row 2 — image + content */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start`}>

              {/* Image */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="relative bg-white dark:bg-[#111] overflow-hidden">
                  <div className="relative w-full h-[320px]">
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-10"
                      />
                    )}
                  </div>
                  <div className="flex justify-between px-4 py-2.5 border-t border-[#ff5500]">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-600 dark:text-white/60">{project.role}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff5500]">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col gap-5 ${index % 2 !== 0 ? "md:order-1" : ""}`}>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5500]">
                  {project.subtitle}
                </p>

                {project.award && (
                  <div className="border border-[#ff5500]/30 bg-[#ff5500]/5 px-4 py-3">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#ff5500] block mb-1">{project.awardCategory}</span>
                    <span className="text-xs font-bold text-[#0d0d0d] dark:text-white">{project.award}</span>
                  </div>
                )}

                <ul className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/10 dark:border-white/10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] uppercase tracking-widest px-2.5 py-1 border border-black/20 dark:border-white/20 text-neutral-700 dark:text-neutral-300 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mt-40 pt-20 border-t border-black/10 dark:border-white/10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5500]">Professional</span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#0d0d0d] dark:text-white mt-2 uppercase mb-16">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5500] block mb-3">Feb – May 2026</span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-[#0d0d0d] dark:text-white uppercase tracking-tighter leading-tight mb-2">
              BACKEND DEVELOPER INTERN
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 font-bold text-sm uppercase tracking-widest mb-8">
              Quanby Solutions, Inc. · Payroll System
            </p>
            <div className="w-10 h-0.5 bg-[#ff5500] mb-8" />
          </div>
          <div>
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed space-y-4">
              <li className="flex gap-3">
                <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">—</span>
                <span>
                  Developed and integrated 11 full-stack modules end-to-end, from NestJS/PostgreSQL backend to
                  Next.js frontend, covering auth, employee management, attendance, leave, overtime, payroll, and more.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">—</span>
                <span>
                  Conducted end-to-end testing across all modules and implemented audit logging and idle session
                  timeout for security and compliance.
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {experienceTags.map((tag) => (
                <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border border-black/10 dark:border-white/10 text-neutral-500 dark:text-neutral-400 bg-white/60 dark:bg-white/[0.06] hover:border-[#ff5500] hover:text-[#ff5500] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
