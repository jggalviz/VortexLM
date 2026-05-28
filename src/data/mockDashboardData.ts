// src/data/mockDashboardData.ts
// Mock data for the B2B Client Portal — simulates a real agency client account

export interface Archivo {
  nombre: string;
  tamano: string;
  fecha: string;
  subidoPor: string;
}

export interface Nota {
  id: string;
  autor: string;
  contenido: string;
  fecha: string;
}

export interface TareaExperto {
  tarea: string;
  completada: boolean;
  fecha: string;
}

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  estado: 'En Cola' | 'En Desarrollo' | 'Pruebas' | 'Completado';
  progreso: number; // 0–100
  archivos: Archivo[];
  notas: Nota[];
  tareasExperto: TareaExperto[];
}

export interface Factura {
  id: string;
  numero: string;
  concepto: string;
  monto: number;
  moneda: 'USD' | 'EUR';
  fechaEmision: string;
  fechaVencimiento: string;
  estado: 'Pagada' | 'Pendiente' | 'Vencida';
  pdfUrl?: string;
}

export interface DatosCuenta {
  empresa: string;
  representante: string;
  email: string;
  vCreditsActuales: number;
  vCreditsConsumidos: number;
  vCreditsTotales: number;
  whatsappConectado: boolean;
  telefonoWhatsApp: string;
}

export interface MetodoPago {
  tipo: 'Binance Pay' | 'Transferencia Bancaria';
  datos: string;
  activo: boolean;
}

export const datosCuenta: DatosCuenta = {
  empresa: 'Agencia Creativa Digital S.L.',
  representante: 'Carlos Mendoza',
  email: 'carlos@agenciadigital.es',
  vCreditsActuales: 150,
  vCreditsConsumidos: 350,
  vCreditsTotales: 500,
  whatsappConectado: true,
  telefonoWhatsApp: '+34 612 345 678',
};

export const metodosPago: MetodoPago[] = [
  {
    tipo: 'Binance Pay',
    datos: 'ID de usuario: 87654321\nCorreo: pagos@agenciadigital.es\nRed: BEP-20 (USDT)',
    activo: true,
  },
  {
    tipo: 'Transferencia Bancaria',
    datos: 'Banco: BBVA\nIBAN: ES91 2100 0418 4502 0005 1332\nSWIFT: BBVAESMMXXX\nTitular: Vortex Logic LLC',
    activo: true,
  },
];

export const facturas: Factura[] = [
  {
    id: 'inv-001',
    numero: 'VLM-2026-0042',
    concepto: 'Pack Growth 500 vCredits — Compra inicial',
    monto: 498.75,
    moneda: 'USD',
    fechaEmision: '2026-05-15',
    fechaVencimiento: '2026-06-15',
    estado: 'Pagada',
  },
  {
    id: 'inv-002',
    numero: 'VLM-2026-0051',
    concepto: 'Desarrollo Frontend — Landing page campaña Q2',
    monto: 210.0,
    moneda: 'USD',
    fechaEmision: '2026-05-20',
    fechaVencimiento: '2026-06-20',
    estado: 'Pagada',
  },
  {
    id: 'inv-003',
    numero: 'VLM-2026-0063',
    concepto: 'Mantenimiento WordPress — Mayo 2026',
    monto: 105.0,
    moneda: 'USD',
    fechaEmision: '2026-05-25',
    fechaVencimiento: '2026-06-25',
    estado: 'Pendiente',
  },
  {
    id: 'inv-004',
    numero: 'VLM-2026-0070',
    concepto: 'Automatización CRM + Webhooks',
    monto: 315.0,
    moneda: 'USD',
    fechaEmision: '2026-05-28',
    fechaVencimiento: '2026-06-28',
    estado: 'Pendiente',
  },
];

