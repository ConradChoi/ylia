import { LanguageProvider } from "@/contexts/LanguageContext";
import Header       from "@/components/layout/Header";
import Footer       from "@/components/layout/Footer";
import HeroSection  from "@/components/sections/HeroSection";
import TrustBar     from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection    from "@/components/sections/AboutSection";
import ContactSection  from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
