import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais são as formas de pagamento?",
    answer: "Oferecemos financiamento próprio em até 240 vezes no plano investidor, com uma entrada facilitada de 10% valor total do lote. Também temos pagamento à vista com condições especiais."
  },
  {
    question: "Qual a previsão de entrega da infraestrutura?",
    answer: "A infraestrutura completa do Cidade Inteligente, incluindo asfalto, energia, água e esgoto, já está com as obras aceleradas e a entrega está prevista para até 2028."
  },
  {
    question: "Posso construir imediatamente após a compra do lote?",
    answer: "Está previsto em contrato que após o pagamento da 6ª parcela, você já recebe a posse do lote e pode iniciar o seu projeto de construção, seguindo as normas do loteamento."
  },
  {
    question: "O loteamento é regularizado?",
    answer: "Com certeza. O Cidade Inteligente é um empreendimento 100% regularizado, com todas as licenças e registros aprovados pelos órgãos competentes, garantindo total segurança jurídica para você."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas principais dúvidas sobre o empreendimento Cidade Inteligente.
          </p>
        </div>
        <div className="max-w-3xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};