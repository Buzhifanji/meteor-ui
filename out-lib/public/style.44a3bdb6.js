import { m as r } from './vendor.71c3293c.js';
function n(o, e, t) {
  o.style.setProperty(e, t);
}
function p(o, e) {
  const t = r();
  t && t.style && n(t, o, e || '');
}
export { p as u };
