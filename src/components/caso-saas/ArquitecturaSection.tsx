import { Compass } from "./icons"

import { Section, SectionHeading } from "./ui"
import { ArquitecturaDecisiones } from "./ArquitecturaDecisiones"
import { DiagramaArquitectura } from "./DiagramaArquitectura"
import { DecisionesDescartadas } from "./DecisionesDescartadas"

function Subtitulo({
  titulo,
  detalle,
  tituloKey,
  detalleKey,
}: {
  titulo: string
  detalle: string
  tituloKey?: string
  detalleKey?: string
}) {
  return (
    <div className="max-w-3xl">
      <h3
        className="text-xl font-bold tracking-tight text-zinc-900"
        data-i18n={tituloKey}
      >
        {titulo}
      </h3>
      <p
        className="mt-2 text-sm leading-6 text-zinc-600"
        data-i18n={detalleKey}
      >
        {detalle}
      </p>
    </div>
  )
}

/** Sección 02 · Decisiones de arquitectura, mapa de capas y descartes. */
export function ArquitecturaSection() {
  return (
    <Section id="arquitectura">
      <SectionHeading
        indice="02"
        eyebrow="La solución arquitectónica"
        icon={Compass}
        i18nBase="case.arq"
        title="Tres decisiones que sostienen todo el sistema"
        description="Cada decisión se tomó contra una alternativa concreta y con su costo asumido por escrito. Estas son las tres que gobiernan el producto, el mapa de capas resultante y las opciones que evalué y descarté."
      />

      <div className="mt-12">
        <ArquitecturaDecisiones />
      </div>

      <div className="mt-16">
        <Subtitulo
          titulo="Cómo se conecta todo"
          detalle="Seis capas con una dirección de dependencia explícita. Cada flecha representa una frontera que puedo revisar, probar o reemplazar de forma independiente."
          tituloKey="case.arq.map.title"
          detalleKey="case.arq.map.detail"
        />
        <div className="mt-6">
          <DiagramaArquitectura />
        </div>
      </div>

      <div className="mt-16">
        <DecisionesDescartadas />
      </div>
    </Section>
  )
}
