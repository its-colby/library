import type { PageLoad } from './$types';
import { error } from "@sveltejs/kit";
import { folders, retrieve_chapter } from "$lib/content";

export const load: PageLoad = async ({ params }) => {
    // Special case for the 404 route we added for prerendering
    if (params.slug === '404') {
        throw error(404, 'Page not found');
    }

    const slug_array = params.slug ? params.slug.split('/') : [];
    const target_path = "/" + slug_array.join("/");

    const result = retrieve_chapter(folders, target_path);
    if (result.is_none()) {
        throw error(404, `Content not found for slug: ${target_path}`);
    }

    return { chapter: result.value };
}