import GridLines from "@/components/layout/GridLines";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[#0d0d0d] text-white selection:bg-[#ff5500] selection:text-white">
      <div className="noise-bg" />
      <div className="scanline" />
      <GridLines />
      <Header />
      <AboutSection />
      <WorkSection />
      <StackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
