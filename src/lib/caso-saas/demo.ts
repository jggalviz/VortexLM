/**
 * MEDISYS · Clínica de demostración (port al sitio de Vortex)
 * ------------------------------------------------------------------
 * Ruta pública del wizard de reserva del tenant demo del producto. Se mantiene
 * en un módulo propio para que los enlaces de la demo del caso de estudio se
 * construyan en un único lugar: si cambia el slug, cambia aquí.
 *
 * NOTA: a diferencia del repositorio original, esta copia no incluye las
 * credenciales del tenant demo. El sitio de Vortex solo necesita enlazar la
 * reserva pública (sin registro) y esos datos no deben publicarse aquí.
 */
export const DEMO_CLINIC_SLUG = "clinica-demo"

/** Wizard de reserva del paciente (experiencia pública, sin registro). */
export const RESERVAR_DEMO_ROUTE = `/${DEMO_CLINIC_SLUG}/reservar`
