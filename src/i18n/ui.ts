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

  // ── Portal de clientes (login / registro) ─────────────────────────────────
  'auth.portal': 'Portal de Clientes B2B',
  'auth.email': 'Correo electrónico',
  'auth.emailPlaceholder': 'tu@correo.com',
  'auth.password': 'Contraseña',
  'auth.passwordPlaceholder': 'Mínimo 6 caracteres',
  'auth.passwordConfirm': 'Confirmar Contraseña',
  'auth.passwordConfirmPlaceholder': 'Repite la contraseña',
  'auth.company': 'Nombre de la Empresa',
  'auth.companyPlaceholder': 'Ej: Mi Empresa S.A.S.',
  'auth.haveAccount': '¿Ya tienes cuenta?',
  'auth.noAccount': '¿No tienes cuenta?',
  'auth.contactUs': 'Contáctanos',
  'auth.signin.title': 'Iniciar Sesión',
  'auth.signin.subtitle': 'Ingresa con tu correo electrónico registrado.',
  'auth.signin.submit': 'Acceder',
  'auth.signin.loading': 'Ingresando...',
  'auth.signin.link': 'Iniciar Sesión',
  'auth.signin.error': 'Error al iniciar sesión. Verifica tus credenciales.',
  'auth.signup.title': 'Crear Cuenta',
  'auth.signup.subtitle': 'Regístrate para acceder al panel de clientes.',
  'auth.signup.submit': 'Crear Cuenta',
  'auth.signup.loading': 'Creando cuenta...',
  'auth.signup.done': 'Cuenta Creada ✓',
  'auth.signup.success':
    '¡Cuenta creada con éxito! Revisa tu correo electrónico para confirmar tu dirección antes de iniciar sesión.',
  'auth.signup.errorCompany': 'Por favor, ingresa el nombre de tu empresa.',
  'auth.signup.errorPasswordShort': 'La contraseña debe tener al menos 6 caracteres.',
  'auth.signup.errorPasswordMismatch': 'Las contraseñas no coinciden.',
  'auth.signup.errorExists': 'Este correo electrónico ya está registrado.',
  'auth.signup.error': 'Error al crear la cuenta. Intenta de nuevo.',

  // ── Caso de estudio · Medisys (data-i18n en src/components/caso-saas) ─────
  'case.meta.title': 'Caso de estudio · Medisys',
  'case.meta.description':
    'Cómo diseñé y construí Medisys: SaaS médico multi-tenant y suite fiscal para Venezuela. 44.3k líneas TS/TSX, 22 migraciones SQL, 64 políticas RLS y un motor fiscal con IVA, IGTF y doble moneda.',
  'case.page.navLabel': 'Secciones del caso de estudio',
  'case.page.sourceCode': 'Código fuente',
  'case.nav.reto': 'El reto',
  'case.nav.arquitectura': 'Arquitectura',
  'case.nav.retos-tecnicos': 'Retos técnicos',
  'case.nav.aprendizajes': 'Aprendizajes',
  'case.nav.contacto': 'Contacto',

  // ── Caso de estudio · Hero ────────────────────────────────────────────────
  'case.hero.title': 'Cómo diseñé y construí',
  'case.hero.subtitle': 'SaaS médico multi-tenant y suite fiscal para Venezuela',
  'case.hero.intro':
    'Una plataforma que digitaliza la operación completa de una clínica —agenda, cobros, expedientes, facturación y contabilidad— en un mercado donde la tasa oficial cambia a diario, las pasarelas internacionales no operan y cada factura debe cumplir con el SENIAT. Este es el recorrido técnico del proyecto: las decisiones de arquitectura, sus compromisos y los problemas difíciles que resolví.',
  'case.hero.ctaCode': 'Explorar el código fuente',
  'case.hero.ctaDemo': 'Probar la clínica demo',
  'case.hero.chip.dev': '1 desarrollador · full-stack',
  'case.hero.chip.saas': 'SaaS multi-tenant en producción',
  'case.hero.rol.label': 'Rol',
  'case.hero.rol.value': 'Arquitectura, backend, frontend y datos',
  'case.hero.scope.label': 'Alcance',
  'case.hero.scope.value':
    'Producto completo: 3 módulos de gestión, portales y Super Admin · 49 rutas',
  'case.hero.constraint.label': 'Restricción',
  'case.hero.constraint.value': 'Equipo unipersonal · infraestructura serverless',
  'case.hero.hallazgo.0.titulo': 'Monolito modular, no microservicios',
  'case.hero.hallazgo.0.detalle':
    'Un despliegue en Vercel con Server Components y Server Actions: menos superficie operativa, mismos límites de dominio.',
  'case.hero.hallazgo.1.titulo': 'Seguridad en la base de datos',
  'case.hero.hallazgo.1.detalle':
    '64 políticas RLS aíslan cada clínica y cada rol: un fallo en la interfaz no puede filtrar datos de otro tenant.',
  'case.hero.hallazgo.2.titulo': 'Concurrencia con reloj',
  'case.hero.hallazgo.2.detalle':
    'Locks de 15 minutos sobre los turnos: el cupo se libera solo si el paciente no completa el pago a tiempo.',
  'case.hero.hallazgo.3.titulo': 'Cumplimiento fiscal automatizado',
  'case.hero.hallazgo.3.detalle':
    'IVA 16 %, IGTF 3 % solo en divisas, doble despliegue USD/VES y numeración fiscal: cálculo determinista y auditable, sin IA en runtime.',

  // ── Caso de estudio · Ficha técnica ───────────────────────────────────────
  'case.ficha.title': 'Ficha técnica',
  'case.ficha.links': 'Enlaces directos',
  'case.ficha.link.0.titulo': 'Repositorio',
  'case.ficha.link.1.titulo': 'Clínica demo',
  'case.ficha.link.2.titulo': 'Contacto',
  'case.stack.0.detalle': 'App Router · RSC · Server Actions',
  'case.stack.1.detalle': 'Streaming + composición por rutas',
  'case.stack.2.detalle': 'strict, tipos de BD de extremo a extremo',
  'case.stack.3.detalle': 'Postgres · Auth · Storage · RLS',
  'case.stack.4.detalle': 'tokens en @theme, sin CSS muerto',
  'case.stack.5.detalle': 'Cron diario · middleware de routing',
  'case.metricas.0.label': 'líneas TS/TSX',
  'case.metricas.0.detalle': '212 archivos en src/',
  'case.metricas.1.label': 'migraciones SQL',
  'case.metricas.1.detalle': 'esquema versionado de 16 tablas',
  'case.metricas.2.label': 'políticas RLS',
  'case.metricas.2.detalle': 'aislamiento por clínica y por rol',
  'case.metricas.3.label': 'rutas App Router',
  'case.metricas.3.detalle': '32 páginas + 17 route handlers',
  'case.metricas.4.label': 'módulos use server',
  'case.metricas.4.detalle': 'mutaciones sin API REST intermedia',
  'case.metricas.5.label': 'roles × permisos',
  'case.metricas.5.detalle': 'RBAC calculado desde una única fuente',

  // ── Caso de estudio · Sección 01 El reto ──────────────────────────────────
  'case.reto.eyebrow': 'El reto',
  'case.reto.title': 'Un sector que todavía opera con papel, teléfono y Excel',
  'case.reto.description':
    'Medisys no nació como un ejercicio de arquitectura: nació de tres dolores concretos de las clínicas venezolanas. Entenderlos fue lo que definió cada decisión técnica posterior.',
  'case.reto.dolor.0.titulo': 'La agenda vive en un cuaderno y en WhatsApp',
  'case.reto.dolor.0.dolor':
    'Dos secretarias, un teléfono y una hoja de cálculo por sede. Los turnos se anotan a lápiz y se tachan cuando el paciente confirma por mensaje.',
  'case.reto.dolor.0.impacto':
    'Cupos duplicados y horas de consultorio vacías: cada cita fantasma es ingreso perdido y un paciente que no vuelve.',
  'case.reto.dolor.1.titulo': 'Cobrar en un país sin pasarelas de pago',
  'case.reto.dolor.1.dolor':
    'Las pasarelas internacionales tardan meses en aprobar una cuenta; en la práctica se cobra con Pago Móvil, Zelle, efectivo y punto de venta, verificando capturas de pantalla enviadas por el paciente.',
  'case.reto.dolor.1.impacto':
    'Precios fijados en dólares y cobros en bolívares a la tasa del día: sin una tasa confiable, la conciliación de caja se vuelve una discusión diaria.',
  'case.reto.dolor.2.titulo': 'Facturación que la ley exige y el Excel no puede dar',
  'case.reto.dolor.2.dolor':
    'IVA del 16 % con la exención de los servicios médicos, IGTF del 3 % cuando el pago llega en divisas, numeración de formas libres con correlativo y número de control, y desglose en bolívares y dólares.',
  'case.reto.dolor.2.impacto':
    'Emitir una factura inválida o no declarar el IGTF expone a la clínica a sanciones: no es un problema de diseño, es de cumplimiento.',
  'case.reto.impactoLabel': 'Impacto:',
  'case.reto.restricciones.title': 'Restricciones de diseño',
  'case.reto.restriccion.0':
    'Equipo unipersonal: cualquier componente que no pueda mantener una sola persona es deuda técnica disfrazada de arquitectura.',
  'case.reto.restriccion.1':
    'Sin servidores propios: el presupuesto inicial no admite clústeres, colas ni contenedores que administrar.',
  'case.reto.restriccion.2':
    'Tráfico impredecible: una campaña en redes satura el agendamiento en minutos y luego vuelve a la calma.',
  'case.reto.restriccion.3':
    'Recepción con internet irregular: el panel debe abrir rápido en laptops viejas y en pantallas pequeñas.',
  'case.reto.restriccion.4':
    'El BCV no publica API: su portal bloquea clientes sin User-Agent de navegador, así que la tasa solo puede obtenerse con scraping tolerante a fallos.',
  'case.reto.restriccion.5':
    'Datos de salud: aislamiento estricto entre clínicas y mínimo privilegio desde el primer commit, no como mejora posterior.',
  'case.reto.callout.title': 'De los dolores a los requisitos',
  'case.reto.callout.body':
    'Los tres problemas se tradujeron en cuatro requisitos no negociables que gobiernan todo el sistema:',
  'case.reto.callout.r1':
    'Multi-tenant con aislamiento verificable en la base de datos, no solo en el código de la aplicación.',
  'case.reto.callout.r2': 'Una tasa oficial confiable, cacheada y con respaldos en cascada.',
  'case.reto.callout.r3': 'Un motor fiscal determinista, auditable y explicable ante el SENIAT.',
  'case.reto.callout.r4': 'Una interfaz que una recepcionista use sin manual el primer día.',
  'case.reto.criterio.title': 'El criterio que apliqué en todo el proyecto',
  'case.reto.criterio.body':
    'Cada requisito se resolvió en la capa donde el problema es más barato de resolver: el aislamiento entre clínicas vive en Postgres (RLS), la concurrencia vive en el modelo de datos (locks con expiración), y el cumplimiento fiscal vive en funciones puras sin E/S. Ese reparto es, en mi opinión, la diferencia entre un prototipo y un producto que factura.',

  // ── Caso de estudio · Sección 02 Arquitectura ─────────────────────────────
  'case.arq.eyebrow': 'La solución arquitectónica',
  'case.arq.title': 'Tres decisiones que sostienen todo el sistema',
  'case.arq.description':
    'Cada decisión se tomó contra una alternativa concreta y con su costo asumido por escrito. Estas son las tres que gobiernan el producto, el mapa de capas resultante y las opciones que evalué y descarté.',
  'case.arq.map.title': 'Cómo se conecta todo',
  'case.arq.map.detail':
    'Seis capas con una dirección de dependencia explícita. Cada flecha representa una frontera que puedo revisar, probar o reemplazar de forma independiente.',
  'case.decision.badge': 'Decisión',
  'case.term.porque': 'Por qué',
  'case.term.compromiso': 'Compromiso asumido',
  'case.decision.0.titulo': 'Monolito modular en Next.js 16, sin microservicios',
  'case.decision.0.decision':
    'Una sola aplicación desplegada en Vercel con App Router: Server Components para leer datos, Server Actions para escribirlos y módulos de dominio puros en lugar de servicios separados.',
  'case.decision.0.porque.0':
    'Un despliegue atómico: no hay contratos HTTP entre servicios ni coordinación de versiones entre despliegues.',
  'case.decision.0.porque.1':
    'Server Components eliminan el viaje cliente → API → servidor: la página llega renderizada y el panel envía menos JavaScript al navegador.',
  'case.decision.0.porque.2':
    'Server Actions removieron la capa REST intermedia: una mutación es una función tipada, no un endpoint que hay que versionar y documentar aparte.',
  'case.decision.0.porque.3':
    'Los tipos de la base de datos viajan de extremo a extremo: si una columna cambia, el compilador avisa antes del despliegue.',
  'case.decision.0.porque.4':
    'Productividad de una sola persona: interfaz, regla de negocio y validación viven en el mismo módulo y se revisan en un mismo diff.',
  'case.decision.0.compromiso':
    'El despliegue queda acoplado: un fallo en cualquier módulo afecta a todo el producto. Lo compenso manteniendo el dominio en módulos puros sin E/S, tolerando esquemas parcialmente migrados y desplegando cambios pequeños y frecuentes en lugar de lotes trimestrales.',
  'case.decision.1.titulo': 'La seguridad en la base de datos, no solo en el código',
  'case.decision.1.decision':
    'Postgres con Row Level Security como frontera principal, más funciones SECURITY DEFINER (is_staff, is_tenant_admin, is_super_admin) que resuelven la pertenencia del usuario a una clínica y su rol.',
  'case.decision.1.porque.0':
    '64 políticas sobre 16 tablas: aunque la interfaz tuviera un descuido, la consulta no puede cruzar datos entre clínicas.',
  'case.decision.1.porque.1':
    'Las políticas se evalúan contra la identidad del token (auth.uid()), no contra parámetros que el cliente pueda enviar o manipular.',
  'case.decision.1.porque.2':
    'El navegador nunca recibe la clave service_role: solo el cron del servidor la usa para persistir la tasa diaria y saltar RLS de forma controlada.',
  'case.decision.1.porque.3':
    'Storage con el mismo criterio: lectura pública para los logos de marca y escritura restringida al personal autenticado.',
  'case.decision.1.porque.4':
    'Fallo seguro por defecto: sin una política que lo permita, el acceso simplemente no ocurre, sin depender de que alguien recuerde escribir el filtro correcto.',
  'case.decision.1.compromiso':
    'Depurar políticas declarativas es más lento que leer un if en TypeScript y algunas consultas exigen funciones auxiliares. A cambio, el aislamiento entre clientes deja de depender de la disciplina de cada desarrollador.',
  'case.decision.2.titulo':
    'El motor de tasas como sistema resiliente, no como una llamada HTTP',
  'case.decision.2.decision':
    'Una cascada de cuatro niveles —portal del BCV, APIs alternativas, última tasa persistida y valor de respaldo— que nunca lanza una excepción y siempre informa de dónde salió el número.',
  'case.decision.2.porque.0':
    'El BCV no publica API y su portal bloquea clientes sin User-Agent de navegador: depender de una única fuente era inaceptable para un sistema que factura.',
  'case.decision.2.porque.1':
    'Caché HTTP de una hora en las consultas externas (revalidate: 3600) para no abusar de la fuente ni castigar la latencia del panel.',
  'case.decision.2.porque.2':
    'Un cron diario captura la tasa y la persiste con service_role, alimentando el nivel de respaldo de la cascada.',
  'case.decision.2.porque.3':
    'El administrador puede fijar la tasa manualmente y consultar el historial de capturas cuando el portal publica tarde.',
  'case.decision.2.compromiso':
    'Puedo servir un dato con horas de antigüedad. Por eso cada importe en la interfaz muestra la fuente y la fecha de captura, y el override manual conserva la última palabra para el operador.',
  'case.decision.2.note.0':
    'La función devuelve tasa + fuente + descripción legible: el nivel del respaldo se conserva hasta la interfaz.',
  'case.decision.2.note.1':
    'El Route Handler valida Authorization: Bearer CRON_SECRET y declara maxDuration = 30.',

  // ── Caso de estudio · Mapa de capas ───────────────────────────────────────
  'case.diagram.title': 'Mapa de capas',
  'case.diagram.subtitle': 'las dependencias fluyen hacia abajo',
  'case.diagram.levelPrefix': 'NIVEL',
  'case.diagram.capa.0.titulo': 'Clientes',
  'case.diagram.capa.0.detalle':
    'Tres superficies con necesidades opuestas: el paciente reserva sin crear cuenta, el personal opera la clínica y el operador de la plataforma administra los tenants.',
  'case.diagram.capa.1.titulo': 'Borde y enrutado',
  'case.diagram.capa.1.detalle':
    'El proxy de Next.js 16 (antes middleware) resuelve la clínica desde el slug, exige sesión y membresía en tenant_users para /[clinicSlug]/admin/*, redirige al login conservando el destino, bloquea /super-admin/* por rol del token y saca del matcher /api/** para que cada Route Handler valide con RLS. La landing y este caso de estudio son rutas estáticas del mismo despliegue.',
  'case.diagram.capa.2.titulo': 'Aplicación · Next.js 16 (App Router)',
  'case.diagram.capa.2.detalle':
    'Server Components leen y renderizan en el servidor; Server Actions mutan el estado sin una capa REST intermedia; los Route Handlers cubren lo que necesita HTTP puro (cron diario, PDF y webhooks).',
  'case.diagram.capa.3.titulo': 'Dominio puro (sin E/S)',
  'case.diagram.capa.3.detalle':
    'Reglas fiscales, tasas, roles y validaciones en módulos de TypeScript puros: no conocen la base de datos, se importan desde el servidor y desde el navegador, y son fáciles de razonar y revisar.',
  'case.diagram.capa.4.titulo': 'Datos · Postgres (Supabase)',
  'case.diagram.capa.4.detalle':
    '16 tablas y 64 políticas RLS: cada consulta se evalúa contra la identidad del usuario y su clínica. Auth y Storage (logos, guías, comprobantes) viven en el mismo proyecto; la clave de servicio nunca llega al navegador.',
  'case.diagram.capa.5.titulo': 'Servicios externos',
  'case.diagram.capa.5.detalle':
    'El portal del BCV y dos APIs de respaldo alimentan la tasa; Vercel Cron ejecuta la captura diaria; los avisos salen por enlaces profundos de WhatsApp para no depender de una API de mensajería.',
  'case.diagram.foot':
    'La dirección importa: la aplicación conoce el dominio y la base de datos, el dominio no conoce a la aplicación. Por eso el motor fiscal se puede leer y verificar sin levantar el servidor, y por eso un cambio de alícuota es un cambio de una constante en un archivo.',

  // ── Caso de estudio · Decisiones descartadas ──────────────────────────────
  'case.desc.title': 'Alternativas que evalué y descarté',
  'case.desc.subtitle': 'Documentar lo que no se construyó es parte del diseño.',
  'case.desc.th.opcion': 'Alternativa considerada',
  'case.desc.th.motivo': 'Por qué no',
  'case.desc.th.elegido': 'Qué hice en su lugar',
  'case.desc.row.0.opcion': 'Microservicios por módulo',
  'case.desc.row.0.motivo':
    'Sobrecarga operativa y latencia entre servicios sin un equipo que los opere: el cuello de botella era el producto, no el cómputo.',
  'case.desc.row.0.elegido':
    'Monolito modular con módulos puros como frontera. Separar un módulo después es una decisión reversible.',
  'case.desc.row.1.opcion': 'Una base de datos (o un esquema) por clínica',
  'case.desc.row.1.motivo':
    'Multiplicar conexiones y migraciones para cada tenant cuesta más de operar que aislar con políticas declarativas.',
  'case.desc.row.1.elegido':
    'Multi-tenant por fila: tenant_id en las tablas + 64 políticas RLS y funciones de pertenencia.',
  'case.desc.row.2.opcion': 'API REST propia con estado global en el cliente',
  'case.desc.row.2.motivo':
    'Cada endpoint duplicaba validación, contratos y manejo de errores, y el cliente acumulaba estado que el servidor ya conocía.',
  'case.desc.row.2.elegido':
    'Server Actions tipadas que devuelven ActionResult con códigos accionables; el servidor sigue siendo la única fuente de verdad.',
  'case.desc.row.3.opcion': 'Calcular impuestos con un modelo de lenguaje',
  'case.desc.row.3.motivo':
    'Un impuesto no se estima: se calcula. Hacía falta determinismo, reproducibilidad y poder explicar cada bolívar ante una fiscalización.',
  'case.desc.row.3.elegido':
    'Funciones puras con las alícuotas como constantes (IVA 16 %, IGTF 3 %) y redondeo explícito a dos decimales.',
  'case.desc.row.4.opcion': 'Cron en un servicio externo (terceros o CI)',
  'case.desc.row.4.motivo':
    'Otra credencial que rotar, otra cuota que vigilar y otro panel donde buscar el porqué de un fallo.',
  'case.desc.row.4.elegido':
    'Vercel Cron apuntando a un Route Handler propio, autenticado con CRON_SECRET y con maxDuration declarado.',
  'case.desc.row.5.opcion': 'Guardar la tasa en una variable global del proceso',
  'case.desc.row.5.motivo':
    'En un entorno serverless no existe memoria compartida confiable entre invocaciones: el valor se perdería sin avisar.',
  'case.desc.row.5.elegido':
    'Persistencia en la tabla bcv_rates + caché HTTP de una hora en las consultas a la fuente.',

  // ── Caso de estudio · Sección 03 Retos técnicos ───────────────────────────
  'case.retos.eyebrow': 'Retos técnicos complejos',
  'case.retos.title': 'Tres problemas que separan un CRUD de un producto',
  'case.retos.description':
    'Un sistema de citas parece un formulario hasta que dos personas reservan el mismo turno en paralelo; una factura parece una multiplicación hasta que tres normas tienen condiciones de aplicación distintas. Estos son los problemas que resolví, con el código y las decisiones que los sostienen.',
  'case.reto1.kicker': 'Reto 01 · Concurrencia',
  'case.reto1.title': 'Que dos pacientes no compren el mismo turno',
  'case.reto1.intro':
    'El asistente de reserva es anónimo: cualquiera con el enlace puede tomar un turno sin crear cuenta. Eso significa que dos personas pueden estar pagando la misma hora en paralelo, y que la primera puede abandonar el proceso después de haber apartado el cupo. La solución no podía ser un bloqueo permanente —condenaría los turnos de los pacientes que cambian de opinión— ni un índice único en la base —no sabe medir el tiempo transcurrido—.',
  'case.reto1.flow.title': 'Ciclo de vida del bloqueo',
  'case.reto1.flow.body':
    'El estado de la cita es el que decide si el turno está ocupado. No hay banderas paralelas que puedan quedar desincronizadas.',
  'case.reto1.paso.0.titulo': 'El turno se bloquea, no se vende',
  'case.reto1.paso.0.detalle':
    'Al elegir el turno, el servidor crea la cita en estado \'pendiente\' con lock_expira_en = ahora + 15 minutos. El cupo queda reservado para ese paciente.',
  'case.reto1.paso.1.titulo': 'Quince minutos para pagar',
  'case.reto1.paso.1.detalle':
    'La pantalla corre un temporizador visible. Si el paciente registra el pago (Pago Móvil con comprobante o pago en caja), la cita avanza con la referencia y queda pendiente de validación.',
  'case.reto1.paso.2.titulo': 'El cupo se libera solo',
  'case.reto1.paso.2.detalle':
    'Si el bloqueo vence o el paciente retrocede en el asistente, releaseLockedSlot marca la cita como \'expirada\' o \'cancelada\' y el turno vuelve a ofrecerse sin que nadie intervenga.',
  'case.reto1.estado.0.estado': 'pendiente (lock vigente)',
  'case.reto1.estado.0.significado':
    'Un paciente está pagando en este momento la cita que reservó.',
  'case.reto1.estado.0.efecto': 'Bloquea el turno',
  'case.reto1.estado.1.estado': 'pendiente (lock vencido)',
  'case.reto1.estado.1.significado': 'El temporizador terminó y nadie completó el pago.',
  'case.reto1.estado.1.efecto': 'No bloquea: se ofrece de nuevo',
  'case.reto1.estado.2.estado': 'pendiente_validacion',
  'case.reto1.estado.2.significado':
    'El paciente reportó un Pago Móvil con referencia y comprobante.',
  'case.reto1.estado.2.efecto': 'Bloquea el turno',
  'case.reto1.estado.3.estado': 'pago_en_recepcion',
  'case.reto1.estado.3.significado': 'El paciente pagará en caja el día de la consulta.',
  'case.reto1.estado.3.efecto': 'Bloquea el turno',
  'case.reto1.estado.4.estado': 'cancelada / expirada',
  'case.reto1.estado.4.significado':
    'Liberada de forma explícita por el paciente o por vencimiento del bloqueo.',
  'case.reto1.estado.4.efecto': 'No bloquea',
  'case.reto1.note.0':
    'La cita nace bloqueada: el estado \'pendiente\' con fecha de expiración es el propio mecanismo de reserva.',
  'case.reto1.note.1':
    'Disponibilidad y liberación: la segunda operación solo aplica si la cita sigue en \'pendiente\' (guarda optimista).',
  'case.reto1.callout.title': 'La lección de la migración 0003',
  'case.reto1.callout.body':
    'La primera versión protegía la doble reserva con un índice único sobre la fecha y el turno. Funcionaba hasta que el bloqueo vencía: el índice no sabe medir tiempo, así que los turnos abandonados quedaban muertos para siempre. Eliminar esa restricción fue una decisión incómoda pero correcta: el control pasó al modelo de datos con un estado y una fecha de expiración que sí expresan la regla de negocio.',
  'case.reto2.kicker': 'Reto 02 · Cumplimiento fiscal',
  'case.reto2.title': 'Una factura que tres normas exigen a la vez',
  'case.reto2.intro':
    'La factura venezolana no es un recibo con un porcentaje: es un documento con condiciones de aplicación. El IVA depende de si el servicio es gravado o exento, el IGTF depende del medio de pago y el desglose debe mostrarse en bolívares a la tasa del día y en dólares. Traducir cada norma a código fue el trabajo más delicado del proyecto, porque un error aquí no es un bug estético: es una contingencia fiscal para el cliente.',
  'case.reto2.regla.0.titulo': 'IVA del 16 % con exención médica',
  'case.reto2.regla.0.detalle':
    'La alícuota general es 16 %, pero los servicios médicos directos están exentos (Art. 17, numeral 4 de la Ley de IVA). En el modelo cada servicio del catálogo declara su condición: alicuotaIva(taxable) devuelve 0.16 o 0. El sistema no infiere la condición clínica del servicio; la clínica la declara una vez en el catálogo.',
  'case.reto2.regla.1.titulo': 'IGTF del 3 % solo cuando el cobro llega en divisas',
  'case.reto2.regla.1.detalle':
    'El impuesto a las grandes transacciones financieras grava los pagos en moneda extranjera. En lugar de asumir una regla global por país, cada método de cobro declara si lo causa: Zelle y efectivo en dólares lo causan; Pago Móvil, transferencia, efectivo en bolívares y punto de venta no.',
  'case.reto2.regla.2.titulo': 'Doble despliegue y numeración de formas libres',
  'case.reto2.regla.2.detalle':
    'El catálogo se fija en dólares y la factura se emite a la tasa BCV del cobro: cada línea conserva subtotal, IVA y total en ambas monedas, con redondeo explícito a dos decimales para evitar desvíos de coma flotante. La numeración fiscal combina correlativo y número de control, y el IGTF se recalcula cada vez que se registra un cobro.',
  'case.reto2.rules.title': 'Reglas por método de cobro',
  'case.reto2.rules.body':
    'La condición del impuesto vive junto al método que la causa, no en un condicional escondido en la pantalla de cobro.',
  'case.reto2.th.metodo': 'Método',
  'case.reto2.th.moneda': 'Moneda',
  'case.reto2.th.igtf': 'IGTF',
  'case.reto2.th.referencia': 'Referencia',
  'case.reto2.fila.0.metodo': 'Pago Móvil',
  'case.reto2.fila.0.referencia': 'Sí (4 a 8 dígitos)',
  'case.reto2.fila.1.metodo': 'Transferencia (Bs.)',
  'case.reto2.fila.1.referencia': 'Sí',
  'case.reto2.fila.2.metodo': 'Efectivo Bs.',
  'case.reto2.fila.2.referencia': 'No',
  'case.reto2.fila.3.metodo': 'Punto de venta',
  'case.reto2.fila.3.referencia': 'No',
  'case.reto2.fila.4.metodo': 'Zelle',
  'case.reto2.fila.4.referencia': 'Sí',
  'case.reto2.fila.5.metodo': 'Efectivo USD',
  'case.reto2.fila.5.referencia': 'No',
  'case.term.noAplica': 'No aplica',
  'case.reto2.note.0':
    'Funciones puras: mismos resultados en el servidor, en el navegador y en un script de verificación.',
  'case.reto2.note.1':
    'El IGTF no se pregunta en la pantalla de cobro: se deduce del método registrado.',
  'case.reto2.callout.title': 'El mismo módulo valida los documentos fiscales',
  'case.reto2.callout.body':
    'RIF (V, E, J, G), cédula y pasaporte se normalizan a un formato canónico antes de tocar la base de datos, y todas las conversiones pasan por un redondeo a dos decimales para que el total que ve el paciente, el que registra caja y el que imprime la factura sean exactamente el mismo número.',
  'case.reto3.kicker': 'Reto 03 · Seguridad y permisos',
  'case.reto3.title': 'Cinco roles, veintiún permisos y varias sedes',
  'case.reto3.intro':
    'En una clínica conviven un administrador, dos recepcionistas, cinco médicos, un contador externo y un operador de la plataforma. Todos usan el mismo panel y ninguno debe ver ni poder cambiar lo mismo. Ese reparto no puede vivir en el componente de turno: se aplica en tres capas, con una única fuente de verdad escrita una sola vez.',
  'case.reto3.capa.0.titulo': 'Capa de datos · RLS',
  'case.reto3.capa.0.detalle':
    'Las 64 políticas de Postgres verifican pertenencia y rol mediante funciones SECURITY DEFINER (is_staff, is_tenant_admin, is_super_admin). Incluso con un error en el cliente, una consulta no puede leer ni escribir datos de otra clínica.',
  'case.reto3.capa.1.titulo': 'Capa de servidor · Server Actions',
  'case.reto3.capa.1.detalle':
    'Antes de mutar, cada acción revalida el permiso con el mismo módulo puro que consume la interfaz. El panel pide sus datos por HTTP con la sesión en cookies: el navegador nunca maneja credenciales de servicio.',
  'case.reto3.capa.2.titulo': 'Capa de interfaz · UI',
  'case.reto3.capa.2.detalle':
    'La navegación se calcula con los permisos efectivos del rol: quien no puede guardar una configuración no ve el formulario, en lugar de descubrir el rechazo al enviarlo. La misma función decide a qué panel entra cada persona al iniciar sesión.',
  'case.reto3.multisede.label': 'Multi-sede:',
  'case.reto3.multisede.body':
    'cada persona se asigna a una o varias sedes (tenant_users.sede_ids) y la facturación usa la sede por defecto de la clínica. La lectura de esas asignaciones tolera entornos donde la migración todavía no se aplicó, así que un despliegue parcial no rompe el acceso.',
  'case.reto3.matrix.title': 'Matriz real de permisos por rol',
  'case.reto3.matrix.body':
    'Esta tabla no está escrita a mano: se calcula con permisosDeRol(), la misma función que usan los Server Actions y que define los helpers de las políticas RLS. Si el RBAC cambia, esta matriz cambia sola.',
  'case.reto3.th.permiso': 'Permiso',
  'case.reto3.permisosSuffix': 'permisos',
  'case.reto3.granted': 'Concedido',
  'case.reto3.notGranted': 'No concedido',
  'case.reto3.foot':
    'Los roles de la dimensión clínica (recepcion, especialista, medico, contador) se normalizan a uno de los cinco roles soportados, de modo que un dato heredado no pueda conceder permisos por accidente.',

  // ── Caso de estudio · Sección 04 Aprendizajes y escalabilidad ─────────────
  'case.apr.eyebrow': 'Aprendizajes y escalabilidad',
  'case.apr.title': 'Lo que aprendí y por qué este sistema aguanta crecer',
  'case.apr.description':
    'Construir un producto regulado con una sola persona obliga a elegir dónde vive cada responsabilidad. Estas son las conclusiones que aplicaría al siguiente proyecto, sin maquillar lo que aún queda pendiente.',
  'case.apr.item.0.titulo': 'El determinismo es una característica de producto',
  'case.apr.item.0.detalle':
    'El camino crítico —cotizar, cobrar, facturar— no consulta ningún modelo de lenguaje: usa constantes, funciones puras y redondeo explícito. Un impuesto no se estima, se calcula. Eso hace el resultado reproducible, explicable ante una fiscalización y trivial de ejecutar. La automatización vive en los bordes (capturar la tasa, disparar el cron, avisar al paciente), donde un fallo se degrada sin corromper un número.',
  'case.apr.item.1.titulo':
    'La frontera correcta ahorra más código que cualquier abstracción',
  'case.apr.item.1.detalle':
    'Poner el aislamiento entre clínicas en RLS, y no en cada consulta, eliminó una clase completa de errores: ya no hay filtro que olvidar. La regla que me llevo: si el olvido es posible, el diseño está mal.',
  'case.apr.item.2.titulo': 'Tolerancia a esquemas parcialmente migrados',
  'case.apr.item.2.detalle':
    'El código detecta la ausencia de columnas y reintenta con un payload reducido, así que la aplicación funciona aunque una migración aún no se haya aplicado en el entorno de destino. Permite desplegar aplicación y esquema a ritmos distintos sin congelar el producto.',
  'case.apr.item.3.titulo': 'Un módulo puro es documentación ejecutable',
  'case.apr.item.3.detalle':
    'Los archivos de dominio (fiscal-ve, billing-ve, bcv, rbac) no importan Supabase ni React. Eso permite leer el cumplimiento fiscal de un país en un archivo, revisar el impacto de un cambio de alícuota en un diff pequeño y razonar el cálculo sin levantar el servidor.',
  'case.apr.item.4.titulo': 'Lo que todavía no está',
  'case.apr.item.4.detalle':
    'Digo yo lo que falta antes que un revisor: el aforo por turno está declarado como pendiente en el código (hoy el control es por bloqueo de 15 minutos, no por cupo máximo), los avisos usan enlaces de WhatsApp en lugar de la API oficial de mensajería, y falta una batería de pruebas end-to-end del flujo completo de facturación.',
  'case.apr.scale.title': 'Cómo escala este diseño',
  'case.apr.scale.0':
    'Cada clínica es una fila, no una base de datos: incorporar un tenant nuevo no agrega operación ni migraciones replicadas.',
  'case.apr.scale.1':
    'El aislamiento escala con el motor de Postgres, no con la cantidad de condiciones escritas en la aplicación.',
  'case.apr.scale.2':
    'Los planes comerciales limitan especialistas y uso desde una única fuente, así que empaquetar o vender distinto no toca la lógica de agenda.',
  'case.apr.scale.3':
    'La normativa vive solo en los módulos de país: soportar otro país es escribir un módulo hermano, no mantener un fork del producto.',
  'case.apr.scale.4':
    'Siguiente tramo técnico: cola de trabajos con reintentos para el cron, particionado de la tabla de auditoría, registro de la fuente de tasa usada en cada cobro y pruebas de contrato sobre los cálculos fiscales.',
  'case.apr.callout.title': 'Si volviera a empezar mañana',
  'case.apr.callout.body':
    'Mantendría el monolito modular y la seguridad en la base de datos, adelantaría las pruebas de los cálculos fiscales al primer sprint —no son código aburrido, son el corazón del producto— y diseñaría el aforo por turno desde el modelo de datos, en lugar de dejarlo como una tarea pendiente bien documentada. El resto del recorrido lo volvería a hacer igual: pocas piezas, cada una en la capa donde el problema es más barato de resolver.',

  // ── Caso de estudio · Sección 05 Cierre y contacto ────────────────────────
  'case.cta.eyebrow': 'Contacto',
  'case.cta.title': '¿Construimos el próximo producto con este nivel de criterio?',
  'case.cta.description':
    'Estoy disponible para roles full-stack o de backend en equipos de producto, con especial interés en dominios donde la normativa local, los pagos y los datos sensibles son el verdadero problema de ingeniería. El código de Medisys está abierto: revísalo y escríbeme con la pregunta que quieras.',
  'case.cta.github': 'Ver el código en GitHub',
  'case.cta.whatsapp': 'WhatsApp',
  'case.cta.chip.personal': 'Respondo personalmente cada mensaje',
  'case.cta.chip.docs': 'Documentación y código en español e inglés',
  'case.cta.aporte.0.titulo': 'Arquitectura sin sobre-ingeniería',
  'case.cta.aporte.0.detalle':
    'Capacidad de elegir el diseño más simple que resuelve el problema —y de documentar qué se descartó y por qué— con un monolito modular tipado y desplegado en un solo lugar.',
  'case.cta.aporte.1.titulo': 'Seguridad y datos',
  'case.cta.aporte.1.detalle':
    'Aislamiento multi-tenant con Row Level Security, RBAC de tres capas y multi-sede: el acceso se decide en el motor de la base de datos, no por convención ni por disciplina.',
  'case.cta.aporte.2.titulo': 'Dominios regulados',
  'case.cta.aporte.2.detalle':
    'Traducción de normativa fiscal a funciones puras y auditables (IVA, IGTF, doble moneda, numeración) y de la ausencia de pasarelas locales a flujos de cobro reales.',
  'case.cta.aporte.3.titulo': 'Rendimiento y operación',
  'case.cta.aporte.3.detalle':
    'Server Components para servir menos JavaScript, caché en las fuentes externas, cron con credencial propia y un motor de tasas que degrada con elegancia en lugar de fallar.',
  'case.cta.routes': 'Recorridos sugeridos',
  'case.cta.route.0': 'Reserva una cita en la clínica demo',
  'case.cta.route.1': 'Ver la plataforma en producción',
  'case.cta.route.2': 'Leer el motor fiscal y el de tasas',
  'case.cta.hard.title': '¿Prefieres empezar por lo difícil?',
  'case.cta.hard.body':
    'La sección de retos técnicos explica el bloqueo de 15 minutos, el cálculo condicional del IGTF y la matriz de permisos. Si vas a evaluar el código, ese es el mejor lugar para empezar a leerlo críticamente.',
  'case.cta.hard.cta': 'Ir a los retos técnicos',
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

  // ── Client portal (login / sign-up) ───────────────────────────────────────
  'auth.portal': 'B2B Client Portal',
  'auth.email': 'Email address',
  'auth.emailPlaceholder': 'you@email.com',
  'auth.password': 'Password',
  'auth.passwordPlaceholder': 'At least 6 characters',
  'auth.passwordConfirm': 'Confirm Password',
  'auth.passwordConfirmPlaceholder': 'Repeat your password',
  'auth.company': 'Company Name',
  'auth.companyPlaceholder': 'e.g. Acme Inc.',
  'auth.haveAccount': 'Already have an account?',
  'auth.noAccount': 'Don’t have an account?',
  'auth.contactUs': 'Contact us',
  'auth.signin.title': 'Sign In',
  'auth.signin.subtitle': 'Sign in with your registered email address.',
  'auth.signin.submit': 'Sign In',
  'auth.signin.loading': 'Signing in...',
  'auth.signin.link': 'Sign In',
  'auth.signin.error': 'Sign-in failed. Please check your credentials.',
  'auth.signup.title': 'Create Account',
  'auth.signup.subtitle': 'Sign up to access the client panel.',
  'auth.signup.submit': 'Create Account',
  'auth.signup.loading': 'Creating account...',
  'auth.signup.done': 'Account Created ✓',
  'auth.signup.success':
    'Account created successfully! Check your email to confirm your address before signing in.',
  'auth.signup.errorCompany': 'Please enter your company name.',
  'auth.signup.errorPasswordShort': 'The password must be at least 6 characters long.',
  'auth.signup.errorPasswordMismatch': 'The passwords do not match.',
  'auth.signup.errorExists': 'This email address is already registered.',
  'auth.signup.error': 'Failed to create the account. Please try again.',

  // ── Case study · Medisys (data-i18n in src/components/caso-saas) ──────────
  'case.meta.title': 'Case study · Medisys',
  'case.meta.description':
    'How I designed and built Medisys: a multi-tenant medical SaaS and tax suite for Venezuela. 44.3k lines of TS/TSX, 22 SQL migrations, 64 RLS policies and a tax engine with VAT, IGTF and dual currency.',
  'case.page.navLabel': 'Case study sections',
  'case.page.sourceCode': 'Source code',
  'case.nav.reto': 'The challenge',
  'case.nav.arquitectura': 'Architecture',
  'case.nav.retos-tecnicos': 'Technical challenges',
  'case.nav.aprendizajes': 'Lessons learned',
  'case.nav.contacto': 'Contact',

  // ── Case study · Hero ─────────────────────────────────────────────────────
  'case.hero.title': 'How I designed and built',
  'case.hero.subtitle': 'Multi-tenant medical SaaS and tax suite for Venezuela',
  'case.hero.intro':
    'A platform that digitises a clinic’s entire operation —scheduling, payments, records, invoicing and accounting— in a market where the official exchange rate changes daily, international gateways do not operate and every invoice must comply with the SENIAT. This is the project’s technical journey: the architecture decisions, the trade-offs they carry and the hard problems I solved.',
  'case.hero.ctaCode': 'Explore the source code',
  'case.hero.ctaDemo': 'Try the demo clinic',
  'case.hero.chip.dev': '1 developer · full-stack',
  'case.hero.chip.saas': 'Multi-tenant SaaS in production',
  'case.hero.rol.label': 'Role',
  'case.hero.rol.value': 'Architecture, backend, frontend and data',
  'case.hero.scope.label': 'Scope',
  'case.hero.scope.value':
    'Complete product: 3 management modules, portals and Super Admin · 49 routes',
  'case.hero.constraint.label': 'Constraint',
  'case.hero.constraint.value': 'One-person team · serverless infrastructure',
  'case.hero.hallazgo.0.titulo': 'Modular monolith, not microservices',
  'case.hero.hallazgo.0.detalle':
    'A single Vercel deployment with Server Components and Server Actions: less operational surface, the same domain boundaries.',
  'case.hero.hallazgo.1.titulo': 'Security in the database',
  'case.hero.hallazgo.1.detalle':
    '64 RLS policies isolate every clinic and every role: a flaw in the interface cannot leak another tenant’s data.',
  'case.hero.hallazgo.2.titulo': 'Concurrency with a clock',
  'case.hero.hallazgo.2.detalle':
    '15-minute locks on appointment slots: a slot is released on its own only when the patient does not complete the payment in time.',
  'case.hero.hallazgo.3.titulo': 'Automated tax compliance',
  'case.hero.hallazgo.3.detalle':
    'VAT 16%, IGTF 3% only on foreign currency, dual USD/VES breakdown and tax numbering: deterministic, auditable computation with no AI at runtime.',

  // ── Case study · Technical sheet ──────────────────────────────────────────
  'case.ficha.title': 'Technical sheet',
  'case.ficha.links': 'Direct links',
  'case.ficha.link.0.titulo': 'Repository',
  'case.ficha.link.1.titulo': 'Demo clinic',
  'case.ficha.link.2.titulo': 'Contact',
  'case.stack.0.detalle': 'App Router · RSC · Server Actions',
  'case.stack.1.detalle': 'Streaming + route composition',
  'case.stack.2.detalle': 'strict, end-to-end database types',
  'case.stack.3.detalle': 'Postgres · Auth · Storage · RLS',
  'case.stack.4.detalle': 'tokens in @theme, no dead CSS',
  'case.stack.5.detalle': 'Daily cron · routing middleware',
  'case.metricas.0.label': 'TS/TSX lines',
  'case.metricas.0.detalle': '212 files in src/',
  'case.metricas.1.label': 'SQL migrations',
  'case.metricas.1.detalle': 'versioned schema of 16 tables',
  'case.metricas.2.label': 'RLS policies',
  'case.metricas.2.detalle': 'isolation per clinic and per role',
  'case.metricas.3.label': 'App Router routes',
  'case.metricas.3.detalle': '32 pages + 17 route handlers',
  'case.metricas.4.label': 'use server modules',
  'case.metricas.4.detalle': 'mutations with no intermediate REST API',
  'case.metricas.5.label': 'roles × permissions',
  'case.metricas.5.detalle': 'RBAC computed from a single source',

  // ── Case study · Section 01 The challenge ─────────────────────────────────
  'case.reto.eyebrow': 'The challenge',
  'case.reto.title': 'A sector still running on paper, phone calls and Excel',
  'case.reto.description':
    'Medisys was not born as an architecture exercise: it came from three concrete pains of Venezuelan clinics. Understanding them is what defined every technical decision that followed.',
  'case.reto.dolor.0.titulo': 'The schedule lives in a notebook and on WhatsApp',
  'case.reto.dolor.0.dolor':
    'Two receptionists, one phone and a spreadsheet per branch. Slots are pencilled in and crossed out when the patient confirms by message.',
  'case.reto.dolor.0.impacto':
    'Double-booked slots and empty consultation hours: every ghost appointment is lost revenue and a patient who never comes back.',
  'case.reto.dolor.1.titulo': 'Getting paid in a country without payment gateways',
  'case.reto.dolor.1.dolor':
    'International gateways take months to approve an account; in practice you collect with Pago Móvil, Zelle, cash and card terminals, checking screenshots sent by the patient.',
  'case.reto.dolor.1.impacto':
    'Prices set in dollars and payments in bolivars at the daily rate: without a reliable rate, reconciling the till becomes a daily argument.',
  'case.reto.dolor.2.titulo': 'Invoicing the law demands and Excel cannot deliver',
  'case.reto.dolor.2.dolor':
    '16% VAT with the medical-services exemption, 3% IGTF when payment arrives in foreign currency, free-form numbering with a serial and a control number, and a breakdown in bolivars and dollars.',
  'case.reto.dolor.2.impacto':
    'Issuing an invalid invoice or failing to declare the IGTF exposes the clinic to penalties: this is not a design problem, it is a compliance one.',
  'case.reto.impactoLabel': 'Impact:',
  'case.reto.restricciones.title': 'Design constraints',
  'case.reto.restriccion.0':
    'One-person team: any component a single person cannot maintain is technical debt dressed up as architecture.',
  'case.reto.restriccion.1':
    'No servers of our own: the initial budget allows no clusters, queues or containers to administer.',
  'case.reto.restriccion.2':
    'Unpredictable traffic: a social media campaign saturates booking within minutes and then calms down again.',
  'case.reto.restriccion.3':
    'Reception on flaky internet: the panel must open fast on old laptops and small screens.',
  'case.reto.restriccion.4':
    'The BCV publishes no API: its portal blocks clients without a browser User-Agent, so the rate can only be obtained through failure-tolerant scraping.',
  'case.reto.restriccion.5':
    'Health data: strict isolation between clinics and least privilege from the first commit, not as a later improvement.',
  'case.reto.callout.title': 'From pains to requirements',
  'case.reto.callout.body':
    'The three problems translated into four non-negotiable requirements that govern the entire system:',
  'case.reto.callout.r1':
    'Multi-tenant with isolation verifiable in the database, not only in the application code.',
  'case.reto.callout.r2': 'A reliable official rate, cached and with cascading fallbacks.',
  'case.reto.callout.r3': 'A deterministic, auditable tax engine that can be explained to the SENIAT.',
  'case.reto.callout.r4': 'An interface a receptionist can use on day one without a manual.',
  'case.reto.criterio.title': 'The criterion I applied across the whole project',
  'case.reto.criterio.body':
    'Every requirement was solved in the layer where the problem is cheapest to solve: isolation between clinics lives in Postgres (RLS), concurrency lives in the data model (locks with expiry), and tax compliance lives in pure functions with no I/O. That split is, in my opinion, the difference between a prototype and a product that invoices.',

  // ── Case study · Section 02 Architecture ──────────────────────────────────
  'case.arq.eyebrow': 'The architectural solution',
  'case.arq.title': 'Three decisions that hold the whole system up',
  'case.arq.description':
    'Every decision was taken against a concrete alternative, with its cost written down. These are the three that govern the product, the resulting layer map and the options I evaluated and discarded.',
  'case.arq.map.title': 'How everything connects',
  'case.arq.map.detail':
    'Six layers with an explicit dependency direction. Each arrow is a boundary I can review, test or replace independently.',
  'case.decision.badge': 'Decision',
  'case.term.porque': 'Why',
  'case.term.compromiso': 'Accepted trade-off',
  'case.decision.0.titulo': 'Modular monolith on Next.js 16, no microservices',
  'case.decision.0.decision':
    'A single application deployed on Vercel with the App Router: Server Components to read data, Server Actions to write it and pure domain modules instead of separate services.',
  'case.decision.0.porque.0':
    'An atomic deployment: no HTTP contracts between services, no version coordination between deployments.',
  'case.decision.0.porque.1':
    'Server Components remove the client → API → server round trip: the page arrives rendered and the panel ships less JavaScript to the browser.',
  'case.decision.0.porque.2':
    'Server Actions removed the intermediate REST layer: a mutation is a typed function, not an endpoint that has to be versioned and documented separately.',
  'case.decision.0.porque.3':
    'Database types travel end to end: if a column changes, the compiler warns before deployment.',
  'case.decision.0.porque.4':
    'Productivity for one person: interface, business rule and validation live in the same module and are reviewed in the same diff.',
  'case.decision.0.compromiso':
    'The deployment stays coupled: a failure in any module affects the whole product. I offset that by keeping the domain in pure, I/O-free modules, tolerating partially migrated schemas and shipping small, frequent changes instead of quarterly batches.',
  'case.decision.1.titulo': 'Security in the database, not only in the code',
  'case.decision.1.decision':
    'Postgres with Row Level Security as the main boundary, plus SECURITY DEFINER functions (is_staff, is_tenant_admin, is_super_admin) that resolve the user’s clinic membership and role.',
  'case.decision.1.porque.0':
    '64 policies over 16 tables: even if the interface slipped, a query cannot cross data between clinics.',
  'case.decision.1.porque.1':
    'Policies are evaluated against the token identity (auth.uid()), not against parameters the client could send or tamper with.',
  'case.decision.1.porque.2':
    'The browser never receives the service_role key: only the server cron uses it, to persist the daily rate and bypass RLS in a controlled way.',
  'case.decision.1.porque.3':
    'Storage follows the same rule: public reads for brand logos and writes restricted to authenticated staff.',
  'case.decision.1.porque.4':
    'Fail-safe by default: without a policy that allows it, access simply does not happen, with no reliance on anyone remembering to write the right filter.',
  'case.decision.1.compromiso':
    'Debugging declarative policies is slower than reading an if in TypeScript and some queries require helper functions. In exchange, isolation between clients no longer depends on each developer’s discipline.',
  'case.decision.2.titulo':
    'The rate engine as a resilient system, not as an HTTP call',
  'case.decision.2.decision':
    'A four-level cascade —the BCV portal, alternative APIs, the last persisted rate and a fallback value— that never throws and always reports where the number came from.',
  'case.decision.2.porque.0':
    'The BCV publishes no API and its portal blocks clients without a browser User-Agent: depending on a single source was unacceptable for a system that invoices.',
  'case.decision.2.porque.1':
    'A one-hour HTTP cache on external calls (revalidate: 3600) to avoid abusing the source or punishing the panel’s latency.',
  'case.decision.2.porque.2':
    'A daily cron captures the rate and persists it with service_role, feeding the backup level of the cascade.',
  'case.decision.2.porque.3':
    'The administrator can set the rate manually and review the capture history when the portal publishes late.',
  'case.decision.2.compromiso':
    'I may serve data that is hours old. That is why every amount in the interface shows its source and capture date, and the manual override keeps the final say for the operator.',
  'case.decision.2.note.0':
    'The function returns rate + source + human-readable description: the fallback level survives all the way to the interface.',
  'case.decision.2.note.1':
    'The Route Handler validates Authorization: Bearer CRON_SECRET and declares maxDuration = 30.',

  // ── Case study · Layer map ────────────────────────────────────────────────
  'case.diagram.title': 'Layer map',
  'case.diagram.subtitle': 'dependencies flow downwards',
  'case.diagram.levelPrefix': 'LEVEL',
  'case.diagram.capa.0.titulo': 'Clients',
  'case.diagram.capa.0.detalle':
    'Three surfaces with opposing needs: the patient books without creating an account, the staff runs the clinic and the platform operator manages the tenants.',
  'case.diagram.capa.1.titulo': 'Edge and routing',
  'case.diagram.capa.1.detalle':
    'The Next.js 16 proxy (formerly middleware) resolves the clinic from the slug, requires a session and tenant_users membership for /[clinicSlug]/admin/*, redirects to login preserving the destination, blocks /super-admin/* by token role and removes /api/** from the matcher so each Route Handler validates with RLS. The landing page and this case study are static routes of the same deployment.',
  'case.diagram.capa.2.titulo': 'Application · Next.js 16 (App Router)',
  'case.diagram.capa.2.detalle':
    'Server Components read and render on the server; Server Actions mutate state with no intermediate REST layer; Route Handlers cover what needs plain HTTP (daily cron, PDF and webhooks).',
  'case.diagram.capa.3.titulo': 'Pure domain (no I/O)',
  'case.diagram.capa.3.detalle':
    'Tax rules, rates, roles and validations in pure TypeScript modules: they do not know the database, they are imported from both the server and the browser, and they are easy to reason about and review.',
  'case.diagram.capa.4.titulo': 'Data · Postgres (Supabase)',
  'case.diagram.capa.4.detalle':
    '16 tables and 64 RLS policies: every query is evaluated against the user identity and their clinic. Auth and Storage (logos, guides, receipts) live in the same project; the service key never reaches the browser.',
  'case.diagram.capa.5.titulo': 'External services',
  'case.diagram.capa.5.detalle':
    'The BCV portal and two backup APIs feed the rate; Vercel Cron runs the daily capture; notifications go out as WhatsApp deep links so as not to depend on a messaging API.',
  'case.diagram.foot':
    'Direction matters: the application knows the domain and the database, the domain does not know the application. That is why the tax engine can be read and verified without booting the server, and why changing a tax rate is changing one constant in one file.',

  // ── Case study · Discarded decisions ──────────────────────────────────────
  'case.desc.title': 'Alternatives I evaluated and discarded',
  'case.desc.subtitle': 'Documenting what was not built is part of the design.',
  'case.desc.th.opcion': 'Alternative considered',
  'case.desc.th.motivo': 'Why not',
  'case.desc.th.elegido': 'What I did instead',
  'case.desc.row.0.opcion': 'Microservices per module',
  'case.desc.row.0.motivo':
    'Operational overhead and latency between services with no team to run them: the bottleneck was the product, not compute.',
  'case.desc.row.0.elegido':
    'A modular monolith with pure modules as the boundary. Splitting a module out later is a reversible decision.',
  'case.desc.row.1.opcion': 'One database (or schema) per clinic',
  'case.desc.row.1.motivo':
    'Multiplying connections and migrations for every tenant costs more to operate than isolating with declarative policies.',
  'case.desc.row.1.elegido':
    'Row-level multi-tenancy: tenant_id on the tables + 64 RLS policies and membership functions.',
  'case.desc.row.2.opcion': 'Our own REST API with global client state',
  'case.desc.row.2.motivo':
    'Every endpoint duplicated validation, contracts and error handling, and the client accumulated state the server already knew.',
  'case.desc.row.2.elegido':
    'Typed Server Actions returning an ActionResult with actionable codes; the server remains the single source of truth.',
  'case.desc.row.3.opcion': 'Computing taxes with a language model',
  'case.desc.row.3.motivo':
    'A tax is not estimated: it is calculated. What was needed was determinism, reproducibility and the ability to explain every bolivar during an audit.',
  'case.desc.row.3.elegido':
    'Pure functions with rates as constants (VAT 16%, IGTF 3%) and explicit rounding to two decimals.',
  'case.desc.row.4.opcion': 'Cron in an external service (third party or CI)',
  'case.desc.row.4.motivo':
    'One more credential to rotate, one more quota to watch and one more dashboard to search when something breaks.',
  'case.desc.row.4.elegido':
    'Vercel Cron pointing at our own Route Handler, authenticated with CRON_SECRET and with maxDuration declared.',
  'case.desc.row.5.opcion': 'Storing the rate in a process-global variable',
  'case.desc.row.5.motivo':
    'In a serverless environment there is no reliable shared memory between invocations: the value would vanish without warning.',
  'case.desc.row.5.elegido':
    'Persistence in the bcv_rates table + a one-hour HTTP cache on calls to the source.',

  // ── Case study · Section 03 Technical challenges ──────────────────────────
  'case.retos.eyebrow': 'Complex technical challenges',
  'case.retos.title': 'Three problems that separate a CRUD from a product',
  'case.retos.description':
    'An appointment system looks like a form until two people book the same slot in parallel; an invoice looks like a multiplication until three regulations have different conditions of application. These are the problems I solved, together with the code and the decisions behind them.',
  'case.reto1.kicker': 'Challenge 01 · Concurrency',
  'case.reto1.title': 'Two patients must not buy the same slot',
  'case.reto1.intro':
    'The booking assistant is anonymous: anyone with the link can take a slot without creating an account. That means two people can be paying for the same hour in parallel, and that the first one can abandon the process after having held the slot. The solution could not be a permanent lock —it would condemn the slots of patients who change their minds— nor a unique index in the database —it cannot measure elapsed time—.',
  'case.reto1.flow.title': 'Lock lifecycle',
  'case.reto1.flow.body':
    'The appointment’s state is what decides whether a slot is taken. There are no parallel flags that can drift out of sync.',
  'case.reto1.paso.0.titulo': 'The slot is locked, not sold',
  'case.reto1.paso.0.detalle':
    'When the slot is chosen, the server creates the appointment in \'pendiente\' (pending) state with lock_expira_en = now + 15 minutes. The slot stays reserved for that patient.',
  'case.reto1.paso.1.titulo': 'Fifteen minutes to pay',
  'case.reto1.paso.1.detalle':
    'The screen runs a visible timer. If the patient registers the payment (Pago Móvil with a receipt, or payment at the desk), the appointment moves forward with the reference and stays pending validation.',
  'case.reto1.paso.2.titulo': 'The slot frees itself',
  'case.reto1.paso.2.detalle':
    'If the lock expires or the patient goes back in the wizard, releaseLockedSlot marks the appointment as \'expirada\' or \'cancelada\' and the slot is offered again without anyone stepping in.',
  'case.reto1.estado.0.estado': 'pendiente (active lock)',
  'case.reto1.estado.0.significado':
    'A patient is paying right now for the appointment they booked.',
  'case.reto1.estado.0.efecto': 'Blocks the slot',
  'case.reto1.estado.1.estado': 'pendiente (expired lock)',
  'case.reto1.estado.1.significado': 'The timer ran out and nobody completed the payment.',
  'case.reto1.estado.1.efecto': 'Does not block: offered again',
  'case.reto1.estado.2.estado': 'pendiente_validacion',
  'case.reto1.estado.2.significado':
    'The patient reported a Pago Móvil with a reference and receipt.',
  'case.reto1.estado.2.efecto': 'Blocks the slot',
  'case.reto1.estado.3.estado': 'pago_en_recepcion',
  'case.reto1.estado.3.significado': 'The patient will pay at the desk on the day of the visit.',
  'case.reto1.estado.3.efecto': 'Blocks the slot',
  'case.reto1.estado.4.estado': 'cancelada / expirada',
  'case.reto1.estado.4.significado':
    'Released explicitly by the patient or because the lock expired.',
  'case.reto1.estado.4.efecto': 'Does not block',
  'case.reto1.note.0':
    'The appointment is born locked: the \'pendiente\' state with an expiry date is the booking mechanism itself.',
  'case.reto1.note.1':
    'Availability and release: the second operation only applies while the appointment is still \'pendiente\' (optimistic guard).',
  'case.reto1.callout.title': 'The lesson from migration 0003',
  'case.reto1.callout.body':
    'The first version protected against double booking with a unique index on the date and slot. It worked until the lock expired: the index cannot measure time, so abandoned slots stayed dead forever. Removing that constraint was an uncomfortable but correct decision: control moved into the data model, with a state and an expiry date that genuinely express the business rule.',
  'case.reto2.kicker': 'Challenge 02 · Tax compliance',
  'case.reto2.title': 'One invoice that three regulations demand at once',
  'case.reto2.intro':
    'The Venezuelan invoice is not a receipt with a percentage: it is a document with conditions of application. VAT depends on whether the service is taxable or exempt, the IGTF depends on the payment method and the breakdown must be shown in bolivars at the day’s rate and in dollars. Translating each rule into code was the most delicate work of the project, because a mistake here is not a cosmetic bug: it is a tax contingency for the client.',
  'case.reto2.regla.0.titulo': 'VAT 16% with the medical exemption',
  'case.reto2.regla.0.detalle':
    'The general rate is 16%, but direct medical services are exempt (Art. 17, numeral 4 of the VAT Law). In the model every catalogue service declares its condition: alicuotaIva(taxable) returns 0.16 or 0. The system does not infer the clinical condition of the service; the clinic declares it once in the catalogue.',
  'case.reto2.regla.1.titulo': 'IGTF 3% only when payment arrives in foreign currency',
  'case.reto2.regla.1.detalle':
    'The tax on large financial transactions levies payments made in foreign currency. Instead of assuming a country-wide rule, each payment method declares whether it triggers it: Zelle and cash in dollars do; Pago Móvil, transfers, cash in bolivars and card terminals do not.',
  'case.reto2.regla.2.titulo': 'Dual breakdown and free-form tax numbering',
  'case.reto2.regla.2.detalle':
    'The catalogue is priced in dollars and the invoice is issued at the BCV rate of the payment: every line keeps subtotal, VAT and total in both currencies, with explicit rounding to two decimals to avoid floating-point drift. Tax numbering combines a serial and a control number, and the IGTF is recalculated every time a payment is registered.',
  'case.reto2.rules.title': 'Rules by payment method',
  'case.reto2.rules.body':
    'The tax condition lives next to the method that triggers it, not in a conditional hidden on the payment screen.',
  'case.reto2.th.metodo': 'Method',
  'case.reto2.th.moneda': 'Currency',
  'case.reto2.th.igtf': 'IGTF',
  'case.reto2.th.referencia': 'Reference',
  'case.reto2.fila.0.metodo': 'Pago Móvil',
  'case.reto2.fila.0.referencia': 'Yes (4 to 8 digits)',
  'case.reto2.fila.1.metodo': 'Bank transfer (Bs.)',
  'case.reto2.fila.1.referencia': 'Yes',
  'case.reto2.fila.2.metodo': 'Cash Bs.',
  'case.reto2.fila.2.referencia': 'No',
  'case.reto2.fila.3.metodo': 'Card terminal',
  'case.reto2.fila.3.referencia': 'No',
  'case.reto2.fila.4.metodo': 'Zelle',
  'case.reto2.fila.4.referencia': 'Yes',
  'case.reto2.fila.5.metodo': 'Cash USD',
  'case.reto2.fila.5.referencia': 'No',
  'case.term.noAplica': 'Not applicable',
  'case.reto2.note.0':
    'Pure functions: identical results on the server, in the browser and in a verification script.',
  'case.reto2.note.1':
    'The IGTF is never asked for on the payment screen: it is derived from the registered method.',
  'case.reto2.callout.title': 'The same module validates the tax documents',
  'case.reto2.callout.body':
    'RIF (V, E, J, G), national ID and passport are normalised to a canonical format before touching the database, and every conversion goes through rounding to two decimals so that the total the patient sees, the one the cashier records and the one printed on the invoice are exactly the same number.',
  'case.reto3.kicker': 'Challenge 03 · Security and permissions',
  'case.reto3.title': 'Five roles, twenty-one permissions and several branches',
  'case.reto3.intro':
    'A clinic brings together an administrator, two receptionists, five doctors, an external accountant and a platform operator. They all use the same panel and none of them should see or be able to change the same things. That split cannot live inside the rota component: it is applied in three layers, from a single source of truth written once.',
  'case.reto3.capa.0.titulo': 'Data layer · RLS',
  'case.reto3.capa.0.detalle':
    'Postgres’s 64 policies verify membership and role through SECURITY DEFINER functions (is_staff, is_tenant_admin, is_super_admin). Even with a bug on the client, a query cannot read or write another clinic’s data.',
  'case.reto3.capa.1.titulo': 'Server layer · Server Actions',
  'case.reto3.capa.1.detalle':
    'Before mutating, every action revalidates the permission with the same pure module the interface consumes. The panel requests its data over HTTP with the session in cookies: the browser never handles service credentials.',
  'case.reto3.capa.2.titulo': 'Interface layer · UI',
  'case.reto3.capa.2.detalle':
    'Navigation is computed from the role’s effective permissions: whoever cannot save a setting does not see the form, instead of discovering the rejection on submit. The same function decides which panel each person enters after signing in.',
  'case.reto3.multisede.label': 'Multi-branch:',
  'case.reto3.multisede.body':
    'each person is assigned to one or several branches (tenant_users.sede_ids) and billing uses the clinic’s default branch. Reading those assignments tolerates environments where the migration has not been applied yet, so a partial deployment does not break access.',
  'case.reto3.matrix.title': 'Real permission matrix by role',
  'case.reto3.matrix.body':
    'This table is not written by hand: it is computed with permisosDeRol(), the same function used by the Server Actions and by the helpers that define the RLS policies. If the RBAC changes, this matrix changes on its own.',
  'case.reto3.th.permiso': 'Permission',
  'case.reto3.permisosSuffix': 'permissions',
  'case.reto3.granted': 'Granted',
  'case.reto3.notGranted': 'Not granted',
  'case.reto3.foot':
    'The roles of the clinical dimension (recepcion, especialista, medico, contador) are normalised to one of the five supported roles, so that legacy data cannot grant permissions by accident.',

  // ── Case study · Section 04 Lessons learned ───────────────────────────────
  'case.apr.eyebrow': 'Lessons learned and scalability',
  'case.apr.title': 'What I learned and why this system can take growth',
  'case.apr.description':
    'Building a regulated product single-handedly forces you to choose where each responsibility lives. These are the conclusions I would apply to the next project, without glossing over what is still pending.',
  'case.apr.item.0.titulo': 'Determinism is a product feature',
  'case.apr.item.0.detalle':
    'The critical path —quoting, charging, invoicing— consults no language model: it uses constants, pure functions and explicit rounding. A tax is not estimated, it is calculated. That makes the result reproducible, explainable during an audit and trivial to run. Automation lives at the edges (fetching the rate, firing the cron, notifying the patient), where a failure degrades without corrupting a number.',
  'case.apr.item.1.titulo': 'The right boundary saves more code than any abstraction',
  'case.apr.item.1.detalle':
    'Putting clinic isolation in RLS, rather than in every query, removed a whole class of errors: there is no filter left to forget. The rule I take away: if forgetting is possible, the design is wrong.',
  'case.apr.item.2.titulo': 'Tolerance for partially migrated schemas',
  'case.apr.item.2.detalle':
    'The code detects missing columns and retries with a reduced payload, so the application still works when a migration has not yet been applied in the target environment. It lets you ship application and schema at different paces without freezing the product.',
  'case.apr.item.3.titulo': 'A pure module is executable documentation',
  'case.apr.item.3.detalle':
    'The domain files (fiscal-ve, billing-ve, bcv, rbac) import neither Supabase nor React. That lets you read a country’s tax compliance in a single file, review the impact of a rate change in a small diff and reason about the calculation without booting the server.',
  'case.apr.item.4.titulo': 'What is not there yet',
  'case.apr.item.4.detalle':
    'I state what is missing before a reviewer does: per-slot capacity is declared as pending in the code (today the control is a 15-minute lock, not a maximum quota), notifications use WhatsApp links instead of the official messaging API, and an end-to-end test suite for the full invoicing flow is still missing.',
  'case.apr.scale.title': 'How this design scales',
  'case.apr.scale.0':
    'Each clinic is a row, not a database: onboarding a new tenant adds no operations and no replicated migrations.',
  'case.apr.scale.1':
    'Isolation scales with the Postgres engine, not with the number of conditions written into the application.',
  'case.apr.scale.2':
    'Commercial plans limit specialists and usage from a single source, so packaging or selling differently never touches the scheduling logic.',
  'case.apr.scale.3':
    'Regulation lives only in the country modules: supporting another country means writing a sibling module, not maintaining a fork of the product.',
  'case.apr.scale.4':
    'Next technical stretch: a job queue with retries for the cron, partitioning of the audit table, recording which rate source was used for each payment and contract tests over the tax calculations.',
  'case.apr.callout.title': 'If I started again tomorrow',
  'case.apr.callout.body':
    'I would keep the modular monolith and database-level security, I would move the tax calculation tests into the first sprint —they are not boring code, they are the heart of the product— and I would design per-slot capacity into the data model from the start instead of leaving it as a well-documented pending task. The rest of the journey I would do the same way: few pieces, each one in the layer where the problem is cheapest to solve.',

  // ── Case study · Section 05 Closing and contact ───────────────────────────
  'case.cta.eyebrow': 'Contact',
  'case.cta.title': 'Shall we build the next product with this level of rigour?',
  'case.cta.description':
    'I am available for full-stack or backend roles in product teams, with a particular interest in domains where local regulation, payments and sensitive data are the real engineering problem. The Medisys code is open: review it and write to me with whatever question you like.',
  'case.cta.github': 'View the code on GitHub',
  'case.cta.whatsapp': 'WhatsApp',
  'case.cta.chip.personal': 'I answer every message personally',
  'case.cta.chip.docs': 'Documentation and code in Spanish and English',
  'case.cta.aporte.0.titulo': 'Architecture without over-engineering',
  'case.cta.aporte.0.detalle':
    'The ability to pick the simplest design that solves the problem —and to document what was discarded and why— with a typed modular monolith deployed in one place.',
  'case.cta.aporte.1.titulo': 'Security and data',
  'case.cta.aporte.1.detalle':
    'Multi-tenant isolation with Row Level Security, three-layer RBAC and multi-branch: access is decided in the database engine, not by convention or discipline.',
  'case.cta.aporte.2.titulo': 'Regulated domains',
  'case.cta.aporte.2.detalle':
    'Translating tax regulation into pure, auditable functions (VAT, IGTF, dual currency, numbering) and turning the absence of local gateways into real payment flows.',
  'case.cta.aporte.3.titulo': 'Performance and operations',
  'case.cta.aporte.3.detalle':
    'Server Components to ship less JavaScript, caching on external sources, a cron with its own credential and a rate engine that degrades gracefully instead of failing.',
  'case.cta.routes': 'Suggested paths',
  'case.cta.route.0': 'Book an appointment in the demo clinic',
  'case.cta.route.1': 'See the platform in production',
  'case.cta.route.2': 'Read the tax and exchange-rate engines',
  'case.cta.hard.title': 'Prefer to start with the hard part?',
  'case.cta.hard.body':
    'The technical challenges section explains the 15-minute lock, the conditional IGTF calculation and the permission matrix. If you are going to evaluate the code, that is the best place to start reading it critically.',
  'case.cta.hard.cta': 'Go to the technical challenges',
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



