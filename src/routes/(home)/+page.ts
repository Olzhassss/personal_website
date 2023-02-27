import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	return {
		navigation: [
			{
				text: 'About me',
				href: '/about'
			},
			{
				text: 'Blog entry',
				href: '/#blog'
			},
			{
				text: 'Digital narrative',
				href: '/#digital_narrative'
			}
		]
	};
}) satisfies PageLoad;
