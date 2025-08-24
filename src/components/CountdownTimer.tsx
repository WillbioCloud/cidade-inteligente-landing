import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-04T00:00:00");
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Oferta por Tempo Limitado
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Condições especiais de lançamento válidas até 04 de Setembro de 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* AQUI ESTÁ A MUDANÇA: troquei 'grid' por 'flex' e ajustei o espaçamento */}
          <div className="flex flex-row justify-center gap-2 md:gap-6">
            {timeUnits.map((unit, index) => (
              <Card 
                key={unit.label} 
                className="card-gradient p-3 md:p-6 text-center animate-fade-in border-primary/20 flex-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {unit.label}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-foreground mb-2">
              🎯 Não perca esta oportunidade única!
            </p>
            <p className="text-muted-foreground">
              Lotes com condições especiais e entrada facilitada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};