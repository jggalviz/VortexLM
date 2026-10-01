// src/i18n/ui.ts
//
// Diccionarios de la interfaz pública de VortexLM.
//
// `es` es la fuente de verdad: define TODAS las claves y actúa como catálogo
// tipado (`UiKey`). `en` se declara como `Record<UiKey, string>`, de modo que el
// compilador obliga a que cualquier clave nueva tenga su traducción inglesa.
//
// Convención de nombres: `seccion.contexto.elemento` en minúsculas.
//   nav.*        barra de navegación
//   lang.*       selector de idioma
//   footer.*     pie de página
//   home.*       página principal (index)
//   home.project.*  tarjeta de proyecto destacado (FeaturedProject)
//
// El texto español de cada clave es exactamente el que ya renderiza el servidor:
// el HTML SSR sigue siendo la versión `es`, y el cliente sólo sustituye esos
// nodos cuando el idioma activo es `en`.

import type { Locale } from './config';

export const es = {
  // ── Navbar ────────────────────────────────────────────────────────────────
  'nav.homeAria': 'VortexLM — Inicio',
  'nav.home': 'Inicio',
  'nav.services': 'Servicios',
  'nav.stack': 'Stack Moderno',
  'nav.portfolio': 'Portafolio',
  'nav.portfolioTitle': 'Portafolio de sitios web WordPress',
  'nav.contact': 'Contacto',
  'nav.ctaTeam': 'Contacta con nuestro equipo',
  'nav.login': 'Iniciar Sesión',
  'nav.dashboard': 'Ir a mi Escritorio',
  'nav.letsTalk': 'Hablemos',

  // ── Selector de idioma ────────────────────────────────────────────────────
  'lang.ariaLabel': 'Cambiar idioma',
  'lang.label': 'Idioma',

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.tagline':
    'Desarrollo de software robusto, aplicaciones web escalables y plataformas de alta velocidad. Implementamos ingeniería frontend de última generación para transformar el rendimiento digital de tu negocio.',
  'footer.solutions': 'Soluciones',
  'footer.platform': 'Plataforma',
  'footer.blog': 'Blog Técnico',
  'footer.contact': 'Contacto',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.link.speed': 'Diseño Web de Alta Velocidad',
  'footer.link.apps': 'Desarrollo de Apps Móviles iOS/Android',
  'footer.link.astro': 'Desarrollo Web con Astro y Next.js',
  'footer.link.erp': 'Sistemas ERP y Software a Medida',
  'footer.link.wp': 'Desarrollo WordPress Avanzado',

  // ── Home · Hero ───────────────────────────────────────────────────────────
  'home.meta.title':
    'Vortex - Desarrollo Web de Alto Rendimiento y Software a Medida | Agencia de Desarrollo Web y Apps en Caracas',
  'home.meta.description':
    'Creamos software robusto y páginas web ultrarrápidas que hacen crecer tu negocio. Jamstack (Astro, Next.js), Supabase y optimización extrema sin plantillas lentas.',
  'home.hero.title':
    'Creamos software robusto y páginas web ultrarrápidas que hacen crecer tu negocio.',
  'home.hero.subtitle':
    'Desarrollamos con tecnologías de última generación para empresas y agencias que exigen velocidad extrema, seguridad y arquitectura escalable. Sin plantillas pesadas, sin código basura.',
  'home.hero.ctaPrimary': 'Agendar una llamada',
  'home.hero.ctaSecondary': 'Ver servicios',

  // ── Home · Sub-navegación sticky ──────────────────────────────────────────
  'home.subnav.features': 'Características',
  'home.subnav.projects': 'Proyectos',
  'home.subnav.seo': 'Optimización SEO',
  'home.subnav.platforms': 'Aplicaciones a Medida',
  'home.subnav.infra': 'Infraestructura Corporativa',
  'home.subnav.agenda': 'Agendar',
  // ── Home · Sección de características ─────────────────────────────────────
  'home.features.intro':
    'Una nueva especie de desarrollo. Diseñado a medida para la era digital. Vortex establece un estándar superior en rendimiento web y aplicaciones escalables.',
  'home.features.jamstack.title': 'Arquitectura Jamstack y SSR',
  'home.features.jamstack.desc':
    'Implementamos el stack moderno con Astro y Next.js. Separamos el frontend del backend para garantizar cargas en menos de un segundo y una seguridad impenetrable.',
  'home.features.db.title': 'Bases de Datos y Nube Escalable',
  'home.features.db.desc':
    'Conectamos tus sistemas con Supabase y PostgreSQL, desplegando la infraestructura en Vercel. Aplicaciones web preparadas para soportar miles de usuarios concurrentes sin caídas.',
  'home.features.wp.title': 'WordPress de Ingeniería',
  'home.features.wp.desc':
    'Llevamos WordPress al límite. Diseños premium optimizados a nivel de código puro, sin depender de constructores lentos. Velocidad nativa con la flexibilidad del panel de control clásico.',

  // ── Home · Servicios especializados ───────────────────────────────────────
  'home.services.eyebrow': 'Servicios Especializados',
  'home.services.title':
    'Soluciones digitales diseñadas para cada necesidad de tu empresa.',
  'home.services.subtitle':
    'Desde páginas web corporativas ultrarrápidas hasta desarrollo de software a medida e integraciones complejas. Cada servicio está construido con tecnología de punta y optimizado para resultados reales.',
  'home.services.cardCta': 'Ver servicio',
  'home.services.card1.title': 'Diseño de Páginas Web en Caracas',
  'home.services.card1.desc':
    'Sitios web profesionales con velocidad extrema y diseño UI/UX premium. Optimizados para SEO local y conversión en Caracas.',
  'home.services.card2.title': 'Desarrollo Web en Caracas',
  'home.services.card2.desc':
    'Aplicaciones web progresivas, integraciones de API y plataformas headless con Astro, React y Supabase. Ingeniería de software a medida.',
  'home.services.card3.title': 'Agencia de Diseño Web en Caracas',
  'home.services.card3.desc':
    'Agencia boutique con metodología completa: estrategia UI/UX, prototipado en Figma, desarrollo premium y lanzamiento SEO.',
  'home.services.card4.title': 'Diseño de Páginas Web en Venezuela',
  'home.services.card4.desc':
    'Sitios ultrarrápidos optimizados para conexiones 3G/4G en todo el país. Integraciones de pago, delivery y facturación electrónica.',
  'home.services.card5.title': 'Programador Web en Caracas',
  'home.services.card5.desc':
    'Desarrollador full-stack senior para agencias y empresas. Marca blanca, código limpio, entregas rápidas y comunicación directa.',

  // ── Home · Proyectos recientes ────────────────────────────────────────────
  'home.projects.eyebrow': 'Proyectos Recientes',
  'home.projects.title':
    'Software propio en producción. Nuestro producto insignia.',
  'home.projects.p1':
    'Además de construir plataformas para nuestros clientes, desarrollamos productos SaaS propios que resuelven problemas concretos del mercado venezolano. Medisys es nuestro caso de éxito más reciente: agendamiento online, control fiscal y cobros multimoneda en una sola plataforma. Aquí tienes el ',
  'home.projects.link': 'caso de estudio técnico',
  'home.projects.p2':
    ' completo: arquitectura, seguridad multi-tenant y el motor fiscal explicados sobre el código real.',
  // ── Home · Tarjeta de proyecto destacado (FeaturedProject) ────────────────
  'home.project.badge': '🚀 Proyecto Destacado',
  'home.project.badgeSecondary': 'SaaS Médico · 2026',
  'home.project.subtitle':
    'Plataforma integral de agendamiento médico, control fiscal SENIAT y gestión multimoneda para consultorios y clínicas en Venezuela.',
  'home.project.status': 'En producción',
  'home.project.kpiGroup': 'Panel Medisys',
  'home.project.agendaGroup': 'Agenda 24/7',
  'home.project.ctaPrimary': 'Visitar Medisys',
  'home.project.ctaSecondary': 'Agendar demo guiada',
  'home.project.feature.0':
    'Agendamiento 24/7 con enlaces permanentes y perfil público profesional',
  'home.project.feature.1':
    'Facturación y cobros adaptados a Venezuela: BCV en vivo, IVA (16%) e IGTF (3%)',
  'home.project.feature.2':
    'Libro de Ventas SENIAT, cuadre de caja diario y liquidación de honorarios',
  'home.project.feature.3':
    'Modelo Freemium: Primeras 30 reservas gratis sin pagos por adelantado',
  'home.project.kpi.0.label': 'Reservas',
  'home.project.kpi.0.value': '24/7',
  'home.project.kpi.0.hint': 'Enlace permanente',
  'home.project.kpi.1.label': 'Multimoneda',
  'home.project.kpi.1.value': 'BCV en vivo',
  'home.project.kpi.1.hint': 'IVA 16% · IGTF 3%',
  'home.project.kpi.2.label': 'Prueba gratis',
  'home.project.kpi.2.value': '30 reservas',
  'home.project.kpi.2.hint': 'Sin pago adelantado',
  'home.project.agenda.0.patient': 'Consulta general',
  'home.project.agenda.0.status': 'Confirmada',
  'home.project.agenda.1.patient': 'Control · Cardiología',
  'home.project.agenda.1.status': 'Cobro IGTF',
  'home.project.agenda.2.patient': 'Primera consulta online',
  'home.project.agenda.2.status': 'Reserva web',
  'home.project.tag.0': 'BCV en vivo',
  'home.project.tag.1': 'IVA 16%',
  'home.project.tag.2': 'IGTF 3%',
  'home.project.tag.3': 'Libro SENIAT',
  'home.project.tag.4': '30 reservas gratis',

  // ── Home · Optimización SEO (Core Web Vitals) ─────────────────────────────
  'home.seo.eyebrow': 'Core Web Vitals',
  'home.seo.title': 'Optimización total para Google.',
  'home.seo.desc':
    'SEO técnico integrado desde la primera línea de código. No dejamos el posicionamiento orgánico al azar; estructuramos tu web con semántica perfecta, datos estructurados y rendimiento Core Web Vitals en verde absoluto.',
  'home.seo.score.performance': 'Rendimiento',
  'home.seo.score.seo': 'SEO',
  'home.seo.score.practices': 'Prácticas',
  // ── Home · Aplicaciones a medida ──────────────────────────────────────────
  'home.platforms.eyebrow': 'Arquitectura de Sistemas',
  'home.platforms.title':
    'Aplicaciones Web a la medida de tu flujo de trabajo.',
  'home.platforms.desc':
    'Diseñamos y programamos plataformas web que automatizan tus procesos de negocio. Portales de clientes, paneles de administración complejos y sistemas de gestión interna que se sienten tan fluidos como una aplicación de escritorio.',

  // ── Home · Infraestructura corporativa ────────────────────────────────────
  'home.infra.eyebrow': 'Tecnología Corporativa',
  'home.infra.title': 'Infraestructura Corporativa',
  'home.infra.security.tag': 'Clean Code',
  'home.infra.security.title': 'Seguridad y Código Limpio',
  'home.infra.security.desc':
    'Tu software es un activo. Desarrollamos bajo estándares de seguridad estrictos, previniendo vulnerabilidades y asegurando que cada línea de código sea mantenible a largo plazo por cualquier equipo técnico.',
  'home.infra.analytics.tag': 'Real-Time Data',
  'home.infra.analytics.title': 'Monitoreo y Analítica en Tiempo Real',
  'home.infra.analytics.desc':
    'Integramos paneles de control para que entiendas el comportamiento de tus usuarios y el rendimiento de tu plataforma en tiempo real. Decisiones basadas en datos, sin adivinanzas.',

  // ── Home · Contacto ───────────────────────────────────────────────────────
  'home.contact.eyebrow': 'Inicia hoy',
  'home.contact.title': 'Escala tus operaciones digitales.',
  'home.contact.desc':
    'Hablemos de tu proyecto. Cuéntanos qué necesitas construir y te propondremos la arquitectura tecnológica ideal para lograrlo.',
  'home.contact.labelName': 'Nombre y Apellido',
  'home.contact.labelEmail': 'Correo Corporativo',
  'home.contact.labelMessage': 'Cuéntanos sobre tu proyecto',
  'home.contact.placeholderName': 'e.g. Carlos Pérez',
  'home.contact.placeholderEmail': 'operator@acme.com',
  'home.contact.placeholderMessage':
    'Describa el alcance de la aplicación web, integraciones o landing page requerida...',
  'home.contact.submit': 'Enviar Mensaje',
  'home.contact.sending': 'Enviando...',
  'home.contact.success': '¡Mensaje enviado con éxito! Te contactaremos pronto.',
  'home.contact.error':
    'Error al enviar. Intenta de nuevo o escríbenos a info@vortexlm.com.',
} as const;

