import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-8">
        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>

      <div className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 23 de Noviembre de 2025</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">1. Información que Recopilamos</h2>
          <p>
            En DeclarAI, nos tomamos muy en serio tu privacidad. Recopilamos la siguiente información para brindarte nuestros servicios:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Información Personal:</strong> Nombre, correo electrónico, número de teléfono y RUC.</li>
            <li><strong>Información Tributaria:</strong> Comprobantes de pago, facturas, recibos por honorarios y credenciales de acceso a SUNAT (Clave SOL) únicamente para fines de sincronización.</li>
            <li><strong>Datos de Uso:</strong> Información sobre cómo interactúas con nuestra plataforma.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">2. Uso de la Información</h2>
          <p>Utilizamos tu información para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Procesar y clasificar tus documentos tributarios automáticamente.</li>
            <li>Calcular tus impuestos mensuales y generar reportes.</li>
            <li>Mejorar nuestros algoritmos de inteligencia artificial.</li>
            <li>Enviarte notificaciones importantes sobre tus declaraciones y vencimientos.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">3. Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas avanzadas para proteger tus datos personales y tributarios contra el acceso no autorizado, la pérdida o la alteración. Utilizamos encriptación de grado bancario para la transmisión y almacenamiento de datos sensibles.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">4. Compartir Información</h2>
          <p>
            No vendemos ni alquilamos tu información personal a terceros. Solo compartimos información en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Con la SUNAT, estrictamente para la presentación de tus declaraciones bajo tu autorización.</li>
            <li>Con proveedores de servicios de confianza que nos ayudan a operar la plataforma (ej. alojamiento en la nube), bajo estrictos acuerdos de confidencialidad.</li>
            <li>Cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">5. Tus Derechos</h2>
          <p>
            Tienes derecho a acceder, corregir, eliminar o limitar el uso de tu información personal. Puedes ejercer estos derechos en cualquier momento desde la configuración de tu cuenta o contactándonos directamente.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">6. Cookies</h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación y analizar el uso de nuestro sitio web. Puedes configurar tu navegador para rechazar las cookies, aunque esto podría afectar algunas funcionalidades.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contacto</h2>
          <p>
            Si tienes dudas sobre nuestra política de privacidad, contáctanos en: privacidad@declarai.pe
          </p>
        </section>
      </div>
    </div>
  );
}
