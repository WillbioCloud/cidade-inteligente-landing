import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap } from "lucide-react";

export const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(200 90% 45% / 0.9), hsl(120 65% 35% / 0.9)), url('/lovable-uploads/6c46da27-55e8-45db-8fc6-0fea31792261.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-6 h-6 text-primary-foreground" />
            <span className="text-primary-foreground/90 text-lg font-medium">
              Santo Antônio do Descoberto - GO
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Chegou a hora de garantir seu espaço no futuro!
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Lotes planejados com valorização garantida e financiamento facilitado na melhor localização de Santo Antônio do Descoberto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToForm}
              className="btn-hero text-lg px-8 py-4 group"
            >
              Reserve já seu lote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-2 text-primary-foreground/90">
              <Zap className="w-5 h-5 text-success" />
              <span className="font-medium">Condições especiais de lançamento</span>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">200+</h3>
              <p className="text-primary-foreground/80">Lotes disponíveis</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">100%</h3>
              <p className="text-primary-foreground/80">Infraestrutura completa</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">0%</h3>
              <p className="text-primary-foreground/80">Juros no financiamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};