import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const routes = ['', 'about/', 'products/', 'products/uniqdata/', 'products/uniqlab/', 'products/bodab/', 'vision/', 'founder/', 'awards/', 'contact/', 'institutions/'];
const read = (prefix, route) => readFileSync(`${prefix}${route}index.html`, 'utf8');
const tags = html => [...html.matchAll(/<[^>]+>/g)].map(match => match[0])
  .filter(tag => !tag.includes('hreflang='))
  .map(tag => tag.replace(/\s(?:alt|aria-label|content|href|lang|title)="[^"]*"/g, ''));

test('Every English page retains the Korean page structure, media and interaction hooks', () => {
  for (const route of routes) {
    const korean = read('', route), english = read('en/', route);
    assert.deepEqual(tags(english), tags(korean), route || 'home');
    assert.match(english, /<html lang="en">/);
    assert.ok(english.includes(`https://www.sportique.biz/en/${route}`));
    assert.ok(english.includes(`class="language-switch" href="/${route}" lang="ko" aria-label="Switch to Korean"`));
    assert.ok(english.includes('<span>KO</span>'));
    assert.ok(korean.includes(`class="language-switch" href="/en/${route}" lang="en" aria-label="Switch to English"`));
    assert.ok(korean.includes('<span>EN</span>'));
    assert.doesNotMatch(english.replace('한국어', ''), /[가-힣]/u, route || 'home');
    assert.doesNotMatch(english, /guaranteed participants|integrated with Teladoc|unlimited recruitment/i);
  }
  assert.deepEqual(tags(readFileSync('en/404.html', 'utf8')), tags(readFileSync('404.html', 'utf8')));
});

test('English product pages explain the three remaining app values', () => {
  const home = read('en/', ''), products = read('en/', 'products/');
  assert.ok(home.includes('value-visual-uniqdata'));
  assert.ok(home.includes('Scattered records. Choices that are yours.'));
  assert.doesNotMatch(products, /yakson|YAKSON/);
  for (const product of ['uniqdata', 'uniqlab', 'bodab']) assert.ok(products.includes(`value-visual-${product}`));
  for (const asset of ['uniqdata-home-dev-20260916.png', 'uniqlab-data-table-20260513.png', 'bodab-screen-20260922.png']) assert.ok(!products.includes(asset));
  assert.ok(products.includes('Individuals') || products.includes('individuals'));
  for (const route of ['uniqdata', 'uniqlab', 'bodab']) assert.ok(products.includes(`href="/en/products/${route}/"`));
  assert.ok(home.includes('https://uniqdata.io/?lang=en'));
});

test('English contact retains Gmail, mail app, copy-address and onboarding actions', () => {
  const contact = read('en/', 'contact/');
  for (const address of ['hello@sportique.biz', 'support@sportique.biz']) {
    assert.ok(contact.includes(`data-copy-email="${address}"`));
    assert.ok(contact.includes(`href="mailto:${address}`));
    assert.ok(contact.includes(`to=${address.replace('@', '%40')}`));
  }
  for (const marker of ['contact-editorial', 'contact-address-display', 'contact-choice-actions', 'https://org.sportique.biz/onboarding', 'https://org.sportique.biz/workspace?lang=en']) assert.ok(contact.includes(marker), marker);
  assert.ok(contact.includes('Compose in Gmail'));
  assert.ok(contact.includes('Compose in your mail app'));
  const runtime = readFileSync('assets/neon-site-20260921.js', 'utf8');
  assert.ok(runtime.includes('Email address copied.'));
  assert.ok(runtime.includes('${count} public records'));
});
