import { Building, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cidade Inteligente</h3>
                <p className="text-sm text-background/70">2ª Etapa</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              O futuro do desenvolvimento urbano sustentável em Santo Antônio do Descoberto.
              Lotes com infraestrutura completa e valorização garantida.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+5564993232234" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  (64) 99323-2234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">contato@cidadeinteligente.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80">Santo Antônio do Descoberto - GO</span>
                <a
                  href="https://maps.app.goo.gl/3a3gzUomDvtiafDq8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2">
              <p className="text-background/80">Segunda à Domingo</p>
              <p className="text-sm text-background/60">7h às 22h</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5564993232234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/80 hover:text-success transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.instagram.com/ricardocorretorfbz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-background/80 hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-background/90 font-medium mb-2">🏆 Corretor Credenciado</p>
              <p className="text-xs text-background/70">
                CRECI-GO: 12345 • Especialista em loteamentos
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Cidade Inteligente. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};