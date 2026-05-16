import { categories } from "@/lib/data";

export default function StackSection() {
  return (
    <section id="stack" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-32">
      <div className="border-t border-white/5 pt-20 mb-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5500] block mb-3">
          Technologies
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        {categories.map((category, ci) => (
          <div
            key={category.label}
            className="group relative bg-[#0d0d0d] p-8 md:p-10 hover:bg-white/[0.015] transition-colors duration-300 overflow-hidden"
          >
            {/* Hover orange top line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-[#ff5500] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Large faded background number */}
            <span className="absolute bottom-4 right-6 font-display font-black text-[110px] leading-none text-white/[0.03] select-none pointer-events-none">
              {ci + 1}
            </span>

            {/* Card header */}
            <div className="mb-8">
              <span className="text-[8px] font-mono tracking-[0.4em] text-neutral-500 block mb-3">
                {String(ci + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-4">
                <div className="w-5 h-0.5 bg-[#ff5500] shrink-0" />
                <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                  {category.label}
                </h3>
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 border border-white/10 px-3 py-1.5 hover:text-white hover:border-[#ff5500]/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 border-t border-white/5 pt-20">
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight mb-6">
            CLEAN CODE.<br />CLEAN ARCHITECTURE.<br />
            <span className="text-[#ff5500]">ALWAYS.</span>
          </p>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Every tool in this stack is chosen deliberately. The goal is always the same — build
            things that are maintainable, scalable, and fast.
          </p>
        </div>
      </div>
    </section>
  );
}
