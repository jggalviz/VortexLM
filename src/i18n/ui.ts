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
  'nav.apps': 'Apps y Soporte',
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
  'footer.link.appsAdmin': 'Administración de Aplicaciones Web',

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

  // ── Servicios · Hero (ServicesHero.astro) ─────────────────────────────────
  'servicesHero.badge': 'Directorio de servicios',
  'servicesHero.aria': 'Hero — Directorio de servicios y perfiles técnicos',
  'servicesHero.title': 'Servicios de desarrollo',
  'servicesHero.titleAlt': 'white label para tu agencia',
  'servicesHero.subtitle':
    'Cuatro perfiles técnicos y un mismo estándar de ingeniería: desarrollo full-stack, ingeniería de CMS, administración de aplicaciones web y sistemas a medida. Todo el desarrollo que necesitas, bajo tu marca.',

  // ── Precios · Hero (PricingHero.astro) ────────────────────────────────────
  'pricingHero.badge': 'PRECIOS',
  'pricingHero.aria': 'Planes de precios vCredits',
  'pricingHero.titleLead': 'Planes flexibles de',
  'pricingHero.titleTail': 'para tu agencia',
  'pricingHero.subtitle':
    'Paga solo por el desarrollo que consumes. Sin contratos fijos, sin compromisos mensuales. Descuentos por volumen a partir de 500 créditos.',
  'pricingHero.currency': '1 vCredit = $1.05 USD o el cambio del día en euros',

  // ── B2B · Hero (B2BHero.astro) ────────────────────────────────────────────
  'b2bHero.badge': 'Partner Tecnológico White Label',
  'b2bHero.aria':
    'Hero principal — Externaliza desarrollo frontend y WordPress',
  'b2bHero.title': 'Externaliza desarrollo',
  'b2bHero.titleLine2': 'frontend y WordPress',
  'b2bHero.titleLine3': 'con tu propia marca',
  'b2bHero.subLead':
    'Sin contratos fijos ni compromisos mensuales. Nuestro modelo de ',
  'b2bHero.subTail':
    ' te permite comprar horas de desarrollo en bloque y consumirlas bajo demanda. Tú pones el brief, nosotros entregamos código listo para producción con tu marca — 100% white label, 100% profesional.',
  'b2bHero.ctaDemo': 'Solicitar una Demo',
  'b2bHero.ctaHow': 'Ver cómo funciona',
  'b2bHero.proof': 'Utilizado por agencias digitales en España y Estados Unidos',

  // ── White Label · Concepto (WhiteLabelConcept.astro) ──────────────────────
  'whiteLabel.badge': 'WHITE LABEL',
  'whiteLabel.aria': 'White Label — 100% invisible, 100% tu marca',
  'whiteLabel.titleLead': '100% invisible.',
  'whiteLabel.titleAlt': '100% tu marca.',
  'whiteLabel.subtitle':
    'Trabajamos en segundo plano para que tu agencia luzca como propia ante tus clientes.',
  'whiteLabel.p1.title': 'Marca Blanca Total',
  'whiteLabel.p1.desc':
    'Todos los entregables, comunicaciones y resultados se presentan como si fueran de tu agencia.',
  'whiteLabel.p1.note': 'Sin menciones a VortexLM.',
  'whiteLabel.p2.title': 'NDA y Confidencialidad',
  'whiteLabel.p2.desc':
    'Firmamos acuerdos de confidencialidad que protegen tu relación con tus clientes.',
  'whiteLabel.p2.note': 'Tu cartera de clientes es sagrada.',
  'whiteLabel.p3.title': 'Sin Intermediación',
  'whiteLabel.p3.descLead':
    'Nunca contactamos a tus clientes ni nos presentamos como proveedores. La relación comercial es siempre entre',
  'whiteLabel.p3.descTail': 'tu agencia y tu cliente.',
  'whiteLabel.seal.text': 'NDA',
  'whiteLabel.seal.label': 'Acuerdo de Confidencialidad',
  'whiteLabel.seal.lead': 'Acuerdo de Confidencialidad incluido en',
  'whiteLabel.seal.strong': 'todos los proyectos',
  'whiteLabel.seal.note': 'Protegemos tu relación con tus clientes',

  // ── B2B · Explora más (B2BExpandLinks.astro) ──────────────────────────────
  'expand.badge': 'Explora más',
  'expand.aria': 'Explora más sobre VortexLM',
  'expand.title': 'Todo lo que necesitas saber',
  'expand.subLead': 'Descubre cómo funciona el modelo',
  'expand.subTail':
    ', explora nuestros servicios y elige el plan ideal para tu agencia.',
  'expand.card1.title': '¿Cómo funciona?',
  'expand.card1.descLead': 'Descubre el proceso completo: desde la compra de',
  'expand.card1.descTail': 'hasta la entrega de tu proyecto.',
  'expand.card2.title': 'Servicios',
  'expand.card2.desc':
    'Frontend, WordPress, APIs y más. Todo el desarrollo que tu agencia necesita, bajo tu marca.',
  'expand.card3.title': 'Precios',
  'expand.card3.descLead': 'Planes flexibles de',
  'expand.card3.descTail':
    'adaptados al volumen de tu agencia. Sin sorpresas ni costes ocultos.',
  'expand.ctaMore': 'Ver más',
  'expand.footnote': 'Sin compromisos. Explora sin prisas.',

  // ── B2B · Ventajas (B2BBenefits.astro) ────────────────────────────────────
  'b2bBenefits.badge': 'Ventajas B2B',
  'b2bBenefits.aria':
    'Ventajas Corporativas B2B — Facturación, IVA y pagos internacionales',
  'b2bBenefits.title': 'Infraestructura corporativa para tu agencia',
  'b2bBenefits.subtitle':
    'Facturación oficial, exención de IVA y flexibilidad internacional de pagos.',
  'b2bBenefits.c1.title': 'Facturación Corporativa',
  'b2bBenefits.c1.desc':
    'Emitimos facturas oficiales desde Vortex Logic LLC, registrada en EE.UU. Cumplimiento fiscal completo para tu agencia.',
  'b2bBenefits.c2.title': 'Exención de IVA',
  'b2bBenefits.c2.desc':
    '0% IVA para agencias en España bajo el mecanismo europeo de inversión del sujeto pasivo. Sin retenciones ni sobrecostes.',
  'b2bBenefits.c3.title': 'Pagos Internacionales',
  'b2bBenefits.c3.desc':
    'Tarjetas de crédito, transferencias bancarias directas (ACH en EE.UU. y SEPA en Europa) y pasarelas cripto/digitales como Binance Pay.',
  'b2bBenefits.bonus.badge': 'Bono de Bienvenida',
  'b2bBenefits.bonus.title': '10 vCredits gratis para tu agencia',
  'b2bBenefits.bonus.desc':
    'La activación del bono se realiza solicitándola directamente a través del chat de WhatsApp de nuestra empresa.',
  'b2bBenefits.bonus.cta': 'Activar 10 vCredits gratis',
  // ── src/components/ui/TechGrid.astro ──
  'techGrid.n01': 'Capacidades',
  'techGrid.n02': 'Tecnologías con las que trabajamos',
  'techGrid.n03': 'Stack moderno, rendimiento extremo y código limpio.',
  'techGrid.n04': 'Sin builders pesados, sin atajos.',
  'techGrid.n05': 'Frontend Engineering de Alto Rendimiento',
  'techGrid.n06':
    'Construimos interfaces modernas con Astro, React, Next.js y Tailwind CSS. Optimización nativa para lograr 100/100 en Google PageSpeed, Core Web Vitals perfectos y experiencia de usuario impecable.',
  'techGrid.n07': 'SSR / SSG / ISR según necesidad',
  'techGrid.n08': 'Lazy loading nativo',
  'techGrid.n09': 'Imágenes optimizadas automáticas',
  'techGrid.n10': 'SEO técnico integrado',
  'techGrid.n11': 'WordPress Corporativo sin Bloat',
  'techGrid.n12':
    'Desarrollo limpio a medida mediante bloques nativos o código personalizado. Excluimos estrictamente builders pesados (Elementor, Divi, WPBakery) para asegurar velocidad atómica, SEO limpio y facilidad de mantenimiento.',
  'techGrid.n13': 'Bloques Gutenberg nativos',
  'techGrid.n14': 'Sin page builders',
  'techGrid.n15': 'WooCommerce headless',
  'techGrid.n16': 'Rendimiento 95+ PageSpeed',
  'techGrid.n17': 'Automatizaciones e Integración de Datos',
  'techGrid.n18':
    'Conexión avanzada de Webhooks, APIs personalizadas, flujos comerciales automáticos, pasarelas de pago y manipulación eficiente de bases de datos. Transformamos procesos manuales en pipelines automatizados.',
  'techGrid.n19': 'APIs RESTful y GraphQL',
  'techGrid.n20': 'Webhooks en tiempo real',
  'techGrid.n21': 'Pasarelas de pago (Stripe, PayPal)',
  'techGrid.n22': 'ETL y scraping eficiente',
  'techGrid.n23': 'Capacidades — Tecnologías con las que trabajamos',

  // ── src/components/ui/PriceCards.astro ──
  'priceCards.n01': 'PAQUETES',
  'priceCards.n02': 'Elige tu pack de',
  'priceCards.n03': 'Compra créditos y consúmelos cuando necesites. El saldo no caduca.',
  'priceCards.n04': '$1.05/crédito',
  'priceCards.n05': 'Ideal para tareas puntuales o landings rápidas.',
  'priceCards.n06': 'Recomendado',
  'priceCards.n07': '$0.9975/crédito',
  'priceCards.n08': '5% de descuento',
  'priceCards.n09': 'El favorito de agencias en crecimiento. Ahorro real.',
  'priceCards.n10': '$0.945/crédito',
  'priceCards.n11': '10% de descuento',
  'priceCards.n12': 'Para agencias con alto volumen de proyectos.',
  'priceCards.n13': 'Paquetes de vCredits — Starter, Growth y Scale',

  // ── src/components/ui/MultipliersTable.astro ──
  'multipliers.n01': 'TARIFAS POR HORA',
  'multipliers.n02': 'Multiplicadores de',
  'multipliers.n03': 'consumo',
  'multipliers.n04': 'Cada servicio tiene un coste en vCredits por hora. Así de transparente.',
  'multipliers.n05': 'Servicio',
  'multipliers.n06': 'vCredits/h',
  'multipliers.n07': 'Precio final/h',
  'multipliers.n08': 'Desarrollo Avanzado',
  'multipliers.n09': '(Astro, React, Next.js, APIs)',
  'multipliers.n10': '15 vCredits',
  'multipliers.n11': 'Soporte & WPO',
  'multipliers.n12': '(WordPress, WooCommerce)',
  'multipliers.n13': '12 vCredits',
  'multipliers.n14': 'Analítica Avanzada e Infraestructura',
  'multipliers.n15': '(GA4, GTM)',
  'multipliers.n16': 'Gestión de Campañas',
  'multipliers.n17': '(Google/Meta Ads)',
  'multipliers.n18': 'y Diseño de Landings',
  'multipliers.n19': '10 vCredits',
  'multipliers.n20': 'Edición de Video Corto para Anuncios',
  'multipliers.n21': '(Reels/TikTok)',
  'multipliers.n22': '8 vCredits',
  'multipliers.n23': 'Diseño de Creativos y Banners Estáticos',
  'multipliers.n24': '6 vCredits',
  'multipliers.n25': 'Los vCredits se descuentan por minuto real de desarrollo. Sin redondeos.',
  'multipliers.n26': 'Tarifas por hora — Multiplicadores de consumo',

  // ── src/components/ui/PricingFAQ.astro ──
  'pricingFaq.n01': 'Preguntas frecuentes sobre precios',
  'pricingFaq.n02': 'Todo lo que necesitas saber sobre nuestro sistema de vCredits y facturación.',
  'pricingFaq.n03': '¿Qué son exactamente los vCredits?',
  'pricingFaq.n04':
    'Los vCredits son nuestra moneda interna de intercambio. 1 vCredit equivale a $1.00 USD neto de desarrollo. Al comprar, pagas $1.05 USD por crédito para cubrir de forma transparente la comisión internacional de Stripe, garantizando que tu saldo rinda al 100% en tus tareas.',
  'pricingFaq.n05': '¿Los vCredits tienen fecha de caducidad?',
  'pricingFaq.n06':
    'No. Los vCredits no caducan. Puedes comprarlos y utilizarlos cuando los necesites, sin presión por consumirlos en un plazo determinado. Ideal para agencias con demanda variable.',
  'pricingFaq.n07': '¿Cómo se factura? ¿Tienen IVA?',
  'pricingFaq.n08':
    'Emitimos facturas oficiales desde Vortex Logic LLC, registrada en EE.UU. Para agencias en España, aplicamos el 0% de IVA bajo el mecanismo europeo de inversión del sujeto pasivo (reverse charge). Consúltanos si necesitas más detalles fiscales.',
  'pricingFaq.n09': '¿Puedo combinar métodos de pago?',
  'pricingFaq.n10':
    'Sí. Aceptamos tarjetas de crédito, transferencias bancarias directas (ACH en EE.UU. y SEPA en Europa) y pasarelas cripto/digitales como Binance Pay. Puedes usar el método que mejor se adapte a tu flujo de caja.',
  'pricingFaq.n11': '¿Qué pasa si no uso todos los vCredits del pack?',
  'pricingFaq.n12':
    'El saldo restante se mantiene en tu cuenta hasta que decidas usarlo. No hay penalizaciones por no consumir. Además, si necesitas más créditos, puedes recargar en cualquier momento con el pack que prefieras.',
  'pricingFaq.n13': '¿El bono de bienvenida de 10 vCredits tiene condiciones?',
  'pricingFaq.n14':
    'Solo necesitas agendar una llamada corta de activación con nuestro equipo para conocer tus necesidades y validar que somos el partner adecuado para tu agencia. Una vez activado, los 10 vCredits están disponibles para testear cualquier servicio sin compromiso.',
  'pricingFaq.n15': 'Preguntas frecuentes sobre precios — vCredits y facturación',

  // ── src/components/ui/VCreditsExplanation.astro ──
  'vCreditsExpl.n01': 'EL MODELO',
  'vCreditsExpl.n02': '¿Qué es un',
  'vCreditsExpl.n03': 'vCredit',
  'vCreditsExpl.n04':
    'Unidad de medida transparente que equipara tiempo de desarrollo especializado con inversión predecible.',
  'vCreditsExpl.n05': '1 hora de desarrollo',
  'vCreditsExpl.n06': 'especializado',
  'vCreditsExpl.n07': 'Frontend',
  'vCreditsExpl.n08': 'APIs',
  'vCreditsExpl.n09': 'Revisiones',
  'vCreditsExpl.n10':
    'Cada vCredit representa una hora de trabajo de nuestro equipo multidisciplinario. Sin markup, sin sorpresas. Lo que ves es lo que pagas.',
  'vCreditsExpl.n11': 'Sin contratos fijos',
  'vCreditsExpl.n12':
    'No hay retenedores mensuales ni permanencias. Compra vCredits cuando quieras y úsalos a tu ritmo. Tú controlas el gasto.',
  'vCreditsExpl.n13': 'Saldo sin caducidad',
  'vCreditsExpl.n14':
    'Tus vCredits no expiran. Acumula saldo, úsalo cuando surja la necesidad. Ideal para agencias que manejan cargas de trabajo variables.',
  'vCreditsExpl.n15': 'Consumo en tiempo real',
  'vCreditsExpl.n16':
    'Cada hora de trabajo se descuenta al instante de tu saldo. Recibe notificaciones y mantén control total desde tu dashboard.',
  'vCreditsExpl.n17': 'Transparencia total. Sin markup. Sin sorpresas.',
  'vCreditsExpl.n18': 'Qué es un vCredit — Unidad de medida transparente',

  // ── src/components/ui/ClientDashboardPreview.astro ──
  'dashPreview.n01': 'EL PORTAL',
  'dashPreview.n02': 'Tu Dashboard de',
  'dashPreview.n03': 'Cliente',
  'dashPreview.n04':
    'Gestiona proyectos, revisa consumos y controla servicios desde un solo lugar.',
  'dashPreview.n05': 'En tiempo real.',
  'dashPreview.n06': 'VortexLM Dashboard',
  'dashPreview.n07': 'Mi Portal',
  'dashPreview.n08': 'Dashboard',
  'dashPreview.n09': 'Proyectos',
  'dashPreview.n10': 'Facturación',
  'dashPreview.n11': 'Configuración',
  'dashPreview.n12': 'Vortex Agency',
  'dashPreview.n13': 'Plan Pro',
  'dashPreview.n14': 'Bienvenido de vuelta',
  'dashPreview.n15': 'Aquí está el resumen de tu actividad',
  'dashPreview.n16': 'vCredits disponibles',
  'dashPreview.n17': 'Asignación de Tareas',
  'dashPreview.n18': '4 activas',
  'dashPreview.n19': 'Rediseño landing page — Cliente A',
  'dashPreview.n20': 'En progreso',
  'dashPreview.n21': 'vence en 3d',
  'dashPreview.n22': 'Integración API pasarela de pago',
  'dashPreview.n23': 'Pendiente',
  'dashPreview.n24': 'vence en 7d',
  'dashPreview.n25': 'Optimización SEO blog',
  'dashPreview.n26': 'Completado',
  'dashPreview.n27': 'entregado',
  'dashPreview.n28': 'Migración WordPress — Cliente B',
  'dashPreview.n29': 'vence en 5d',
  'dashPreview.n30': 'Historial de Consumos',
  'dashPreview.n31': 'últimos 30 días',
  'dashPreview.n32': 'Fecha',
  'dashPreview.n33': 'Proyecto',
  'dashPreview.n34': 'Horas',
  'dashPreview.n35': '15 May',
  'dashPreview.n36': 'Rediseño Cliente A',
  'dashPreview.n37': '12 May',
  'dashPreview.n38': 'API Pasarela Pago',
  'dashPreview.n39': '10 May',
  'dashPreview.n40': 'SEO Blog',
  'dashPreview.n41': '8 May',
  'dashPreview.n42': 'WP Migración B',
  'dashPreview.n43': 'Ver historial completo',
  'dashPreview.n44': 'Toggles en Tiempo Real',
  'dashPreview.n45': 'En vivo',
  'dashPreview.n46': 'Frontend Development',
  'dashPreview.n47': 'React, Astro, Tailwind',
  'dashPreview.n48': 'Mantenimiento y soporte',
  'dashPreview.n49': 'APIs y Automatización',
  'dashPreview.n50': 'Integraciones personalizadas',
  'dashPreview.n51': 'Tu Dashboard de Cliente — Portal de gestión en tiempo real',
  'dashPreview.n52': 'Navegación del dashboard',

  // ── src/components/ui/TransparencyTracking.astro ──
  'transparency.n01': 'Transparencia',
  'transparency.n02': 'Total',
  'transparency.n03': 'Cada minuto de desarrollo está registrado y visible.',
  'transparency.n04': 'Sin sorpresas en tu factura.',
  'transparency.n05': 'Tiempo Real',
  'transparency.n06':
    'Cada tarea registra el tiempo exacto de desarrollo. Consulta el progreso en vivo desde tu dashboard.',
  'transparency.n07': 'Progreso actual',
  'transparency.n08': '2.4h / 5h estimadas',
  'transparency.n09': 'Iniciado',
  'transparency.n10': 'Completado',
  'transparency.n11': 'Seguimiento activo',
  'transparency.n12': 'Desglose por Tarea',
  'transparency.n13':
    'Visualiza el coste de cada tarea individual: horas invertidas, vCredits consumidos y desarrollador asignado.',
  'transparency.n14': 'Tarea',
  'transparency.n15': 'Horas',
  'transparency.n16': 'Header responsive',
  'transparency.n17': '3.2h',
  'transparency.n18': 'API integración',
  'transparency.n19': '5.8h',
  'transparency.n20': 'SEO optimización',
  'transparency.n21': '2.1h',
  'transparency.n22': '11.1h',
  'transparency.n23': 'Notificaciones Automáticas',
  'transparency.n24':
    'Recibe alertas cuando un proyecto completa un hito o cuando el saldo de vCredits está próximo a agotarse.',
  'transparency.n25': 'Hito completado',
  'transparency.n26': 'Dashboard — Fase 1 finalizada',
  'transparency.n27': 'Hace 2 min',
  'transparency.n28': 'Saldo bajo',
  'transparency.n29': 'Quedan 12 vCredits disponibles',
  'transparency.n30': 'Hace 15 min',
  'transparency.n31': 'Nueva tarea asignada',
  'transparency.n32': '"Footer responsive" — Frontend',
  'transparency.n33': 'Hace 1 h',
  'transparency.n34': 'Control total. Sin incertidumbre. Resultados medibles.',
  'transparency.n35': 'Transparencia Total — Sistema de seguimiento por tarea',

  // ── src/components/ui/B2BPainPoints.astro ──
  'b2bPain.n01': 'Dolor vs Solución',
  'b2bPain.n02': 'El problema de contratar desarrollo',
  'b2bPain.n03': 'vs. externalizar con VortexLM',
  'b2bPain.n04': 'Comparamos el modelo tradicional de contratación con nuestro sistema de',
  'b2bPain.n05': 'para que veas exactamente qué cambia.',
  'b2bPain.n06': 'El modelo tradicional',
  'b2bPain.n07': 'Costes fijos elevados',
  'b2bPain.n08':
    'Contratar desarrolladores full-time implica salarios, prestaciones, herramientas, seguros y espacio de trabajo. Un costo mensual fijo alto, incluso cuando no hay carga de trabajo.',
  'b2bPain.n09': 'Cuellos de botella en capacidad',
  'b2bPain.n10':
    'Tu equipo interno tiene capacidad limitada. Cuando llegan proyectos grandes o fechas ajustadas, no puedes escalar rápido. Contratar más personal toma meses.',
  'b2bPain.n11': 'Sin control de calidad ni marca blanca',
  'b2bPain.n12':
    'Externalizar con agencias tradicionales significa perder identidad de marca. El código llega sin estándares, sin documentación, y el cliente final sabe que no fue hecho por tu equipo.',
  'b2bPain.n13': 'Con VortexLM',
  'b2bPain.n14': 'Pago por consumo real',
  'b2bPain.n15': 'Solo pagas por los',
  'b2bPain.n16':
    'que consumes. Sin retenedor mensual, sin compromiso. Compra bloques de horas y úsalos cuando los necesites. El control financiero está en tus manos.',
  'b2bPain.n17': 'Escalabilidad inmediata',
  'b2bPain.n18':
    'Asigna tareas desde tu dashboard y nuestro equipo las ejecuta. ¿Necesitas 3 desarrolladores para un proyecto urgente? Listo en 24 horas. ¿Bajas la carga? Simplemente consumes menos vCredits.',
  'b2bPain.n19': 'Entregas con tu marca',
  'b2bPain.n20':
    '100% white label. Todo el código se entrega con tu marca, sin referencias a VortexLM. Incluimos NDA, control de calidad automatizado y documentación completa. Tu cliente final nunca sabrá que externalizaste.',
  'b2bPain.n21': 'Sin riesgos. Sin compromisos. Solo resultados.',
  'b2bPain.n22': 'Dolor vs Solución — Por qué externalizar con VortexLM',

  // ── src/components/ui/B2BModel.astro ──
  'b2bModel.n01': 'El Modelo Vortex',
  'b2bModel.n02': 'Cómo funcionan los',
  'b2bModel.n03': 'Tres pasos simples para externalizar desarrollo web con total flexibilidad.',
  'b2bModel.n04': 'Sin contratos, sin compromisos mensuales.',
  'b2bModel.n05': 'Paso 1',
  'b2bModel.n06': 'Paso 2',
  'b2bModel.n07': 'Paso 3',
  'b2bModel.n08': 'Compra de vCredits',
  'b2bModel.n09': 'Adquiere paquetes de',
  'b2bModel.n10': 'sin contratos fijos. Elige el volumen que mejor se adapte a tu demanda mensual.',
  'b2bModel.n11': 'Asignación de tareas',
  'b2bModel.n12':
    'Publica tus proyectos en el dashboard. Describe el alcance, prioridad y tecnologías (',
  'b2bModel.n13': 'Frontend, WordPress, APIs',
  'b2bModel.n14': 'Consumo en tiempo real',
  'b2bModel.n15':
    'Activamos a tu equipo dedicado. Cada hora de desarrollo se descuenta de tu saldo de',
  'b2bModel.n16': 'en tiempo real.',
  'b2bModel.n17': 'Compra. Asigna. Escala. Sin fricción.',
  'b2bModel.n18': 'El Modelo Vortex — Cómo funcionan los vCredits',
  'b2bModel.n02b': 'vCredits',

  // ── src/components/ui/ContactForm.astro ──
  'contactForm.n01': 'Nombre Completo',
  'contactForm.n02': 'Correo Corporativo',
  'contactForm.n03': 'Servicio de Interés',
  'contactForm.n04': 'Selecciona un servicio',
  'contactForm.n05': 'Diseño y Desarrollo Web',
  'contactForm.n06': 'Desarrollo de App Móvil',
  'contactForm.n07': 'Software a Medida',
  'contactForm.n08': 'Tus datos están protegidos. Sin spam, garantizado.',
  'contactForm.n09': 'Ej. Carlos Mendoza',
  // ── src/pages/servicios.astro ──
  'svcIndex.n01': 'Preguntas frecuentes',
  'svcIndex.n02': 'Resolvemos tus dudas sobre nuestros servicios de desarrollo',

  // ── src/pages/contacto.astro ──
  'contactoPage.n01': 'CONTACTO',
  'contactoPage.n02': 'Hablemos de tu próximo proyecto tecnológico.',
  'contactoPage.n03':
    'Estamos listos para escuchar tu idea, resolver tus dudas y convertir tu visión en una solución digital robusta y escalable.',
  'contactoPage.n04': 'EMAIL',
  'contactoPage.n05': 'WHATSAPP',
  'contactoPage.n06': 'UBICACIÓN',
  'contactoPage.n07': 'Caracas, Venezuela',
  'contactoPage.n08': 'HORARIO',
  'contactoPage.n09': 'Lun — Vie, 9:00 AM — 6:00 PM (AST, UTC-4)',
  'contactoPage.n10': 'Nombre / Empresa',
  'contactoPage.n11': 'Correo Electrónico',
  'contactoPage.n12': 'Servicio de Interés',
  'contactoPage.n13': 'Selecciona un servicio',
  'contactoPage.n14': 'Desarrollo de Web App',
  'contactoPage.n15': 'Página Web Corporativa',
  'contactoPage.n16': 'Marca Blanca para Agencias',
  'contactoPage.n17': 'Optimización / Consultoría',
  'contactoPage.n18': 'Mensaje',
  'contactoPage.n19': 'Ej. Carlos Mendoza / Vortex C.A.',
  'contactoPage.n20': 'Cuéntanos sobre tu proyecto, ideas o consultas...',

  // ── src/pages/404.astro ──
  'notFound.n01': 'terminal',
  'notFound.n02': 'vortex-router // status:404',
  'notFound.n03': '$ curl -I https://vortexlm.com',
  'notFound.n04': '/ruta-no-existe',
  'notFound.n05': 'HTTP/2 404 Not Found',
  'notFound.n06': 'content-type: text/html',
  'notFound.n07': 'status: 404',
  'notFound.n08': '// La ruta solicitada no existe en este servidor.',
  'notFound.n09': '// Pero no te preocupes, tenemos soluciones para ti.',
  'notFound.n10': '✔ Rutas disponibles:',
  'notFound.n11': '→ /servicios/diseno-paginas-web-caracas',
  'notFound.n12': '→ /servicios/desarrollo-web-caracas',
  'notFound.n13': '→ /servicios/agencia-diseno-web-caracas',
  'notFound.n14': '→ /servicios/diseno-paginas-web-venezuela',
  'notFound.n15': '→ /servicios/programador-web-caracas',
  'notFound.n16': 'Se recomienda visitar la Home o explorar los servicios destacados.',
  'notFound.n17': 'Esta página no existe',
  'notFound.n18':
    'Parece que el enlace que seguiste está roto o la página fue movida. No te preocupes, aquí te dejamos algunas rutas útiles para que encuentres lo que buscas.',
  'notFound.n19': 'Volver al Inicio',
  'notFound.n20': 'palette',
  'notFound.n21': 'Diseño Web en Caracas',
  'notFound.n22': 'code',
  'notFound.n23': 'Desarrollo Web en Caracas',
  'notFound.n24': 'También puedes explorar:',
  'notFound.n25': 'Agencia de Diseño Web',
  'notFound.n26': 'Diseño Web Venezuela',
  'notFound.n27': 'Programador Web Senior',
  'notFound.n28': 'Consola de error 404 - Ruta no encontrada en Vortex Logic',

  // ── src/pages/blog/index.astro ──
  'blogIndex.n01': 'Blog',
  'blogIndex.n02': 'Técnico',
  'blogIndex.n03':
    'Descubre las últimas tendencias en tecnología y desarrollo de software para potenciar tu empresa en Caracas y toda Venezuela.',

  // ── src/pages/catalogo-mayorista-b2b-caracas.astro ──
  'catalogoB2B.n01': 'SOLUCIONES DIGITALES B2B PARA DISTRIBUIDORAS',
  'catalogoB2B.n02': 'Automatiza tus Ventas al Mayor con un Catálogo Web Ultra Rápido',
  'catalogoB2B.n03':
    'Elimina los PDFs pesados y las notas de voz eternas. Permite que tus clientes corporativos y tiendas aliadas consulten tu stock en tiempo real y armen sus pedidos en segundos, optimizado para las conexiones móviles de Caracas.',
  'catalogoB2B.n04': 'Digitalizar mi Catálogo',
  'catalogoB2B.n05': 'Ver solución',
  'catalogoB2B.n06': '¿Sigue tu distribuidora levantando pedidos de forma manual?',
  'catalogoB2B.n07': 'PDFs obsoletos',
  'catalogoB2B.n08':
    'Mandas un catálogo digital en la mañana y al mediodía ya cambió el stock o el precio.',
  'catalogoB2B.n09': 'Caos en WhatsApp',
  'catalogoB2B.n10': 'Horas perdidas transcribiendo códigos de repuestos o SKUs mal dictados.',
  'catalogoB2B.n11': 'Páginas lentas',
  'catalogoB2B.n12':
    'Sitios web pesados que no abren en la calle con datos móviles locales, espantando a los compradores.',
  'catalogoB2B.n13': 'Tu inventario y tus pedidos bajo control en una sola plataforma',
  'catalogoB2B.n14': 'Carga Récord en Datos Móviles',
  'catalogoB2B.n15':
    'Programado en Astro para garantizar carga instantánea en zonas industriales (La Yaguara, Boleíta, Los Ruices).',
  'catalogoB2B.n16': 'Buscador Inteligente de Piezas',
  'catalogoB2B.n17': 'Búsqueda exacta por número de parte, código de barra, SKU o marca.',
  'catalogoB2B.n18': 'Carrito a WhatsApp o Admin',
  'catalogoB2B.n19': 'Pedidos masivos desglosados directo al equipo de ventas o al panel interno.',
  'catalogoB2B.n20': 'Métodos de Pago Flexibles',
  'catalogoB2B.n21':
    'Toggles manuales para Zelle, Pago Móvil, Binance o transferencias en el checkout.',
  'catalogoB2B.n22': 'Portal de Cliente en Vortex LM',
  'catalogoB2B.n23':
    'Acceso privado para monitorear el avance del proyecto, soporte, facturación y datos técnicos de su cuenta las 24 horas.',
  'catalogoB2B.n24': 'Inversión',
  'catalogoB2B.n25': 'Inversión transparente, sin sorpresas',
  'catalogoB2B.n26':
    'Despliegue robusto utilizando infraestructura serverless de alta gama (Vercel + Supabase) para garantizar cero caídas.',
  'catalogoB2B.n27': 'PLAN ÚNICO',
  'catalogoB2B.n28': 'Desarrollo de Catálogo Mayorista B2B',
  'catalogoB2B.n29': 'Desde $850 USD',
  'catalogoB2B.n30': 'Pago fraccionado: 50% inicial / 50% contra entrega',
  'catalogoB2B.n31': 'Base de datos Supabase integrada',
  'catalogoB2B.n32': 'Front-end en Vercel',
  'catalogoB2B.n33': 'Buscador indexado',
  'catalogoB2B.n34': 'Carrito automatizado',
  'catalogoB2B.n35': 'Soporte multi-moneda',
  'catalogoB2B.n36': 'Acceso privado al Portal de Cliente en vortexlm.com',
  'catalogoB2B.n37': 'Mantenimiento mensual:',
  'catalogoB2B.n38': '$80 USD/mes',
  'catalogoB2B.n39':
    'Incluye optimización de Supabase, monitoreo en Vercel y soporte prioritario ante cambios de API.',
  'catalogoB2B.n40': 'Inicia hoy',
  'catalogoB2B.n41': 'Moderniza la logística de tus ventas hoy mismo',
  'catalogoB2B.n42':
    'Agenda una sesión técnica de 15 minutos y te mostramos cómo adaptar nuestro sistema a tu modelo de negocio.',
  'catalogoB2B.n43': 'Nombre del Contacto',
  'catalogoB2B.n44': 'Nombre de la Distribuidora / Importadora',
  'catalogoB2B.n45': 'WhatsApp de Contacto',
  'catalogoB2B.n46': '¿Qué tipo de productos distribuyes?',
  'catalogoB2B.n47': 'Solicitar Demo de Catálogo B2B',
  'catalogoB2B.n48': 'Dashboard del Sistema Administrativo SaaS - Vortex LM',
  'catalogoB2B.n49': 'Tu nombre completo',
  'catalogoB2B.n50': 'Nombre de tu empresa',
  'catalogoB2B.n51': 'Ej: Repuestos automotrices, equipos industriales, ferretería...',

  // ── src/pages/servicios/diseno-web-caracas.astro ──
  'svcWebDesign.n01': 'Sistemas Completos a Medida',
  'svcWebDesign.n02':
    'Creamos proyectos escalables adaptados a lo que necesitas. Replicamos fielmente diseños proporcionados por ti o creamos interfaces completamente nuevas y exclusivas para tu marca.',
  'svcWebDesign.n03': 'Leer: Por qué complementar tu web con una App Móvil',
  'svcWebDesign.n04': 'Preguntas Frecuentes',
  'svcWebDesign.n05':
    'Información transparente sobre precios de páginas web en Venezuela y nuestros procesos.',
  'svcWebDesign.n06': '¿Listo para escalar tu negocio?',
  'svcWebDesign.n07':
    'Déjanos tus datos y un arquitecto de software evaluará tu caso sin compromiso.',

  // ── src/pages/servicios/desarrollo-de-apps-caracas.astro ──
  'svcAppsMv.n01': 'Desarrollo de Apps en Chacao y Gran Caracas',
  'svcAppsMv.n02':
    'En un mercado dominado por el móvil, tener presencia en las tiendas de aplicaciones ya no es un lujo, es la frontera que separa a los líderes del resto.',
  'svcAppsMv.n03': 'Leer Artículo: Por qué necesitas una app móvil en 2026',
  'svcAppsMv.n04': 'Preguntas Frecuentes',
  'svcAppsMv.n05': 'Aclaramos el panorama de la creación de aplicaciones en Venezuela.',
  'svcAppsMv.n06': 'Transforma tu idea en código',
  'svcAppsMv.n07':
    'Contacta a nuestros ingenieros y arquitectos de software para recibir viabilidad técnica.',

  // ── src/pages/servicios/sistemas-gestion-medida.astro ──
  'svcSistemas.n01': 'Desarrollo de Software Empresarial Caracas',
  'svcSistemas.n02':
    'En un entorno multi-moneda complejo, depender de hojas de cálculo genéricas es un riesgo enorme. Diseñamos arquitectura en la nube para control total.',
  'svcSistemas.n03': 'Leer Caso: Automatización de inventario multi-moneda en Venezuela',
  'svcSistemas.n04': 'Preguntas Frecuentes',
  'svcSistemas.n05':
    'Descubre cómo un software propio puede multiplicar el rendimiento de tu empresa.',
  'svcSistemas.n06': 'Auditoría de Procesos',
  'svcSistemas.n07':
    'Cuéntanos cómo funciona tu empresa actualmente y te propondremos la arquitectura ideal.',
  // ── Metadatos de páginas core (title / description del documento) ──
  'svcPage.meta.title':
    'Servicios de Desarrollo Web y Perfiles Técnicos — VortexLM | Agencia de Desarrollo Web y Apps en Caracas',
  'svcPage.meta.description':
    'Directorio de servicios de desarrollo: perfil full-stack (Astro, React, Next.js), ingeniería de CMS (WordPress, Shopify), administración de aplicaciones web y sistemas a medida. Elige el perfil técnico que necesita tu proyecto.',
  'contactoPage.meta.title':
    'Contacta con Nuestros Especialistas en Software y Web | Vortex | Agencia de Desarrollo Web y Apps en Caracas',
  'contactoPage.meta.description':
    '¿Tienes una idea o proyecto en mente? Contacta con los especialistas en software y desarrollo web de Vortex. Diseñamos sistemas escalables y páginas web de alto rendimiento.',
  'notFound.meta.title':
    '404: Ruta No Encontrada | Vortex Logic | Agencia de Desarrollo Web y Apps en Caracas',
  'notFound.meta.description':
    'La página que buscas no existe. Explora nuestros servicios de diseño y desarrollo web en Caracas y Venezuela.',
  'blogIndex.meta.title': 'Blog Técnico | Agencia de Desarrollo Web y Apps en Caracas',
  'blogIndex.meta.description':
    'Artículos técnicos sobre transformación digital, desarrollo web y aplicaciones móviles en Caracas.',
  'catalogoB2B.meta.title':
    'Catálogo Mayorista B2B | Automatiza tus Ventas al por Mayor | Agencia de Desarrollo Web y Apps en Caracas',
  'catalogoB2B.meta.description':
    'Automatiza tus ventas al mayor con un catálogo web ultra rápido. Ideal para distribuidoras, importadoras y ventas de repuestos en Caracas.',
  'svcWebDesign.meta.title':
    'Diseño Web en Caracas | Agencia de Software de Alto Rendimiento | Agencia de Desarrollo Web y Apps en Caracas',
  'svcWebDesign.meta.description':
    'Lideramos el mercado de diseño web en Caracas con arquitecturas ultrarrápidas y SEO Local. Haz que tu negocio destaque en Google.',
  'svcAppsMv.meta.title':
    'Desarrollo de Apps Móviles en Venezuela | iOS & Android | Agencia de Desarrollo Web y Apps en Caracas',
  'svcAppsMv.meta.description':
    'Desarrollo de aplicaciones móviles nativas de alto rendimiento. Posiciona tu marca en los bolsillos de Caracas con VortexLM.',
  'svcSistemas.meta.title':
    'Sistemas a Medida y Software de Gestión | VortexLM | Agencia de Desarrollo Web y Apps en Caracas',
  'svcSistemas.meta.description':
    'Desarrollo de software empresarial en Caracas. Automatización de inventarios, sistemas de facturación y ERP a la medida de tu industria.',

  // ── Vistas con hero (servicios, blog), tarjetas y formulario de contacto ──
  'svcWebDesign.hero.title': 'Diseño Web de Élite en',
  'svcWebDesign.hero.highlight': 'Caracas',
  'svcWebDesign.hero.subtitle':
    'Transformamos tu visión en una experiencia digital de velocidad luz. Arquitectura de software moderna diseñada para aplastar a la competencia en Google.',
  'svcWebDesign.card1.title': 'Diseño y Desarrollo Flexible',
  'svcWebDesign.card1.description':
    'Desde frameworks modernos hasta desarrollo en WordPress, elegimos la pila tecnológica perfecta según tus requerimientos.',
  'svcWebDesign.card2.title': 'Agencia de software en Caracas',
  'svcWebDesign.card2.description':
    'Estructuramos tu sitio con microdatos semánticos para que Google te identifique como la autoridad #1 en tu sector geográfico.',
  'svcWebDesign.card3.title': 'Diseño UX/UI Premium',
  'svcWebDesign.card3.description':
    'Interfaces minimalistas, modo oscuro nativo y una estética tecnológica que transmite confianza absoluta a tus clientes empresariales.',
  'svcAppsMv.hero.title': 'Desarrollo de Apps Móviles en',
  'svcAppsMv.hero.highlight': 'Venezuela',
  'svcAppsMv.hero.subtitle':
    'Aplicaciones corporativas, e-commerce y startups. Llevamos tu modelo de negocio directo a los bolsillos de tus clientes con rendimiento nativo inigualable.',
  'svcAppsMv.card1.title': 'Experiencia Nativa (iOS/Android)',
  'svcAppsMv.card1.description':
    'Rendimiento impecable aprovechando todo el hardware del dispositivo. 60fps constantes para una experiencia premium.',
  'svcAppsMv.card2.title': 'Integración Local (Pagos)',
  'svcAppsMv.card2.description':
    'Conectamos tu app con pasarelas de pago y billeteras digitales relevantes para la economía multi-moneda de Venezuela.',
  'svcAppsMv.card3.title': 'Creación de aplicaciones corporativas',
  'svcAppsMv.card3.description':
    'Sistemas robustos de Delivery, e-commerce, gestión interna o fintech diseñados desde cero con seguridad bancaria.',
  'svcSistemas.hero.title': 'Sistemas a Medida y',
  'svcSistemas.hero.highlight': 'Software de Gestión',
  'svcSistemas.hero.subtitle':
    'Libera a tu equipo del trabajo manual. Automatiza operaciones, integra inventarios y escala tu productividad con herramientas corporativas exclusivas.',
  'svcSistemas.card1.title': 'Automatización de Inventarios',
  'svcSistemas.card1.description':
    'Control en tiempo real de múltiples almacenes, sincronización de sucursales e integraciones con hardware de punto de venta.',
  'svcSistemas.card2.title': 'Sistemas ERP y CRM a Medida',
  'svcSistemas.card2.description':
    'Construimos plataformas que centralizan recursos humanos, finanzas y atención al cliente en un único ecosistema cifrado.',
  'svcSistemas.card3.title': 'Dashboards y Analítica',
  'svcSistemas.card3.description':
    'Toma decisiones con datos precisos. Generación de reportes instantáneos sobre rentabilidad, ventas y métricas clave.',
  'contactoPage.form.submit': 'Enviar mensaje',
  'contactoPage.form.sending': 'Enviando...',
  'contactoPage.form.success': '¡Mensaje enviado con éxito! Te contactaremos pronto.',
  'contactoPage.form.error': 'Error al enviar. Intenta de nuevo o escríbenos a info@vortexlm.com.',

  // ── Blog: metadatos de las tarjetas y de las páginas de artículo ──
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.title':
    '¿Cuánto cuesta una página web profesional en Venezuela en 2026?',
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.description':
    'Desglosamos los costos y el ROI de invertir en diseño web en Caracas. Aprende a diferenciar entre plantillas lentas y verdaderas plataformas de conversión.',
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.category':
    'Transformación Digital en Venezuela',
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.date': '12 de mayo de 2026',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.title':
    'Por qué tu empresa en Caracas necesita una App móvil en 2026: Guía completa',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.description':
    'Descubre cómo una app móvil nativa puede transformar tu negocio en Caracas, integrando pagos locales y gestión de inventario para zonas comerciales como Chacao.',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.category':
    'Transformación Digital en Venezuela',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.date': '11 de mayo de 2026',
  'blogPost.seo-local-caracas-guia-posicionamiento.title':
    'Guía de SEO Local: Cómo ser el #1 en Google en Caracas',
  'blogPost.seo-local-caracas-guia-posicionamiento.description':
    'Domina las búsquedas geolocalizadas en Caracas. Estrategias técnicas de Schema Markup y Google Business Profile para agencias y comercios.',
  'blogPost.seo-local-caracas-guia-posicionamiento.category': 'Transformación Digital en Venezuela',
  'blogPost.seo-local-caracas-guia-posicionamiento.date': '13 de mayo de 2026',
  'blogPost.sistema-contable-talleres-mecanicos.title':
    'Sistema contable para talleres mecánicos: gestión inteligente',
  'blogPost.sistema-contable-talleres-mecanicos.description':
    '¿Tu taller aún usa Excel? Descubre cómo un sistema contable para talleres mecánicos automatiza inventario, facturación multimoneda y finanzas en un solo lugar.',
  'blogPost.sistema-contable-talleres-mecanicos.category': 'Transformación Digital en Venezuela',
  'blogPost.sistema-contable-talleres-mecanicos.date': '21 de mayo de 2026',
  'blogPost.sistemas-inventario-facturacion-venezuela.title':
    'Sistemas de Gestión: Automatizando Inventario y Facturación en Venezuela',
  'blogPost.sistemas-inventario-facturacion-venezuela.description':
    'Por qué las hojas de cálculo ya no son suficientes para las empresas en Caracas y cómo el software a medida reduce pérdidas y optimiza el flujo de caja.',
  'blogPost.sistemas-inventario-facturacion-venezuela.category':
    'Transformación Digital en Venezuela',
  'blogPost.sistemas-inventario-facturacion-venezuela.date': '14 de mayo de 2026',
  'blogPost.tendencias-ecommerce-venezuela-2026.title':
    'Tendencias del E-commerce en Venezuela para 2026',
  'blogPost.tendencias-ecommerce-venezuela-2026.description':
    'Logística de última milla, integración de pagos automatizados y velocidad extrema: el futuro de las tiendas online en Caracas.',
  'blogPost.tendencias-ecommerce-venezuela-2026.category': 'Transformación Digital en Venezuela',
  'blogPost.tendencias-ecommerce-venezuela-2026.date': '15 de mayo de 2026',

  // ── src/pages/soluciones/desarrollo-apps-moviles.astro ──
  'solAppsMv.n01': 'DESARROLLO DE APPS MÓVILES',
  'solAppsMv.n02': 'Creamos aplicaciones móviles nativas y fluidas que tus usuarios amarán.',
  'solAppsMv.n03':
    'Diseñamos y programamos aplicaciones móviles híbridas y nativas de alto rendimiento. Conectamos tu negocio con el bolsillo de tus clientes a través de arquitecturas seguras, interfaces intuitivas y animaciones fluidas a 120Hz.',
  'solAppsMv.n04': 'Iniciar mi proyecto móvil',
  'solAppsMv.n05': 'Ver tecnologías móviles',
  'solAppsMv.n06': 'CARACTERÍSTICAS CORE',
  'solAppsMv.n07': 'Ingeniería móvil multiplataforma.',
  'solAppsMv.n08':
    'Maximizamos el alcance de tu producto digital reduciendo los costos de desarrollo y mantenimiento mediante estándares modernos de código.',
  'solAppsMv.n09': 'Despliegue Único y Eficiente',
  'solAppsMv.n10':
    'Desarrollamos un único código fuente optimizado para lanzar tu aplicación en la App Store (iOS) y Google Play Store (Android) simultáneamente. Menos tiempo de desarrollo, misma fidelidad nativa.',
  'solAppsMv.n11': 'Rendimiento y Animaciones Nativas',
  'solAppsMv.n12':
    'Optimizamos el renderizado en el hilo principal del dispositivo para garantizar transiciones fluidas, gestos táctiles instantáneos y un consumo mínimo de batería y memoria RAM.',
  'solAppsMv.n13': 'Sincronización e Integración de APIs',
  'solAppsMv.n14':
    'Conectamos tu aplicación móvil con tus sistemas existentes, pasarelas de pago automatizadas, bases de datos en la nube (Supabase) y sistemas de notificaciones push en tiempo real.',
  'solAppsMv.n15': 'ARQUITECTURA AVANZADA',
  'solAppsMv.n16': 'Arquitectura sin conexión y datos en tiempo real.',
  'solAppsMv.n17':
    'Las aplicaciones móviles modernas no pueden depender de una conexión a internet inestable. Implementamos sistemas de almacenamiento y bases de datos locales en el dispositivo que permiten a la aplicación funcionar de manera óptima offline (sin conexión). En el momento en que el usuario recupera la señal, los datos se sincronizan de forma transparente y bidireccional con tus servidores cloud, garantizando la integridad de la información sin interrumpir la experiencia del usuario.',
  'solAppsMv.n18': 'CLOUD DB',
  'solAppsMv.n19': 'LOCAL STORE',
  'solAppsMv.n20': 'Sincronización bidireccional cifrada',
  'solAppsMv.n21': 'PROCESO',
  'solAppsMv.n22': 'Del código a las tiendas de aplicaciones',
  'solAppsMv.n23': 'Diseño de Interfaz y Prototipado (UI/UX)',
  'solAppsMv.n24':
    'Modelamos cada pantalla bajo los patrones de diseño oficiales de Apple (Human Interface Guidelines) y Google (Material Design), asegurando que la app se sienta familiar y nativa.',
  'solAppsMv.n25': 'Desarrollo de Lógica y Seguridad',
  'solAppsMv.n26':
    'Programamos la aplicación aislando el almacenamiento de credenciales mediante llaveros seguros del sistema (Keychain/Keystore) y protegiendo el software contra ingeniería inversa.',
  'solAppsMv.n27': 'Pruebas en Entornos Reales (QA)',
  'solAppsMv.n28':
    'Desplegamos versiones beta cerradas a través de TestFlight y Google Play Console para validar el comportamiento del software en diferentes resoluciones y sistemas operativos.',
  'solAppsMv.n29': 'Publicación y Mantenimiento',
  'solAppsMv.n30':
    'Nos encargamos de todo el proceso de revisión técnica y burocrática para la aprobación de tu app en las tiendas, garantizando su compatibilidad con las futuras actualizaciones de iOS y Android.',
  'solAppsMv.n31': 'CONTACTO',
  'solAppsMv.n32': 'Convierte tu idea en un producto móvil de nivel internacional.',
  'solAppsMv.n33':
    'Escríbenos detallando el alcance de tu aplicación. Evaluaremos la infraestructura necesaria y te propondremos un plan de desarrollo ágil y escalable.',
  'solAppsMv.n34': 'Nombre o Razón Social',
  'solAppsMv.n35': 'Correo Electrónico de Contacto',
  'solAppsMv.n36': 'Tipo de App móvil',
  'solAppsMv.n37': 'Detalles del sistema móvil',
  'solAppsMv.n38': 'Desarrollar mi aplicación móvil',
  'solAppsMv.n39': 'Ej. Inversiones Caracas C.A.',
  'solAppsMv.n40': 'Ej. E-commerce, Delivery, Herramienta interna, SaaS...',
  'solAppsMv.n41':
    'Describe las funciones principales que necesitas (ej. geolocalización, pagos, perfiles)...',

  // ── src/pages/soluciones/desarrollo-astro-nextjs.astro ──
  'solAstroNext.n01': 'DESARROLLO WEB MODERNO',
  'solAstroNext.n02':
    'Ingeniería frontend del futuro: Interfaces ultra-fluidas y rendimiento extremo.',
  'solAstroNext.n03':
    'Dejamos atrás las tecnologías lentas y los constructores visuales monolíticos. Desarrollamos plataformas y sitios web modernos utilizando frameworks de última generación. Arquitecturas Jamstack y Server-Side Rendering (SSR) preparadas para la máxima escala global.',
  'solAstroNext.n04': 'Iniciar desarrollo moderno',
  'solAstroNext.n05': 'Ver documentación de nuestro stack',
  'solAstroNext.n06': 'bash — vortex build',
  'solAstroNext.n07': 'npm run build',
  'solAstroNext.n08': '✓ Generated static pages (Astro):',
  'solAstroNext.n09': '/ → index.html (0.2s)',
  'solAstroNext.n10': '/soluciones → soluciones/index.html (0.1s)',
  'solAstroNext.n11': '/blog → blog/index.html (0.3s)',
  'solAstroNext.n12': '◆ Server-side rendered endpoints (Next.js):',
  'solAstroNext.n13': '/dashboard → SSR (0.8s TTFB)',
  'solAstroNext.n14': '/api/orders → Edge Function (0.05s)',
  'solAstroNext.n15': '✓ Build completed successfully (1.2s)',
  'solAstroNext.n16': 'ESPECIALIZACIÓN POR FRAMEWORK',
  'solAstroNext.n17': 'La herramienta correcta para el objetivo correcto.',
  'solAstroNext.n18':
    'No forzamos un solo framework para todo; seleccionamos la tecnología según los requerimientos de conversión y dinamismo de tu negocio.',
  'solAstroNext.n19': 'Astro Framework',
  'solAstroNext.n20': 'Rendimiento Imbatible para Sitios de Contenido',
  'solAstroNext.n21':
    'El framework ideal para páginas web corporativas, landings de venta y blogs. Astro elimina por completo el JavaScript del cliente por defecto ("Zero JS"). Genera HTML estático puro que vuela en cualquier dispositivo, garantizando un posicionamiento SEO nativo impecable y conversiones inmediatas.',
  'solAstroNext.n22': 'Next.js + React',
  'solAstroNext.n23': 'Poder y Escalabilidad para Aplicaciones Complejas',
  'solAstroNext.n24':
    'La infraestructura estándar de la industria para plataformas dinámicas, sistemas SaaS, dashboards corporativos y plataformas interactivas. Con soporte avanzado para Server-Side Rendering (SSR) e Incremental Static Regeneration (ISR), Next.js procesa la lógica pesada en el servidor y entrega interfaces ultra-rápidas al usuario.',
  'solAstroNext.n25': 'ARQUITECTURA DE ISLAS',
  'solAstroNext.n26': 'Interactividad selectiva. Cero bytes de código basura.',
  'solAstroNext.n27':
    'Las páginas web tradicionales obligan al navegador a descargar y procesar megabytes de JavaScript para toda la página, incluso para elementos estáticos que no lo necesitan (como texto o imágenes). Con la Arquitectura de Islas (Islands Architecture), tu página web se renderiza como un documento HTML puro y ultrarrápido. Si una sección específica requiere interactividad (como un carrito de compras o un formulario dinámico), el navegador solo descarga el JavaScript exacto para esa sección aislada. El resto de la página se mantiene ligera, segura e interactiva al instante.',
  'solAstroNext.n28': '✦ Componente React activo (solo este bloque carga JS)',
  'solAstroNext.n29': '✦ Formulario interactivo (carga JS aislada)',
  'solAstroNext.n30': 'HTML estático — Sin consumo de recursos',
  'solAstroNext.n31': 'INFRAESTRUCTURA',
  'solAstroNext.n32': 'Infraestructura moderna sin servidores',
  'solAstroNext.n33': 'Frontend de Alto Nivel',
  'solAstroNext.n34': '(React & TypeScript)',
  'solAstroNext.n35':
    'Escribimos interfaces tipadas y modulares que previenen errores en producción. Componentes reutilizables y limpios que facilitan el mantenimiento y la evolución del software.',
  'solAstroNext.n36': 'Backend y Capa de Datos',
  'solAstroNext.n37': '(Supabase & PostgreSQL)',
  'solAstroNext.n38':
    'Conectamos tus flujos dinámicos con Supabase para almacenamiento en tiempo real, autenticación de usuarios segura y consultas de bases de datos relacionales sin latencia.',
  'solAstroNext.n39': 'Distribución Global Instantánea',
  'solAstroNext.n40': '(Vercel Edge Network)',
  'solAstroNext.n41':
    'Desplegamos tus aplicaciones directamente en la infraestructura cloud de Vercel. Tu código se ejecuta a nivel de red perimetral (Edge Functions), eliminando retrasos de servidores tradicionales y resistiendo ataques de tráfico.',
  'solAstroNext.n42': 'CONTACTO',
  'solAstroNext.n43': 'Construyamos el software del mañana.',
  'solAstroNext.n44':
    'Cuéntanos los requerimientos de tu plataforma web. Diseñaremos una arquitectura escalable, segura y veloz utilizando los estándares técnicos de las empresas líderes del sector.',
  'solAstroNext.n45': 'Nombre o Empresa',
  'solAstroNext.n46': 'Correo Electrónico de Negocios',
  'solAstroNext.n47': 'Tipo de proyecto',
  'solAstroNext.n48': 'Requerimientos del Stack',
  'solAstroNext.n49': 'Desarrollar con rendimiento extremo',
  'solAstroNext.n50': 'Ej. Vortex Partner Comercial',
  'solAstroNext.n51': 'Ej. Landing Page de Venta, Software SaaS, Portal Corporativo...',
  'solAstroNext.n52':
    'Detalla qué funciones dinámicas necesitas (autenticación, bases de datos, integraciones)...',

  // ── src/pages/soluciones/diseno-web-velocidad.astro ──
  'solSpeed.n01': 'DISEÑO WEB DE ALTA VELOCIDAD',
  'solSpeed.n02':
    'Páginas web que cargan al instante. Optimizadas para convertir visitas en clientes.',
  'solSpeed.n03':
    'Cada milisegundo de retraso reduce tu tasa de conversión y destruye tu posicionamiento en Google. Diseñamos e implementamos interfaces de usuario bajo los estándares de optimización más estrictos de la industria. Velocidad nativa que impulsa tu negocio.',
  'solSpeed.n04': 'Cotizar proyecto de alta velocidad',
  'solSpeed.n05': 'Analizar mi web actual',
  'solSpeed.n06': 'TTFB',
  'solSpeed.n07': '0.1s',
  'solSpeed.n08': '0.8s',
  'solSpeed.n09': '12ms',
  'solSpeed.n10': 'NUESTRO ENFOQUE',
  'solSpeed.n11': 'Rendimiento sin concesiones.',
  'solSpeed.n12':
    'No usamos plantillas sobrecargadas ni constructores visuales lentos. Tratamos el rendimiento web como una disciplina de ingeniería fundamental.',
  'solSpeed.n13': 'Optimización WPO Avanzada',
  'solSpeed.n14':
    'Minificamos código en el servidor, eliminamos el JavaScript que bloquea el renderizado y aplicamos técnicas de CSS crítico inline para que el navegador pinte tu sitio de forma inmediata.',
  'solSpeed.n15': 'Imágenes de Nueva Generación',
  'solSpeed.n16':
    'Automatizamos la conversión de tus recursos visuales a formatos ultra-compresivos como WebP y AVIF, implementando lazy loading adaptativo y dimensiones explícitas para evitar saltos de diseño (CLS).',
  'solSpeed.n17': 'Despliegue Global en la Vértice (Edge)',
  'solSpeed.n18':
    'Distribuimos tu sitio web en redes de contenido (CDNs) globales a través de Vercel. Tu página se sirve desde el nodo más cercano al visitante, garantizando respuestas instantáneas en Caracas, Madrid o cualquier parte del mundo.',
  'solSpeed.n19': 'IMPACTO EN EL NEGOCIO',
  'solSpeed.n20': 'La velocidad es la mejor estrategia de marketing.',
  'solSpeed.n21':
    'Un sitio web rápido no solo agrada a tus usuarios, también domina los algoritmos. Google premia de forma directa a las páginas que cumplen con las métricas de Core Web Vitals, otorgándoles un mejor posicionamiento orgánico (SEO) y reduciendo drásticamente el costo por clic (CPC) en tus campañas de Google Ads. Menos rebote, más conversiones, mayor rentabilidad.',
  'solSpeed.n22': 'TASA DE RETENCIÓN',
  'solSpeed.n23': 'Carga instantánea',
  'solSpeed.n24': 'Sitio lento tradicional',
  'solSpeed.n25': 'ARQUITECTURA',
  'solSpeed.n26': 'Arquitectura Vortex vs. Desarrollo Tradicional',
  'solSpeed.n27': 'Métrica / Característica',
  'solSpeed.n28': 'Sitios Lentos Tradicionales',
  'solSpeed.n29': 'Ingeniería de Alta Velocidad (Vortex)',
  'solSpeed.n30': 'Tiempo de Carga Promedio',
  'solSpeed.n31': '4.5 segundos o más',
  'solSpeed.n32': 'Menos de 1.2 segundos (Instantáneo)',
  'solSpeed.n33': 'Puntaje PageSpeed móvil',
  'solSpeed.n34': 'Rango naranja/rojo (30 - 50 pts)',
  'solSpeed.n35': 'Rango verde absoluto (95 - 100 pts)',
  'solSpeed.n36': 'Dependencia de Plugins',
  'solSpeed.n37': 'Alta (Inestabilidad y lentitud)',
  'solSpeed.n38': 'Cero (Código limpio, modular y nativo)',
  'solSpeed.n39': 'Infraestructura Cloud',
  'solSpeed.n40': 'Hosting compartido tradicional',
  'solSpeed.n41': 'Servidores Edge Distribuidos (Vercel)',
  'solSpeed.n42': 'Preguntas frecuentes',
  'solSpeed.n43': '¿Cuánto tiempo toma desarrollar una página web optimizada?',
  'solSpeed.n44':
    'Dependiendo de la complejidad del proyecto, una página corporativa optimizada puede estar lista en 2 a 4 semanas. Proyectos más complejos con funcionalidades avanzadas pueden tomar de 6 a 8 semanas.',
  'solSpeed.n45': '¿Qué incluye el servicio de optimización de velocidad?',
  'solSpeed.n46':
    'Incluye auditoría completa de rendimiento, optimización de imágenes, minificación de código, implementación de CDN, configuración de caché, CSS crítico inline, carga asíncrona de scripts y monitoreo continuo de Core Web Vitals.',
  'solSpeed.n47': '¿Ofrecen mantenimiento después del lanzamiento?',
  'solSpeed.n48':
    'Sí, ofrecemos planes de mantenimiento continuo que incluyen actualizaciones de seguridad, monitoreo de rendimiento, optimización periódica y soporte técnico prioritario.',
  'solSpeed.n49': '¿Puedo migrar mi sitio web actual a su plataforma?',
  'solSpeed.n50':
    'Absolutamente. Realizamos una migración controlada de tu sitio actual a nuestra infraestructura de alto rendimiento, minimizando el tiempo de inactividad y garantizando que todas las funcionalidades existentes se mantengan intactas.',
  'solSpeed.n51': 'CONTACTO',
  'solSpeed.n52': 'Deja de perder clientes por una web lenta.',
  'solSpeed.n53':
    'Permítenos construir una interfaz de alto rendimiento que represente verdaderamente el nivel profesional de tu empresa. Escríbenos y diseñaremos tu solución a medida.',
  'solSpeed.n54': 'Nombre Completo',
  'solSpeed.n55': 'Correo Electrónico Corporativo',
  'solSpeed.n56': 'URL de tu web actual (Opcional)',
  'solSpeed.n57': 'Cuéntanos sobre tus objetivos',
  'solSpeed.n58': 'Construir mi web de alta velocidad',
  'solSpeed.n59': 'Ej. Alejandro Silva',
  'solSpeed.n60': 'Tu sitio web para auditarlo gratis...',
  'solSpeed.n61': '¿Qué tipo de plataforma o página corporativa necesitas optimizar?...',

  // ── src/pages/soluciones/sistemas-erp-software-medida.astro ──
  'solErp.n01': 'SISTEMAS ERP Y SOFTWARE A MEDIDA',
  'solErp.n02':
    'Automatiza las operaciones de tu empresa con software diseñado exactamente a tu medida.',
  'solErp.n03':
    'Deja atrás las hojas de cálculo caóticas y los sistemas genéricos rígidos. Desarrollamos soluciones ERP, CRM y plataformas de gestión interna modulares, seguras y adaptadas con precisión quirúrgica a la lógica y flujos reales de tu negocio.',
  'solErp.n04': 'Solicitar consultoría de procesos',
  'solErp.n05': 'Ver arquitectura de datos',
  'solErp.n06': 'ERP Vortex',
  'solErp.n07': 'Panel de Control',
  'solErp.n08': 'INVENTARIO',
  'solErp.n09': 'Prod. A',
  'solErp.n10': 'Prod. B',
  'solErp.n11': 'Prod. C',
  'solErp.n12': 'Prod. D',
  'solErp.n13': 'EFICIENCIA',
  'solErp.n14': 'USUARIOS',
  'solErp.n15': 'Admin',
  'solErp.n16': 'Editor',
  'solErp.n17': 'Operador',
  'solErp.n18': 'Visor',
  'solErp.n19': 'INFRAESTRUCTURA B2B',
  'solErp.n20': 'Software empresarial de nivel de ingeniería.',
  'solErp.n21':
    'Diseñamos herramientas e infraestructuras centralizadas que eliminan las tareas manuales repetitivas y aseguran el control total de tus activos.',
  'solErp.n22': 'Automatización de Flujos (Workflows)',
  'solErp.n23':
    'Modelamos tus reglas de negocio para automatizar facturación, control de inventarios, asignación de tareas y reportes financieros directos, reduciendo drásticamente el error humano.',
  'solErp.n24': 'Gestión de Roles y Permisos (RBAC)',
  'solErp.n25':
    'Implementamos sistemas estrictos de Control de Acceso Basado en Roles. Define con precisión milimétrica qué información puede ver, editar o eliminar cada miembro de tu organización.',
  'solErp.n26': 'Datos Centralizados en Tiempo Real',
  'solErp.n27':
    'Toda tu información operativa consolidada en una base de datos relacional robusta con Supabase y PostgreSQL. Olvídate de los datos duplicados; accede a métricas cruciales al instante desde cualquier lugar.',
  'solErp.n28': 'INVERSIÓN TECNOLÓGICA',
  'solErp.n29': 'Una inversión tecnológica escalable, sin licencias abusivas.',
  'solErp.n30':
    'Los softwares comerciales tradicionales te atan a contratos de alquiler mensuales costosos y a cobros adicionales por cada usuario nuevo que agregues a tu equipo. Con la ingeniería a medida de Vortex, el software es un activo de tu propiedad. Desarrollamos sistemas modulares basados en código limpio que te permiten expandir la plataforma, conectar nuevas APIs y añadir usuarios ilimitados a medida que tu empresa crezca, sin costes ocultos ni tarifas de suscripción restrictivas.',
  'solErp.n31': 'NÚCLEO CENTRAL',
  'solErp.n32': 'Infraestructura Base',
  'solErp.n33': 'Ventas',
  'solErp.n34': 'Compras',
  'solErp.n35': 'RR.HH.',
  'solErp.n36': 'Finanzas',
  'solErp.n37': 'Módulos desmontables — Expansión ilimitada',
  'solErp.n38': 'ESTÁNDARES TÉCNICOS',
  'solErp.n39': 'Arquitectura robusta para misiones críticas',
  'solErp.n40': 'Modelado de Datos Relacional Estricto',
  'solErp.n41':
    'Diseñamos diagramas de bases de datos PostgreSQL optimizados, garantizando la integridad referencial de tu información financiera y operativa mediante restricciones lógicas a nivel de servidor.',
  'solErp.n42': 'APIs Rest y Webhooks de Alta Disponibilidad',
  'solErp.n43':
    'Desarrollamos puntos de conexión (endpoints) seguros con Next.js para integrar tu ERP con software de terceros, pasarelas de pago bancarias, plataformas de envíos o herramientas de marketing.',
  'solErp.n44': 'Logs de Auditoría Inmutables',
  'solErp.n45':
    'Cada acción crítica dentro del sistema (modificaciones de inventario, aprobaciones de pagos, cambios de roles) queda registrada automáticamente con sello de tiempo e identidad del usuario, protegiendo a tu empresa de fraudes internos.',
  'solErp.n46': 'CONTACTO',
  'solErp.n47': 'Transforma la eficiencia operativa de tu organización.',
  'solErp.n48':
    'Hablemos de los cuellos de botella actuales de tu empresa. Evaluaremos tus procesos manuales y te propondremos una infraestructura de software a medida que centralice y automatice tu negocio.',
  'solErp.n49': 'Nombre y Cargo del Contacto',
  'solErp.n50': 'Correo Electrónico Corporativo',
  'solErp.n51': 'Tamaño de la Organización',
  'solErp.n52': 'Describe las áreas críticas a automatizar',
  'solErp.n53': 'Diseñar nuestro sistema a medida',
  'solErp.n54': 'Ej. Guillermo Vega — Director de Operaciones',
  'solErp.n55': 'Ej. Menos de 20 empleados, 20-100 empleados, más de 100...',
  'solErp.n56':
    'Cuéntanos brevemente qué procesos necesitas optimizar o centralizar (ej. ventas, inventario, facturación)...',

  // ── src/pages/desarrollo-web-caracas.astro ──
  'devCaracas.n01': 'Caracas, Venezuela',
  'devCaracas.n02': 'Desarrollo Web de Alto Rendimiento en Caracas.',
  'devCaracas.n03': 'Tu negocio en línea, 10 veces más rápido.',
  'devCaracas.n04':
    'No dejes que tus clientes se vayan con la competencia por culpa de una página lenta. Creamos aplicaciones web, plataformas SaaS y sitios corporativos premium con tecnología perimetral que carga al instante en cualquier conexión de Venezuela.',
  'devCaracas.n05': 'Cotizar mi Proyecto en 5 Minutos',
  'devCaracas.n06': 'Ver Portafolio →',
  'devCaracas.n07': 'Confían en nosotros',
  'devCaracas.n08': 'CLÍNICAS',
  'devCaracas.n09': 'CONSTRUCTORAS',
  'devCaracas.n10': 'RETAIL',
  'devCaracas.n11': 'STARTUPS',
  'devCaracas.n12': 'Beneficios Locales',
  'devCaracas.n13': 'Diseñado para el mercado',
  'devCaracas.n14': 'venezolano',
  'devCaracas.n15': 'Carga Ultra-Rápida',
  'devCaracas.n16':
    'Optimizado para conexiones móviles locales. Nuestras páginas cargan en menos de 1 segundo incluso en redes 3G/4G venezolanas.',
  'devCaracas.n17': 'Arquitectura Élite',
  'devCaracas.n18':
    'Olvídate de plantillas pesadas de WordPress. Programamos con Astro, Next.js y Tailwind CSS para un rendimiento impecable.',
  'devCaracas.n19': 'Soporte y Garantía Directa',
  'devCaracas.n20':
    'Respaldado por ingenieros senior listos para atenderte localmente. Soporte técnico en español, sin intermediarios.',
  'devCaracas.n21': 'Transformación Digital',
  'devCaracas.n22': 'Lleva tu negocio al',
  'devCaracas.n23': 'siguiente nivel digital',
  'devCaracas.n24':
    'En Caracas, la velocidad de conexión no debería limitar tu presencia en línea. Diseñamos experiencias web que cargan al instante, optimizadas para la infraestructura local, para que tus clientes disfruten de una navegación fluida sin importar su ubicación.',
  'devCaracas.n25': 'Auditoría técnica gratuita de tu sitio actual',
  'devCaracas.n26': 'Migración desde WordPress, Wix o cualquier CMS',
  'devCaracas.n27': 'Hosting optimizado con CDN global incluido',
  'devCaracas.n28': '100% Seguro y Optimizado',
  'devCaracas.n29': 'Stack Moderno',
  'devCaracas.n30': 'Stack Tecnológico',
  'devCaracas.n31': 'Tecnología perimetral',
  'devCaracas.n32': 'para resultados reales',
  'devCaracas.n33':
    'No usamos plantillas genéricas. Cada proyecto se construye desde cero con Astro, Next.js y Tailwind CSS, garantizando puntuaciones perfectas en Core Web Vitals y una experiencia de usuario superior.',
  'devCaracas.n34': 'Astro + Next.js: rendimiento SSR y SSG nativo',
  'devCaracas.n35': 'Despliegue en Vercel Edge Network: latencia mínima',
  'devCaracas.n36': 'SEO técnico avanzado y optimización de conversiones',
  'devCaracas.n37': 'Preguntas Frecuentes',
  'devCaracas.n38': '¿Cuánto tiempo toma desarrollar un sitio web?',
  'devCaracas.n39':
    'Dependiendo de la complejidad, un sitio corporativo puede estar listo en 2 a 4 semanas. Las plataformas SaaS y aplicaciones web más complejas pueden tomar de 6 a 12 semanas.',
  'devCaracas.n40': '¿Ofrecen mantenimiento después del lanzamiento?',
  'devCaracas.n41':
    'Sí, ofrecemos planes de mantenimiento continuo que incluyen actualizaciones de seguridad, respaldos, optimización de rendimiento y soporte técnico prioritario.',
  'devCaracas.n42': '¿Pueden migrar mi sitio actual desde WordPress?',
  'devCaracas.n43':
    'Absolutamente. Migramos sitios desde WordPress, Wix, Shopify y otros CMS a arquitecturas modernas con mejor rendimiento, seguridad y escalabilidad.',
  'devCaracas.n44': '¿Trabajan con presupuestos ajustados?',
  'devCaracas.n45':
    'Sí, diseñamos soluciones escalables que se adaptan a tu presupuesto. Podemos comenzar con un MVP e ir agregando funcionalidades progresivamente.',
  'devCaracas.n46': 'Contacto',
  'devCaracas.n47': 'Solicita tu cotización',
  'devCaracas.n48': 'Déjanos tus datos y te contactaremos en menos de 24 horas.',
  'devCaracas.n49': 'Nombre completo',
  'devCaracas.n50': 'Correo electrónico',
  'devCaracas.n51': 'Sitio web actual (opcional)',
  'devCaracas.n52': 'Cuéntanos sobre tu proyecto',
  'devCaracas.n53': 'Enviar Cotización',
  'devCaracas.n54': 'Tu nombre',
  'devCaracas.n55': 'Describe tu proyecto, objetivos y requerimientos técnicos...',
  // ── src/pages/partner-tecnologico-b2b.astro ──
  'partnerB2B.n01': 'Partner Tecnológico',
  'partnerB2B.n02': 'Cobro por horas eficientes. Transparencia total.',
  'partnerB2B.n03': 'Tu Partner Tecnológico en remoto para tus proyectos en España.',
  'partnerB2B.n04':
    'Absorbemos la carga técnica de tu agencia en España bajo modalidad Marca Blanca. Código limpio, entregas rápidas continuas y un panel privado con contador de horas para un control absoluto de tus',
  'partnerB2B.n05': 'costes de desarrollo',
  'partnerB2B.n06': '👉 Agendar videollamada por WhatsApp',
  'partnerB2B.n07': 'Agendar Consultoría Gratuita',
  'partnerB2B.n08': 'ESPAÑA · SIN PERMANENCIA · SIN MÍNIMOS',
  'partnerB2B.n09': 'Ventaja Competitiva',
  'partnerB2B.n10': 'Talento, Costes y Flexibilidad',
  'partnerB2B.n11': 'para tu Agencia',
  'partnerB2B.n12':
    'Operamos desde Caracas, Venezuela, un hub con una densidad impresionante de talento joven de ingeniería, alta capacitación técnica y dominio del español nativo. Sin barreras de comunicación. Con costes estructurales significativamente más bajos que los de la Unión Europea. Y toda esa eficiencia la trasladamos directamente a tu agencia.',
  'partnerB2B.n13': 'Hub de Talento en Caracas',
  'partnerB2B.n14':
    'Nuestro equipo central operativo se encuentra en Caracas, Venezuela, una región con una densidad impresionante de talento joven de ingeniería, alta capacitación técnica y un dominio del español nativo que elimina cualquier barrera de comunicación o malentendidos.',
  'partnerB2B.n15': 'Eficiencia de Costes Estructurales',
  'partnerB2B.n16':
    'Al operar desde Caracas, contamos con costes estructurales y de servicios profesionales significativamente más bajos que en la Unión Europea. Trasladamos esa eficiencia directamente a tu agencia, permitiéndote',
  'partnerB2B.n17': 'duplicar tus márgenes netos',
  'partnerB2B.n18': 'Flexibilidad y Velocidad de Perfiles',
  'partnerB2B.n19':
    'No importa el tamaño del reto. Nos encargamos de conseguir y asignar todo tipo de perfiles: desde desarrolladores',
  'partnerB2B.n20': 'Junior',
  'partnerB2B.n21': 'enfocados en maquetación masiva, ágil y económica, hasta ingenieros',
  'partnerB2B.n22': 'Senior',
  'partnerB2B.n23':
    'especializados en arquitecturas complejas. Todo coordinado para sacar adelante tus proyectos de la forma más rápida y eficiente posible.',
  'partnerB2B.n24': 'Software Propio',
  'partnerB2B.n25': 'Transparencia Radical',
  'partnerB2B.n26': 'Panel de Control de Vortex',
  'partnerB2B.n27':
    'Nuestro software propio es la garantía definitiva de honestidad y control para tu agencia. Cada minuto, cada tarea y cada euro, visibles al instante.',
  'partnerB2B.n28': 'Contador de horas exactas por tarea',
  'partnerB2B.n29':
    'Cada tarea registra el tiempo exacto de desarrollo en tiempo real. Sabes quién trabajó, cuánto tiempo llevó cada cosa y el coste acumulado. Sin estimaciones, sin sorpresas.',
  'partnerB2B.n30': 'Tarea actual',
  'partnerB2B.n31': '12.4h consumidas',
  'partnerB2B.n32': 'Seguimiento activo ahora',
  'partnerB2B.n33': 'Entregas Rápidas',
  'partnerB2B.n34':
    'Planificación continua con entregas funcionales y ágiles. Visualiza el progreso de tu proyecto a través de un',
  'partnerB2B.n35': 'Tablero de Control en vivo',
  'partnerB2B.n36':
    ': tareas pendientes, en desarrollo, en revisión y completadas. Capacidad de ajustar prioridades sobre la marcha con resultados medibles en cada lanzamiento.',
  'partnerB2B.n37': 'Estado del proyecto y métricas en vivo',
  'partnerB2B.n38':
    'Dashboard con porcentaje de avance del sprint, horas consumidas vs. presupuestadas, próximos hitos y entregas programadas. Siempre sabrás exactamente dónde está tu proyecto y cuánto se ha invertido.',
  'partnerB2B.n39': 'Facturación clara y transparente',
  'partnerB2B.n40':
    'Cada factura emitida desde nuestra LLC internacional está respaldada por el registro de horas de tu panel.',
  'partnerB2B.n41': 'Cero sorpresas en la factura final.',
  'partnerB2B.n42': 'Revisa, descarga y concilia tus facturas con los datos reales de consumo.',
  'partnerB2B.n43': '0% IVA para empresas españolas (inversión del sujeto pasivo).',
  'partnerB2B.n44': '¿Quieres ver cómo funciona el panel en vivo?',
  'partnerB2B.n45': 'Solicita una demo del panel',
  'partnerB2B.n46': 'Capacidades',
  'partnerB2B.n47': 'Catálogo de Servicios Core',
  'partnerB2B.n48': 'Servicio 01',
  'partnerB2B.n49': 'WordPress y',
  'partnerB2B.n50': 'Kit Digital',
  'partnerB2B.n51': 'Tu agencia consigue los clientes y gestiona el bono; nosotros somos tu',
  'partnerB2B.n52': 'fábrica técnica marca blanca',
  'partnerB2B.n53': 'Maquetación Pixel-Perfect a partir de Figma',
  'partnerB2B.n54':
    'Custom Themes o bloques nativos de Gutenberg. Sin page builders ni plugins basura',
  'partnerB2B.n55':
    'Estructuras adaptadas 100% al Kit Digital: Accesibilidad AA (WCAG 2.1), SEO on-page, responsive y paneles autogestionables',
  'partnerB2B.n56':
    'Listo para superar cualquier auditoría técnica del Ministerio sin retrasar tus cobros',
  'partnerB2B.n57': 'Kit Digital Ready',
  'partnerB2B.n58': '¿Saturado de proyectos de Kit Digital?',
  'partnerB2B.n59':
    'Súbelos a tu panel de Vortex, activa el contador de horas y nuestro equipo se encarga.',
  'partnerB2B.n60': 'Escríbenos por WhatsApp y agendamos un Meet rápido para coordinar.',
  'partnerB2B.n61': 'Escribir por WhatsApp →',
  'partnerB2B.n62': 'Astro · React · Next.js · Supabase',
  'partnerB2B.n63': 'Servicio 02',
  'partnerB2B.n64': 'Frontend y Backend',
  'partnerB2B.n65': 'Modernos',
  'partnerB2B.n66':
    'Arquitectura de software rápida, escalable y robusta para proyectos de alta exigencia.',
  'partnerB2B.n67': 'Frontends hiperrápidos con',
  'partnerB2B.n68': '(ideal para landings corporativas y sitios de alto rendimiento WPO)',
  'partnerB2B.n69': 'Aplicaciones web dinámicas con',
  'partnerB2B.n70': 'React y Next.js',
  'partnerB2B.n71': 'Backend con',
  'partnerB2B.n72': 'Supabase',
  'partnerB2B.n73': ': lógica de negocio, bases de datos y autenticación segura',
  'partnerB2B.n74': 'Integración de pasarelas de pago (Stripe), APIs de terceros y CI/CD en',
  'partnerB2B.n75': 'Servicio 03',
  'partnerB2B.n76': 'Apps Web y Móviles',
  'partnerB2B.n77': 'Desarrollo y Mantenimiento',
  'partnerB2B.n78':
    'Ciclo de vida completo para plataformas digitales y aplicaciones nativas/híbridas.',
  'partnerB2B.n79':
    'Diseño, desarrollo evolutivo y mantenimiento preventivo de aplicaciones web a medida',
  'partnerB2B.n80': 'Creación del MVP inicial hasta soporte técnico continuo',
  'partnerB2B.n81':
    'Corrección de errores, actualizaciones de seguridad y optimización de rendimiento',
  'partnerB2B.n82': 'Garantía de operación 24/7 para las apps de tus clientes',
  'partnerB2B.n83': 'Web · Móvil · MVP · Soporte',
  'partnerB2B.n84': 'Preguntas Frecuentes',
  'partnerB2B.n85': '¿Cómo sé que las horas del contador de Vortex son reales?',
  'partnerB2B.n86':
    'Cada tarea tiene un temporizador que se activa manualmente y se sincroniza automáticamente con tu Panel de Control. Puedes ver en vivo quién está trabajando, en qué tarea y el tiempo exacto acumulado. El sistema registra inicio, pausas y finalización por cada tarea individual. No hay forma de inflar las horas porque todo está traducido a tareas concretas del sprint que tú mismo apruebas en la planificación.',
  'partnerB2B.n87': 'No pagas por tiempo muerto, solo por desarrollo real.',
  'partnerB2B.n88': '¿Cómo se maneja la confidencialidad con mis clientes?',
  'partnerB2B.n89':
    'Firmamos un Acuerdo de Confidencialidad (NDA) mutuo y estricto antes de iniciar cualquier colaboración. Todo el desarrollo se gestiona bajo la identidad de tu agencia —',
  'partnerB2B.n90': 'tus clientes nunca sabrán de nuestra existencia',
  'partnerB2B.n91':
    '. Protegemos tu propiedad intelectual, código fuente, estrategia de negocio y cualquier información sensible. El NDA se mantiene vigente incluso después de finalizar la relación contractual.',
  'partnerB2B.n92': '¿Cómo se realiza la facturación a nivel internacional con la LLC?',
  'partnerB2B.n93':
    'Vortex Logic LLC está registrada en Estados Unidos y emite facturas oficiales. Para empresas españolas, la facturación se acoge al mecanismo de',
  'partnerB2B.n94': 'inversión del sujeto pasivo',
  'partnerB2B.n95': '(artículo 84.Uno.2º de la Ley del IVA):',
  'partnerB2B.n96': '0% IVA',
  'partnerB2B.n97':
    '— No se repercute IVA en la factura. Declaras el IVA devengado y su deducción en tu modelo 303.',
  'partnerB2B.n98': 'Sin retenciones de IRPF',
  'partnerB2B.n99': '— Al ser un servicio internacional, no aplican los modelos 123/124.',
  'partnerB2B.n100': '100% deducible',
  'partnerB2B.n101': 'como gasto de desarrollo informático para tu empresa.',
  'partnerB2B.n102':
    'Aceptamos tarjeta de crédito, transferencia SEPA, ACH y Binance Pay. Emitimos la factura en euros.',
  'partnerB2B.n103': '¿Empezamos?',
  'partnerB2B.n104': '¿Necesitas una fábrica técnica',
  'partnerB2B.n105': 'marca blanca para escalar tu agencia?',
  'partnerB2B.n106':
    'Cuéntanos tu volumen de proyectos y te enviamos una propuesta en menos de 48 horas. Sin compromiso, sin permanencia, sin mínimos.',
  'partnerB2B.n107': 'Escríbenos por WhatsApp y coordinamos un Meet →',
  'partnerB2B.n108': 'O envíanos tu volumen de trabajo →',
  'partnerB2B.n109': 'Contacto',
  'partnerB2B.n110': 'Solicita una consultoría gratuita',
  'partnerB2B.n111':
    'Cuéntanos sobre tu proyecto y te enviaremos una propuesta técnica en menos de 48 horas. Sin compromiso.',
  'partnerB2B.n112': 'Nombre completo',
  'partnerB2B.n113': 'Correo electrónico',
  'partnerB2B.n114': 'Empresa (opcional)',
  'partnerB2B.n115': 'Cuéntanos sobre tu proyecto',
  'partnerB2B.n116': 'Enviar Solicitud',
  'partnerB2B.n117': '¿Prefieres una respuesta inmediata?',
  'partnerB2B.n118': 'Escríbenos por WhatsApp ahora →',
  'partnerB2B.n119': 'Tu nombre',
  'partnerB2B.n120': 'Nombre de tu empresa',
  'partnerB2B.n121':
    'Describe tu proyecto, stack tecnológico actual, objetivos y requerimientos...',

  // ── src/pages/servicios/diseno-paginas-web-venezuela.astro ──
  'svcPaginasVe.n01': 'Diseño de Páginas Web en Venezuela con Rendimiento Premium',
  'svcPaginasVe.n02':
    'Creamos sitios web ultrarrápidos que cargan en milisegundos incluso en conexiones 3G. Optimizados para el ecosistema digital venezolano: pasarelas de pago internacionales, integraciones contables y delivery. Tu negocio en todo el país, sin fronteras.',
  'svcPaginasVe.n03': 'Cotizar Proyecto Nacional',
  'svcPaginasVe.n04': 'Ventajas nacionales',
  'svcPaginasVe.n05': 'globe',
  'svcPaginasVe.n06': 'vortex-cdn // edge-regions:latam',
  'svcPaginasVe.n07': 'Red de Distribución Global (CDN)',
  'svcPaginasVe.n08': 'bolt',
  'svcPaginasVe.n09': 'Miami',
  'svcPaginasVe.n10': 'São Paulo',
  'svcPaginasVe.n11': 'Bogotá',
  'svcPaginasVe.n12': 'Buenos Aires',
  'svcPaginasVe.n13': 'Venezuela',
  'svcPaginasVe.n14': 'Edge nodes: 100+',
  'svcPaginasVe.n15': 'Latencia promedio: 18ms',
  'svcPaginasVe.n16': 'Uptime: 99.99%',
  'svcPaginasVe.n17': 'Rendimiento Comparativo',
  'svcPaginasVe.n18': 'Sitio Tradicional (WordPress)',
  'svcPaginasVe.n19': '6.2s',
  'svcPaginasVe.n20': 'Lighthouse: 42',
  'svcPaginasVe.n21': '3G: 8.4s',
  'svcPaginasVe.n22': 'Vortex LM (Astro + Jamstack)',
  'svcPaginasVe.n23': '0.8s',
  'svcPaginasVe.n24': 'Lighthouse: 100',
  'svcPaginasVe.n25': '3G: 1.2s',
  'svcPaginasVe.n26': 'First Contentful Paint',
  'svcPaginasVe.n27': '0.3s',
  'svcPaginasVe.n28': 'Time to Interactive',
  'svcPaginasVe.n29': '0.6s',
  'svcPaginasVe.n30': 'Cumulative Layout Shift',
  'svcPaginasVe.n31': 'vs WordPress promedio',
  'svcPaginasVe.n32': '8x ms rápido',
  'svcPaginasVe.n33': 'Ventajas Nacionales',
  'svcPaginasVe.n34':
    'Tu web funcionando a máxima velocidad desde cualquier estado de Venezuela, incluso en conexiones 3G con ancho de banda limitado.',
  'svcPaginasVe.n35': 'Carga Instantánea en 3G/4G/5G',
  'svcPaginasVe.n36':
    'Astro genera HTML estático que pesa 90% menos que un sitio WordPress tradicional. Tu web carga en menos de 1 segundo incluso en conexiones móviles lentas de cualquier estado del país. Primer paint en 0.3s gracias al CSS crítico inline y la arquitectura Jamstack.',
  'svcPaginasVe.n37': 'HTML estático servido desde CDN',
  'svcPaginasVe.n38': 'JavaScript mínimo y diferido',
  'svcPaginasVe.n39': 'Imágenes WebP con lazy loading',
  'svcPaginasVe.n40': 'Integraciones para el Mercado Venezolano',
  'svcPaginasVe.n41':
    'Conectamos tu web con las plataformas que usa tu negocio en Venezuela: pasarelas de pago internacionales (PayPal, Stripe, MercadoPago), sistemas de facturación electrónica (Seniat, IVA), plataformas de delivery locales y CRMs adaptados al mercado nacional. Todo integrado en un solo ecosistema.',
  'svcPaginasVe.n42': 'Pasarelas: PayPal, Stripe, MercadoPago, Zelle',
  'svcPaginasVe.n43': 'Facturación electrónica Seniat/IVA',
  'svcPaginasVe.n44': 'Catálogos con inventario en tiempo real',
  'svcPaginasVe.n45': 'Presencia Digital en Todo el País',
  'svcPaginasVe.n46':
    'Sin importar si tu negocio está en Caracas, Maracaibo, Valencia, Barquisimeto, Maracay o cualquier ciudad del país. Tu web estará disponible para clientes en toda Venezuela con la misma velocidad y calidad. Servidores edge de Vercel aseguran latencia mínima desde cualquier ubicación.',
  'svcPaginasVe.n47': 'CDN global con nodos en Latinoamérica',
  'svcPaginasVe.n48': 'Soporte remoto desde cualquier estado',
  'svcPaginasVe.n49': 'Consultoría online sin necesidad de presencial',
  'svcPaginasVe.n50': 'Tecnología Adaptativa',
  'svcPaginasVe.n51':
    'Diseñado para el internet venezolano. Velocidad donde otros se quedan cargando.',
  'svcPaginasVe.n52':
    'En Venezuela, la velocidad de internet puede variar drásticamente según el operador y la región. Por eso construimos con Astro: genera HTML estático ultraligero que se sirve desde 100+ servidores alrededor del mundo. Mientras un sitio tradicional pesa 3-5MB y tarda 8 segundos en cargar, tu web Vortex pesa menos de 200KB y carga en menos de 1 segundo. Así de simple.',
  'svcPaginasVe.n53': 'check_circle',
  'svcPaginasVe.n54': 'Compresión Brotli + HTML estático pre-renderizado',
  'svcPaginasVe.n55': 'Imágenes WebP con calidad adaptativa por conexión',
  'svcPaginasVe.n56': 'Service worker para modo offline parcial',
  'svcPaginasVe.n57': 'Carga priorizada de contenido crítico (Critical CSS)',
  'svcPaginasVe.n58': 'Conexión: 3G (1.5 Mbps)',
  'svcPaginasVe.n59': 'Carga total: 187 KB',
  'svcPaginasVe.n60': 'Tiempo: 0.8s',
  'svcPaginasVe.n61': 'vs WordPress: 4.2 MB → 8.4s',
  'svcPaginasVe.n62': 'performance // venezuela-benchmark',
  'svcPaginasVe.n63': 'Simulado 3G',
  'svcPaginasVe.n64': 'Peso Total',
  'svcPaginasVe.n65': '187KB',
  'svcPaginasVe.n66': 'vs 4.2MB WordPress',
  'svcPaginasVe.n67': 'Tiempo 3G',
  'svcPaginasVe.n68': 'vs 8.4s WordPress',
  'svcPaginasVe.n69': 'Puntuación perfecta',
  'svcPaginasVe.n70': 'Uptime',
  'svcPaginasVe.n71': 'SLA Vercel Edge',
  'svcPaginasVe.n72': 'integrations // venezuela-ecosystem',
  'svcPaginasVe.n73': 'API Ready',
  'svcPaginasVe.n74': 'payments',
  'svcPaginasVe.n75': 'PayPal / Stripe',
  'svcPaginasVe.n76': 'Pasarelas globales',
  'svcPaginasVe.n77': 'account_balance',
  'svcPaginasVe.n78': 'MercadoPago',
  'svcPaginasVe.n79': 'Pag. Latinoamérica',
  'svcPaginasVe.n80': 'receipt_long',
  'svcPaginasVe.n81': 'Facturación Seniat',
  'svcPaginasVe.n82': 'IVA / CF Legal',
  'svcPaginasVe.n83': 'local_shipping',
  'svcPaginasVe.n84': 'Delivery / Logística',
  'svcPaginasVe.n85': 'MRW, Zoom, Domesa',
  'svcPaginasVe.n86': 'inventory_2',
  'svcPaginasVe.n87': 'Catálogos + Stock',
  'svcPaginasVe.n88': 'Inventario en vivo',
  'svcPaginasVe.n89': 'support_agent',
  'svcPaginasVe.n90': 'CRM Integrado',
  'svcPaginasVe.n91': 'HubSpot / SalesForce',
  'svcPaginasVe.n92': 'API REST · Webhooks · Automatización · Tiempo real',
  'svcPaginasVe.n93': 'Comercio sin Fronteras',
  'svcPaginasVe.n94': 'Vende a todo Venezuela (y el mundo) desde una sola plataforma.',
  'svcPaginasVe.n95':
    'Integramos tu web con las herramientas comerciales que necesitas: pasarelas de pago internacionales para recibir dólares, facturación electrónica conforme al Seniat, sistemas de delivery con MRW, Zoom y Domesa, y catálogos de productos con inventario sincronizado en tiempo real. Todo desde un panel centralizado y fácil de usar.',
  'svcPaginasVe.n96': 'Pagos en divisas (PayPal, Stripe, Zelle) y bolívares',
  'svcPaginasVe.n97': 'Facturación electrónica con requisitos fiscales VE',
  'svcPaginasVe.n98': 'Delivery integrado con cálculo de tarifas en tiempo real',
  'svcPaginasVe.n99': 'Infraestructura Global',
  'svcPaginasVe.n100': 'Tu web corre sobre la misma red que las grandes tecnológicas',
  'svcPaginasVe.n101': 'Vercel Edge Network',
  'svcPaginasVe.n102': '100+ servidores. Latencia mínima desde Venezuela.',
  'svcPaginasVe.n103':
    'Desplegamos tu sitio en la misma red edge de Vercel que usan empresas como Nike, TikTok y Airbnb. Tus visitantes en Venezuela reciben el contenido desde el servidor más cercano — Miami, São Paulo o Bogotá — con latencias promedio de 18ms. Carga instantánea desde cualquier estado del país.',
  'svcPaginasVe.n104': 'SSL + Seguridad',
  'svcPaginasVe.n105': 'Protección empresarial incluida en cada proyecto.',
  'svcPaginasVe.n106':
    'SSL automatizado con certificados renovados cada 90 días, Web Application Firewall (WAF) contra ataques DDoS, rate limiting en endpoints críticos y autenticación JWT para áreas protegidas. Tu web y los datos de tus clientes están seguros con los más altos estándares de la industria.',
  'svcPaginasVe.n107': '> curl -I https://tusitio.com',
  'svcPaginasVe.n108': 'HTTP/2 200',
  'svcPaginasVe.n109': 'content-type: text/html',
  'svcPaginasVe.n110': 'x-vercel-cache: HIT',
  'svcPaginasVe.n111': 'server: Vercel',
  'svcPaginasVe.n112': '✔ Connected · 0.12s · 187KB transferred',
  'svcPaginasVe.n113': 'Latencia por región (ms)',
  'svcPaginasVe.n114': 'Global avg',
  'svcPaginasVe.n115': 'LATAM',
  'svcPaginasVe.n116': 'Europa',
  'svcPaginasVe.n117': 'Asia',
  'svcPaginasVe.n118': 'P95 global: 120ms',
  'svcPaginasVe.n119': 'FAQ Nacional',
  'svcPaginasVe.n120': 'Preguntas frecuentes sobre nuestros servicios en Venezuela',
  'svcPaginasVe.n121': '¿Trabajan con empresas fuera de Caracas?',
  'svcPaginasVe.n122': 'expand_more',
  'svcPaginasVe.n123':
    '¡Por supuesto! Trabajamos con clientes de todo el país: Maracaibo, Valencia, Barquisimeto, Maracay, Puerto La Cruz, San Cristóbal y cualquier otra ciudad. Toda nuestra consultoría y desarrollo se realiza de forma remota a través de videollamadas, Slack y WhatsApp. No necesitamos reuniones presenciales para entregar resultados de clase mundial. De hecho, la mayoría de nuestros clientes los atendemos completamente online.',
  'svcPaginasVe.n124': '¿Cómo se maneja la consultoría y el soporte remoto?',
  'svcPaginasVe.n125':
    'Usamos metodologías ágiles con comunicación asíncrona y reuniones semanales por Google Meet o Zoom. Compartimos avances en tiempo real a través de canales de Slack/WhatsApp donde puedes ver el progreso del proyecto día a día. Para el soporte post-lanzamiento, tenemos un sistema de tickets con respuesta garantizada en menos de 48 horas. También ofrecemos sesiones de formación online para que tu equipo aprenda a administrar el contenido.',
  'svcPaginasVe.n126': '¿Qué métodos de pago e integraciones comerciales manejan?',
  'svcPaginasVe.n127':
    'Integramos las principales pasarelas de pago que operan en Venezuela y el extranjero:',
  'svcPaginasVe.n128': 'PayPal, Stripe, MercadoPago y Zelle',
  'svcPaginasVe.n129':
    '. Para facturación electrónica, conectamos con sistemas que cumplen con los requisitos del',
  'svcPaginasVe.n130': 'Seniat',
  'svcPaginasVe.n131': '(IVA, CF). También integramos plataformas de delivery como',
  'svcPaginasVe.n132': 'MRW, Zoom y Domesa',
  'svcPaginasVe.n133':
    'con cálculo de tarifas en tiempo real. Si necesitas una integración específica para tu industria, la desarrollamos a medida.',
  'svcPaginasVe.n134': '¿La web funcionará rápido con conexiones lentas de internet?',
  'svcPaginasVe.n135':
    'Sí, este es uno de nuestros diferenciadores principales. Una página web tradicional de WordPress pesa entre 3 y 5 MB y tarda 8 segundos o más en cargar con una conexión 3G típica en Venezuela. Nosotros generamos sitios que pesan',
  'svcPaginasVe.n136': 'menos de 200 KB',
  'svcPaginasVe.n137': 'y cargan en',
  'svcPaginasVe.n138': 'menos de 1 segundo',
  'svcPaginasVe.n139':
    'en las mismas condiciones. Esto se logra con: HTML estático pre-renderizado, imágenes comprimidas en WebP, carga diferida de contenido no crítico y una arquitectura que elimina todo el JavaScript innecesario. Tu web funciona perfectamente incluso en conexiones inestables.',
  'svcPaginasVe.n140': '¿Ofrecen mantenimiento y actualizaciones después del lanzamiento?',
  'svcPaginasVe.n141': 'Sí. Todos los proyectos incluyen',
  'svcPaginasVe.n142': '3 meses de soporte',
  'svcPaginasVe.n143':
    'post-lanzamiento para ajustes menores y estabilización. Después ofrecemos planes de mantenimiento mensual que incluyen: actualizaciones de seguridad, monitoreo 24/7 del rendimiento y uptime, backups automáticos de base de datos, optimización continua de velocidad y soporte prioritario por Slack o WhatsApp. También podemos agregar nuevas funcionalidades o secciones a tu web bajo demanda.',
  'svcPaginasVe.n144': 'Inicia tu Proyecto Nacional',
  'svcPaginasVe.n145': '¿Listo para llevar tu negocio al siguiente nivel digital?',
  'svcPaginasVe.n146':
    'Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada con estrategia, desarrollo, integraciones comerciales y presupuesto transparente. Trabajamos con empresas de todo Venezuela, 100% remoto.',
  'svcPaginasVe.n147': 'Nombre y Apellido',
  'svcPaginasVe.n148': 'Correo Corporativo',
  'svcPaginasVe.n149': 'Cuéntanos sobre tu proyecto',
  'svcPaginasVe.n150':
    'Mapa de distribución CDN con nodos en Latinoamérica - Diseño de páginas web en Venezuela',
  'svcPaginasVe.n151': 'e.g. Carlos Pérez',
  'svcPaginasVe.n152':
    '¿Qué tipo de proyecto tienes en mente? ¿En qué ciudad de Venezuela estás? ¿Necesitas integraciones de pago o delivery?',
  // ── src/pages/servicios/agencia-diseno-web-caracas.astro ──
  'svcAgencia.n01': 'Agencia de Diseño Web en Caracas: Interfaces de Alto Impacto y Conversión',
  'svcAgencia.n02':
    'Somos una agencia boutique de diseño web y desarrollo a medida. Creamos experiencias digitales que transforman marcas: interfaces UI/UX impecables, velocidad extrema y estrategia SEO integrada desde el primer boceto en Figma hasta el despliegue final.',
  'svcAgencia.n03': 'Iniciar Proyecto con la Agencia',
  'svcAgencia.n04': 'Nuestra metodología',
  'svcAgencia.n05': 'frame',
  'svcAgencia.n06': 'vortex-design // Landing Page Wireframe',
  'svcAgencia.n07': 'Capas',
  'svcAgencia.n08': 'Hero Section',
  'svcAgencia.n09': 'Navbar',
  'svcAgencia.n10': 'Features Grid',
  'svcAgencia.n11': 'Card Component',
  'svcAgencia.n12': 'Testimonios',
  'svcAgencia.n13': 'Contact Form',
  'svcAgencia.n14': 'Footer',
  'svcAgencia.n15': 'Componentes: 12',
  'svcAgencia.n16': 'Estilos: Tailwind',
  'svcAgencia.n17': 'Lienzo de diseño',
  'svcAgencia.n18': '12-column grid',
  'svcAgencia.n19': 'Auto layout',
  'svcAgencia.n20': 'Constraints',
  'svcAgencia.n21': 'Variants',
  'svcAgencia.n22': 'Propiedades',
  'svcAgencia.n23': 'Frame',
  'svcAgencia.n24': '1440px',
  'svcAgencia.n25': 'auto',
  'svcAgencia.n26': 'Paleta',
  'svcAgencia.n27': 'Tipografía',
  'svcAgencia.n28': 'Inter Variable',
  'svcAgencia.n29': 'Light 300 · Regular 400 · Medium 500',
  'svcAgencia.n30': 'Export: .astro / .tsx',
  'svcAgencia.n31': 'Metodologías',
  'svcAgencia.n32':
    'De la estrategia al despliegue. Un proceso diseñado para crear resultados medibles.',
  'svcAgencia.n33': 'Fase 1',
  'svcAgencia.n34': 'Duración aprox: 1 semana',
  'svcAgencia.n35': 'Estrategia y UI/UX — Prototipado en Figma',
  'svcAgencia.n36':
    'Investigamos tu industria, analizamos a tu competencia en Caracas y definimos la arquitectura de información ideal. Creamos wireframes y prototipos interactivos en Figma con toda la jerarquía visual, flujo de navegación y diseño responsive para móvil, tablet y escritorio. Cada decisión de diseño está respaldada por principios de conversión y usabilidad.',
  'svcAgencia.n37': 'Research & benchmark competitivo',
  'svcAgencia.n38': 'Wireframes de alta fidelidad',
  'svcAgencia.n39': 'Prototipo interactivo navegable',
  'svcAgencia.n40': 'Sistema de diseño (colores, tipografía, componentes)',
  'svcAgencia.n41': 'Fase 2',
  'svcAgencia.n42': 'Duración aprox: 2-3 semanas',
  'svcAgencia.n43': 'Desarrollo de Alto Rendimiento (Astro + React)',
  'svcAgencia.n44':
    'Convertimos los prototipos en código limpio y ultrarrápido con Astro, React y Tailwind CSS. Implementamos animaciones sutiles, transiciones de página instantáneas y carga progresiva de imágenes. Cada componente se construye con TypeScript estricto, accesibilidad ARIA y optimización para Core Web Vitals.',
  'svcAgencia.n45': 'Desarrollo basado en componentes',
  'svcAgencia.n46': 'Islands Architecture (cero JS innecesario)',
  'svcAgencia.n47': 'Optimización de imágenes y fuentes',
  'svcAgencia.n48': 'Responsive testing en 20+ dispositivos',
  'svcAgencia.n49': 'Fase 3',
  'svcAgencia.n50': 'Optimización SEO y Lanzamiento',
  'svcAgencia.n51':
    'Antes del lanzamiento, auditamos cada página con herramientas profesionales: etiquetas meta, datos estructurados Schema.org, Open Graph, archivo robots.txt, sitemap XML y rendimiento Lighthouse. Desplegamos en Vercel con SSL automatizado y monitoreo continuo. Tu web sale al mundo con la máxima velocidad y el mejor posicionamiento posible.',
  'svcAgencia.n52': 'SEO técnico completo (meta tags, Schema, OG)',
  'svcAgencia.n53': 'Core Web Vitals optimizado (Lighthouse 95+)',
  'svcAgencia.n54': 'Deploy en Vercel Edge + SSL + CDN',
  'svcAgencia.n55': 'Google Search Console + Analytics configurado',
  'svcAgencia.n56': 'Servicios',
  'svcAgencia.n57': 'Todo lo que necesitas para brillar en digital',
  'svcAgencia.n58': 'palette',
  'svcAgencia.n59': 'Diseño UI/UX',
  'svcAgencia.n60':
    'Interfaces modernas, intuitivas y centradas en el usuario. Prototipado en Figma, sistemas de diseño y pruebas de usabilidad antes de escribir una línea de código.',
  'svcAgencia.n61': 'code',
  'svcAgencia.n62': 'Desarrollo Web',
  'svcAgencia.n63':
    'Sitios corporativos, landing pages y plataformas web con Astro, React, Next.js y el stack Jamstack más moderno. Carga en milisegundos y SEO nativo.',
  'svcAgencia.n64': 'trending_up',
  'svcAgencia.n65': 'Estrategia SEO',
  'svcAgencia.n66':
    'Auditoría técnica, investigación de keywords locales en Caracas, optimización on-page, datos estructurados y Google My Business integrado.',
  'svcAgencia.n67': 'speed',
  'svcAgencia.n68': 'Optimización de Rendimiento',
  'svcAgencia.n69':
    'Transformamos sitios lentos en experiencias ultrarrápidas. Core Web Vitals, compresión de assets, lazy loading y CDN global.',
  'svcAgencia.n70': 'smartphone',
  'svcAgencia.n71': 'PWAs y Apps Web',
  'svcAgencia.n72':
    'Aplicaciones web progresivas con funcionamiento offline, notificaciones push y experiencia de app nativa sin pasar por app stores.',
  'svcAgencia.n73': 'support',
  'svcAgencia.n74': 'Mantenimiento y Soporte',
  'svcAgencia.n75':
    'Planes de mantenimiento mensual con actualizaciones, backups, monitoreo 24/7 y soporte prioritario por Slack o WhatsApp.',
  'svcAgencia.n76': 'UI/UX Design',
  'svcAgencia.n77': 'Cada píxel cuenta. Diseñamos experiencias que cautivan y convierten.',
  'svcAgencia.n78':
    'Nuestro proceso de diseño comienza con la investigación profunda de tu audiencia en Caracas. Definimos la personalidad de tu marca, creamos moodboards, diseñamos sistemas de componentes reutilizables y prototipamos cada interacción. No diseñamos para que se vea bonito: diseñamos para que tu negocio venda más.',
  'svcAgencia.n79': 'check_circle',
  'svcAgencia.n80': 'Prototipos interactivos en Figma con feedback del cliente',
  'svcAgencia.n81': 'Sistema de diseño con componentes reutilizables (Design System)',
  'svcAgencia.n82': 'Pruebas de usabilidad y ajustes basados en comportamiento real',
  'svcAgencia.n83': 'Design System Tokens',
  'svcAgencia.n84': '--color-primary: #6366f1',
  'svcAgencia.n85': '--color-surface: #000000',
  'svcAgencia.n86': '--font-display: \'Inter Variable\'',
  'svcAgencia.n87': '--radius-sm: 4px',
  'svcAgencia.n88': '--radius-md: 8px',
  'svcAgencia.n89': '--spacing-grid: 8px',
  'svcAgencia.n90': 'design-system // vortex-tokens',
  'svcAgencia.n91': 'v1.0',
  'svcAgencia.n92': 'Colores',
  'svcAgencia.n93': 'Inter',
  'svcAgencia.n94': 'Light · Regular · Medium · Semibold',
  'svcAgencia.n95': 'Espaciado',
  'svcAgencia.n96': 'Bordes',
  'svcAgencia.n97': 'Por qué Vortex',
  'svcAgencia.n98': 'No somos una agencia de plantillas',
  'svcAgencia.n99': 'Diseño Personalizado',
  'svcAgencia.n100': 'Cero plantillas. Cada proyecto es único.',
  'svcAgencia.n101':
    'No compramos temas de WordPress ni usamos constructores visuales. Cada línea de código y cada píxel es diseñado y desarrollado desde cero para tu marca. Tu web será tan única como tu negocio.',
  'svcAgencia.n102': 'Comunicación Directa',
  'svcAgencia.n103': 'Hablas con el equipo que construye',
  'svcAgencia.n104':
    'Sin intermediarios ni ejecutivos de cuenta que traduzcan mensajes. Trabajas directamente con los diseñadores y desarrolladores que construyen tu proyecto. Comunicación ágil por Slack o WhatsApp con respuestas en tiempo real.',
  'svcAgencia.n105': 'Proyectos entregados',
  'svcAgencia.n106': 'Lighthouse SEO',
  'svcAgencia.n107': '48h',
  'svcAgencia.n108': 'Tiempo de respuesta',
  'svcAgencia.n109': '<1s',
  'svcAgencia.n110': 'Tiempo de carga',
  'svcAgencia.n111': 'Preguntas frecuentes sobre la agencia',
  'svcAgencia.n112': '¿Cómo es el proceso de diseño con ustedes?',
  'svcAgencia.n113': 'expand_more',
  'svcAgencia.n114': 'Comenzamos con una',
  'svcAgencia.n115': 'reunión de descubrimiento',
  'svcAgencia.n116': 'para entender tu negocio, audiencia y objetivos. Luego creamos un',
  'svcAgencia.n117': 'brief creativo',
  'svcAgencia.n118':
    'con la dirección visual y arquitectura de información. Diseñamos los wireframes y prototipos en Figma que revisamos contigo en sesiones de feedback iterativas. Una vez aprobado el diseño, pasamos a desarrollo. Todo el proceso es transparente y colaborativo — tú ves el avance en tiempo real.',
  'svcAgencia.n119': '¿Entregan prototipos en Figma antes de programar?',
  'svcAgencia.n120':
    'Sí, absolutamente. Nunca escribimos una línea de código sin antes tener el diseño completo aprobado en Figma. Esto incluye',
  'svcAgencia.n121': 'prototipos interactivos',
  'svcAgencia.n122':
    'con navegación entre pantallas, animaciones y estados (hover, active, loading, error). Así garantizamos que el resultado final sea exactamente lo que esperas, sin sorpresas ni retrabajos costosos.',
  'svcAgencia.n123': '¿Trabajan con marcas que ya tienen identidad visual?',
  'svcAgencia.n124':
    'Por supuesto. Si ya tienes una marca establecida con manual de identidad, colores corporativos, tipografía y logo,',
  'svcAgencia.n125': 'trabajamos sobre esos activos',
  'svcAgencia.n126':
    'para crear una web que sea una extensión natural de tu marca. Si necesitas refrescar tu identidad o crearla desde cero, también ofrecemos servicios de branding estratégico.',
  'svcAgencia.n127': '¿Cómo garantizan que la web ayude a vender?',
  'svcAgencia.n128': 'Cada sección de tu web está diseñada con un',
  'svcAgencia.n129': 'propósito de conversión',
  'svcAgencia.n130':
    'específico. Aplicamos principios de psicología del color, jerarquía visual, copywriting persuasivo y llamadas a la acción estratégicamente ubicadas. Además, integramos herramientas de analytics para medir el comportamiento de los visitantes y hacemos ajustes basados en datos reales. Una web de Vortex no es un folleto digital: es una máquina de captación de clientes.',
  'svcAgencia.n131': '¿Ofrecen soporte después de lanzar la web?',
  'svcAgencia.n132': 'Sí. Todos nuestros proyectos incluyen',
  'svcAgencia.n133': '3 meses de soporte post-lanzamiento',
  'svcAgencia.n134':
    'para ajustes, correcciones y estabilización. Luego ofrecemos planes de mantenimiento mensual que cubren: actualizaciones de seguridad, monitoreo de rendimiento, backups, optimización SEO continua y soporte prioritario por Slack/WhatsApp. También podemos ayudarte a crear contenido nuevo, agregar secciones o escalar la plataforma a medida que tu negocio crece.',
  'svcAgencia.n135': 'Trabajemos juntos',
  'svcAgencia.n136': '¿Listo para transformar tu presencia digital?',
  'svcAgencia.n137':
    'Cuéntanos sobre tu proyecto y te prepararemos una propuesta de agencia con estrategia, diseño, desarrollo y presupuesto transparente. Sin compromisos.',
  'svcAgencia.n138': 'Nombre y Apellido',
  'svcAgencia.n139': 'Correo Corporativo',
  'svcAgencia.n140': 'Cuéntanos sobre tu proyecto',
  'svcAgencia.n141': 'Agendar Consultoría de Estrategia',
  'svcAgencia.n142': 'Editor de diseño UI UX estilo Figma - Agencia de diseño web en Caracas',
  'svcAgencia.n143': 'e.g. Carlos Pérez',
  'svcAgencia.n144':
    '¿Qué tipo de proyecto tienes en mente? ¿Cuál es tu industria? ¿Tienes un presupuesto estimado o plazo ideal?',

  // ── src/pages/servicios/desarrollo-web-caracas.astro ──
  'svcDevCaracas.n01': 'Desarrollo Web en Caracas: Ingeniería de Software a Medida',
  'svcDevCaracas.n02':
    'Creamos aplicaciones web progresivas, integraciones de API robustas y plataformas headless que escalan con tu negocio. Astro, React, Next.js y Supabase — el stack definitivo para empresas que exigen rendimiento.',
  'svcDevCaracas.n03': 'Cotizar Solución Técnica',
  'svcDevCaracas.n04': 'Ver soluciones',
  'svcDevCaracas.n05': 'terminal',
  'svcDevCaracas.n06': 'vortex-api-server // build:production',
  'svcDevCaracas.n07': 'api/endpoints.ts',
  'svcDevCaracas.n08': 'components/',
  'svcDevCaracas.n09': 'db/schema.ts',
  'svcDevCaracas.n10': 'import',
  'svcDevCaracas.n11': 'from',
  'svcDevCaracas.n12': '\'../db/client\'',
  'svcDevCaracas.n13': '\'@vortex/api\'',
  'svcDevCaracas.n14': '// Endpoint RESTful con validación y rate-limiting',
  'svcDevCaracas.n15': 'export const',
  'svcDevCaracas.n16': '= defineEndpoint(',
  'svcDevCaracas.n17': 'async',
  'svcDevCaracas.n18': '({ req, res })',
  'svcDevCaracas.n19': 'const',
  'svcDevCaracas.n20': 'await',
  'svcDevCaracas.n21': 'supabase',
  'svcDevCaracas.n22': '\'clientes\'',
  'svcDevCaracas.n23': 'select',
  'svcDevCaracas.n24': 'limit',
  'svcDevCaracas.n25': 'return',
  'svcDevCaracas.n26': 'res',
  'svcDevCaracas.n27': 'status',
  'svcDevCaracas.n28': 'json',
  'svcDevCaracas.n29': '({ data, meta: { cached:',
  'svcDevCaracas.n30': 'true',
  'svcDevCaracas.n31': ', latency:',
  'svcDevCaracas.n32': '12ms',
  'svcDevCaracas.n33': 'Response Log',
  'svcDevCaracas.n34': '200 OK',
  'svcDevCaracas.n35': 'GET /api/clientes',
  'svcDevCaracas.n36': '12ms · 1420 rows',
  'svcDevCaracas.n37': '201 Created',
  'svcDevCaracas.n38': 'POST /api/contacto',
  'svcDevCaracas.n39': '8ms · payload 2.4KB',
  'svcDevCaracas.n40': '304 Not Modified',
  'svcDevCaracas.n41': 'GET /api/productos',
  'svcDevCaracas.n42': '2ms · cached',
  'svcDevCaracas.n43': 'Uptime: 99.99%',
  'svcDevCaracas.n44': 'SSL · WAF · Rate Limited',
  'svcDevCaracas.n45': 'Soluciones Avanzadas',
  'svcDevCaracas.n46':
    'Arquitectura de software moderna para empresas que necesitan más que un sitio web.',
  'svcDevCaracas.n47': 'Progressive Web Apps (PWA)',
  'svcDevCaracas.n48':
    'Transformamos tu web en una experiencia de aplicación nativa con service workers, caché offline, notificaciones push y carga instantánea. Tus usuarios en Caracas acceden a tu plataforma incluso sin conexión a internet.',
  'svcDevCaracas.n49': 'Instalable en home screen',
  'svcDevCaracas.n50': 'Sincronización en segundo plano',
  'svcDevCaracas.n51': '90% menos datos que app nativa',
  'svcDevCaracas.n52': 'Integraciones de API y CRMs',
  'svcDevCaracas.n53':
    'Conectamos tu web con los sistemas que ya usas: CRMs como Salesforce o HubSpot, pasarelas de pago, ERP contable, sistemas de inventario y cualquier API REST o GraphQL. Flujos automatizados que eliminan procesos manuales.',
  'svcDevCaracas.n54': 'Webhooks en tiempo real',
  'svcDevCaracas.n55': 'Autenticación OAuth 2.0 / JWT',
  'svcDevCaracas.n56': 'Documentación Swagger/OpenAPI',
  'svcDevCaracas.n57': 'Bases de Datos Headless',
  'svcDevCaracas.n58':
    'Arquitectura desacoplada con Supabase (PostgreSQL), Airtable o MongoDB. Tu equipo accede y edita los datos desde un panel amigable mientras el frontend consume la información via API. Escalabilidad horizontal sin límites.',
  'svcDevCaracas.n59': 'Realtime subscriptions (WebSockets)',
  'svcDevCaracas.n60': 'Row Level Security integrado',
  'svcDevCaracas.n61': 'Migraciones automatizadas',
  'svcDevCaracas.n62': 'Stack Técnico',
  'svcDevCaracas.n63': 'El stack que usan las startups más innovadoras del mundo.',
  'svcDevCaracas.n64':
    'Astro para velocidad extrema, React para interactividad, Supabase como backend escalable y Vercel para despliegues globales. Cada tecnología es seleccionada por su rendimiento, seguridad y ecosistema. No usamos código legacy ni dependencias innecesarias.',
  'svcDevCaracas.n65': 'check_circle',
  'svcDevCaracas.n66': 'Astro + React Islands Architecture',
  'svcDevCaracas.n67': 'TypeScript estricto en toda la codebase',
  'svcDevCaracas.n68': 'Testing automatizado (Vitest + Playwright)',
  'svcDevCaracas.n69': 'CI/CD con deploys automáticos desde GitHub',
  'svcDevCaracas.n70': '// Arquitectura',
  'svcDevCaracas.n71': 'client → CDN → Edge',
  'svcDevCaracas.n72': 'Astro SSR + API Routes',
  'svcDevCaracas.n73': 'Supabase PostgreSQL',
  'svcDevCaracas.n74': 'WebSocket Realtime',
  'svcDevCaracas.n75': 'architecture // vortex-stack',
  'svcDevCaracas.n76': 'Producción',
  'svcDevCaracas.n77': 'Frontend',
  'svcDevCaracas.n78': 'Astro + React + Tailwind',
  'svcDevCaracas.n79': 'Backend',
  'svcDevCaracas.n80': 'Supabase + API Routes',
  'svcDevCaracas.n81': 'Despliegue',
  'svcDevCaracas.n82': 'Vercel Edge Network',
  'svcDevCaracas.n83': 'Base de Datos',
  'svcDevCaracas.n84': 'PostgreSQL / Airtable',
  'svcDevCaracas.n85': 'data-flow // api-pipeline',
  'svcDevCaracas.n86': 'devices',
  'svcDevCaracas.n87': 'Cliente',
  'svcDevCaracas.n88': 'HTTPS',
  'svcDevCaracas.n89': 'cloud',
  'svcDevCaracas.n90': 'Edge CDN',
  'svcDevCaracas.n91': '~12ms',
  'svcDevCaracas.n92': 'dns',
  'svcDevCaracas.n93': 'API Server',
  'svcDevCaracas.n94': 'database',
  'svcDevCaracas.n95': 'PostgreSQL',
  'svcDevCaracas.n96': 'Request',
  'svcDevCaracas.n97': 'Cache',
  'svcDevCaracas.n98': 'Process',
  'svcDevCaracas.n99': 'Query',
  'svcDevCaracas.n100': 'Response',
  'svcDevCaracas.n101': 'Arquitectura de Datos',
  'svcDevCaracas.n102': 'Flujo de datos en tiempo real. Sin cuellos de botella.',
  'svcDevCaracas.n103':
    'Diseñamos sistemas donde los datos viajan del cliente a la base de datos y viceversa en milisegundos. WebSockets para actualizaciones en vivo, caché inteligente en el edge y consultas optimizadas con índices personalizados. Tu equipo siempre ve la información más reciente.',
  'svcDevCaracas.n104': 'Subscripciones Realtime con Supabase',
  'svcDevCaracas.n105': 'Caché distribuido en Vercel Edge',
  'svcDevCaracas.n106': 'Rate limiting y DDoS protection',
  'svcDevCaracas.n107': 'Infraestructura Técnica',
  'svcDevCaracas.n108': 'Seguridad, monitoreo y escalabilidad enterprise',
  'svcDevCaracas.n109': 'Seguridad',
  'svcDevCaracas.n110': 'Protección en múltiples capas',
  'svcDevCaracas.n111':
    'SSL automatizado, Web Application Firewall, rate limiting, autenticación JWT y Row Level Security en base de datos. Cada proyecto incluye auditoría de vulnerabilidades antes de pasar a producción.',
  'svcDevCaracas.n112': 'Monitoreo',
  'svcDevCaracas.n113': 'Observabilidad 24/7',
  'svcDevCaracas.n114':
    'Dashboards en tiempo real con métricas de rendimiento, errores, uso de API y tiempo de respuesta. Alertas automáticas si algo se desvía de los parámetros normales.',
  'svcDevCaracas.n115': '> npm run deploy --production',
  'svcDevCaracas.n116': '[VORTEX CI/CD] Running test suite...',
  'svcDevCaracas.n117': '✔ 42 tests passed (2.1s)',
  'svcDevCaracas.n118': '✔ Build optimized · 98 Lighthouse',
  'svcDevCaracas.n119': '> Deploying to 100+ edge regions...',
  'svcDevCaracas.n120': '✔ Deployment complete · v2.4.1',
  'svcDevCaracas.n121': 'API Response Times (p50)',
  'svcDevCaracas.n122': '18ms avg',
  'svcDevCaracas.n123': 'p50: 18ms · p95: 42ms · p99: 120ms',
  'svcDevCaracas.n124': 'FAQ Técnica',
  'svcDevCaracas.n125': 'Preguntas frecuentes sobre desarrollo',
  'svcDevCaracas.n126': '¿Qué tecnologías usan para desarrollo web?',
  'svcDevCaracas.n127': 'expand_more',
  'svcDevCaracas.n128': 'Nuestro stack principal es',
  'svcDevCaracas.n129': 'Astro + React + TypeScript',
  'svcDevCaracas.n130': 'para el frontend,',
  'svcDevCaracas.n131': 'Supabase (PostgreSQL)',
  'svcDevCaracas.n132': 'como base de datos y backend, y',
  'svcDevCaracas.n133':
    'para despliegue global. Para proyectos que requieren renderizado del lado del servidor usamos',
  'svcDevCaracas.n134':
    '. También integramos WebSockets para funcionalidades en tiempo real, colas de trabajo con Redis cuando se necesita procesamiento asíncrono, y almacenamiento de archivos en CDN con optimización automática de imágenes.',
  'svcDevCaracas.n135': '¿Cómo manejan los datos y la seguridad?',
  'svcDevCaracas.n136': 'Implementamos',
  'svcDevCaracas.n137': 'Row Level Security (RLS)',
  'svcDevCaracas.n138':
    'directamente en PostgreSQL — cada usuario solo ve los datos que le corresponden. La autenticación se maneja con',
  'svcDevCaracas.n139': 'JWT + OAuth 2.0',
  'svcDevCaracas.n140':
    '(Google, GitHub, email). Todas las conexiones viajan por HTTPS con SSL automatizado. Además, aplicamos rate limiting, validación de datos en el servidor y auditoría de seguridad automatizada antes de cada deploy.',
  'svcDevCaracas.n141': '¿Se puede integrar con mi CRM o sistema actual?',
  'svcDevCaracas.n142':
    'Sí. Diseñamos integraciones personalizadas con cualquier sistema que exponga una API REST o GraphQL. Hemos conectado plataformas con',
  'svcDevCaracas.n143': 'Salesforce, HubSpot, SAP, sistemas contables venezolanos (Seniat, IVA)',
  'svcDevCaracas.n144':
    ', pasarelas de pago como PayPal, Stripe y MercadoPago, y servicios de email como SendGrid y Resend. También podemos construir webhooks bidireccionales para sincronización en tiempo real.',
  'svcDevCaracas.n145': '¿Qué ventajas tiene una PWA frente a una app nativa?',
  'svcDevCaracas.n146': 'Las PWAs ofrecen',
  'svcDevCaracas.n147': '90% menos costo de desarrollo',
  'svcDevCaracas.n148':
    'que una app nativa, se actualizan instantáneamente (sin pasar por app stores), funcionan offline con service workers, pesan menos de 5MB y se instalan directamente desde el navegador. Para la mayoría de casos de uso empresarial —catálogos, paneles de administración, plataformas de servicio— una PWA supera el rendimiento y la experiencia de una app nativa. Si necesitas acceso profundo al hardware del dispositivo (bluetooth, sensores específicos), evaluamos una app nativa o híbrida.',
  'svcDevCaracas.n149': '¿Ofrecen mantenimiento y soporte post-lanzamiento?',
  'svcDevCaracas.n150': 'Sí. Todos nuestros proyectos incluyen',
  'svcDevCaracas.n151': '3 meses de soporte técnico',
  'svcDevCaracas.n152':
    'post-lanzamiento para ajustes y estabilización. Después ofrecemos planes de mantenimiento mensual que cubren: actualizaciones de dependencias, monitoreo 24/7, backups de base de datos, optimización de rendimiento y soporte prioritario por Slack/WhatsApp. También podemos agregar nuevas funcionalidades bajo demanda con presupuestos por sprint.',
  'svcDevCaracas.n153': 'Inicia tu proyecto',
  'svcDevCaracas.n154': '¿Tienes un proyecto técnico en mente?',
  'svcDevCaracas.n155':
    'Cuéntanos los detalles técnicos de tu proyecto y te propondremos la arquitectura ideal. Respondemos en menos de 24 horas con una propuesta clara y presupuesto transparente.',
  'svcDevCaracas.n156': 'Nombre y Apellido',
  'svcDevCaracas.n157': 'Correo Corporativo',
  'svcDevCaracas.n158': 'Descripción técnica del proyecto',
  'svcDevCaracas.n159': 'Consola de API RESTful con código TypeScript - Desarrollo web en Caracas',
  'svcDevCaracas.n160': 'e.g. Carlos Pérez',
  'svcDevCaracas.n161':
    '¿Qué necesitas desarrollar? ¿Qué tecnologías prefieres? ¿Tienes integraciones con otros sistemas? Cuéntanos todo lo técnico.',

  // ── src/pages/servicios/desarrollo-web-astro-react-nextjs.astro ──
  'svcAstroStack.n01':
    'Páginas web del futuro: Rápidas, seguras y optimizadas para Google con stacks modernos.',
  'svcAstroStack.n02':
    'El desarrollo web tradicional basado en plantillas pesadas y monolitos sobrecargados ha quedado en el pasado. En el ecosistema digital actual, cada milisegundo de carga cuenta. Si tu sitio web tarda más de 2 segundos en responder, estás perdiendo clientes y posiciones en Google.',
  'svcAstroStack.n03': 'Agendar una llamada',
  'svcAstroStack.n04': 'Ver tecnologías',
  'svcAstroStack.n05':
    'El Enfoque Headless: Lo mejor de dos mundos. No tienes que renunciar a la comodidad de tu panel de administración actual para tener una web ultra rápida.',
  'svcAstroStack.n06': 'Back-end Autogestionable',
  'svcAstroStack.n07':
    'Mantenemos la robustez de plataformas como WordPress o Supabase para que sigas gestionando tus contenidos, blogs, productos y clientes de forma sencilla.',
  'svcAstroStack.n08': 'Front-end de Alto Rendimiento',
  'svcAstroStack.n09':
    'Diseñamos y compilamos la interfaz visual utilizando los frameworks más potentes del mercado moderno. El resultado es un código HTML limpio, estático y optimizado que vuela.',
  'svcAstroStack.n10':
    'Nuestro Stack Tecnológico Primario. Elegimos la herramienta exacta para cada tipo de necesidad, garantizando escalabilidad y código limpio.',
  'svcAstroStack.n11':
    'El framework ideal para webs corporativas, landings de conversión y blogs de contenido editorial o lifestyle. Astro elimina todo el JavaScript innecesario del navegador por defecto, generando páginas estáticas que logran una puntuación perfecta de 100/100 en Google PageSpeed. Imágenes pesadas y portafolios de alta calidad cargan al instante.',
  'svcAstroStack.n12': 'React & Next.js',
  'svcAstroStack.n13':
    'Para aplicaciones web interactivas, plataformas de telemedicina con sincronización en tiempo real, sistemas CRM a medida y e-commerce de alta escala. Con Next.js implementamos renderizado en el servidor (SSR) y arquitecturas híbridas avanzadas, manteniendo la agilidad de una aplicación móvil en un entorno web seguro.',
  'svcAstroStack.n14':
    'Estilizados a medida desde cero. No compramos plantillas genéricas. Escribimos CSS utilitario y optimizado para que la interfaz sea 100% responsive, coherente con tus guías de branding y sumamente ligera en dispositivos móviles.',
  'svcAstroStack.n15': 'Beneficios de la Arquitectura Jamstack con Vortex.',
  'svcAstroStack.n16': 'Velocidad Instantánea (SEO Nativo)',
  'svcAstroStack.n17':
    'Al servir archivos estáticos pre-renderizados a través de una red global (CDN), los Core Web Vitals de Google se optimizan en automático, dándote una ventaja drástica en el posicionamiento orgánico.',
  'svcAstroStack.n18': 'Seguridad Blindada',
  'svcAstroStack.n19':
    'Al no haber una base de datos expuesta directamente en el Front-end, los vectores de ataque comunes (como inyecciones SQL o hackeos de plugins tradicionales) se reducen a cero.',
  'svcAstroStack.n20': 'Experiencia Móvil Fluida',
  'svcAstroStack.n21':
    'Diseñamos pensando primero en el móvil (Mobile-First). La ligereza del código garantiza que la web responda sin retrasos ni pantallas en blanco, incluso en conexiones lentas.',
  'svcAstroStack.n22': 'Costos de Infraestructura Reducidos',
  'svcAstroStack.n23':
    'Las webs estáticas consumen una fracción de los recursos de un servidor tradicional, permitiendo soportar miles de visitas simultáneas en plataformas de despliegue moderno como Vercel sin caídas del sistema.',
  'svcAstroStack.n24': 'Automatización y Desarrollo Inteligente',
  'svcAstroStack.n25': 'Automatización y Desarrollo Inteligente.',
  'svcAstroStack.n26':
    'Nuestro flujo de trabajo está potenciado por agentes de IA locales e integración continua. Esto nos permite refactorizar código en tiempo real, auditar la seguridad de cada componente y automatizar pruebas de rendimiento antes de cada despliegue. Para ti, esto se traduce en tiempos de entrega hasta un 50% más rápidos y un producto final libre de errores técnicos.',
  'svcAstroStack.n27': '¿Listo para dar el salto al desarrollo web moderno? Hablemos',
  'svcAstroStack.n28': 'vortex-ci // pipeline-status',
  'svcAstroStack.n29': 'All checks passed',
  'svcAstroStack.n30': 'Build & Test — 12.4s',
  'svcAstroStack.n31': 'Lighthouse Audit — 100/100',
  'svcAstroStack.n32': 'Security Scan — 0 vulnerabilities',
  'svcAstroStack.n33': 'Deploy to Production',
  'svcAstroStack.n34': 'Preguntas Frecuentes',
  'svcAstroStack.n35': 'Información transparente sobre nuestras tecnologías y procesos.',
  'svcAstroStack.n36': 'Inicia hoy',
  'svcAstroStack.n37': 'Escala tus operaciones digitales.',
  'svcAstroStack.n38':
    'Hablemos de tu proyecto. Cuéntanos qué necesitas construir con Astro, Next.js o Supabase y te propondremos la arquitectura ideal.',
  'svcAstroStack.n39': 'Nombre Completo',
  'svcAstroStack.n40': 'Correo Corporativo',
  'svcAstroStack.n41': 'Presupuesto Estimado',
  'svcAstroStack.n42': 'Selecciona un rango',
  'svcAstroStack.n43': 'Menos de $1,000 USD',
  'svcAstroStack.n44': '$1,000 - $3,000 USD',
  'svcAstroStack.n45': '$3,000 - $5,000 USD',
  'svcAstroStack.n46': '$5,000 - $10,000 USD',
  'svcAstroStack.n47': 'Más de $10,000 USD',
  'svcAstroStack.n48': 'Cuéntanos sobre tu proyecto',
  'svcAstroStack.n49': 'Enviar Propuesta',
  'svcAstroStack.n50': 'Tus datos están protegidos. Sin spam, garantizado.',
  'svcAstroStack.n51': 'Ej. Carlos Mendoza',
  'svcAstroStack.n52':
    'Describe el alcance de tu proyecto, tecnologías de interés y objetivos de negocio...',

  // ── src/pages/servicios/diseno-paginas-web-caracas.astro ──
  'svcPaginasCaracas.n01': 'Diseño de Páginas Web en Caracas para Empresas de Alto Rendimiento',
  'svcPaginasCaracas.n02':
    'Creamos sitios web ultrarrápidos con Astro, React y Next.js. Optimización SEO nativa, seguridad de nivel empresarial y diseño premium que convierte visitantes en clientes.',
  'svcPaginasCaracas.n03': 'Agendar una llamada',
  'svcPaginasCaracas.n04': 'Ver beneficios',
  'svcPaginasCaracas.n05': 'lock',
  'svcPaginasCaracas.n06': 'https://tusitio.com · SSL Secured',
  'svcPaginasCaracas.n07': 'Core Web Vitals Pass',
  'svcPaginasCaracas.n08': 'speed',
  'svcPaginasCaracas.n09': 'Lighthouse 100',
  'svcPaginasCaracas.n10': 'devices',
  'svcPaginasCaracas.n11': 'Responsive',
  'svcPaginasCaracas.n12': 'bolt',
  'svcPaginasCaracas.n13': 'Carga en menos de 100ms · Primer paint instantáneo',
  'svcPaginasCaracas.n14': 'Métricas Clave',
  'svcPaginasCaracas.n15': 'Posicionamiento SEO',
  'svcPaginasCaracas.n16': 'Top 3 en Google Caracas',
  'svcPaginasCaracas.n17': 'Velocidad de Carga',
  'svcPaginasCaracas.n18': '0.8s promedio',
  'svcPaginasCaracas.n19': 'Tasa de Conversión',
  'svcPaginasCaracas.n20': '+35% vs plantillas',
  'svcPaginasCaracas.n21': 'Por qué elegirnos',
  'svcPaginasCaracas.n22':
    'No construimos plantillas. Diseñamos plataformas digitales que impulsan tu negocio en Caracas y el mundo.',
  'svcPaginasCaracas.n23': 'Velocidad de Carga Extrema',
  'svcPaginasCaracas.n24':
    'Utilizamos Astro y Jamstack para generar sitios estáticos que cargan en milisegundos. Google prioriza páginas rápidas: mejor Core Web Vitals, mejor posicionamiento orgánico en Caracas.',
  'svcPaginasCaracas.n25': 'SEO Técnico Integrado',
  'svcPaginasCaracas.n26':
    'Cada página que diseñamos incluye datos estructurados, etiquetas Open Graph, meta descripciones optimizadas y Schema.org LocalBusiness. Aparece primero en Google cuando buscan servicios en Caracas.',
  'svcPaginasCaracas.n27': 'Seguridad y Escalabilidad',
  'svcPaginasCaracas.n28':
    'Desplegamos en Vercel con SSL automatizado, protección DDoS y servidores edge. Tu web empresarial corre sobre una arquitectura que escala automáticamente sin importar el tráfico.',
  'svcPaginasCaracas.n29': 'Stack Moderno',
  'svcPaginasCaracas.n30': 'Tecnología de última generación para tu sitio web en Caracas.',
  'svcPaginasCaracas.n31':
    'Olvídate de WordPress lento y constructores visuales que generan código basura. Construimos con Astro, Next.js y React — el mismo stack que usan las empresas tecnológicas más grandes del mundo. Tu página web cargará instantáneamente en cualquier dispositivo, incluso en conexiones 3G.',
  'svcPaginasCaracas.n32': 'check_circle',
  'svcPaginasCaracas.n33': 'Generación estática + Server-Side Rendering híbrido',
  'svcPaginasCaracas.n34': 'Imágenes optimizadas con WebP y carga lazy nativa',
  'svcPaginasCaracas.n35': 'CSS crítico inline para pintado instantáneo',
  'svcPaginasCaracas.n36': 'JavaScript mínimo y diferido (islands architecture)',
  'svcPaginasCaracas.n37': '<html lang="es">',
  'svcPaginasCaracas.n38': '<head>',
  'svcPaginasCaracas.n39': '<meta name="description" />',
  'svcPaginasCaracas.n40': '<script type="application/ld+json">',
  'svcPaginasCaracas.n41': '</head>',
  'svcPaginasCaracas.n42': '<body>',
  'svcPaginasCaracas.n43': '<header><nav /></header>',
  'svcPaginasCaracas.n44': '<main><section /></main>',
  'svcPaginasCaracas.n45': '<footer></footer>',
  'svcPaginasCaracas.n46': '</body>',
  'svcPaginasCaracas.n47': '</html>',
  'svcPaginasCaracas.n48': 'tech-stack // vortex-architecture',
  'svcPaginasCaracas.n49': 'Producción lista',
  'svcPaginasCaracas.n50': 'Framework',
  'svcPaginasCaracas.n51': 'Astro + React',
  'svcPaginasCaracas.n52': 'Estilos',
  'svcPaginasCaracas.n53': 'Hosting',
  'svcPaginasCaracas.n54': 'Vercel Edge',
  'svcPaginasCaracas.n55': 'Base de Datos',
  'svcPaginasCaracas.n56': 'Supabase / PostgreSQL',
  'svcPaginasCaracas.n57': 'responsive-design // device-preview',
  'svcPaginasCaracas.n58': 'Mobile First',
  'svcPaginasCaracas.n59': 'Diseñado Mobile First · 100% responsive en todos los dispositivos',
  'svcPaginasCaracas.n60': 'Experiencia de Usuario',
  'svcPaginasCaracas.n61': 'Diseñado para convertir. Optimizado para móviles.',
  'svcPaginasCaracas.n62':
    'El 70% de los usuarios en Caracas navegan desde el móvil. Diseñamos cada página con enfoque Mobile First, asegurando que tu sitio se vea y funcione perfectamente en cualquier pantalla. Tipografía legible, botones táctiles y navegación intuitiva para maximizar la retención y conversión.',
  'svcPaginasCaracas.n63': 'Diseño responsive probado en 20+ dispositivos',
  'svcPaginasCaracas.n64': 'Navegación intuitiva con micro-interacciones',
  'svcPaginasCaracas.n65': 'Formularios optimizados para conversión',
  'svcPaginasCaracas.n66': 'Infraestructura Empresarial',
  'svcPaginasCaracas.n67': 'tu sitio web en las mejores manos',
  'svcPaginasCaracas.n68': 'Edge Network',
  'svcPaginasCaracas.n69': 'Hosting en Vercel Edge Network',
  'svcPaginasCaracas.n70':
    'Tu página web se despliega en más de 100 servidores alrededor del mundo. Los visitantes de Caracas reciben tu sitio desde el servidor edge más cercano, garantizando cargas instantáneas sin importar la hora del día.',
  'svcPaginasCaracas.n71': 'SLA 99.99%',
  'svcPaginasCaracas.n72': 'Monitoreo y Analítica en Tiempo Real',
  'svcPaginasCaracas.n73':
    'Panel de control en vivo con métricas de tráfico, rendimiento y comportamiento de usuarios. Optimizamos continuamente tu sitio basándonos en datos reales, no en suposiciones.',
  'svcPaginasCaracas.n74': '> vercel deploy --prod',
  'svcPaginasCaracas.n75': '[VORTEX DEPLOY] Building project...',
  'svcPaginasCaracas.n76': '✔ Build completed in 12.4s',
  'svcPaginasCaracas.n77': '✔ Deployed to 100+ edge regions',
  'svcPaginasCaracas.n78': '> SSL certificate issued automatically',
  'svcPaginasCaracas.n79': '✔ HTTPS ready · A+ rating',
  'svcPaginasCaracas.n80': 'Rendimiento Global',
  'svcPaginasCaracas.n81': '0.12s latency',
  'svcPaginasCaracas.n82': 'Vercel Edge: 0.12s avg latency Caracas',
  'svcPaginasCaracas.n83': 'Preguntas Frecuentes',
  'svcPaginasCaracas.n84': '¿Cuánto tiempo toma desarrollar una página web profesional?',
  'svcPaginasCaracas.n85': 'expand_more',
  'svcPaginasCaracas.n86':
    'Dependiendo de la complejidad, un sitio web corporativo puede estar listo en 2 a 4 semanas. Esto incluye diseño UI/UX, desarrollo, integración SEO, pruebas de rendimiento y despliegue. Proyectos más complejos con paneles de administración o integraciones pueden tomar de 4 a 8 semanas.',
  'svcPaginasCaracas.n87': '¿Ofrecen hosting y mantenimiento?',
  'svcPaginasCaracas.n88':
    'Sí. Desplegamos tu sitio en Vercel (hosting enterprise con CDN global) e incluimos mantenimiento técnico mensual: actualizaciones de seguridad, monitoreo de rendimiento, backups y optimización continua. También ofrecemos planes de contenido si necesitas actualizar textos o agregar secciones periódicamente.',
  'svcPaginasCaracas.n89': '¿Puedo administrar el contenido yo mismo?',
  'svcPaginasCaracas.n90':
    'Absolutamente. Integramos paneles de administración sencillos (Headless CMS o Keystatic) para que puedas editar textos, imágenes y publicar blog posts sin necesidad de conocimientos técnicos. Tú mantienes el control total de tu contenido.',
  'svcPaginasCaracas.n91': '¿Por qué Astro y no WordPress?',
  'svcPaginasCaracas.n92':
    'WordPress genera páginas dinámicas que cargan lentamente y son vulnerables a ataques. Astro genera HTML estático ultrarrápido que se despliega en CDN. Resultado: 10x más velocidad, seguridad superior (sin base de datos expuesta), mejor SEO y menor costo de hosting. Ideal para empresas que necesitan rendimiento profesional.',
  'svcPaginasCaracas.n93': 'Inicia tu proyecto',
  'svcPaginasCaracas.n94': '¿Listo para tener la página web que tu empresa merece?',
  'svcPaginasCaracas.n95':
    'Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada con arquitectura tecnológica, diseño UX/SEO y presupuesto transparente.',
  'svcPaginasCaracas.n96': 'Nombre y Apellido',
  'svcPaginasCaracas.n97': 'Correo Corporativo',
  'svcPaginasCaracas.n98': 'Cuéntanos sobre tu proyecto',
  'svcPaginasCaracas.n99': 'Cotizar Proyecto',
  'svcPaginasCaracas.n100':
    'Mockup de navegador con métricas PageSpeed - Diseño de páginas web en Caracas',
  'svcPaginasCaracas.n101': 'e.g. Carlos Pérez',
  'svcPaginasCaracas.n102':
    '¿Qué tipo de sitio web necesitas? ¿Cuál es tu industria? ¿Tienes un plazo estimado?',

  // ── src/pages/servicios/programador-web-caracas.astro ──
  'svcProgramador.n01':
    'Programador Web en Caracas: Desarrollo Full-Stack Senior y Código de Alto Rendimiento',
  'svcProgramador.n02':
    'Desarrollador full-stack senior especializado en Astro, React, Next.js, Node.js y Supabase. Escribo código limpio, optimizado y escalable. Trabajo con agencias como marca blanca y directamente con empresas que necesitan ingeniería web de alto nivel en Caracas.',
  'svcProgramador.n03': 'Contratar Desarrollador Senior',
  'svcProgramador.n04': 'Ver stack técnico',
  'svcProgramador.n05': 'terminal',
  'svcProgramador.n06': 'vortex-dev // git:main',
  'svcProgramador.n07': 'git log --oneline',
  'svcProgramador.n08': 'main',
  'svcProgramador.n09': '$ git push origin main',
  'svcProgramador.n10': 'Enumerating objects: 42, done.',
  'svcProgramador.n11': 'Counting objects: 100% (42/42), done.',
  'svcProgramador.n12': '$ npm run test',
  'svcProgramador.n13': '[VORTEX CI/CD] Running test suite...',
  'svcProgramador.n14': '✔ 48 tests passed (2.3s)',
  'svcProgramador.n15': '✔ Coverage: 96%',
  'svcProgramador.n16': '$ npm run build',
  'svcProgramador.n17': '[1/4] Resolving dependencies...',
  'svcProgramador.n18': '[2/4] TypeScript compilation...',
  'svcProgramador.n19': '✔ No type errors found',
  'svcProgramador.n20': '✔ Build optimized · 98 Lighthouse',
  'svcProgramador.n21': 'feature/auth',
  'svcProgramador.n22': '3e8f2a1',
  'svcProgramador.n23': 'Implement JWT + RLS security layer',
  'svcProgramador.n24': 'a7c3d9e',
  'svcProgramador.n25': 'Merge pull request #42',
  'svcProgramador.n26': 'main · up-to-date · deploy ready',
  'svcProgramador.n27': 'Developer Stats',
  'svcProgramador.n28': 'Commits en producción',
  'svcProgramador.n29': 'Proyectos entregados',
  'svcProgramador.n30': '2.3s',
  'svcProgramador.n31': 'Test suite promedio',
  'svcProgramador.n32': 'Coverage',
  'svcProgramador.n33': 'Code quality',
  'svcProgramador.n34': 'A+',
  'svcProgramador.n35': 'Stack Técnico',
  'svcProgramador.n36':
    'Frontend avanzado, backend sólido y automatización con AI. Todo el stack moderno en un solo programador.',
  'svcProgramador.n37': 'Frontend Avanzado',
  'svcProgramador.n38':
    'Astro, React 19, Next.js 15, TypeScript estricto, Tailwind CSS, Framer Motion, React Query, Zustand. Arquitectura de componentes atómicos, Server Components, streaming SSR y optimización de Core Web Vitals al máximo.',
  'svcProgramador.n39': 'Islands Architecture',
  'svcProgramador.n40': 'Server Components / RSC',
  'svcProgramador.n41': 'Optimización Lighthouse 100',
  'svcProgramador.n42': 'Backend y Bases de Datos',
  'svcProgramador.n43':
    'Node.js, Supabase (PostgreSQL), API Routes en Astro/Next.js, Prisma ORM, Drizzle, Redis, WebSockets, autenticación JWT/OAuth, Row Level Security, migraciones automatizadas y Realtime subscriptions.',
  'svcProgramador.n44': 'REST + GraphQL APIs',
  'svcProgramador.n45': 'WebSockets en tiempo real',
  'svcProgramador.n46': 'Row Level Security (RLS)',
  'svcProgramador.n47': 'Automatización y AI',
  'svcProgramador.n48':
    'CI/CD con GitHub Actions, testing automatizado (Vitest, Playwright), despliegues continuos a Vercel, integración de herramientas AI (Cursor, Claude, GPT) para acelerar el desarrollo sin sacrificar calidad. Infraestructura como código.',
  'svcProgramador.n49': 'CI/CD + Deploy automatizado',
  'svcProgramador.n50': 'Testing (Vitest + Playwright)',
  'svcProgramador.n51': 'AI-assisted development',
  'svcProgramador.n52': 'Marca Blanca',
  'svcProgramador.n53': 'Agencias: amplía tu capacidad de entrega sin contratar empleados fijos.',
  'svcProgramador.n54':
    'Trabajo como desarrollador marca blanca para agencias de diseño web, marketing digital y consultorías tecnológicas en Caracas y toda Venezuela. Tú vendes el proyecto, yo construyo la solución. Todo el código se entrega bajo tu marca, con la calidad y velocidad que tus clientes esperan.',
  'svcProgramador.n55': 'check_circle',
  'svcProgramador.n56': 'Código entregado bajo tu marca y repositorio',
  'svcProgramador.n57': 'Comunicación directa sin intermediarios técnicos',
  'svcProgramador.n58': 'Escala tu capacidad según demanda sin riesgo laboral',
  'svcProgramador.n59': 'white-label-agreement',
  'svcProgramador.n60': '- Tú vendes, yo construyo',
  'svcProgramador.n61': '- Código 100% transferido',
  'svcProgramador.n62': '- Sin branding de Vortex',
  'svcProgramador.n63': '- Repositorio cliente final',
  'svcProgramador.n64': '- Soporte post-entrega',
  'svcProgramador.n65': 'white-label // agency-partner',
  'svcProgramador.n66': 'Modelo B2B',
  'svcProgramador.n67': 'Código Fuente',
  'svcProgramador.n68': '100% transferido',
  'svcProgramador.n69': 'Sin dependencias ocultas',
  'svcProgramador.n70': 'Marca',
  'svcProgramador.n71': 'Tuya al 100%',
  'svcProgramador.n72': 'Sin créditos ni logos',
  'svcProgramador.n73': 'Repositorio',
  'svcProgramador.n74': 'GitHub/GitLab tuyo',
  'svcProgramador.n75': 'Commits con tu cuenta',
  'svcProgramador.n76': 'Soporte',
  'svcProgramador.n77': 'Post-entrega',
  'svcProgramador.n78': '3 meses incluido',
  'svcProgramador.n79': 'Metodología de Trabajo',
  'svcProgramador.n80': 'Código limpio, entregas rápidas, comunicación directa',
  'svcProgramador.n81': 'Requisitos y Plan',
  'svcProgramador.n82':
    'Definimos alcance, tecnologías, timeline y entregables. Te doy una estimación precisa con desglose de horas y costo.',
  'svcProgramador.n83': 'Desarrollo Iterativo',
  'svcProgramador.n84':
    'Commits diarios, ramas por feature, PRs con code review. Ves el avance en tiempo real en tu repositorio de GitHub/GitLab.',
  'svcProgramador.n85': 'Testing y QA',
  'svcProgramador.n86':
    'Suite de tests automatizados (unitarios, integración, e2e), linting estricto y auditoría de seguridad antes de cada deploy.',
  'svcProgramador.n87': 'Entrega y Soporte',
  'svcProgramador.n88':
    'Código fuente completo, documentación técnica y 3 meses de soporte post-entrega para ajustes y estabilización.',
  'svcProgramador.n89': 'Herramientas Diarias',
  'svcProgramador.n90': 'El arsenal técnico de un programador senior',
  'svcProgramador.n91': 'code',
  'svcProgramador.n92': 'VS Code',
  'svcProgramador.n93': 'account_tree',
  'svcProgramador.n94': 'Git/GitHub',
  'svcProgramador.n95': 'play_circle',
  'svcProgramador.n96': 'Vitest',
  'svcProgramador.n97': 'deployed_code',
  'svcProgramador.n98': 'database',
  'svcProgramador.n99': 'Supabase',
  'svcProgramador.n100': 'psychology',
  'svcProgramador.n101': 'Cursor AI',
  'svcProgramador.n102': 'test_tube',
  'svcProgramador.n103': 'Playwright',
  'svcProgramador.n104': 'dns',
  'svcProgramador.n105': 'Docker',
  'svcProgramador.n106': 'webhook',
  'svcProgramador.n107': 'WebSockets',
  'svcProgramador.n108': 'frame',
  'svcProgramador.n109': 'Figma API',
  'svcProgramador.n110': 'cloud',
  'svcProgramador.n111': 'CI/CD',
  'svcProgramador.n112': 'FAQ Técnica',
  'svcProgramador.n113': 'Preguntas sobre contratación y desarrollo',
  'svcProgramador.n114': '¿Cuántos años de experiencia tienes y en qué tecnologías?',
  'svcProgramador.n115': 'expand_more',
  'svcProgramador.n116':
    'Tengo experiencia comprobable construyendo aplicaciones web profesionales con el stack moderno:',
  'svcProgramador.n117':
    'Astro, React, Next.js, TypeScript, Node.js, Supabase (PostgreSQL) y Tailwind CSS',
  'svcProgramador.n118':
    '. Domino arquitectura Jamstack, Server Components, APIs REST/GraphQL, WebSockets, autenticación JWT/OAuth, Row Level Security, CI/CD, testing automatizado y despliegues en Vercel. Cada proyecto que entrego pasa por pruebas de rendimiento, seguridad y accesibilidad antes de salir a producción.',
  'svcProgramador.n119': '¿Trabajas como marca blanca para otras agencias?',
  'svcProgramador.n120':
    'Sí, es uno de mis servicios principales. Si tienes una agencia de diseño web, marketing digital o consultoría tecnológica, puedes',
  'svcProgramador.n121': 'vender mis servicios como si fueran tuyos',
  'svcProgramador.n122':
    '. Todo el código se entrega bajo tu marca, en tu repositorio de GitHub/GitLab, sin ningún logo o referencia a Vortex. Tú mantienes la relación con el cliente final, yo me encargo de la ingeniería. Es la forma más eficiente de escalar tu capacidad de entrega sin contratar empleados fijos.',
  'svcProgramador.n123': '¿Qué metodologías y herramientas usas para programar?',
  'svcProgramador.n124': 'Uso',
  'svcProgramador.n125': 'Git Flow',
  'svcProgramador.n126': 'con ramas por feature y Pull Requests con code review. Desarrollo en',
  'svcProgramador.n127': 'VS Code + Cursor',
  'svcProgramador.n128': 'con TypeScript estricto, ESLint y Prettier. Tests automatizados con',
  'svcProgramador.n129': '(unitarios) y',
  'svcProgramador.n130': '(e2e). CI/CD con',
  'svcProgramador.n131': 'GitHub Actions',
  'svcProgramador.n132':
    'que ejecuta tests, linting y build en cada push. Despliegues automáticos a',
  'svcProgramador.n133':
    'con preview URLs por cada PR. Documentación técnica en el propio código (JSDoc) y README por proyecto.',
  'svcProgramador.n134': '¿Cómo se maneja el soporte y la entrega del código?',
  'svcProgramador.n135': 'El código se entrega completo a través de',
  'svcProgramador.n136': 'GitHub o GitLab',
  'svcProgramador.n137':
    '(en tu repositorio si trabajamos marca blanca). Incluye: historial de commits, documentación técnica, instrucciones de deploy y variables de entorno. Para el soporte post-entrega, tienes',
  'svcProgramador.n138': '3 meses incluidos',
  'svcProgramador.n139':
    'para ajustes, correcciones y preguntas técnicas. La comunicación es por Slack o WhatsApp con respuestas garantizadas en menos de 24 horas hábiles.',
  'svcProgramador.n140': '¿Manejas integraciones de APIs complejas y WebSockets?',
  'svcProgramador.n141': 'Sí. He integrado sistemas con',
  'svcProgramador.n142': 'Salesforce, HubSpot, pasarelas de pago (Stripe, PayPal, MercadoPago)',
  'svcProgramador.n143':
    ', APIs de delivery (MRW, Zoom), servicios de email (SendGrid, Resend), autenticación OAuth (Google, GitHub), y sistemas contables venezolanos. Para tiempo real implemento',
  'svcProgramador.n144': 'WebSockets con Supabase Realtime',
  'svcProgramador.n145':
    'o Socket.io, ideal para notificaciones en vivo, chats, dashboards de monitoreo y sincronización de datos multi-usuario.',
  'svcProgramador.n146': 'Contratación',
  'svcProgramador.n147': '¿Necesitas un programador senior para tu proyecto?',
  'svcProgramador.n148':
    'Cuéntame los detalles técnicos de tu proyecto y te responderé con una propuesta clara: alcance, tecnologías, timeline y presupuesto. Sin rodeos ni intermediarios — hablas directamente con el desarrollador.',
  'svcProgramador.n149': 'Nombre y Apellido',
  'svcProgramador.n150': 'Correo Corporativo',
  'svcProgramador.n151': 'Descripción técnica del proyecto',
  'svcProgramador.n152': 'Agendar Consultoría Técnica',
  'svcProgramador.n153':
    'Flujo de trabajo Git con terminal de commits y tests - Programador web senior en Caracas',
  'svcProgramador.n154': 'e.g. Carlos Pérez',
  'svcProgramador.n155':
    'Cuéntame sobre tu proyecto: tipo de aplicación, stack deseado, plazos, presupuesto estimado, integraciones necesarias...',

  // ── src/pages/servicios/desarrollo-wordpress.astro ──
  'svcWordpress.n01': 'WordPress Avanzado · Portafolio',
  'svcWordpress.n02': 'Desarrollo WordPress en Caracas: 350+ sitios web construidos desde cero',
  'svcWordpress.n03': 'Nuestra trayectoria con WordPress',
  'svcWordpress.n04':
    'Con más de 10 años trabajando con CMS, hemos podido hacer más de 350 sitios web desde cero en todos los niveles de complejidad, especializándonos en WordPress avanzado.',
  'svcWordpress.n05': 'Cotizar mi proyecto WordPress',
  'svcWordpress.n06': 'Ver los',
  'svcWordpress.n07': 'proyectos',
  'svcWordpress.n08': 'Cómo trabajamos',
  'svcWordpress.n09': 'WordPress avanzado, sin plantillas ni page builders',
  'svcWordpress.n10':
    'La diferencia entre un WordPress que se degrada en seis meses y uno que sigue siendo rápido en cinco años está en cómo se construye. Nuestro practice de CMS trabaja con bloques Gutenberg nativos, código propio y una capa de rendimiento medible en cada entrega.',
  'svcWordpress.n11': 'Portafolio',
  'svcWordpress.n12': '26 proyectos WordPress en producción, en 7 industrias',
  'svcWordpress.n13':
    'Cada dominio es un proyecto real y sigue en línea. Haz clic en cualquiera para visitarlo.',
  'svcWordpress.n14': 'Índice de industrias del portafolio',
  'svcWordpress.n15': 'WordPress',
  'svcWordpress.n16': 'FAQ',
  'svcWordpress.n17': 'Preguntas frecuentes sobre desarrollo WordPress',
  'svcWordpress.n18': 'expand_more',
  'svcWordpress.n19': 'Explora más',
  'svcWordpress.n20': 'Otros servicios y recursos relacionados',
  'svcWordpress.n21': 'Ver más',
  'svcWordpress.n22': 'Trabajemos juntos',
  'svcWordpress.n23': '¿Tienes un proyecto WordPress pendiente?',
  'svcWordpress.n24':
    'Cuéntanos qué necesitas — una web nueva, una migración o un WordPress que dejó de rendir — y recibirás una propuesta con alcance, plazos y presupuesto transparente. Sin compromiso.',
  'svcWordpress.n25': 'Nombre y Apellido',
  'svcWordpress.n26': 'Ej. Carlos Mendoza',
  'svcWordpress.n27': 'Correo Corporativo',
  'svcWordpress.n28': 'carlos@tuempresa.com',
  'svcWordpress.n29': 'Cuéntanos sobre tu proyecto WordPress',
  'svcWordpress.n30':
    '¿Es una web nueva, una migración o un rediseño? ¿Usas WooCommerce? ¿Tienes plazo o presupuesto estimado?',
  'svcWordpress.n31': 'Solicitar Propuesta WordPress',
  'svcWordpress.n32': 'Tus datos están protegidos. Sin spam, garantizado.',
  'svcWordpress.n33': 'Consulta directa por WhatsApp',
  'svcWordpress.capability.builders.description':
    'Construimos con bloques Gutenberg nativos, campos personalizados y código propio. Sin Elementor, Divi ni constructores que arrastren CSS y JavaScript innecesario.',
  'svcWordpress.capability.builders.point.0': 'Temas y child themes a medida en PHP moderno',
  'svcWordpress.capability.builders.point.1': 'Bloques y patrones Gutenberg reutilizables',
  'svcWordpress.capability.builders.point.2':
    'Campos personalizados y custom post types por sector',
  'svcWordpress.capability.builders.point.3': 'Cero dependencia de plantillas compradas',
  'svcWordpress.capability.builders.title': 'WordPress avanzado sin page builders',
  'svcWordpress.capability.performance.description':
    'Un WordPress bien construido compite con cualquier framework moderno. Optimizamos consultas, caché y assets hasta dejar la web en verde en PageSpeed.',
  'svcWordpress.capability.performance.point.0':
    'Caché de objeto, de página y limpieza de consultas',
  'svcWordpress.capability.performance.point.1': 'CSS crítico, lazy loading y conversión WebP/AVIF',
  'svcWordpress.capability.performance.point.2': 'Métricas antes y después de cada entrega',
  'svcWordpress.capability.performance.point.3': 'Monitoreo continuo de LCP, INP y CLS',
  'svcWordpress.capability.performance.title': 'Rendimiento y Core Web Vitals',
  'svcWordpress.capability.seo.description':
    'Dejas la web con una arquitectura SEO que tus editores pueden mantener sin depender de un desarrollador, y migramos desde tu plataforma actual sin perder posiciones.',
  'svcWordpress.capability.seo.point.0': 'Migraciones desde Joomla, Wix, Drupal o HTML estático',
  'svcWordpress.capability.seo.point.1': 'Redirecciones 301 y preservación de rankings',
  'svcWordpress.capability.seo.point.2': 'Schema.org, sitemap XML, hreflang y robots.txt',
  'svcWordpress.capability.seo.point.3': 'Estructura de contenidos pensada para posicionar',
  'svcWordpress.capability.seo.title': 'Contenido, SEO técnico y migraciones',
  'svcWordpress.capability.woocommerce.description':
    'E-commerce completo o WordPress como back-end de un front-end ultrarrápido, conectado a la operación real del negocio: pagos, logística, CRM y automatizaciones.',
  'svcWordpress.capability.woocommerce.point.0': 'WooCommerce: pagos, envíos, stock y variaciones',
  'svcWordpress.capability.woocommerce.point.1': 'WordPress headless consumido por Astro o Next.js',
  'svcWordpress.capability.woocommerce.point.2': 'APIs REST, webhooks y sincronización con CRM/ERP',
  'svcWordpress.capability.woocommerce.point.3': 'Multilenguaje y arquitecturas multisite',
  'svcWordpress.capability.woocommerce.title': 'WooCommerce, headless e integraciones',
  'svcWordpress.faq.builders.answer':
    'Una plantilla o un builder acelera la primera entrega, pero hipoteca todo lo que viene después: código inflado, actualizaciones que rompen el diseño y un SEO técnico difícil de controlar. Nosotros desarrollamos WordPress avanzado con bloques Gutenberg nativos y código propio, de modo que tu equipo puede editar todo el contenido desde el panel y la web sigue siendo rápida y mantenible años después.',
  'svcWordpress.faq.builders.question':
    '¿Por qué WordPress y no una plantilla comprada o un page builder?',
  'svcWordpress.faq.edicion.answer':
    'Sí, y está pensado para que sea así. Entregamos el panel de WordPress con bloques y patrones preparados para tus secciones, documentación de uso para tu equipo y una sesión de capacitación grabada. No quedas atado a nosotros para publicar contenido nuevo.',
  'svcWordpress.faq.edicion.question': '¿Puedo seguir editando el contenido yo mismo?',
  'svcWordpress.faq.migracion.answer':
    'Sí. Trabajamos con un inventario completo de URLs, mapa de redirecciones 301 y preservación de títulos, meta descripciones, encabezados y datos estructurados. Antes de publicar comparamos rendimiento y posiciones para detectar cualquier caída a tiempo. Hemos migrado proyectos desde Joomla, Wix, Drupal y sitios HTML estáticos sin degradar sus rankings.',
  'svcWordpress.faq.migracion.question':
    '¿Puedo migrar mi web actual a WordPress sin perder posicionamiento?',
  'svcWordpress.faq.movil.answer':
    'Es uno de nuestros criterios de aceptación. Optimizamos imágenes a WebP/AVIF, aplicamos lazy loading, caché de página y de objetos, y reducimos el JavaScript al mínimo necesario. Precisamente por eso llevamos más de 350 sitios web creados desde cero en todos los niveles de complejidad: sabemos qué cuello de botella aparece en cada tipo de negocio.',
  'svcWordpress.faq.movil.question': '¿El sitio funcionará bien en móviles con conexiones lentas?',
  'svcWordpress.faq.soporte.answer':
    'Todos los proyectos incluyen 3 meses de soporte post-lanzamiento. Después ofrecemos planes mensuales con actualizaciones de core, plugins y temas, copias de seguridad, monitoreo de seguridad y uptime, optimización de rendimiento y soporte prioritario por WhatsApp o Slack.',
  'svcWordpress.faq.soporte.question': '¿Ofrecen mantenimiento y soporte continuo?',
  'svcWordpress.form.error': 'Error al enviar. Intenta de nuevo o escríbenos a info@vortexlm.com.',
  'svcWordpress.form.sending': 'Enviando...',
  'svcWordpress.form.submit': 'Solicitar Propuesta WordPress',
  'svcWordpress.form.success': '¡Mensaje enviado con éxito! Te contactaremos pronto.',
  'svcWordpress.industry.automotriz.summary':
    'Compraventa y contenido especializado: stock actualizado, fichas de vehículo, financiamiento y consultas directas por WhatsApp.',
  'svcWordpress.industry.automotriz.title': 'Sector Automotriz',
  'svcWordpress.industry.corporativo.summary':
    'Consultoras y proveedores B2B que usan la web como canal comercial: casos de éxito, formularios cualificados y contenido que respalda la propuesta de valor.',
  'svcWordpress.industry.corporativo.title': 'Servicios Corporativos y Profesionales',
  'svcWordpress.industry.hogar.summary':
    'Fabricantes y distribuidores de mobiliario, cerramientos y reformas que necesitan catálogos filtrables, fichas de producto y captación de presupuestos.',
  'svcWordpress.industry.hogar.title': 'Hogar, Construcción y Decoración',
  'svcWordpress.industry.hosteleria.summary':
    'Carta digital, reservas, eventos y galerías gastronómicas con rendimiento alto en móvil: la mayoría de las visitas de hostelería llegan desde el teléfono.',
  'svcWordpress.industry.hosteleria.title': 'Restaurantes y Hostelería',
  'svcWordpress.industry.ocio.summary':
    'Operadores con reserva inmediata: entradas, excursiones, alquiler de embarcaciones y salas de juego con flujos de conversión medibles.',
  'svcWordpress.industry.ocio.title': 'Ocio, Entretenimiento y Turismo',
  'svcWordpress.industry.retail.summary':
    'E-commerce y catálogos con pasarela de pago, gestión de stock y variaciones de producto, optimizados para convertir desde la primera visita.',
  'svcWordpress.industry.retail.title': 'Comercio Minorista y Tiendas Especializadas (Retail)',
  'svcWordpress.industry.salud.summary':
    'Centros que venden confianza antes que servicios: agenda de citas, tratamientos detallados, prueba social y cumplimiento estricto de privacidad.',
  'svcWordpress.industry.salud.title': 'Salud, Bienestar y Estética',
  'svcWordpress.link.coste.description':
    'Desglose real de costes y ROI de invertir en un sitio profesional frente a una plantilla de bajo coste.',
  'svcWordpress.link.coste.label': '¿Cuánto cuesta una página web en 2026?',
  'svcWordpress.link.diseno.description':
    'Metodología completa de diseño UI/UX, wireframes y sistemas de diseño antes de pasar a desarrollo.',
  'svcWordpress.link.diseno.label': 'Diseño de páginas web en Caracas',
  'svcWordpress.link.stack.description':
    'Cuando el proyecto exige máxima velocidad o un front-end headless sobre WordPress, este es el stack que usamos.',
  'svcWordpress.link.stack.label': 'Stack moderno Astro, React y Next.js',
  'svcWordpress.link.whiteLabel.description':
    'Externaliza desarrollo frontend, WordPress y automatizaciones con tu propia marca. NDA y pago por consumo real.',
  'svcWordpress.link.whiteLabel.label': 'Servicios white label',
  'svcWordpress.meta.description':
    'Agencia de desarrollo WordPress avanzado en Caracas: más de 350 sitios web creados desde cero en 7 industrias. Portafolio de 26 proyectos en producción, sin page builders y optimizados para Core Web Vitals.',
  'svcWordpress.meta.title':
    'Desarrollo WordPress en Caracas | Portafolio de +350 Sitios Web | Agencia de Desarrollo Web y Apps en Caracas',
  'svcWordpress.sector.admiral': 'Casinos y Salas de Juego',
  'svcWordpress.sector.anagomez': 'Peluquería y Estilismo',
  'svcWordpress.sector.bilox': 'Cerramientos y Sistemas de Protección Solar',
  'svcWordpress.sector.bureau360': 'Agencia de Marketing Digital',
  'svcWordpress.sector.carsdiner': 'Restaurante Temático',
  'svcWordpress.sector.cocimara': 'Diseño de Cocinas y Hogar',
  'svcWordpress.sector.colchonight': 'Colchones y Productos de Descanso',
  'svcWordpress.sector.conforcama': 'Colchones y Productos de Descanso',
  'svcWordpress.sector.formobel': 'Mobiliario',
  'svcWordpress.sector.gescomauto': 'Compraventa de Vehículos',
  'svcWordpress.sector.globeservice': 'Servicios Integrales para Empresas',
  'svcWordpress.sector.granbahia': 'Restaurante',
  'svcWordpress.sector.hominum': 'Centro de Psicología y Desarrollo Personal',
  'svcWordpress.sector.hotelonda': 'Hotel',
  'svcWordpress.sector.infinityjump': 'Parque de Trampolines',
  'svcWordpress.sector.inspiredbycars': 'Contenido y Productos Automotrices',
  'svcWordpress.sector.invernadero': 'Restaurante y Eventos',
  'svcWordpress.sector.khora': 'Mobiliario y Decoración',
  'svcWordpress.sector.limptex': 'Servicios de Limpieza Corporativa',
  'svcWordpress.sector.mualbu': 'Mobiliario',
  'svcWordpress.sector.nautica': 'Venta y Reparación de Embarcaciones',
  'svcWordpress.sector.primecr': 'Consultoría de Negocios',
  'svcWordpress.sector.rotulos': 'Rotulación y Señalética',
  'svcWordpress.sector.sevilla': 'Mobiliario',
  'svcWordpress.sector.tabarca': 'Excursiones y Turismo Marítimo',
  'svcWordpress.sector.toldosaban': 'Toldos y Pérgolas',
  'svcWordpress.stat.cms': 'Años trabajando con CMS',
  'svcWordpress.stat.industrias': 'Industrias especializadas',
  'svcWordpress.stat.portafolio': 'Proyectos en este portafolio',
  'svcWordpress.stat.sitios': 'Sitios web desde cero',

  // ── src/pages/servicios/administrador-aplicaciones-web.astro ──
  'svcAppsAdmin.n01': 'Administrador de Aplicaciones Web',
  'svcAppsAdmin.n02':
    'Administrador de aplicaciones web: tus sistemas en producción, gestionados y monitorizados',
  'svcAppsAdmin.n03': 'Qué hace un administrador de aplicaciones web',
  'svcAppsAdmin.n04':
    'Aplicaciones web conectadas a bases de datos, pasarelas de pago y sistemas de gestión propios, puestas en producción y administradas en serio: despliegues, mantenimiento, integraciones, monitoreo y soporte con tiempos de respuesta comprometidos.',
  'svcAppsAdmin.n05': 'Quiero administración y soporte',
  'svcAppsAdmin.n06': 'Ver las',
  'svcAppsAdmin.n07': 'capacidades del servicio',
  'svcAppsAdmin.n08': 'Cómo trabajamos',
  'svcAppsAdmin.n09': 'Qué incluye la administración de tus aplicaciones web',
  'svcAppsAdmin.n10':
    'Una aplicación en producción no se mantiene sola. Cubrimos las cuatro áreas críticas de la operación —despliegue, mantenimiento, integraciones y monitoreo— para que tu equipo se dedique a lo suyo y el sistema siga funcionando como el primer día.',
  'svcAppsAdmin.n11': 'Plataformas',
  'svcAppsAdmin.n12': 'Plataformas y servicios que administramos a diario',
  'svcAppsAdmin.n13':
    'No hace falta que tu equipo conozca cada consola, cada panel de facturación o cada cuota de API. Estos son los entornos sobre los que operamos todos los días y con los que tu aplicación probablemente ya cuenta.',
  'svcAppsAdmin.n14': 'Método',
  'svcAppsAdmin.n15': 'Cómo pasamos tu aplicación a operación administrada',
  'svcAppsAdmin.n16': 'FAQ',
  'svcAppsAdmin.n17': 'Preguntas frecuentes sobre administración de aplicaciones web',
  'svcAppsAdmin.n18': 'expand_more',
  'svcAppsAdmin.n19': 'Seguir explorando',
  'svcAppsAdmin.n20': 'El resto del directorio, a un clic',
  'svcAppsAdmin.n21': 'Ver más',
  'svcAppsAdmin.n22': 'Trabajemos juntos',
  'svcAppsAdmin.n23': '¿Necesitas administrar tus aplicaciones web?',
  'svcAppsAdmin.n24':
    'Cuéntanos qué tienes en producción — una web, una tienda, un panel interno o una integración con tu CRM — y recibirás un diagnóstico y un plan de administración con alcance, plazos y presupuesto transparente. Sin compromiso.',
  'svcAppsAdmin.n25': 'Nombre y Apellido',
  'svcAppsAdmin.n26': 'Ej. Carlos Mendoza',
  'svcAppsAdmin.n27': 'Correo Corporativo',
  'svcAppsAdmin.n28': 'carlos@tuempresa.com',
  'svcAppsAdmin.n29': 'Cuéntanos qué necesitas administrar',
  'svcAppsAdmin.n30':
    '¿Qué aplicación o web quieres administrar? ¿Qué infraestructura usa hoy y con qué CRM o CMS trabaja tu equipo?',
  'svcAppsAdmin.n31': 'Solicitar plan de administración',
  'svcAppsAdmin.n32': 'Tus datos están protegidos. Sin spam, garantizado.',
  'svcAppsAdmin.n33': 'Consulta directa por WhatsApp',
  'svcAppsAdmin.capability.despliegue.description':
    'Ponemos en producción y mantenemos tu infraestructura: Vercel, Supabase, servidores gestionados, DNS, certificados y entornos de staging separados del sitio real.',
  'svcAppsAdmin.capability.despliegue.point.0': 'Vercel: despliegues, previews por rama y dominios',
  'svcAppsAdmin.capability.despliegue.point.1': 'Supabase: PostgreSQL, auth, storage y realtime',
  'svcAppsAdmin.capability.despliegue.point.2': 'DNS, SSL, CDN y servidores gestionados',
  'svcAppsAdmin.capability.despliegue.point.3': 'Control de versiones con Git y flujo de release',
  'svcAppsAdmin.capability.despliegue.title': 'Gestión y despliegue de arquitecturas web',
  'svcAppsAdmin.capability.integraciones.description':
    'Conectamos tu web con las herramientas que ya usa tu equipo —CRM, CMS, pagos, ERP— y eliminamos el trabajo manual que nadie quiere seguir haciendo.',
  'svcAppsAdmin.capability.integraciones.point.0':
    'CRM: HubSpot, Zoho, Salesforce y desarrollos a medida',
  'svcAppsAdmin.capability.integraciones.point.1': 'CMS: WordPress, Shopify y paneles propios',
  'svcAppsAdmin.capability.integraciones.point.2': 'APIs REST, webhooks y sincronización de datos',
  'svcAppsAdmin.capability.integraciones.point.3':
    'Automatizaciones y flujos internos sin intervención',
  'svcAppsAdmin.capability.integraciones.title': 'Integración de CRM, CMS y sistemas a medida',
  'svcAppsAdmin.capability.mantenimiento.description':
    'Actualizaciones de núcleo, dependencias y plugins con pruebas previas, copias de seguridad verificadas y ventanas de mantenimiento acordadas contigo.',
  'svcAppsAdmin.capability.mantenimiento.point.0': 'Backups automáticos y prueba de restauración',
  'svcAppsAdmin.capability.mantenimiento.point.1':
    'Actualizaciones de WordPress, npm y dependencias',
  'svcAppsAdmin.capability.mantenimiento.point.2': 'Entornos de staging para validar cada cambio',
  'svcAppsAdmin.capability.mantenimiento.point.3':
    'Informe mensual con cambios y estado del sistema',
  'svcAppsAdmin.capability.mantenimiento.title': 'Mantenimiento preventivo y continuo',
  'svcAppsAdmin.capability.monitoreo.description':
    'Vigilamos disponibilidad, rendimiento y seguridad, y resolvemos incidencias con un canal directo y tiempos de respuesta comprometidos por contrato.',
  'svcAppsAdmin.capability.monitoreo.point.0': 'Monitoreo de uptime, LCP, INP y CLS',
  'svcAppsAdmin.capability.monitoreo.point.1': 'Gestión de accesos, roles y permisos mínimos',
  'svcAppsAdmin.capability.monitoreo.point.2': 'Revisión de dependencias y buenas prácticas',
  'svcAppsAdmin.capability.monitoreo.point.3': 'Soporte prioritario por WhatsApp o Slack',
  'svcAppsAdmin.capability.monitoreo.title': 'Monitoreo, seguridad e incidencias',
  'svcAppsAdmin.faq.alcance.answer':
    'Incluye la gestión de la infraestructura y de los servicios que tu aplicación necesita: despliegues, dominios, DNS, certificados, copias de seguridad, actualizaciones, monitoreo de disponibilidad y rendimiento, revisiones de seguridad y resolución de incidencias. No hace falta que tengas un departamento técnico propio: nosotros actuamos como tu equipo de operaciones.',
  'svcAppsAdmin.faq.alcance.question':
    '¿Qué incluye exactamente la administración de mis aplicaciones web?',
  'svcAppsAdmin.faq.hecho-por-otra-agencia.answer':
    'Sí. Trabajamos sobre aplicaciones en Astro, React, Next.js, WordPress, Shopify y backends propios, desarrolladas por cualquier equipo. Empezamos con un diagnóstico técnico y un traspaso de accesos ordenado, y documentamos todo lo que encontramos para que no dependas de nosotros para entender tu propio sistema.',
  'svcAppsAdmin.faq.hecho-por-otra-agencia.question':
    '¿Pueden administrar una aplicación que no desarrolló VortexLM?',
  'svcAppsAdmin.faq.incidencias.answer':
    'Los planes de operación continua incluyen monitoreo 24/7 con alertas automáticas. Si el sistema detecta una caída, recibimos el aviso y actuamos sin esperar a que lo notes. Los incidentes críticos tienen un tiempo de primera respuesta comprometido por contrato y un canal directo por WhatsApp o Slack.',
  'svcAppsAdmin.faq.incidencias.question': '¿Qué pasa si mi aplicación se cae un fin de semana?',
  'svcAppsAdmin.faq.migracion-infraestructura.answer':
    'Sí. Trabajamos con despliegues en staging, verificación de datos y ventanas de mantenimiento acordadas contigo. Hemos movido proyectos entre proveedores de hosting, de base de datos y de correo manteniendo el sitio en línea, redirecciones 301 en su sitio y sin perder posicionamiento ni datos de negocio.',
  'svcAppsAdmin.faq.migracion-infraestructura.question':
    '¿Pueden migrar mi aplicación a otra infraestructura sin tiempo de caída?',
  'svcAppsAdmin.faq.precios.answer':
    'Con una cuota mensual fija según la complejidad de la aplicación, el número de integraciones y el nivel de soporte que necesites. Las mejoras evolutivas y los proyectos nuevos se cotizan aparte con alcance y plazos claros. Sin costes ocultos ni horas sorpresa al final del mes.',
  'svcAppsAdmin.faq.precios.question': '¿Cómo se cobra la administración mensual?',
  'svcAppsAdmin.form.error': 'Error al enviar. Intenta de nuevo o escríbenos a info@vortexlm.com.',
  'svcAppsAdmin.form.sending': 'Enviando...',
  'svcAppsAdmin.form.submit': 'Solicitar plan de administración',
  'svcAppsAdmin.form.success': '¡Mensaje enviado con éxito! Te contactaremos pronto.',
  'svcAppsAdmin.link.cms.description':
    'El perfil de CMS: sitios y tiendas que después actualizamos, respaldamos y monitorizamos.',
  'svcAppsAdmin.link.cms.label': 'Desarrollo WordPress avanzado',
  'svcAppsAdmin.link.directorio.description':
    'Compara los cuatro perfiles técnicos del directorio y combina los que necesite tu proyecto.',
  'svcAppsAdmin.link.directorio.label': 'Directorio de servicios y perfiles técnicos',
  'svcAppsAdmin.link.fullstack.description':
    'Cuando la operación detecta deuda técnica, el mismo equipo puede rehacer la arquitectura.',
  'svcAppsAdmin.link.fullstack.label': 'Desarrollador full-stack senior',
  'svcAppsAdmin.link.sistemas.description':
    'Paneles internos y software de gestión a los que damos soporte y mantenemos conectados.',
  'svcAppsAdmin.link.sistemas.label': 'Sistemas de gestión a medida',
  'svcAppsAdmin.meta.description':
    'Administración de aplicaciones web en Caracas: despliegue en Vercel y Supabase, mantenimiento preventivo, integración de CRM y CMS, monitoreo de rendimiento y soporte con tiempos de respuesta comprometidos.',
  'svcAppsAdmin.meta.title':
    'Administrador de Aplicaciones Web en Caracas | Despliegue, Mantenimiento y Soporte | Agencia de Desarrollo Web y Apps en Caracas',
  'svcAppsAdmin.platform.cloudflare.name': 'Cloudflare',
  'svcAppsAdmin.platform.cloudflare.note': 'DNS, CDN, caché y protección perimetral',
  'svcAppsAdmin.platform.docker.name': 'Docker y servidores gestionados',
  'svcAppsAdmin.platform.docker.note': 'Contenedores, despliegues y respaldos',
  'svcAppsAdmin.platform.github.name': 'GitHub',
  'svcAppsAdmin.platform.github.note': 'Repositorios, revisiones de código y releases',
  'svcAppsAdmin.platform.n8n.name': 'n8n y automatizaciones',
  'svcAppsAdmin.platform.n8n.note': 'Flujos de trabajo, webhooks y tareas programadas',
  'svcAppsAdmin.platform.shopify.name': 'Shopify',
  'svcAppsAdmin.platform.shopify.note': 'Tiendas, apps y sincronización con tu operación',
  'svcAppsAdmin.platform.supabase.name': 'Supabase',
  'svcAppsAdmin.platform.supabase.note': 'PostgreSQL, autenticación, storage y realtime',
  'svcAppsAdmin.platform.vercel.name': 'Vercel',
  'svcAppsAdmin.platform.vercel.note': 'Hosting y despliegues con previews por rama',
  'svcAppsAdmin.platform.wordpress.name': 'WordPress',
  'svcAppsAdmin.platform.wordpress.note': 'Núcleo, plugins, temas y seguridad del panel',
  'svcAppsAdmin.stat.plataformas': 'Plataformas y servicios gestionados',
  'svcAppsAdmin.stat.proyectos': 'Sitios web y tiendas construidos desde cero',
  'svcAppsAdmin.stat.respuesta': 'Primera respuesta ante incidencias',
  'svcAppsAdmin.stat.uptime': 'Uptime objetivo en producción',
  'svcAppsAdmin.step.diagnostico.description':
    'Auditamos accesos, infraestructura y riesgos, y firmamos el acuerdo de niveles de servicio antes de tocar nada.',
  'svcAppsAdmin.step.diagnostico.name': 'Diagnóstico y traspaso',
  'svcAppsAdmin.step.evolucion.description':
    'Cada mes revisamos rendimiento y backlog contigo y planificamos las mejoras que más impacto tienen en tu operación.',
  'svcAppsAdmin.step.evolucion.name': 'Optimización y evolución',
  'svcAppsAdmin.step.operacion.description':
    'Backups verificados, actualizaciones controladas, revisiones de seguridad y resoluciones dentro del tiempo acordado.',
  'svcAppsAdmin.step.operacion.name': 'Operación continua',
  'svcAppsAdmin.step.puesta-en-produccion.description':
    'Montamos staging, automatizamos despliegues y dejamos el sistema monitorizado con alertas desde el primer día.',
  'svcAppsAdmin.step.puesta-en-produccion.name': 'Puesta en producción',

  // ── src/components/ui/ServicesDirectory.astro ──
  'svcDirectory.aria': 'Directorio de servicios y perfiles técnicos',
  'svcDirectory.badge': 'Directorio de servicios',
  'svcDirectory.card.apps.description':
    'Gestión, despliegue y soporte de tus aplicaciones en producción: Vercel, Supabase, servidores, CRM y CMS, con monitoreo y resolución de incidencias.',
  'svcDirectory.card.apps.point.0': 'Despliegues, backups y control de versiones',
  'svcDirectory.card.apps.point.1': 'Integración y soporte de CRM y CMS',
  'svcDirectory.card.apps.point.2': 'Monitoreo, seguridad y tiempos de respuesta',
  'svcDirectory.card.apps.role': 'Administrador de Aplicaciones',
  'svcDirectory.card.apps.title': 'Administrador de Aplicaciones Web',
  'svcDirectory.card.cms.description':
    'WordPress, Shopify y CMS a medida sin page builders: contenido que tu equipo edita sin depender de un desarrollador y un rendimiento que no se degrada.',
  'svcDirectory.card.cms.point.0': 'Bloques Gutenberg nativos y child themes',
  'svcDirectory.card.cms.point.1': 'WooCommerce, headless y arquitecturas multisite',
  'svcDirectory.card.cms.point.2': 'Migraciones sin perder posicionamiento',
  'svcDirectory.card.cms.role': 'Desarrollador CMS',
  'svcDirectory.card.cms.title': 'Desarrollador CMS',
  'svcDirectory.card.fullstack.description':
    'Ingeniería de producto de punta a punta: arquitectura, front-end, back-end, base de datos y despliegue con Astro, React, Next.js, Node.js y Supabase.',
  'svcDirectory.card.fullstack.point.0': 'Astro, React, Next.js y TypeScript',
  'svcDirectory.card.fullstack.point.1': 'APIs REST y GraphQL, webhooks y WebSockets',
  'svcDirectory.card.fullstack.point.2': 'Autenticación, Row Level Security y CI/CD en Vercel',
  'svcDirectory.card.fullstack.role': 'Desarrollador Full-Stack',
  'svcDirectory.card.fullstack.title': 'Desarrollador Full-Stack',
  'svcDirectory.card.sistemas.description':
    'Software de gestión, paneles internos y flujos automatizados que conectan tu operación real con el resto de las plataformas de tu empresa.',
  'svcDirectory.card.sistemas.point.0': 'Inventario, facturación y CRM a medida',
  'svcDirectory.card.sistemas.point.1': 'Integraciones ETL, APIs y webhooks',
  'svcDirectory.card.sistemas.point.2': 'Dashboards y reportería operativa',
  'svcDirectory.card.sistemas.role': 'Sistemas a medida',
  'svcDirectory.card.sistemas.title': 'Sistemas y automatizaciones a medida',
  'svcDirectory.cta': 'Ver servicio',
  'svcDirectory.footnote': '¿No sabes qué perfil encaja con tu proyecto?',
  'svcDirectory.footnoteCta': 'Cuéntanos el caso y te recomendamos el equipo adecuado',
  'svcDirectory.subtitle':
    'Cada tarjeta abre la ficha completa del servicio: alcance, metodología, entregables y tiempos de respuesta. Puedes combinar varios perfiles en un mismo proyecto.',
  'svcDirectory.title': 'Elige el perfil técnico que necesita tu proyecto',
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
  'nav.apps': 'Apps and Support',
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
  'footer.link.appsAdmin': 'Web Application Administration',

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

  // ── Services · Hero (ServicesHero.astro) ──────────────────────────────────
  'servicesHero.badge': 'Services Directory',
  'servicesHero.aria': 'Hero — Services directory and technical profiles',
  'servicesHero.title': 'Development services',
  'servicesHero.titleAlt': 'white label for your agency',
  'servicesHero.subtitle':
    'Four technical profiles, one engineering standard: full-stack development, CMS engineering, web application administration and custom systems. All the development you need, under your brand.',

  // ── Pricing · Hero (PricingHero.astro) ────────────────────────────────────
  'pricingHero.badge': 'PRICING',
  'pricingHero.aria': 'vCredits pricing plans',
  'pricingHero.titleLead': 'Flexible',
  'pricingHero.titleTail': 'plans for your agency',
  'pricingHero.subtitle':
    'Pay only for the development you consume. No fixed contracts, no monthly commitments. Volume discounts from 500 credits.',
  'pricingHero.currency': '1 vCredit = $1.05 USD, or the day’s exchange rate in euros',

  // ── B2B · Hero (B2BHero.astro) ────────────────────────────────────────────
  'b2bHero.badge': 'White Label Technology Partner',
  'b2bHero.aria':
    'Main hero — Outsource frontend and WordPress development',
  'b2bHero.title': 'Outsource development',
  'b2bHero.titleLine2': 'frontend and WordPress',
  'b2bHero.titleLine3': 'under your own brand',
  'b2bHero.subLead':
    'No fixed contracts or monthly commitments. Our ',
  'b2bHero.subTail':
    ' model lets you buy development hours in blocks and consume them on demand. You bring the brief, we deliver production-ready code under your brand — 100% white label, 100% professional.',
  'b2bHero.ctaDemo': 'Request a Demo',
  'b2bHero.ctaHow': 'See how it works',
  'b2bHero.proof': 'Used by digital agencies in Spain and the United States',
  // ── White Label · Concept (WhiteLabelConcept.astro) ───────────────────────
  'whiteLabel.badge': 'WHITE LABEL',
  'whiteLabel.aria': 'White Label — 100% invisible, 100% your brand',
  'whiteLabel.titleLead': '100% invisible.',
  'whiteLabel.titleAlt': '100% your brand.',
  'whiteLabel.subtitle':
    'We work in the background so your agency looks like the author in front of your clients.',
  'whiteLabel.p1.title': 'Total White Label',
  'whiteLabel.p1.desc':
    'Every deliverable, communication and result is presented as if it came from your agency.',
  'whiteLabel.p1.note': 'No mentions of VortexLM.',
  'whiteLabel.p2.title': 'NDA and Confidentiality',
  'whiteLabel.p2.desc':
    'We sign confidentiality agreements that protect your relationship with your clients.',
  'whiteLabel.p2.note': 'Your client roster is sacred.',
  'whiteLabel.p3.title': 'No Intermediation',
  'whiteLabel.p3.descLead':
    'We never contact your clients or present ourselves as a vendor. The commercial relationship is always between',
  'whiteLabel.p3.descTail': 'your agency and your client.',
  'whiteLabel.seal.text': 'NDA',
  'whiteLabel.seal.label': 'Confidentiality Agreement',
  'whiteLabel.seal.lead': 'Confidentiality Agreement included in',
  'whiteLabel.seal.strong': 'every project',
  'whiteLabel.seal.note': 'We protect your relationship with your clients',

  // ── B2B · Explore more (B2BExpandLinks.astro) ─────────────────────────────
  'expand.badge': 'Explore more',
  'expand.aria': 'Explore more about VortexLM',
  'expand.title': 'Everything you need to know',
  'expand.subLead': 'Discover how our',
  'expand.subTail':
    ' model works, explore our services and pick the ideal plan for your agency.',
  'expand.card1.title': 'How does it work?',
  'expand.card1.descLead': 'See the full process: from buying',
  'expand.card1.descTail': 'to the delivery of your project.',
  'expand.card2.title': 'Services',
  'expand.card2.desc':
    'Frontend, WordPress, APIs and more. All the development your agency needs, under your brand.',
  'expand.card3.title': 'Pricing',
  'expand.card3.descLead': 'Flexible',
  'expand.card3.descTail':
    'plans sized to your agency’s volume. No surprises, no hidden costs.',
  'expand.ctaMore': 'See more',
  'expand.footnote': 'No commitments. Explore at your own pace.',

  // ── B2B · Benefits (B2BBenefits.astro) ────────────────────────────────────
  'b2bBenefits.badge': 'B2B Advantages',
  'b2bBenefits.aria':
    'Corporate B2B advantages — Billing, VAT and international payments',
  'b2bBenefits.title': 'Corporate infrastructure for your agency',
  'b2bBenefits.subtitle':
    'Official invoicing, VAT exemption and international payment flexibility.',
  'b2bBenefits.c1.title': 'Corporate Billing',
  'b2bBenefits.c1.desc':
    'We issue official invoices from Vortex Logic LLC, registered in the US. Full tax compliance for your agency.',
  'b2bBenefits.c2.title': 'VAT Exemption',
  'b2bBenefits.c2.desc':
    '0% VAT for agencies in Spain under the European reverse charge mechanism. No withholdings, no extra costs.',
  'b2bBenefits.c3.title': 'International Payments',
  'b2bBenefits.c3.desc':
    'Credit cards, direct bank transfers (ACH in the US, SEPA in Europe) and crypto/digital gateways such as Binance Pay.',
  'b2bBenefits.bonus.badge': 'Welcome Bonus',
  'b2bBenefits.bonus.title': '10 free vCredits for your agency',
  'b2bBenefits.bonus.desc':
    'The bonus is activated by requesting it directly through our company WhatsApp chat.',
  'b2bBenefits.bonus.cta': 'Activate 10 free vCredits',

  // ── src/components/ui/TechGrid.astro ──
  'techGrid.n01': 'Capabilities',
  'techGrid.n02': 'Technologies we work with',
  'techGrid.n03': 'Modern stack, extreme performance and clean code.',
  'techGrid.n04': 'No heavy builders, no shortcuts.',
  'techGrid.n05': 'High-Performance Frontend Engineering',
  'techGrid.n06':
    'We build modern interfaces with Astro, React, Next.js and Tailwind CSS. Native optimization to reach 100/100 on Google PageSpeed, perfect Core Web Vitals and a flawless user experience.',
  'techGrid.n07': 'SSR / SSG / ISR as needed',
  'techGrid.n08': 'Native lazy loading',
  'techGrid.n09': 'Automatic optimized images',
  'techGrid.n10': 'Built-in technical SEO',
  'techGrid.n11': 'Corporate WordPress without Bloat',
  'techGrid.n12':
    'Clean custom development through native blocks or custom code. We strictly exclude heavy builders (Elementor, Divi, WPBakery) to guarantee atomic speed, clean SEO and easy maintenance.',
  'techGrid.n13': 'Native Gutenberg blocks',
  'techGrid.n14': 'No page builders',
  'techGrid.n15': 'Headless WooCommerce',
  'techGrid.n16': '95+ PageSpeed performance',
  'techGrid.n17': 'Automations and Data Integration',
  'techGrid.n18':
    'Advanced Webhooks, custom APIs, automated business flows, payment gateways and efficient database handling. We turn manual processes into automated pipelines.',
  'techGrid.n19': 'RESTful and GraphQL APIs',
  'techGrid.n20': 'Real-time webhooks',
  'techGrid.n21': 'Payment gateways (Stripe, PayPal)',
  'techGrid.n22': 'Efficient ETL and scraping',
  'techGrid.n23': 'Capabilities — Technologies we work with',

  // ── src/components/ui/PriceCards.astro ──
  'priceCards.n01': 'PACKAGES',
  'priceCards.n02': 'Choose the number of',
  'priceCards.n03': 'Buy credits and use them whenever you need. The balance never expires.',
  'priceCards.n04': '$1.05/credit',
  'priceCards.n05': 'Ideal for one-off tasks or quick landing pages.',
  'priceCards.n06': 'Recommended',
  'priceCards.n07': '$0.9975/credit',
  'priceCards.n08': '5% discount',
  'priceCards.n09': 'The favourite of growing agencies. Real savings.',
  'priceCards.n10': '$0.945/credit',
  'priceCards.n11': '10% discount',
  'priceCards.n12': 'For agencies with a high volume of projects.',
  'priceCards.n13': 'vCredits packages — Starter, Growth and Scale',

  // ── src/components/ui/MultipliersTable.astro ──
  'multipliers.n01': 'HOURLY RATES',
  'multipliers.n02': 'Consumption',
  'multipliers.n03': 'multipliers',
  'multipliers.n04': 'Every service has an hourly cost in vCredits. That transparent.',
  'multipliers.n05': 'Service',
  'multipliers.n06': 'vCredits/h',
  'multipliers.n07': 'Final price/h',
  'multipliers.n08': 'Advanced Development',
  'multipliers.n09': '(Astro, React, Next.js, APIs)',
  'multipliers.n10': '15 vCredits',
  'multipliers.n11': 'Support & WPO',
  'multipliers.n12': '(WordPress, WooCommerce)',
  'multipliers.n13': '12 vCredits',
  'multipliers.n14': 'Advanced Analytics and Infrastructure',
  'multipliers.n15': '(GA4, GTM)',
  'multipliers.n16': 'Campaign Management',
  'multipliers.n17': '(Google/Meta Ads)',
  'multipliers.n18': 'and Landing Design',
  'multipliers.n19': '10 vCredits',
  'multipliers.n20': 'Short Video Editing for Ads',
  'multipliers.n21': '(Reels/TikTok)',
  'multipliers.n22': '8 vCredits',
  'multipliers.n23': 'Creative and Static Banner Design',
  'multipliers.n24': '6 vCredits',
  'multipliers.n25': 'vCredits are deducted by actual development minute. No rounding.',
  'multipliers.n26': 'Hourly rates — Consumption multipliers',

  // ── src/components/ui/PricingFAQ.astro ──
  'pricingFaq.n01': 'Pricing FAQ',
  'pricingFaq.n02': 'Everything you need to know about our vCredits and billing system.',
  'pricingFaq.n03': 'What exactly are vCredits?',
  'pricingFaq.n04':
    'vCredits are our internal exchange currency. 1 vCredit equals $1.00 USD net of development. When you buy, you pay $1.05 USD per credit to transparently cover the international Stripe fee, guaranteeing that your balance delivers 100% on your tasks.',
  'pricingFaq.n05': 'Do vCredits expire?',
  'pricingFaq.n06':
    'No. vCredits never expire. You can buy them and use them whenever you need, with no pressure to spend them within a deadline. Ideal for agencies with variable demand.',
  'pricingFaq.n07': 'How is it invoiced? Is VAT applied?',
  'pricingFaq.n08':
    'We issue official invoices from Vortex Logic LLC, registered in the US. For agencies in Spain, we apply 0% VAT under the European reverse charge mechanism. Ask us if you need more tax details.',
  'pricingFaq.n09': 'Can I combine payment methods?',
  'pricingFaq.n10':
    'Yes. We accept credit cards, direct bank transfers (ACH in the US and SEPA in Europe) and crypto/digital gateways such as Binance Pay. You can use whichever method best fits your cash flow.',
  'pricingFaq.n11': 'What if I don\'t use all the vCredits in the pack?',
  'pricingFaq.n12':
    'The remaining balance stays in your account until you decide to use it. There are no penalties for not spending it. And if you need more credits, you can top up at any time with the pack you prefer.',
  'pricingFaq.n13': 'Does the 10 vCredits welcome bonus have any conditions?',
  'pricingFaq.n14':
    'You only need to book a short activation call with our team so we can learn about your needs and confirm we are the right partner for your agency. Once activated, the 10 vCredits are available to test any service with no commitment.',
  'pricingFaq.n15': 'Pricing FAQ — vCredits and billing',

  // ── src/components/ui/VCreditsExplanation.astro ──
  'vCreditsExpl.n01': 'THE MODEL',
  'vCreditsExpl.n02': 'What is a',
  'vCreditsExpl.n03': 'vCredit',
  'vCreditsExpl.n04':
    'A transparent unit of measure that equates specialised development time with predictable investment.',
  'vCreditsExpl.n05': '1 hour of',
  'vCreditsExpl.n06': 'specialised development',
  'vCreditsExpl.n07': 'Frontend',
  'vCreditsExpl.n08': 'APIs',
  'vCreditsExpl.n09': 'Revisions',
  'vCreditsExpl.n10':
    'Each vCredit represents one hour of work from our multidisciplinary team. No markup, no surprises. What you see is what you pay.',
  'vCreditsExpl.n11': 'No fixed contracts',
  'vCreditsExpl.n12':
    'There are no monthly retainers or lock-ins. Buy vCredits whenever you want and use them at your own pace. You control the spend.',
  'vCreditsExpl.n13': 'Balance with no expiry',
  'vCreditsExpl.n14':
    'Your vCredits never expire. Build up balance and use it when the need arises. Ideal for agencies handling variable workloads.',
  'vCreditsExpl.n15': 'Real-time consumption',
  'vCreditsExpl.n16':
    'Every hour of work is deducted from your balance instantly. Get notifications and keep full control from your dashboard.',
  'vCreditsExpl.n17': 'Total transparency. No markup. No surprises.',
  'vCreditsExpl.n18': 'What is a vCredit — A transparent unit of measure',

  // ── src/components/ui/ClientDashboardPreview.astro ──
  'dashPreview.n01': 'THE PORTAL',
  'dashPreview.n02': 'Your Client',
  'dashPreview.n03': 'Dashboard',
  'dashPreview.n04':
    'Manage projects, review consumption and control services from a single place.',
  'dashPreview.n05': 'In real time.',
  'dashPreview.n06': 'VortexLM Dashboard',
  'dashPreview.n07': 'My Portal',
  'dashPreview.n08': 'Dashboard',
  'dashPreview.n09': 'Projects',
  'dashPreview.n10': 'Billing',
  'dashPreview.n11': 'Settings',
  'dashPreview.n12': 'Vortex Agency',
  'dashPreview.n13': 'Pro Plan',
  'dashPreview.n14': 'Welcome back',
  'dashPreview.n15': 'Here is your activity summary',
  'dashPreview.n16': 'vCredits available',
  'dashPreview.n17': 'Task Assignment',
  'dashPreview.n18': '4 active',
  'dashPreview.n19': 'Landing page redesign — Client A',
  'dashPreview.n20': 'In progress',
  'dashPreview.n21': 'due in 3d',
  'dashPreview.n22': 'Payment gateway API integration',
  'dashPreview.n23': 'Pending',
  'dashPreview.n24': 'due in 7d',
  'dashPreview.n25': 'Blog SEO optimization',
  'dashPreview.n26': 'Completed',
  'dashPreview.n27': 'delivered',
  'dashPreview.n28': 'WordPress migration — Client B',
  'dashPreview.n29': 'due in 5d',
  'dashPreview.n30': 'Consumption History',
  'dashPreview.n31': 'last 30 days',
  'dashPreview.n32': 'Date',
  'dashPreview.n33': 'Project',
  'dashPreview.n34': 'Hours',
  'dashPreview.n35': '15 May',
  'dashPreview.n36': 'Client A Redesign',
  'dashPreview.n37': '12 May',
  'dashPreview.n38': 'Payment Gateway API',
  'dashPreview.n39': '10 May',
  'dashPreview.n40': 'SEO Blog',
  'dashPreview.n41': '8 May',
  'dashPreview.n42': 'WP Migration B',
  'dashPreview.n43': 'View full history',
  'dashPreview.n44': 'Real-Time Toggles',
  'dashPreview.n45': 'Live',
  'dashPreview.n46': 'Frontend Development',
  'dashPreview.n47': 'React, Astro, Tailwind',
  'dashPreview.n48': 'Maintenance and support',
  'dashPreview.n49': 'APIs and Automation',
  'dashPreview.n50': 'Custom integrations',
  'dashPreview.n51': 'Your Client Dashboard — Real-time management portal',
  'dashPreview.n52': 'Dashboard navigation',

  // ── src/components/ui/TransparencyTracking.astro ──
  'transparency.n01': 'Transparency',
  'transparency.n02': 'Total',
  'transparency.n03': 'Every minute of development is logged and visible.',
  'transparency.n04': 'No surprises on your invoice.',
  'transparency.n05': 'Real Time',
  'transparency.n06':
    'Each task logs the exact development time. Check live progress from your dashboard.',
  'transparency.n07': 'Current progress',
  'transparency.n08': '2.4h / 5h estimated',
  'transparency.n09': 'Started',
  'transparency.n10': 'Completed',
  'transparency.n11': 'Active tracking',
  'transparency.n12': 'Task Breakdown',
  'transparency.n13':
    'See the cost of each individual task: hours invested, vCredits consumed and assigned developer.',
  'transparency.n14': 'Task',
  'transparency.n15': 'Hours',
  'transparency.n16': 'Responsive header',
  'transparency.n17': '3.2h',
  'transparency.n18': 'API integration',
  'transparency.n19': '5.8h',
  'transparency.n20': 'SEO optimization',
  'transparency.n21': '2.1h',
  'transparency.n22': '11.1h',
  'transparency.n23': 'Automatic Notifications',
  'transparency.n24':
    'Get alerts when a project hits a milestone or when the vCredits balance is about to run out.',
  'transparency.n25': 'Milestone completed',
  'transparency.n26': 'Dashboard — Phase 1 finished',
  'transparency.n27': '2 min ago',
  'transparency.n28': 'Low balance',
  'transparency.n29': '12 vCredits remaining',
  'transparency.n30': '15 min ago',
  'transparency.n31': 'New task assigned',
  'transparency.n32': '"Responsive footer" — Frontend',
  'transparency.n33': '1 h ago',
  'transparency.n34': 'Full control. No uncertainty. Measurable results.',
  'transparency.n35': 'Total Transparency — Per-task tracking system',

  // ── src/components/ui/B2BPainPoints.astro ──
  'b2bPain.n01': 'Pain vs Solution',
  'b2bPain.n02': 'The problem with hiring developers',
  'b2bPain.n03': 'vs. outsourcing with VortexLM',
  'b2bPain.n04': 'We compare the traditional hiring model with our system of',
  'b2bPain.n05': 'so you can see exactly what changes.',
  'b2bPain.n06': 'The traditional model',
  'b2bPain.n07': 'High fixed costs',
  'b2bPain.n08':
    'Hiring full-time developers means salaries, benefits, tools, insurance and workspace. A high fixed monthly cost, even when there is no workload.',
  'b2bPain.n09': 'Capacity bottlenecks',
  'b2bPain.n10':
    'Your in-house team has limited capacity. When big projects or tight deadlines arrive, you cannot scale fast. Hiring more staff takes months.',
  'b2bPain.n11': 'No quality control or white label',
  'b2bPain.n12':
    'Outsourcing to traditional agencies means losing brand identity. The code arrives without standards, without documentation, and the end client knows it was not built by your team.',
  'b2bPain.n13': 'With VortexLM',
  'b2bPain.n14': 'Pay for real consumption',
  'b2bPain.n15': 'You only pay for the',
  'b2bPain.n16':
    'you consume. No monthly retainer, no commitment. Buy blocks of hours and use them when you need them. Financial control is in your hands.',
  'b2bPain.n17': 'Immediate scalability',
  'b2bPain.n18':
    'Assign tasks from your dashboard and our team executes them. Need 3 developers for an urgent project? Ready in 24 hours. Lowering the load? Simply consume fewer vCredits.',
  'b2bPain.n19': 'Deliveries under your brand',
  'b2bPain.n20':
    '100% white label. All the code is delivered under your brand, with no references to VortexLM. We include NDAs, automated quality control and complete documentation. Your end client will never know you outsourced.',
  'b2bPain.n21': 'No risks. No commitments. Just results.',
  'b2bPain.n22': 'Pain vs Solution — Why outsource with VortexLM',

  // ── src/components/ui/B2BModel.astro ──
  'b2bModel.n01': 'The Vortex Model',
  'b2bModel.n02': 'How',
  'b2bModel.n03': 'Three simple steps to outsource web development with total flexibility.',
  'b2bModel.n04': 'No contracts, no monthly commitments.',
  'b2bModel.n05': 'Step 1',
  'b2bModel.n06': 'Step 2',
  'b2bModel.n07': 'Step 3',
  'b2bModel.n08': 'Buying vCredits',
  'b2bModel.n09': 'Buy packages of',
  'b2bModel.n10': 'with no fixed contracts. Choose the volume that best fits your monthly demand.',
  'b2bModel.n11': 'Task assignment',
  'b2bModel.n12':
    'Publish your projects on the dashboard. Describe the scope, priority and technologies (',
  'b2bModel.n13': 'Frontend, WordPress, APIs',
  'b2bModel.n14': 'Real-time consumption',
  'b2bModel.n15':
    'We activate your dedicated team. Every development hour is deducted from your balance of',
  'b2bModel.n16': 'in real time.',
  'b2bModel.n17': 'Buy. Assign. Scale. No friction.',
  'b2bModel.n18': 'The Vortex Model — How vCredits work',
  'b2bModel.n02b': 'vCredits work',

  // ── src/components/ui/ContactForm.astro ──
  'contactForm.n01': 'Full Name',
  'contactForm.n02': 'Corporate Email',
  'contactForm.n03': 'Service of Interest',
  'contactForm.n04': 'Select a service',
  'contactForm.n05': 'Web Design and Development',
  'contactForm.n06': 'Mobile App Development',
  'contactForm.n07': 'Custom Software',
  'contactForm.n08': 'Your data is protected. No spam, guaranteed.',
  'contactForm.n09': 'E.g. John Carter',

  // ── src/pages/servicios.astro ──
  'svcIndex.n01': 'Frequently asked questions',
  'svcIndex.n02': 'We answer all your questions about our development services',

  // ── src/pages/contacto.astro ──
  'contactoPage.n01': 'CONTACT',
  'contactoPage.n02': 'Let\'s talk about your next tech project.',
  'contactoPage.n03':
    'We are ready to listen to your idea, answer your questions and turn your vision into a robust and scalable digital solution.',
  'contactoPage.n04': 'EMAIL',
  'contactoPage.n05': 'WHATSAPP',
  'contactoPage.n06': 'LOCATION',
  'contactoPage.n07': 'Caracas, Venezuela',
  'contactoPage.n08': 'OFFICE HOURS',
  'contactoPage.n09': 'Mon — Fri, 9:00 AM — 6:00 PM (AST, UTC-4)',
  'contactoPage.n10': 'Name / Company',
  'contactoPage.n11': 'Email Address',
  'contactoPage.n12': 'Service of Interest',
  'contactoPage.n13': 'Select a service',
  'contactoPage.n14': 'Web App Development',
  'contactoPage.n15': 'Corporate Website',
  'contactoPage.n16': 'White Label for Agencies',
  'contactoPage.n17': 'Optimization / Consulting',
  'contactoPage.n18': 'Message',
  'contactoPage.n19': 'E.g. John Carter / Acme Inc.',
  'contactoPage.n20': 'Tell us about your project, ideas or questions...',

  // ── src/pages/404.astro ──
  'notFound.n01': 'terminal',
  'notFound.n02': 'vortex-router // status:404',
  'notFound.n03': '$ curl -I https://vortexlm.com',
  'notFound.n04': '/route-not-found',
  'notFound.n05': 'HTTP/2 404 Not Found',
  'notFound.n06': 'content-type: text/html',
  'notFound.n07': 'status: 404',
  'notFound.n08': '// The requested route does not exist on this server.',
  'notFound.n09': '// Do not worry, we have solutions for you.',
  'notFound.n10': '✔ Available routes:',
  'notFound.n11': '→ /servicios/diseno-paginas-web-caracas',
  'notFound.n12': '→ /servicios/desarrollo-web-caracas',
  'notFound.n13': '→ /servicios/agencia-diseno-web-caracas',
  'notFound.n14': '→ /servicios/diseno-paginas-web-venezuela',
  'notFound.n15': '→ /servicios/programador-web-caracas',
  'notFound.n16': 'We recommend visiting the Home page or exploring our featured services.',
  'notFound.n17': 'This page does not exist',
  'notFound.n18':
    'It looks like the link you followed is broken or the page was moved. Do not worry, here are some useful routes so you can find what you are looking for.',
  'notFound.n19': 'Back to Home',
  'notFound.n20': 'palette',
  'notFound.n21': 'Web Design in Caracas',
  'notFound.n22': 'code',
  'notFound.n23': 'Web Development in Caracas',
  'notFound.n24': 'You can also explore:',
  'notFound.n25': 'Web Design Agency',
  'notFound.n26': 'Web Design Venezuela',
  'notFound.n27': 'Senior Web Developer',
  'notFound.n28': '404 error console - Route not found in Vortex Logic',

  // ── src/pages/blog/index.astro ──
  'blogIndex.n01': 'Technical ',
  'blogIndex.n02': 'Blog',
  'blogIndex.n03':
    'Discover the latest trends in technology and software development to power your business in Caracas and across Venezuela.',

  // ── src/pages/catalogo-mayorista-b2b-caracas.astro ──
  'catalogoB2B.n01': 'B2B DIGITAL SOLUTIONS FOR DISTRIBUTORS',
  'catalogoB2B.n02': 'Automate Your Wholesale Sales with an Ultra-Fast Web Catalog',
  'catalogoB2B.n03':
    'Get rid of heavy PDFs and endless voice notes. Let your corporate clients and partner stores check real-time stock and build their orders in seconds, optimized for Caracas mobile connections.',
  'catalogoB2B.n04': 'Digitize my Catalog',
  'catalogoB2B.n05': 'See solution',
  'catalogoB2B.n06': 'Is your distributorship still taking orders by hand?',
  'catalogoB2B.n07': 'Outdated PDFs',
  'catalogoB2B.n08':
    'You send a digital catalog in the morning and by noon the stock or the price has already changed.',
  'catalogoB2B.n09': 'WhatsApp chaos',
  'catalogoB2B.n10': 'Hours wasted transcribing part codes or badly dictated SKUs.',
  'catalogoB2B.n11': 'Slow pages',
  'catalogoB2B.n12':
    'Heavy websites that do not open on the street with local mobile data, scaring buyers away.',
  'catalogoB2B.n13': 'Your inventory and your orders under control on a single platform',
  'catalogoB2B.n14': 'Record Load on Mobile Data',
  'catalogoB2B.n15':
    'Built with Astro to guarantee instant loading in industrial areas (La Yaguara, Boleíta, Los Ruices).',
  'catalogoB2B.n16': 'Smart Parts Finder',
  'catalogoB2B.n17': 'Exact search by part number, barcode, SKU or brand.',
  'catalogoB2B.n18': 'Cart to WhatsApp or Admin',
  'catalogoB2B.n19': 'Bulk orders broken down straight to the sales team or the internal panel.',
  'catalogoB2B.n20': 'Flexible Payment Methods',
  'catalogoB2B.n21': 'Manual toggles for Zelle, Pago Móvil, Binance or bank transfers at checkout.',
  'catalogoB2B.n22': 'Client Portal at Vortex LM',
  'catalogoB2B.n23':
    'Private access to monitor project progress, support, billing and technical account data 24 hours a day.',
  'catalogoB2B.n24': 'Investment',
  'catalogoB2B.n25': 'Transparent investment, no surprises',
  'catalogoB2B.n26':
    'Robust deployment using high-end serverless infrastructure (Vercel + Supabase) to guarantee zero downtime.',
  'catalogoB2B.n27': 'SINGLE PLAN',
  'catalogoB2B.n28': 'B2B Wholesale Catalog Development',
  'catalogoB2B.n29': 'From $850 USD',
  'catalogoB2B.n30': 'Split payment: 50% upfront / 50% on delivery',
  'catalogoB2B.n31': 'Integrated Supabase database',
  'catalogoB2B.n32': 'Front-end on Vercel',
  'catalogoB2B.n33': 'Indexed search engine',
  'catalogoB2B.n34': 'Automated cart',
  'catalogoB2B.n35': 'Multi-currency support',
  'catalogoB2B.n36': 'Private access to the Client Portal at vortexlm.com',
  'catalogoB2B.n37': 'Monthly maintenance:',
  'catalogoB2B.n38': '$80 USD/month',
  'catalogoB2B.n39':
    'Includes Supabase optimization, Vercel monitoring and priority support for API changes.',
  'catalogoB2B.n40': 'Start today',
  'catalogoB2B.n41': 'Modernize your sales logistics today',
  'catalogoB2B.n42':
    'Book a 15-minute technical session and we will show you how to adapt our system to your business model.',
  'catalogoB2B.n43': 'Contact Name',
  'catalogoB2B.n44': 'Distributor / Importer Name',
  'catalogoB2B.n45': 'Contact WhatsApp',
  'catalogoB2B.n46': 'What kind of products do you distribute?',
  'catalogoB2B.n47': 'Request a B2B Catalog Demo',
  'catalogoB2B.n48': 'SaaS Admin System Dashboard - Vortex LM',
  'catalogoB2B.n49': 'Your full name',
  'catalogoB2B.n50': 'Your company name',
  'catalogoB2B.n51': 'E.g.: Automotive parts, industrial equipment, hardware...',

  // ── src/pages/servicios/diseno-web-caracas.astro ──
  'svcWebDesign.n01': 'Complete Custom Systems',
  'svcWebDesign.n02':
    'We create scalable projects tailored to what you need. We faithfully replicate designs you provide or build completely new interfaces exclusive to your brand.',
  'svcWebDesign.n03': 'Read: Why complement your website with a Mobile App',
  'svcWebDesign.n04': 'Frequently Asked Questions',
  'svcWebDesign.n05':
    'Transparent information about website pricing in Venezuela and our processes.',
  'svcWebDesign.n06': 'Ready to scale your business?',
  'svcWebDesign.n07':
    'Leave us your details and a software architect will evaluate your case with no obligation.',

  // ── src/pages/servicios/desarrollo-de-apps-caracas.astro ──
  'svcAppsMv.n01': 'App Development in Chacao and Greater Caracas',
  'svcAppsMv.n02':
    'In a mobile-dominated market, having a presence in the app stores is no longer a luxury, it is the frontier that separates leaders from the rest.',
  'svcAppsMv.n03': 'Read Article: Why you need a mobile app in 2026',
  'svcAppsMv.n04': 'Frequently Asked Questions',
  'svcAppsMv.n05': 'We clarify the landscape of app development in Venezuela.',
  'svcAppsMv.n06': 'Turn your idea into code',
  'svcAppsMv.n07':
    'Contact our engineers and software architects to receive a technical feasibility review.',

  // ── src/pages/servicios/sistemas-gestion-medida.astro ──
  'svcSistemas.n01': 'Enterprise Software Development Caracas',
  'svcSistemas.n02':
    'In a complex multi-currency environment, relying on generic spreadsheets is a huge risk. We design cloud architecture for total control.',
  'svcSistemas.n03': 'Read Case: Multi-currency inventory automation in Venezuela',
  'svcSistemas.n04': 'Frequently Asked Questions',
  'svcSistemas.n05': 'Discover how your own software can multiply your company performance.',
  'svcSistemas.n06': 'Process Audit',
  'svcSistemas.n07':
    'Tell us how your company works today and we will propose the ideal architecture.',
  // ── Metadatos de páginas core (title / description del documento) ──
  'svcPage.meta.title':
    'Web Development Services and Technical Profiles — VortexLM | Web and App Development Agency in Caracas',
  'svcPage.meta.description':
    'Development services directory: full-stack profile (Astro, React, Next.js), CMS engineering (WordPress, Shopify), web application administration and custom systems. Choose the technical profile your project needs.',
  'contactoPage.meta.title':
    'Contact Our Software and Web Specialists | Vortex | Web and App Development Agency in Caracas',
  'contactoPage.meta.description':
    'Do you have an idea or a project in mind? Contact Vortex software and web development specialists. We design scalable systems and high-performance websites.',
  'notFound.meta.title':
    '404: Route Not Found | Vortex Logic | Web and App Development Agency in Caracas',
  'notFound.meta.description':
    'The page you are looking for does not exist. Explore our web design and development services in Caracas and Venezuela.',
  'blogIndex.meta.title': 'Technical Blog | Web and App Development Agency in Caracas',
  'blogIndex.meta.description':
    'Technical articles about digital transformation, web development and mobile applications in Caracas.',
  'catalogoB2B.meta.title':
    'B2B Wholesale Catalog | Automate Your Wholesale Sales | Web and App Development Agency in Caracas',
  'catalogoB2B.meta.description':
    'Automate your wholesale sales with an ultra-fast web catalog. Ideal for distributors, importers and spare parts sellers in Caracas.',
  'svcWebDesign.meta.title':
    'Web Design in Caracas | High-Performance Software Agency | Web and App Development Agency in Caracas',
  'svcWebDesign.meta.description':
    'We lead the web design market in Caracas with ultra-fast architectures and Local SEO. Make your business stand out on Google.',
  'svcAppsMv.meta.title':
    'Mobile App Development in Venezuela | iOS & Android | Web and App Development Agency in Caracas',
  'svcAppsMv.meta.description':
    'High-performance native mobile app development. Put your brand in the pockets of Caracas with VortexLM.',
  'svcSistemas.meta.title':
    'Custom Systems and Management Software | VortexLM | Web and App Development Agency in Caracas',
  'svcSistemas.meta.description':
    'Enterprise software development in Caracas. Inventory automation, billing systems and ERP tailored to your industry.',

  // ── Vistas con hero (servicios, blog), tarjetas y formulario de contacto ──
  'svcWebDesign.hero.title': 'Elite Web Design in',
  'svcWebDesign.hero.highlight': 'Caracas',
  'svcWebDesign.hero.subtitle':
    'We turn your vision into a light-speed digital experience. Modern software architecture designed to crush the competition on Google.',
  'svcWebDesign.card1.title': 'Flexible Design and Development',
  'svcWebDesign.card1.description':
    'From modern frameworks to WordPress development, we choose the perfect tech stack for your requirements.',
  'svcWebDesign.card2.title': 'Software Agency in Caracas',
  'svcWebDesign.card2.description':
    'We structure your site with semantic microdata so Google identifies you as the #1 authority in your geographic sector.',
  'svcWebDesign.card3.title': 'Premium UX/UI Design',
  'svcWebDesign.card3.description':
    'Minimalist interfaces, native dark mode and a tech aesthetic that conveys absolute trust to your business clients.',
  'svcAppsMv.hero.title': 'Mobile App Development in',
  'svcAppsMv.hero.highlight': 'Venezuela',
  'svcAppsMv.hero.subtitle':
    'Corporate apps, e-commerce and startups. We take your business model straight into your customers’ pockets with unmatched native performance.',
  'svcAppsMv.card1.title': 'Native Experience (iOS/Android)',
  'svcAppsMv.card1.description':
    'Flawless performance using the full device hardware. Constant 60fps for a premium experience.',
  'svcAppsMv.card2.title': 'Local Integration (Payments)',
  'svcAppsMv.card2.description':
    'We connect your app with payment gateways and digital wallets relevant to Venezuela’s multi-currency economy.',
  'svcAppsMv.card3.title': 'Corporate Application Development',
  'svcAppsMv.card3.description':
    'Robust Delivery, e-commerce, internal management or fintech systems designed from scratch with banking-grade security.',
  'svcSistemas.hero.title': 'Custom Systems and',
  'svcSistemas.hero.highlight': 'Management Software',
  'svcSistemas.hero.subtitle':
    'Free your team from manual work. Automate operations, integrate inventories and scale your productivity with exclusive corporate tools.',
  'svcSistemas.card1.title': 'Inventory Automation',
  'svcSistemas.card1.description':
    'Real-time control of multiple warehouses, branch synchronization and integrations with point-of-sale hardware.',
  'svcSistemas.card2.title': 'Custom ERP and CRM Systems',
  'svcSistemas.card2.description':
    'We build platforms that centralize human resources, finance and customer service in a single encrypted ecosystem.',
  'svcSistemas.card3.title': 'Dashboards and Analytics',
  'svcSistemas.card3.description':
    'Make decisions with accurate data. Instant report generation on profitability, sales and key metrics.',
  'contactoPage.form.submit': 'Send message',
  'contactoPage.form.sending': 'Sending...',
  'contactoPage.form.success': 'Message sent successfully! We will contact you soon.',
  'contactoPage.form.error': 'Error sending. Please try again or write to us at info@vortexlm.com.',

  // ── Blog: metadatos de las tarjetas y de las páginas de artículo ──
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.title':
    'How much does a professional website cost in Venezuela in 2026?',
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.description':
    'We break down the costs and the ROI of investing in web design in Caracas. Learn to tell slow templates apart from real conversion platforms.',
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.category':
    'Digital Transformation in Venezuela',
  'blogPost.cuanto-cuesta-pagina-web-profesional-venezuela-2026.date': 'May 12, 2026',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.title':
    'Why your company in Caracas needs a mobile app in 2026: Complete guide',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.description':
    'Discover how a native mobile app can transform your business in Caracas, integrating local payments and inventory management for commercial areas like Chacao.',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.category':
    'Digital Transformation in Venezuela',
  'blogPost.por-que-tu-empresa-caracas-necesita-app-movil-2026.date': 'May 11, 2026',
  'blogPost.seo-local-caracas-guia-posicionamiento.title':
    'Local SEO Guide: How to be #1 on Google in Caracas',
  'blogPost.seo-local-caracas-guia-posicionamiento.description':
    'Master geolocated searches in Caracas. Technical Schema Markup and Google Business Profile strategies for agencies and local businesses.',
  'blogPost.seo-local-caracas-guia-posicionamiento.category': 'Digital Transformation in Venezuela',
  'blogPost.seo-local-caracas-guia-posicionamiento.date': 'May 13, 2026',
  'blogPost.sistema-contable-talleres-mecanicos.title':
    'Accounting system for auto repair shops: smart management',
  'blogPost.sistema-contable-talleres-mecanicos.description':
    'Is your repair shop still using Excel? Discover how an accounting system for auto repair shops automates inventory, multi-currency billing and finances in one place.',
  'blogPost.sistema-contable-talleres-mecanicos.category': 'Digital Transformation in Venezuela',
  'blogPost.sistema-contable-talleres-mecanicos.date': 'May 21, 2026',
  'blogPost.sistemas-inventario-facturacion-venezuela.title':
    'Management Systems: Automating Inventory and Billing in Venezuela',
  'blogPost.sistemas-inventario-facturacion-venezuela.description':
    'Why spreadsheets are no longer enough for companies in Caracas and how custom software reduces losses and optimizes cash flow.',
  'blogPost.sistemas-inventario-facturacion-venezuela.category':
    'Digital Transformation in Venezuela',
  'blogPost.sistemas-inventario-facturacion-venezuela.date': 'May 14, 2026',
  'blogPost.tendencias-ecommerce-venezuela-2026.title': 'E-commerce Trends in Venezuela for 2026',
  'blogPost.tendencias-ecommerce-venezuela-2026.description':
    'Last-mile logistics, automated payment integration and extreme speed: the future of online stores in Caracas.',
  'blogPost.tendencias-ecommerce-venezuela-2026.category': 'Digital Transformation in Venezuela',
  'blogPost.tendencias-ecommerce-venezuela-2026.date': 'May 15, 2026',


  // ── src/pages/soluciones/desarrollo-apps-moviles.astro ──
  'solAppsMv.n01': 'MOBILE APP DEVELOPMENT',
  'solAppsMv.n02': 'We build native, fluid mobile apps your users will love.',
  'solAppsMv.n03':
    'We design and build high-performance hybrid and native mobile applications. We connect your business with your customers\' pockets through secure architectures, intuitive interfaces and buttery-smooth 120Hz animations.',
  'solAppsMv.n04': 'Start my mobile project',
  'solAppsMv.n05': 'See mobile technologies',
  'solAppsMv.n06': 'CORE FEATURES',
  'solAppsMv.n07': 'Cross-platform mobile engineering.',
  'solAppsMv.n08':
    'We maximize the reach of your digital product while cutting development and maintenance costs through modern coding standards.',
  'solAppsMv.n09': 'Single, Efficient Codebase',
  'solAppsMv.n10':
    'We build one optimized codebase to launch your app on the App Store (iOS) and Google Play Store (Android) at the same time. Less development time, same native fidelity.',
  'solAppsMv.n11': 'Native Performance and Animations',
  'solAppsMv.n12':
    'We optimize rendering on the device\'s main thread to guarantee smooth transitions, instant tap gestures and minimal battery and RAM usage.',
  'solAppsMv.n13': 'API Sync and Integration',
  'solAppsMv.n14':
    'We connect your mobile app with your existing systems, automated payment gateways, cloud databases (Supabase) and real-time push notification services.',
  'solAppsMv.n15': 'ADVANCED ARCHITECTURE',
  'solAppsMv.n16': 'Offline-first architecture and real-time data.',
  'solAppsMv.n17':
    'Modern mobile apps cannot depend on an unstable internet connection. We implement on-device storage and local databases that let the app work optimally offline (without a connection). The moment the user regains signal, data syncs transparently and bidirectionally with your cloud servers, guaranteeing data integrity without interrupting the user experience.',
  'solAppsMv.n18': 'CLOUD DB',
  'solAppsMv.n19': 'LOCAL STORE',
  'solAppsMv.n20': 'Encrypted two-way sync',
  'solAppsMv.n21': 'PROCESS',
  'solAppsMv.n22': 'From code to the app stores',
  'solAppsMv.n23': 'UI Design and Prototyping (UI/UX)',
  'solAppsMv.n24':
    'We model every screen following Apple\'s official design patterns (Human Interface Guidelines) and Google\'s (Material Design), ensuring the app feels familiar and native.',
  'solAppsMv.n25': 'Logic and Security Development',
  'solAppsMv.n26':
    'We build the app isolating credential storage with the system\'s secure keychains (Keychain/Keystore) and hardening the software against reverse engineering.',
  'solAppsMv.n27': 'Testing in Real Environments (QA)',
  'solAppsMv.n28':
    'We ship closed beta builds through TestFlight and Google Play Console to validate the software\'s behavior across different resolutions and operating systems.',
  'solAppsMv.n29': 'Publishing and Maintenance',
  'solAppsMv.n30':
    'We handle the entire technical and bureaucratic review process so your app gets approved in the stores, ensuring compatibility with future iOS and Android updates.',
  'solAppsMv.n31': 'CONTACT',
  'solAppsMv.n32': 'Turn your idea into a world-class mobile product.',
  'solAppsMv.n33':
    'Write to us detailing the scope of your app. We will assess the infrastructure you need and propose an agile, scalable development plan.',
  'solAppsMv.n34': 'Name or Company Name',
  'solAppsMv.n35': 'Contact Email',
  'solAppsMv.n36': 'Mobile app type',
  'solAppsMv.n37': 'Mobile system details',
  'solAppsMv.n38': 'Build my mobile app',
  'solAppsMv.n39': 'E.g. Inversiones Caracas C.A.',
  'solAppsMv.n40': 'E.g. E-commerce, Delivery, Internal tool, SaaS...',
  'solAppsMv.n41': 'Describe the main features you need (e.g. geolocation, payments, profiles)...',

  // ── src/pages/soluciones/desarrollo-astro-nextjs.astro ──
  'solAstroNext.n01': 'MODERN WEB DEVELOPMENT',
  'solAstroNext.n02':
    'Frontend engineering for the future: ultra-fluid interfaces and extreme performance.',
  'solAstroNext.n03':
    'We leave behind slow technologies and monolithic visual builders. We build modern platforms and websites using next-generation frameworks. Jamstack and Server-Side Rendering (SSR) architectures ready for maximum global scale.',
  'solAstroNext.n04': 'Start a modern build',
  'solAstroNext.n05': 'See our stack documentation',
  'solAstroNext.n06': 'bash — vortex build',
  'solAstroNext.n07': 'npm run build',
  'solAstroNext.n08': '✓ Generated static pages (Astro):',
  'solAstroNext.n09': '/ → index.html (0.2s)',
  'solAstroNext.n10': '/soluciones → soluciones/index.html (0.1s)',
  'solAstroNext.n11': '/blog → blog/index.html (0.3s)',
  'solAstroNext.n12': '◆ Server-side rendered endpoints (Next.js):',
  'solAstroNext.n13': '/dashboard → SSR (0.8s TTFB)',
  'solAstroNext.n14': '/api/orders → Edge Function (0.05s)',
  'solAstroNext.n15': '✓ Build completed successfully (1.2s)',
  'solAstroNext.n16': 'FRAMEWORK SPECIALIZATION',
  'solAstroNext.n17': 'The right tool for the right goal.',
  'solAstroNext.n18':
    'We do not force a single framework for everything; we select the technology based on your business conversion and dynamism requirements.',
  'solAstroNext.n19': 'Astro Framework',
  'solAstroNext.n20': 'Unbeatable Performance for Content Sites',
  'solAstroNext.n21':
    'The ideal framework for corporate websites, sales landings and blogs. Astro removes client-side JavaScript entirely by default (\'Zero JS\'). It generates pure static HTML that flies on any device, guaranteeing impeccable native SEO and immediate conversions.',
  'solAstroNext.n22': 'Next.js + React',
  'solAstroNext.n23': 'Power and Scalability for Complex Applications',
  'solAstroNext.n24':
    'The industry-standard infrastructure for dynamic platforms, SaaS systems, corporate dashboards and interactive platforms. With advanced support for Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), Next.js processes heavy logic on the server and delivers ultra-fast interfaces to the user.',
  'solAstroNext.n25': 'ISLANDS ARCHITECTURE',
  'solAstroNext.n26': 'Selective interactivity. Zero bytes of junk code.',
  'solAstroNext.n27':
    'Traditional websites force the browser to download and process megabytes of JavaScript for the whole page, even for static elements that do not need it (such as text or images). With Islands Architecture, your website renders as a pure, ultra-fast HTML document. If a specific section requires interactivity (such as a shopping cart or a dynamic form), the browser only downloads the exact JavaScript for that isolated section. The rest of the page stays lightweight, secure and instantly interactive.',
  'solAstroNext.n28': '✦ Active React component (only this block loads JS)',
  'solAstroNext.n29': '✦ Interactive form (isolated JS payload)',
  'solAstroNext.n30': 'Static HTML — No resource consumption',
  'solAstroNext.n31': 'INFRASTRUCTURE',
  'solAstroNext.n32': 'Modern serverless infrastructure',
  'solAstroNext.n33': 'High-End Frontend',
  'solAstroNext.n34': '(React & TypeScript)',
  'solAstroNext.n35':
    'We write typed, modular interfaces that prevent production errors. Clean, reusable components that make maintenance and software evolution easier.',
  'solAstroNext.n36': 'Backend and Data Layer',
  'solAstroNext.n37': '(Supabase & PostgreSQL)',
  'solAstroNext.n38':
    'We connect your dynamic flows with Supabase for real-time storage, secure user authentication and latency-free relational database queries.',
  'solAstroNext.n39': 'Instant Global Distribution',
  'solAstroNext.n40': '(Vercel Edge Network)',
  'solAstroNext.n41':
    'We deploy your applications straight to Vercel\'s cloud infrastructure. Your code runs at the edge (Edge Functions), removing traditional server delays and withstanding traffic attacks.',
  'solAstroNext.n42': 'CONTACT',
  'solAstroNext.n43': 'Let us build the software of tomorrow.',
  'solAstroNext.n44':
    'Tell us your web platform requirements. We will design a scalable, secure and fast architecture using the technical standards of the industry\'s leading companies.',
  'solAstroNext.n45': 'Name or Company',
  'solAstroNext.n46': 'Business Email',
  'solAstroNext.n47': 'Project type',
  'solAstroNext.n48': 'Stack Requirements',
  'solAstroNext.n49': 'Build with extreme performance',
  'solAstroNext.n50': 'E.g. Vortex Commercial Partner',
  'solAstroNext.n51': 'E.g. Sales Landing Page, SaaS Software, Corporate Portal...',
  'solAstroNext.n52':
    'Detail which dynamic features you need (authentication, databases, integrations)...',

  // ── src/pages/soluciones/diseno-web-velocidad.astro ──
  'solSpeed.n01': 'HIGH-SPEED WEB DESIGN',
  'solSpeed.n02': 'Websites that load instantly. Optimized to turn visits into customers.',
  'solSpeed.n03':
    'Every millisecond of delay lowers your conversion rate and destroys your Google ranking. We design and implement user interfaces under the industry\'s strictest performance standards. Native speed that drives your business.',
  'solSpeed.n04': 'Quote a high-speed project',
  'solSpeed.n05': 'Analyze my current website',
  'solSpeed.n06': 'TTFB',
  'solSpeed.n07': '0.1s',
  'solSpeed.n08': '0.8s',
  'solSpeed.n09': '12ms',
  'solSpeed.n10': 'OUR APPROACH',
  'solSpeed.n11': 'Performance without compromise.',
  'solSpeed.n12':
    'We do not use bloated templates or slow visual builders. We treat web performance as a core engineering discipline.',
  'solSpeed.n13': 'Advanced WPO Optimization',
  'solSpeed.n14':
    'We minify code on the server, remove render-blocking JavaScript and apply inline critical CSS techniques so the browser paints your site immediately.',
  'solSpeed.n15': 'Next-Generation Images',
  'solSpeed.n16':
    'We automate the conversion of your visual assets to ultra-compressive formats such as WebP and AVIF, implementing adaptive lazy loading and explicit dimensions to prevent layout shifts (CLS).',
  'solSpeed.n17': 'Global Edge Deployment',
  'solSpeed.n18':
    'We distribute your website across global content delivery networks (CDNs) through Vercel. Your page is served from the node closest to the visitor, guaranteeing instant responses in Caracas, Madrid or anywhere in the world.',
  'solSpeed.n19': 'BUSINESS IMPACT',
  'solSpeed.n20': 'Speed is the best marketing strategy.',
  'solSpeed.n21':
    'A fast website not only pleases your users, it also dominates the algorithms. Google directly rewards pages that meet Core Web Vitals metrics, granting them better organic ranking (SEO) and drastically reducing cost per click (CPC) in your Google Ads campaigns. Less bounce, more conversions, higher profitability.',
  'solSpeed.n22': 'RETENTION RATE',
  'solSpeed.n23': 'Instant loading',
  'solSpeed.n24': 'Traditional slow site',
  'solSpeed.n25': 'ARCHITECTURE',
  'solSpeed.n26': 'Vortex Architecture vs. Traditional Development',
  'solSpeed.n27': 'Metric / Feature',
  'solSpeed.n28': 'Traditional Slow Sites',
  'solSpeed.n29': 'High-Speed Engineering (Vortex)',
  'solSpeed.n30': 'Average Load Time',
  'solSpeed.n31': '4.5 seconds or more',
  'solSpeed.n32': 'Under 1.2 seconds (Instant)',
  'solSpeed.n33': 'Mobile PageSpeed Score',
  'solSpeed.n34': 'Orange/red range (30 - 50 pts)',
  'solSpeed.n35': 'Absolute green range (95 - 100 pts)',
  'solSpeed.n36': 'Plugin Dependency',
  'solSpeed.n37': 'High (Instability and slowness)',
  'solSpeed.n38': 'Zero (Clean, modular, native code)',
  'solSpeed.n39': 'Cloud Infrastructure',
  'solSpeed.n40': 'Traditional shared hosting',
  'solSpeed.n41': 'Distributed Edge Servers (Vercel)',
  'solSpeed.n42': 'Frequently asked questions',
  'solSpeed.n43': 'How long does it take to build an optimized website?',
  'solSpeed.n44':
    'Depending on the project complexity, an optimized corporate page can be ready in 2 to 4 weeks. More complex projects with advanced features can take 6 to 8 weeks.',
  'solSpeed.n45': 'What does the speed optimization service include?',
  'solSpeed.n46':
    'It includes a full performance audit, image optimization, code minification, CDN implementation, cache configuration, inline critical CSS, asynchronous script loading and continuous Core Web Vitals monitoring.',
  'solSpeed.n47': 'Do you offer maintenance after launch?',
  'solSpeed.n48':
    'Yes, we offer ongoing maintenance plans that include security updates, performance monitoring, periodic optimization and priority technical support.',
  'solSpeed.n49': 'Can I migrate my current website to your platform?',
  'solSpeed.n50':
    'Absolutely. We carry out a controlled migration of your current site to our high-performance infrastructure, minimizing downtime and guaranteeing that all existing functionality stays intact.',
  'solSpeed.n51': 'CONTACT',
  'solSpeed.n52': 'Stop losing customers because of a slow website.',
  'solSpeed.n53':
    'Let us build a high-performance interface that truly represents your company\'s professional level. Write to us and we will design your tailor-made solution.',
  'solSpeed.n54': 'Full Name',
  'solSpeed.n55': 'Corporate Email',
  'solSpeed.n56': 'URL of your current website (Optional)',
  'solSpeed.n57': 'Tell us about your goals',
  'solSpeed.n58': 'Build my high-speed website',
  'solSpeed.n59': 'E.g. Alejandro Silva',
  'solSpeed.n60': 'Your website so we can audit it for free...',
  'solSpeed.n61': 'What kind of platform or corporate page do you need to optimize?...',

  // ── src/pages/soluciones/sistemas-erp-software-medida.astro ──
  'solErp.n01': 'ERP SYSTEMS AND CUSTOM SOFTWARE',
  'solErp.n02':
    'Automate your company\'s operations with software designed exactly to your measure.',
  'solErp.n03':
    'Leave behind chaotic spreadsheets and rigid generic systems. We develop modular, secure ERP, CRM and internal management solutions adapted with surgical precision to your business\'s real logic and workflows.',
  'solErp.n04': 'Request a process consultancy',
  'solErp.n05': 'See the data architecture',
  'solErp.n06': 'ERP Vortex',
  'solErp.n07': 'Control Panel',
  'solErp.n08': 'INVENTORY',
  'solErp.n09': 'Item A',
  'solErp.n10': 'Item B',
  'solErp.n11': 'Item C',
  'solErp.n12': 'Item D',
  'solErp.n13': 'EFFICIENCY',
  'solErp.n14': 'USERS',
  'solErp.n15': 'Admin',
  'solErp.n16': 'Editor',
  'solErp.n17': 'Operator',
  'solErp.n18': 'Viewer',
  'solErp.n19': 'B2B INFRASTRUCTURE',
  'solErp.n20': 'Engineering-grade enterprise software.',
  'solErp.n21':
    'We design centralized tools and infrastructures that eliminate repetitive manual tasks and ensure full control over your assets.',
  'solErp.n22': 'Workflow Automation',
  'solErp.n23':
    'We model your business rules to automate invoicing, inventory control, task assignment and direct financial reporting, drastically reducing human error.',
  'solErp.n24': 'Role and Permission Management (RBAC)',
  'solErp.n25':
    'We implement strict Role-Based Access Control systems. Define with pinpoint precision what information each member of your organization can see, edit or delete.',
  'solErp.n26': 'Centralized Real-Time Data',
  'solErp.n27':
    'All your operational information consolidated in a robust relational database with Supabase and PostgreSQL. Forget duplicate data; access crucial metrics instantly from anywhere.',
  'solErp.n28': 'TECHNOLOGY INVESTMENT',
  'solErp.n29': 'A scalable technology investment, with no abusive licenses.',
  'solErp.n30':
    'Traditional commercial software locks you into costly monthly rental contracts and extra charges for every new user you add to your team. With Vortex\'s custom engineering, the software is an asset you own. We build modular systems based on clean code that let you expand the platform, connect new APIs and add unlimited users as your company grows, with no hidden costs or restrictive subscription fees.',
  'solErp.n31': 'CORE NUCLEUS',
  'solErp.n32': 'Base Infrastructure',
  'solErp.n33': 'Sales',
  'solErp.n34': 'Purchasing',
  'solErp.n35': 'HR',
  'solErp.n36': 'Finance',
  'solErp.n37': 'Detachable modules — Unlimited expansion',
  'solErp.n38': 'TECHNICAL STANDARDS',
  'solErp.n39': 'Robust architecture for mission-critical work',
  'solErp.n40': 'Strict Relational Data Modeling',
  'solErp.n41':
    'We design optimized PostgreSQL database diagrams, guaranteeing the referential integrity of your financial and operational information through server-level logical constraints.',
  'solErp.n42': 'High-Availability REST APIs and Webhooks',
  'solErp.n43':
    'We build secure endpoints with Next.js to integrate your ERP with third-party software, bank payment gateways, shipping platforms or marketing tools.',
  'solErp.n44': 'Immutable Audit Logs',
  'solErp.n45':
    'Every critical action inside the system (inventory changes, payment approvals, role changes) is automatically recorded with a timestamp and user identity, protecting your company from internal fraud.',
  'solErp.n46': 'CONTACT',
  'solErp.n47': 'Transform your organization\'s operational efficiency.',
  'solErp.n48':
    'Let\'s talk about your company\'s current bottlenecks. We will assess your manual processes and propose a custom software infrastructure that centralizes and automates your business.',
  'solErp.n49': 'Contact Name and Position',
  'solErp.n50': 'Corporate Email',
  'solErp.n51': 'Organization Size',
  'solErp.n52': 'Describe the critical areas to automate',
  'solErp.n53': 'Design our custom system',
  'solErp.n54': 'E.g. Guillermo Vega — Operations Director',
  'solErp.n55': 'E.g. Fewer than 20 employees, 20-100 employees, more than 100...',
  'solErp.n56':
    'Briefly tell us which processes you need to optimize or centralize (e.g. sales, inventory, invoicing)...',

  // ── src/pages/desarrollo-web-caracas.astro ──
  'devCaracas.n01': 'Caracas, Venezuela',
  'devCaracas.n02': 'High-Performance Web Development in Caracas.',
  'devCaracas.n03': 'Your business online, 10 times faster.',
  'devCaracas.n04':
    'Don\'t let your customers walk away to the competition because of a slow page. We create web applications, SaaS platforms and premium corporate sites with edge technology that loads instantly on any Venezuelan connection.',
  'devCaracas.n05': 'Quote my Project in 5 Minutes',
  'devCaracas.n06': 'See Portfolio →',
  'devCaracas.n07': 'They trust us',
  'devCaracas.n08': 'CLINICS',
  'devCaracas.n09': 'CONSTRUCTION',
  'devCaracas.n10': 'RETAIL',
  'devCaracas.n11': 'STARTUPS',
  'devCaracas.n12': 'Local Benefits',
  'devCaracas.n13': 'Designed for the',
  'devCaracas.n14': 'Venezuelan market',
  'devCaracas.n15': 'Ultra-Fast Loading',
  'devCaracas.n16':
    'Optimized for local mobile connections. Our pages load in under 1 second even on Venezuelan 3G/4G networks.',
  'devCaracas.n17': 'Elite Architecture',
  'devCaracas.n18':
    'Forget heavy WordPress templates. We code with Astro, Next.js and Tailwind CSS for impeccable performance.',
  'devCaracas.n19': 'Direct Support and Warranty',
  'devCaracas.n20':
    'Backed by senior engineers ready to assist you locally. Technical support in Spanish, with no middlemen.',
  'devCaracas.n21': 'Digital Transformation',
  'devCaracas.n22': 'Take your business to the',
  'devCaracas.n23': 'next digital level',
  'devCaracas.n24':
    'In Caracas, your connection speed should not limit your online presence. We design web experiences that load instantly, optimized for the local infrastructure, so your customers enjoy smooth browsing no matter where they are.',
  'devCaracas.n25': 'Free technical audit of your current site',
  'devCaracas.n26': 'Migration from WordPress, Wix or any CMS',
  'devCaracas.n27': 'Optimized hosting with global CDN included',
  'devCaracas.n28': '100% Secure and Optimized',
  'devCaracas.n29': 'Modern Stack',
  'devCaracas.n30': 'Technology Stack',
  'devCaracas.n31': 'Edge technology',
  'devCaracas.n32': 'for real results',
  'devCaracas.n33':
    'We do not use generic templates. Every project is built from scratch with Astro, Next.js and Tailwind CSS, guaranteeing perfect Core Web Vitals scores and a superior user experience.',
  'devCaracas.n34': 'Astro + Next.js: native SSR and SSG performance',
  'devCaracas.n35': 'Vercel Edge Network deployment: minimal latency',
  'devCaracas.n36': 'Advanced technical SEO and conversion optimization',
  'devCaracas.n37': 'Frequently Asked Questions',
  'devCaracas.n38': 'How long does it take to build a website?',
  'devCaracas.n39':
    'Depending on complexity, a corporate site can be ready in 2 to 4 weeks. More complex SaaS platforms and web applications can take 6 to 12 weeks.',
  'devCaracas.n40': 'Do you offer maintenance after launch?',
  'devCaracas.n41':
    'Yes, we offer ongoing maintenance plans that include security updates, backups, performance optimization and priority technical support.',
  'devCaracas.n42': 'Can you migrate my current site from WordPress?',
  'devCaracas.n43':
    'Absolutely. We migrate sites from WordPress, Wix, Shopify and other CMS to modern architectures with better performance, security and scalability.',
  'devCaracas.n44': 'Do you work with tight budgets?',
  'devCaracas.n45':
    'Yes, we design scalable solutions that fit your budget. We can start with an MVP and progressively add features.',
  'devCaracas.n46': 'Contact',
  'devCaracas.n47': 'Request your quote',
  'devCaracas.n48': 'Leave us your details and we will contact you in under 24 hours.',
  'devCaracas.n49': 'Full name',
  'devCaracas.n50': 'Email address',
  'devCaracas.n51': 'Current website (optional)',
  'devCaracas.n52': 'Tell us about your project',
  'devCaracas.n53': 'Send Quote',
  'devCaracas.n54': 'Your name',
  'devCaracas.n55': 'Describe your project, goals and technical requirements...',

  // ── src/pages/partner-tecnologico-b2b.astro ──
  'partnerB2B.n01': 'Technology Partner',
  'partnerB2B.n02': 'Efficient hourly billing. Total transparency.',
  'partnerB2B.n03': 'Your remote Technology Partner for your projects in Spain.',
  'partnerB2B.n04':
    'We absorb the technical workload of your agency in Spain under a White Label model. Clean code, fast continuous deliveries and a private panel with an hour counter for absolute control over your',
  'partnerB2B.n05': 'development costs',
  'partnerB2B.n06': '👉 Schedule a video call on WhatsApp',
  'partnerB2B.n07': 'Book a Free Consultation',
  'partnerB2B.n08': 'SPAIN · NO LOCK-IN · NO MINIMUMS',
  'partnerB2B.n09': 'Competitive Advantage',
  'partnerB2B.n10': 'Talent, Costs and Flexibility',
  'partnerB2B.n11': 'for your Agency',
  'partnerB2B.n12':
    'We operate from Caracas, Venezuela, a hub with an impressive density of young engineering talent, strong technical training and native Spanish fluency. No communication barriers. With structural costs significantly lower than those of the European Union. And we pass all that efficiency straight on to your agency.',
  'partnerB2B.n13': 'Talent Hub in Caracas',
  'partnerB2B.n14':
    'Our core operating team is based in Caracas, Venezuela, a region with an impressive density of young engineering talent, strong technical training and native Spanish fluency that removes any communication barrier or misunderstanding.',
  'partnerB2B.n15': 'Structural Cost Efficiency',
  'partnerB2B.n16':
    'By operating from Caracas, we have significantly lower structural and professional services costs than in the European Union. We pass that efficiency straight on to your agency, allowing you to',
  'partnerB2B.n17': 'double your net margins',
  'partnerB2B.n18': 'Profile Flexibility and Speed',
  'partnerB2B.n19':
    'No matter the size of the challenge. We source and assign every kind of profile: from',
  'partnerB2B.n20': 'Junior',
  'partnerB2B.n21': 'developers focused on fast, cost-effective bulk markup, to',
  'partnerB2B.n22': 'Senior',
  'partnerB2B.n23':
    'engineers specialized in complex architectures. Everything coordinated to move your projects forward as fast and efficiently as possible.',
  'partnerB2B.n24': 'Our Own Software',
  'partnerB2B.n25': 'Radical Transparency',
  'partnerB2B.n26': 'Vortex Control Panel',
  'partnerB2B.n27':
    'Our own software is the ultimate guarantee of honesty and control for your agency. Every minute, every task and every euro, visible instantly.',
  'partnerB2B.n28': 'Exact hour counter per task',
  'partnerB2B.n29':
    'Every task logs the exact development time in real time. You know who worked, how long each item took and the accumulated cost. No estimates, no surprises.',
  'partnerB2B.n30': 'Current task',
  'partnerB2B.n31': '12.4h consumed',
  'partnerB2B.n32': 'Active tracking now',
  'partnerB2B.n33': 'Fast Deliveries',
  'partnerB2B.n34':
    'Continuous planning with functional, agile deliveries. Track your project\'s progress through a',
  'partnerB2B.n35': 'live Control Board',
  'partnerB2B.n36':
    ': pending, in-progress, in-review and completed tasks. The ability to adjust priorities on the fly with measurable results on every release.',
  'partnerB2B.n37': 'Project status and live metrics',
  'partnerB2B.n38':
    'A dashboard with sprint progress percentage, hours consumed vs. budgeted, upcoming milestones and scheduled deliveries. You will always know exactly where your project stands and how much has been invested.',
  'partnerB2B.n39': 'Clear, transparent billing',
  'partnerB2B.n40':
    'Every invoice issued from our international LLC is backed by your panel\'s time log.',
  'partnerB2B.n41': 'Zero surprises on the final invoice.',
  'partnerB2B.n42': 'Review, download and reconcile your invoices with the real consumption data.',
  'partnerB2B.n43': '0% VAT for Spanish companies (reverse charge mechanism).',
  'partnerB2B.n44': 'Do you want to see how the panel works live?',
  'partnerB2B.n45': 'Request a panel demo',
  'partnerB2B.n46': 'Capabilities',
  'partnerB2B.n47': 'Core Services Catalog',
  'partnerB2B.n48': 'Service 01',
  'partnerB2B.n49': 'WordPress and',
  'partnerB2B.n50': 'Kit Digital',
  'partnerB2B.n51': 'Your agency wins the clients and manages the grant; we are your',
  'partnerB2B.n52': 'white label technical factory',
  'partnerB2B.n53': 'Pixel-Perfect build from Figma',
  'partnerB2B.n54': 'Custom themes or native Gutenberg blocks. No page builders, no junk plugins',
  'partnerB2B.n55':
    'Structures 100% adapted to Kit Digital: AA Accessibility (WCAG 2.1), on-page SEO, responsive layouts and self-managed panels',
  'partnerB2B.n56': 'Ready to pass any Ministry technical audit without holding up your payments',
  'partnerB2B.n57': 'Kit Digital Ready',
  'partnerB2B.n58': 'Overloaded with Kit Digital projects?',
  'partnerB2B.n59':
    'Upload them to your Vortex panel, start the hour counter and our team takes care of it.',
  'partnerB2B.n60': 'Message us on WhatsApp and we will schedule a quick Meet to coordinate.',
  'partnerB2B.n61': 'Message on WhatsApp →',
  'partnerB2B.n62': 'Astro · React · Next.js · Supabase',
  'partnerB2B.n63': 'Service 02',
  'partnerB2B.n64': 'Modern Frontend',
  'partnerB2B.n65': 'and Backend',
  'partnerB2B.n66':
    'Fast, scalable and robust software architecture for highly demanding projects.',
  'partnerB2B.n67': 'Ultra-fast frontends with',
  'partnerB2B.n68': '(ideal for corporate landings and high-performance WPO sites)',
  'partnerB2B.n69': 'Dynamic web applications with',
  'partnerB2B.n70': 'React and Next.js',
  'partnerB2B.n71': 'Backend with',
  'partnerB2B.n72': 'Supabase',
  'partnerB2B.n73': ': business logic, databases and secure authentication',
  'partnerB2B.n74': 'Payment gateway integration (Stripe), third-party APIs and CI/CD on',
  'partnerB2B.n75': 'Service 03',
  'partnerB2B.n76': 'Web and Mobile Apps',
  'partnerB2B.n77': 'Development and Maintenance',
  'partnerB2B.n78': 'Full lifecycle for digital platforms and native/hybrid applications.',
  'partnerB2B.n79':
    'Design, evolutionary development and preventive maintenance of custom web applications',
  'partnerB2B.n80': 'From the initial MVP to continuous technical support',
  'partnerB2B.n81': 'Bug fixes, security updates and performance optimization',
  'partnerB2B.n82': '24/7 operation guarantee for your clients\' apps',
  'partnerB2B.n83': 'Web · Mobile · MVP · Support',
  'partnerB2B.n84': 'Frequently Asked Questions',
  'partnerB2B.n85': 'How do I know the hours on the Vortex counter are real?',
  'partnerB2B.n86':
    'Every task has a timer that is started manually and automatically syncs with your Control Panel. You can see live who is working, on which task and the exact accumulated time. The system logs the start, pauses and completion of each individual task. There is no way to inflate the hours because everything maps to concrete sprint tasks that you yourself approve during planning.',
  'partnerB2B.n87': 'You do not pay for idle time, only for real development.',
  'partnerB2B.n88': 'How is confidentiality handled with my clients?',
  'partnerB2B.n89':
    'We sign a strict, mutual Non-Disclosure Agreement (NDA) before starting any collaboration. All development is managed under your agency\'s identity —',
  'partnerB2B.n90': 'your clients will never know of our existence',
  'partnerB2B.n91':
    '. We protect your intellectual property, source code, business strategy and any sensitive information. The NDA remains in force even after the contractual relationship ends.',
  'partnerB2B.n92': 'How does international invoicing work with the LLC?',
  'partnerB2B.n93':
    'Vortex Logic LLC is registered in the United States and issues official invoices. For Spanish companies, invoicing falls under the',
  'partnerB2B.n94': 'reverse charge mechanism',
  'partnerB2B.n95': '(Article 84.Uno.2º of the Spanish VAT Act):',
  'partnerB2B.n96': '0% VAT',
  'partnerB2B.n97':
    '— No VAT is charged on the invoice. You declare the accrued VAT and its deduction in your Form 303.',
  'partnerB2B.n98': 'No personal income tax withholdings',
  'partnerB2B.n99': '— As an international service, forms 123/124 do not apply.',
  'partnerB2B.n100': '100% deductible',
  'partnerB2B.n101': 'as a software development expense for your company.',
  'partnerB2B.n102':
    'We accept credit card, SEPA transfer, ACH and Binance Pay. We issue the invoice in euros.',
  'partnerB2B.n103': 'Shall we start?',
  'partnerB2B.n104': 'Do you need a white label',
  'partnerB2B.n105': 'technical factory to scale your agency?',
  'partnerB2B.n106':
    'Tell us your project volume and we will send you a proposal in under 48 hours. No commitment, no lock-in, no minimums.',
  'partnerB2B.n107': 'Message us on WhatsApp and we will set up a Meet →',
  'partnerB2B.n108': 'Or send us your workload →',
  'partnerB2B.n109': 'Contact',
  'partnerB2B.n110': 'Request a free consultation',
  'partnerB2B.n111':
    'Tell us about your project and we will send you a technical proposal in under 48 hours. No commitment.',
  'partnerB2B.n112': 'Full name',
  'partnerB2B.n113': 'Email address',
  'partnerB2B.n114': 'Company (optional)',
  'partnerB2B.n115': 'Tell us about your project',
  'partnerB2B.n116': 'Send Request',
  'partnerB2B.n117': 'Prefer an immediate answer?',
  'partnerB2B.n118': 'Message us on WhatsApp now →',
  'partnerB2B.n119': 'Your name',
  'partnerB2B.n120': 'Your company name',
  'partnerB2B.n121': 'Describe your project, current tech stack, goals and requirements...',

  // ── src/pages/servicios/diseno-paginas-web-venezuela.astro ──
  'svcPaginasVe.n01': 'Web Design in Venezuela with Premium Performance',
  'svcPaginasVe.n02':
    'We build ultra-fast websites that load in milliseconds even on 3G connections. Optimized for the Venezuelan digital ecosystem: international payment gateways, accounting integrations and delivery. Your business across the whole country, without borders.',
  'svcPaginasVe.n03': 'Quote your National Project',
  'svcPaginasVe.n04': 'National advantages',
  'svcPaginasVe.n05': 'globe',
  'svcPaginasVe.n06': 'vortex-cdn // edge-regions:latam',
  'svcPaginasVe.n07': 'Global Distribution Network (CDN)',
  'svcPaginasVe.n08': 'bolt',
  'svcPaginasVe.n09': 'Miami',
  'svcPaginasVe.n10': 'São Paulo',
  'svcPaginasVe.n11': 'Bogotá',
  'svcPaginasVe.n12': 'Buenos Aires',
  'svcPaginasVe.n13': 'Venezuela',
  'svcPaginasVe.n14': 'Edge nodes: 100+',
  'svcPaginasVe.n15': 'Average latency: 18ms',
  'svcPaginasVe.n16': 'Uptime: 99.99%',
  'svcPaginasVe.n17': 'Comparative Performance',
  'svcPaginasVe.n18': 'Traditional Site (WordPress)',
  'svcPaginasVe.n19': '6.2s',
  'svcPaginasVe.n20': 'Lighthouse: 42',
  'svcPaginasVe.n21': '3G: 8.4s',
  'svcPaginasVe.n22': 'Vortex LM (Astro + Jamstack)',
  'svcPaginasVe.n23': '0.8s',
  'svcPaginasVe.n24': 'Lighthouse: 100',
  'svcPaginasVe.n25': '3G: 1.2s',
  'svcPaginasVe.n26': 'First Contentful Paint',
  'svcPaginasVe.n27': '0.3s',
  'svcPaginasVe.n28': 'Time to Interactive',
  'svcPaginasVe.n29': '0.6s',
  'svcPaginasVe.n30': 'Cumulative Layout Shift',
  'svcPaginasVe.n31': 'vs average WordPress',
  'svcPaginasVe.n32': '8x ms faster',
  'svcPaginasVe.n33': 'National Advantages',
  'svcPaginasVe.n34':
    'Your website running at full speed from any state in Venezuela, even on 3G connections with limited bandwidth.',
  'svcPaginasVe.n35': 'Instant Loading on 3G/4G/5G',
  'svcPaginasVe.n36':
    'Astro generates static HTML that weighs 90% less than a traditional WordPress site. Your website loads in under 1 second even on slow mobile connections in any state of the country. First paint in 0.3s thanks to inline critical CSS and the Jamstack architecture.',
  'svcPaginasVe.n37': 'Static HTML served from CDN',
  'svcPaginasVe.n38': 'Minimal, deferred JavaScript',
  'svcPaginasVe.n39': 'WebP images with lazy loading',
  'svcPaginasVe.n40': 'Integrations for the Venezuelan Market',
  'svcPaginasVe.n41':
    'We connect your website with the platforms your business uses in Venezuela: international payment gateways (PayPal, Stripe, MercadoPago), electronic invoicing systems (Seniat, VAT), local delivery platforms and CRMs adapted to the national market. All integrated into a single ecosystem.',
  'svcPaginasVe.n42': 'Gateways: PayPal, Stripe, MercadoPago, Zelle',
  'svcPaginasVe.n43': 'Seniat/VAT electronic invoicing',
  'svcPaginasVe.n44': 'Catalogs with real-time inventory',
  'svcPaginasVe.n45': 'Digital Presence Across the Country',
  'svcPaginasVe.n46':
    'Whether your business is in Caracas, Maracaibo, Valencia, Barquisimeto, Maracay or any other city in the country. Your website will be available to customers all over Venezuela with the same speed and quality. Vercel edge servers ensure minimal latency from any location.',
  'svcPaginasVe.n47': 'Global CDN with nodes in Latin America',
  'svcPaginasVe.n48': 'Remote support from any state',
  'svcPaginasVe.n49': 'Online consultancy with no on-site visits required',
  'svcPaginasVe.n50': 'Adaptive Technology',
  'svcPaginasVe.n51': 'Built for the Venezuelan internet. Speed where others are still loading.',
  'svcPaginasVe.n52':
    'In Venezuela, internet speed can vary drastically depending on the provider and the region. That is why we build with Astro: it generates ultra-light static HTML served from 100+ servers around the world. While a traditional site weighs 3-5MB and takes 8 seconds to load, your Vortex website weighs less than 200KB and loads in under 1 second. It is that simple.',
  'svcPaginasVe.n53': 'check_circle',
  'svcPaginasVe.n54': 'Brotli compression + pre-rendered static HTML',
  'svcPaginasVe.n55': 'WebP images with adaptive quality per connection',
  'svcPaginasVe.n56': 'Service worker for partial offline mode',
  'svcPaginasVe.n57': 'Prioritized loading of critical content (Critical CSS)',
  'svcPaginasVe.n58': 'Connection: 3G (1.5 Mbps)',
  'svcPaginasVe.n59': 'Total load: 187 KB',
  'svcPaginasVe.n60': 'Time: 0.8s',
  'svcPaginasVe.n61': 'vs WordPress: 4.2 MB → 8.4s',
  'svcPaginasVe.n62': 'performance // venezuela-benchmark',
  'svcPaginasVe.n63': 'Simulated 3G',
  'svcPaginasVe.n64': 'Total Weight',
  'svcPaginasVe.n65': '187KB',
  'svcPaginasVe.n66': 'vs 4.2MB WordPress',
  'svcPaginasVe.n67': '3G Time',
  'svcPaginasVe.n68': 'vs 8.4s WordPress',
  'svcPaginasVe.n69': 'Perfect score',
  'svcPaginasVe.n70': 'Uptime',
  'svcPaginasVe.n71': 'Vercel Edge SLA',
  'svcPaginasVe.n72': 'integrations // venezuela-ecosystem',
  'svcPaginasVe.n73': 'API Ready',
  'svcPaginasVe.n74': 'payments',
  'svcPaginasVe.n75': 'PayPal / Stripe',
  'svcPaginasVe.n76': 'Global gateways',
  'svcPaginasVe.n77': 'account_balance',
  'svcPaginasVe.n78': 'MercadoPago',
  'svcPaginasVe.n79': 'LatAm payments',
  'svcPaginasVe.n80': 'receipt_long',
  'svcPaginasVe.n81': 'Seniat invoicing',
  'svcPaginasVe.n82': 'VAT / CF compliant',
  'svcPaginasVe.n83': 'local_shipping',
  'svcPaginasVe.n84': 'Delivery / Logistics',
  'svcPaginasVe.n85': 'MRW, Zoom, Domesa',
  'svcPaginasVe.n86': 'inventory_2',
  'svcPaginasVe.n87': 'Catalogs + Stock',
  'svcPaginasVe.n88': 'Live inventory',
  'svcPaginasVe.n89': 'support_agent',
  'svcPaginasVe.n90': 'Integrated CRM',
  'svcPaginasVe.n91': 'HubSpot / SalesForce',
  'svcPaginasVe.n92': 'REST API · Webhooks · Automation · Real time',
  'svcPaginasVe.n93': 'Commerce Without Borders',
  'svcPaginasVe.n94': 'Sell to all of Venezuela (and the world) from a single platform.',
  'svcPaginasVe.n95':
    'We integrate your website with the commercial tools you need: international payment gateways to receive dollars, electronic invoicing compliant with Seniat, delivery systems with MRW, Zoom and Domesa, and product catalogs with real-time synchronized inventory. All from a centralized, easy-to-use panel.',
  'svcPaginasVe.n96': 'Payments in foreign currency (PayPal, Stripe, Zelle) and bolívares',
  'svcPaginasVe.n97': 'Electronic invoicing with VE tax requirements',
  'svcPaginasVe.n98': 'Integrated delivery with real-time rate calculation',
  'svcPaginasVe.n99': 'Global Infrastructure',
  'svcPaginasVe.n100': 'Your website runs on the same network as the big tech companies',
  'svcPaginasVe.n101': 'Vercel Edge Network',
  'svcPaginasVe.n102': '100+ servers. Minimal latency from Venezuela.',
  'svcPaginasVe.n103':
    'We deploy your site on the same Vercel edge network used by companies such as Nike, TikTok and Airbnb. Your visitors in Venezuela receive the content from the closest server — Miami, São Paulo or Bogotá — with average latencies of 18ms. Instant loading from any state in the country.',
  'svcPaginasVe.n104': 'SSL + Security',
  'svcPaginasVe.n105': 'Enterprise-grade protection included in every project.',
  'svcPaginasVe.n106':
    'Automated SSL with certificates renewed every 90 days, Web Application Firewall (WAF) against DDoS attacks, rate limiting on critical endpoints and JWT authentication for protected areas. Your website and your customers\' data are safe under the highest industry standards.',
  'svcPaginasVe.n107': '> curl -I https://yoursite.com',
  'svcPaginasVe.n108': 'HTTP/2 200',
  'svcPaginasVe.n109': 'content-type: text/html',
  'svcPaginasVe.n110': 'x-vercel-cache: HIT',
  'svcPaginasVe.n111': 'server: Vercel',
  'svcPaginasVe.n112': '✔ Connected · 0.12s · 187KB transferred',
  'svcPaginasVe.n113': 'Latency by region (ms)',
  'svcPaginasVe.n114': 'Global avg',
  'svcPaginasVe.n115': 'LATAM',
  'svcPaginasVe.n116': 'Europe',
  'svcPaginasVe.n117': 'Asia',
  'svcPaginasVe.n118': 'P95 global: 120ms',
  'svcPaginasVe.n119': 'National FAQ',
  'svcPaginasVe.n120': 'Frequently asked questions about our services in Venezuela',
  'svcPaginasVe.n121': 'Do you work with companies outside Caracas?',
  'svcPaginasVe.n122': 'expand_more',
  'svcPaginasVe.n123':
    'Of course! We work with clients all over the country: Maracaibo, Valencia, Barquisimeto, Maracay, Puerto La Cruz, San Cristóbal and any other city. All our consultancy and development is done remotely through video calls, Slack and WhatsApp. We do not need on-site meetings to deliver world-class results. In fact, most of our clients are served entirely online.',
  'svcPaginasVe.n124': 'How are consultancy and remote support handled?',
  'svcPaginasVe.n125':
    'We use agile methodologies with asynchronous communication and weekly meetings via Google Meet or Zoom. We share progress in real time through Slack/WhatsApp channels where you can see the project\'s progress day by day. For post-launch support, we have a ticketing system with guaranteed responses in under 48 hours. We also offer online training sessions so your team can learn how to manage the content.',
  'svcPaginasVe.n126': 'What payment methods and commercial integrations do you handle?',
  'svcPaginasVe.n127': 'We integrate the main payment gateways operating in Venezuela and abroad:',
  'svcPaginasVe.n128': 'PayPal, Stripe, MercadoPago and Zelle',
  'svcPaginasVe.n129':
    '. For electronic invoicing, we connect with systems that meet the requirements of',
  'svcPaginasVe.n130': 'Seniat',
  'svcPaginasVe.n131': '(VAT, CF). We also integrate delivery platforms such as',
  'svcPaginasVe.n132': 'MRW, Zoom and Domesa',
  'svcPaginasVe.n133':
    'with real-time rate calculation. If you need a specific integration for your industry, we build it to order.',
  'svcPaginasVe.n134': 'Will the website still be fast on slow internet connections?',
  'svcPaginasVe.n135':
    'Yes, this is one of our main differentiators. A traditional WordPress website weighs between 3 and 5 MB and takes 8 seconds or more to load on a typical 3G connection in Venezuela. We generate sites that weigh',
  'svcPaginasVe.n136': 'less than 200 KB',
  'svcPaginasVe.n137': 'and load in',
  'svcPaginasVe.n138': 'less than 1 second',
  'svcPaginasVe.n139':
    'under the same conditions. This is achieved with: pre-rendered static HTML, images compressed in WebP, deferred loading of non-critical content and an architecture that removes all unnecessary JavaScript. Your website works perfectly even on unstable connections.',
  'svcPaginasVe.n140': 'Do you offer maintenance and updates after launch?',
  'svcPaginasVe.n141': 'Yes. All projects include',
  'svcPaginasVe.n142': '3 months of support',
  'svcPaginasVe.n143':
    'post-launch for minor adjustments and stabilization. After that we offer monthly maintenance plans that include: security updates, 24/7 performance and uptime monitoring, automatic database backups, continuous speed optimization and priority support via Slack or WhatsApp. We can also add new features or sections to your website on demand.',
  'svcPaginasVe.n144': 'Start your National Project',
  'svcPaginasVe.n145': 'Ready to take your business to the next digital level?',
  'svcPaginasVe.n146':
    'Tell us about your project and we will send you a personalized proposal with strategy, development, commercial integrations and a transparent budget. We work with companies all over Venezuela, 100% remote.',
  'svcPaginasVe.n147': 'First and Last Name',
  'svcPaginasVe.n148': 'Corporate Email',
  'svcPaginasVe.n149': 'Tell us about your project',
  'svcPaginasVe.n150': 'CDN distribution map with nodes in Latin America - Web design in Venezuela',
  'svcPaginasVe.n151': 'e.g. Carlos Pérez',
  'svcPaginasVe.n152':
    'What kind of project do you have in mind? Which city in Venezuela are you in? Do you need payment or delivery integrations?',

  // ── src/pages/servicios/agencia-diseno-web-caracas.astro ──
  'svcAgencia.n01': 'Web Design Agency in Caracas: High-Impact, Conversion-Driven Interfaces',
  'svcAgencia.n02':
    'We are a boutique web design and custom development agency. We craft digital experiences that transform brands: flawless UI/UX interfaces, extreme speed and SEO strategy integrated from the first Figma sketch to the final deployment.',
  'svcAgencia.n03': 'Start a Project with the Agency',
  'svcAgencia.n04': 'Our methodology',
  'svcAgencia.n05': 'frame',
  'svcAgencia.n06': 'vortex-design // Landing Page Wireframe',
  'svcAgencia.n07': 'Layers',
  'svcAgencia.n08': 'Hero Section',
  'svcAgencia.n09': 'Navbar',
  'svcAgencia.n10': 'Features Grid',
  'svcAgencia.n11': 'Card Component',
  'svcAgencia.n12': 'Testimonials',
  'svcAgencia.n13': 'Contact Form',
  'svcAgencia.n14': 'Footer',
  'svcAgencia.n15': 'Components: 12',
  'svcAgencia.n16': 'Styles: Tailwind',
  'svcAgencia.n17': 'Design canvas',
  'svcAgencia.n18': '12-column grid',
  'svcAgencia.n19': 'Auto layout',
  'svcAgencia.n20': 'Constraints',
  'svcAgencia.n21': 'Variants',
  'svcAgencia.n22': 'Properties',
  'svcAgencia.n23': 'Frame',
  'svcAgencia.n24': '1440px',
  'svcAgencia.n25': 'auto',
  'svcAgencia.n26': 'Palette',
  'svcAgencia.n27': 'Typography',
  'svcAgencia.n28': 'Inter Variable',
  'svcAgencia.n29': 'Light 300 · Regular 400 · Medium 500',
  'svcAgencia.n30': 'Export: .astro / .tsx',
  'svcAgencia.n31': 'Methodologies',
  'svcAgencia.n32':
    'From strategy to deployment. A process designed to produce measurable results.',
  'svcAgencia.n33': 'Phase 1',
  'svcAgencia.n34': 'Approx. duration: 1 week',
  'svcAgencia.n35': 'Strategy and UI/UX — Prototyping in Figma',
  'svcAgencia.n36':
    'We research your industry, analyze your competitors in Caracas and define the ideal information architecture. We create wireframes and interactive prototypes in Figma with the full visual hierarchy, navigation flow and responsive design for mobile, tablet and desktop. Every design decision is backed by conversion and usability principles.',
  'svcAgencia.n37': 'Competitive research & benchmark',
  'svcAgencia.n38': 'High-fidelity wireframes',
  'svcAgencia.n39': 'Navigable interactive prototype',
  'svcAgencia.n40': 'Design system (colors, typography, components)',
  'svcAgencia.n41': 'Phase 2',
  'svcAgencia.n42': 'Approx. duration: 2-3 weeks',
  'svcAgencia.n43': 'High-Performance Development (Astro + React)',
  'svcAgencia.n44':
    'We turn the prototypes into clean, ultra-fast code with Astro, React and Tailwind CSS. We implement subtle animations, instant page transitions and progressive image loading. Every component is built with strict TypeScript, ARIA accessibility and Core Web Vitals optimization.',
  'svcAgencia.n45': 'Component-based development',
  'svcAgencia.n46': 'Islands Architecture (zero unnecessary JS)',
  'svcAgencia.n47': 'Image and font optimization',
  'svcAgencia.n48': 'Responsive testing on 20+ devices',
  'svcAgencia.n49': 'Phase 3',
  'svcAgencia.n50': 'SEO Optimization and Launch',
  'svcAgencia.n51':
    'Before launch, we audit every page with professional tools: meta tags, Schema.org structured data, Open Graph, robots.txt file, XML sitemap and Lighthouse performance. We deploy on Vercel with automated SSL and continuous monitoring. Your website goes out into the world at maximum speed and with the best possible positioning.',
  'svcAgencia.n52': 'Complete technical SEO (meta tags, Schema, OG)',
  'svcAgencia.n53': 'Optimized Core Web Vitals (Lighthouse 95+)',
  'svcAgencia.n54': 'Deploy on Vercel Edge + SSL + CDN',
  'svcAgencia.n55': 'Google Search Console + Analytics configured',
  'svcAgencia.n56': 'Services',
  'svcAgencia.n57': 'Everything you need to shine online',
  'svcAgencia.n58': 'palette',
  'svcAgencia.n59': 'UI/UX Design',
  'svcAgencia.n60':
    'Modern, intuitive, user-centered interfaces. Figma prototyping, design systems and usability testing before writing a single line of code.',
  'svcAgencia.n61': 'code',
  'svcAgencia.n62': 'Web Development',
  'svcAgencia.n63':
    'Corporate sites, landing pages and web platforms with Astro, React, Next.js and the most modern Jamstack stack. Loads in milliseconds with native SEO.',
  'svcAgencia.n64': 'trending_up',
  'svcAgencia.n65': 'SEO Strategy',
  'svcAgencia.n66':
    'Technical audit, local keyword research in Caracas, on-page optimization, structured data and integrated Google My Business.',
  'svcAgencia.n67': 'speed',
  'svcAgencia.n68': 'Performance Optimization',
  'svcAgencia.n69':
    'We transform slow sites into ultra-fast experiences. Core Web Vitals, asset compression, lazy loading and global CDN.',
  'svcAgencia.n70': 'smartphone',
  'svcAgencia.n71': 'PWAs and Web Apps',
  'svcAgencia.n72':
    'Progressive web apps with offline capabilities, push notifications and a native app experience without going through app stores.',
  'svcAgencia.n73': 'support',
  'svcAgencia.n74': 'Maintenance and Support',
  'svcAgencia.n75':
    'Monthly maintenance plans with updates, backups, 24/7 monitoring and priority support via Slack or WhatsApp.',
  'svcAgencia.n76': 'UI/UX Design',
  'svcAgencia.n77': 'Every pixel counts. We design experiences that captivate and convert.',
  'svcAgencia.n78':
    'Our design process starts with in-depth research of your audience in Caracas. We define your brand\'s personality, create moodboards, design reusable component systems and prototype every interaction. We do not design to look pretty: we design so your business sells more.',
  'svcAgencia.n79': 'check_circle',
  'svcAgencia.n80': 'Interactive Figma prototypes with client feedback',
  'svcAgencia.n81': 'Design system with reusable components (Design System)',
  'svcAgencia.n82': 'Usability testing and adjustments based on real behavior',
  'svcAgencia.n83': 'Design System Tokens',
  'svcAgencia.n84': '--color-primary: #6366f1',
  'svcAgencia.n85': '--color-surface: #000000',
  'svcAgencia.n86': '--font-display: \'Inter Variable\'',
  'svcAgencia.n87': '--radius-sm: 4px',
  'svcAgencia.n88': '--radius-md: 8px',
  'svcAgencia.n89': '--spacing-grid: 8px',
  'svcAgencia.n90': 'design-system // vortex-tokens',
  'svcAgencia.n91': 'v1.0',
  'svcAgencia.n92': 'Colors',
  'svcAgencia.n93': 'Inter',
  'svcAgencia.n94': 'Light · Regular · Medium · Semibold',
  'svcAgencia.n95': 'Spacing',
  'svcAgencia.n96': 'Borders',
  'svcAgencia.n97': 'Why Vortex',
  'svcAgencia.n98': 'We are not a template agency',
  'svcAgencia.n99': 'Custom Design',
  'svcAgencia.n100': 'Zero templates. Every project is unique.',
  'svcAgencia.n101':
    'We do not buy WordPress themes or use visual builders. Every line of code and every pixel is designed and developed from scratch for your brand. Your website will be as unique as your business.',
  'svcAgencia.n102': 'Direct Communication',
  'svcAgencia.n103': 'You talk to the team that builds',
  'svcAgencia.n104':
    'No middlemen or account managers translating messages. You work directly with the designers and developers building your project. Agile communication via Slack or WhatsApp with real-time responses.',
  'svcAgencia.n105': 'Projects delivered',
  'svcAgencia.n106': 'Lighthouse SEO',
  'svcAgencia.n107': '48h',
  'svcAgencia.n108': 'Response time',
  'svcAgencia.n109': '<1s',
  'svcAgencia.n110': 'Load time',
  'svcAgencia.n111': 'Frequently asked questions about the agency',
  'svcAgencia.n112': 'What is the design process like with you?',
  'svcAgencia.n113': 'expand_more',
  'svcAgencia.n114': 'We start with a',
  'svcAgencia.n115': 'discovery meeting',
  'svcAgencia.n116': 'to understand your business, audience and goals. Then we create a',
  'svcAgencia.n117': 'creative brief',
  'svcAgencia.n118':
    'with the visual direction and information architecture. We design the wireframes and prototypes in Figma and review them with you in iterative feedback sessions. Once the design is approved, we move on to development. The whole process is transparent and collaborative — you see the progress in real time.',
  'svcAgencia.n119': 'Do you deliver Figma prototypes before coding?',
  'svcAgencia.n120':
    'Yes, absolutely. We never write a line of code without the complete design approved in Figma first. This includes',
  'svcAgencia.n121': 'interactive prototypes',
  'svcAgencia.n122':
    'with navigation between screens, animations and states (hover, active, loading, error). This way we guarantee that the final result is exactly what you expect, with no surprises or costly rework.',
  'svcAgencia.n123': 'Do you work with brands that already have a visual identity?',
  'svcAgencia.n124':
    'Of course. If you already have an established brand with a brand book, corporate colors, typography and logo,',
  'svcAgencia.n125': 'we work on top of those assets',
  'svcAgencia.n126':
    'to create a website that is a natural extension of your brand. If you need to refresh your identity or create one from scratch, we also offer strategic branding services.',
  'svcAgencia.n127': 'How do you guarantee that the website helps to sell?',
  'svcAgencia.n128': 'Every section of your website is designed with a',
  'svcAgencia.n129': 'conversion purpose',
  'svcAgencia.n130':
    'specific purpose. We apply color psychology principles, visual hierarchy, persuasive copywriting and strategically placed calls to action. We also integrate analytics tools to measure visitor behavior and make adjustments based on real data. A Vortex website is not a digital brochure: it is a customer acquisition machine.',
  'svcAgencia.n131': 'Do you offer support after launching the website?',
  'svcAgencia.n132': 'Yes. All our projects include',
  'svcAgencia.n133': '3 months of post-launch support',
  'svcAgencia.n134':
    'for adjustments, fixes and stabilization. After that we offer monthly maintenance plans covering: security updates, performance monitoring, backups, continuous SEO optimization and priority support via Slack/WhatsApp. We can also help you create new content, add sections or scale the platform as your business grows.',
  'svcAgencia.n135': 'Let\'s work together',
  'svcAgencia.n136': 'Ready to transform your digital presence?',
  'svcAgencia.n137':
    'Tell us about your project and we will prepare an agency proposal with strategy, design, development and a transparent budget. No strings attached.',
  'svcAgencia.n138': 'First and Last Name',
  'svcAgencia.n139': 'Corporate Email',
  'svcAgencia.n140': 'Tell us about your project',
  'svcAgencia.n141': 'Book a Strategy Consultation',
  'svcAgencia.n142': 'Figma-style UI UX design editor - Web design agency in Caracas',
  'svcAgencia.n143': 'e.g. Carlos Pérez',
  'svcAgencia.n144':
    'What kind of project do you have in mind? What is your industry? Do you have an estimated budget or an ideal deadline?',

  // ── src/pages/servicios/desarrollo-web-caracas.astro ──
  'svcDevCaracas.n01': 'Web Development in Caracas: Custom Software Engineering',
  'svcDevCaracas.n02':
    'We build progressive web applications, robust API integrations and headless platforms that scale with your business. Astro, React, Next.js and Supabase — the ultimate stack for companies that demand performance.',
  'svcDevCaracas.n03': 'Request a Quote for a Technical Solution',
  'svcDevCaracas.n04': 'See solutions',
  'svcDevCaracas.n05': 'terminal',
  'svcDevCaracas.n06': 'vortex-api-server // build:production',
  'svcDevCaracas.n07': 'api/endpoints.ts',
  'svcDevCaracas.n08': 'components/',
  'svcDevCaracas.n09': 'db/schema.ts',
  'svcDevCaracas.n10': 'import',
  'svcDevCaracas.n11': 'from',
  'svcDevCaracas.n12': '\'../db/client\'',
  'svcDevCaracas.n13': '\'@vortex/api\'',
  'svcDevCaracas.n14': '// RESTful endpoint with validation and rate limiting',
  'svcDevCaracas.n15': 'export const',
  'svcDevCaracas.n16': '= defineEndpoint(',
  'svcDevCaracas.n17': 'async',
  'svcDevCaracas.n18': '({ req, res })',
  'svcDevCaracas.n19': 'const',
  'svcDevCaracas.n20': 'await',
  'svcDevCaracas.n21': 'supabase',
  'svcDevCaracas.n22': '\'clientes\'',
  'svcDevCaracas.n23': 'select',
  'svcDevCaracas.n24': 'limit',
  'svcDevCaracas.n25': 'return',
  'svcDevCaracas.n26': 'res',
  'svcDevCaracas.n27': 'status',
  'svcDevCaracas.n28': 'json',
  'svcDevCaracas.n29': '({ data, meta: { cached:',
  'svcDevCaracas.n30': 'true',
  'svcDevCaracas.n31': ', latency:',
  'svcDevCaracas.n32': '12ms',
  'svcDevCaracas.n33': 'Response Log',
  'svcDevCaracas.n34': '200 OK',
  'svcDevCaracas.n35': 'GET /api/clientes',
  'svcDevCaracas.n36': '12ms · 1420 rows',
  'svcDevCaracas.n37': '201 Created',
  'svcDevCaracas.n38': 'POST /api/contacto',
  'svcDevCaracas.n39': '8ms · payload 2.4KB',
  'svcDevCaracas.n40': '304 Not Modified',
  'svcDevCaracas.n41': 'GET /api/productos',
  'svcDevCaracas.n42': '2ms · cached',
  'svcDevCaracas.n43': 'Uptime: 99.99%',
  'svcDevCaracas.n44': 'SSL · WAF · Rate Limited',
  'svcDevCaracas.n45': 'Advanced Solutions',
  'svcDevCaracas.n46': 'Modern software architecture for companies that need more than a website.',
  'svcDevCaracas.n47': 'Progressive Web Apps (PWA)',
  'svcDevCaracas.n48':
    'We turn your website into a native app experience with service workers, offline cache, push notifications and instant loading. Your users in Caracas access your platform even without an internet connection.',
  'svcDevCaracas.n49': 'Installable on home screen',
  'svcDevCaracas.n50': 'Background synchronization',
  'svcDevCaracas.n51': '90% less data than a native app',
  'svcDevCaracas.n52': 'API and CRM integrations',
  'svcDevCaracas.n53':
    'We connect your website with the systems you already use: CRMs such as Salesforce or HubSpot, payment gateways, accounting ERP, inventory systems and any REST or GraphQL API. Automated workflows that eliminate manual processes.',
  'svcDevCaracas.n54': 'Real-time webhooks',
  'svcDevCaracas.n55': 'OAuth 2.0 / JWT authentication',
  'svcDevCaracas.n56': 'Swagger/OpenAPI documentation',
  'svcDevCaracas.n57': 'Headless Databases',
  'svcDevCaracas.n58':
    'Decoupled architecture with Supabase (PostgreSQL), Airtable or MongoDB. Your team accesses and edits data from a friendly panel while the frontend consumes the information via API. Horizontal scalability without limits.',
  'svcDevCaracas.n59': 'Realtime subscriptions (WebSockets)',
  'svcDevCaracas.n60': 'Built-in Row Level Security',
  'svcDevCaracas.n61': 'Automated migrations',
  'svcDevCaracas.n62': 'Technical Stack',
  'svcDevCaracas.n63': 'The stack used by the world\'s most innovative startups.',
  'svcDevCaracas.n64':
    'Astro for extreme speed, React for interactivity, Supabase as a scalable backend and Vercel for global deployments. Every technology is chosen for its performance, security and ecosystem. We do not use legacy code or unnecessary dependencies.',
  'svcDevCaracas.n65': 'check_circle',
  'svcDevCaracas.n66': 'Astro + React Islands Architecture',
  'svcDevCaracas.n67': 'Strict TypeScript across the entire codebase',
  'svcDevCaracas.n68': 'Automated testing (Vitest + Playwright)',
  'svcDevCaracas.n69': 'CI/CD with automatic deploys from GitHub',
  'svcDevCaracas.n70': '// Architecture',
  'svcDevCaracas.n71': 'client → CDN → Edge',
  'svcDevCaracas.n72': 'Astro SSR + API Routes',
  'svcDevCaracas.n73': 'Supabase PostgreSQL',
  'svcDevCaracas.n74': 'WebSocket Realtime',
  'svcDevCaracas.n75': 'architecture // vortex-stack',
  'svcDevCaracas.n76': 'Production',
  'svcDevCaracas.n77': 'Frontend',
  'svcDevCaracas.n78': 'Astro + React + Tailwind',
  'svcDevCaracas.n79': 'Backend',
  'svcDevCaracas.n80': 'Supabase + API Routes',
  'svcDevCaracas.n81': 'Deployment',
  'svcDevCaracas.n82': 'Vercel Edge Network',
  'svcDevCaracas.n83': 'Database',
  'svcDevCaracas.n84': 'PostgreSQL / Airtable',
  'svcDevCaracas.n85': 'data-flow // api-pipeline',
  'svcDevCaracas.n86': 'devices',
  'svcDevCaracas.n87': 'Client',
  'svcDevCaracas.n88': 'HTTPS',
  'svcDevCaracas.n89': 'cloud',
  'svcDevCaracas.n90': 'Edge CDN',
  'svcDevCaracas.n91': '~12ms',
  'svcDevCaracas.n92': 'dns',
  'svcDevCaracas.n93': 'API Server',
  'svcDevCaracas.n94': 'database',
  'svcDevCaracas.n95': 'PostgreSQL',
  'svcDevCaracas.n96': 'Request',
  'svcDevCaracas.n97': 'Cache',
  'svcDevCaracas.n98': 'Process',
  'svcDevCaracas.n99': 'Query',
  'svcDevCaracas.n100': 'Response',
  'svcDevCaracas.n101': 'Data Architecture',
  'svcDevCaracas.n102': 'Real-time data flow. No bottlenecks.',
  'svcDevCaracas.n103':
    'We design systems where data travels from the client to the database and back in milliseconds. WebSockets for live updates, smart caching at the edge and optimized queries with custom indexes. Your team always sees the most recent information.',
  'svcDevCaracas.n104': 'Realtime subscriptions with Supabase',
  'svcDevCaracas.n105': 'Distributed cache on Vercel Edge',
  'svcDevCaracas.n106': 'Rate limiting and DDoS protection',
  'svcDevCaracas.n107': 'Technical Infrastructure',
  'svcDevCaracas.n108': 'Security, monitoring and enterprise scalability',
  'svcDevCaracas.n109': 'Security',
  'svcDevCaracas.n110': 'Multi-layer protection',
  'svcDevCaracas.n111':
    'Automated SSL, Web Application Firewall, rate limiting, JWT authentication and Row Level Security in the database. Every project includes a vulnerability audit before going to production.',
  'svcDevCaracas.n112': 'Monitoring',
  'svcDevCaracas.n113': '24/7 observability',
  'svcDevCaracas.n114':
    'Real-time dashboards with performance metrics, errors, API usage and response time. Automatic alerts if anything deviates from normal parameters.',
  'svcDevCaracas.n115': '> npm run deploy --production',
  'svcDevCaracas.n116': '[VORTEX CI/CD] Running test suite...',
  'svcDevCaracas.n117': '✔ 42 tests passed (2.1s)',
  'svcDevCaracas.n118': '✔ Build optimized · 98 Lighthouse',
  'svcDevCaracas.n119': '> Deploying to 100+ edge regions...',
  'svcDevCaracas.n120': '✔ Deployment complete · v2.4.1',
  'svcDevCaracas.n121': 'API Response Times (p50)',
  'svcDevCaracas.n122': '18ms avg',
  'svcDevCaracas.n123': 'p50: 18ms · p95: 42ms · p99: 120ms',
  'svcDevCaracas.n124': 'Technical FAQ',
  'svcDevCaracas.n125': 'Frequently asked questions about development',
  'svcDevCaracas.n126': 'What technologies do you use for web development?',
  'svcDevCaracas.n127': 'expand_more',
  'svcDevCaracas.n128': 'Our main stack is',
  'svcDevCaracas.n129': 'Astro + React + TypeScript',
  'svcDevCaracas.n130': 'for the frontend,',
  'svcDevCaracas.n131': 'Supabase (PostgreSQL)',
  'svcDevCaracas.n132': 'as database and backend, and',
  'svcDevCaracas.n133':
    'for global deployment. For projects that require server-side rendering we use',
  'svcDevCaracas.n134':
    '. We also integrate WebSockets for real-time features, job queues with Redis when asynchronous processing is needed, and file storage on CDN with automatic image optimization.',
  'svcDevCaracas.n135': 'How do you handle data and security?',
  'svcDevCaracas.n136': 'We implement',
  'svcDevCaracas.n137': 'Row Level Security (RLS)',
  'svcDevCaracas.n138':
    'directly in PostgreSQL — each user only sees the data that belongs to them. Authentication is handled with',
  'svcDevCaracas.n139': 'JWT + OAuth 2.0',
  'svcDevCaracas.n140':
    '(Google, GitHub, email). All connections travel over HTTPS with automated SSL. We also apply rate limiting, server-side data validation and automated security auditing before every deploy.',
  'svcDevCaracas.n141': 'Can it be integrated with my CRM or current system?',
  'svcDevCaracas.n142':
    'Yes. We design custom integrations with any system that exposes a REST or GraphQL API. We have connected platforms with',
  'svcDevCaracas.n143': 'Salesforce, HubSpot, SAP, Venezuelan accounting systems (Seniat, VAT)',
  'svcDevCaracas.n144':
    ', payment gateways such as PayPal, Stripe and MercadoPago, and email services such as SendGrid and Resend. We can also build bidirectional webhooks for real-time synchronization.',
  'svcDevCaracas.n145': 'What advantages does a PWA have over a native app?',
  'svcDevCaracas.n146': 'PWAs offer',
  'svcDevCaracas.n147': '90% lower development cost',
  'svcDevCaracas.n148':
    'than a native app, update instantly (with no app store approval), work offline with service workers, weigh less than 5MB and install directly from the browser. For most enterprise use cases —catalogs, admin panels, service platforms— a PWA outperforms the performance and experience of a native app. If you need deep access to device hardware (bluetooth, specific sensors), we evaluate a native or hybrid app.',
  'svcDevCaracas.n149': 'Do you offer post-launch maintenance and support?',
  'svcDevCaracas.n150': 'Yes. All our projects include',
  'svcDevCaracas.n151': '3 months of technical support',
  'svcDevCaracas.n152':
    'post-launch for adjustments and stabilization. After that we offer monthly maintenance plans covering: dependency updates, 24/7 monitoring, database backups, performance optimization and priority support via Slack/WhatsApp. We can also add new features on demand with per-sprint budgets.',
  'svcDevCaracas.n153': 'Start your project',
  'svcDevCaracas.n154': 'Do you have a technical project in mind?',
  'svcDevCaracas.n155':
    'Tell us the technical details of your project and we will propose the ideal architecture. We reply in under 24 hours with a clear proposal and a transparent budget.',
  'svcDevCaracas.n156': 'First and Last Name',
  'svcDevCaracas.n157': 'Corporate Email',
  'svcDevCaracas.n158': 'Technical description of the project',
  'svcDevCaracas.n159': 'RESTful API console with TypeScript code - Web development in Caracas',
  'svcDevCaracas.n160': 'e.g. Carlos Pérez',
  'svcDevCaracas.n161':
    'What do you need to build? Which technologies do you prefer? Do you have integrations with other systems? Tell us everything technical.',

  // ── src/pages/servicios/desarrollo-web-astro-react-nextjs.astro ──
  'svcAstroStack.n01':
    'Websites of the future: Fast, secure and optimized for Google with modern stacks.',
  'svcAstroStack.n02':
    'Traditional web development based on heavy templates and overloaded monoliths is a thing of the past. In today\'s digital ecosystem, every millisecond of load time counts. If your website takes more than 2 seconds to respond, you are losing customers and Google positions.',
  'svcAstroStack.n03': 'Schedule a call',
  'svcAstroStack.n04': 'See technologies',
  'svcAstroStack.n05':
    'The Headless Approach: The best of both worlds. You do not have to give up the convenience of your current admin panel to have an ultra-fast website.',
  'svcAstroStack.n06': 'Self-managed Back-end',
  'svcAstroStack.n07':
    'We keep the robustness of platforms such as WordPress or Supabase so you can keep managing your content, blogs, products and clients with ease.',
  'svcAstroStack.n08': 'High-Performance Front-end',
  'svcAstroStack.n09':
    'We design and compile the visual interface using the most powerful frameworks of the modern market. The result is clean, static, optimized HTML code that flies.',
  'svcAstroStack.n10':
    'Our Primary Tech Stack. We choose the exact tool for each type of need, guaranteeing scalability and clean code.',
  'svcAstroStack.n11':
    'The ideal framework for corporate websites, conversion landings and editorial or lifestyle content blogs. Astro strips out all unnecessary JavaScript from the browser by default, generating static pages that achieve a perfect 100/100 score on Google PageSpeed. Heavy images and high-quality portfolios load instantly.',
  'svcAstroStack.n12': 'React & Next.js',
  'svcAstroStack.n13':
    'For interactive web applications, telemedicine platforms with real-time synchronization, custom CRM systems and high-scale e-commerce. With Next.js we implement server-side rendering (SSR) and advanced hybrid architectures, keeping the agility of a mobile application in a secure web environment.',
  'svcAstroStack.n14':
    'Styled to order from scratch. We do not buy generic templates. We write utility, optimized CSS so the interface is 100% responsive, consistent with your branding guidelines and extremely light on mobile devices.',
  'svcAstroStack.n15': 'Benefits of Jamstack Architecture with Vortex.',
  'svcAstroStack.n16': 'Instant Speed (Native SEO)',
  'svcAstroStack.n17':
    'By serving pre-rendered static files through a global network (CDN), Google\'s Core Web Vitals are optimized automatically, giving you a drastic advantage in organic positioning.',
  'svcAstroStack.n18': 'Bulletproof Security',
  'svcAstroStack.n19':
    'Since there is no database directly exposed on the Front-end, common attack vectors (such as SQL injections or traditional plugin hacks) are reduced to zero.',
  'svcAstroStack.n20': 'Smooth Mobile Experience',
  'svcAstroStack.n21':
    'We design mobile-first. The lightness of the code guarantees that the website responds without delays or blank screens, even on slow connections.',
  'svcAstroStack.n22': 'Reduced Infrastructure Costs',
  'svcAstroStack.n23':
    'Static websites consume a fraction of the resources of a traditional server, making it possible to handle thousands of simultaneous visits on modern deployment platforms such as Vercel without system crashes.',
  'svcAstroStack.n24': 'Automation and Smart Development',
  'svcAstroStack.n25': 'Automation and Smart Development.',
  'svcAstroStack.n26':
    'Our workflow is powered by local AI agents and continuous integration. This allows us to refactor code in real time, audit the security of every component and automate performance tests before each deployment. For you, this translates into delivery times up to 50% faster and a final product free of technical errors.',
  'svcAstroStack.n27': 'Ready to make the leap to modern web development? Let\'s talk',
  'svcAstroStack.n28': 'vortex-ci // pipeline-status',
  'svcAstroStack.n29': 'All checks passed',
  'svcAstroStack.n30': 'Build & Test — 12.4s',
  'svcAstroStack.n31': 'Lighthouse Audit — 100/100',
  'svcAstroStack.n32': 'Security Scan — 0 vulnerabilities',
  'svcAstroStack.n33': 'Deploy to Production',
  'svcAstroStack.n34': 'Frequently Asked Questions',
  'svcAstroStack.n35': 'Transparent information about our technologies and processes.',
  'svcAstroStack.n36': 'Start today',
  'svcAstroStack.n37': 'Scale your digital operations.',
  'svcAstroStack.n38':
    'Let\'s talk about your project. Tell us what you need to build with Astro, Next.js or Supabase and we will propose the ideal architecture.',
  'svcAstroStack.n39': 'Full Name',
  'svcAstroStack.n40': 'Corporate Email',
  'svcAstroStack.n41': 'Estimated Budget',
  'svcAstroStack.n42': 'Select a range',
  'svcAstroStack.n43': 'Less than $1,000 USD',
  'svcAstroStack.n44': '$1,000 - $3,000 USD',
  'svcAstroStack.n45': '$3,000 - $5,000 USD',
  'svcAstroStack.n46': '$5,000 - $10,000 USD',
  'svcAstroStack.n47': 'More than $10,000 USD',
  'svcAstroStack.n48': 'Tell us about your project',
  'svcAstroStack.n49': 'Send Proposal',
  'svcAstroStack.n50': 'Your data is protected. No spam, guaranteed.',
  'svcAstroStack.n51': 'E.g. Carlos Mendoza',
  'svcAstroStack.n52':
    'Describe your project scope, technologies of interest and business goals...',

  // ── src/pages/servicios/diseno-paginas-web-caracas.astro ──
  'svcPaginasCaracas.n01': 'Web Design in Caracas for High-Performance Companies',
  'svcPaginasCaracas.n02':
    'We build ultra-fast websites with Astro, React and Next.js. Native SEO optimization, enterprise-grade security and premium design that turns visitors into customers.',
  'svcPaginasCaracas.n03': 'Book a call',
  'svcPaginasCaracas.n04': 'See benefits',
  'svcPaginasCaracas.n05': 'lock',
  'svcPaginasCaracas.n06': 'https://yoursite.com · SSL Secured',
  'svcPaginasCaracas.n07': 'Core Web Vitals Pass',
  'svcPaginasCaracas.n08': 'speed',
  'svcPaginasCaracas.n09': 'Lighthouse 100',
  'svcPaginasCaracas.n10': 'devices',
  'svcPaginasCaracas.n11': 'Responsive',
  'svcPaginasCaracas.n12': 'bolt',
  'svcPaginasCaracas.n13': 'Loads in under 100ms · Instant first paint',
  'svcPaginasCaracas.n14': 'Key Metrics',
  'svcPaginasCaracas.n15': 'SEO Positioning',
  'svcPaginasCaracas.n16': 'Top 3 on Google Caracas',
  'svcPaginasCaracas.n17': 'Load Speed',
  'svcPaginasCaracas.n18': '0.8s average',
  'svcPaginasCaracas.n19': 'Conversion Rate',
  'svcPaginasCaracas.n20': '+35% vs templates',
  'svcPaginasCaracas.n21': 'Why choose us',
  'svcPaginasCaracas.n22':
    'We don\'t build templates. We design digital platforms that power your business in Caracas and worldwide.',
  'svcPaginasCaracas.n23': 'Extreme Load Speed',
  'svcPaginasCaracas.n24':
    'We use Astro and Jamstack to generate static sites that load in milliseconds. Google prioritizes fast pages: better Core Web Vitals, better organic positioning in Caracas.',
  'svcPaginasCaracas.n25': 'Integrated Technical SEO',
  'svcPaginasCaracas.n26':
    'Every page we design includes structured data, Open Graph tags, optimized meta descriptions and Schema.org LocalBusiness. Show up first on Google when people search for services in Caracas.',
  'svcPaginasCaracas.n27': 'Security and Scalability',
  'svcPaginasCaracas.n28':
    'We deploy on Vercel with automated SSL, DDoS protection and edge servers. Your corporate site runs on an architecture that scales automatically regardless of traffic.',
  'svcPaginasCaracas.n29': 'Modern Stack',
  'svcPaginasCaracas.n30': 'Next-generation technology for your website in Caracas.',
  'svcPaginasCaracas.n31':
    'Forget slow WordPress and visual builders that generate junk code. We build with Astro, Next.js and React — the same stack the world\'s largest tech companies use. Your website will load instantly on any device, even on 3G connections.',
  'svcPaginasCaracas.n32': 'check_circle',
  'svcPaginasCaracas.n33': 'Static generation + hybrid Server-Side Rendering',
  'svcPaginasCaracas.n34': 'Images optimized with WebP and native lazy loading',
  'svcPaginasCaracas.n35': 'Inline critical CSS for instant paint',
  'svcPaginasCaracas.n36': 'Minimal, deferred JavaScript (islands architecture)',
  'svcPaginasCaracas.n37': '<html lang="en">',
  'svcPaginasCaracas.n38': '<head>',
  'svcPaginasCaracas.n39': '<meta name="description" />',
  'svcPaginasCaracas.n40': '<script type="application/ld+json">',
  'svcPaginasCaracas.n41': '</head>',
  'svcPaginasCaracas.n42': '<body>',
  'svcPaginasCaracas.n43': '<header><nav /></header>',
  'svcPaginasCaracas.n44': '<main><section /></main>',
  'svcPaginasCaracas.n45': '<footer></footer>',
  'svcPaginasCaracas.n46': '</body>',
  'svcPaginasCaracas.n47': '</html>',
  'svcPaginasCaracas.n48': 'tech-stack // vortex-architecture',
  'svcPaginasCaracas.n49': 'Production ready',
  'svcPaginasCaracas.n50': 'Framework',
  'svcPaginasCaracas.n51': 'Astro + React',
  'svcPaginasCaracas.n52': 'Styling',
  'svcPaginasCaracas.n53': 'Hosting',
  'svcPaginasCaracas.n54': 'Vercel Edge',
  'svcPaginasCaracas.n55': 'Database',
  'svcPaginasCaracas.n56': 'Supabase / PostgreSQL',
  'svcPaginasCaracas.n57': 'responsive-design // device-preview',
  'svcPaginasCaracas.n58': 'Mobile First',
  'svcPaginasCaracas.n59': 'Mobile First design · 100% responsive on all devices',
  'svcPaginasCaracas.n60': 'User Experience',
  'svcPaginasCaracas.n61': 'Built to convert. Optimized for mobile.',
  'svcPaginasCaracas.n62':
    '70% of users in Caracas browse from mobile. We design every page with a Mobile First approach, making sure your site looks and works perfectly on any screen. Readable typography, touch-friendly buttons and intuitive navigation to maximize retention and conversion.',
  'svcPaginasCaracas.n63': 'Responsive design tested on 20+ devices',
  'svcPaginasCaracas.n64': 'Intuitive navigation with micro-interactions',
  'svcPaginasCaracas.n65': 'Forms optimized for conversion',
  'svcPaginasCaracas.n66': 'Enterprise Infrastructure',
  'svcPaginasCaracas.n67': 'your website in the best hands',
  'svcPaginasCaracas.n68': 'Edge Network',
  'svcPaginasCaracas.n69': 'Hosting on Vercel Edge Network',
  'svcPaginasCaracas.n70':
    'Your website is deployed across more than 100 servers worldwide. Visitors from Caracas get your site from the nearest edge server, guaranteeing instant loads at any time of day.',
  'svcPaginasCaracas.n71': '99.99% SLA',
  'svcPaginasCaracas.n72': 'Real-Time Monitoring and Analytics',
  'svcPaginasCaracas.n73':
    'Live dashboard with traffic, performance and user behavior metrics. We continuously optimize your site based on real data, not guesses.',
  'svcPaginasCaracas.n74': '> vercel deploy --prod',
  'svcPaginasCaracas.n75': '[VORTEX DEPLOY] Building project...',
  'svcPaginasCaracas.n76': '✔ Build completed in 12.4s',
  'svcPaginasCaracas.n77': '✔ Deployed to 100+ edge regions',
  'svcPaginasCaracas.n78': '> SSL certificate issued automatically',
  'svcPaginasCaracas.n79': '✔ HTTPS ready · A+ rating',
  'svcPaginasCaracas.n80': 'Global Performance',
  'svcPaginasCaracas.n81': '0.12s latency',
  'svcPaginasCaracas.n82': 'Vercel Edge: 0.12s avg latency Caracas',
  'svcPaginasCaracas.n83': 'Frequently Asked Questions',
  'svcPaginasCaracas.n84': 'How long does it take to develop a professional website?',
  'svcPaginasCaracas.n85': 'expand_more',
  'svcPaginasCaracas.n86':
    'Depending on complexity, a corporate website can be ready in 2 to 4 weeks. This includes UI/UX design, development, SEO integration, performance testing and deployment. More complex projects with admin panels or integrations can take 4 to 8 weeks.',
  'svcPaginasCaracas.n87': 'Do you offer hosting and maintenance?',
  'svcPaginasCaracas.n88':
    'Yes. We deploy your site on Vercel (enterprise hosting with a global CDN) and include monthly technical maintenance: security updates, performance monitoring, backups and continuous optimization. We also offer content plans if you need to update copy or add sections periodically.',
  'svcPaginasCaracas.n89': 'Can I manage the content myself?',
  'svcPaginasCaracas.n90':
    'Absolutely. We integrate simple admin panels (Headless CMS or Keystatic) so you can edit text, images and publish blog posts without technical knowledge. You keep full control of your content.',
  'svcPaginasCaracas.n91': 'Why Astro and not WordPress?',
  'svcPaginasCaracas.n92':
    'WordPress generates dynamic pages that load slowly and are vulnerable to attacks. Astro generates ultra-fast static HTML deployed to a CDN. Result: 10x more speed, superior security (no exposed database), better SEO and lower hosting cost. Ideal for companies that need professional performance.',
  'svcPaginasCaracas.n93': 'Start your project',
  'svcPaginasCaracas.n94': 'Ready to have the website your company deserves?',
  'svcPaginasCaracas.n95':
    'Tell us about your project and we\'ll send you a tailored proposal with technology architecture, UX/SEO design and a transparent budget.',
  'svcPaginasCaracas.n96': 'First and Last Name',
  'svcPaginasCaracas.n97': 'Corporate Email',
  'svcPaginasCaracas.n98': 'Tell us about your project',
  'svcPaginasCaracas.n99': 'Request a Quote',
  'svcPaginasCaracas.n100': 'Browser mockup with PageSpeed metrics - Web design in Caracas',
  'svcPaginasCaracas.n101': 'e.g. John Smith',
  'svcPaginasCaracas.n102':
    'What type of website do you need? What is your industry? Do you have an estimated deadline?',

  // ── src/pages/servicios/programador-web-caracas.astro ──
  'svcProgramador.n01':
    'Web Developer in Caracas: Senior Full-Stack Development and High-Performance Code',
  'svcProgramador.n02':
    'Senior full-stack developer specialized in Astro, React, Next.js, Node.js and Supabase. I write clean, optimized and scalable code. I work white-label with agencies and directly with companies that need high-level web engineering in Caracas.',
  'svcProgramador.n03': 'Hire a Senior Developer',
  'svcProgramador.n04': 'See the tech stack',
  'svcProgramador.n05': 'terminal',
  'svcProgramador.n06': 'vortex-dev // git:main',
  'svcProgramador.n07': 'git log --oneline',
  'svcProgramador.n08': 'main',
  'svcProgramador.n09': '$ git push origin main',
  'svcProgramador.n10': 'Enumerating objects: 42, done.',
  'svcProgramador.n11': 'Counting objects: 100% (42/42), done.',
  'svcProgramador.n12': '$ npm run test',
  'svcProgramador.n13': '[VORTEX CI/CD] Running test suite...',
  'svcProgramador.n14': '✔ 48 tests passed (2.3s)',
  'svcProgramador.n15': '✔ Coverage: 96%',
  'svcProgramador.n16': '$ npm run build',
  'svcProgramador.n17': '[1/4] Resolving dependencies...',
  'svcProgramador.n18': '[2/4] TypeScript compilation...',
  'svcProgramador.n19': '✔ No type errors found',
  'svcProgramador.n20': '✔ Build optimized · 98 Lighthouse',
  'svcProgramador.n21': 'feature/auth',
  'svcProgramador.n22': '3e8f2a1',
  'svcProgramador.n23': 'Implement JWT + RLS security layer',
  'svcProgramador.n24': 'a7c3d9e',
  'svcProgramador.n25': 'Merge pull request #42',
  'svcProgramador.n26': 'main · up-to-date · deploy ready',
  'svcProgramador.n27': 'Developer Stats',
  'svcProgramador.n28': 'Production commits',
  'svcProgramador.n29': 'Projects delivered',
  'svcProgramador.n30': '2.3s',
  'svcProgramador.n31': 'Average test suite',
  'svcProgramador.n32': 'Coverage',
  'svcProgramador.n33': 'Code quality',
  'svcProgramador.n34': 'A+',
  'svcProgramador.n35': 'Tech Stack',
  'svcProgramador.n36':
    'Advanced frontend, solid backend and AI automation. The whole modern stack in a single developer.',
  'svcProgramador.n37': 'Advanced Frontend',
  'svcProgramador.n38':
    'Astro, React 19, Next.js 15, strict TypeScript, Tailwind CSS, Framer Motion, React Query, Zustand. Atomic component architecture, Server Components, streaming SSR and maximum Core Web Vitals optimization.',
  'svcProgramador.n39': 'Islands Architecture',
  'svcProgramador.n40': 'Server Components / RSC',
  'svcProgramador.n41': 'Lighthouse 100 optimization',
  'svcProgramador.n42': 'Backend and Databases',
  'svcProgramador.n43':
    'Node.js, Supabase (PostgreSQL), API Routes in Astro/Next.js, Prisma ORM, Drizzle, Redis, WebSockets, JWT/OAuth authentication, Row Level Security, automated migrations and Realtime subscriptions.',
  'svcProgramador.n44': 'REST + GraphQL APIs',
  'svcProgramador.n45': 'Real-time WebSockets',
  'svcProgramador.n46': 'Row Level Security (RLS)',
  'svcProgramador.n47': 'Automation and AI',
  'svcProgramador.n48':
    'CI/CD with GitHub Actions, automated testing (Vitest, Playwright), continuous deployments to Vercel, AI tooling integration (Cursor, Claude, GPT) to speed up development without sacrificing quality. Infrastructure as code.',
  'svcProgramador.n49': 'CI/CD + automated deployment',
  'svcProgramador.n50': 'Testing (Vitest + Playwright)',
  'svcProgramador.n51': 'AI-assisted development',
  'svcProgramador.n52': 'White Label',
  'svcProgramador.n53':
    'Agencies: expand your delivery capacity without hiring permanent employees.',
  'svcProgramador.n54':
    'I work as a white-label developer for web design agencies, digital marketing agencies and tech consultancies in Caracas and across Venezuela. You sell the project, I build the solution. All code is delivered under your brand, with the quality and speed your clients expect.',
  'svcProgramador.n55': 'check_circle',
  'svcProgramador.n56': 'Code delivered under your brand and repository',
  'svcProgramador.n57': 'Direct communication with no technical middlemen',
  'svcProgramador.n58': 'Scale your capacity on demand with no employment risk',
  'svcProgramador.n59': 'white-label-agreement',
  'svcProgramador.n60': '- You sell, I build',
  'svcProgramador.n61': '- 100% transferred code',
  'svcProgramador.n62': '- No Vortex branding',
  'svcProgramador.n63': '- End-client repository',
  'svcProgramador.n64': '- Post-delivery support',
  'svcProgramador.n65': 'white-label // agency-partner',
  'svcProgramador.n66': 'B2B Model',
  'svcProgramador.n67': 'Source Code',
  'svcProgramador.n68': '100% transferred',
  'svcProgramador.n69': 'No hidden dependencies',
  'svcProgramador.n70': 'Branding',
  'svcProgramador.n71': '100% yours',
  'svcProgramador.n72': 'No credits or logos',
  'svcProgramador.n73': 'Repository',
  'svcProgramador.n74': 'Your own GitHub/GitLab',
  'svcProgramador.n75': 'Commits from your account',
  'svcProgramador.n76': 'Support',
  'svcProgramador.n77': 'Post-delivery',
  'svcProgramador.n78': '3 months included',
  'svcProgramador.n79': 'Work Methodology',
  'svcProgramador.n80': 'Clean code, fast deliveries, direct communication',
  'svcProgramador.n81': 'Requirements and Plan',
  'svcProgramador.n82':
    'We define scope, technologies, timeline and deliverables. I give you an accurate estimate with a breakdown of hours and cost.',
  'svcProgramador.n83': 'Iterative Development',
  'svcProgramador.n84':
    'Daily commits, feature branches, PRs with code review. You see progress in real time in your GitHub/GitLab repository.',
  'svcProgramador.n85': 'Testing and QA',
  'svcProgramador.n86':
    'Automated test suite (unit, integration, e2e), strict linting and security audit before every deploy.',
  'svcProgramador.n87': 'Delivery and Support',
  'svcProgramador.n88':
    'Complete source code, technical documentation and 3 months of post-delivery support for adjustments and stabilization.',
  'svcProgramador.n89': 'Daily Tools',
  'svcProgramador.n90': 'The technical arsenal of a senior developer',
  'svcProgramador.n91': 'code',
  'svcProgramador.n92': 'VS Code',
  'svcProgramador.n93': 'account_tree',
  'svcProgramador.n94': 'Git/GitHub',
  'svcProgramador.n95': 'play_circle',
  'svcProgramador.n96': 'Vitest',
  'svcProgramador.n97': 'deployed_code',
  'svcProgramador.n98': 'database',
  'svcProgramador.n99': 'Supabase',
  'svcProgramador.n100': 'psychology',
  'svcProgramador.n101': 'Cursor AI',
  'svcProgramador.n102': 'test_tube',
  'svcProgramador.n103': 'Playwright',
  'svcProgramador.n104': 'dns',
  'svcProgramador.n105': 'Docker',
  'svcProgramador.n106': 'webhook',
  'svcProgramador.n107': 'WebSockets',
  'svcProgramador.n108': 'frame',
  'svcProgramador.n109': 'Figma API',
  'svcProgramador.n110': 'cloud',
  'svcProgramador.n111': 'CI/CD',
  'svcProgramador.n112': 'Technical FAQ',
  'svcProgramador.n113': 'Questions about hiring and development',
  'svcProgramador.n114': 'How many years of experience do you have and in which technologies?',
  'svcProgramador.n115': 'expand_more',
  'svcProgramador.n116':
    'I have proven experience building professional web applications with the modern stack:',
  'svcProgramador.n117':
    'Astro, React, Next.js, TypeScript, Node.js, Supabase (PostgreSQL) and Tailwind CSS',
  'svcProgramador.n118':
    '. I master Jamstack architecture, Server Components, REST/GraphQL APIs, WebSockets, JWT/OAuth authentication, Row Level Security, CI/CD, automated testing and Vercel deployments. Every project I deliver goes through performance, security and accessibility testing before going live.',
  'svcProgramador.n119': 'Do you work white-label for other agencies?',
  'svcProgramador.n120':
    'Yes, it is one of my main services. If you run a web design, digital marketing or tech consultancy agency, you can',
  'svcProgramador.n121': 'sell my services as your own',
  'svcProgramador.n122':
    '. All code is delivered under your brand, in your GitHub/GitLab repository, with no Vortex logo or reference. You keep the relationship with the end client, I handle the engineering. It is the most efficient way to scale your delivery capacity without hiring permanent employees.',
  'svcProgramador.n123': 'What methodologies and tools do you use to code?',
  'svcProgramador.n124': 'I use',
  'svcProgramador.n125': 'Git Flow',
  'svcProgramador.n126': 'with feature branches and Pull Requests with code review. I develop in',
  'svcProgramador.n127': 'VS Code + Cursor',
  'svcProgramador.n128': 'with strict TypeScript, ESLint and Prettier. Automated tests with',
  'svcProgramador.n129': '(unit) and',
  'svcProgramador.n130': '(e2e). CI/CD with',
  'svcProgramador.n131': 'GitHub Actions',
  'svcProgramador.n132':
    'that runs tests, linting and build on every push. Automatic deployments to',
  'svcProgramador.n133':
    'with preview URLs for every PR. Technical documentation in the code itself (JSDoc) and a README per project.',
  'svcProgramador.n134': 'How are support and code delivery handled?',
  'svcProgramador.n135': 'The code is delivered in full through',
  'svcProgramador.n136': 'GitHub or GitLab',
  'svcProgramador.n137':
    '(in your repository if we work white-label). It includes: commit history, technical documentation, deploy instructions and environment variables. For post-delivery support you have',
  'svcProgramador.n138': '3 months included',
  'svcProgramador.n139':
    'for adjustments, fixes and technical questions. Communication runs through Slack or WhatsApp with guaranteed responses in under 24 business hours.',
  'svcProgramador.n140': 'Do you handle complex API integrations and WebSockets?',
  'svcProgramador.n141': 'Yes. I have integrated systems with',
  'svcProgramador.n142': 'Salesforce, HubSpot, payment gateways (Stripe, PayPal, MercadoPago)',
  'svcProgramador.n143':
    ', delivery APIs (MRW, Zoom), email services (SendGrid, Resend), OAuth authentication (Google, GitHub), and Venezuelan accounting systems. For real time I implement',
  'svcProgramador.n144': 'WebSockets with Supabase Realtime',
  'svcProgramador.n145':
    'or Socket.io, ideal for live notifications, chats, monitoring dashboards and multi-user data synchronization.',
  'svcProgramador.n146': 'Hiring',
  'svcProgramador.n147': 'Do you need a senior developer for your project?',
  'svcProgramador.n148':
    'Tell me the technical details of your project and I will reply with a clear proposal: scope, technologies, timeline and budget. No runaround, no middlemen: you talk directly to the developer.',
  'svcProgramador.n149': 'First and Last Name',
  'svcProgramador.n150': 'Corporate Email',
  'svcProgramador.n151': 'Technical project description',
  'svcProgramador.n152': 'Book a Technical Consultation',
  'svcProgramador.n153':
    'Git workflow with commit and test terminal - Senior web developer in Caracas',
  'svcProgramador.n154': 'e.g. John Smith',
  'svcProgramador.n155':
    'Tell me about your project: application type, desired stack, deadlines, estimated budget, required integrations...',

  // ── src/pages/servicios/desarrollo-wordpress.astro ──
  'svcWordpress.n01': 'Advanced WordPress · Portfolio',
  'svcWordpress.n02': 'WordPress development in Caracas: 350+ websites built from scratch',
  'svcWordpress.n03': 'Our track record with WordPress',
  'svcWordpress.n04':
    'With more than 10 years working with CMS platforms, we have built over 350 websites from scratch at every level of complexity, specializing in advanced WordPress.',
  'svcWordpress.n05': 'Get a quote for my WordPress project',
  'svcWordpress.n06': 'See the',
  'svcWordpress.n07': 'projects',
  'svcWordpress.n08': 'How we work',
  'svcWordpress.n09': 'Advanced WordPress, without templates or page builders',
  'svcWordpress.n10':
    'The difference between a WordPress that degrades in six months and one that is still fast five years later lies in how it is built. Our CMS practice works with native Gutenberg blocks, our own code and a measurable performance layer in every delivery.',
  'svcWordpress.n11': 'Portfolio',
  'svcWordpress.n12': '26 WordPress projects in production, across 7 industries',
  'svcWordpress.n13':
    'Every domain is a real project and is still online. Click any of them to visit it.',
  'svcWordpress.n14': 'Portfolio industry index',
  'svcWordpress.n15': 'WordPress',
  'svcWordpress.n16': 'FAQ',
  'svcWordpress.n17': 'Frequently asked questions about WordPress development',
  'svcWordpress.n18': 'expand_more',
  'svcWordpress.n19': 'Explore more',
  'svcWordpress.n20': 'Other related services and resources',
  'svcWordpress.n21': 'Learn more',
  'svcWordpress.n22': 'Let us work together',
  'svcWordpress.n23': 'Do you have a WordPress project pending?',
  'svcWordpress.n24':
    'Tell us what you need — a new website, a migration or a WordPress that stopped performing — and you will receive a proposal with a transparent scope, timeline and budget. No commitment.',
  'svcWordpress.n25': 'First and Last Name',
  'svcWordpress.n26': 'e.g. John Smith',
  'svcWordpress.n27': 'Corporate Email',
  'svcWordpress.n28': 'john@yourcompany.com',
  'svcWordpress.n29': 'Tell us about your WordPress project',
  'svcWordpress.n30':
    'Is it a new website, a migration or a redesign? Do you use WooCommerce? Do you have a deadline or an estimated budget?',
  'svcWordpress.n31': 'Request a WordPress Proposal',
  'svcWordpress.n32': 'Your data is protected. No spam, guaranteed.',
  'svcWordpress.n33': 'Direct enquiry over WhatsApp',
  'svcWordpress.capability.builders.description':
    'We build with native Gutenberg blocks, custom fields and our own code. No Elementor, Divi or builders that drag in unnecessary CSS and JavaScript.',
  'svcWordpress.capability.builders.point.0': 'Custom themes and child themes in modern PHP',
  'svcWordpress.capability.builders.point.1': 'Reusable Gutenberg blocks and patterns',
  'svcWordpress.capability.builders.point.2': 'Custom fields and custom post types per sector',
  'svcWordpress.capability.builders.point.3': 'Zero dependency on purchased templates',
  'svcWordpress.capability.builders.title': 'Advanced WordPress without page builders',
  'svcWordpress.capability.performance.description':
    'A well-built WordPress competes with any modern framework. We optimize queries, caching and assets until the site is green in PageSpeed.',
  'svcWordpress.capability.performance.point.0': 'Object cache, page cache and query cleanup',
  'svcWordpress.capability.performance.point.1':
    'Critical CSS, lazy loading and WebP/AVIF conversion',
  'svcWordpress.capability.performance.point.2': 'Metrics before and after every delivery',
  'svcWordpress.capability.performance.point.3': 'Continuous monitoring of LCP, INP and CLS',
  'svcWordpress.capability.performance.title': 'Performance and Core Web Vitals',
  'svcWordpress.capability.seo.description':
    'You get a site whose SEO architecture your editors can maintain without depending on a developer, and we migrate from your current platform without losing rankings.',
  'svcWordpress.capability.seo.point.0': 'Migrations from Joomla, Wix, Drupal or static HTML',
  'svcWordpress.capability.seo.point.1': '301 redirects and ranking preservation',
  'svcWordpress.capability.seo.point.2': 'Schema.org, XML sitemap, hreflang and robots.txt',
  'svcWordpress.capability.seo.point.3': 'Content structure designed to rank',
  'svcWordpress.capability.seo.title': 'Content, technical SEO and migrations',
  'svcWordpress.capability.woocommerce.description':
    'Full e-commerce or WordPress as the back end of an ultra-fast front end, connected to the real operation of the business: payments, logistics, CRM and automations.',
  'svcWordpress.capability.woocommerce.point.0':
    'WooCommerce: payments, shipping, stock and variations',
  'svcWordpress.capability.woocommerce.point.1': 'Headless WordPress consumed by Astro or Next.js',
  'svcWordpress.capability.woocommerce.point.2': 'REST APIs, webhooks and CRM/ERP synchronization',
  'svcWordpress.capability.woocommerce.point.3': 'Multilingual and multisite architectures',
  'svcWordpress.capability.woocommerce.title': 'WooCommerce, headless and integrations',
  'svcWordpress.faq.builders.answer':
    'A template or a builder speeds up the first delivery, but it mortgages everything that comes after: bloated code, updates that break the design and technical SEO that is hard to control. We develop advanced WordPress with native Gutenberg blocks and our own code, so your team can edit all the content from the dashboard and the site stays fast and maintainable years later.',
  'svcWordpress.faq.builders.question':
    'Why WordPress and not a purchased template or a page builder?',
  'svcWordpress.faq.edicion.answer':
    'Yes, and it is designed to work that way. We hand over the WordPress dashboard with blocks and patterns prepared for your sections, usage documentation for your team and a recorded training session. You are not tied to us to publish new content.',
  'svcWordpress.faq.edicion.question': 'Can I keep editing the content myself?',
  'svcWordpress.faq.migracion.answer':
    'Yes. We work with a complete inventory of URLs, a 301 redirect map and preservation of titles, meta descriptions, headings and structured data. Before publishing we compare performance and rankings to catch any drop in time. We have migrated projects from Joomla, Wix, Drupal and static HTML sites without harming their rankings.',
  'svcWordpress.faq.migracion.question':
    'Can I migrate my current site to WordPress without losing rankings?',
  'svcWordpress.faq.movil.answer':
    'It is one of our acceptance criteria. We optimize images to WebP/AVIF, apply lazy loading, page and object caching, and reduce JavaScript to the minimum needed. That is precisely why we have built more than 350 websites from scratch at every level of complexity: we know which bottleneck shows up in each type of business.',
  'svcWordpress.faq.movil.question': 'Will the site work well on mobile with slow connections?',
  'svcWordpress.faq.soporte.answer':
    'Every project includes 3 months of post-launch support. After that we offer monthly plans with core, plugin and theme updates, backups, security and uptime monitoring, performance optimization and priority support over WhatsApp or Slack.',
  'svcWordpress.faq.soporte.question': 'Do you offer ongoing maintenance and support?',
  'svcWordpress.form.error': 'Error sending. Try again or email us at info@vortexlm.com.',
  'svcWordpress.form.sending': 'Sending...',
  'svcWordpress.form.submit': 'Request a WordPress Proposal',
  'svcWordpress.form.success': 'Message sent successfully! We will contact you soon.',
  'svcWordpress.industry.automotriz.summary':
    'Car dealing and specialized content: up-to-date stock, vehicle listings, financing and direct enquiries over WhatsApp.',
  'svcWordpress.industry.automotriz.title': 'Automotive Sector',
  'svcWordpress.industry.corporativo.summary':
    'Consultancies and B2B suppliers that use the web as a commercial channel: success stories, qualified forms and content that backs up the value proposition.',
  'svcWordpress.industry.corporativo.title': 'Corporate and Professional Services',
  'svcWordpress.industry.hogar.summary':
    'Furniture, enclosure and renovation manufacturers and distributors that need filterable catalogs, product sheets and quote capture.',
  'svcWordpress.industry.hogar.title': 'Home, Construction and Decoration',
  'svcWordpress.industry.hosteleria.summary':
    'Digital menus, bookings, events and food galleries with strong mobile performance: most hospitality visits come from a phone.',
  'svcWordpress.industry.hosteleria.title': 'Restaurants and Hospitality',
  'svcWordpress.industry.ocio.summary':
    'Operators with instant booking: tickets, excursions, boat rentals and gaming rooms with measurable conversion flows.',
  'svcWordpress.industry.ocio.title': 'Leisure, Entertainment and Tourism',
  'svcWordpress.industry.retail.summary':
    'E-commerce and catalogs with a payment gateway, stock management and product variations, optimized to convert from the very first visit.',
  'svcWordpress.industry.retail.title': 'Retail and Specialized Stores',
  'svcWordpress.industry.salud.summary':
    'Centers that sell trust before services: appointment booking, detailed treatments, social proof and strict privacy compliance.',
  'svcWordpress.industry.salud.title': 'Health, Wellness and Beauty',
  'svcWordpress.link.coste.description':
    'A real breakdown of costs and the ROI of investing in a professional site instead of a low-cost template.',
  'svcWordpress.link.coste.label': 'How much does a website cost in 2026?',
  'svcWordpress.link.diseno.description':
    'A complete UI/UX design methodology, wireframes and design systems before moving on to development.',
  'svcWordpress.link.diseno.label': 'Web design in Caracas',
  'svcWordpress.link.stack.description':
    'When the project demands maximum speed or a headless front end on top of WordPress, this is the stack we use.',
  'svcWordpress.link.stack.label': 'Modern Astro, React and Next.js stack',
  'svcWordpress.link.whiteLabel.description':
    'Outsource frontend development, WordPress and automations under your own brand. NDA and pay-per-use billing.',
  'svcWordpress.link.whiteLabel.label': 'White label services',
  'svcWordpress.meta.description':
    'Advanced WordPress development agency in Caracas: more than 350 websites built from scratch across 7 industries. A portfolio of 26 projects in production, without page builders and optimized for Core Web Vitals.',
  'svcWordpress.meta.title':
    'WordPress Development in Caracas | Portfolio of 350+ Websites | Web and App Development Agency in Caracas',
  'svcWordpress.sector.admiral': 'Casinos and Gaming Rooms',
  'svcWordpress.sector.anagomez': 'Hair Salon and Styling',
  'svcWordpress.sector.bilox': 'Enclosures and Solar Shading Systems',
  'svcWordpress.sector.bureau360': 'Digital Marketing Agency',
  'svcWordpress.sector.carsdiner': 'Themed Restaurant',
  'svcWordpress.sector.cocimara': 'Kitchen and Home Design',
  'svcWordpress.sector.colchonight': 'Mattresses and Sleep Products',
  'svcWordpress.sector.conforcama': 'Mattresses and Sleep Products',
  'svcWordpress.sector.formobel': 'Furniture',
  'svcWordpress.sector.gescomauto': 'Vehicle Trading',
  'svcWordpress.sector.globeservice': 'Integrated Business Services',
  'svcWordpress.sector.granbahia': 'Restaurant',
  'svcWordpress.sector.hominum': 'Psychology and Personal Growth Center',
  'svcWordpress.sector.hotelonda': 'Hotel',
  'svcWordpress.sector.infinityjump': 'Trampoline Park',
  'svcWordpress.sector.inspiredbycars': 'Automotive Content and Products',
  'svcWordpress.sector.invernadero': 'Restaurant and Events',
  'svcWordpress.sector.khora': 'Furniture and Decoration',
  'svcWordpress.sector.limptex': 'Corporate Cleaning Services',
  'svcWordpress.sector.mualbu': 'Furniture',
  'svcWordpress.sector.nautica': 'Boat Sales and Repair',
  'svcWordpress.sector.primecr': 'Business Consulting',
  'svcWordpress.sector.rotulos': 'Signage and Wayfinding',
  'svcWordpress.sector.sevilla': 'Furniture',
  'svcWordpress.sector.tabarca': 'Excursions and Maritime Tourism',
  'svcWordpress.sector.toldosaban': 'Awnings and Pergolas',
  'svcWordpress.stat.cms': 'Years working with CMS',
  'svcWordpress.stat.industrias': 'Specialized industries',
  'svcWordpress.stat.portafolio': 'Projects in this portfolio',
  'svcWordpress.stat.sitios': 'Websites built from scratch',

  // ── src/pages/servicios/administrador-aplicaciones-web.astro ──
  'svcAppsAdmin.n01': 'Web Application Administrator',
  'svcAppsAdmin.n02':
    'Web application administrator: your systems in production, managed and monitored',
  'svcAppsAdmin.n03': 'What a web application administrator does',
  'svcAppsAdmin.n04':
    'Web applications connected to databases, payment gateways and in-house management systems, shipped to production and seriously administered: deployments, maintenance, integrations, monitoring and support with committed response times.',
  'svcAppsAdmin.n05': 'I want management and support',
  'svcAppsAdmin.n06': 'See the',
  'svcAppsAdmin.n07': 'capabilities of the service',
  'svcAppsAdmin.n08': 'How we work',
  'svcAppsAdmin.n09': 'What managing your web applications includes',
  'svcAppsAdmin.n10':
    'An application in production does not maintain itself. We cover the four critical areas of the operation — deployment, maintenance, integrations and monitoring — so that your team can focus on its own work and the system keeps running as it did on day one.',
  'svcAppsAdmin.n11': 'Platforms',
  'svcAppsAdmin.n12': 'Platforms and services we manage every day',
  'svcAppsAdmin.n13':
    'Your team does not need to know every console, every billing dashboard or every API quota. These are the environments we operate in every day and the ones your application most likely already uses.',
  'svcAppsAdmin.n14': 'Method',
  'svcAppsAdmin.n15': 'How we move your application to managed operations',
  'svcAppsAdmin.n16': 'FAQ',
  'svcAppsAdmin.n17': 'Frequently asked questions about web application management',
  'svcAppsAdmin.n18': 'expand_more',
  'svcAppsAdmin.n19': 'Keep exploring',
  'svcAppsAdmin.n20': 'The rest of the directory, one click away',
  'svcAppsAdmin.n21': 'Learn more',
  'svcAppsAdmin.n22': 'Let us work together',
  'svcAppsAdmin.n23': 'Do you need to manage your web applications?',
  'svcAppsAdmin.n24':
    'Tell us what you have in production — a website, a store, an internal dashboard or an integration with your CRM — and you will receive an assessment and a management plan with transparent scope, timelines and budget. No commitment.',
  'svcAppsAdmin.n25': 'First and Last Name',
  'svcAppsAdmin.n26': 'e.g. Carlos Mendoza',
  'svcAppsAdmin.n27': 'Corporate Email',
  'svcAppsAdmin.n28': 'carlos@yourcompany.com',
  'svcAppsAdmin.n29': 'Tell us what you need managed',
  'svcAppsAdmin.n30':
    'Which application or website do you want to manage? What infrastructure does it use today and which CRM or CMS does your team work with?',
  'svcAppsAdmin.n31': 'Request a management plan',
  'svcAppsAdmin.n32': 'Your data is protected. No spam, guaranteed.',
  'svcAppsAdmin.n33': 'Direct enquiry on WhatsApp',
  'svcAppsAdmin.capability.despliegue.description':
    'We ship and maintain your infrastructure: Vercel, Supabase, managed servers, DNS, certificates and staging environments kept separate from the live site.',
  'svcAppsAdmin.capability.despliegue.point.0':
    'Vercel: deployments, per-branch previews and domains',
  'svcAppsAdmin.capability.despliegue.point.1': 'Supabase: PostgreSQL, auth, storage and realtime',
  'svcAppsAdmin.capability.despliegue.point.2': 'DNS, SSL, CDN and managed servers',
  'svcAppsAdmin.capability.despliegue.point.3': 'Version control with Git and a release workflow',
  'svcAppsAdmin.capability.despliegue.title': 'Management and deployment of web architectures',
  'svcAppsAdmin.capability.integraciones.description':
    'We connect your site with the tools your team already uses — CRM, CMS, payments, ERP — and remove the manual work nobody wants to keep doing.',
  'svcAppsAdmin.capability.integraciones.point.0':
    'CRM: HubSpot, Zoho, Salesforce and custom development',
  'svcAppsAdmin.capability.integraciones.point.1':
    'CMS: WordPress, Shopify and in-house dashboards',
  'svcAppsAdmin.capability.integraciones.point.2': 'REST APIs, webhooks and data synchronization',
  'svcAppsAdmin.capability.integraciones.point.3':
    'Automations and internal flows that run unattended',
  'svcAppsAdmin.capability.integraciones.title': 'CRM, CMS and custom system integrations',
  'svcAppsAdmin.capability.mantenimiento.description':
    'Core, dependency and plugin updates with prior testing, verified backups and maintenance windows agreed with you.',
  'svcAppsAdmin.capability.mantenimiento.point.0': 'Automatic backups and restore testing',
  'svcAppsAdmin.capability.mantenimiento.point.1': 'WordPress, npm and dependency updates',
  'svcAppsAdmin.capability.mantenimiento.point.2': 'Staging environments to validate every change',
  'svcAppsAdmin.capability.mantenimiento.point.3': 'Monthly report with changes and system status',
  'svcAppsAdmin.capability.mantenimiento.title': 'Preventive, continuous maintenance',
  'svcAppsAdmin.capability.monitoreo.description':
    'We watch availability, performance and security, and resolve incidents through a direct channel with contractually committed response times.',
  'svcAppsAdmin.capability.monitoreo.point.0': 'Uptime, LCP, INP and CLS monitoring',
  'svcAppsAdmin.capability.monitoreo.point.1': 'Access, role and least-privilege management',
  'svcAppsAdmin.capability.monitoreo.point.2': 'Dependency and best-practice reviews',
  'svcAppsAdmin.capability.monitoreo.point.3': 'Priority support over WhatsApp or Slack',
  'svcAppsAdmin.capability.monitoreo.title': 'Monitoring, security and incident response',
  'svcAppsAdmin.faq.alcance.answer':
    'It covers the management of the infrastructure and of the services your application needs: deployments, domains, DNS, certificates, backups, updates, uptime and performance monitoring, security reviews and incident resolution. You do not need a technical department of your own: we act as your operations team.',
  'svcAppsAdmin.faq.alcance.question': 'What exactly does managing my web applications include?',
  'svcAppsAdmin.faq.hecho-por-otra-agencia.answer':
    'Yes. We work on applications built with Astro, React, Next.js, WordPress, Shopify and custom back ends, developed by any team. We start with a technical assessment and an orderly handover of accesses, and we document everything we find so that you never depend on us to understand your own system.',
  'svcAppsAdmin.faq.hecho-por-otra-agencia.question':
    'Can you manage an application VortexLM did not build?',
  'svcAppsAdmin.faq.incidencias.answer':
    'Continuous operation plans include 24/7 monitoring with automatic alerts. If the system detects an outage we get the alert and act without waiting for you to notice. Critical incidents have a contractually committed first-response time and a direct channel over WhatsApp or Slack.',
  'svcAppsAdmin.faq.incidencias.question': 'What happens if my application goes down on a weekend?',
  'svcAppsAdmin.faq.migracion-infraestructura.answer':
    'Yes. We work with staging deployments, data verification and maintenance windows agreed with you. We have moved projects between hosting, database and email providers while keeping the site online, with 301 redirects in place and no loss of rankings or business data.',
  'svcAppsAdmin.faq.migracion-infraestructura.question':
    'Can you migrate my application to another infrastructure with no downtime?',
  'svcAppsAdmin.faq.precios.answer':
    'With a fixed monthly fee based on the complexity of the application, the number of integrations and the level of support you need. Evolutionary improvements and new projects are quoted separately with clear scope and timelines. No hidden costs and no surprise hours at the end of the month.',
  'svcAppsAdmin.faq.precios.question': 'How is the monthly management fee billed?',
  'svcAppsAdmin.form.error': 'Sending failed. Please try again or email us at info@vortexlm.com.',
  'svcAppsAdmin.form.sending': 'Sending...',
  'svcAppsAdmin.form.submit': 'Request a management plan',
  'svcAppsAdmin.form.success': 'Message sent successfully! We will contact you soon.',
  'svcAppsAdmin.link.cms.description':
    'The CMS profile: sites and stores we later update, back up and monitor.',
  'svcAppsAdmin.link.cms.label': 'Advanced WordPress development',
  'svcAppsAdmin.link.directorio.description':
    'Compare the four technical profiles in the directory and combine the ones your project needs.',
  'svcAppsAdmin.link.directorio.label': 'Services and technical profiles directory',
  'svcAppsAdmin.link.fullstack.description':
    'When operations detect technical debt, the same team can rebuild the architecture.',
  'svcAppsAdmin.link.fullstack.label': 'Senior full-stack developer',
  'svcAppsAdmin.link.sistemas.description':
    'Internal dashboards and management software we support and keep connected.',
  'svcAppsAdmin.link.sistemas.label': 'Custom management systems',
  'svcAppsAdmin.meta.description':
    'Web application management in Caracas: deployment on Vercel and Supabase, preventive maintenance, CRM and CMS integration, performance monitoring and support with committed response times.',
  'svcAppsAdmin.meta.title':
    'Web Application Administrator in Caracas | Deployment, Maintenance and Support | Web and App Development Agency in Caracas',
  'svcAppsAdmin.platform.cloudflare.name': 'Cloudflare',
  'svcAppsAdmin.platform.cloudflare.note': 'DNS, CDN, caching and edge protection',
  'svcAppsAdmin.platform.docker.name': 'Docker and managed servers',
  'svcAppsAdmin.platform.docker.note': 'Containers, deployments and backups',
  'svcAppsAdmin.platform.github.name': 'GitHub',
  'svcAppsAdmin.platform.github.note': 'Repositories, code reviews and releases',
  'svcAppsAdmin.platform.n8n.name': 'n8n and automations',
  'svcAppsAdmin.platform.n8n.note': 'Workflows, webhooks and scheduled tasks',
  'svcAppsAdmin.platform.shopify.name': 'Shopify',
  'svcAppsAdmin.platform.shopify.note': 'Stores, apps and synchronization with your operation',
  'svcAppsAdmin.platform.supabase.name': 'Supabase',
  'svcAppsAdmin.platform.supabase.note': 'PostgreSQL, authentication, storage and realtime',
  'svcAppsAdmin.platform.vercel.name': 'Vercel',
  'svcAppsAdmin.platform.vercel.note': 'Hosting and deployments with per-branch previews',
  'svcAppsAdmin.platform.wordpress.name': 'WordPress',
  'svcAppsAdmin.platform.wordpress.note': 'Core, plugins, themes and dashboard security',
  'svcAppsAdmin.stat.plataformas': 'Platforms and services managed',
  'svcAppsAdmin.stat.proyectos': 'Websites and stores built from scratch',
  'svcAppsAdmin.stat.respuesta': 'First response to incidents',
  'svcAppsAdmin.stat.uptime': 'Target uptime in production',
  'svcAppsAdmin.step.diagnostico.description':
    'We audit accesses, infrastructure and risks, and sign the service level agreement before touching anything.',
  'svcAppsAdmin.step.diagnostico.name': 'Assessment and handover',
  'svcAppsAdmin.step.evolucion.description':
    'Every month we review performance and backlog with you and plan the improvements with the biggest impact on your operation.',
  'svcAppsAdmin.step.evolucion.name': 'Optimization and evolution',
  'svcAppsAdmin.step.operacion.description':
    'Verified backups, controlled updates, security reviews and resolutions within the agreed time.',
  'svcAppsAdmin.step.operacion.name': 'Continuous operation',
  'svcAppsAdmin.step.puesta-en-produccion.description':
    'We set up staging, automate deployments and leave the system monitored with alerts from day one.',
  'svcAppsAdmin.step.puesta-en-produccion.name': 'Go live',

  // ── src/components/ui/ServicesDirectory.astro ──
  'svcDirectory.aria': 'Services and technical profiles directory',
  'svcDirectory.badge': 'Services directory',
  'svcDirectory.card.apps.description':
    'Management, deployment and support for your applications in production: Vercel, Supabase, servers, CRM and CMS, with monitoring and incident resolution.',
  'svcDirectory.card.apps.point.0': 'Deployments, backups and version control',
  'svcDirectory.card.apps.point.1': 'CRM and CMS integration and support',
  'svcDirectory.card.apps.point.2': 'Monitoring, security and response times',
  'svcDirectory.card.apps.role': 'Application Administrator',
  'svcDirectory.card.apps.title': 'Web Application Administrator',
  'svcDirectory.card.cms.description':
    'WordPress, Shopify and custom CMS without page builders: content your team edits without depending on a developer, and performance that does not degrade.',
  'svcDirectory.card.cms.point.0': 'Native Gutenberg blocks and child themes',
  'svcDirectory.card.cms.point.1': 'WooCommerce, headless and multisite architectures',
  'svcDirectory.card.cms.point.2': 'Migrations with no loss of rankings',
  'svcDirectory.card.cms.role': 'CMS Developer',
  'svcDirectory.card.cms.title': 'CMS Developer',
  'svcDirectory.card.fullstack.description':
    'End-to-end product engineering: architecture, front end, back end, database and deployment with Astro, React, Next.js, Node.js and Supabase.',
  'svcDirectory.card.fullstack.point.0': 'Astro, React, Next.js and TypeScript',
  'svcDirectory.card.fullstack.point.1': 'REST and GraphQL APIs, webhooks and WebSockets',
  'svcDirectory.card.fullstack.point.2': 'Authentication, Row Level Security and CI/CD on Vercel',
  'svcDirectory.card.fullstack.role': 'Full-Stack Developer',
  'svcDirectory.card.fullstack.title': 'Full-Stack Developer',
  'svcDirectory.card.sistemas.description':
    'Management software, internal dashboards and automated workflows that connect your real operation with the rest of your company platforms.',
  'svcDirectory.card.sistemas.point.0': 'Custom inventory, invoicing and CRM',
  'svcDirectory.card.sistemas.point.1': 'ETL, API and webhook integrations',
  'svcDirectory.card.sistemas.point.2': 'Operational dashboards and reporting',
  'svcDirectory.card.sistemas.role': 'Custom systems',
  'svcDirectory.card.sistemas.title': 'Custom systems and automations',
  'svcDirectory.cta': 'View service',
  'svcDirectory.footnote': 'Not sure which profile fits your project?',
  'svcDirectory.footnoteCta': 'Tell us the case and we will recommend the right team',
  'svcDirectory.subtitle':
    'Each card opens the full service page: scope, methodology, deliverables and response times. You can combine several profiles in the same project.',
  'svcDirectory.title': 'Choose the technical profile your project needs',
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
