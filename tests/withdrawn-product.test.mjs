import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';

test('YAKSON is withdrawn from all public company pages while original records and assets remain',()=>{
 const routes=['','products/','products/uniqdata/','products/uniqlab/','products/bodab/','about/','vision/','founder/','awards/','contact/','institutions/'];
 for(const prefix of ['', 'en/']){
  for(const route of routes){
   const html=readFileSync(`${prefix}${route}index.html`,'utf8');
   assert.doesNotMatch(html,/YAKSON|약손|\/products\/#?yakson|yakson-evt/i,prefix+route);
  }
  const retired=readFileSync(`${prefix}products/yakson/index.html`,'utf8');
  assert.ok(retired.includes(`content="0;url=/${prefix}products/"`));
  assert.ok(retired.includes('content="noindex"'));
 }
 const products=readFileSync('products/index.html','utf8');
 assert.equal((products.match(/class="product-panel product-/g)||[]).length,3);
 const source=JSON.parse(readFileSync('assets/public-records.json','utf8'));
 assert.ok(source.products.some(product=>product.id==='yakson'));
 assert.ok(source.awards.some(record=>record.title.includes('약손')));
 for(const file of ['yakson-evt-v3-frame-20260916.png','yakson-evt-v3-preview-20260916.mp4'])assert.ok(existsSync('assets/verified/'+file));
});
