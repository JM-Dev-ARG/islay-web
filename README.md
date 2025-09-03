# 🌐 Sitio Web de Islay - Asesores de Seguros

Este es el repositorio oficial del sitio web de **Islay Seguros**, una aplicación web construida con Astro. Islay es una firma de asesoría de seguros con 35 años de experiencia en el mercado uruguayo, especializada en proveer soluciones integrales de seguros para personas y empresas.

![Captura del sitio](https://islay.netlify.app/img/captura_islay_web.png)

---

## 🚀 Estructura del Proyecto

El proyecto sigue la estructura estándar de una aplicación Astro.

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── utils/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

- `public/`: Contiene todos los activos estáticos como imágenes, logos y videos.
- `src/`: Contiene el código fuente de la aplicación.
- `src/components/`: Contiene componentes reutilizables de Astro y Preact, organizados en `elements`, `sections` y `svgComponents`.
- `src/layouts/`: Contiene el `Layout.astro` principal que define la estructura de todas las páginas.
- `src/pages/`: Contiene las páginas del sitio. `index.astro` es la página principal, y `api/sendMail.ts` es un endpoint para manejar los envíos de correo electrónico.
- `src/utils/data/`: Contiene los archivos JSON que almacenan los datos de los servicios, miembros del equipo y tarjetas de prueba social.
- `astro.config.mjs`: Archivo de configuración principal de Astro.
- `tailwind.config.mjs`: Archivo de configuración para Tailwind CSS.
- `package.json`: Lista las dependencias y scripts del proyecto.

---

## ✨ Características

- **Vitrina de Servicios**: Presentación detallada de los servicios de seguros ofrecidos: Personas, Corporativo, Construcción y Garantías.
- **Sobre Nosotros**: Información sobre la historia de la compañía, sus valores y su equipo.
- **Formulario de Contacto**: Un formulario de contacto modal (`ModalMail.tsx`) que utiliza una ruta de API para enviar correos a través de Mailgun.
- **Diseño Responsivo**: El sitio web es completamente responsivo, con activos específicos para móvil y escritorio.
- **Animaciones**: Animaciones sutiles al hacer scroll, implementadas con AOS (Animate On Scroll).

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando           | Acción                                                     |
| :---------------- | :--------------------------------------------------------- |
| `npm install`     | Instala las dependencias                                   |
| `npm run dev`     | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`   | Compila el sitio de producción en la carpeta `./dist/`     |
| `npm run preview` | Previsualiza la compilación localmente, antes de desplegar |

---

## 👀 Stack Tecnológico & Dependencias

- **Framework**: [Astro](https://astro.build/)
- **UI Framework**: [Preact](https://preactjs.com/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Despliegue**: [Netlify](https://www.netlify.com/)
- **Animaciones**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Email**: [Mailgun.js](https://mailgun.com/)
- **Alertas**: [SweetAlert2](https://sweetalert2.github.io/)

---

## 📸 Demo

🔗 [Ver sitio en producción](https://islayseguros.com/)

---

## 📄 Licencia

Este proyecto es privado y fue desarrollado por [Juan Manuel Martínez Togni](https://github.com/JM-Dev-ARG) para **Islay Seguros**.

<!-- Si querés agregar una licencia MIT u otra, avisame y lo adaptamos -->

---

## 🙌 Agradecimientos

- A [Astro](https://astro.build) por hacer el desarrollo web más simple y rápido.
- A la comunidad de [Tailwind CSS](https://tailwindcss.com) por su enfoque moderno de estilos.
