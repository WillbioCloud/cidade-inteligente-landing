import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import mapaImage from "/lovable-uploads/MAPA CIDADE INTELIGENTE_page-0001.jpg";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const MapSection = () => {
  const { toast } = useToast();

  const handlePdfDownload = () => {
    const link = document.createElement('a');
    link.href = 'REVISTA-DIGITAL.pdf'; // Link para o arquivo PDF na pasta public
    link.download = 'REVISTA-DIGITAL.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Iniciado",
      description: "A revista digital será baixada em breve.",
    });
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
                  <span className="text-foreground">Polos públicos</span>
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
                  <span className="text-foreground">Lago e lotes demarcados</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={handlePdfDownload}
              className="btn-hero text-lg py-6 px-8 group w-full md:w-auto"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Baixar Revista Digital (PDF)
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="card-gradient p-4 animate-fade-in cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={mapaImage}
                    alt="Mapa detalhado do loteamento Cidade Inteligente mostrando a distribuição dos lotes, áreas verdes, infraestrutura e acessos"
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-lg"></div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Clique na imagem para ampliar e interagir
                </p>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-screen-xl w-full h-[90vh] p-4 bg-background/80 backdrop-blur-sm border-none">
                <TransformWrapper>
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      <div className="absolute top-4 right-14 z-10 flex gap-2">
                          <Button onClick={() => zoomIn()} size="icon" className="bg-primary/80 hover:bg-primary"><ZoomIn /></Button>
                          <Button onClick={() => zoomOut()} size="icon" className="bg-primary/80 hover:bg-primary"><ZoomOut /></Button>
                          <Button onClick={() => resetTransform()} size="icon" className="bg-secondary/80 hover:bg-secondary"><RotateCcw /></Button>
                      </div>
                      <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full">
                        <img
                          src="/lovable-uploads/MAPA CIDADE INTELIGENTE_page-0001.jpg"
                          alt="Mapa detalhado do loteamento Cidade Inteligente"
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
};