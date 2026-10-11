import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('Product value illustrations preserve personal choice and distinguish study consent from family sharing',()=>{
 const products=readFileSync('en/products/index.html','utf8');
 for(const text of ['Personal records','Choose use and sharing','Participant choice','Scope of consent','Review record sources','Choose what to share','Family stays informed'])assert.ok(products.includes(text),text);
 for(const product of ['uniqdata','uniqlab','bodab']){
  const detail=readFileSync(`en/products/${product}/index.html`,'utf8');
  assert.ok(detail.includes(`value-visual-${product}`));
  assert.match(detail,/<svg class="value-diagram"[^>]+role="img"[^>]+aria-label=/);
  assert.ok(detail.includes('Concept ·'));
 }
 const css=readFileSync('assets/neon-site-20260921.css','utf8');
 assert.match(css,/value-flow 2\.4s ease-out var\(--flow-delay\) 1/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)\{\.value-visual\.is-visible \.value-connection\{animation:none\}\}/);
 assert.match(css,/\.product-media\.value-visual figcaption[^}]+position:static/);
});
