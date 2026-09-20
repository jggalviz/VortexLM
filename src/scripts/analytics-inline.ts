// src/scripts/analytics-inline.ts
//
// Produces the single inline <head> payload that ships the analytics bootstrap.
//
// The readable, fully documented source lives in `analytics-loader.js`; this
// module strips its comments and indentation exactly once (module scope, so SSR
// requests only read a cached constant) and keeps the wire payload ~1 KB gzipped.
import loaderSource from './analytics-loader.js?raw';

function stripCommentsAndIndentation(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '') // block comments (the file uses no // or inline strings with /*)
    .replace(/\n\s*\n/g, '\n') // blank lines
    .replace(/^[ \t]+/gm, '') // leading indentation
    .trim();
}

const compactLoaderSource = stripCommentsAndIndentation(loaderSource);

export interface AnalyticsConfig {
  gtmId: string;
  adsId: string;
  conversionSendTo: string;
  ga4Id: string;
  delayMs: number;
}

export function buildAnalyticsBootstrap(config: AnalyticsConfig): string {
  return `window.__vxAnalytics=${JSON.stringify(config)};${compactLoaderSource}`;
}
