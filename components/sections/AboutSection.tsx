import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-32 pb-32">
      {/* Hero Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        {/* Text */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5500] block mb-3">
            Who I Am
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase leading-none mb-8">
            JOHN DAVE<br />B. BAÑAS
          </h2>
          <div className="w-10 h-0.5 bg-white mb-8" />
          <p className="text-neutral-400 text-base leading-relaxed max-w-md mb-10">
            A Mobile Developer specializing in cross-platform{" "}
            <span className="text-white font-bold">Flutter</span> applications,
            with backend experience in{" "}
            <span className="text-white font-bold">NestJS</span> and TypeScript.
            Deeply committed to clean code and clean architecture — building
            efficient, scalable apps that deliver seamless user experiences.
          </p>
          <div className="flex flex-col gap-3 text-[11px] font-mono text-neutral-300">
            <a href="mailto:johndavebanas03@gmail.com" className="flex items-center gap-2 hover:text-[#ff5500] transition-colors">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              johndavebanas03@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.85 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.45 5.45l1.07-1.07a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              (+63) 910-497-9045
            </span>
            <a href="https://github.com/jDxve" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff5500] transition-colors">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              github.com/jDxve
            </a>
            <a href="https://linkedin.com/in/jdv-b%C3%B1s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff5500] transition-colors">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              linkedin.com/in/jdv-bñs
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative w-full pb-16">
          <div className="relative w-full h-[570px] overflow-hidden border border-white/10">
            <Image
              src="/my_profile.jpeg"
              alt="John Dave B. Bañas"
              fill
              className="object-cover object-top"
              unoptimized
            />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-0 inset-x-0 h-[3px] bg-[#ff5500]" />
          </div>

          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#ff5500] z-20 pointer-events-none" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#ff5500] z-20 pointer-events-none" />
          <div className="absolute top-[542px] left-2 w-8 h-8 border-b-2 border-l-2 border-[#ff5500] z-20 pointer-events-none" />
          <div className="absolute top-[542px] right-2 w-8 h-8 border-b-2 border-r-2 border-[#ff5500] z-20 pointer-events-none" />

          {/* Status badge */}
          <div
            className="absolute left-4 z-30 bg-[#ff5500] clip-path-cyber px-6 py-4 shadow-[0_0_40px_rgba(255,85,0,0.45)]"
            style={{ top: "538px" }}
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/50 block mb-1">Status</span>
            <span className="font-display font-black text-sm text-black">OPEN TO WORK</span>
          </div>

          {/* Stack badge */}
          <div
            className="absolute right-4 z-30 bg-[#111]/90 backdrop-blur-sm border border-white/10 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            style={{ top: "538px", borderLeftColor: "#ff5500", borderLeftWidth: "2px" }}
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#ff5500] block mb-2">Stack</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Flutter_logo.svg" alt="Flutter" width={18} height={18} />
                <span className="font-bold text-sm uppercase text-white tracking-wide">Flutter</span>
              </div>
              <span className="text-neutral-600 font-bold">·</span>
              <div className="flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/NestJS.svg" alt="NestJS" width={18} height={18} />
                <span className="font-bold text-sm uppercase text-white tracking-wide">NestJS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="border-t border-white/5 pt-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5500] block mb-3">Academic</span>
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white uppercase mb-16">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight mb-3">
              BS INFORMATION<br />TECHNOLOGY
            </h3>
            <div className="w-8 h-0.5 bg-[#ff5500] mb-6" />
            <p className="text-neutral-400 text-sm leading-relaxed">
              Bicol University College of Science<br />
              Legazpi City, Bicol, Philippines
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-white/5 bg-white/[0.02] p-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-500 block mb-1">Period</span>
              <span className="font-display font-black text-xl text-white">2022 — 2026</span>
            </div>
            <div className="border border-[#ff5500]/30 bg-[#ff5500]/5 p-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff5500] block mb-1">Highlight</span>
              <span className="font-bold text-sm text-white leading-tight block">
                Grand Winner — 1st Naga City Mayoral Hackathon
              </span>
              <span className="text-[10px] text-neutral-400 mt-1 block">Social Services Challenge · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
