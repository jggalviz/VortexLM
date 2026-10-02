// src/i18n/flags.ts
//
// Banderas vectoriales del selector de idioma (una por locale).
//
// Reglas de diseño:
//   1. Sin `id` internos (clipPath/mask): el mismo SVG se repite en la barra
//      resumen y en la lista de opciones, y duplicar ids rompería el render.
//   2. Escalan al 100% de su caja; el recorte redondeado lo aporta el wrapper
//      (`inline-flex ... overflow-hidden rounded-[2px]`) de LanguageSelector.astro.
//   3. Siempre `aria-hidden`: el nombre accesible lo da el texto del botón.
//
// Para cambiar la bandera de un idioma basta con reapuntar `FLAGS` a otra
// constante (p. ej. `FLAG_ES_VENEZUELA` en lugar de `FLAG_ES_SPAIN`).

import type { Locale } from './config';

/** Bandera de Venezuela (alternativa para el locale `es`, mercado principal de Vortex). */
export const FLAG_ES_VENEZUELA =
  '<svg viewBox="0 0 21 15" width="100%" height="100%" aria-hidden="true" focusable="false">' +
  '<rect width="21" height="5" fill="#FCD116"/>' +
  '<rect y="5" width="21" height="5" fill="#003893"/>' +
  '<rect y="10" width="21" height="5" fill="#CF142B"/>' +
  '<g fill="#ffffff">' +
  '<circle cx="3.6" cy="8.7" r="0.55"/><circle cx="5.4" cy="7.7" r="0.55"/>' +
  '<circle cx="7.3" cy="7.0" r="0.55"/><circle cx="9.4" cy="6.6" r="0.55"/>' +
  '<circle cx="11.6" cy="6.6" r="0.55"/><circle cx="13.7" cy="7.0" r="0.55"/>' +
  '<circle cx="15.6" cy="7.7" r="0.55"/><circle cx="17.4" cy="8.7" r="0.55"/>' +
  '</g></svg>';

/** Bandera de España: la que se muestra para el locale `es`
 *  (símbolo estándar del idioma español y coherente con `og:locale: es_ES`). */
export const FLAG_ES_SPAIN =
  '<svg viewBox="0 0 21 15" width="100%" height="100%" aria-hidden="true" focusable="false">' +
  '<rect width="21" height="15" fill="#AA151B"/>' +
  '<rect y="3.75" width="21" height="7.5" fill="#F1BF00"/>' +
  '</svg>';

/** Bandera de Estados Unidos (locale `en`). */
export const FLAG_EN_USA =
  '<svg viewBox="0 0 21 15" width="100%" height="100%" aria-hidden="true" focusable="false">' +
  '<rect width="21" height="15" fill="#ffffff"/>' +
  '<g fill="#B22234">' +
  '<rect width="21" height="1.16"/><rect y="2.31" width="21" height="1.16"/>' +
  '<rect y="4.62" width="21" height="1.16"/><rect y="6.92" width="21" height="1.16"/>' +
  '<rect y="9.23" width="21" height="1.16"/><rect y="11.54" width="21" height="1.16"/>' +
  '<rect y="13.85" width="21" height="1.15"/>' +
  '</g>' +
  '<rect width="8.4" height="8.08" fill="#3C3B6E"/>' +
  '<g fill="#ffffff">' +
  '<circle cx="1.0" cy="1.0" r="0.26"/><circle cx="2.2" cy="1.0" r="0.26"/><circle cx="3.4" cy="1.0" r="0.26"/>' +
  '<circle cx="4.6" cy="1.0" r="0.26"/><circle cx="5.8" cy="1.0" r="0.26"/><circle cx="7.0" cy="1.0" r="0.26"/>' +
  '<circle cx="1.6" cy="2.6" r="0.26"/><circle cx="2.8" cy="2.6" r="0.26"/><circle cx="4.0" cy="2.6" r="0.26"/>' +
  '<circle cx="5.2" cy="2.6" r="0.26"/><circle cx="6.4" cy="2.6" r="0.26"/>' +
  '<circle cx="1.0" cy="4.2" r="0.26"/><circle cx="2.2" cy="4.2" r="0.26"/><circle cx="3.4" cy="4.2" r="0.26"/>' +
  '<circle cx="4.6" cy="4.2" r="0.26"/><circle cx="5.8" cy="4.2" r="0.26"/><circle cx="7.0" cy="4.2" r="0.26"/>' +
  '<circle cx="1.6" cy="5.8" r="0.26"/><circle cx="2.8" cy="5.8" r="0.26"/><circle cx="4.0" cy="5.8" r="0.26"/>' +
  '<circle cx="5.2" cy="5.8" r="0.26"/><circle cx="6.4" cy="5.8" r="0.26"/>' +
  '<circle cx="1.0" cy="7.2" r="0.26"/><circle cx="2.2" cy="7.2" r="0.26"/><circle cx="3.4" cy="7.2" r="0.26"/>' +
  '<circle cx="4.6" cy="7.2" r="0.26"/><circle cx="5.8" cy="7.2" r="0.26"/><circle cx="7.0" cy="7.2" r="0.26"/>' +
  '</g></svg>';

/** Bandera mostrada para cada locale en el selector. */
export const FLAGS: Record<Locale, string> = {
  es: FLAG_ES_SPAIN,
  en: FLAG_EN_USA,
};
