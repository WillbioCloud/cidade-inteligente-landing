import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MapSection } from "@/components/MapSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <CountdownTimer />
      <MapSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;