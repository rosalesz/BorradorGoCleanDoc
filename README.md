# GoCleanDoc 📊✨

> **Transforma datos crudos en activos listos para Inteligencia Artificial.**

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**GoCleanDoc** es una Landing Page moderna y de alta conversión diseñada para un servicio B2B de limpieza, organización y preparación de datos. Está dirigida a PYMES y gerentes que necesitan convertir archivos desorganizados (Excel, CSV, JSON) en datasets confiables para análisis y entrenamiento de modelos de IA.

---

## 🚀 Características Principales

Esta aplicación Single Page Application (SPA) incluye:

*   **🎨 Diseño Moderno & Minimalista:** Estilo "Web3" limpio utilizando **Tailwind CSS** para una experiencia visual profesional y confiable.
*   **📱 Totalmente Responsiva:** Adaptada perfectamente para móviles, tablets y escritorio.
*   **⚡ Navegación Fluida:** Sistema de scroll suave (smooth scroll) implementado sin recargas de página para evitar errores de navegación.
*   **📂 Simulación de Procesamiento de Archivos:**
    *   Componente interactivo `FileUploadSection`.
    *   Simulación visual de carga, análisis y limpieza de datos en tiempo real.
    *   Generación de reportes simulados (conteo de filas, duplicados, errores).
*   **💰 Sección de Precios Clara:** Tarjetas de precios comparativas con diseño destacado para el plan popular.
*   **💬 Casos de Uso y Testimonios:** Secciones estructuradas para generar confianza social.
*   **❓ FAQ Interactivo:** Acordeón desplegable para gestión de preguntas frecuentes.

---

## 🛠️ Tech Stack

El proyecto ha sido construido utilizando tecnologías modernas de desarrollo web:

*   **[React 19](https://react.dev/)**: Biblioteca principal para la interfaz de usuario.
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto y seguro.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidad para el diseño y estilos.
*   **[Lucide React](https://lucide.dev/)**: Colección de iconos vectoriales ligeros y consistentes.
*   **[Vite](https://vitejs.dev/)**: (Implícito) Para un entorno de desarrollo rápido y optimizado.

---

## 📂 Estructura del Proyecto

```bash
/
├── components/          # Componentes reutilizables de la UI
│   ├── Hero.tsx         # Sección principal con CTAs
│   ├── Navbar.tsx       # Navegación superior responsiva
│   ├── FileUpload...tsx # Lógica de simulación de carga y limpieza
│   ├── Pricing.tsx      # Tarjetas de planes
│   └── ...              # Otros componentes (Services, FAQ, Footer, etc.)
├── App.tsx              # Componente raíz y layout principal
├── constants.tsx        # Datos estáticos (textos, precios, items de menú)
├── types.ts             # Definiciones de interfaces TypeScript
├── index.tsx            # Punto de entrada de la aplicación
├── index.html           # HTML base con configuración de Tailwind CDN
└── metadata.json        # Metadatos del proyecto
```

---

## 🔧 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/gocleandoc.git
    cd gocleandoc
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    Visita `http://localhost:5173` (o el puerto que indique tu consola).

---

## 🧩 Detalles de Implementación

### Simulación de Limpieza de Datos
El componente `FileUploadSection.tsx` contiene una lógica interesante que simula una interacción real con un backend:
1.  **Estado de Carga:** Muestra una barra de progreso que avanza por etapas (Subiendo -> Analizando -> Detectando duplicados).
2.  **Generación de Stats:** Al finalizar, genera números aleatorios realistas para "Filas", "Duplicados" y "Errores" basados en una simulación, proporcionando feedback instantáneo al usuario.

### Navegación Segura
Para evitar problemas de "Conexión rechazada" en ciertos entornos de despliegue o iframes, la navegación utiliza `scrollIntoView` controlado por JavaScript en lugar de anclas HTML `#id` tradicionales.

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir qué te gustaría cambiar o envía un Pull Request directamente.

1.  Haz un Fork del proyecto.
2.  Crea tu rama de características (`git checkout -b feature/AmazingFeature`).
3.  Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Haz Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

---

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

---

<div align="center">
  <p>Desarrollado con ❤️ para <strong>GoCleanDoc</strong></p>
</div>
