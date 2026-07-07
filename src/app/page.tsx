import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import WorkSection from "@/components/work/WorkSection";
import ProcessSection from "@/components/process/ProcessSection";
import ContactSection from "@/components/contact/ContactSection";
import FooterSection from "@/components/footer/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
