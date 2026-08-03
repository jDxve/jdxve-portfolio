import { categories } from "@/lib/data";
import SectionHeader from "@/components/layout/SectionHeader";

// Per-category icon — Flutter mark for Mobile, GitHub octicons for the rest.
function CategoryIcon({ label }: { label: string }) {
  if (label === "Mobile") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/Flutter_logo.svg" alt="" width={19} height={19} />;
  }
  const common = { viewBox: "0 0 16 16", width: 18, height: 18, fill: "currentColor" };
  if (label === "Integrations") {
    // octicon: link
    return (
      <svg {...common}>
        <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0Z" />
      </svg>
    );
  }
  if (label === "Backend") {
    // octicon: stack
    return (
      <svg {...common}>
        <path d="M7.122.392a1.75 1.75 0 0 1 1.756 0l5.003 2.902c.83.481.83 1.68 0 2.162L8.878 8.358a1.75 1.75 0 0 1-1.756 0L2.119 5.456a1.25 1.25 0 0 1 0-2.162L7.122.392ZM8.125 1.69a.25.25 0 0 0-.25 0l-4.63 2.685 4.63 2.685a.25.25 0 0 0 .25 0l4.63-2.685-4.63-2.685ZM1.601 7.789a.75.75 0 0 1 1.025-.273l5.249 3.044a.25.25 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0L1.874 8.814a.75.75 0 0 1-.273-1.025Zm0 3.5a.75.75 0 0 1 1.025-.273l5.249 3.044a.25.25 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0l-5.248-3.044a.75.75 0 0 1-.273-1.025Z" />
      </svg>
    );
  }
  // Tools — octicon: gear
  return (
    <svg {...common}>
      <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.039.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c-.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.161.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.998 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.998-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z" />
    </svg>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 pb-20 scroll-mt-16">
      <SectionHeader eyebrow="Technical Skills" title="Tech Stack" count={String(categories.length).padStart(2, "0")} />

      {/* Category list — icon rail + connector line, matching Projects / Experience */}
      <div className="flex flex-col">
        {categories.map((cat, i) => {
          const last = i === categories.length - 1;
          return (
            <div key={cat.label} className="flex gap-4 md:gap-5">
              {/* Rail: icon tile + connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="grid place-items-center w-12 h-12 rounded-lg border border-line bg-surface text-muted">
                  <CategoryIcon label={cat.label} />
                </div>
                {!last && <span className="w-px flex-1 bg-line mt-2" />}
              </div>

              {/* Content */}
              <div className={`min-w-0 flex-1 ${last ? "pb-0" : "pb-10"}`}>
                <h3 className="font-display font-black text-base md:text-lg text-ink uppercase tracking-tight leading-tight">
                  {cat.label}
                </h3>
                {cat.featured && (
                  <span className="block mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                    Primary Focus
                  </span>
                )}

                {/* Tech — separated by pipes */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4">
                  {cat.items.map((item, j) => (
                    <span key={item} className="flex items-center gap-x-3">
                      {j > 0 && (
                        <span className="text-line-strong select-none" aria-hidden>
                          |
                        </span>
                      )}
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted hover:text-accent transition-colors cursor-default whitespace-nowrap">
                        {item}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
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
