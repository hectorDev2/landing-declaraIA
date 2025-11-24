import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0 hover:bg-transparent hover:text-primary"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>

      <div className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Términos y Condiciones
        </h1>
        <p className="text-muted-foreground mb-8">
          Última actualización: 23 de Noviembre de 2025
        </p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">1. Introducción</h2>
          <p>
            Bienvenido a DeclarAI. Estos Términos y Condiciones rigen el uso de
            nuestra plataforma de automatización de declaraciones tributarias.
            Al acceder o utilizar nuestros servicios, aceptas estar legalmente
            vinculado por estos términos.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">
            2. Descripción del Servicio
          </h2>
          <p>
            DeclarAI proporciona herramientas basadas en inteligencia artificial
            para facilitar el cálculo y la presentación de declaraciones
            tributarias ante la SUNAT en Perú. Nuestros servicios incluyen la
            extracción de datos de comprobantes, cálculo de impuestos y
            generación de reportes.
          </p>
          <p>
            Aunque nos esforzamos por garantizar la precisión, DeclarAI es una
            herramienta de asistencia y no sustituye el asesoramiento
            profesional legal o tributario.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">
            3. Registro y Seguridad de la Cuenta
          </h2>
          <p>
            Para utilizar el servicio, debes registrarte y proporcionar
            información veraz y completa. Eres responsable de mantener la
            confidencialidad de tus credenciales de acceso y de todas las
            actividades que ocurran bajo tu cuenta.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">
            4. Responsabilidades del Usuario
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Garantizar que la información y documentos subidos sean legítimos
              y precisos.
            </li>
            <li>
              Revisar los cálculos generados antes de su presentación oficial.
            </li>
            <li>No utilizar el servicio para fines ilícitos o fraudulentos.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">5. Propiedad Intelectual</h2>
          <p>
            Todo el contenido, software, diseño y marcas registradas en DeclarAI
            son propiedad exclusiva de DeclarAI o sus licenciantes. No se
            permite la reproducción o distribución sin autorización expresa.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">
            6. Limitación de Responsabilidad
          </h2>
          <p>
            DeclarAI no se hace responsable por multas, sanciones o pérdidas
            financieras derivadas de errores en la información proporcionada por
            el usuario o cambios en la normativa tributaria no reflejados
            inmediatamente en la plataforma.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">7. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Las modificaciones entrarán en vigor inmediatamente después
            de su publicación en el sitio web.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Contacto</h2>
          <p>
            Si tienes preguntas sobre estos términos, por favor contáctanos a
            través de nuestro correo electrónico de soporte: legal@declarai.pe
          </p>
        </section>
      </div>
    </div>
  );
}
