import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#050507",
        "on-surface": "#f7f7f8",
        "on-secondary-fixed": "#0e1c2f",
        "on-error": "#690005",
        "tertiary-fixed": "#e2e2e2",
        "secondary-fixed-dim": "#bac7e1",
        "surface-variant": "#121216",
        "outline": "#43434d",
        "primary-container": "#1c1c24",
        "tertiary-container": "#2e2e38",
        "tertiary-fixed-dim": "#c6c6c7",
        "inverse-on-surface": "#121216",
        "on-primary": "#000000",
        "error": "#ffb4ab",
        "tertiary": "#8a8a93",
        "outline-variant": "#1f1f24",
        "surface-container-highest": "#1c1c24",
        "on-primary-fixed": "#2c0051",
        "on-tertiary-fixed": "#1a1c1c",
        "primary": "#f7f7f8",
        "secondary-fixed": "#d6e3fe",
        "surface-dim": "#08080a",
        "secondary": "#8a8a93",
        "secondary-container": "#121216",
        "on-secondary-fixed-variant": "#3a475d",
        "on-tertiary-fixed-variant": "#454747",
        "surface-container-high": "#121216",
        "surface-container": "#08080c",
        "background": "#000000",
        "surface-tint": "#f7f7f8",
        "on-background": "#f7f7f8",
        "inverse-primary": "#ffffff",
        "on-primary-fixed-variant": "#6700b5",
        "on-secondary-container": "#a8b6cf",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#f7f7f8",
        "on-tertiary": "#2f3131",
        "primary-fixed-dim": "#ffffff",
        "on-surface-variant": "#8a8a93",
        "surface": "#000000",
        "inverse-surface": "#ffffff",
        "on-secondary": "#243145",
        "surface-container-lowest": "#000000",
        "surface-bright": "#1f1f24",
        "primary-fixed": "#ffffff",
        "on-tertiary-container": "#e1e1e1",
        "error-container": "#93000a",
        
        // Custom Linear theme specific aliases for clarity
        "linear-border": "#1f1f24",
        "linear-charcoal": "#08080c",
        "linear-gray": "#121216",
        "linear-muted": "#8a8a93",
        "linear-text": "#f7f7f8",
        "linear-glow": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "margin-mobile": "20px",
        "container-max": "1200px",
        "margin-desktop": "80px",
        "unit": "4px"
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "display-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "body-md": ["15px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-md": ["13px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "display-lg": ["80px", {"lineHeight": "1.05", "letterSpacing": "-0.04em", "fontWeight": "200"}],
        "headline-lg-mobile": ["36px", {"lineHeight": "1.15", "letterSpacing": "-0.02em", "fontWeight": "300"}],
        "headline-md": ["28px", {"lineHeight": "1.3", "fontWeight": "400"}],
        "headline-lg": ["56px", {"lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "300"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "300"}],
        "label-sm": ["11px", {"lineHeight": "1.4", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    typography,
  ],
}
