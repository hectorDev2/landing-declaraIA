import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Un precio simple para tu tranquilidad
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige el plan que se adapte a tu negocio y empieza a ahorrar tiempo y dinero hoy mismo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg bg-background flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Plan MYPE</CardTitle>
              <CardDescription>Perfecto para micro y pequeñas empresas.</CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-1">
              <div className="my-4">
                <span className="text-5xl font-bold">S/ 100</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-3 text-left mt-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Declaraciones ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Procesamiento IA de facturas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Envío automático al SIRE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Soporte por email y chat</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Empezar Ahora
              </Button>
            </CardFooter>
          </Card>
          <Card className="shadow-lg border-2 border-primary bg-background flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contador Pro</CardTitle>
              <CardDescription>Para contadores y estudios contables.</CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-1">
              <div className="my-4 flex items-center justify-center h-[60px]">
                <span className="text-3xl font-bold">Consultar</span>
              </div>
              <ul className="space-y-3 text-left mt-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Todo en el Plan MYPE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Múltiples clientes (empresas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Reportes consolidados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Soporte prioritario</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                Contactar Ventas
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
