import { Button } from "@/components/ui/button";
import { Building, Phone, Mail, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Cidade Inteligente</h1>
              <p className="text-sm text-muted-foreground">2ª Etapa</p>
            </div>
          </div>
          
          {/* Contato para Desktop */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a 
              href="https://wa.me/5561993232234" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(64) 99323-2234</span>
            </a>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contato@cidadeinteligente.com</span>
            </div>
          </div>
          
          {/* CTA para Desktop */}
          <Button 
            onClick={scrollToForm}
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            Quero Saber Mais
          </Button>

          {/* Menu para Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col h-full p-4">
                  <h2 className="text-lg font-semibold mb-6">Contato</h2>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://wa.me/5561993232234" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(64) 99323-2234</span>
                    </a>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                      <span>contato@cidadeinteligente.com</span>
                    </div>
                  </div>
                  <Button 
                    onClick={scrollToForm}
                    className="mt-auto w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Quero Saber Mais
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};