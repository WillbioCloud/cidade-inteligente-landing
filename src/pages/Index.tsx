import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { GallerySection } from "@/components/GallerySection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MapSection } from "@/components/MapSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <GallerySection />
      <CountdownTimer />
      <MapSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;