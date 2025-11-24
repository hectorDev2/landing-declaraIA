import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Image
              src="/logo.png"
              alt="DeclarAI"
              width={150}
              height={40}
              className="h-10 w-auto mb-2 mx-auto md:mx-0"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Términos
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
