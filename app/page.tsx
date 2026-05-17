import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[#E8E8E8] dark:bg-[#0d0d0d] text-[#0d0d0d] dark:text-white selection:bg-[#ff5500] selection:text-white overflow-hidden">
      <div className="noise-bg" />

      {/* Background logo: Flutter */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Flutter_logo.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none fixed grayscale hidden md:block"
        style={{ left: 0, top: "calc(50vh - 410px)", width: "820px", opacity: 0.30 }}
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
