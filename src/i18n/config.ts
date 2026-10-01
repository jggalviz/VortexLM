// src/i18n/config.ts
//
// Configuración raíz del sistema de internacionalización (i18n) de VortexLM.
//
// El sitio se sirve en SSR (`output: 'server'`) y algunas rutas se prerenderizan
// (p. ej. /caso-saas-medisys y el blog). Para que el cambio de idioma funcione de
// forma idéntica en rutas SSR y prerenderizadas, sin recargar la página y
// conservando la selección durante toda la navegación, la traducción se resuelve
// en el cliente:
//
//   • `es` es el idioma por defecto: es el que renderiza el servidor, por lo que
//     el HTML inicial (y por tanto el SEO/SSR) siempre sale bien formado.
//   • `en` se aplica en el navegador sobre los nodos marcados con `data-i18n`.
//   • La preferencia se persiste en `localStorage` (y se refleja en cookie para
//     que un futuro enrutado por idioma o una capa SSR pueda reutilizarla).
//
// Ver `src/i18n/client.ts` (motor) y `src/i18n/ui.ts` (diccionarios).

/** Idioma por defecto = el que renderiza el servidor. */
export const DEFAULT_LOCALE = 'es' as const;

/** Idiomas soportados por el selector. */
export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

/** Clave de persistencia en el navegador (localStorage + cookie espejo). */
export const LOCALE_STORAGE_KEY = 'vortex-lang';

/** Nombre de la cookie espejo (mismo valor que la clave de storage). */
export const LOCALE_COOKIE_KEY = 'vortex-lang';

export interface LocaleMeta {
  /** Código corto mostrado en el selector (utilidad `font-code`). */
  label: string;
  /** Endónimo mostrado en la lista desplegable. */
  name: string;
  /** Valor aplicado al atributo `lang` de `<html>`. */
  htmlLang: string;
  /** Valor de `og:locale` (reservado para el enrutado por idioma). */
  ogLocale: string;
  /** Valor BCP-47 para `hreflang` (reservado para el enrutado por idioma). */
  hreflang: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  es: { label: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES', hreflang: 'es-VE' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en' },
};

/** Type-guard: reduce un valor arbitrario (p. ej. de localStorage) a `Locale`. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}
