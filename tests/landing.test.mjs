import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
const html=readFileSync('index.html','utf8');
test('product-led home uses the verified UniQdata screen and preserves navigation and product destinations',()=>{
 assert.ok(html.indexOf('class="product-hero"')<html.indexOf('id="problem"'));
 for(const url of ['/products/','/about/','/founder/','/awards/','/contact/','/institutions/','https://org.sportique.biz/products/uniqlab','https://uniqdata.io/'])assert.ok(html.includes(`href="${url}"`),url);
 for(const route of ['about','products','founder','awards','contact'])assert.ok(existsSync(route+'/index.html'));
 for(const asset of ['sportique-icon.jpg','verified/uniqdata-home-dev-20260916.png'])assert.ok(existsSync('assets/'+asset));
 assert.ok(html.includes('/assets/verified/uniqdata-home-dev-20260916.png'));
 assert.ok(!html.includes('/assets/verified/uniqdata-screen-20260922.webp'));
 assert.ok(html.includes('class="uniqdata-screen-crop"'));
 assert.ok(html.includes('UniQdata 개발 화면'));
 assert.ok(!html.includes('class="assembly-links"'));
 assert.ok(!html.includes('class="record-fragment"'));
 assert.ok(!html.includes('hero-3d-phase'));
 assert.ok(!html.includes('/assets/generated/personal-data-vault-v1.png'));
 assert.ok(!existsSync('assets/generated/personal-data-vault-v1.png'));
 assert.ok(!html.includes('class="world-hero"'));assert.ok(!html.includes('id="footprint-map"'));
 assert.ok(html.includes('class="world-continuity"'));assert.ok(html.includes('data-personal-world'));
 assert.equal(readFileSync('CNAME','utf8').trim(),'www.sportique.biz');
});
test('hero explains the concrete record flow without a canvas or scroll runway',()=>{
 const hero=html.slice(html.indexOf('<section class="product-hero"'),html.indexOf('<section class="problem-section"'));
 assert.ok(hero,'product hero');
 assert.deepEqual([...hero.matchAll(/class="network-panel ([^"]+)"/g)].map(match=>match[1]),['network-fragments','network-db','network-uses']);
 let last=-1;for(const text of ['01 / 흩어진 원본','02 / DATAQ','03 / 개인 확인','04 / UNIQDATA','05 / 선택한 활용']){const at=hero.indexOf(text);assert.ok(at>last,text);last=at;}
 for(const text of ['진료 기록','검진 결과','처방·복약','웨어러블','건강 앱','생활 기록','형식·항목·단위 표준화','원본과 출처는 보존','원본과 대조','확인·수정·보류','개인 DB','개인 리포트','AI에 질문','가족과 공유','동의한 연구'])assert.ok(hero.includes(text),text);
 assert.ok(hero.includes('class="hero-network"'));
 assert.ok(hero.includes('class="network-connections"'));
 assert.ok(!hero.includes('class="hero-scene"'));
 assert.ok(!hero.includes('hero-flow'));
 assert.ok(!hero.includes('class="hero-copy" data-reveal'));
 assert.doesNotMatch(hero,/<canvas\b|data-personal-network|hero-3d/);
 const script=readFileSync('assets/neon-site-20260921.js','utf8');
 assert.doesNotMatch(script,/personal-network-hero-3d|WebGLRenderer|addEventListener\(['"]scroll['"]/);
 const css=readFileSync('assets/neon-site-20260921.css','utf8');
 const heroStyles=[...css.matchAll(/\.(?:product-hero|hero-copy|hero-art)\s*\{([^}]+)\}/g)].map(match=>match[1]).join('\n');
 assert.doesNotMatch(heroStyles,/position:\s*sticky/);
 for(const [,height] of heroStyles.matchAll(/(?:min-)?height:[^;}]*?(\d+)(?:d|s)?vh/g))assert.ok(Number(height)<=100,'hero exceeds one viewport');
});
test('home defines data fragmentation as the problem and preserves individual AI and sharing choice',()=>{
 const order=['id="problem"','id="system"','id="world"','id="value"','id="products-title"','id="journey-title"','id="care-title"'];
 let last=-1;for(const marker of order){const at=html.indexOf(marker);assert.ok(at>last,marker);last=at;}
 for(const text of ['DATA FRAGMENTATION','흩어진 건강기록,','개인의 DB로.','개인의 선택을 막습니다.','AI 모델이나 플랫폼','DataQ','형식을 표준화합니다.','개인이 확인합니다.','개인 DB로 쌓습니다.','AI·공유를 선택합니다.','국가가 달라도,','개인의 기록을 이어 씁니다.','국가별 정책·데이터 레지던시 조건','Bodab을 만들며','더 큰 문제를<br>찾았습니다.','복약 확인 상태','여러 곳의 기록을 대조하고 서로 다시 물어야','2025년 XRPL','건강기록 원문은 개인 DB에','연결 약포의 이송·분리와 미수령 약포 보관'])assert.ok(html.includes(text),text);
 assert.match(html,/<h2 id="routes-title">(?:(?!<\/h2>)[\s\S])*자유/);
 for(const rejected of ['한 사람의 이야기','이야기의 시작','돌봄이었습니다.','정리할 후보','정리 후보','내 기준은','기록의 기준점','세계는 서버의 지도','NOT A COVERAGE MAP','보호자와 함께 봅니다.','문제를 먼저 봤습니다.','문제를 먼저 만났습니다.','상단 롤에서 약포를 아래 수령부로'])assert.ok(!html.includes(rejected),rejected);
});
test('assembled records open the full personal-use path without converting research compensation into a SportiQue payout claim',()=>{
 for(const text of ['개인은 기록을 리포트로 확인합니다.','개인은 자신의 기록을 바탕으로 AI에 질문합니다.','보호자에게 필요한 기록만 공유합니다.','해외에서도 필요한 기록을 꺼내 씁니다.','참여할 연구와 공유할 기록을 고릅니다.','돌봄·복약 앱에 기록을 연결합니다.','이용 이력을 다시 확인합니다.','지급 주체가 정한 방식으로 처리','국가별 정책·데이터 레지던시 조건'])assert.ok(html.includes(text),text);
 for(const rejected of ['데이터 판매','토큰 보상','SportiQue가 직접 지급'])assert.ok(!html.includes(rejected),rejected);
});
const pageFiles=['index.html','products/index.html','about/index.html','founder/index.html','awards/index.html','contact/index.html','institutions/index.html','404.html'];
const publicRecords=JSON.parse(readFileSync('assets/public-records.json','utf8'));
const escapeHtml=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
test('every public page has the same original-logo neon shell and real institution login destination',()=>{
 const version=createHash('sha256').update(readFileSync('assets/neon-site-20260921.css')).update(readFileSync('assets/neon-site-20260921.js')).digest('hex').slice(0,12);
 for(const file of pageFiles){const page=readFileSync(file,'utf8');assert.ok(page.includes(`/assets/neon-site-20260921.css?v=${version}`),file);assert.ok(page.includes(`/assets/neon-site-20260921.js?v=${version}`),file);assert.ok(page.includes('class="brand original-brand"'),file);assert.ok(page.includes('https://org.sportique.biz/products/uniqlab'),file);assert.ok(page.includes('aria-label="모바일 메뉴"'),file);assert.ok(!page.includes('src="/assets/index-org-20260817.js"'),file);assert.ok(!page.includes('admin.sportique.biz'),file);assert.ok(!page.includes('정리할 후보'),file);assert.ok(!page.includes('정리 후보'),file);assert.doesNotMatch(page,/(?<![가-힣])(?:내가|내 개인|내 기록|내 선택|내 건강기록|내 역할|나의 기록|나의 일상|우리가|저희)|MY RECORD|MY CHOICE/,file);assert.equal((page.match(/<h1(?:\s|>)/g)||[]).length,1,file);}
 const about=readFileSync('about/index.html','utf8');
 assert.ok(about.includes('DataQ가 원본과 출처를 보존하면서 형식·항목·단위를 표준화하고'));
 assert.ok(about.includes('돌봄에서 찾은 문제.<br><em>기록은 흩어져 있었습니다.</em>'));
 for(const text of ['복약 정보·활동 이력·진료·처방 기록','병원·약국·앱에 흩어져','어떤 기록을 가족 중 누구와 공유할지 선택할 서비스가 부족'])assert.ok(about.includes(text),text);
 assert.ok(!about.includes('누군가를 더 잘 돌보려면'));
 assert.ok(about.includes('주도권을<br><em>기업에서 개인으로.</em>'));
 assert.ok(about.includes('공유의 결정도, 개인이 직접.'));
 assert.ok(!about.includes('주도권의 방향을'));
});
test('redesign preserves each founder and award record, date and metadata without promoting its status',()=>{
 for(const [key,file,card] of [['founder','founder/index.html','record-item'],['awards','awards/index.html','timeline-event']]){const page=readFileSync(file,'utf8');assert.equal((page.match(new RegExp(`class="${card}"`,'g'))||[]).length,publicRecords[key].length,file+' count');for(const record of publicRecords[key])for(const field of ['date','title','meta','organizer','venue','body'])if(record[field])assert.ok(page.includes(escapeHtml(record[field])),file+': '+record[field]);}
 assert.ok(!JSON.stringify(publicRecords).includes('피우다'));
 for(const file of pageFiles)assert.ok(!readFileSync(file,'utf8').includes('피우다'),file);
});
test('featured product anchors, original destinations and feature descriptions remain usable',()=>{
 const page=readFileSync('products/index.html','utf8');for(const product of publicRecords.products){assert.ok(page.includes(`id="${product.id}"`));assert.ok(page.includes(`href="${escapeHtml(product.href)}"`));for(const value of [product.description,product.detail,...product.features,...product.modules])assert.ok(page.includes(escapeHtml(value)),value);}
 const institution=readFileSync('institutions/index.html','utf8');assert.ok(institution.includes('https://org.sportique.biz/onboarding'));assert.ok(institution.includes('https://web.uniqlab.io/'));assert.ok(!/<input[^>]+type="password"/.test(institution));
});
test('product page states each role and stage without presenting four equal products',()=>{
 const page=readFileSync('products/index.html','utf8');
 assert.ok(page.includes('<h1>개인이 기록을 모으고,<br><em>활용을 선택합니다.</em></h1>'));
 assert.ok(page.includes('UniQdata에서 개인이 건강기록을 모아 확인합니다.'));
 assert.ok(page.includes('주요 접점과 프로젝트를 소개합니다.'));
 assert.ok(page.includes('DataQ는 원본과 출처를 보존하면서 반입·표준화 후보를 만드는 내부 단계입니다.'));
 assert.ok(page.includes('Bodab은 어르신이 큰 글씨와 짧은 단계로'));
 assert.ok(page.includes('FamilyCare에서 동의 범위 안에서 확인할 수 있습니다.'));
 assert.ok(page.includes('UniQLab은 연구자와 기관이 연구 준비'));
 assert.ok(page.includes('개발 중인 복약 보조 장치 PoC'));
 for(const rejected of ['연결되는 네 가지 제품','가족의 하루를 챙기는 일까지','고령자와 가족이 복약, 일정, 생활 상태를 함께 챙기는 가족 돌봄 앱'])assert.ok(!page.includes(rejected),rejected);
});
test('brand rendering and the personal-world layer remain progressive enhancement without the retired server-footprint runtime',()=>{
 const script=readFileSync('assets/neon-site-20260921.js','utf8');const css=readFileSync('assets/neon-site-20260921.css','utf8');assert.ok(script.includes('prefers-reduced-motion'));assert.ok(script.includes('mountEmblems'));assert.ok(script.includes('IntersectionObserver'));assert.ok(script.includes('[data-reveal]'));assert.ok(css.includes('reveal-sweep-left'));assert.ok(css.includes('reveal-sweep-right'));assert.ok(css.includes('prefers-reduced-motion:reduce'));assert.ok(existsSync('assets/vendor/LICENSE'));assert.ok(existsSync('assets/vendor/three.core.js'));assert.ok(existsSync('assets/vendor/three.module.js'));
 const emblem=readFileSync('assets/sportique-emblem-3d.js','utf8');for(const proof of ['ExtrudeGeometry','original green S','IntersectionObserver','prefers-reduced-motion','renderer.dispose()'])assert.ok(emblem.includes(proof),proof);assert.ok(!emblem.includes('TextureLoader'));
 assert.ok(script.includes('mountPersonalWorld'));assert.ok(script.includes('world-countries-20260921.json'));assert.ok(css.includes('world-route-in'));assert.ok(css.includes('world-pulse'));
 assert.ok(css.includes('word-break:keep-all'));assert.ok(!css.includes('assembly-orbit'));
 assert.ok(!script.includes('world-home-20260921.js'));assert.ok(!script.includes('world-hologram-20260921.js'));assert.ok(!html.includes('holo-stage'));
});
test('product page uses provenance-reviewed media and contains no fabricated product drawings or jump strip',()=>{
 const page=readFileSync('products/index.html','utf8');
 for(const asset of ['uniqdata-home-dev-20260916.png','uniqlab-screen-20260922.png','bodab-screen-20260922.png','yakson-evt-v3-frame-20260916.png','yakson-evt-v3-preview-20260916.mp4']){assert.ok(page.includes(`/assets/verified/${asset}`),asset);assert.ok(existsSync(`assets/verified/${asset}`),asset);}
 assert.ok(!page.includes('/assets/verified/uniqdata-screen-20260922.webp'));
 for(const rejected of ['uniqdata-phone-1.png','uniqdata-phone-2.png','lab-window','lab-chart','care-orbit','care-center','device-sculpture','product-jump'])assert.ok(!page.includes(rejected),rejected);
 assert.ok(page.includes('2026.09 개방형 기구 V3 · 디지털 검토본'));
 assert.ok(page.includes('완성 외관·실물 반복 작동·제조 적합성은 검증 전입니다'));
 assert.ok(!page.includes('yakson-designer-exterior-20260922.png'));
 assert.ok(!page.includes('yakson-designer-motion-20260922.mp4'));
 assert.ok(!existsSync('assets/verified/yakson-designer-exterior-20260922.png'));
 assert.ok(!existsSync('assets/verified/yakson-designer-motion-20260922.mp4'));
 assert.ok(!existsSync('assets/uniqdata-phone-1.png'));assert.ok(!existsSync('assets/uniqdata-phone-2.png'));
});
test('founder page uses the requested retouch, retains the original portrait, and keeps institution login out of contact content',()=>{
 const founder=readFileSync('founder/index.html','utf8');assert.ok(founder.includes('/assets/verified/founder-portrait-retouched-20260923.jpg'));assert.ok(existsSync('assets/verified/founder-portrait-retouched-20260923.jpg'));assert.ok(existsSync('assets/verified/founder-portrait-20260922.jpg'));assert.ok(!founder.includes('class="founder-symbol"'));
 assert.ok(founder.includes('이승헌 · Founder, CEO &amp; CTO'));
 assert.ok(!founder.includes('Founder &amp; Representative'));
 assert.ok(founder.includes('제품을 직접<br><em>만듭니다.</em>'));
 assert.ok(!founder.includes('직접 <em>만드는 사람.</em>'));
 assert.ok(!founder.includes('UCL TIDH 2026 확장초록 제출'));
 assert.ok(!founder.includes('몽골 현장 조사와 기관 후속 협의'));
 assert.ok(founder.includes('2026.08 초'));
 assert.ok(founder.includes('베이징 PKU 창업·AI 교육 및 IR 캠프 참여'));
 assert.ok(founder.includes('2026.02.03-02.05'));
 assert.equal(publicRecords.founder.filter(record=>record.title==='북경대 창업훈련캠프').length,1);
 assert.ok(!founder.includes('한중 청년 창업훈련캠프 참가·수료'));
 assert.ok(!founder.includes('북경대 창업훈련캠프 한국 교류일 참여'));
 assert.ok(founder.indexOf('2026.08 초')<founder.indexOf('2026.07.27-07.31'));
 assert.ok(founder.includes('벤처프런티어 창업 활동'));
 assert.deepEqual([...founder.matchAll(/<div class="record-date">([^<]+)<\/div>/g)].slice(0,2).map(match=>match[1]),['현재','현재']);
 const featured=publicRecords.awards.filter(record=>record.founderHighlight);
 assert.equal(featured.length,3);
 assert.equal((founder.match(/class="founder-award"/g)||[]).length,featured.length);
 for(const record of featured){assert.ok(founder.includes(escapeHtml(record.title)));assert.ok(founder.includes(escapeHtml(record.founderHighlight)));}
 assert.ok(!founder.includes('2025 학생 창업유망팀 300+ 성장트랙 최종선정'));
 assert.ok(founder.includes('2026 적정기술 기반 청년 창업 글로벌 실증 지원사업 몽골팀'));
 assert.ok(founder.includes('산학협동재단 / 대학산업기술지원단 / 적정기술학회'));
 const contact=readFileSync('contact/index.html','utf8');const main=contact.slice(contact.indexOf('<main'),contact.indexOf('</main>'));
 assert.ok(!main.includes('기관 계정 로그인'));assert.ok(!main.includes('https://org.sportique.biz/products/uniqlab'));assert.ok(main.includes('https://org.sportique.biz/onboarding'));assert.ok(main.includes('mailto:hello@sportique.biz'));assert.ok(!main.includes('mailto:daniel@sportique.biz'));
 assert.ok(contact.includes('mailto:hello@sportique.biz">hello@sportique.biz</a>'));
 assert.ok(founder.includes('mailto:daniel@sportique.biz'));
});
test('awards render as a latest-first vertical timeline while preserving source date precision',()=>{
 const page=readFileSync('awards/index.html','utf8');assert.ok(page.includes('class="awards-timeline"'));assert.ok(!page.includes('class="awards-grid"'));
 const rendered=[...page.matchAll(/<time(?: datetime="[^"]+")?>([^<]+)<\/time>/g)].map(match=>match[1]);
 assert.deepEqual(rendered,[...publicRecords.awards].sort((a,b)=>b.sortDate-a.sortDate).map(record=>record.date));
 assert.ok(rendered.includes('2026.05'));assert.ok(!page.includes('2026.05.01'));
 assert.ok(page.includes(`공개 기록 ${publicRecords.awards.length}건`));
 const categories=[...page.matchAll(/class="timeline-event" data-category="([^"]+)"/g)].map(match=>match[1]);
 for(const category of new Set(categories))assert.ok(page.includes(`data-filter="${category}"`),category+' filter');
 assert.equal(categories.length,publicRecords.awards.length);
 assert.ok(page.includes('id="record-count" aria-live="polite"'));
 const evidence=publicRecords.awards.filter(record=>record.evidence);
 assert.equal(evidence.length,3);
 assert.equal((page.match(/class="timeline-body has-evidence"/g)||[]).length,evidence.length);
 assert.match(readFileSync('assets/neon-site-20260921.css','utf8'),/\.award-proof-image img\{[^}]*object-fit:cover/);
 assert.ok(!page.includes('student-300plus-20251017.webp'));
 assert.ok(!existsSync('assets/verified/awards/student-300plus-20251017.webp'));
 for(const record of evidence){assert.ok(page.includes(`src="${record.evidence.image}"`),record.title);assert.ok(!page.includes(`href="${record.evidence.image}"`),record.title+' photo must not open');assert.ok(existsSync(record.evidence.image.slice(1)));for(const link of record.evidence.links??[]){assert.ok(link.href.startsWith('https://'));assert.ok(page.includes(`href="${link.href}"`),link.href);}}
});
test('published media hashes match the provenance manifest and rejected mocks remain recorded',()=>{
 const manifest=JSON.parse(readFileSync('assets/verified/asset-provenance.json','utf8'));
 const sha=path=>createHash('sha256').update(readFileSync(path)).digest('hex');
 for(const asset of manifest.assets){const path=asset.public_path.slice(1);assert.ok(existsSync(path),path);assert.equal(sha(path),asset.sha256,path);}
 for(const blocked of ['934864ba68c485a9adf4470280316ab4b8cf84277cc4eedb783cd97d748800d6','f4db41857b81b5ac42d35140d22601acf512ad7291003d424309921185a812c9','ec8a1752a1c4128677de07c65bb3f84f497dff458e3fddc067f27a4772b9c67f','c11ead23eb8407fc8b98034ab5ffdd7dfa5426218f723a4d99b27df7cdc35952','be175158cab91f42a4465aa4181f96365062945147599403b5b0d80874bcc8de','7fce453f8386d58fdfb936ae4127960d129d1071367e55ab13fd2be7eebd85be'])assert.ok(manifest.blocked_assets.some(asset=>asset.sha256===blocked),blocked);
});
