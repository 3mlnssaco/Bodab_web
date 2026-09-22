import * as THREE from './vendor/three.module.js';

// Traced from the existing assets/sportique-icon.jpg (512 × 512).
// These are the original pixel-stepped speech bubble and S, not a texture plane.
const outline = [[162,55],[338,55],[338,65],[348,65],[348,299],[275,299],[275,309],[265,309],[265,319],[255,319],[255,329],[245,329],[245,319],[235,319],[235,309],[225,309],[225,299],[162,299],[162,289],[152,289],[152,65],[162,65]];
const opening = [[162,65],[338,65],[338,289],[265,289],[265,299],[255,299],[255,309],[245,309],[245,299],[235,299],[235,289],[162,289]];
const letter = [[234,121],[268,121],[282,136],[282,153],[267,153],[267,137],[235,137],[235,169],[268,169],[283,184],[283,218],[268,234],[234,234],[218,218],[218,201],[234,201],[234,218],[267,218],[267,185],[234,185],[219,170],[219,136]];

function trace(points, Type = THREE.Shape) {
  const path = new Type();
  points.forEach(([x, y], index) => path[index ? 'lineTo' : 'moveTo']((x - 250) / 100, (193 - y) / 100));
  path.closePath();
  return path;
}

export function createEmblem() {
  const group = new THREE.Group();
  group.name = 'SportiQue original speech-bubble emblem';
  group.userData.source = 'assets/sportique-icon.jpg';
  const frame = trace(outline);
  frame.holes.push(trace(opening, THREE.Path));
  const frameGeometry = new THREE.ExtrudeGeometry(frame, {depth: .18, bevelEnabled: true, bevelSize: .007, bevelThickness: .008, bevelSegments: 2, steps: 1});
  const sides = new THREE.MeshStandardMaterial({color: '#657985', metalness: .65, roughness: .3});
  const white = new THREE.MeshPhysicalMaterial({color: '#f2fffb', metalness: .15, roughness: .24, clearcoat: .8});
  const cyan = new THREE.MeshStandardMaterial({color: '#60e6cd', emissive: '#35b8bd', emissiveIntensity: .16, metalness: .35, roughness: .3});
  const violet = new THREE.MeshStandardMaterial({color: '#a68ce9', emissive: '#765cc4', emissiveIntensity: .2, metalness: .3, roughness: .35});
  // The offset cyan and violet outlines in the source become actual rear layers.
  for (const [name, material, x, y, z] of [
    ['violet rear edge', violet, .105, -.105, -.36],
    ['cyan middle edge', cyan, .055, -.052, -.18],
    ['white hollow frame', white, 0, 0, 0],
  ]) {
    const mesh = new THREE.Mesh(frameGeometry, [material, material === white ? sides : material]);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh);
  }
  const green = new THREE.MeshPhysicalMaterial({color: '#6dd69b', emissive: '#245b37', emissiveIntensity: .14, metalness: .18, roughness: .25, clearcoat: .75});
  const s = new THREE.Mesh(new THREE.ExtrudeGeometry(trace(letter), {depth: .23, bevelEnabled: true, bevelSize: .01, bevelThickness: .008, bevelSegments: 2, steps: 1}), [green, sides]);
  s.name = 'original green S';
  s.position.z = .035;
  s.castShadow = s.receiveShadow = true;
  group.add(s);
  return group;
}

