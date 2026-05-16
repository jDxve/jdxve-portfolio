import { projects } from "@/lib/data";

const experienceTags = ["NestJS", "PostgreSQL", "Next.js", "TypeScript", "Drizzle ORM", "JWT"];

export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-32">
      <div className="border-t border-white/5 pt-20 mb-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5500]">Selected Projects</span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mt-2 uppercase">Work</h2>
      </div>

      <div className="flex flex-col gap-40">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${
              project.align === "right" ? "md:[direction:rtl]" : ""
            }`}
          >
            {/* Visual Block */}
            <div className={`relative w-full h-[380px] md:h-[460px] ${project.align === "right" ? "md:[direction:ltr]" : ""}`}>
              <div
                className="absolute top-0 right-8 md:right-12 w-[78%] aspect-[4/3] z-10 flex flex-col items-start justify-end p-6"
                style={{ backgroundColor: project.accentColor, border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="font-display font-black text-4xl md:text-5xl text-white/10 absolute top-4 left-6 select-none">
                  {project.id}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-black/30 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-[48%] aspect-[4/3] bg-[#1a1a1a] border border-white/10 z-20 flex flex-col justify-between p-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">{project.role}</span>
                <span className="font-display font-black text-xl text-white/60">{project.year}</span>
              </div>
              <div
                className="absolute -bottom-6 right-8 w-24 h-24 z-0 opacity-60"
                style={{ backgroundColor: project.accentColor === "#ff5500" ? "#1a1a1a" : "#ff5500" }}
              />
            </div>

            {/* Text Block */}
            <div className={`flex flex-col ${project.align === "right" ? "md:[direction:ltr] md:text-right md:items-end" : ""}`}>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff5500] mb-3">
                {project.subtitle}
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase leading-tight tracking-tighter mb-6">
                {project.title}
              </h3>
              <div className={`w-10 h-0.5 bg-white mb-6 ${project.align === "right" ? "md:ml-auto" : ""}`} />

              {project.award && (
                <div className={`mb-6 border-l-2 border-[#ff5500] pl-3 ${project.align === "right" ? "md:border-l-0 md:border-r-2 md:pl-0 md:pr-3" : ""}`}>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#ff5500] block">
                    {project.awardCategory}
                  </span>
                  <span className="text-xs font-bold text-white">{project.award}</span>
                </div>
              )}

              <ul className={`text-neutral-400 text-sm leading-relaxed space-y-3 max-w-md mb-10 ${project.align === "right" ? "md:ml-auto" : ""}`}>
                {project.bullets.map((bullet, i) => (
                  <li key={i} className={`flex gap-3 ${project.align === "right" ? "md:flex-row-reverse md:text-right" : ""}`}>
                    <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mt-40 pt-20 border-t border-white/5">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5500]">Professional</span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mt-2 uppercase mb-16">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff5500] block mb-3">Feb – May 2026</span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter leading-tight mb-2">
              BACKEND DEVELOPER INTERN
            </h3>
            <p className="text-neutral-500 font-bold text-sm uppercase tracking-widest mb-8">
              Quanby Solutions, Inc. · Payroll System
            </p>
            <div className="w-10 h-0.5 bg-white mb-8" />
          </div>
          <div>
            <ul className="text-neutral-400 text-sm leading-relaxed space-y-4">
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
                <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border border-white/10 text-neutral-400 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors">
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
