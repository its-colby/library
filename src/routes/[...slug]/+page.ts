import type { PageLoad } from './$types';
import { root } from "$content";

export const load: PageLoad = async ({ params }) => {
    if (params.slug === '404') {
        return { webpage: null, error: 404 };
    }

    const result = root.find(params.slug);
    if (result.is_none()) {
        return { webpage: null, error: 404 };
    }

    return { webpage: result.value, error: null };
}