function mount(stage) {
  const canvas = stage.querySelector('canvas.logo-canvas');
  if (!canvas || stage.dataset.emblemMounted) return () => {};
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true, powerPreference: 'low-power'});
  } catch {
    stage.classList.add('emblem-fallback');
    return () => {};
  }
  stage.dataset.emblemMounted = 'true';
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(37, 1, .1, 30);
  const emblem = createEmblem();
  scene.add(emblem, new THREE.HemisphereLight('#defbff', '#302348', 2));
  const key = new THREE.DirectionalLight('#ffffff', 3.6);
  key.position.set(-3, 4, 6);
  key.castShadow = true;
  key.shadow.mapSize.set(512, 512);
  key.shadow.camera.left = key.shadow.camera.bottom = -2;
  key.shadow.camera.right = key.shadow.camera.top = 2;
  key.shadow.normalBias = .015;
  scene.add(key);
  const rim = new THREE.DirectionalLight('#8d71ff', 4);
  rim.position.set(4, -1, -2);
  const fill = new THREE.DirectionalLight('#65ffda', 2.5);
  fill.position.set(-4, 1, 1);
  scene.add(rim, fill);

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false, disposed = false, contextLost = false;
  let pointerX = 0, pointerY = 0, turnX = 0, turnY = 0;
  let elapsed = 0, lastFrame = null;
  function draw(now = performance.now()) {
    if (disposed || contextLost) return;
    const dt = lastFrame === null ? 0 : Math.min((now - lastFrame) / 1000, .05);
    lastFrame = now;
    if (!motion.matches) elapsed += dt;
    const ease = motion.matches ? 1 : 1 - Math.exp(-dt * 5);
    turnX += ((motion.matches ? 0 : pointerX) - turnX) * ease;
    turnY += ((motion.matches ? 0 : pointerY) - turnY) * ease;
    emblem.rotation.set(.055 + turnY + (motion.matches ? 0 : Math.sin(elapsed * .42) * .025), -.24 + turnX + (motion.matches ? 0 : Math.sin(elapsed * .32) * .13), -.035);
    emblem.position.y = motion.matches ? 0 : Math.sin(elapsed * .62) * .045;
    renderer.render(scene, camera);
  }
  function running() {
    lastFrame = null;
    renderer.setAnimationLoop(!disposed && !contextLost && visible && !document.hidden && !motion.matches ? draw : null);
    if (!disposed && !contextLost && visible && !document.hidden) draw();
  }
  function resize() {
    const {width, height} = stage.getBoundingClientRect();
    if (!width || !height || disposed) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = Math.max(5.6, 3.8 / camera.aspect);
    camera.updateProjectionMatrix();
    draw();
  }
  function move(event) {
    if (motion.matches) return;
    const box = stage.getBoundingClientRect();
    pointerX = ((event.clientX - box.left) / box.width - .5) * .48;
    pointerY = ((event.clientY - box.top) / box.height - .5) * .22;
  }
  function leave() { pointerX = pointerY = 0; }
  function lost(event) {
    event.preventDefault();
    contextLost = true;
    renderer.setAnimationLoop(null);
    stage.classList.remove('emblem-ready');
    stage.classList.add('emblem-fallback');
  }
  function restored() {
    contextLost = false;
    resize();
    stage.classList.remove('emblem-fallback');
    stage.classList.add('emblem-ready');
    running();
  }
  const sizes = new ResizeObserver(resize);
  sizes.observe(stage);
  const intersections = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; running(); }, {threshold: .01});
  intersections.observe(stage);
  stage.addEventListener('pointermove', move, {passive: true});
  stage.addEventListener('pointerleave', leave);
  canvas.addEventListener('webglcontextlost', lost);
  canvas.addEventListener('webglcontextrestored', restored);
  document.addEventListener('visibilitychange', running);
  motion.addEventListener('change', running);
  function resume(event) { if (event.persisted) running(); }
  function pagehide(event) {
    renderer.setAnimationLoop(null);
    if (!event.persisted) dispose();
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    renderer.setAnimationLoop(null);
    sizes.disconnect();
    intersections.disconnect();
    stage.removeEventListener('pointermove', move);
    stage.removeEventListener('pointerleave', leave);
    canvas.removeEventListener('webglcontextlost', lost);
    canvas.removeEventListener('webglcontextrestored', restored);
    document.removeEventListener('visibilitychange', running);
    motion.removeEventListener('change', running);
    window.removeEventListener('pagehide', pagehide);
    window.removeEventListener('pageshow', resume);
    const geometries = new Set(), materials = new Set();
    emblem.traverse(object => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) for (const material of [].concat(object.material)) materials.add(material);
    });
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(material => material.dispose());
    key.shadow.dispose();
    renderer.dispose();
    stage.classList.remove('emblem-ready');
    delete stage.dataset.emblemMounted;
  }
  window.addEventListener('pagehide', pagehide);
  window.addEventListener('pageshow', resume);
  resize();
  stage.classList.remove('emblem-fallback');
  stage.classList.add('emblem-ready');
  return dispose;
}

export function mountEmblems(root = document) {
  const stages = root.matches?.('[data-brand-emblem]') ? [root] : root.querySelectorAll('[data-brand-emblem]');
  const cleanup = [...stages].map(mount);
  return () => cleanup.forEach(dispose => dispose());
}
