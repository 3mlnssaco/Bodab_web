import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('Collapsed navigation retains every company route and direct institution login in both languages',()=>{
 for(const prefix of ['', 'en/']){
  const page=readFileSync(`${prefix}contact/index.html`,'utf8');
  const menu=page.slice(page.indexOf('<details class="mobile-menu"'),page.indexOf('</details>')+10);
  for(const route of ['', 'products/', 'about/', 'vision/', 'founder/', 'awards/', 'contact/', 'institutions/'])assert.ok(menu.includes(`href="/${prefix}${route}"`),prefix+route);
  assert.ok(menu.includes(`class="mobile-only-login" href="https://org.sportique.biz/workspace${prefix?'?lang=en':''}"`));
  assert.match(menu,/<summary aria-label="[^"]+">/);
  assert.doesNotMatch(menu,/<input|type="password"/);
 }
});
