import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		iLikeTexts: poem
	};
}) satisfies PageLoad;

const poem = [
	'Here is a list,',
	'And not a short one',
	'...........',
	'I like, I love, who cares..?',
	'Well, if you care, then listen:',
	'I like ...',
	'Nature',
	'Ants - they remind me of how small we are',
	'Trees - those are symbol of eternal life',
	'Natural disasters... because it\'s chaos, it teaches humanity a lesson',
	'Philosophy, sociology, antropology',
	'Physics, chemistry, biology',
	'Astronomy and quantum physics',
	'Neurobiology, anatomy, physiology',
	'Psychology, psychotherapy, medicine in general',
	'History of societies, arts and cultures',
	'The art of music, visual art in all forms',
	'Design and style',
	'Human cognition, dreams, illusions, fears and hopes',
	'Piano and forte',
	'Basketball',
	'Creative tasks',
	'Availability of time to complete all assignments for WCS 240 and other classes without stress',
	'You.'
];
