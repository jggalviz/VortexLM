# Google Ads Landing Pages — Implementation Plan

## Overview

Create two new landing pages optimized for Google Ads conversion, following the existing Linear/black design system from `index.astro`. Both pages use `isLanding={true}` for a focused, distraction-free experience.

---

## Page 1: `/desarrollo-web-caracas`

**Route:** `src/pages/desarrollo-web-caracas.astro`
**Purpose:** Google Ads landing for Caracas businesses seeking web development
**Layout:** `BaseLayout` with `isLanding={true}`

### Sections

1. **Hero** — Full Linear-style hero with gradient bg, grid overlay, glow orb
   - H1: Focused on Caracas web development / diseño web
   - Subtitle: Value prop about speed, SEO local, and modern tech
   - Primary CTA: "Cotizar proyecto" (white button)
   - Secondary CTA: "Ver portafolio" (outline button)
   - Terminal/IDE mockup showing Caracas-specific code

2. **Trust/Stats Bar** — Sticky sub-navigation or stats row (like index.astro sticky nav)
   - 3 metrics: projects delivered, avg page speed score, client retention

3. **Features (3 cards)** — Same 3-column pattern as index.astro
   - Card 1: Diseño Web Profesional (SVG cube icon)
   - Card 2: SEO Local Caracas (SVG layers icon)
   - Card 3: Velocidad Extrema (SVG node sphere icon)

4. **Alternating Detail Block 1** — Text left, mockup right
   - Label: "SEO Local"
   - H2: About dominating Google in Caracas
   - Mockup: PageSpeed audit with 100/100 scores

5. **Alternating Detail Block 2** — Mockup left, text right
   - Label: "Tecnología Moderna"
   - H2: About Astro/Next.js stack
   - Mockup: Terminal build output or dashboard

6. **Infrastructure (2 cards)** — Same as index.astro
   - Card 1: Clean Code & Security
   - Card 2: Real-time Monitoring

7. **FAQ Section** — Accordion style (3-4 questions about Caracas web dev)
   - Use `<details>` pattern from `desarrollo-web-astro-react-nextjs.astro`

8. **Contact Form** — Same form pattern as index.astro
   - Hidden field: `service="desarrollo-web-caracas"`
   - Form ID: `contact-form-caracas`
   - Submit function: `submitFormCaracas()`

### LiveChat Integration
- Path-based quick buttons already defined in `LiveChat.astro` for `/desarrollo-web-caracas`
- Add `window.openLiveChat()` global function to LiveChat for CTA buttons

---

## Page 2: `/partner-tecnologico-b2b`

**Route:** `src/pages/partner-tecnologico-b2b.astro`
**Purpose:** Google Ads landing for B2B tech partnerships (agencies, Spain market)
**Layout:** `BaseLayout` with `isLanding={true}`

### Sections

1. **Hero** — Same Linear-style hero
   - H1: Focused on B2B tech partnership / white-label development
   - Subtitle: Value prop about outsourcing, MVP development, Core Web Vitals audits
   - Primary CTA: "Solicitar información" (white button)
   - Secondary CTA: "Ver capacidades técnicas" (outline button)
   - Mockup: Dashboard showing partnership metrics or pipeline

2. **Trust Bar** — Stats row
   - 3 metrics: developers available, years experience, projects delivered

3. **Services (3 cards)** — What partners get
   - Card 1: Subcontratación de Desarrollo (SVG icon)
   - Card 2: MVP / SaaS Development (SVG icon)
   - Card 3: Auditoría Técnica (SVG icon)

4. **Alternating Detail Block 1** — Text left, mockup right
   - Label: "Capacidad Técnica"
   - H2: About the engineering team and process
   - Mockup: CI/CD pipeline status or code review interface

5. **Alternating Detail Block 2** — Mockup left, text right
   - Label: "Metodología Ágil"
   - H2: About agile development and communication
   - Mockup: Sprint board or timeline

6. **Infrastructure (2 cards)** — Same pattern
   - Card 1: Seguridad y Calidad
   - Card 2: Escalabilidad Global

7. **FAQ Section** — Accordion style (3-4 questions about B2B partnership)
   - What is the engagement model?
   - How does communication work (time zones)?
   - What technologies do you use?
   - What is the typical project timeline?

8. **Contact Form** — Same form pattern
   - Hidden field: `service="partner-tecnologico-b2b"`
   - Form ID: `contact-form-partner`
   - Submit function: `submitFormPartner()`

### LiveChat Integration
- Path-based quick buttons already defined in `LiveChat.astro` for `/partner-tecnologico-b2b`

---

## Shared Implementation Details

### Exact Tailwind Classes to Use (from index.astro)

