import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
      </main>
    </>
  );
}
