/*
 * VortexLM — deferred analytics bootstrap.
 *
 * This file is NOT bundled as a separate request: it is imported with `?raw`
 * from src/components/seo/GoogleTagManager.astro and inlined into <head>.
 * Keep it dependency-free and free of ESM syntax (no import/export), because
 * the source is injected verbatim into the HTML document.
 *
 * Phase 1 — queue-first shim (runs immediately, ~1 KB of inline JS):
 *   window.dataLayer, window.gtag and window.gtag_report_conversion exist from
 *   the first byte, so nothing is ever lost: every call made before the real
 *   tags arrive is queued and replayed by gtag.js/GTM once they load.
 *
 * Phase 2 — deferred injection (never during the initial load):
 *   The Google Ads tag (gtag.js) and the GTM container (gtm.js) are injected
 *   only on the first real user signal:
 *     a) any interaction (pointerdown/mousedown/keydown/touchstart/scroll/mousemove)
 *     b) an idle callback with timeout (`delayMs`, default 4000 ms)
 *     c) page hide / tab hidden, so short sessions are not silently dropped
 *   The configuration arrives through `window.__vxAnalytics`, written by the
 *   component right before this source: { gtmId, adsId, conversionSendTo,
 *   ga4Id, delayMs }. Set `delayMs: 0` to disable the idle fallback and load
 *   analytics on interaction only.
 */
(function () {
  'use strict';

  var cfg = window.__vxAnalytics || {};
  var delay = typeof cfg.delayMs === 'number' ? cfg.delayMs : 4000;
  var INTERACTION_EVENTS = ['pointerdown', 'mousedown', 'keydown', 'touchstart', 'scroll', 'mousemove'];
  var injected = false;
  var idleHandle = null;
  var timeoutHandle = null;

  /* ── Phase 1: queue-first shim ─────────────────────────────────────────── */

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
  window.gtag('js', new Date());
  if (cfg.adsId) window.gtag('config', cfg.adsId);
  if (cfg.ga4Id) window.gtag('config', cfg.ga4Id);

  /* ── Phase 2: deferred injection ───────────────────────────────────────── */

  function inject(src) {
    var el = document.createElement('script');
    el.async = true;
    el.src = src;
    (document.head || document.documentElement).appendChild(el);
  }

  function load() {
    if (injected) return;
    injected = true;
    disarm();

    // Google Ads first: the WhatsApp conversion path depends on it.
    if (cfg.adsId) {
      inject('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(cfg.adsId));
    }

    // GTM container (tags are managed inside GTM, incl. GA4 destinations).
    if (cfg.gtmId) {
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      inject('https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(cfg.gtmId));
    }
  }

  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') load();
  }

  function disarm() {
    for (var i = 0; i < INTERACTION_EVENTS.length; i++) {
      window.removeEventListener(INTERACTION_EVENTS[i], load);
    }
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pagehide', load);
    if (idleHandle !== null && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleHandle);
    }
    if (timeoutHandle !== null) clearTimeout(timeoutHandle);
    idleHandle = null;
    timeoutHandle = null;
  }

  function arm() {
    for (var i = 0; i < INTERACTION_EVENTS.length; i++) {
      window.addEventListener(INTERACTION_EVENTS[i], load, { once: true, passive: true });
    }
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', load, { once: true });

    if (delay > 0) {
      if (typeof window.requestIdleCallback === 'function') {
        idleHandle = window.requestIdleCallback(load, { timeout: delay });
      } else {
        timeoutHandle = setTimeout(load, delay);
      }
    }
  }

  // Public hook: also used by gtag_report_conversion() so a revenue click
  // forces the load immediately instead of waiting for the idle fallback.
  window.__vxLoadAnalytics = load;

  /* ── Conversion helper (same contract as before) ───────────────────────── */

  window.gtag_report_conversion = function (url) {
    var opened = false;
    var open = function () {
      if (opened) return;
      opened = true;
      if (typeof url !== 'undefined' && url) window.open(url, '_blank');
    };

    // A click is the best possible moment to load analytics.
    load();

    if (cfg.conversionSendTo) {
      try {
        window.gtag('event', 'conversion', {
          send_to: cfg.conversionSendTo,
          event_callback: open,
        });
      } catch (err) {
        /* fall through to the safety timeout below */
      }
      // Safety net: if the tag is blocked, slow or still queued, the user must
      // still reach WhatsApp. 900 ms stays inside the browser's transient
      // activation window, so window.open() is never popup-blocked.
      setTimeout(open, 900);
    } else {
      open();
    }

    return false;
  };

  arm();
})();
