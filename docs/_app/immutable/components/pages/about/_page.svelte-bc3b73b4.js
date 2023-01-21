import {
	S as wt,
	i as gt,
	s as $t,
	k as m,
	q as T,
	a as I,
	l as p,
	m as _,
	r as D,
	h as i,
	c as k,
	n as x,
	b as M,
	G as l,
	u as ct,
	B as _t,
	w as U,
	x as z,
	y as G,
	K as yt,
	f as J,
	t as K,
	z as R,
	J as bt
} from '../../../chunks/index-fbeea69b.js';
function Et(f) {
	let a, s, n, h, t, d, g, o;
	return {
		c() {
			(a = m('div')),
				(s = m('p')),
				(n = T(f[0])),
				(h = I()),
				(t = m('p')),
				(d = T('... or ')),
				(g = T(f[1])),
				(o = T('?')),
				this.h();
		},
		l(u) {
			a = p(u, 'DIV', { class: !0 });
			var w = _(a);
			s = p(w, 'P', {});
			var r = _(s);
			(n = D(r, f[0])), r.forEach(i), (h = k(w)), (t = p(w, 'P', { class: !0 }));
			var $ = _(t);
			(d = D($, '... or ')),
				(g = D($, f[1])),
				(o = D($, '?')),
				$.forEach(i),
				w.forEach(i),
				this.h();
		},
		h() {
			x(t, 'class', 'transition duration-700 font text-purple-900'),
				x(
					a,
					'class',
					'p-8 text-xl inline-block flex-auto border-collapse tracking-wide hover:bg-cyan-500 transition duration-700'
				);
		},
		m(u, w) {
			M(u, a, w), l(a, s), l(s, n), l(a, h), l(a, t), l(t, d), l(t, g), l(t, o);
		},
		p(u, [w]) {
			w & 1 && ct(n, u[0]), w & 2 && ct(g, u[1]);
		},
		i: _t,
		o: _t,
		d(u) {
			u && i(a);
		}
	};
}
function It(f, a, s) {
	let { text1: n, text2: h } = a;
	return (
		(f.$$set = (t) => {
			'text1' in t && s(0, (n = t.text1)), 'text2' in t && s(1, (h = t.text2));
		}),
		[n, h]
	);
}
class F extends wt {
	constructor(a) {
		super(), gt(this, a, It, Et, $t, { text1: 0, text2: 1 });
	}
}
function xt(f, a, s) {
	const n = f.slice();
	return (n[8] = a[s]), n;
}
function vt(f) {
	let a,
		s = f[8].text + '',
		n,
		h;
	return {
		c() {
			(a = m('pre')), (n = T(s)), this.h();
		},
		l(t) {
			a = p(t, 'PRE', { class: !0 });
			var d = _(a);
			(n = D(d, s)), d.forEach(i), this.h();
		},
		h() {
			x(
				a,
				'class',
				(h =
					'text-3xl ml-12 transition-opacity whitespace-pre-wrap ' +
					(f[8].show ? 'opacity-100' : 'opacity-0'))
			);
		},
		m(t, d) {
			M(t, a, d), l(a, n);
		},
		p(t, d) {
			d & 2 && s !== (s = t[8].text + '') && ct(n, s),
				d & 2 &&
					h !==
						(h =
							'text-3xl ml-12 transition-opacity whitespace-pre-wrap ' +
							(t[8].show ? 'opacity-100' : 'opacity-0')) &&
					x(a, 'class', h);
		},
		d(t) {
			t && i(a);
		}
	};
}
function kt(f) {
	let a,
		s,
		n,
		h,
		t,
		d,
		g,
		o,
		u,
		w,
		r,
		$,
		O,
		tt,
		P,
		et,
		N,
		Q,
		j,
		V,
		S,
		at,
		C,
		st,
		rt,
		E,
		L,
		W,
		q,
		X,
		nt,
		B,
		lt,
		ft;
	(u = new F({ props: { text1: 'Human', text2: 'animal' } })),
		(r = new F({ props: { text1: 'Is', text2: 'forever' } })),
		(O = new F({ props: { text1: 'A part', text2: 'the whole' } })),
		(P = new F({ props: { text1: 'Of', text2: 'for' } })),
		(N = new F({ props: { text1: 'Nature', text2: 'the Universe' } }));
	let A = f[1],
		v = [];
	for (let e = 0; e < A.length; e += 1) v[e] = vt(xt(f, A, e));
	return {
		c() {
			(a = m('section')),
				(s = m('div')),
				(n = m('h2')),
				(h = T('Who am I? ')),
				(t = m('span')),
				(d = T('I mean...')),
				(g = I()),
				(o = m('div')),
				U(u.$$.fragment),
				(w = I()),
				U(r.$$.fragment),
				($ = I()),
				U(O.$$.fragment),
				(tt = I()),
				U(P.$$.fragment),
				(et = I()),
				U(N.$$.fragment),
				(Q = I()),
				(j = m('section')),
				(V = m('div')),
				(S = m('h2')),
				(at = T('What do I like? ')),
				(C = m('a')),
				(st = T('Original source ←')),
				(rt = I()),
				(E = m('div')),
				(L = m('div')),
				(W = m('button')),
				(q = m('div')),
				(nt = I());
			for (let e = 0; e < v.length; e += 1) v[e].c();
			this.h();
		},
		l(e) {
			a = p(e, 'SECTION', {});
			var y = _(a);
			s = p(y, 'DIV', { class: !0 });
			var c = _(s);
			n = p(c, 'H2', { class: !0 });
			var H = _(n);
			(h = D(H, 'Who am I? ')), (t = p(H, 'SPAN', { class: !0 }));
			var ut = _(t);
			(d = D(ut, 'I mean...')),
				ut.forEach(i),
				H.forEach(i),
				(g = k(c)),
				(o = p(c, 'DIV', { class: !0 }));
			var b = _(o);
			z(u.$$.fragment, b),
				(w = k(b)),
				z(r.$$.fragment, b),
				($ = k(b)),
				z(O.$$.fragment, b),
				(tt = k(b)),
				z(P.$$.fragment, b),
				(et = k(b)),
				z(N.$$.fragment, b),
				b.forEach(i),
				c.forEach(i),
				y.forEach(i),
				(Q = k(e)),
				(j = p(e, 'SECTION', {}));
			var ht = _(j);
			V = p(ht, 'DIV', { class: !0 });
			var Y = _(V);
			S = p(Y, 'H2', { class: !0 });
			var ot = _(S);
			(at = D(ot, 'What do I like? ')), (C = p(ot, 'A', { href: !0, class: !0 }));
			var dt = _(C);
			(st = D(dt, 'Original source ←')),
				dt.forEach(i),
				ot.forEach(i),
				(rt = k(Y)),
				(E = p(Y, 'DIV', { class: !0 }));
			var Z = _(E);
			L = p(Z, 'DIV', { class: !0 });
			var mt = _(L);
			W = p(mt, 'BUTTON', { class: !0 });
			var pt = _(W);
			(q = p(pt, 'DIV', { class: !0 })), _(q).forEach(i), pt.forEach(i), mt.forEach(i), (nt = k(Z));
			for (let it = 0; it < v.length; it += 1) v[it].l(Z);
			Z.forEach(i), Y.forEach(i), ht.forEach(i), this.h();
		},
		h() {
			x(t, 'class', 'text-slate-300 text-sm'),
				x(n, 'class', 'mb-4 font-semibold'),
				x(o, 'class', 'flex border rounded flex-wrap border-collapse'),
				x(s, 'class', 'mx-auto container cursor-default'),
				x(C, 'href', 'https://reflectionsfromaredhead.com/things-i-love/'),
				x(C, 'class', 'text-slate-300 text-sm hover:text-cyan-400 transition'),
				x(S, 'class', 'mb-4 font-semibold'),
				x(
					q,
					'class',
					'w-6 h-6 border border-white group-hover:border-cyan-400 transition-colors animate-ping rotate-90'
				),
				x(
					W,
					'class',
					'w-24 h-24 rounded-full border border-white hover:border-cyan-400 transition-colors flex items-center justify-center group duration-500'
				),
				x(
					L,
					'class',
					(X =
						'absolute w-full h-full flex items-center justify-center transition-opacity ' +
						(f[0] ? 'opacity-0' : 'opacity-100'))
				),
				x(E, 'class', 'h-48 w-full relative'),
				x(V, 'class', 'mx-auto container cursor-default');
		},
		m(e, y) {
			M(e, a, y),
				l(a, s),
				l(s, n),
				l(n, h),
				l(n, t),
				l(t, d),
				l(s, g),
				l(s, o),
				G(u, o, null),
				l(o, w),
				G(r, o, null),
				l(o, $),
				G(O, o, null),
				l(o, tt),
				G(P, o, null),
				l(o, et),
				G(N, o, null),
				M(e, Q, y),
				M(e, j, y),
				l(j, V),
				l(V, S),
				l(S, at),
				l(S, C),
				l(C, st),
				l(V, rt),
				l(V, E),
				l(E, L),
				l(L, W),
				l(W, q),
				l(E, nt);
			for (let c = 0; c < v.length; c += 1) v[c].m(E, null);
			(B = !0), lt || ((ft = yt(W, 'click', f[4])), (lt = !0));
		},
		p(e, [y]) {
			if (
				((!B ||
					(y & 1 &&
						X !==
							(X =
								'absolute w-full h-full flex items-center justify-center transition-opacity ' +
								(e[0] ? 'opacity-0' : 'opacity-100')))) &&
					x(L, 'class', X),
				y & 2)
			) {
				A = e[1];
				let c;
				for (c = 0; c < A.length; c += 1) {
					const H = xt(e, A, c);
					v[c] ? v[c].p(H, y) : ((v[c] = vt(H)), v[c].c(), v[c].m(E, null));
				}
				for (; c < v.length; c += 1) v[c].d(1);
				v.length = A.length;
			}
		},
		i(e) {
			B ||
				(J(u.$$.fragment, e),
				J(r.$$.fragment, e),
				J(O.$$.fragment, e),
				J(P.$$.fragment, e),
				J(N.$$.fragment, e),
				(B = !0));
		},
		o(e) {
			K(u.$$.fragment, e),
				K(r.$$.fragment, e),
				K(O.$$.fragment, e),
				K(P.$$.fragment, e),
				K(N.$$.fragment, e),
				(B = !1);
		},
		d(e) {
			e && i(a), R(u), R(r), R(O), R(P), R(N), e && i(Q), e && i(j), bt(v, e), (lt = !1), ft();
		}
	};
}
function Tt(f, a, s) {
	let { data: n } = a,
		h = !1,
		t = [
			{ text: '', show: !1 },
			{ text: '', show: !1 },
			{ text: '', show: !1 }
		];
	async function d() {
		s(0, (h = !0));
		for (let r = 0; r < n.iLikeTexts.length; r += 3)
			await g(r), await g(r + 1), await g(r + 2), await o(r), await o(r + 1), await o(r + 2);
		s(0, (h = !1));
	}
	async function g(r) {
		console.log(n.iLikeTexts[r]),
			s(1, (t[r % 3].text = n.iLikeTexts[r]), t),
			await u(300),
			s(1, (t[r % 3].show = !0), t),
			await u(n.iLikeTexts[r].length * 50 + 300);
	}
	async function o(r) {
		await u(100), s(1, (t[r % 3].show = !1), t);
	}
	const u = (r) => new Promise(($) => setTimeout($, r)),
		w = async () => {
			await d();
		};
	return (
		(f.$$set = (r) => {
			'data' in r && s(3, (n = r.data));
		}),
		[h, t, d, n, w]
	);
}
class Vt extends wt {
	constructor(a) {
		super(), gt(this, a, Tt, kt, $t, { data: 3 });
	}
}
export { Vt as default };