import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  {
    src: "/lovable-uploads/6c46da27-55e8-45db-8fc6-0fea31792261.png",
    alt: "Vista aérea do loteamento Cidade Inteligente",
    description: "Vista aérea da Avenida Comercial/Parque Linear"
  },
  {
    src: "/lovable-uploads/Secretaria da Educação.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Secretaria da Educação"
  },{
    src: "/lovable-uploads/Secretaria da Saúde.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Secretaria da Saúde"
  },
  {
    src: "/lovable-uploads/Poupa Tempo.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Poupa Tempo para serviços públicos"
  },
  {
    src: "/lovable-uploads/Batalhão da Polícia Militar.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Batalhão da Polícia Militar"
  },
  {
    src: "/lovable-uploads/3cb4a2e6-6842-458a-9868-510de2dde941.png",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Capela Enumênica"
  },
  {
    src: "/lovable-uploads/Auditório.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Auditório para eventos e reuniões"
  },
  {
    src: "/lovable-uploads/Banco de Mudas.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Banco de Mudas para preservação ambiental"
  },
  {
    src: "/lovable-uploads/Pet-Place.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Pet Place com área de lazer para cães"
  },
  {
    src: "/lovable-uploads/Quadra Poliesportiva.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Quadra Poliesportiva"
  },
  {
    src: "/lovable-uploads/Quadra de Tênis.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Quadra de Tênis"
  },
  {
    src: "/lovable-uploads/Quadra de Areia.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Quadra de Vôlei de Areia"
  },
  {
    src: "/lovable-uploads/Praça Azul TEA.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Praça Azul com brinquedos adaptados para crianças do espectro autista (TEA)"
  },
  {
    src: "/lovable-uploads/Praça de Jogos.webp",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Praça de Jogos"
  },
  {
    src: "/lovable-uploads/Lago.jpg",
    alt: "Entrada moderna do Cidade Inteligente",
    description: "Lago Artificial com praia de areia branca"
  }
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