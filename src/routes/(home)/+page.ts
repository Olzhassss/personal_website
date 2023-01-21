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
				text: 'Blog entry',
				href: '/#blog'
			}
		]
	};
}) satisfies PageLoad;
