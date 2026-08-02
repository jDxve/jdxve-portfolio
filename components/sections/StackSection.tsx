import { categories } from "@/lib/data";
import SectionHeader from "@/components/layout/SectionHeader";

export default function StackSection() {
  return (
    <section id="stack" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-20 scroll-mt-16">
      <SectionHeader eyebrow="Technical Skills" title="Tech Stack" count={String(categories.length).padStart(2, "0")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {categories.map((cat) => (
          <div key={cat.label}>
            {/* Header */}
            <div className="flex items-center gap-2.5 border-b border-line pb-3 mb-5">
              {cat.featured && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/Flutter_logo.svg" alt="" width={16} height={16} className="shrink-0" />
              )}
              <h3 className="font-display font-black text-base text-ink uppercase tracking-tight">
                {cat.label}
              </h3>
              {cat.featured && (
                <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  Primary Focus
                </span>
              )}
            </div>

            {/* Blurb (featured) */}
            {cat.featured && cat.blurb && (
              <p className="text-sm text-muted leading-relaxed mb-5">{cat.blurb}</p>
            )}

            {/* Tags — minimal outline chips */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line px-3 py-1 text-xs text-muted hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl">
        <p className="text-2xl md:text-3xl font-display font-black text-ink uppercase tracking-tight leading-tight mb-5">
          CLEAN CODE.<br />CLEAN ARCHITECTURE.<br />
          <span className="text-accent">ALWAYS.</span>
        </p>
        <p className="text-muted text-sm leading-relaxed">
          Every tool in this stack is chosen deliberately. The goal is always the same — build
          things that are maintainable, scalable, and fast.
        </p>
      </div>
    </section>
  );
}
