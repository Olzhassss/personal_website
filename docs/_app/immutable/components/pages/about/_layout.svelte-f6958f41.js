import {
	S as j,
	i as k,
	s as F,
	C as G,
	k as m,
	q as I,
	a as q,
	l as v,
	m as p,
	r as C,
	h as f,
	c as H,
	n as i,
	b as L,
	G as n,
	D as N,
	E as w,
	F as z,
	f as B,
	t as J
} from '../../../chunks/index-fbeea69b.js';
import { c as S } from '../../../chunks/shared-23917130.js';
function K(u) {
	let e, o, s, l, _, $, c, b, y, d, h;
	const E = u[1].default,
		a = G(E, u, u[0], null);
	return {
		c() {
			(e = m('div')),
				(o = m('div')),
				(s = m('nav')),
				(l = m('a')),
				(_ = I('Home')),
				($ = q()),
				(c = m('a')),
				(b = I('About me')),
				(y = q()),
				(d = m('div')),
				a && a.c(),
				this.h();
		},
		l(t) {
			e = v(t, 'DIV', { class: !0 });
			var r = p(e);
			o = v(r, 'DIV', { class: !0 });
			var g = p(o);
			s = v(g, 'NAV', { class: !0 });
			var x = p(s);
			l = v(x, 'A', { class: !0, href: !0 });
			var A = p(l);
			(_ = C(A, 'Home')), A.forEach(f), ($ = H(x)), (c = v(x, 'A', { class: !0, href: !0 }));
			var D = p(c);
			(b = C(D, 'About me')),
				D.forEach(f),
				x.forEach(f),
				g.forEach(f),
				(y = H(r)),
				(d = v(r, 'DIV', { class: !0 }));
			var V = p(d);
			a && a.l(V), V.forEach(f), r.forEach(f), this.h();
		},
		h() {
			i(l, 'class', 'mx-4 font-light text-3xl transition hover:text-cyan-400'),
				i(l, 'href', S + '/'),
				i(c, 'class', 'mx-4 font-light text-3xl transition hover:text-cyan-400'),
				i(c, 'href', S + '/about'),
				i(s, 'class', 'flex justify-center'),
				i(o, 'class', 'text-slate-50 py-14'),
				i(d, 'class', 'text-slate-50 font-mono'),
				i(e, 'class', 'min-h-screen bg-purple-900');
		},
		m(t, r) {
			L(t, e, r),
				n(e, o),
				n(o, s),
				n(s, l),
				n(l, _),
				n(s, $),
				n(s, c),
				n(c, b),
				n(e, y),
				n(e, d),
				a && a.m(d, null),
				(h = !0);
		},
		p(t, [r]) {
			a && a.p && (!h || r & 1) && N(a, E, t, t[0], h ? z(E, t[0], r, null) : w(t[0]), null);
		},
		i(t) {
			h || (B(a, t), (h = !0));
		},
		o(t) {
			J(a, t), (h = !1);
		},
		d(t) {
			t && f(e), a && a.d(t);
		}
	};
}
function M(u, e, o) {
	let { $$slots: s = {}, $$scope: l } = e;
	return (
		(u.$$set = (_) => {
			'$$scope' in _ && o(0, (l = _.$$scope));
		}),
		[l, s]
	);
}
class Q extends j {
	constructor(e) {
		super(), k(this, e, M, K, F, {});
	}
}
export { Q as default };
