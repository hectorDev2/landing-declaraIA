import { Smartphone, BrainCircuit, Landmark, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "1. Toma la Foto",
    description: "Sube tu factura o boleta desde el celular.",
  },
  {
    icon: BrainCircuit,
    title: "2. La IA Procesa",
    description: "Nuestra IA extrae RUC, Montos e IGV automáticamente.",
  },
  {
    icon: Landmark,
    title: "3. Declarado a SUNAT",
    description: "Se envía directo al SIRE. Sin errores.",
  },
];

export function HowItWorks() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En solo tres simples pasos, tus declaraciones están listas. Rápido, fácil y sin errores.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-x-8 gap-y-16 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 left-1/2 w-full text-primary/30 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
