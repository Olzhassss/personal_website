import {
	S,
	i as k,
	s as C,
	k as p,
	q as E,
	a as D,
	l as v,
	m as _,
	r as z,
	h as u,
	c as H,
	n as f,
	b as G,
	G as o,
	B as $,
	C as N,
	w as q,
	x as F,
	y as J,
	D as W,
	E as A,
	F as B,
	f as V,
	t as w,
	z as K
} from '../../../chunks/index-fbeea69b.js';
function L(g) {
	let e, s, t, r, m, l, d, c, h, n, a, i;
	return {
		c() {
			(e = p('div')),
				(s = p('div')),
				(t = p('div')),
				(r = p('h1')),
				(m = E(`Olzhas Toleutay\r
                `)),
				(l = p('a')),
				(d = E('olzhas.toleutay@nu.edu.kz')),
				(c = D()),
				(h = p('h1')),
				(n = E('[ WCS 240: professor James Nielsen ]')),
				(a = D()),
				(i = p('hr')),
				this.h();
		},
		l(b) {
			e = v(b, 'DIV', { class: !0 });
			var y = _(e);
			s = v(y, 'DIV', { class: !0 });
			var O = _(s);
			t = v(O, 'DIV', { class: !0 });
			var x = _(t);
			r = v(x, 'H1', { class: !0 });
			var I = _(r);
			(m = z(
				I,
				`Olzhas Toleutay\r
                `
			)),
				(l = v(I, 'A', { class: !0, href: !0 }));
			var P = _(l);
			(d = z(P, 'olzhas.toleutay@nu.edu.kz')),
				P.forEach(u),
				I.forEach(u),
				(c = H(x)),
				(h = v(x, 'H1', { class: !0 }));
			var T = _(h);
			(n = z(T, '[ WCS 240: professor James Nielsen ]')),
				T.forEach(u),
				(a = H(x)),
				(i = v(x, 'HR', { class: !0 })),
				x.forEach(u),
				O.forEach(u),
				y.forEach(u),
				this.h();
		},
		h() {
			f(l, 'class', 'text-base hover:text-myGreen transition'),
				f(l, 'href', 'mailto:olzhas.toleutay@nu.edu.kz'),
				f(r, 'class', 'text-left ml-[20%] mb-4 text-purple-800'),
				f(h, 'class', 'text-left ml-[20%] mb-5 text-purple-800 text-2xl'),
				f(i, 'class', 'w-1/2 ml-[18%] border-purple-800'),
				f(t, 'class', 'pt-8 mb-8 container mx-auto rounded '),
				f(s, 'class', 'rounded-t w-full bg-purple-50'),
				f(e, 'class', 'bg-purple-900 pt-12');
		},
		m(b, y) {
			G(b, e, y),
				o(e, s),
				o(s, t),
				o(t, r),
				o(r, m),
				o(r, l),
				o(l, d),
				o(t, c),
				o(t, h),
				o(h, n),
				o(t, a),
				o(t, i);
		},
		p: $,
		i: $,
		o: $,
		d(b) {
			b && u(e);
		}
	};
}
class R extends S {
	constructor(e) {
		super(), k(this, e, null, L, C, {});
	}
}
function j(g) {
	let e, s, t, r, m, l, d;
	return {
		c() {
			(e = p('div')),
				(s = p('div')),
				(t = p('p')),
				(r = E('Developed by Olzhas Toleutay on SvelteKit. Hosted by Github Pages.')),
				(m = D()),
				(l = p('p')),
				(d = E('Have a nice day, human.')),
				this.h();
		},
		l(c) {
			e = v(c, 'DIV', { class: !0 });
			var h = _(e);
			s = v(h, 'DIV', { class: !0 });
			var n = _(s);
			t = v(n, 'P', { class: !0 });
			var a = _(t);
			(r = z(a, 'Developed by Olzhas Toleutay on SvelteKit. Hosted by Github Pages.')),
				a.forEach(u),
				(m = H(n)),
				(l = v(n, 'P', { class: !0 }));
			var i = _(l);
			(d = z(i, 'Have a nice day, human.')), i.forEach(u), n.forEach(u), h.forEach(u), this.h();
		},
		h() {
			f(t, 'class', 'text-gray-400 text-right'),
				f(l, 'class', 'text-gray-400 text-right'),
				f(s, 'class', 'container mx-auto'),
				f(e, 'class', 'pt-12 pb-12 bg-purple-900');
		},
		m(c, h) {
			G(c, e, h), o(e, s), o(s, t), o(t, r), o(s, m), o(s, l), o(l, d);
		},
		p: $,
		i: $,
		o: $,
		d(c) {
			c && u(e);
		}
	};
}
class M extends S {
	constructor(e) {
		super(), k(this, e, null, j, C, {});
	}
}
function Q(g) {
	let e, s, t, r, m, l, d, c;
	r = new R({});
	const h = g[2].default,
		n = N(h, g, g[1], null);
	return (
		(d = new M({})),
		{
			c() {
				(e = p('div')),
					(s = p('div')),
					(t = p('div')),
					q(r.$$.fragment),
					(m = D()),
					n && n.c(),
					(l = D()),
					q(d.$$.fragment),
					this.h();
			},
			l(a) {
				e = v(a, 'DIV', { class: !0 });
				var i = _(e);
				s = v(i, 'DIV', { class: !0 });
				var b = _(s);
				t = v(b, 'DIV', { class: !0 });
				var y = _(t);
				F(r.$$.fragment, y),
					(m = H(y)),
					n && n.l(y),
					y.forEach(u),
					b.forEach(u),
					(l = H(i)),
					F(d.$$.fragment, i),
					i.forEach(u),
					this.h();
			},
			h() {
				f(t, 'class', 'mx-3 rounded bg-purple-50'),
					f(s, 'class', 'w-full'),
					f(e, 'class', 'min-h-screen bg-purple-900');
			},
			m(a, i) {
				G(a, e, i),
					o(e, s),
					o(s, t),
					J(r, t, null),
					o(t, m),
					n && n.m(t, null),
					o(e, l),
					J(d, e, null),
					(c = !0);
			},
			p(a, [i]) {
				n && n.p && (!c || i & 2) && W(n, h, a, a[1], c ? B(h, a[1], i, null) : A(a[1]), null);
			},
			i(a) {
				c || (V(r.$$.fragment, a), V(n, a), V(d.$$.fragment, a), (c = !0));
			},
			o(a) {
				w(r.$$.fragment, a), w(n, a), w(d.$$.fragment, a), (c = !1);
			},
			d(a) {
				a && u(e), K(r), n && n.d(a), K(d);
			}
		}
	);
}
function U(g, e, s) {
	let { $$slots: t = {}, $$scope: r } = e,
		{ data: m } = e;
	return (
		(g.$$set = (l) => {
			'data' in l && s(0, (m = l.data)), '$$scope' in l && s(1, (r = l.$$scope));
		}),
		[m, r, t]
	);
}
class Y extends S {
	constructor(e) {
		super(), k(this, e, U, Q, C, { data: 0 });
	}
}
export { Y as default };
