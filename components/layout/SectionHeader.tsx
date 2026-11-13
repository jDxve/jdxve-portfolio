export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      {eyebrow && (
        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-faint block mb-2 sm:mb-2.5">
          {eyebrow}
        </span>
      )}
      <div className="flex items-center gap-2.5 border-b border-line pb-2.5 sm:pb-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-tight text-ink uppercase leading-none">
          {title}
        </h2>
      </div>
    </div>
  );
}
