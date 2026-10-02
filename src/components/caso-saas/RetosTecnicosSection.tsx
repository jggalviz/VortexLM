import { Wrench } from "./icons"

import { Section, SectionHeading } from "./ui"
import { RetoConcurrencia } from "./RetoConcurrencia"
import { RetoFiscal } from "./RetoFiscal"
import { RetoRbac } from "./RetoRbac"

/** Sección 03 · Los tres problemas difíciles del producto, en detalle. */
export function RetosTecnicosSection() {
  return (
    <Section id="retos-tecnicos" tone="muted">
      <SectionHeading
        indice="03"
        eyebrow="Retos técnicos complejos"
        icon={Wrench}
        i18nBase="case.retos"
        title="Tres problemas que separan un CRUD de un producto"
        description="Un sistema de citas parece un formulario hasta que dos personas reservan el mismo turno en paralelo; una factura parece una multiplicación hasta que tres normas tienen condiciones de aplicación distintas. Estos son los problemas que resolví, con el código y las decisiones que los sostienen."
      />

      <div className="mt-12 space-y-6">
        <RetoConcurrencia />
        <RetoFiscal />
        <RetoRbac />
      </div>
    </Section>
  )
}
