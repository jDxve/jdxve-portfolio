import Header from "@/components/layout/Header";
import AiChat from "@/components/layout/AiChat";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-surface text-ink selection:bg-accent selection:text-white overflow-hidden md:pl-[130px] pb-20 md:pb-0">
      {/* Military-grade grain texture */}
      <div className="noise-bg" />

      <Header />
      <AboutSection />
      <WorkSection />
      <StackSection />
      <ContactSection />
      <AiChat />
    </main>
  );
}
