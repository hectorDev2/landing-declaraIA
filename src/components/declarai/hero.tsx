"use client";

import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, PartyPopper, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDemoClick = () => {
    setError(null);
    fileInputRef.current?.click();
  };

  return (
    <>
      <section id="hero" className="container py-20 md:py-32">
        <div className="grid grid-cols-1 gap-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Tu Declaración a la SUNAT en{" "}
              <span className="text-primary">3 segundos</span>. Solo toma una
              foto.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground font-body">
              Olvídate de los contadores costosos y las multas. Nuestra IA
              procesa tus facturas y las declara automáticamente al SIRE.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                onClick={handleDemoClick}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Probar Demo con una Foto
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
              />
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Más de 500 MYPES confían en nosotros
            </p>
          </div>
        </div>
      </section>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Procesando tu Factura</DialogTitle>
            <DialogDescription>
              Nuestra IA está extrayendo los datos. Esto tomará solo unos
              segundos.
            </DialogDescription>
          </DialogHeader>
          <div className="py-8 min-h-[200px] flex items-center justify-center">
            {isLoading && (
              <div className="flex flex-col items-center justify-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p>Analizando imagen...</p>
              </div>
            )}
            {error && (
              <div className="flex flex-col items-center justify-center gap-4 text-destructive">
                <AlertTriangle className="h-12 w-12" />
                <p className="text-center">{error}</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
