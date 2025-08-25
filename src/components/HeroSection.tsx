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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/Lago.jpg')`
        }}
      />

      {/* Content Card */}
      <div 
        className="relative container max-w-5xl mx-auto px-6 py-12 md:px-8 md:py-16 text-center animate-slide-up bg-blue-900/70 backdrop-blur-sm rounded-2xl shadow-2xl"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-6 h-6 text-primary-foreground" />
            <span className="text-primary-foreground/90 text-lg font-medium">
              Santo Antônio do Descoberto - GO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Chegou a hora de garantir seu espaço no futuro!
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
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

            <div className="flex items-center space-x-2 text-primary-foreground/90 mt-4 sm:mt-0">
              <Zap className="w-5 h-5 text-success" />
              <span className="font-medium">Condições especiais de lançamento</span>
            </div>
          </div>

          {/* --- LINHA MODIFICADA ABAIXO --- */}
          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">+400</h3>
              <p className="text-sm text-primary-foreground/80">Lotes disponíveis</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">100%</h3>
              <p className="text-sm text-primary-foreground/80">Legalizada</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-2 md:p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">0%</h3>
              <p className="text-sm text-primary-foreground/80">Juros no financiamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};