| Element | Classes |
|---------|---------|
| **Section wrapper** | `py-36 px-6 md:px-12 bg-black relative border-b border-[#1f1f24]` |
| **Hero section** | `relative pt-36 pb-32 overflow-hidden linear-gradient-bg border-b border-[#1f1f24] px-6 md:px-12` |
| **Content container** | `max-w-[1200px] mx-auto relative z-10` |
| **Grid overlay** | `absolute inset-0 linear-grid opacity-30 pointer-events-none` |
| **Glow orb** | `absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none` |
| **H1** | `text-4xl md:text-7xl font-extralight tracking-tight text-white mb-8 leading-[1.08] max-w-4xl mx-auto opacity-95` |
| **Subtitle** | `text-base md:text-lg text-[#cbd5e1] font-light mb-12 max-w-3xl mx-auto leading-relaxed` |
| **Primary CTA** | `w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold text-xs rounded-full hover:bg-neutral-200 transition-all text-center duration-200 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.15)]` |
| **Secondary CTA** | `w-full sm:w-auto px-6 py-3 text-white/90 font-medium text-xs rounded-full hover:text-white flex items-center justify-center gap-1.5 group transition-colors` |
| **Section label (mono)** | `text-[10px] font-mono text-[#cbd5e1] uppercase tracking-widest block font-medium` |
| **H2 (section title)** | `text-2xl md:text-4xl font-light text-white tracking-tight leading-snug` |
| **H2 (centered large)** | `text-3xl md:text-5xl font-light text-white tracking-tight` |
| **H3 (card title)** | `text-sm font-medium text-white mb-2.5` |
| **Body paragraph** | `text-sm text-[#cbd5e1] font-light leading-relaxed` |
| **Card text** | `text-xs text-[#cbd5e1] leading-relaxed` |
| **Card container** | `linear-card rounded border border-[#1f1f24] bg-[#08080c]/30 p-6 glow-hover transition-all` |
| **Card icon area** | `w-full aspect-[4/3] linear-card rounded border border-[#1f1f24] bg-[#08080c]/30 flex items-center justify-center p-6 glow-hover transition-all` |
| **Mockup card** | `linear-card rounded-lg border border-[#1f1f24] overflow-hidden bg-[#08080c]/50 p-6 shadow-2xl` |
| **Form card** | `linear-card p-8 rounded-lg border border-[#1f1f24] bg-[#08080c]/40 text-left space-y-6` |
| **Form input** | `w-full bg-black border border-[#1f1f24] rounded px-4 py-3 text-xs text-white placeholder-neutral-800 focus:outline-none focus:border-white transition-colors` |
| **Form label** | `block text-[10px] font-mono text-[#cbd5e1] uppercase tracking-wider mb-2 font-medium` |
| **Form submit button** | `w-full py-3 bg-white text-black font-semibold text-xs rounded hover:bg-neutral-200 transition-colors duration-200` |
| **FAQ details** | `group border-b border-[#1f1f24] py-4` |
| **FAQ summary** | `flex items-center justify-between cursor-pointer text-white font-medium text-sm list-none` |
| **FAQ answer** | `mt-3 text-sm text-[#cbd5e1] leading-relaxed` |

### LiveChat Enhancement Needed

Add a global function in [`LiveChat.astro`](src/components/ui/LiveChat.astro) to enable programmatic opening:

```js
// Add after the existing script code
window.openLiveChat = function() {
  if (!isOpen) toggleChat();
};
```

This allows any CTA button on the landing pages to open the chat via `onclick="window.openLiveChat()"`.

### Form Submission Pattern

Each landing page needs its own form submit function (following the pattern in `index.astro`):

```astro
<script>
  async function submitFormCAREPLACEHOLDER() {
    const form = document.getElementById('contact-form-CAREPLACEHOLDER');
    const feedback = document.getElementById('form-feedback');
    const btn = form.querySelector('button[type="button"]');
    
    if (!form.checkValidity()) { form.reportValidity(); return; }
    
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(form)
      });
      const data = await res.json();
      
      if (data.success) {
        feedback.className = 'text-sm mt-4 text-green-400';
        feedback.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
        feedback.classList.remove('hidden');
        form.reset();
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      feedback.className = 'text-sm mt-4 text-red-400';
      feedback.textContent = 'Error al enviar. Intenta de nuevo o escríbenos a info@vortexlm.com.';
      feedback.classList.remove('hidden');
    } finally {
      btn.disabled = false;
      btn.textContent = btn.getAttribute('data-original-text') || 'Enviar';
    }
  }
</script>
```

---

## Todo List

### Phase 1: LiveChat Enhancement
- [ ] Add `window.openLiveChat()` global function to `LiveChat.astro`

### Phase 2: Page 1 — `/desarrollo-web-caracas`
- [ ] Create `src/pages/desarrollo-web-caracas.astro`
- [ ] Implement Hero section with Caracas-focused messaging
- [ ] Implement Trust/Stats bar
- [ ] Implement 3-card Features section
- [ ] Implement Alternating Detail Block 1 (SEO Local)
- [ ] Implement Alternating Detail Block 2 (Modern Tech)
- [ ] Implement Infrastructure 2-card section
- [ ] Implement FAQ accordion section
- [ ] Implement Contact form with `service="desarrollo-web-caracas"`

### Phase 3: Page 2 — `/partner-tecnologico-b2b`
- [ ] Create `src/pages/partner-tecnologico-b2b.astro`
- [ ] Implement Hero section with B2B partnership messaging
- [ ] Implement Trust/Stats bar
- [ ] Implement 3-card Services section
- [ ] Implement Alternating Detail Block 1 (Technical Capacity)
- [ ] Implement Alternating Detail Block 2 (Agile Methodology)
- [ ] Implement Infrastructure 2-card section
- [ ] Implement FAQ accordion section
- [ ] Implement Contact form with `service="partner-tecnologico-b2b"`

### Phase 4: QA & Polish
- [ ] Verify both pages render correctly with `isLanding={true}`
- [ ] Verify LiveChat contextual buttons fire on correct paths
- [ ] Verify form submissions work end-to-end
- [ ] Verify mobile responsiveness
- [ ] Verify no broken links or references
