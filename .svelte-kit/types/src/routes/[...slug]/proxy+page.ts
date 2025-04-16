// @ts-nocheck
import type { PageLoad } from './$types';
import { root } from "$content";
import { store } from '$store/breadcumb.svelte';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
    if (params.slug === '404') {
        return { webpage: null, error: 404 };
    }

    const breadcrumbs = root.find(params.slug);
    if (breadcrumbs.length === 0) {
        return { webpage: null, error: 404 };
    }

    return { webpage: breadcrumbs[breadcrumbs.length - 1], error: null };
}