export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-faint block mb-2.5">
          {eyebrow}
        </span>
      )}
      <div className="flex items-center gap-2.5 border-b border-line pb-3">
        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-ink uppercase leading-none">
          {title}
        </h2>
      </div>
    </div>
  );
}
