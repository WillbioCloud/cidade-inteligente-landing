import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  {
    src: "/lovable-uploads/6c46da27-55e8-45db-8fc6-0fea31792261.png",
    alt: "Vista aérea do loteamento Cidade Inteligente",
    description: "Vista aérea completa do empreendimento"
  },
  {
    src: "/lovable-uploads/3cb4a2e6-6842-458a-9868-510de2dde941.png",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Pórtico de entrada moderno e imponente"
  },
  {
    src: "/lovable-uploads/be2ca1fc-963e-4694-93b7-d4a397cb01d0.png",
    alt: "Mapa ilustrativo do Cidade Inteligente",
    description: "Mapa ilustrativo com áreas de lazer e infraestrutura"
  },
];

export const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galeria de Imagens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja de perto todos os detalhes que fazem do Cidade Inteligente o lugar perfeito para você.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto animate-slide-up">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="p-4 card-gradient">
                  <img src={image.src} alt={image.alt} className="rounded-lg w-full h-auto shadow-lg" />
                  <p className="text-center mt-4 text-muted-foreground font-medium">{image.description}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};