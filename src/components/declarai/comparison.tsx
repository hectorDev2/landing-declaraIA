"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  Wallet, 
  CalendarClock, 
  Zap,
  ShieldCheck,
  PiggyBank,
  History,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    feature: "Velocidad",
    icon: Clock,
    traditional: "Manual y lento (Horas)",
    declarai: "Automático (Segundos)",
    declaraiIcon: Zap
  },
  {
    feature: "Precisión",
    icon: AlertTriangle,
    traditional: "Errores humanos frecuentes",
    declarai: "Validación IA sin errores",
    declaraiIcon: ShieldCheck
  },
  {
    feature: "Costo",
    icon: Wallet,
    traditional: "Contador costoso + Multas",
    declarai: "Suscripción accesible",
    declaraiIcon: PiggyBank
  },
  {
    feature: "Disponibilidad",
    icon: CalendarClock,
    traditional: "Lunes a Viernes, 9-6",
    declarai: "24/7, Todo el año",
    declaraiIcon: History
  },
];

export function Comparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="comparison"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            ¿Por qué elegir DeclarAI?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La diferencia es clara. Deja atrás los métodos obsoletos y pásate al
            futuro de la contabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Traditional Way (Left) */}
          <div className="lg:col-span-5">
            <Card className="border-destructive/10 bg-white/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                <XCircle className="w-48 h-48 text-destructive" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-slate-500 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Método Tradicional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 rounded-lg border transition-all duration-300",
                      hoveredIndex === index 
                        ? "bg-destructive/5 border-destructive/30 scale-[1.02] shadow-sm" 
                        : "bg-transparent border-transparent opacity-70"
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <item.icon className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.feature}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600">{item.traditional}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* VS Connector (Center) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4 text-center py-4 lg:py-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-[1px] left-1/2 -translate-x-1/2 hidden lg:block h-[300px]"></div>
              <div className="rounded-full bg-white border-4 border-slate-100 p-3 shadow-xl relative z-10">
                <span className="text-xl font-black text-slate-300">VS</span>
              </div>
            </div>
          </div>

          {/* DeclarAI Way (Right) */}
          <div className="lg:col-span-5">
            <Card className="border-primary/20 bg-white shadow-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ring-1 ring-primary/10">
              <div className="absolute top-0 right-0">
                <Badge className="rounded-tl-none rounded-br-none px-4 py-1.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary">
                  Recomendado
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Con DeclarAI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 rounded-lg border transition-all duration-300 cursor-default",
                      hoveredIndex === index 
                        ? "bg-primary/5 border-primary/30 scale-[1.02] shadow-md" 
                        : "bg-slate-50/50 border-transparent"
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <item.declaraiIcon className={cn("w-4 h-4 transition-colors", hoveredIndex === index ? "text-primary" : "text-slate-400")} />
                        <span className={cn("text-xs font-bold uppercase tracking-wider transition-colors", hoveredIndex === index ? "text-primary" : "text-slate-400")}>
                          {item.feature}
                        </span>
                      </div>
                      {hoveredIndex === index && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 animate-in fade-in zoom-in duration-300" />
                      )}
                    </div>
                    <p className={cn("text-sm font-bold transition-colors", hoveredIndex === index ? "text-slate-800" : "text-slate-600")}>
                      {item.declarai}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
