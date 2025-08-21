import { Card } from "@/components/ui/card";
import { Zap, Navigation, Trees, Shield, Droplets, Wifi } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Energia Elétrica",
      description: "Rede elétrica completa e iluminação pública"
    },
    {
      icon: Navigation,
      title: "Pavimentação",
      description: "Ruas pavimentadas com asfalto de qualidade"
    },
    {
      icon: Droplets,
      title: "Saneamento",
      description: "Água tratada e esgoto sanitário"
    },
    {
      icon: Trees,
      title: "Áreas Verdes",
      description: "Parques e praças preservadas"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Sistema de segurança 24h"
    },
    {
      icon: Wifi,
      title: "Internet",
      description: "Fibra óptica em todo o loteamento"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre o Empreendimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A segunda etapa do Cidade Inteligente representa o futuro do desenvolvimento urbano sustentável. 
            Localizado estrategicamente em Santo Antônio do Descoberto, oferece infraestrutura completa 
            e potencial de valorização excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">
              Localização Estratégica
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Situado em uma das regiões de maior crescimento do Distrito Federal, 
              o Cidade Inteligente oferece fácil acesso a Brasília, com transporte público 
              eficiente e proximidade a comércios, escolas e serviços de saúde.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">15 min do centro de Santo Antônio do Descoberto</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">30 min de Brasília</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Próximo a escolas, hospitais e shopping</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src="/lovable-uploads/3cb4a2e6-6842-458a-9868-510de2dde941.png"
              alt="Entrada moderna do Cidade Inteligente"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};