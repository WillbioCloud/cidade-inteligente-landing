import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Família Silva",
    avatar: "https://github.com/shadcn.png",
    text: "Comprar nosso lote no Cidade Inteligente foi a melhor decisão que tomamos. A infraestrutura é impecável e a valorização já é uma realidade!",
    rating: 5,
  },
  {
    name: "Marcos Andrade",
    avatar: "https://github.com/shadcn.png",
    text: "O financiamento facilitado foi um grande diferencial. Consegui realizar o sonho de investir em um terreno com parcelas que cabem no meu bolso.",
    rating: 5,
  },
  {
    name: "Ana Pereira",
    avatar: "https://github.com/shadcn.png",
    text: "A localização é perfeita, perto de tudo que preciso e com fácil acesso a Brasília. Recomendo a todos que buscam qualidade de vida.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação de quem já garantiu seu futuro no Cidade Inteligente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-gradient p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};