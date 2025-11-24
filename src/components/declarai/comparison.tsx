import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    feature: "Proceso",
    traditional: "Manual y lento",
    declarai: "Automático e instantáneo",
  },
  {
    feature: "Errores",
    traditional: "Alto riesgo humano",
    declarai: "Validación IA precisa",
  },
  {
    feature: "Costo",
    traditional: "Contador + Multas",
    declarai: "Suscripción económica",
  },
  {
    feature: "Disponibilidad",
    traditional: "Horario de oficina",
    declarai: "24/7",
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            ¿Por qué elegir DeclarAI?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La diferencia es clara. Deja atrás los métodos obsoletos y pásate al futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Traditional Way */}
          <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <XCircle className="w-32 h-32 text-destructive" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-destructive text-center">Tradicional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-destructive/10 pb-2 last:border-0">
                  <span className="text-sm font-medium text-muted-foreground">{item.feature}</span>
                  <span className="text-sm font-semibold text-destructive/80 text-right">{item.traditional}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* VS Badge */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-muted p-4 shadow-inner">
              <span className="text-2xl font-black text-muted-foreground">VS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[200px]">
              Compara y descubre por qué somos la mejor opción para tu negocio.
            </p>
          </div>

          {/* DeclarAI Way */}
          <Card className="border-primary bg-background shadow-xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-0">
              <Badge className="rounded-tl-none rounded-br-none px-4 py-1 text-sm">Recomendado</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">DeclarAI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-primary/10 pb-2 last:border-0">
                  <span className="text-sm font-medium text-muted-foreground">{item.feature}</span>
                  <div className="flex items-center gap-2 text-right">
                    <span className="text-sm font-bold text-primary">{item.declarai}</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
