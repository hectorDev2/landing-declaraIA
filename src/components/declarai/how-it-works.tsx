"use client";

import { useState, useEffect } from "react";
import {
  Smartphone,
  BrainCircuit,
  PieChart,
  Upload,
  FileText,
  CheckCircle2,
  ScanLine,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    icon: Smartphone,
    title: "1. Captura o Sube",
    description:
      "Toma fotos o sube tus comprobantes en PDF. El sistema acepta ambos formatos para tu comodidad.",
    visual: (
      <div className="relative flex items-center justify-center h-full w-full bg-slate-100/50 rounded-lg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* The Receipt (Physical) */}
        <div className="relative z-0 w-40 bg-white shadow-md rounded-sm border border-slate-200 p-3 rotate-[-6deg] translate-y-8 translate-x-[-20px]">
          <div className="h-1.5 w-8 bg-slate-300 rounded mb-3 mx-auto"></div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-slate-100 rounded"></div>
            <div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
            <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
            <div className="h-1.5 w-full bg-slate-100 rounded"></div>
          </div>
          <div className="mt-4 border-t border-dashed border-slate-300 pt-2 flex justify-between">
            <div className="h-1.5 w-6 bg-slate-200 rounded"></div>
            <div className="h-1.5 w-10 bg-slate-300 rounded"></div>
          </div>
        </div>

        {/* The Phone Scanning */}
        <div className="absolute z-10 bg-slate-900 rounded-[1.5rem] border-[4px] border-slate-800 shadow-2xl h-56 w-32 flex flex-col overflow-hidden translate-x-6 -translate-y-2">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-12 bg-black rounded-b-lg z-20"></div>

          {/* Screen Content */}
          <div className="flex-1 bg-slate-800 relative overflow-hidden flex flex-col items-center">
            {/* Camera Viewfinder UI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
              <div className="w-full h-full border border-white/30 rounded-lg relative">
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400"></div>

                {/* Scan Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              </div>
            </div>

            {/* Receipt Preview inside phone (blurred/dimmed) */}
            <div className="mt-8 w-16 h-20 bg-white/10 rounded-sm rotate-[-6deg]"></div>

            {/* Shutter Button */}
            <div className="absolute bottom-3">
              <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-6 w-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Upload Option Bubble */}
        <div className="absolute top-6 right-6 bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce">
          <div className="bg-red-50 p-1 rounded-md">
            <FileText className="h-4 w-4 text-red-500" />
          </div>
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            O sube PDF
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: BrainCircuit,
    title: "2. Clasificación y Extracción",
    description:
      "La IA reconoce cada documento, clasifica si es venta o compra, y extrae montos y fechas automáticamente.",
    visual: (
      <div className="relative flex items-center justify-center h-full w-full bg-slate-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#1e293b_1px)] bg-[size:20px_20px] opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="relative">
            <ScanLine className="h-24 w-24 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse"></div>
          </div>
          <div className="bg-slate-800/90 backdrop-blur px-6 py-3 rounded-md border border-slate-700 text-xs text-primary font-mono shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>RUC: 20123456789</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Monto: S/ 1,250.00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Fecha: 23/11/2025</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: PieChart,
    title: "3. Resumen Tributario",
    description:
      "Se arma automáticamente el resumen del mes: ventas, compras e IGV, listo para declarar.",
    visual: (
      <div className="relative flex items-center justify-center h-full w-full bg-slate-50/50">
        {/* Main Report Card */}
        <div className="w-full max-w-[320px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transform transition-all hover:scale-[1.02]">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <PieChart className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Periodo
                </p>
                <p className="text-sm font-bold text-white">Noviembre 2025</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-[10px] font-bold text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              CALCULADO
            </div>
          </div>

          {/* Body */}
          <div className="p-5 space-y-5">
            {/* Visual Chart Representation */}
            <div className="flex items-end justify-center gap-6 h-28 border-b border-slate-100 pb-5">
              {/* Sales Bar */}
              <div className="flex flex-col items-center gap-2 group w-16">
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-6">
                  S/ 12.5k
                </span>
                <div className="w-full bg-green-500 rounded-t-md h-20 relative overflow-hidden shadow-sm group-hover:bg-green-400 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  Ventas
                </span>
              </div>
              {/* Purchases Bar */}
              <div className="flex flex-col items-center gap-2 group w-16">
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-6">
                  S/ 8.2k
                </span>
                <div className="w-full bg-amber-400 rounded-t-md h-12 relative overflow-hidden shadow-sm group-hover:bg-amber-300 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  Compras
                </span>
              </div>
            </div>

            {/* Calculation Summary */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>IGV
                  Ventas
                </span>
                <span className="font-medium text-slate-700">S/ 2,250.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>IGV
                  Compras
                </span>
                <span className="font-medium text-slate-700">
                  - S/ 1,476.00
                </span>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-800">IGV a Pagar</span>
                <span className="text-xl font-bold text-primary">
                  S/ 774.00
                </span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-slate-50 p-3 border-t border-slate-100">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-green-700 bg-green-100/50 py-2.5 rounded-lg border border-green-200/50 shadow-sm">
              <CheckCircle2 className="h-4 w-4 fill-green-600 text-white" />
              Listo para declarar
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    // Disable auto-rotation on mobile to prevent layout shifts while reading
    if (window.innerWidth < 1024) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            El emprendedor toma fotos o sube sus comprobantes en PDF. La IA
            reconoce cada documento, clasifica si es venta o compra, extrae los
            montos y fechas, y arma automáticamente el resumen tributario del
            mes. Con esa información, el sistema genera la declaración lista
            para presentar ante la SUNAT, en solo minutos y sin hacer cálculos
            manuales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Steps List */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 overflow-hidden",
                  activeStep === index
                    ? "bg-background border-primary shadow-lg scale-105 z-10"
                    : "bg-transparent border-transparent hover:bg-background/50 hover:border-border opacity-70 hover:opacity-100"
                )}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-full shrink-0 transition-colors duration-300",
                      activeStep === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-xl font-semibold mb-2 transition-colors",
                        activeStep === index
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile/Tablet Visual Preview (Accordion Style) */}
                <div
                  className={cn(
                    "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
                    activeStep === index
                      ? "max-h-[400px] opacity-100 mt-6 pb-2"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="h-[300px] w-full rounded-lg border bg-slate-50/50 overflow-hidden relative">
                    {step.visual}
                  </div>
                </div>

                {/* Progress Bar for active step */}
                {activeStep === index && !isPaused && (
                  <div className="absolute bottom-0 left-0 h-1 bg-primary/10 w-full">
                    <div className="h-full bg-primary animate-progress origin-left" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Visual Preview (Desktop Only) */}
          <div className="hidden lg:block relative h-[400px] lg:h-[500px] w-full perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-50" />
            <Card className="relative h-full w-full overflow-hidden border-2 shadow-2xl bg-background/80 backdrop-blur transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
              <CardContent className="h-full p-0 flex items-center justify-center bg-slate-50/50">
                <div
                  key={activeStep}
                  className="w-full h-full p-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  {steps[activeStep].visual}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
