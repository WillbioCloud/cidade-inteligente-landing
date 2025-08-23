import { Card } from "@/components/ui/card";
import { TrendingUp, CreditCard, Shield, MapPin, Calendar, Building2, Trees } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Valorização expressiva",
      description: "Alguns lotes tiveram +316% de valorização, com médias anuais de até 45% a 70%, mostrando grande potencial de retorno sobre o investimento.",
      highlight: "+316% comprovado."
    },
    {
      icon: Building2,
      title: "Infraestrutura completa e moderna",
      description: "Inclui asfalto CBUQ, rede de água, esgoto, iluminação 100% LED, galerias pluviais, ciclovia, irrigação automatizada e sistema de monitoramento interligado à PM.",
      highlight: "Top Infra"
    },
    {
      icon: Trees,
      title: "Grande área de lazer e bem-estar",
      description: "Lago artificial de 30.000 m², calçadão de 1,7 km, praças temáticas (inclusive para TEA), quadras esportivas, academia ao ar livre, espaço PET e áreas de convivência.",
      highlight: "Lazer Total"
    },
    {
      icon: Shield,
      title: "Documentação Limpa",
      description: "Todos os registros e licenças em dia, garantindo total segurança jurídica",
      highlight: "R$ 399/mês"
    },
    {
      icon: Calendar,
      title: "Entrega Imediata",
      description: "Lotes prontos para construção com infraestrutura completa disponível",
      highlight: "Sustentável"
    },
    {
      icon: Calendar,
      title: "Entrega Imediata",
      description: "Lotes prontos para construção com infraestrutura completa disponível",
      highlight: "Avenida 1,7 km"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher o Cidade Inteligente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos as melhores condições do mercado com total transparência e segurança 
            para você realizar o sonho da casa própria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient p-8 text-center relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-primary to-success text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-success rounded-2xl p-8 md:p-12 text-center animate-slide-up">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Condições Especiais de Lançamento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-2xl font-bold text-primary-foreground mb-2">20%</h4>
              <p className="text-primary-foreground/90">de entrada facilitada</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-2xl font-bold text-primary-foreground mb-2">120x</h4>
              <p className="text-primary-foreground/90">parcelas sem juros</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-2xl font-bold text-primary-foreground mb-2">0%</h4>
              <p className="text-primary-foreground/90">de taxa administrativa</p>
            </div>
          </div>
          
          <p className="text-lg text-primary-foreground/90 mb-6">
            ⚡ Oferta por tempo limitado - Apenas os primeiros 50 lotes
          </p>
        </div>
      </div>
    </section>
  );
};