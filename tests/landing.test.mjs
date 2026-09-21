import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const html=readFileSync('index.html','utf8');
test('world map is the first section and preserves navigation and product destinations',()=>{
 assert.ok(html.indexOf('class="world-hero"')<html.indexOf('id="network"'));
 for(const url of ['/products/','/about/','/founder/','/awards/','/contact/','https://org.sportique.biz/','https://uniqdata.io/'])assert.ok(html.includes(`href="${url}"`),url);
 for(const route of ['about','products','founder','awards','contact'])assert.ok(existsSync(route+'/index.html'));
 for(const asset of ['world-home-20260921.css','world-home-20260921.js','world-countries-20260921.json','sportique-icon.jpg'])assert.ok(existsSync('assets/'+asset));
 assert.equal(readFileSync('CNAME','utf8').trim(),'www.sportique.biz');
});
test('public footprint distinguishes server locations from markets and preserves individual consent narrative',()=>{
 const js=readFileSync('assets/world-home-20260921.js','utf8');
 assert.ok(js.includes('서비스 출시 국가나 고객 진출 실적과는 구분'));
 for(const text of ['저장·활용·공유','UniQdata','DataQ','개인이 연구 참여와 공유 범위를 선택한 뒤','2025년 XRPL','원문은 블록체인에 저장하지'])assert.ok(html.includes(text),text);
 assert.ok(!/Bearer|\/api\/admin\/|api\.kr\.uniqdata/.test(js+html));
 assert.ok(js.includes("e.key==='Enter'"));assert.ok(html.includes('aria-live="polite"'));assert.ok(html.includes('<noscript>'));
});
test('atlas includes independently selectable sites and a full world outline',()=>{
 const atlas=JSON.parse(readFileSync('assets/world-countries-20260921.json','utf8'));assert.equal(atlas.countries.length,177);
 for(const code of ['KR','MN','US'])assert.ok(atlas.countries.find(c=>c.code===code)?.path.startsWith('M'));
 assert.equal(atlas.license,'Public domain');
});
const pageFiles=['index.html','products/index.html','about/index.html','founder/index.html','awards/index.html','contact/index.html','institutions/index.html','404.html'];
const publicRecords=JSON.parse(readFileSync('assets/public-records.json','utf8'));
const escapeHtml=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
test('every public page has the same original-logo neon shell and real institution login destination',()=>{
 for(const file of pageFiles){const page=readFileSync(file,'utf8');assert.ok(page.includes('/assets/neon-site-20260921.css'),file);assert.ok(page.includes('/assets/neon-site-20260921.js'),file);assert.ok(page.includes('class="brand original-brand"'),file);assert.ok(page.includes('https://org.sportique.biz/products/uniqlab'),file);assert.ok(page.includes('aria-label="모바일 메뉴"'),file);assert.ok(!page.includes('src="/assets/index-org-20260817.js"'),file);assert.ok(!page.includes('admin.sportique.biz'),file);assert.equal((page.match(/<h1(?:\s|>)/g)||[]).length,1,file);}
});
test('redesign preserves each founder and award record, date and metadata without promoting its status',()=>{
 for(const [key,file] of [['founder','founder/index.html'],['awards','awards/index.html']]){const page=readFileSync(file,'utf8');for(const record of publicRecords[key])for(const value of Object.values(record))assert.ok(page.includes(escapeHtml(value)),file+': '+value);}
 assert.equal(publicRecords.founder.length,14);assert.equal(publicRecords.awards.length,11);
});
test('all four product anchors, original destinations and feature descriptions remain usable',()=>{
 const page=readFileSync('products/index.html','utf8');for(const product of publicRecords.products){assert.ok(page.includes(`id="${product.id}"`));assert.ok(page.includes(`href="${escapeHtml(product.href)}"`));for(const value of [product.description,product.detail,...product.features,...product.modules])assert.ok(page.includes(escapeHtml(value)),value);}
 const institution=readFileSync('institutions/index.html','utf8');assert.ok(institution.includes('https://org.sportique.biz/onboarding'));assert.ok(institution.includes('https://web.uniqlab.io/'));assert.ok(!/<input[^>]+type="password"/.test(institution));
});
test('3D is progressive enhancement; original map controls survive reduced-motion or renderer failure',()=>{
 const script=readFileSync('assets/neon-site-20260921.js','utf8');assert.ok(script.includes('prefers-reduced-motion'));assert.ok(script.includes('hologram-fallback'));assert.ok(existsSync('assets/vendor/LICENSE'));assert.ok(existsSync('assets/vendor/three.core.js'));assert.ok(existsSync('assets/vendor/three.module.js'));
 const renderer=readFileSync('assets/world-hologram-20260921.js','utf8');assert.ok(renderer.includes('IntersectionObserver'));assert.ok(renderer.includes('visibilitychange'));assert.ok(renderer.includes('renderer.dispose()'));
});
