import { categories } from "@/lib/data";

export default function StackSection() {
  return (
    <section id="stack" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-16 pb-16 scroll-mt-16">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5500] block mb-3">
          Technologies
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#0d0d0d] dark:text-white uppercase">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {categories.map((category, ci) => (
          <div
            key={category.label}
            className="group relative bg-[#E8E8E8] dark:bg-[#1a1a1a] border border-black/8 dark:border-white/10 p-8 md:p-10 hover:bg-white dark:hover:bg-[#222] transition-colors duration-300 overflow-hidden"
          >
            {/* Hover orange top line */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-[#ff5500] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Large faded background number */}
            <span className="absolute bottom-4 right-6 font-display font-black text-[110px] leading-none text-black/[0.04] dark:text-white/[0.04] select-none pointer-events-none">
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
                  className="text-[9px] font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 border border-black/15 dark:border-white/20 bg-white/60 dark:bg-white/[0.05] px-3 py-1.5 hover:text-[#ff5500] hover:border-[#ff5500]/60 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl mb-10">
        <p className="text-2xl md:text-3xl font-display font-black text-[#0d0d0d] dark:text-white uppercase tracking-tight leading-tight mb-6">
          CLEAN CODE.<br />CLEAN ARCHITECTURE.<br />
          <span className="text-[#ff5500]">ALWAYS.</span>
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
          Every tool in this stack is chosen deliberately. The goal is always the same — build
          things that are maintainable, scalable, and fast.
        </p>
      </div>
    </section>
  );
}
