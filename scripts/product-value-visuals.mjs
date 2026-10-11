const icons = {
  record: '<rect x="-15" y="-20" width="30" height="40" rx="5"/><path d="M-7-9H7M-7 0H7M-7 9H3"/>',
  person: '<circle cy="-10" r="9"/><path d="M-19 20v-5a19 19 0 0 1 38 0v5"/>',
  watch: '<rect x="-13" y="-14" width="26" height="28" rx="7"/><path d="M-8-14v-10H8v10M-8 14v10H8V14M0-6v7l6 4"/>',
  heart: '<path d="M0 17-18-2C-33-21-8-33 0-15 8-33 33-21 18-2Z"/>',
  calendar: '<rect x="-20" y="-17" width="40" height="37" rx="6"/><path d="M-20-5H20M-9-23v12M9-23v12M-9 6l7 7 12-15"/>',
  choice: '<path d="M0-22 20-13v15C20 15 0 24 0 24S-20 15-20 2v-15Z"/><path d="m-9 1 7 7 13-14"/>',
};
const node = (x, y, kind, label, main = false) => `<g class="value-node${main ? ' value-node-main' : ''}" transform="translate(${x} ${y})"><circle r="${main ? 54 : 35}"/><g class="value-icon" aria-hidden="true">${icons[kind]}</g><text y="${main ? 81 : 62}" text-anchor="middle">${label}</text></g>`;
const line = (d, delay) => `<path class="value-connection" d="${d}" style="--flow-delay:${delay}s"/>`;
const figures = {
  uniqdata: {
    title: '흩어진 기록이, 나의 선택으로.',
    description: '병원·일상·기기 기록을 모아 이해하고, 필요한 활용과 공유를 직접 고릅니다.',
    label: '기록을 모아 이해하고 활용과 공유를 직접 선택하는 UniQdata 개념도',
    caption: '개념도 · 기록은 한곳에, 활용과 공유의 선택은 개인에게',
    diagram: node(95, 60, 'record', '병원 기록') + node(300, 60, 'heart', '일상 기록') + node(505, 60, 'watch', '기기 기록') + line('M95 97 Q95 205 245 225', 0) + line('M300 97V168', .2) + line('M505 97 Q505 205 355 225', .4) + node(300, 225, 'person', '개인의 기록', true) + line('M248 252 Q155 275 140 337', .6) + line('M352 252 Q445 275 460 337', .8) + node(140, 375, 'record', '기록 이해하기') + node(460, 375, 'choice', '활용·공유 고르기'),
  },
  uniqlab: {
    title: '참여자와 기록을, 연구의 흐름으로.',
    description: '동의한 참여자의 기록을 이어 모으고, 빠진 응답과 출처를 함께 확인합니다.',
    label: '참여자의 동의 이후 기록 수집과 연구 확인으로 이어지는 UniQLab 개념도',
    caption: '개념도 · 동의한 범위의 참여와 기록을 연구에 연결',
    diagram: node(140, 60, 'person', '참여자의 선택') + node(460, 60, 'choice', '동의한 범위') + line('M140 97 Q140 190 245 225', 0) + line('M460 97 Q460 190 355 225', .2) + node(300, 225, 'record', '이어지는 연구 기록', true) + line('M248 252 Q155 275 140 337', .6) + line('M352 252 Q445 275 460 337', .8) + node(140, 375, 'calendar', '빠진 응답 확인') + node(460, 375, 'record', '기록의 출처 확인'),
  },
  bodab: {
    title: '내 하루를 챙기고, 가족과 이어집니다.',
    description: '어르신은 복약·일정·컨디션을 직접 확인하고, 가족은 허용된 기록만 함께 봅니다.',
    label: '어르신의 일상 확인과 동의한 가족 공유를 보여주는 Bodab 개념도',
    caption: '개념도 · 어르신의 자기 확인과 허용된 가족 공유',
    diagram: node(95, 60, 'record', '복약 확인') + node(300, 60, 'heart', '오늘의 컨디션') + node(505, 60, 'calendar', '다음 일정') + line('M95 97 Q95 205 245 225', 0) + line('M300 97V168', .2) + line('M505 97 Q505 205 355 225', .4) + node(300, 225, 'person', '어르신의 하루', true) + line('M248 252 Q155 275 140 337', .6) + line('M352 252 Q445 275 460 337', .8) + node(140, 375, 'choice', '공유 범위 선택') + node(460, 375, 'person', '가족이 함께 확인'),
  },
};
export function productValueVisual(product) {
  const value = figures[product];
  if (!value) throw new Error(`Unknown product value visual: ${product}`);
  const diagram = `<svg class="value-diagram" viewBox="0 0 600 455" role="img" aria-label="${value.label}">${value.diagram}</svg>`;
  const visual = product === 'uniqlab' ? `<div class="research-3d-stage" data-research-3d><div class="research-3d-scene"><div class="research-3d-screen"><div class="research-3d-bar" aria-hidden="true"><i></i><i></i><i></i><span>UNIQLAB.IO / WORKSPACE</span></div><img src="/assets/verified/uniqlab-data-table-20260513.png" alt="UniQLab.io 데모 연구 타임라인과 참여자별 데이터 테이블" width="1512" height="805" loading="lazy"></div><div class="research-3d-chip research-3d-chip-period"><span>연구 기간과 세션</span><div class="research-3d-timeline" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div><div class="research-3d-chip research-3d-chip-records"><span>참여자별 기록과 변화</span><svg viewBox="0 0 150 40" aria-hidden="true"><path d="M0 29L18 20L35 25L54 8L74 18L94 6L113 15L132 5L150 12"/></svg></div></div></div><p class="research-3d-note">실제 데모 UI · 2026.05 · 예시 데이터</p><details class="research-3d-concept"><summary>기록과 동의의 연결 보기</summary>${diagram}</details>` : diagram;
  return `<figure class="product-media value-visual value-visual-${product}" data-reveal><div class="value-visual-heading"><p class="eyebrow">${product === 'uniqdata' ? 'UNIQDATA.IO' : product === 'uniqlab' ? 'UNIQLAB.IO' : 'BODAB'} / WHY IT MATTERS</p><h3>${value.title}</h3><p>${value.description}</p></div>${visual}<figcaption>${value.caption}</figcaption></figure>`;
}
