import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('English company routes provide language navigation and correct product destinations', () => {
  for (const route of ['', 'about/', 'products/', 'contact/']) {
    const html = readFileSync(`en/${route}index.html`, 'utf8');
    assert.match(html, /<html lang="en">/);
    assert.ok(html.includes(`https://www.sportique.biz/en/${route}`));
    assert.ok(html.includes('UniQdata.io'));
    assert.ok(html.includes('UniQLab.io'));
    assert.ok(html.includes('href="/en/contact/"'));
    assert.doesNotMatch(html, /guaranteed participants|integrated with Teladoc|unlimited recruitment/i);
  }
  const html = readFileSync('en/products/index.html', 'utf8');
  assert.ok(html.includes('https://uniqdata.io/?lang=en'));
  assert.ok(html.includes('https://uniqlab.io/?lang=en'));
  assert.ok(html.includes('Individuals choose whether to participate'));
});
