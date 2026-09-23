const reduced=matchMedia('(prefers-reduced-motion: reduce)');
try{
 const {mountEmblems}=await import('./sportique-emblem-3d.js?v=20260922');
 mountEmblems();
}catch{
 for(const emblem of document.querySelectorAll('[data-brand-emblem]'))emblem.classList.add('emblem-fallback');
}
for(const menu of document.querySelectorAll('.mobile-menu')){
 menu.addEventListener('keydown',event=>{if(event.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
 menu.addEventListener('click',event=>{if(event.target.closest('a'))menu.open=false;});
}
for(const filter of document.querySelectorAll('[data-filter]'))filter.addEventListener('click',()=>{
 const value=filter.dataset.filter;let count=0;
 for(const button of document.querySelectorAll('[data-filter]'))button.setAttribute('aria-pressed',String(button===filter));
 for(const card of document.querySelectorAll('[data-category]')){card.hidden=value!=='all'&&card.dataset.category!==value;if(!card.hidden)count++;}
 document.querySelector('#record-count').textContent=`공개 기록 ${count}건`;
});
const svgNS='http://www.w3.org/2000/svg';
async function mountPersonalWorld(){
 const stage=document.querySelector('[data-personal-world]');
 const layer=stage?.querySelector('[data-personal-world-countries]');
 if(!stage||!layer)return;
 try{
  const response=await fetch('/assets/world-countries-20260921.json');
  const atlas=await response.json();
  if(!response.ok||!Array.isArray(atlas.countries)||atlas.countries.length<150)throw new Error('world atlas unavailable');
  for(const country of atlas.countries){
   const path=document.createElementNS(svgNS,'path');
   path.setAttribute('d',country.path);path.classList.add('world-continent');
   if(['KR','MN','US'].includes(country.code))path.classList.add('world-continent--context');
   layer.append(path);
  }
 }catch{stage.dataset.worldMap='unavailable';}
 if(reduced.matches||!('IntersectionObserver'in window))return;
 const observer=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){stage.classList.add('world-animated');observer.disconnect();}},{threshold:.2});
 observer.observe(stage);
}
mountPersonalWorld();
if(!reduced.matches&&'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}},{threshold:.12});
 for(const element of document.querySelectorAll('[data-reveal]')){element.classList.add('reveal-ready');observer.observe(element);}
}
