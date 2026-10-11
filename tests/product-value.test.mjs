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

test('About explains the public company scope without IR commercial or competitor details',()=>{
 const about=readFileSync('en/about/index.html','utf8');
 for(const text of ['Personal health record management','Consented records connected to research','Everyday care and medication','Record use adapted to the setting','Scope','new consent']){
  assert.ok(about.toLowerCase().includes(text.toLowerCase()),text);
 }
 assert.equal((about.match(/<article>/g)||[]).length,7);
 assert.ok(about.includes('remain to be tested in the pilot'));
 assert.doesNotMatch(about,/Evidation|PicnicHealth|Citizen Health|Patientory|revenue model|unit economics|gross margin|subscription pricing|fundraising target|\bKRW\b|\bUSD\b/i);
});


test('UniQLab 3D explains personal choice without app UI and keeps reduced-motion controls',()=>{
 for(const prefix of ['', 'en/'])for(const route of ['products/', 'products/uniqlab/']){
  const html=readFileSync(`${prefix}${route}index.html`,'utf8');
  assert.ok(html.includes('data-research-3d'));
  assert.ok(!html.includes('/assets/verified/uniqlab-data-table-20260513.png'));
  assert.ok(html.includes('research-core'));
  assert.ok(html.includes('research-consent-badge'));
  assert.ok(html.includes('research-3d-concept'));
 }
 const js=readFileSync('assets/neon-site-20260921.js','utf8');
 assert.ok(js.includes("reduced.matches||event.pointerType!=='mouse'"));
 assert.ok(js.includes("style.removeProperty('--research-x')"));
});


test('Every public product explains the designed sharing architecture without completion claims',()=>{
 for(const prefix of ['', 'en/']){
  const listing=readFileSync(`${prefix}products/index.html`,'utf8');
  assert.equal((listing.match(/class="product-sharing"/g)||[]).length,3);
  for(const id of ['uniqdata','uniqlab','bodab']){
   const detail=readFileSync(`${prefix}products/${id}/index.html`,'utf8');
   assert.match(detail,/class="product-sharing"/);
   assert.ok(detail.includes(prefix?'sharing architecture separates':'공유 아키텍처는'));
   assert.equal((detail.match(/<ol class="sharing-architecture">/g)||[]).length,1);
   assert.doesNotMatch(detail,/We are developing a blockchain|블록체인 기반 구조를 개발하고|구현 예정/);
   assert.ok(detail.includes(prefix?'decryption keys stay outside the public ledger':'복호화 키를 공개 원장에 올리는 방식이 아닙니다'));
   assert.doesNotMatch(detail,/all events are on-chain|blockchain guarantees|100% secure/i);
  }
 }
});


test('All sharing architectures are illustrated with controllable motion and recipient labels',()=>{
 for(const prefix of ['', 'en/']){
  const page=readFileSync(`${prefix}products/index.html`,'utf8');
  assert.equal((page.match(/data-sharing-motion/g)||[]).length,3);
  assert.equal((page.match(/data-sharing-pause/g)||[]).length,3);
  for(const id of ['uniqdata','uniqlab','bodab'])assert.ok(readFileSync(`${prefix}products/${id}/index.html`,'utf8').includes('sharing-travel-bundle'));
 }
 const css=readFileSync('assets/neon-site-20260921.css','utf8');
 assert.ok(css.includes('@media(prefers-reduced-motion:reduce){.sharing-depth *{animation:none!important}'));
 assert.ok(css.includes('28%,42%{transform:translate(240px,0)'));
 assert.ok(css.includes('@keyframes sharing-locked'));
 assert.ok(css.includes('@keyframes sharing-evidence'));
 assert.ok(css.includes('animation-play-state:paused'));
});
