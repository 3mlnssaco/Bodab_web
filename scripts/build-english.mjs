import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const copy = JSON.parse(readFileSync('scripts/english-copy.json', 'utf8'));
const decode = value => value.replace(/&(amp|quot|apos|lt|gt|#39);/g, (_, key) => ({ amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', '#39': "'" })[key]);
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const route = path => `/en${path}`;
function translate(value) {
  const text = decode(value.trim());
  if (/[가-힣]/u.test(text) && !Object.hasOwn(copy, text)) throw new Error(`Missing English translation: ${text}`);
  const translated = copy[text] ?? text;
  return value.replace(value.trim(), escape(translated));
}
function destination(value) {
  if (value.startsWith('/') && !value.startsWith('//') && !value.startsWith('/assets/')) return route(value);
  if (/^https:\/\/www\.sportique\.biz\//.test(value)) return value.replace('https://www.sportique.biz/', 'https://www.sportique.biz/en/');
  if (/^https:\/\/(uniqdata|uniqlab)\.io\/?$/.test(value)) return `${value.replace(/\/$/, '')}/?lang=en`;
  return value.replace('SportiQue%20협업%20문의', 'SportiQue%20partnership%20inquiry').replace('SportiQue%20제품%20이용%20문의', 'SportiQue%20product%20support');
}
// Translate the Korean build, keeping its markup, media and interaction hooks intact.
export function buildEnglish(paths) {
  for (const path of paths) {
    const input = path === '/' ? 'index.html' : path === '/404.html' ? '404.html' : `${path.slice(1)}index.html`;
    const output = `en/${input}`;
    let html = readFileSync(input, 'utf8').replace(/<[^>]+>|[^<]+/g, token => {
      if (!token.startsWith('<')) return translate(token);
      return token.replace(/(alt|aria-label|content|href|lang)="([^"]*)"/g, (attribute, key, value) => {
        if (key === 'href') return `${key}="${destination(value)}"`;
        if (key === 'lang' && value === 'ko') return 'lang="en"';
        if (key === 'lang') return attribute;
        return `${key}="${translate(value)}"`;
      });
    });
    // Each language switch stays on the matching page.
    html = html.replace(/<a class="language-switch"[^>]*>[\s\S]*?<\/a>/, link => link
      .replace(`href="/en/en${path}"`, `href="${path}"`)
      .replace('lang="en"', 'lang="ko"')
      .replaceAll('Switch to English', 'Switch to Korean')
      .replace('<span>EN</span>', '<span>KO</span>'));
    html = html.replace('</head>', `<link rel="alternate" hreflang="ko" href="https://www.sportique.biz${path}"><link rel="alternate" hreflang="en" href="https://www.sportique.biz${route(path)}"></head>`);
    mkdirSync(output.slice(0, output.lastIndexOf('/')), { recursive: true });
    writeFileSync(output, html);
  }
  console.log(`Translated ${paths.length} company pages with the original UI and media.`);
}