export const proyectos: Proyecto[] = [
  {
    id: 'proj-001',
    titulo: 'Rediseño Landing Page — Cliente Fintech',
    descripcion:
      'Migración de sitio corporativo a Astro + Tailwind. Se requiere diseño premium, modo oscuro, integración de blog con MDX y optimización Core Web Vitals.',
    estado: 'En Desarrollo',
    progreso: 65,
    archivos: [
      { nombre: 'logo-cliente-final.svg', tamano: '24 KB', fecha: '2026-05-10', subidoPor: 'Cliente' },
      { nombre: 'brief-diseno-v2.pdf', tamano: '1.2 MB', fecha: '2026-05-12', subidoPor: 'Cliente' },
      { nombre: 'mockups-escritorio.fig', tamano: '4.8 MB', fecha: '2026-05-14', subidoPor: 'Vortex Logic' },
      { nombre: 'guia-estilos-cliente.pdf', tamano: '890 KB', fecha: '2026-05-16', subidoPor: 'Cliente' },
    ],
    notas: [
      { id: 'note-001', autor: 'Carlos (Cliente)', contenido: '¿Podemos ajustar el espaciado del hero? Se ve muy comprimido en móvil.', fecha: '2026-05-18 14:32' },
      { id: 'note-002', autor: 'Ana (Vortex Logic)', contenido: 'Revisado. He subido una nueva versión del mockup responsive con padding aumentado a 24px en mobile.', fecha: '2026-05-18 16:45' },
      { id: 'note-003', autor: 'Carlos (Cliente)', contenido: 'Perfecto, se ve mucho mejor. Aprobamos para desarrollo.', fecha: '2026-05-19 09:10' },
      { id: 'note-004', autor: 'Ana (Vortex Logic)', contenido: 'Hero terminado. Pasamos a la sección de características. Estimación: 3 días hábiles.', fecha: '2026-05-22 11:00' },
    ],
    tareasExperto: [
      { tarea: 'Configurar proyecto Astro + Tailwind + MDX', completada: true, fecha: '2026-05-12' },
      { tarea: 'Maquetar Hero principal con grid overlay', completada: true, fecha: '2026-05-15' },
      { tarea: 'Implementar sección de características con iconos SVG', completada: true, fecha: '2026-05-19' },
      { tarea: 'Integrar blog con MDX y listado dinámico', completada: false, fecha: '2026-05-26' },
      { tarea: 'Optimizar Core Web Vitals (LCP < 2.5s)', completada: false, fecha: '2026-05-30' },
      { tarea: 'Pruebas cross-browser y despliegue a producción', completada: false, fecha: '2026-06-02' },
    ],
  },
  {
    id: 'proj-002',
    titulo: 'Automatización de Reportes Semanales',
    descripcion:
      'Desarrollo de un sistema de reportes automáticos vía webhooks. Conexión con Google Sheets, generación de PDF y envío por WhatsApp Business API.',
    estado: 'En Cola',
    progreso: 10,
    archivos: [
      { nombre: 'flujo-automatizacion.drawio', tamano: '340 KB', fecha: '2026-05-20', subidoPor: 'Cliente' },
      { nombre: 'credenciales-api.pdf', tamano: '120 KB', fecha: '2026-05-21', subidoPor: 'Cliente' },
    ],
    notas: [
      { id: 'note-005', autor: 'Carlos (Cliente)', contenido: 'Adjunto el diagrama de flujo del proceso actual. La idea es automatizar los pasos 3, 4 y 5.', fecha: '2026-05-21 10:15' },
      { id: 'note-006', autor: 'Miguel (Vortex Logic)', contenido: 'Recibido. Estamos revisando la viabilidad técnica. La integración con WhatsApp Business API requiere aprobación previa de Meta.', fecha: '2026-05-21 14:30' },
    ],
    tareasExperto: [
      { tarea: 'Analizar diagrama de flujo y documentar requerimientos', completada: true, fecha: '2026-05-22' },
      { tarea: 'Configurar webhook receptor en Node.js', completada: false, fecha: '2026-05-28' },
      { tarea: 'Integrar Google Sheets API para lectura/escritura', completada: false, fecha: '2026-06-01' },
      { tarea: 'Implementar generación de PDF con datos dinámicos', completada: false, fecha: '2026-06-05' },
      { tarea: 'Conectar WhatsApp Business API para envío automático', completada: false, fecha: '2026-06-10' },
    ],
  },
];

export const alertas = [
  { tipo: 'info', mensaje: 'Te quedan 150 vCredits disponibles. Considera recargar antes de agotarlos.', fecha: '2026-05-28' },
  { tipo: 'warning', mensaje: 'La factura VLM-2026-0063 vence el 25 de junio.', fecha: '2026-05-25' },
  { tipo: 'success', mensaje: 'Proyecto "Rediseño Landing Page" al 65% completado.', fecha: '2026-05-28' },
];
