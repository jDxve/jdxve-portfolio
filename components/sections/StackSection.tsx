import { categories } from "@/lib/data";

export default function StackSection() {
  return (
    <section id="stack" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-32">
      <div className="border-t border-black/10 dark:border-white/10 pt-20 mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5500] block mb-3">
          Technologies
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#0d0d0d] dark:text-white uppercase">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8 dark:bg-[#0d0d0d]">
        {categories.map((category, ci) => (
          <div
            key={category.label}
            className="group relative bg-[#E8E8E8] dark:bg-[#111] p-8 md:p-10 hover:bg-white dark:hover:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden"
          >
            {/* Hover orange top line */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-[#ff5500] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Large faded background number */}
            <span className="absolute bottom-4 right-6 font-display font-black text-[110px] leading-none text-black/[0.04] select-none pointer-events-none">
              {ci + 1}
            </span>

            {/* Card header */}
            <div className="mb-8">
<div className="flex items-center gap-4">
                <div className="w-5 h-0.5 bg-[#ff5500] shrink-0" />
                <h3 className="font-display font-black text-2xl md:text-3xl text-[#0d0d0d] dark:text-white uppercase tracking-tight">
                  {category.label}
                </h3>
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.06] px-3 py-1.5 hover:text-[#ff5500] hover:border-[#ff5500]/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 max-w-2xl mb-16">
        <p className="text-2xl md:text-3xl font-display font-black text-[#0d0d0d] dark:text-white uppercase tracking-tight leading-tight mb-6">
          CLEAN CODE.<br />CLEAN ARCHITECTURE.<br />
          <span className="text-[#ff5500]">ALWAYS.</span>
        </p>
        <p className="text-neutral-500 text-sm leading-relaxed">
          Every tool in this stack is chosen deliberately. The goal is always the same — build
          things that are maintainable, scalable, and fast.
        </p>
      </div>
      <div className="border-t border-black/10 dark:border-white/10" />
    </section>
  );
}
