const NS='http://www.w3.org/2000/svg';
const sites=[
 {id:'KR',country:'KR',name:'한국',longitude:128.1,latitude:36.4,detail:'한국 · 개인 기록을 위한 국가별 데이터 리전. 지도는 서버 구축 위치를 보여줍니다.'},
 {id:'MN',country:'MN',name:'몽골',longitude:104.15,latitude:46,detail:'몽골 · 현지 데이터 리전. 서비스 출시 국가나 고객 진출 실적과는 구분됩니다.'},
 {id:'GLOBAL',country:'US',name:'US WEST',longitude:-119.4,latitude:36.8,detail:'미국 서부 · 캘리포니아의 글로벌 공통 서버. 정밀한 데이터센터 주소가 아닌 리전 대표 위치입니다.'},
];
const countryLayer=document.querySelector('#world-countries');
const siteLayer=document.querySelector('#world-sites');
function choose(id){
 const site=sites.find(s=>s.id===id);if(!site)return;
 for(const button of document.querySelectorAll('button[data-site]'))button.setAttribute('aria-pressed',String(button.dataset.site===id));
 for(const pin of document.querySelectorAll('.map-pin'))pin.classList.toggle('selected',pin.dataset.site===id);
 for(const path of document.querySelectorAll('.map-country'))path.classList.toggle('selected',path.dataset.country===site.country);
 document.querySelector('#selected-location').textContent=site.detail;
}
for(const button of document.querySelectorAll('button[data-site]'))button.addEventListener('click',()=>choose(button.dataset.site));
try{
 const response=await fetch('/assets/world-countries-20260921.json');if(!response.ok)throw new Error('Map unavailable');
 const atlas=await response.json();if(!Array.isArray(atlas.countries)||atlas.countries.length<150)throw new Error('Map data invalid');
 for(const country of atlas.countries){
  const path=document.createElementNS(NS,'path');path.setAttribute('d',country.path);path.classList.add('map-country');path.dataset.country=country.code;
  const site=sites.find(s=>s.country===country.code);if(site){path.classList.add('built');path.setAttribute('fill','url(#map-land)');path.addEventListener('click',()=>choose(site.id));}
  const title=document.createElementNS(NS,'title');title.textContent=country.name+(site?' · 확인된 서버 거점':'');path.append(title);countryLayer.append(path);
 }
 for(const site of sites){
  const group=document.createElementNS(NS,'g');group.classList.add('map-pin');group.dataset.site=site.id;group.setAttribute('transform',`translate(${(site.longitude+180)/360*1000} ${(90-site.latitude)/180*500})`);group.setAttribute('role','button');group.setAttribute('tabindex','0');group.setAttribute('aria-label',`${site.name} 서버 거점`);
  for(const [name,r] of [['hit',17],['halo',14],['ring',8],['core',4]]){const circle=document.createElementNS(NS,'circle');circle.setAttribute('r',String(r));circle.classList.add(name);group.append(circle);}
  const label=document.createElementNS(NS,'text');label.textContent=site.name;label.setAttribute('x',site.id==='KR'?'15':'0');label.setAttribute('y',site.id==='KR'?'5':'-21');label.setAttribute('text-anchor',site.id==='KR'?'start':'middle');group.append(label);
  group.addEventListener('click',()=>choose(site.id));group.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(site.id);}});siteLayer.append(group);
 }
 choose('KR');document.querySelector('#map-loading').remove();
}catch{
 document.querySelector('#map-loading').textContent='지도를 불러오지 못했습니다. 아래에서 한국·몽골·미국 서부의 서버 거점을 확인할 수 있습니다.';
}
