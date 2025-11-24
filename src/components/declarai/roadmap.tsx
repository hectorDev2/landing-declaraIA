import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Users, Building2 } from "lucide-react";

const roadmapItems = [
  {
    period: "3 Meses",
    title: "MVP y Validación",
    description: "Desarrollo del MVP con lectura automática de comprobantes y generación del resumen tributario.",
    icon: Rocket,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    period: "6 Meses",
    title: "Integración SUNAT",
    description: "Integración directa con la plataforma de SUNAT y lanzamiento del piloto con 50 Mypes.",
    icon: Building2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    period: "12 Meses",
    title: "Escalamiento",
    description: "Alianzas con contadores y gremios (restaurantes, comercio, servicios). Meta: +500 Mypes usuarias.",
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Nuestro Camino (Roadmap)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tenemos un plan claro para revolucionar la contabilidad de las Mypes en el Perú.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                    <CardHeader className="pb-2">
                      <div className={`w-fit px-3 py-1 rounded-full text-xs font-bold mb-2 ${item.bg} ${item.color}`}>
                        {item.period}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary shadow-xl shrink-0">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
