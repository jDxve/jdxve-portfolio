import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-surface text-ink selection:bg-accent selection:text-white overflow-hidden">
      {/* Military-grade grain texture */}
      <div className="noise-bg" />

      {/* Flutter logo watermark — light-mode background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Flutter_logo.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none fixed grayscale opacity-[0.14] z-0"
        style={{ left: "-120px", top: "calc(50vh - 360px)", width: "720px" }}
      />
      <Header />
      <AboutSection />
      <WorkSection />
      <StackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
