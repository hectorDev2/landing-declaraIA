import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const navLinks = [
    { href: "#features", label: "Características" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#pricing", label: "Precios" },
    { href: "#team", label: "Equipo" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center">
            <Image
              src="/logo.png"
              alt="DeclaraIA"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button>Empezar Gratis</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 text-lg font-medium p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image
                    src="/logo.png"
                    alt="DeclaraIA"
                    width={150}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4">Empezar Gratis</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
