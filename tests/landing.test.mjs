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
