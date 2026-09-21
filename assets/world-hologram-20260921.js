import * as THREE from './vendor/three.module.js';
export async function startHologram(stage){
 const canvas=stage.querySelector('canvas');
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,2,1,2500);camera.position.z=800;
 const response=await fetch('/assets/world-countries-20260921.json');if(!response.ok)throw new Error('Atlas unavailable');const atlas=await response.json();
 const coordinates=[],colors=[],depth=[];let seed=20921;const random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
 const palette=[new THREE.Color('#67ffd0'),new THREE.Color('#66dfff'),new THREE.Color('#ac85ff')];
 for(const country of atlas.countries){let index=0;for(const match of country.path.matchAll(/[ML]([\d.-]+),([\d.-]+)/g)){
  if(index++%3)continue;const x=Number(match[1])-500,y=250-Number(match[2]);coordinates.push(x,y,0);depth.push((random()-.5)*600);const c=palette[Math.min(2,Math.floor((x+500)/334))];colors.push(c.r,c.g,c.b);
 }}
 const geometry=new THREE.BufferGeometry(),position=new THREE.Float32BufferAttribute(coordinates,3);geometry.setAttribute('position',position);geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
 const material=new THREE.PointsMaterial({size:1.9,vertexColors:true,transparent:true,opacity:.42,depthWrite:false,blending:THREE.AdditiveBlending});
 const map=new THREE.Points(geometry,material);scene.add(map);
 const stars=[],starColors=[];for(let i=0;i<170;i++){stars.push((random()-.5)*1400,(random()-.5)*700,-100-random()*500);const c=palette[i%3];starColors.push(c.r,c.g,c.b);}
 const starGeometry=new THREE.BufferGeometry();starGeometry.setAttribute('position',new THREE.Float32BufferAttribute(stars,3));starGeometry.setAttribute('color',new THREE.Float32BufferAttribute(starColors,3));const starMaterial=new THREE.PointsMaterial({size:1.5,vertexColors:true,transparent:true,opacity:.38,depthWrite:false,blending:THREE.AdditiveBlending});const field=new THREE.Points(starGeometry,starMaterial);scene.add(field);
 const resize=()=>{const w=stage.clientWidth,h=stage.querySelector('svg').getBoundingClientRect().height;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};
 const observer=new ResizeObserver(resize);observer.observe(stage);resize();let visible=true,started=performance.now(),pointerX=0,pointerY=0;
 stage.addEventListener('pointermove',event=>{const b=stage.getBoundingClientRect();pointerX=((event.clientX-b.left)/b.width-.5)*.045;pointerY=((event.clientY-b.top)/b.height-.5)*.025;});
 stage.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;});
 function animate(now){const t=Math.min(1,(now-started)/1900),remaining=(1-t)**3;
  if(t<1){for(let i=0;i<depth.length;i++)position.array[i*3+2]=depth[i]*remaining;position.needsUpdate=true;camera.position.z=800+remaining*450;}
  map.rotation.y+=(pointerX-map.rotation.y)*.035;map.rotation.x+=(pointerY-map.rotation.x)*.035;field.rotation.z=Math.sin(now*.000045)*.012;renderer.render(scene,camera);
 }
 const motion=matchMedia('(prefers-reduced-motion: reduce)');const running=()=>renderer.setAnimationLoop(visible&&!document.hidden&&!motion.matches?animate:null);motion.addEventListener('change',running);
 const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;running();},{threshold:.01});intersection.observe(stage);document.addEventListener('visibilitychange',running);
 running();renderer.render(scene,camera);stage.classList.add('three-ready');
 const restore=event=>{if(event.persisted)running();};addEventListener('pageshow',restore);
 addEventListener('pagehide',event=>{renderer.setAnimationLoop(null);if(event.persisted)return;observer.disconnect();intersection.disconnect();document.removeEventListener('visibilitychange',running);motion.removeEventListener('change',running);geometry.dispose();starGeometry.dispose();material.dispose();starMaterial.dispose();renderer.dispose();removeEventListener('pageshow',restore);});
}
