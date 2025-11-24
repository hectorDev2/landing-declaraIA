import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary">DeclarAI</p>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Términos</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacidad</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          DeclarAI_Area_de_Software
        </div>
      </div>
    </footer>
  );
}
