import { Button } from "@/components/ui/button";
import { Building, Phone, Mail } from "lucide-react";

export const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Cidade Inteligente</h1>
              <p className="text-sm text-muted-foreground">2ª Etapa</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="tel:+5564993232234" className="hover:text-primary transition-colors">
                (64) 99323-2234
              </a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contato@cidadeinteligente.com</span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            Quero Saber Mais
          </Button>
        </div>
      </div>
    </header>
  );
};