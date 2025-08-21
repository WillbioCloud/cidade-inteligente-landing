import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Gift, Star } from "lucide-react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Interesse registrado com sucesso! 🎉",
      description: "Nossa equipe entrará em contato em até 2 horas com as condições especiais.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Receba as Condições Especiais
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha seus dados e garanta acesso exclusivo às melhores ofertas de lançamento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Oferta Exclusiva de Lançamento
                  </h3>
                  <p className="text-muted-foreground">
                    Condições especiais válidas apenas para os primeiros interessados
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa equipe especializada irá apresentar as melhores opções para seu perfil
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-lg p-6 border border-success/20">
                <h4 className="font-semibold text-foreground mb-2">🏆 Consultor Especialista</h4>
                <div className="flex items-center space-x-4">
                  <img 
                    src="/lovable-uploads/744396fb-4130-428f-9ec4-d19bcc31b125.png"
                    alt="Consultor especialista do Cidade Inteligente"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">Consultor Credenciado</p>
                    <p className="text-sm text-muted-foreground">+5 anos de experiência em loteamentos</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-gradient p-8 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Tenho Interesse
                </h3>
                <p className="text-muted-foreground">
                  Preencha e receba condições especiais de lançamento
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(61) 9 9999-9999"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero text-lg py-6 group"
                >
                  Quero as Condições Especiais
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Seus dados estão seguros e não serão compartilhados com terceiros
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};