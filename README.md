# DeclarAI - Landing Page

Bienvenido al repositorio de la landing page de **DeclarAI**, la solución inteligente para la automatización de declaraciones tributarias en Perú. Este proyecto presenta la propuesta de valor, características y planes de DeclarAI a través de una interfaz moderna, interactiva y totalmente responsiva.

## 🚀 Características

- **Diseño Moderno y Responsivo:** Construido con Tailwind CSS y Shadcn UI, adaptado perfectamente a móviles, tablets y escritorio.
- **Secciones Interactivas:**
  - **Cómo Funciona:** Explicación visual paso a paso con animaciones y rotación automática.
  - **Comparativa:** Tabla detallada de beneficios frente a métodos tradicionales.
  - **Roadmap:** Línea de tiempo del desarrollo del producto.
  - **Precios:** Planes claros y atractivos.
  - **FAQ:** Preguntas frecuentes con acordeones animados.
- **Integración con IA (Genkit):** Configuración base para funcionalidades de IA utilizando Google GenAI (Gemini 1.5 Flash).
- **Optimización:** Next.js 15 con Turbopack para un rendimiento excepcional.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn UI](https://ui.shadcn.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Animaciones:** `tailwindcss-animate` y animaciones CSS personalizadas.
- **IA / Backend:** [Genkit](https://firebase.google.com/docs/genkit) con Google AI.
- **Gestor de Paquetes:** [Bun](https://bun.sh/) (recomendado) o npm/yarn.

## 🏁 Comenzando

Sigue estos pasos para ejecutar el proyecto localmente.

### Prerrequisitos

- Node.js 18+ o Bun instalado.
- Una cuenta de Google Cloud para las credenciales de Genkit (si planeas usar las funciones de IA).

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone <url-del-repositorio>
    cd landing-declaraIA
    ```

2.  Instala las dependencias:
    ```bash
    bun install
    # o
    npm install
    ```

3.  Configura las variables de entorno:
    Crea un archivo `.env.local` en la raíz del proyecto y agrega tus claves (ejemplo):
    ```env
    GOOGLE_GENAI_API_KEY=tu_api_key_aqui
    ```

### Ejecución

Para iniciar el servidor de desarrollo:

```bash
bun dev
# o
npm run dev
```

El sitio estará disponible en `http://localhost:9002`.

Para iniciar las herramientas de desarrollo de Genkit:

```bash
bun genkit:dev
```

## 📂 Estructura del Proyecto

```
src/
├── ai/                 # Configuración y flujos de Genkit (IA)
├── app/                # Rutas y layouts de Next.js (App Router)
├── components/
│   ├── declarai/       # Componentes específicos de la landing (Hero, Pricing, etc.)
│   └── ui/             # Componentes reutilizables de Shadcn UI
├── hooks/              # Hooks personalizados de React
└── lib/                # Utilidades y configuraciones
```

## 📜 Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo con Turbopack en el puerto 9002.
- `build`: Compila la aplicación para producción.
- `start`: Inicia el servidor de producción.
- `lint`: Ejecuta el linter para verificar el código.
- `genkit:dev`: Inicia la interfaz de desarrollo de Genkit.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias o correcciones.

---
Desarrollado con ❤️ por el equipo de DeclarAI.
