import { Card } from "@/components/ui/card";
import { Zap, Navigation, Trees, Waves, Mic2, Shield, Droplets, Wifi, Hospital, GraduationCap, IdCard, Eye } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const features = [
    {
      icon: Hospital,
      title: "Secretaria da Saúde",
      description: "As suas responsabilidades incluem a gestão de hospitais e postos de saúde, campanhas de prevenção de doenças, vigilância sanitária e epidemiológica, e o apoio técnico e financeiro aos municípios. "
    },
    {
      icon: GraduationCap,
      title: "Secretaria da Educação",
      description: "Responsável por formular e implementar políticas educacionais, garantir a qualidade do ensino, promover a inclusão e a equidade, além de apoiar o desenvolvimento profissional dos educadores."
    },
    {
      icon: IdCard,
      title: "Poupa-Tempo",
      description: "Oferece uma variedade de serviços públicos em um único local, facilitando o acesso dos cidadãos a serviços como emissão de documentos, atendimento ao consumidor, serviços de saúde, entre outros."
    },
    {
      icon: Mic2,
      title: "Auditório",
      description: "Espaço moderno e equipado para eventos, palestras e reuniões, promovendo a integração e o desenvolvimento comunitário."
    },
    {
      icon: Shield,
      title: "Batalhão da Polícia Militar",
      description: "Garantia de segurança e ordem pública, com atuação preventiva e repressiva, além de projetos comunitários para fortalecer a relação entre a polícia e a população."
    },
    {
      icon: Waves,
      title: "Lago Artificial",
      description: "Lago artificial de 30.000 m² com calçadão e praia artificial de areia branca."
    },
  ];

  const featureImages: { [key: string]: string } = {
    "Secretaria da Saúde": "/lovable-uploads/Secretaria da Saúde.webp",
    "Secretaria da Educação": "/lovable-uploads/Secretaria da Educação.webp",
    "Poupa-Tempo": "/lovable-uploads/Poupa Tempo.webp",
    "Auditório": "/lovable-uploads/Auditório.webp",
    "Batalhão da Polícia Militar": "/lovable-uploads/Batalhão da Polícia Militar.webp",
    "Lago Artificial": "/lovable-uploads/Lago.jpg",
  };

  const handleCardClick = (title: string) => {
    if (window.innerWidth < 1024) { // Applies only to mobile/tablet devices
      setActiveCard(activeCard === title ? null : title);
    }
  };

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
            const isActive = activeCard === feature.title;

            return (
              <Card
                key={index}
                className="card-gradient p-6 text-center animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveCard(feature.title)}
                onMouseLeave={() => window.innerWidth >= 1024 && setActiveCard(null)}
                onClick={() => handleCardClick(feature.title)}
              >
                <div className={`transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={featureImages[feature.title]} alt={feature.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center">
                    
                  </div>
                </div>
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
              src="/lovable-uploads/Localização-estratégica.png"
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