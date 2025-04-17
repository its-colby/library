import type { PageLoad } from './$types';
import { root } from "$content";

export const load: PageLoad = async ({ params }) => {
    if (params.slug === '404') {
        return { webpage: null, error: 404 };
    }

    const breadcrumbs = root.find(params.slug);
    if (breadcrumbs.length === 0) {
        return { webpage: null, error: 404 };
    }

    return { webpage: breadcrumbs[breadcrumbs.length - 1], error: null };
}