import {
	S,
	i as q,
	s as x,
	k as f,
	q as _,
	a as H,
	l as d,
	m as g,
	r as h,
	h as u,
	c as k,
	b as m,
	G as v,
	u as $,
	B as E,
	H as y
} from '../chunks/index-fbeea69b.js';
import { s as B } from '../chunks/singletons-73ffa7a8.js';
const C = () => {
		const s = B;
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			updated: s.updated
		};
	},
	G = {
		subscribe(s) {
			return C().page.subscribe(s);
		}
	};
function P(s) {
	var b;
	let t,
		r = s[0].status + '',
		o,
		n,
		i,
		c = ((b = s[0].error) == null ? void 0 : b.message) + '',
		l;
	return {
		c() {
			(t = f('h1')), (o = _(r)), (n = H()), (i = f('p')), (l = _(c));
		},
		l(e) {
			t = d(e, 'H1', {});
			var a = g(t);
			(o = h(a, r)), a.forEach(u), (n = k(e)), (i = d(e, 'P', {}));
			var p = g(i);
			(l = h(p, c)), p.forEach(u);
		},
		m(e, a) {
			m(e, t, a), v(t, o), m(e, n, a), m(e, i, a), v(i, l);
		},
		p(e, [a]) {
			var p;
			a & 1 && r !== (r = e[0].status + '') && $(o, r),
				a & 1 && c !== (c = ((p = e[0].error) == null ? void 0 : p.message) + '') && $(l, c);
		},
		i: E,
		o: E,
		d(e) {
			e && u(t), e && u(n), e && u(i);
		}
	};
}
function j(s, t, r) {
	let o;
	return y(s, G, (n) => r(0, (o = n))), [o];
}
let A = class extends S {
	constructor(t) {
		super(), q(this, t, j, P, x, {});
	}
};
export { A as default };