/** Claves válidas del diccionario (derivadas de `es`). */
export type UiKey = keyof typeof es;

/**
 * Traducción al inglés. El tipo `Record<UiKey, string>` garantiza que no falte
 * ninguna clave: si se añade texto a `es`, el compilador exige su par aquí.
 */
export const en: Record<UiKey, string> = {
  // ── Navbar ────────────────────────────────────────────────────────────────
  'nav.homeAria': 'VortexLM — Home',
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.stack': 'Modern Stack',
  'nav.portfolio': 'Portfolio',
  'nav.portfolioTitle': 'WordPress website portfolio',
  'nav.contact': 'Contact',
  'nav.ctaTeam': 'Talk to our team',
  'nav.login': 'Sign In',
  'nav.dashboard': 'Go to my Dashboard',
  'nav.letsTalk': 'Let’s talk',

  // ── Language selector ─────────────────────────────────────────────────────
  'lang.ariaLabel': 'Change language',
  'lang.label': 'Language',

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.tagline':
    'Robust software development, scalable web applications and high-speed platforms. We implement state-of-the-art frontend engineering to transform your business’s digital performance.',
  'footer.solutions': 'Solutions',
  'footer.platform': 'Platform',
  'footer.blog': 'Technical Blog',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.link.speed': 'High-Speed Web Design',
  'footer.link.apps': 'iOS/Android Mobile App Development',
  'footer.link.astro': 'Web Development with Astro & Next.js',
  'footer.link.erp': 'ERP Systems & Custom Software',
  'footer.link.wp': 'Advanced WordPress Development',

  // ── Home · Hero ───────────────────────────────────────────────────────────
  'home.meta.title':
    'Vortex - High-Performance Web Development & Custom Software | Web & App Agency in Caracas',
  'home.meta.description':
    'We build robust software and ultra-fast websites that grow your business. Jamstack (Astro, Next.js), Supabase and extreme optimization — no slow templates.',
  'home.hero.title':
    'We build robust software and ultra-fast websites that grow your business.',
  'home.hero.subtitle':
    'We develop with next-generation technologies for companies and agencies that demand extreme speed, security and scalable architecture. No heavy templates, no junk code.',
  'home.hero.ctaPrimary': 'Book a call',
  'home.hero.ctaSecondary': 'View services',

  // ── Home · Sticky sub-navigation ──────────────────────────────────────────
  'home.subnav.features': 'Features',
  'home.subnav.projects': 'Projects',
  'home.subnav.seo': 'SEO Optimization',
  'home.subnav.platforms': 'Custom Applications',
  'home.subnav.infra': 'Corporate Infrastructure',
  'home.subnav.agenda': 'Book a call',
  // ── Home · Features section ───────────────────────────────────────────────
  'home.features.intro':
    'A new species of development. Purpose-built for the digital era. Vortex sets a higher standard for web performance and scalable applications.',
  'home.features.jamstack.title': 'Jamstack & SSR Architecture',
  'home.features.jamstack.desc':
    'We implement the modern stack with Astro and Next.js. We decouple the frontend from the backend to guarantee sub-second loads and impenetrable security.',
  'home.features.db.title': 'Databases & Scalable Cloud',
  'home.features.db.desc':
    'We connect your systems with Supabase and PostgreSQL, deploying the infrastructure on Vercel. Web applications ready to support thousands of concurrent users without downtime.',
  'home.features.wp.title': 'Engineering-Grade WordPress',
  'home.features.wp.desc':
    'We push WordPress to its limits. Premium designs optimized at the pure-code level, with no reliance on slow builders. Native speed with the flexibility of the classic control panel.',

  // ── Home · Specialized services ───────────────────────────────────────────
  'home.services.eyebrow': 'Specialized Services',
  'home.services.title':
    'Digital solutions designed for every need of your company.',
  'home.services.subtitle':
    'From ultra-fast corporate websites to custom software development and complex integrations. Every service is built with cutting-edge technology and optimized for real results.',
  'home.services.cardCta': 'View service',
  'home.services.card1.title': 'Web Design in Caracas',
  'home.services.card1.desc':
    'Professional websites with extreme speed and premium UI/UX design. Optimized for local SEO and conversion in Caracas.',
  'home.services.card2.title': 'Web Development in Caracas',
  'home.services.card2.desc':
    'Progressive web apps, API integrations and headless platforms with Astro, React and Supabase. Custom software engineering.',
  'home.services.card3.title': 'Web Design Agency in Caracas',
  'home.services.card3.desc':
    'Boutique agency with a complete methodology: UI/UX strategy, Figma prototyping, premium development and SEO launch.',
  'home.services.card4.title': 'Web Design in Venezuela',
  'home.services.card4.desc':
    'Ultra-fast websites optimized for 3G/4G connections nationwide. Payment, delivery and e-invoicing integrations.',
  'home.services.card5.title': 'Web Developer in Caracas',
  'home.services.card5.desc':
    'Senior full-stack developer for agencies and companies. White label, clean code, fast delivery and direct communication.',

  // ── Home · Recent projects ────────────────────────────────────────────────
  'home.projects.eyebrow': 'Recent Projects',
  'home.projects.title': 'Our own software in production. Our flagship product.',
  'home.projects.p1':
    'Beyond building platforms for our clients, we develop our own SaaS products that solve concrete problems in the Venezuelan market. Medisys is our most recent success story: online scheduling, tax compliance and multi-currency payments in a single platform. Here is the ',
  'home.projects.link': 'technical case study',
  'home.projects.p2':
    ' in full: architecture, multi-tenant security and the tax engine explained over the real code.',
  // ── Home · Featured project card (FeaturedProject) ────────────────────────
  'home.project.badge': '🚀 Featured Project',
  'home.project.badgeSecondary': 'Medical SaaS · 2026',
  'home.project.subtitle':
    'An end-to-end platform for medical scheduling, SENIAT tax compliance and multi-currency management for clinics and practices in Venezuela.',
  'home.project.status': 'In production',
  'home.project.kpiGroup': 'Medisys Panel',
  'home.project.agendaGroup': '24/7 Scheduling',
  'home.project.ctaPrimary': 'Visit Medisys',
  'home.project.ctaSecondary': 'Book a guided demo',
  'home.project.feature.0':
    '24/7 booking with permanent links and a professional public profile',
  'home.project.feature.1':
    'Billing and payments built for Venezuela: live BCV rate, VAT (16%) and IGTF (3%)',
  'home.project.feature.2':
    'SENIAT Sales Ledger, daily cash reconciliation and fee settlement',
  'home.project.feature.3':
    'Freemium model: first 30 bookings free, no upfront payment',
  'home.project.kpi.0.label': 'Bookings',
  'home.project.kpi.0.value': '24/7',
  'home.project.kpi.0.hint': 'Permanent link',
  'home.project.kpi.1.label': 'Multi-currency',
  'home.project.kpi.1.value': 'Live BCV rate',
  'home.project.kpi.1.hint': 'VAT 16% · IGTF 3%',
  'home.project.kpi.2.label': 'Free trial',
  'home.project.kpi.2.value': '30 bookings',
  'home.project.kpi.2.hint': 'No upfront payment',
  'home.project.agenda.0.patient': 'General consultation',
  'home.project.agenda.0.status': 'Confirmed',
  'home.project.agenda.1.patient': 'Check-up · Cardiology',
  'home.project.agenda.1.status': 'IGTF charge',
  'home.project.agenda.2.patient': 'First online consultation',
  'home.project.agenda.2.status': 'Web booking',
  'home.project.tag.0': 'Live BCV rate',
  'home.project.tag.1': 'VAT 16%',
  'home.project.tag.2': 'IGTF 3%',
  'home.project.tag.3': 'SENIAT Ledger',
  'home.project.tag.4': '30 free bookings',

  // ── Home · SEO optimization (Core Web Vitals) ─────────────────────────────
  'home.seo.eyebrow': 'Core Web Vitals',
  'home.seo.title': 'Total optimization for Google.',
  'home.seo.desc':
    'Technical SEO integrated from the very first line of code. We never leave organic ranking to chance; we structure your site with flawless semantics, structured data and Core Web Vitals in absolute green.',
  'home.seo.score.performance': 'Performance',
  'home.seo.score.seo': 'SEO',
  'home.seo.score.practices': 'Best Practices',
  // ── Home · Custom applications ────────────────────────────────────────────
  'home.platforms.eyebrow': 'Systems Architecture',
  'home.platforms.title': 'Web applications tailored to your workflow.',
  'home.platforms.desc':
    'We design and build web platforms that automate your business processes. Client portals, complex admin panels and internal management systems that feel as smooth as a desktop application.',

  // ── Home · Corporate infrastructure ───────────────────────────────────────
  'home.infra.eyebrow': 'Corporate Technology',
  'home.infra.title': 'Corporate Infrastructure',
  'home.infra.security.tag': 'Clean Code',
  'home.infra.security.title': 'Security & Clean Code',
  'home.infra.security.desc':
    'Your software is an asset. We develop under strict security standards, preventing vulnerabilities and ensuring every line of code stays maintainable long-term by any technical team.',
  'home.infra.analytics.tag': 'Real-Time Data',
  'home.infra.analytics.title': 'Real-Time Monitoring & Analytics',
  'home.infra.analytics.desc':
    'We integrate dashboards so you understand your users’ behavior and your platform’s performance in real time. Decisions based on data, not guesswork.',

  // ── Home · Contact ────────────────────────────────────────────────────────
  'home.contact.eyebrow': 'Start today',
  'home.contact.title': 'Scale your digital operations.',
  'home.contact.desc':
    'Let’s talk about your project. Tell us what you need to build and we will propose the ideal technology architecture to achieve it.',
  'home.contact.labelName': 'Full Name',
  'home.contact.labelEmail': 'Work Email',
  'home.contact.labelMessage': 'Tell us about your project',
  'home.contact.placeholderName': 'e.g. John Smith',
  'home.contact.placeholderEmail': 'operator@acme.com',
  'home.contact.placeholderMessage':
    'Describe the scope of the web application, integrations or landing page you need...',
  'home.contact.submit': 'Send Message',
  'home.contact.sending': 'Sending...',
  'home.contact.success': 'Message sent successfully! We will be in touch soon.',
  'home.contact.error':
    'Failed to send. Please try again or email us at info@vortexlm.com.',
};

/** Catálogo completo indexado por locale. */
export const UI: Record<Locale, Record<UiKey, string>> = { es, en };

/**
 * Devuelve el diccionario de un locale con los fallbacks aplicados:
 * las claves ausentes en `en` caen a su equivalente en `es`.
 */
export function getDictionary(locale: Locale): Record<UiKey, string> {
  return UI[locale] ?? UI.es;
}



