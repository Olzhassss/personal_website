import {
	S as B,
	i as F,
	s as J,
	k as h,
	q as O,
	a as k,
	l as d,
	m as _,
	r as T,
	h as o,
	c as y,
	n as u,
	I as R,
	b as U,
	G as c,
	B as M,
	J as z,
	u as H
} from '../../../chunks/index-fbeea69b.js';
import { c as P } from '../../../chunks/shared-23917130.js';
const K = '' + new URL('../../../assets/1-567c33a4.jpg', import.meta.url).href;
function V(p, a, t) {
	const l = p.slice();
	return (l[1] = a[t]), l;
}
function G(p) {
	let a,
		t,
		l = p[1].text + '',
		f,
		v,
		m,
		x,
		E;
	return {
		c() {
			(a = h('li')), (t = h('a')), (f = O(l)), (v = k()), (m = h('span')), (E = k()), this.h();
		},
		l(i) {
			a = d(i, 'LI', { class: !0 });
			var r = _(a);
			t = d(r, 'A', { class: !0, href: !0 });
			var b = _(t);
			(f = T(b, l)),
				(v = y(b)),
				(m = d(b, 'SPAN', { class: !0 })),
				_(m).forEach(o),
				b.forEach(o),
				(E = y(r)),
				r.forEach(o),
				this.h();
		},
		h() {
			u(
				m,
				'class',
				'absolute bottom-0 left-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-700'
			),
				u(t, 'class', 'block relative'),
				u(t, 'href', (x = P + p[1].href)),
				u(a, 'class', 'hover:text-purple-500 text-purple-900 transition group font-light');
		},
		m(i, r) {
			U(i, a, r), c(a, t), c(t, f), c(t, v), c(t, m), c(a, E);
		},
		p(i, r) {
			r & 1 && l !== (l = i[1].text + '') && H(f, l),
				r & 1 && x !== (x = P + i[1].href) && u(t, 'href', x);
		},
		d(i) {
			i && o(a);
		}
	};
}
function Q(p) {
	let a,
		t,
		l,
		f,
		v,
		m,
		x,
		E,
		i,
		r,
		b,
		L,
		w,
		N,
		S = p[0].navigation,
		n = [];
	for (let e = 0; e < S.length; e += 1) n[e] = G(V(p, S, e));
	return {
		c() {
			(a = h('section')),
				(t = h('div')),
				(l = h('ul')),
				(f = h('li')),
				(v = h('span')),
				(m = O('MENU')),
				(x = k());
			for (let e = 0; e < n.length; e += 1) n[e].c();
			(E = k()),
				(i = h('div')),
				(r = h('img')),
				(L = k()),
				(w = h('section')),
				(N = h('div')),
				this.h();
		},
		l(e) {
			a = d(e, 'SECTION', {});
			var g = _(a);
			t = d(g, 'DIV', { class: !0 });
			var s = _(t);
			l = d(s, 'UL', { class: !0 });
			var I = _(l);
			f = d(I, 'LI', {});
			var q = _(f);
			v = d(q, 'SPAN', { class: !0 });
			var A = _(v);
			(m = T(A, 'MENU')), A.forEach(o), q.forEach(o), (x = y(I));
			for (let j = 0; j < n.length; j += 1) n[j].l(I);
			I.forEach(o), (E = y(s)), (i = d(s, 'DIV', { class: !0 }));
			var C = _(i);
			(r = d(C, 'IMG', { src: !0, alt: !0, class: !0 })),
				C.forEach(o),
				s.forEach(o),
				g.forEach(o),
				(L = y(e)),
				(w = d(e, 'SECTION', {}));
			var D = _(w);
			(N = d(D, 'DIV', { class: !0, id: !0 })), _(N).forEach(o), D.forEach(o), this.h();
		},
		h() {
			u(v, 'class', 'text-4xl font-semibold text-purple-800'),
				u(l, 'class', 'text-3xl leading-loose w-[35%] flex flex-col justify-center'),
				R(r.src, (b = K)) || u(r, 'src', b),
				u(r, 'alt', 'Fantasy art'),
				u(r, 'class', 'max-w-full rounded pointer-events-none'),
				u(
					i,
					'class',
					'w-[60%] ml-8 p-0.5 rounded bg-purple-700 transition duration-1000 hover:-rotate-2'
				),
				u(t, 'class', 'mx-auto container flex justify-between'),
				u(N, 'class', ''),
				u(N, 'id', 'blog');
		},
		m(e, g) {
			U(e, a, g), c(a, t), c(t, l), c(l, f), c(f, v), c(v, m), c(l, x);
			for (let s = 0; s < n.length; s += 1) n[s].m(l, null);
			c(t, E), c(t, i), c(i, r), U(e, L, g), U(e, w, g), c(w, N);
		},
		p(e, [g]) {
			if (g & 1) {
				S = e[0].navigation;
				let s;
				for (s = 0; s < S.length; s += 1) {
					const I = V(e, S, s);
					n[s] ? n[s].p(I, g) : ((n[s] = G(I)), n[s].c(), n[s].m(l, null));
				}
				for (; s < n.length; s += 1) n[s].d(1);
				n.length = S.length;
			}
		},
		i: M,
		o: M,
		d(e) {
			e && o(a), z(n, e), e && o(L), e && o(w);
		}
	};
}
function W(p, a, t) {
	let { data: l } = a;
	return (
		(p.$$set = (f) => {
			'data' in f && t(0, (l = f.data));
		}),
		[l]
	);
}
class Z extends B {
	constructor(a) {
		super(), F(this, a, W, Q, J, { data: 0 });
	}
}
export { Z as default };
