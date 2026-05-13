import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#1f1924",
        "on-surface": "#eadfee",
        "on-secondary-fixed": "#0e1c2f",
        "on-error": "#690005",
        "tertiary-fixed": "#e2e2e2",
        "secondary-fixed-dim": "#bac7e1",
        "surface-variant": "#39323d",
        "outline": "#988ca0",
        "primary-container": "#8a2be2",
        "tertiary-container": "#626464",
        "tertiary-fixed-dim": "#c6c6c7",
        "inverse-on-surface": "#342e39",
        "on-primary": "#480081",
        "error": "#ffb4ab",
        "tertiary": "#c6c6c7",
        "outline-variant": "#4c4354",
        "surface-container-highest": "#39323d",
        "on-primary-fixed": "#2c0051",
        "on-tertiary-fixed": "#1a1c1c",
        "primary": "#dcb8ff",
        "secondary-fixed": "#d6e3fe",
        "surface-dim": "#16111b",
        "secondary": "#bac7e1",
        "secondary-container": "#3a475d",
        "on-secondary-fixed-variant": "#3a475d",
        "on-tertiary-fixed-variant": "#454747",
        "surface-container-high": "#2e2832",
        "surface-container": "#231d28",
        "background": "#16111b",
        "surface-tint": "#dcb8ff",
        "on-background": "#eadfee",
        "inverse-primary": "#8422dc",
        "on-primary-fixed-variant": "#6700b5",
        "on-secondary-container": "#a8b6cf",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#eed9ff",
        "on-tertiary": "#2f3131",
        "primary-fixed-dim": "#dcb8ff",
        "on-surface-variant": "#cfc2d7",
        "surface": "#16111b",
        "inverse-surface": "#eadfee",
        "on-secondary": "#243145",
        "surface-container-lowest": "#110c16",
        "surface-bright": "#3d3742",
        "primary-fixed": "#efdbff",
        "on-tertiary-container": "#e1e1e1",
        "error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "margin-mobile": "20px",
        "container-max": "1440px",
        "margin-desktop": "80px",
        "unit": "4px"
      },
      fontFamily: {
        "body-md": ["Inter"],
        "label-md": ["JetBrains Mono"],
        "display-lg": ["Space Grotesk"],
        "headline-lg-mobile": ["Space Grotesk"],
        "headline-md": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "body-lg": ["Inter"],
        "label-sm": ["JetBrains Mono"]
      },
      fontSize: {
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-md": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.1em", "fontWeight": "500"}],
        "display-lg": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "headline-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    typography,
  ],
}
