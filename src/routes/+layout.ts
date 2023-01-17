import type { LayoutLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
    return {}
}) satisfies LayoutLoad;