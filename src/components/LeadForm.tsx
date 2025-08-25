import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Gift, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    lotPreference: "",
    income: "",
    type: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Updated validation to include new fields
    if (!formData.name || !formData.phone || !formData.email || !formData.lotPreference || !formData.income || !formData.type) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para continuar.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Save lead to Supabase, including new fields
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            lot_preference: formData.lotPreference, // Assuming snake_case for db columns
            income_range: formData.income,
            property_type: formData.type,
          }
        ]);

      if (error) throw error;

      // Send WhatsApp message with all the new details
      const whatsappNumber = "5564999232217";
      const message = `
Novo interessado no Cidade Inteligente!

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}

*Preferência de Lote:* ${formData.lotPreference}
*Renda:* ${formData.income}
*Tipo de Imóvel:* ${formData.type}

Por favor, entre em contato para apresentar as condições especiais.
      `.trim();
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Interesse registrado com sucesso! 🎉",
        description: "Nossa equipe entrará em contato em até 2 horas com as condições especiais.",
      });

      // Reset form including new fields
      setFormData({ name: "", phone: "", email: "", lotPreference: "", income: "", type: "" });
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: "Erro ao registrar interesse",
        description: "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handlers for Select components
  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
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
                    Condições especiais válidas apenas para os cadastros vips.
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
                    Meu trabalho é te apresentar as melhores opções para seu perfil.
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
            
            <div className="animated-border-card animate-fade-in">
              <Card className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Tenho Interesse
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha e receba condições especiais de lançamento
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Nome completo *</Label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">WhatsApp *</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(61) 9 9999-9999" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">E-mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" className="mt-2" />
                  </div>

                  {/* --- NOVOS CAMPOS ADICIONADOS --- */}
                  <div>
                    <Label className="text-foreground font-medium">Preferência de Lote *</Label>
                    <Select value={formData.lotPreference} onValueChange={handleSelectChange('lotPreference')}>
                        <SelectTrigger className="mt-2"><SelectValue placeholder="Selecione uma preferência" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Frente para o Lago">De frente para o Lago</SelectItem>
                            <SelectItem value="Avenida Comercial">Lote na Avenida Comercial</SelectItem>
                            <SelectItem value="Mais barato">O lote mais barato</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-foreground font-medium">Renda Mensal *</Label>
                    <Select value={formData.income} onValueChange={handleSelectChange('income')}>
                        <SelectTrigger className="mt-2"><SelectValue placeholder="Selecione sua faixa de renda" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Prefiro não informar">Prefiro não informar</SelectItem>
                            <SelectItem value="Até R$ 5.000">até R$ 5.000,00</SelectItem>
                            <SelectItem value="R$ 5.000 a R$ 10.000">De R$ 5.000,00 até R$ 10.000,00</SelectItem>
                            <SelectItem value="R$ 10.000 a R$ 15.000">De R$ 10.000,00 até R$ 15.000,00</SelectItem>
                            <SelectItem value="R$ 15.000 a R$ 20.000">De R$ 15.000,00 até R$ 20.000,00</SelectItem>
                            <SelectItem value="R$ 20.000 a R$ 50.000">De R$ 20.000,00 até R$ 50.000,00</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-foreground font-medium">Tipo de Imóvel *</Label>
                    <Select value={formData.type} onValueChange={handleSelectChange('type')}>
                        <SelectTrigger className="mt-2"><SelectValue placeholder="Selecione o tipo" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Lote">Lote</SelectItem>
                            <SelectItem value="Imóvel pronto">Imóvel pronto</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  {/* --- FIM DOS NOVOS CAMPOS --- */}

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full btn-hero text-lg py-6 group !mt-6"
                  >
                    {isLoading ? "Enviando..." : "Quero as Condições Especiais"}
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center !mt-4">
                    Seus dados estão seguros e não serão compartilhados com terceiros
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};