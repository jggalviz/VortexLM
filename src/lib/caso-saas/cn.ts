/**
 * MEDISYS · Caso de estudio — port a VortexLM
 * ------------------------------------------------------------------
 * Une clases condicionales para los componentes del caso de estudio.
 *
 * El repositorio original usaba `clsx` + `tailwind-merge`; el sitio Vortex no
 * incluye ninguna de las dos dependencias y los usos aquí son concatenaciones
 * simples (una clase base + clases condicionales + `className` opcional), así
 * que la implementación se mantiene sin dependencias.
 */
export function cn(...clases: (string | false | null | undefined)[]): string {
  return clases.filter(Boolean).join(" ")
}
