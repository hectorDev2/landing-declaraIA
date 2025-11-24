import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Es seguro enviar mis facturas a través de DeclarAI?",
    answer: "Sí, la seguridad es nuestra máxima prioridad. Utilizamos encriptación de extremo a extremo y almacenamos tus datos en servidores seguros. Nunca compartimos tu información con terceros."
  },
  {
    question: "¿Qué es el SIRE de la SUNAT?",
    answer: "El SIRE (Sistema Integrado de Registros Electrónicos) es el nuevo sistema de la SUNAT para llevar los registros de compras y ventas de forma electrónica, reemplazando al PLE (Programa de Libros Electrónicos)."
  },
  {
    question: "¿Qué tipo de comprobantes puedo procesar?",
    answer: "Actualmente, nuestra IA puede procesar facturas y boletas de venta electrónicas. Estamos trabajando para añadir soporte para más tipos de comprobantes en el futuro."
  },
  {
    question: "¿Qué pasa si la IA comete un error?",
    answer: "Nuestra IA tiene una precisión superior al 99%, pero siempre tienes la opción de revisar y editar los datos extraídos antes de que se envíen a la SUNAT. Esto te da control total y evita multas."
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "Por supuesto. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control, sin preguntas ni penalidades."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes dudas? Aquí encontrarás las respuestas a las preguntas más comunes.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
