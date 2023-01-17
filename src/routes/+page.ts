import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    return {
        linkList: [
            {
                text: "Blog entry",
                href: "/#blog",
            },
            {
                text: "Blog entry",
                href: "/#blog",
            },
            {
                text: "Blog entry",
                href: "/#blog",
            },
        ]
    }
}) satisfies PageLoad;