<div align="center">

# VortexLM — High-Performance Marketing Platform & B2B Client Portal

**Astro 5 · Server-Side Rendering · React 19 Islands · Supabase · Vercel · DeepSeek AI**

[![Astro](https://img.shields.io/badge/Astro-5.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_%2B_Postgres-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![Node](https://img.shields.io/badge/Node-22.x-5FA04E?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-Proprietary-black)](#license)

</div>

---

## 1. Overview

VortexLM is the production platform behind **vortexlm.com**: a conversion-focused marketing site plus an authenticated B2B client portal for **Vortex Logic Microsystems LLC**, an engineering firm with its delivery team in **Caracas, Venezuela** and a white-label partner program for agencies in **Spain**.

The core problem it solves is twofold: (1) marketing websites that lose paid-ad traffic because they are slow, JavaScript-heavy and unmeasurable on unstable 3G/4G networks, and (2) client operations that get fragmented across email, WhatsApp and spreadsheets. This repository addresses both by pairing an **edge-rendered, mostly zero-JS Astro layer** with a **Supabase-backed portal** for projects, deliverables, notes, invoices and the proprietary `vCredits` billing model.

Architecturally, the project is a single Astro application running in **SSR mode on Vercel** (`output: 'server'`). Public pages ship as server-rendered HTML with inlined critical CSS and no client framework runtime; only the private portal hydrates **React 19 islands** (`client:load`). All privileged operations — AI chat, transactional email, session verification and admin authorization — run in **server-side API routes or SSR frontmatter**, so no third-party secret is ever exposed to the browser.

> **Live surfaces:** `/` (corporate), `/servicios` + `/servicios/*` and `/soluciones/*` (SEO silos), `/precios` (vCredits packs), `/como-funciona`, `/blog`, `/catalogo-mayorista-b2b-caracas`, `/desarrollo-web-caracas` and `/partner-tecnologico-b2b` (Google Ads landings), `/login`, `/registro`, `/dashboard/*` (client portal), `/dashboard/admin` (internal), `/keystatic` (CMS).

---

## 2. Key Features

### AI & Automation
- **Server-side AI assistant** — `POST /api/chat` proxies the **DeepSeek `deepseek-chat`** model through a guardrailed, Spanish-only system prompt that scopes answers to VortexLM's stack (Astro, Next.js, Supabase, Tailwind), enforces brevity (paragraphs of 2–3 lines, `max_tokens: 300`) and escalates high-intent leads to a human consultation.
- **Automated lead pipeline** — `POST /api/contact` accepts native `FormData`, validates every required field on the server and dispatches a transactional notification through **Resend** to `info@vortexlm.com`, including the selected service and message body.
- **WhatsApp-first conversion** — contextual `wa.me` deep links with per-page pre-filled intents plus a floating CTA widget, replacing the previous embedded chat overlay.

### Marketing & SEO Engineering
- **Programmatic SEO silos** — dedicated service and solution routes (`/servicios/desarrollo-web-caracas`, `/servicios/diseno-paginas-web-venezuela`, `/soluciones/sistemas-erp-software-medida`, and others) with unique copy, strategic internal linking and expandable link hubs.
- **Structured data** — JSON-LD `ProfessionalService` (Caracas / Distrito Capital / VE) and optional `FAQPage` schemas injected per page through `SEO.astro` and `FAQSchema.astro`.
- **Metadata pipeline** — canonical URLs, Open Graph, Twitter Cards, optional `noindex` for utility routes, and an `@astrojs/sitemap` build with deliberate exclusions for paid-traffic landings.
- **Blog engine (EEAT)** — Astro Content Collections with a Zod-validated schema, MDX authoring and a Git-based editorial workflow.
- **Focused ad landings** — `isLanding={true}` suppresses global navigation noise on Google Ads destinations.

### Authenticated B2B Portal
- **Supabase Auth** — email/password sign-up carrying `nombre_empresa` metadata; a database trigger provisions the client profile with an initial `vCredits` allowance. Sessions are verified **server-side** in `DashboardLayout.astro`, which redirects anonymous visitors to `/login`.
- **Projects workspace** — creation modal, status pipeline (`En Cola → En Desarrollo → Pruebas → Completado`), progress tracking and a tabbed detail view for **files, notes/bitácora and expert task checklists** persisted in relational tables.
- **Invoicing & payment reporting** — invoice history scoped by `user_id`, `Binance Pay` / bank-transfer instructions, and a "report payment" action that stamps a generated reference into `comprobante_pago_url`.
- **Internal admin panel** — `/dashboard/admin`, gated by the `es_admin` flag on `perfiles_clientes`, exposing vCredits balance editing, project status changes, task injection and invoice validation.

### Performance, DX & Observability
- **Zero render-blocking CSS (audited)** — `build.inlineStylesheets: 'always'` inlines each page's stylesheet into the HTML response, so no public route ships a `<link rel="stylesheet">` on the critical path (33 routes verified: 0 external stylesheets). Tailwind's global entry is owned by `src/styles/tailwind.css` with the integration's implicit injection disabled (`applyBaseStyles: false`), which also keeps the CMS route free of public-site CSS. The self-hosted font stylesheet still loads off the critical path via `media="print"` → `onload="this.media='all'"`, with a `<noscript>` fallback.
- **Self-hosted variable fonts** — Inter, JetBrains Mono, Space Grotesk and Material Symbols via `@fontsource`, with `font-display: swap` and an adjusted `Inter Fallback` metric override to suppress layout shift.
- **Deferred third-party analytics** — no `googletagmanager.com` request is made during the initial load. A ~3.4 KB inline bootstrap queues `dataLayer`/`gtag` calls from the first byte and injects `gtag.js` (Google Ads) plus `gtm.js` (GTM container) only on the first user signal: deliberate intent (immediate), a passive `scroll`/`mousemove` (deferred to the next frame/idle slot, never inside the event handler), an idle fallback after 4 s, or page hide. Removing GTM from the critical path also removed Partytown's eager service-worker bootstrap from every page.
- **Mobile viewport units instead of JS measurements** — full-height containers use Tailwind's `min-h-dvh` / `min-h-svh` (dynamic viewport units) and the global `body` rule ships `100vh` as a fallback followed by `100dvh`. Nothing reads `window.innerHeight` to size layout, so the collapsing mobile URL bar cannot trigger a resize recalculation. Hero sections inside long pages use `min-h-svh` on purpose: a *dvh* value would grow mid-scroll when the toolbar collapses and invalidate layout for everything below.
- **Conversion tracking that can't lose the click** — `gtag_report_conversion()` keeps its original contract (same `send_to: AW-18175185887/zparCIGTksIcEN-nzdpD`, same `event_callback` flow) and now forces the loader on click, with a 900 ms safety net so a blocked or slow tag can never leave a WhatsApp CTA dead.
- **Bundle isolation (verified)** — `manualChunks` keeps the Keystatic CMS graph in its own 2.75 MB chunk (`keystatic-page`), React core in `react-vendor` (194 KB) and tiny shared helpers in `vendor-shared`. The CMS chunk is only referenced from `/keystatic/*`, so hydrated portal islands load ≈400 KB instead of the full CMS bundle, and public pages load no JavaScript at all.
- **Strict typing** — `astro/tsconfigs/strict` applied to `src/**` and `keystatic.config.tsx`.

---

## 3. Tech Stack

### Core Runtime & Framework

| Layer | Technology | Version / Notes |
| --- | --- | --- |
| Framework | **Astro** | `^5.4.1`, `output: 'server'` (SSR) with selective prerendering |
| Adapter & Hosting | **@astrojs/vercel** | `^8.0.0`, Vercel Functions, `functionPerRoute: false`, Web Analytics on |
| Runtime | **Node.js** | `22.x`, pinned through the `engines` field |
| Language | **TypeScript** | strict preset across `.astro`, `.ts`, `.tsx` |
| Package manager | **npm** | `legacy-peer-deps=true` in `.npmrc` |

### Frontend & Design System

| Layer | Technology | Notes |
| --- | --- | --- |
| Styling | **Tailwind CSS** `^3.4.0` | `@astrojs/tailwind` with `applyBaseStyles: false`; single owned entry `src/styles/tailwind.css` (`@tailwind base/components/utilities`), inlined via `build.inlineStylesheets: 'always'`; `darkMode: 'class'` |
| Typography plugin | **@tailwindcss/typography** `^0.5.19` | `prose prose-invert` styling for MDX articles |
| Design tokens | Material-3-style palette + `linear-*` aliases | Black/near-black "Linear.app" aesthetic (`#000000`, `#08080c`, `#1f1f24`) |
| Fonts | `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`, `@fontsource/space-grotesk`, `@fontsource/material-symbols-outlined` | Self-hosted, `font-display: swap`, zero third-party font requests |
| Interactive islands | **React** `^19.2.6` via `@astrojs/react` `^5.0.4` | `client:load` used exclusively inside `/dashboard` |
| Analytics bootstrap | Inline shim, `src/scripts/analytics-loader.js` via `?raw` | ~3.4 KB inline (comments stripped at build time); injects GTM/gtag after the first user signal |

### Backend, Data & Integrations

| Layer | Technology | Notes |
| --- | --- | --- |
| Database | **PostgreSQL (Supabase)** | `perfiles_clientes`, `proyectos`, `proyectos_archivos`, `proyectos_notas`, `proyectos_tareas`, `facturas` |
| Auth | **Supabase Auth** | Email/password, `autoRefreshToken`, `persistSession`, session re-verified server-side |
| Client SDK | `@supabase/supabase-js` `^2.106.2` | Publishable/anon key + Row Level Security policies |
| AI model | **DeepSeek `deepseek-chat`** | `https://api.deepseek.com/chat/completions`, bearer key held server-side |
| Transactional email | **Resend** `^6.12.3` | Lead notifications from `info@vortexlm.com` |
| Messaging | **WhatsApp Business deep links** (`wa.me`) | Primary conversion channel with Ads tracking |
| Analytics | **GTM · GA4 · Google Ads · Vercel Web Analytics** | Deferred (interaction / idle 4 s / page hide); container `GTM-P4MK3GT9`, conversion `AW-18175185887` |
| CMS | **Keystatic** (`@keystatic/core` `^0.5.50`, `@keystatic/astro` `^5.0.6`) | GitHub storage in production, local storage in development |
| Content pipeline | `@astrojs/mdx` `^4.1.0` + **Content Collections** | Zod schema: `title`, `description`, `pubDate`, `author`, `image`, `category` |
| SEO | `@astrojs/sitemap` `^3.7.2` | Filtered sitemap + static `robots.txt` |

### External Configuration (not environment-driven)

| Item | Value | Location |
| --- | --- | --- |
| GTM container | `GTM-P4MK3GT9` | `src/layouts/BaseLayout.astro` |
| Google Ads ID / conversion label | `AW-18175185887` / `zparCIGTksIcEN-nzdpD` | `src/layouts/BaseLayout.astro` |
| Corporate WhatsApp line | `+58 422-8101010` | CTA links & `LiveChat.astro` |
| Notification mailbox | `info@vortexlm.com` | `src/pages/api/contact.ts` |

---

## 4. Architecture & Workflow

### High-Level Topology

```
                       ┌──────────────────────────────────────────────┐
   Visitors / Clients  │  Browser (public pages: HTML + tiny inline  │
   Ads / SEO traffic ─▶│  JS only · dashboard: React 19 islands)     │
                       └───────────────┬──────────────────────────────┘
                                       │ HTTPS
                                       ▼
        ┌───────────────────────────────────────────────────────────────┐
        │                 Vercel Edge / Serverless (Node 22)            │
        │                                                               │
        │  Astro SSR (output: 'server')          API Routes (Prerender:false)
        │  ├─ BaseLayout  → SEO + GTM/GA4 + CDN fonts                    │
        │  │                 (critical CSS inlined, async stylesheet)     │
        │  ├─ DashboardLayout → Supabase session gate → /login redirect   │
        │  ├─ /dashboard/admin → es_admin authorization check            │
        │  ├─ /blog/*  (prerender = true, MDX Content Collections)        │
        │  └─ /keystatic (CMS UI, isolated vendor chunk)                 │
        │                            ├── POST /api/contact  ──▶ Resend    │
        │                            └── POST /api/chat     ──▶ DeepSeek  │
        └───────┬──────────────────────────────────────────┬────────────┘
                │ supabase-js (anon key + RLS)             │ server secrets
                ▼                                          ▼
     ┌──────────────────────────┐          ┌───────────────────────────────┐
     │ Supabase                 │          │ Third-party services          │
     │ ├─ Auth (email/password) │          │ ├─ Resend (transactional mail)│
     │ └─ Postgres + RLS        │          │ ├─ DeepSeek (chat completions)│
     │    perfiles_clientes     │          │ ├─ Google Ads / GTM / GA4     │
     │    proyectos (+archivos, │          │ └─ WhatsApp (wa.me deep links)│
     │      notas, tareas)      │          └───────────────────────────────┘
     │    facturas              │
     └──────────────────────────┘
```

### Request Flows

1. **Public page render (SSR, no hydration)** — the request hits the Vercel function, Astro renders the page with `BaseLayout`, which inlines critical CSS, emits SEO/JSON-LD tags, loads the font stylesheet asynchronously and writes the analytics bootstrap inline. No third-party JS is requested during the initial load; the Google tags are injected afterwards on the first user signal. Result: HTML-first payload with no client framework runtime.
2. **Lead capture** — the visitor submits a `ContactForm` (`FormData`) → `POST /api/contact` validates `name`, `email` and `service` → Resend sends the notification to `info@vortexlm.com`. The endpoint returns `{ success: true }` or a Spanish error message consumed by the inline feedback element.
3. **AI conversation** — the client posts `{ messages: [...] }` → `POST /api/chat` prepends the guardrailed system prompt → DeepSeek returns a completion (`max_tokens: 300`, non-streaming) → the response is proxied back unchanged, with `502/500` mapped to friendly errors.
4. **Authentication** — `/login` or `/registro` calls `supabase.auth.signInWithPassword` / `signUp` with `nombre_empresa` metadata; the database trigger creates the `perfiles_clientes` row and grants the initial vCredits.
5. **Portal access** — every `/dashboard/*` request runs `DashboardLayout`, which re-validates the session server-side and redirects to `/login` when absent; `/dashboard/admin` additionally verifies `es_admin`, otherwise redirecting back to `/dashboard`.
6. **Billing loop** — vCredits packs are purchased manually; consumption is tracked as differential rates per service type (`15`, `12`, `10`, `8` vCredits/hour), and invoices are reported by the client then validated by an operator from the admin panel.

### Project Structure

```
VortexLM/
├─ astro.config.mjs          # SSR + Vercel adapter, integrations, Vite chunking
├─ keystatic.config.tsx      # CMS schema (local storage in dev, GitHub in prod)
├─ tailwind.config.mjs       # Material-3 tokens + Linear-style aliases
├─ .env.example              # Environment variable template
├─ plans/                    # Implementation plans (Google Ads landings, etc.)
├─ public/                   # robots.txt, sitemap index, favicons
└─ src/
   ├─ components/
   │  ├─ seo/                # SEO.astro, GoogleTagManager.astro, FAQSchema.astro
   │  ├─ ui/                 # Heroes, price cards, vCredits explainers, Navbar, Footer
   │  └─ dashboard/          # React islands: CreateProjectModal, ProjectTabs,
   │                         # PaymentToggle, AdminActions
   ├─ content/blog/          # 6 MDX articles (silo: digital transformation VE)
   ├─ data/                  # mockDashboardData.ts (typed fixture model)
   ├─ layouts/               # BaseLayout.astro, DashboardLayout.astro
   ├─ lib/supabaseClient.ts  # Shared Supabase browser/SSR client
   ├─ scripts/
   │  ├─ analytics-loader.js # Inline queue-first shim + deferred GTM/gtag loader
   │  └─ analytics-inline.ts # Comment stripping + bootstrap builder (runs once)
   ├─ pages/
   │  ├─ api/                # contact.ts, chat.ts
   │  ├─ dashboard/          # index, proyectos/[id], facturacion, admin
   │  ├─ servicios/ | soluciones/ | blog/
   │  └─ index.astro, precios.astro, contacto.astro, login.astro, registro.astro, 404.astro
   └─ styles/
      ├─ tailwind.css        # Owned Tailwind entry (base + components + utilities)
      └─ fonts.css           # @fontsource imports (loaded async)
```

---

## 5. Getting Started

### 5.1 Prerequisites

| Requirement | Version / Detail |
| --- | --- |
| **Node.js** | `22.x` (enforced by `engines`; older majors are unsupported) |
| **npm** | 10+ (lockfile is `package-lock.json`; `.npmrc` sets `legacy-peer-deps=true`) |
| **Supabase project** | Postgres tables + Auth enabled (see [5.4](#54-data-model-reference)) |
| **DeepSeek API key** | Required for `POST /api/chat` |
| **Resend API key** | Required for `POST /api/contact` (verified sending domain) |
| **GitHub OAuth App** | Required only for the Keystatic CMS in non-local environments |
| **Vercel account** | Optional, for production deploys |

### 5.2 Installation

```bash
# 1. Clone the repository
git clone https://github.com/jggalviz/VortexLM.git
cd VortexLM

# 2. Install dependencies (peer-dependency warnings are expected)
npm install

# 3. Create your local environment file from the template
#    Windows (PowerShell)
Copy-Item .env.example .env
#    macOS / Linux
cp .env.example .env

# 4. Fill in the secrets (see 5.3) and start Astro's development server
npm run dev
```

The dev server starts on **`http://localhost:4321`** (Astro default).

### 5.3 Environment Variables

All variables are read with `import.meta.env`. Only keys prefixed with `PUBLIC_` reach the browser bundle; everything else stays server-side. A ready-to-copy template lives in **`.env.example`**.

| Variable | Scope | Required | Purpose |
| --- | --- | --- | --- |
| `PUBLIC_SUPABASE_URL` | public | ✅ | Supabase project URL used by `src/lib/supabaseClient.ts` |
| `PUBLIC_SUPABASE_ANON_KEY` | public | ✅ | Publishable/anon key — pair it with RLS policies |
| `DEEPSEEK_API_KEY` | server | ✅ (chat) | Bearer token for `https://api.deepseek.com/chat/completions` |
| `RESEND_API_KEY` | server | ✅ (forms) | Transactional email dispatch in `POST /api/contact` |
| `PUBLIC_GA4_ID` | public | ⬜ | GA4 measurement ID injected via `GoogleTagManager.astro` |
| `KEYSTATIC_GITHUB_CLIENT_ID` | server | ⬜ | Keystatic GitHub storage (production) |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | server | ⬜ | Keystatic GitHub storage (production) |
| `KEYSTATIC_SECRET` | server | ⬜ | Encryption secret for Keystatic sessions |

> **Notes**
> - `src/lib/supabaseClient.ts` throws at import time if the two `PUBLIC_SUPABASE_*` variables are missing — the app will fail fast rather than render a broken portal.
> - `POST /api/chat` returns `502` when DeepSeek is unreachable and logs the upstream status; `POST /api/contact` returns `500` with an explicit message when Resend is not configured.
> - The Vercel CLI also writes `VERCEL_OIDC_TOKEN` into `.env.local` on `vercel link` / `vercel env pull`. Treat it as a credential: `.env*` is already git-ignored.
> - GTM, Google Ads and the WhatsApp number are hardcoded in the layout (see [3.4](#external-configuration-not-environment-driven)), not environment-driven.

### 5.4 Data Model Reference

Expected Supabase tables and the columns the code reads or writes:

| Table | Key columns used by the app |
| --- | --- |
| `perfiles_clientes` | `user_id`, `empresa`, `email`, `representante`, `vcredits_actuales`, `vcredits_consumidos`, `vcredits_totales`, `es_admin`, `proyectos_activos`, `facturas_pendientes`, `alertas` |
| `proyectos` | `user_id`, `titulo`, `descripcion`, `tipo`, `urgencia`, `estado`, `progreso`, `archivos`, `notas`, `tareas_experto`, `created_at` |
| `proyectos_archivos` | `proyecto_id`, `nombre`, `tamano`, `subido_por`, `created_at` |
| `proyectos_notas` | `proyecto_id`, `contenido`, `autor`, `created_at` |
| `proyectos_tareas` | `proyecto_id`, `tarea`, `completada`, `fecha`, `created_at` |
| `facturas` | `user_id`, `numero`, `concepto`, `monto`, `estado`, `comprobante_pago_url`, `created_at` |

A database trigger on `auth.users` inserts the `perfiles_clientes` row (using `nombre_empresa` metadata) and grants the starting vCredits balance. Enable **Row Level Security** on every table so the publishable key can only reach rows owned by the authenticated `user_id`.

### 5.5 Running Locally

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro dev server with HMR on `http://localhost:4321` (Keystatic uses local file storage in dev) |
| `npm start` | Alias of `dev` |
| `npm run build` | Production build — SSR entry for Vercel plus prerendered `/blog/*` routes |
| `npm run preview` | Preview the built output locally |
| `npm run lint` | Zero-dependency lint pass: esbuild compile check over every source file plus the performance/HTML rules (layout reads, `useLayoutEffect`, non-passive listeners, legacy viewport units, unbalanced `<script>` tags, inline handlers bound to module-scoped functions) |
| `npm run lint:strict` | Same run, but warnings also fail (exit code 1) |
| `npm run astro -- <cmd>` | Direct access to the Astro CLI (e.g. `npm run astro -- check`) |

**Local verification checklist**

```bash
# 1. Marketing page — verify SSR output contains SEO + JSON-LD
curl -s http://localhost:4321/ | findstr "application/ld+json"

# 2. Blog prerender (6 MDX routes)
#    build output: dist/client/blog/<slug>/index.html

# 3. Portal gate — anonymous requests must be redirected to /login
curl -i http://localhost:4321/dashboard

# 4. Health of the API surface
curl -i -X POST http://localhost:4321/api/contact -F "name=Test" -F "email=test@example.com" -F "service=desarrollo-web"
```

### 5.6 Production Deployment (Vercel)

1. Import the repository into Vercel; the framework preset is detected as **Astro** and Node 22 is used.
2. Add every variable from [5.3](#53-environment-variables) to the project's **Environment Variables** (Production + Preview).
3. Push to `main` — Vercel runs `npm install` (honouring `.npmrc`) then `npm run build`; the adapter emits the serverless function plus static assets, with Web Analytics enabled.
4. Post-deploy smoke test: `/`, `/precios`, `/blog`, `/dashboard` (redirect), `/api/contact` and `/sitemap-index.xml`.

> `vercel.json.backup` holds a rotated-out edge configuration (immutable caching for `avif|webp|png|jpg|jpeg|svg|css|js` plus `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection`). It is inert documentation — re-enable it as `vercel.json` only after validating against the current `@astrojs/vercel` output.

---

## 6. Usage Examples

### 6.1 AI Assistant — `POST /api/chat`

```bash
curl -X POST http://localhost:4321/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      { "role": "user", "content": "Necesito una plataforma SaaS con suscripciones y dashboard multi-tenant." }
    ]
  }'
```

The endpoint injects the VortexLM system prompt server-side, calls `deepseek-chat` with `max_tokens: 300` and returns the upstream completion verbatim:

```jsonc
{
  "id": "…",
  "object": "chat.completion",
  "model": "deepseek-chat",
  "choices": [
    { "index": 0, "message": { "role": "assistant", "content": "…" }, "finish_reason": "stop" }
  ],
  "usage": { "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0 }
}
```

Validation contract: a missing or invalid `messages` array yields `400 { "error": "Messages array is required" }`; upstream failures yield `502`, unexpected exceptions `500`.

### 6.2 Lead Capture — `POST /api/contact`

```bash
# Native multipart/form-data — no client-side JSON serialization required
curl -X POST http://localhost:4321/api/contact \
  -F "name=María Rodríguez" \
  -F "email=maria@empresa.com" \
  -F "service=sistemas-gestion-medida" \
  -F "message=Necesitamos un ERP para 3 sedes y facturación fiscal."
# → { "success": true }
```

Browser-side (the pattern used by `ContactForm.astro`):

```js
const res = await fetch('/api/contact', {
  method: 'POST',
  body: new FormData(document.getElementById('contact-form-reusable')),
});
const data = await res.json();   // { success: true } | { error: '…' }
```

`name`, `email` and `service` are mandatory; `message` is optional. Emails are delivered to `info@vortexlm.com` with the subject `Nuevo contacto: <service> - <name>`.

### 6.3 Client Portal Queries (Supabase)

The portal reads through the shared client in `src/lib/supabaseClient.ts`:

```ts
import { supabase } from '../lib/supabaseClient';

// Current session (re-validated server-side by DashboardLayout)
const { data: sessionData } = await supabase.auth.getSession();
const userId = sessionData?.session?.user?.id;

// Account profile (vCredits, alerts, KPI counters)
const { data: perfil } = await supabase
  .from('perfiles_clientes')
  .select('*')
  .eq('user_id', userId)
  .single();

// Projects owned by the authenticated client, newest first
const { data: proyectos } = await supabase
  .from('proyectos')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false });

// Invoices with the same scoping
const { data: facturas } = await supabase
  .from('facturas')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false });
```

### 6.4 Creating a Project from the UI

`CreateProjectModal` is a React island mounted on `/dashboard/proyectos`. It supports two modes — controlled (`open` / `onClose`) and self-managed through the `open-create-project` custom event — and inserts with the authenticated `user_id`:

```ts
await supabase.from('proyectos').insert({
  user_id: userId,
  titulo: formData.titulo,
  descripcion: formData.descripcion,
  tipo: formData.tipo,          // 'web' | …
  urgencia: formData.urgencia,  // 'normal' | …
  estado: 'En Cola',
  progreso: 0,
  archivos: [],
  notas: [],
  tareas_experto: [],
});

// Notify the project list to refresh
window.dispatchEvent(new CustomEvent('proyectos-refresh'));
```

### 6.5 Editorial Workflow (Keystatic CMS)

1. Run `npm run dev` and open **`http://localhost:4321/keystatic`** — development uses **local storage**, so entries are written straight to `src/content/blog/*.mdx`.
2. Create an entry: the `blog` collection validates `title`, `description`, `pubDate`, `author`, `category` and an optional cover image under `public/images/blog/`.
3. Commit and push — the entry becomes a prerendered route at `/blog/<slug>` through Content Collections + `getStaticPaths`.
4. In production the same UI uses **GitHub storage** (`jggalviz/VortexLM`), which requires the three `KEYSTATIC_*` variables.

### 6.6 vCredits Pricing Model (as rendered by the UI)

| Pack | vCredits | Price (USD) | Rate | Discount |
| --- | --- | --- | --- | --- |
| **Starter** | 100 | `$105.00` | `$1.05` / credit | — |
| **Growth** (recommended) | 500 | `$498.75` | `$0.9975` / credit | 5% |
| **Scale** | 1,000 | `$945.00` | `$0.945` / credit | 10% |

| Service rate | vCredits/hour | Effective price/hour |
| --- | --- | --- |
| Development (Astro, React, Next.js, APIs) | 15 | `$15.75` |
| Support & WPO (WordPress, WooCommerce) | 12 | `$12.60` |
| Advanced analytics & infrastructure (GA4, GTM) | 12 | `$12.60` |
| Campaign management (Google/Meta Ads) & landing design | 10 | `$10.50` |
| Short-form ad video editing (Reels/TikTok) | 8 | `$8.40` |

Business rules enforced by the UI copy and the portal: **1 vCredit = 1 hour** of specialized work, credits never expire, and there are no retainers or lock-in periods.

---

## 7. Operational Notes & Known Caveats

- **Floating widget vs. AI endpoint** — `LiveChat.astro` now opens WhatsApp with a context-aware message; `POST /api/chat` remains fully functional for programmatic or future embedded use.
- **Secret hygiene** — `.env*` is git-ignored with an explicit `!.env.example` allowlist. Never commit real keys, and rotate any credential that has ever been pushed to a shared remote.
- **Sitemap exclusions are intentional** — `/desarrollo-web-caracas` and `/partner-tecnologico-b2b` are Google Ads destinations and are filtered out of the generated sitemap in `astro.config.mjs` to avoid organic/paid cannibalization.
- **`robots.txt`** still lists legacy `Disallow: /item*` and `/hg/` rules inherited from a previous platform; safe to prune after auditing crawl logs.
- **`src/data/mockDashboardData.ts`** is a typed fixture used for UI prototyping; the live portal reads exclusively from Supabase.
- **CSS delivery strategy** — the global Tailwind bundle (≈102 KB raw / ≈13 KB gzip) is inlined into every HTML response instead of being a separate request. Rationale: most funnel sessions are single-page views on unstable networks, so removing one round trip beats cross-navigation CSS caching. Measured payload: blog HTML ≈133 KB raw / 25 KB gzip with zero blocking stylesheets.
- **Misleading asset names are fixed at the source** — the previous build emitted `/_astro/keystatic-astro-page.<hash>.css` on every public page. It contained no Keystatic code: it was Tailwind's globally injected `base.css`, attributed by Rollup to the CMS entry. Owning the entry removes both the blocking request and the confusing name.
- **Build warnings are expected** — Vite still reports the intentionally large CMS chunks (`keystatic-page` ≈2.75 MB, `react-vendor` ≈194 KB); they are isolated on purpose and only fetched by the routes that need them.
- **Two silent bugs are now lint-guarded** — (a) an unclosed decorative `<script type="application/ld+json">` on `/servicios/diseno-paginas-web-caracas` swallowed 20 KB of markup (four sections, the FAQ and the contact form) and (b) all twelve `onclick="submitFormX()"` handlers were declared inside bundled `<script>` modules, so Rollup tree-shook them and **every contact form on the site was dead**. Both are fixed (`is:inline` + escaped markup); `npm run lint` now fails if either pattern returns.
- **Deferred analytics trade-off** — Google tags load on the first interaction, on the idle fallback (4 s, `delayMs` prop in `GoogleTagManager.astro`), on `pagehide` or when the tab is hidden. Bounces shorter than the idle window with zero interaction are therefore not measured by GA4; pass `delayMs={0}` to switch to interaction-only loading (maximum PageSpeed gain, more data loss) or raise the delay to trade the other way. Google Ads conversions are unaffected: a CTA click always loads the tag immediately.
- **Legacy viewport units are warnings, not errors** — `npm run lint` flags `h-screen`/`min-h-screen`/bare `100vh` so new sections keep using `dvh`/`svh`; the progressive-enhancement fallback (`100vh` immediately followed by `100dvh`) is accepted.
- **Partytown was removed on purpose** — it initialised a service worker and a sandbox iframe on every page load, proxied `googletagmanager.com` through a third-party endpoint (`cdn.builder.io`) and cannot consume scripts injected after its bootstrap, so it is incompatible with deferred loading. `@astrojs/partytown` is still declared in `package.json` but no longer registered in `astro.config.mjs`; uninstall it on a Linux environment (this lockfile targets Linux, so `npm uninstall` fails on Windows with `notsup`).

---

## 8. Roadmap

| Horizon | Item |
| --- | --- |
| **Near term** | Stream DeepSeek responses (SSE) and re-embed the assistant as a hydrated island; add rate limiting and CAPTCHA to `/api/contact` |
| **Near term** | Real binary uploads to Supabase Storage for `proyectos_archivos` (currently metadata-only records) |
| **Mid term** | Generated Supabase types (`supabase gen types`) replacing `any` in dashboard pages; Vitest suites and a Lighthouse CI performance budget |
| **Mid term** | Automated vCredits ledger with transactional deduction on task completion plus Stripe / Binance Pay webhook reconciliation |
| **Mid term** | Restore and validate the `vercel.json` security-header and immutable-cache policy against the current adapter output |
| **Long term** | Multicurrency invoicing (USD/EUR) with PDF generation, client-facing analytics dashboards, and a self-service white-label partner portal for the Spain market |

---

## 9. Contributing & Conventions

- **Branches & commits** — feature branches merged into `main` with Conventional-Commit-style messages (`feat(landing): …`, `design: …`, `tracking: …`), matching the existing history.
- **Styling** — use the Tailwind tokens declared in `tailwind.config.mjs` (`linear-*` aliases and the Material-3 palette) instead of raw hex values; keep the dark, high-contrast, Linear-inspired language.
- **Performance budget** — public pages must stay HTML-first: prefer SSR markup, inlined critical CSS, lazy-loaded below-the-fold assets, and hydrate React only where interactivity is genuinely required.
- **No DOM geometry reads** — `offsetWidth`, `getBoundingClientRect`, `innerHeight` and friends are blocked by the linter. If a measurement is unavoidable, batch it inside `requestAnimationFrame` or use `ResizeObserver`/`IntersectionObserver`; never read geometry right after mutating a class or style. A justified read needs an explicit `// lint-allow-layout-read` comment.
- **Never do DOM work inside `scroll` handlers** — passive listeners are registered with `{ passive: true }` and any work they trigger is deferred to `requestAnimationFrame`/`requestIdleCallback` (see `src/scripts/analytics-loader.js`).
- **Full-height containers use `dvh`/`svh`, not `100vh`** — `min-h-dvh` for portal/app surfaces, `min-h-svh` for heroes inside long pages. Never size layout with JS viewport math.
- **Inline inline-handler globals need `is:inline`** — Astro bundles plain `<script>` tags as ES modules, so a `function foo() {}` declared there is module-scoped *and* tree-shaken away, breaking any `onclick="foo()"`. Declare such handlers inside `<script is:inline>` or attach them with `addEventListener` (the linter enforces this).
- **SEO** — every new public route must render `SEO.astro` with a unique `title`, `description` and, when relevant, `faqItems` / `isLocalBusiness`.
- **Secrets** — server-only variables must never be referenced by client scripts and must never be prefixed with `PUBLIC_`.

---

## 10. License

**Proprietary — © Vortex Logic Microsystems LLC. All rights reserved.** This repository is not licensed for redistribution or reuse. No part of the codebase, design system or content may be copied, republished or used to create derivative works without prior written consent.

---

<div align="center">

**VortexLM** — Engineering high-performance digital products from Caracas · Delivery in Spanish and English

[WhatsApp](https://wa.me/584228101010) · [info@vortexlm.com](mailto:info@vortexlm.com) · [vortexlm.com](https://vortexlm.com)

</div>
