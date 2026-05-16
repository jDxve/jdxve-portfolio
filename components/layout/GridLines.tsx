export default function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-evenly">
      <div className="w-px h-full bg-white/[0.03]" />
      <div className="w-px h-full bg-white/[0.03]" />
      <div className="w-px h-full bg-white/[0.03]" />
      <div className="w-px h-full bg-white/[0.03]" />
    </div>
  );
}
