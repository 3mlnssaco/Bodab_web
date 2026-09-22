import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
const html=readFileSync('index.html','utf8');
test('world map is the first section and preserves navigation and product destinations',()=>{
 assert.ok(html.indexOf('class="world-hero"')<html.indexOf('id="network"'));
 for(const url of ['/products/','/about/','/founder/','/awards/','/contact/','/institutions/','https://org.sportique.biz/products/uniqlab','https://uniqdata.io/'])assert.ok(html.includes(`href="${url}"`),url);
 for(const route of ['about','products','founder','awards','contact'])assert.ok(existsSync(route+'/index.html'));
 for(const asset of ['world-home-20260921.css','world-home-20260921.js','world-countries-20260921.json','sportique-icon.jpg'])assert.ok(existsSync('assets/'+asset));
 assert.ok(html.includes('data-brand-emblem'));assert.ok(html.includes('class="logo-canvas"'));
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
 const emblem=readFileSync('assets/sportique-emblem-3d.js','utf8');for(const proof of ['ExtrudeGeometry','original green S','IntersectionObserver','prefers-reduced-motion','renderer.dispose()'])assert.ok(emblem.includes(proof),proof);assert.ok(!emblem.includes('TextureLoader'));
});
test('home tells care, fragmentation, individual control, and UniQdata in that order without the rejected YOU orbit',()=>{
 const order=['id="care"','id="network"','id="solution-title"','id="products-title"'];
 let last=-1;for(const marker of order){const at=html.indexOf(marker);assert.ok(at>last,marker);last=at;}
 for(const text of ['시작은,','돌봄이었습니다.','THE PROBLEM','흩어진 기록을','개인에게 돌려줍니다.','저장하고 활용하며','그 시작은,','UniQdata.'])assert.ok(html.includes(text),text);
 for(const rejected of ['personal-record-art','record-orbit','record-center','>YOU<'])assert.ok(!html.includes(rejected),rejected);
});
test('product page uses provenance-reviewed media and contains no fabricated product drawings or jump strip',()=>{
 const page=readFileSync('products/index.html','utf8');
 for(const asset of ['uniqdata-screen-20260922.webp','uniqlab-screen-20260922.png','bodab-screen-20260922.png','yakson-designer-exterior-20260922.png','yakson-designer-motion-20260922.mp4']){assert.ok(page.includes(`/assets/verified/${asset}`),asset);assert.ok(existsSync(`assets/verified/${asset}`),asset);}
 for(const rejected of ['uniqdata-phone-1.png','uniqdata-phone-2.png','lab-window','lab-chart','care-orbit','care-center','device-sculpture','product-jump'])assert.ok(!page.includes(rejected),rejected);
 assert.ok(page.includes('디자이너 외관 원본 · 비율 참고 시안'));
 assert.ok(page.includes('실물 제작·작동 검증 자료는 아닙니다'));
 assert.ok(!existsSync('assets/uniqdata-phone-1.png'));assert.ok(!existsSync('assets/uniqdata-phone-2.png'));
});
test('founder page uses the actual portrait and contact keeps institution login out of the page content',()=>{
 const founder=readFileSync('founder/index.html','utf8');assert.ok(founder.includes('/assets/verified/founder-portrait-20260922.jpg'));assert.ok(existsSync('assets/verified/founder-portrait-20260922.jpg'));assert.ok(!founder.includes('class="founder-symbol"'));
 const contact=readFileSync('contact/index.html','utf8');const main=contact.slice(contact.indexOf('<main'),contact.indexOf('</main>'));
 assert.ok(!main.includes('기관 계정 로그인'));assert.ok(!main.includes('https://org.sportique.biz/products/uniqlab'));assert.ok(main.includes('https://org.sportique.biz/onboarding'));assert.ok(main.includes('mailto:daniel@sportique.biz'));
});
test('awards render as a latest-first vertical timeline while preserving source date precision',()=>{
 const page=readFileSync('awards/index.html','utf8');assert.ok(page.includes('class="awards-timeline"'));assert.ok(!page.includes('class="awards-grid"'));
 const rendered=[...page.matchAll(/<time datetime="[^"]+">([^<]+)<\/time>/g)].map(match=>match[1]);
 const key=date=>{const parts=date.split('.').map(Number);return parts[0]*10000+(parts[1]??0)*100+(parts[2]??0);};
 assert.deepEqual(rendered,[...publicRecords.awards].sort((a,b)=>key(b.date)-key(a.date)).map(record=>record.date));
 assert.ok(rendered.includes('2026.05'));assert.ok(!page.includes('2026.05.01'));
});
test('published media hashes match the provenance manifest and rejected mocks remain recorded',()=>{
 const manifest=JSON.parse(readFileSync('assets/verified/asset-provenance.json','utf8'));
 const sha=path=>createHash('sha256').update(readFileSync(path)).digest('hex');
 for(const asset of manifest.assets){const path=asset.public_path.slice(1);assert.ok(existsSync(path),path);assert.equal(sha(path),asset.sha256,path);}
 assert.deepEqual(manifest.blocked_assets.map(asset=>asset.sha256),['934864ba68c485a9adf4470280316ab4b8cf84277cc4eedb783cd97d748800d6','c11ead23eb8407fc8b98034ab5ffdd7dfa5426218f723a4d99b27df7cdc35952']);
});
