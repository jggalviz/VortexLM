// src/i18n/client.ts
//
// Motor i18n en el navegador.
//
// Responsabilidades:
//   1. Resolver el idioma activo (localStorage → cookie → por defecto `es`).
//   2. Sustituir el texto de los nodos marcados en el HTML con atributos
//      `data-i18n*`, sin recargar la página ni rehidratar componentes.
//   3. Sincronizar el selector del navbar (bandera, código y opción activa).
//   4. Persistir la preferencia (localStorage + cookie espejo) y exponer `t()`
//      para los scripts inline que generan texto dinámico (p. ej. el formulario).
//
// Gracias a que el idioma por defecto es `es`, el HTML que devuelve el servidor
// (SSR o prerender) ya está completo y correcto; este motor solo reescribe nodos
// cuando el usuario ha elegido `en`.

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_KEY,
  LOCALE_META,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from './config';
import { FLAGS } from './flags';
import { getDictionary, type UiKey } from './ui';

declare global {
  interface Window {
    vortexI18n?: {
      getLocale: () => Locale;
      setLocale: (locale: string) => void;
      t: (key: string, fallback?: string) => string;
    };
  }
}

/** Idioma activo en memoria (mantenido al día por `applyLocale`). */
let currentLocale: Locale = DEFAULT_LOCALE;

/** Lee la preferencia guardada; `localStorage` manda sobre la cookie. */
function readStoredLocale(): Locale {
  try {
    const fromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(fromStorage)) return fromStorage;
  } catch {
    /* localStorage puede estar bloqueado (modo privado / cookies restringidas) */
  }

  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|; )${LOCALE_COOKIE_KEY}=([^;]*)`)
    );
    const fromCookie = match ? decodeURIComponent(match[1]) : null;
    if (isLocale(fromCookie)) return fromCookie;
  } catch {
    /* document.cookie puede lanzar si el almacenamiento está deshabilitado */
  }

  return DEFAULT_LOCALE;
}

/** Persiste la preferencia en localStorage y en una cookie espejo. */
function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* sin persistencia local: la selección sigue viva durante la sesión */
  }

  try {
    const maxAge = 60 * 60 * 24 * 365; // 1 año
    document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; path=/; max-age=${maxAge}; samesite=lax`;
  } catch {
    /* cookies bloqueadas: no es crítico */
  }
}

/**
 * Traduce una clave con el idioma activo. Pensado para scripts inline que
 * componen texto después de la carga (mensajes de éxito/error del formulario).
 */
export function t(key: UiKey | string, fallback = ''): string {
  const dict = getDictionary(currentLocale) as Record<string, string>;
  return dict[key] ?? fallback;
}

/** Reescribe todos los nodos `data-i18n*` del documento. */
function translateDocument(locale: Locale): void {
  const dict = getDictionary(locale) as Record<string, string>;
  const valueFor = (key: string | null): string | null =>
    key && typeof dict[key] === 'string' ? dict[key] : null;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((node) => {
    const value = valueFor(node.getAttribute('data-i18n'));
    if (value !== null) node.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((node) => {
    const value = valueFor(node.getAttribute('data-i18n-placeholder'));
    if (value !== null) {
      (node as HTMLInputElement | HTMLTextAreaElement).placeholder = value;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((node) => {
    const value = valueFor(node.getAttribute('data-i18n-title'));
    if (value !== null) node.setAttribute('title', value);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((node) => {
    const value = valueFor(node.getAttribute('data-i18n-aria-label'));
    if (value !== null) node.setAttribute('aria-label', value);
  });

  // <title> de la pestaña y <meta name="description"> (si la página los declara).
  const titleValue = valueFor(document.documentElement.getAttribute('data-i18n-doc-title'));
  if (titleValue !== null) document.title = titleValue;

  const descriptionMeta = document.querySelector<HTMLMetaElement>('[data-i18n-meta-description]');
  if (descriptionMeta) {
    const descriptionValue = valueFor(
      descriptionMeta.getAttribute('data-i18n-meta-description')
    );
    if (descriptionValue !== null) descriptionMeta.setAttribute('content', descriptionValue);
  }
}
/** Refleja el idioma activo en la bandera, el código y la opción marcada. */
function syncSelectors(locale: Locale): void {
  const meta = LOCALE_META[locale];

  document.querySelectorAll<HTMLElement>('[data-lang-flag]').forEach((node) => {
    node.innerHTML = FLAGS[locale];
  });

  document.querySelectorAll<HTMLElement>('[data-lang-code]').forEach((node) => {
    node.textContent = meta.label;
  });

  document.querySelectorAll<HTMLElement>('[data-lang-option]').forEach((node) => {
    const isActive = node.getAttribute('data-lang-option') === locale;
    node.setAttribute('data-active', isActive ? 'true' : 'false');
    node.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  document.querySelectorAll<HTMLElement>('[data-lang-check]').forEach((node) => {
    const option = node.closest('[data-lang-option]');
    const isActive = option?.getAttribute('data-active') === 'true';
    node.classList.toggle('opacity-0', !isActive);
  });
}

/** Aplica un locale: `<html lang>`, textos y estado del selector. */
export function applyLocale(locale: Locale): void {
  currentLocale = locale;
  document.documentElement.lang = LOCALE_META[locale].htmlLang;
  document.documentElement.setAttribute('data-lang', locale);
  translateDocument(locale);
  syncSelectors(locale);
  // Red de seguridad del antirruido visual: el HTML se revela ya traducido.
  document.documentElement.classList.remove('i18n-pending');
}

/** Cambia el idioma activo y lo persiste. */
export function setLocale(value: string): void {
  const locale: Locale = isLocale(value) ? value : DEFAULT_LOCALE;
  persistLocale(locale);
  applyLocale(locale);
  document.dispatchEvent(
    new CustomEvent('vortex:languagechange', { detail: { locale } })
  );
}

function closeSelector(selector: HTMLElement): void {
  const details = selector.querySelector<HTMLDetailsElement>('details');
  if (details) details.open = false;
}

function wireSelectors(): void {
  document.querySelectorAll<HTMLElement>('[data-lang-selector]').forEach((selector) => {
    selector.querySelectorAll<HTMLElement>('[data-lang-option]').forEach((option) => {
      option.addEventListener('click', () => {
        setLocale(option.getAttribute('data-lang-option') ?? DEFAULT_LOCALE);
        closeSelector(selector);
      });
    });
  });

  // Cierra el desplegable al hacer clic fuera o al pulsar Escape.
  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    document.querySelectorAll<HTMLElement>('[data-lang-selector]').forEach((selector) => {
      if (!target || !selector.contains(target)) closeSelector(selector);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll<HTMLElement>('[data-lang-selector]').forEach(closeSelector);
    }
  });
}

/** Punto de entrada: se llama una vez por página desde BaseLayout. */
export function initI18n(): void {
  const initial = readStoredLocale();
  applyLocale(initial);
  wireSelectors();

  window.vortexI18n = {
    getLocale: () => currentLocale,
    setLocale,
    t: (key: string, fallback = '') => t(key, fallback),
  };

  // Notifica al resto de scripts de la página (p. ej. el botón de sesión del
  // navbar) para que sus textos dinámicos usen el idioma activo.
  document.dispatchEvent(
    new CustomEvent('vortex:languagechange', { detail: { locale: initial } })
  );
}

