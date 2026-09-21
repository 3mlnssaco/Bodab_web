const reduced=matchMedia('(prefers-reduced-motion: reduce)');
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
const stage=document.querySelector('.holo-stage');
if(stage){
 await import('./world-home-20260921.js');
 if(!reduced.matches&&matchMedia('(pointer:fine)').matches){
  stage.addEventListener('pointermove',event=>{const box=stage.getBoundingClientRect();stage.style.setProperty('--tilt-x',`${((event.clientX-box.left)/box.width-.5)*4}deg`);stage.style.setProperty('--tilt-y',`${-((event.clientY-box.top)/box.height-.5)*3}deg`);});
  stage.addEventListener('pointerleave',()=>{stage.style.setProperty('--tilt-x','0deg');stage.style.setProperty('--tilt-y','0deg');});
 }
 if(!reduced.matches){
  try{
   const {startHologram}=await import('./world-hologram-20260921.js');
   await startHologram(stage);
  }catch{stage.classList.add('hologram-fallback');}
 }
}
