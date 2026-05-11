# VortexLM - Desarrollo de Sistemas a Medida 🚀

> **Dominando el mercado tecnológico de Caracas con velocidad luz y peso mínimo.**

Este repositorio contiene el código fuente de **vortexlm.com**, una plataforma web hiper-optimizada diseñada para arrasar en el SEO Local (Caracas, Venezuela) y ofrecer tiempos de carga instantáneos bajo condiciones de red extremas (3G/4G inestable).

## 🏆 Métricas de Rendimiento (Lighthouse Audit)
- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

## ⚡ Arquitectura y Tecnologías
- **Framework:** Astro (Arquitectura de Islas).
- **Estilos:** Tailwind CSS (Purgado estricto para CSS de <10kb).
- **Zero-JS:** Formularios y enrutamiento manejados nativamente vía API Routes (SSR) sin requerir `fetch` del lado del cliente.
- **Priority Load:** Componente `<Image />` nativo de Astro con `fetchpriority="high"` en LCP (Largest Contentful Paint) para eliminar absolutamente el **Cumulative Layout Shift (CLS)**.

## 🗺️ SEO Local y Silos de Contenido
- **Schema Markup:** Inyección dinámica de `LocalBusiness` (JSON-LD) apuntando a coordenadas de Caracas, VE.
- **Sitemap & OpenGraph:** Rutas absolutas (`vortexlm.com`) preparadas para la máxima visibilidad y conversión en LinkedIn e Instagram.
- **Motor de Contenidos (EEAT):** Estructura de silo en el blog sobre la *Transformación Digital en Venezuela* para dominar búsquedas "Top of the Funnel".

## 🛠️ Despliegue en Vercel
Este proyecto incluye un archivo `vercel.json` preconfigurado con:
- Cabeceras de seguridad agresivas (`X-Content-Type-Options`, `X-Frame-Options`).
- Políticas de caché inmutables (`Cache-Control: max-age=31536000`) para recursos estáticos (imágenes WebP/AVIF y CSS).
