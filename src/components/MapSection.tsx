import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import mapaImage from "/lovable-uploads/be2ca1fc-963e-4694-93b7-d4a397cb01d0.png";

export const MapSection = () => {
  const handlePdfDownload = () => {
    // Create a temporary link to simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'cidade-inteligente-memorial-descritivo.pdf';
    // In a real implementation, this would point to an actual PDF file
    console.log('PDF download would start here');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça o Mapa do Loteamento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a distribuição dos lotes e toda a infraestrutura planejada 
            para o seu novo lar no Cidade Inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Localização Privilegiada
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lotes estrategicamente posicionados com fácil acesso às principais vias 
                  e próximos a centros comerciais e serviços essenciais.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Destaques do Mapa:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Áreas de preservação ambiental</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Espaços para lazer e recreação</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Vias de acesso pavimentadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Infraestrutura completa instalada</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handlePdfDownload}
              className="btn-hero text-lg py-6 px-8 group w-full md:w-auto"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Baixar Memorial Descritivo (PDF)
            </Button>
          </div>

          <Card className="card-gradient p-4 animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={mapaImage}
                alt="Mapa detalhado do loteamento Cidade Inteligente mostrando a distribuição dos lotes, áreas verdes, infraestrutura e acessos"
                className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-lg"></div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Clique na imagem para visualizar em tamanho maior
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};