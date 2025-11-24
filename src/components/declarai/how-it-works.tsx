import { Smartphone, BrainCircuit, Landmark, ArrowRight, FileText, PieChart } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "1. Captura o Sube",
    description: "Toma fotos o sube tus comprobantes en PDF. El sistema acepta ambos formatos para tu comodidad.",
  },
  {
    icon: BrainCircuit,
    title: "2. Clasificación y Extracción",
    description: "La IA reconoce cada documento, clasifica si es venta o compra, y extrae montos y fechas automáticamente.",
  },
  {
    icon: PieChart,
    title: "3. Resumen Tributario",
    description: "Se arma automáticamente el resumen del mes: ventas, compras e IGV, listo para declarar.",
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
            El emprendedor toma fotos o sube sus comprobantes en PDF. La IA reconoce cada documento, clasifica si es venta o compra, extrae los montos y fechas, y arma automáticamente el resumen tributario del mes. Con esa información, el sistema genera la declaración lista para presentar ante la SUNAT, en solo minutos y sin hacer cálculos manuales.
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
