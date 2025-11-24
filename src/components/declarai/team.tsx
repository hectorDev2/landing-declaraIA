import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Khalil Mora",
    role: "Gestión y Liderazgo",
    description: "Ex-emprendedor y gerente. Experiencia en gestión empresarial, comercial y liderazgo. Conoce de primera mano las dificultades tributarias de las Mypes.",
    initials: "KM",
  },
  {
    name: "Nicole Pfocori",
    role: "Marketing y Ventas",
    description: "Experta en marketing digital, ventas y gestión administrativa, incluyendo recursos humanos.",
    initials: "NP",
  },
  {
    name: "Héctor Barazorda",
    role: "Tecnología",
    description: "Desarrollador con trayectoria en startups (alquiler de autos en Chile, e-commerce en Perú) y creación de aplicativos para Mypes.",
    initials: "HB",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Somos un equipo complementario formado en la <span className="font-bold text-primary">UNSAAC</span>, con experiencia directa en gestión, tecnología y marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-none shadow-md bg-background">
              <CardHeader className="flex flex-col items-center pb-2">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary/10">
                  <AvatarImage src={`/team/${member.initials.toLowerCase()}.jpg`} />
                  <AvatarFallback className="text-2xl font-bold bg-primary/5 text-primary">{member.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                <Badge variant="secondary" className="mt-2">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
