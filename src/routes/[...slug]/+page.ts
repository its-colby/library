import type { PageLoad } from './$types';
import { error } from "@sveltejs/kit";
import { folders, retrieve_chapter } from "$lib/content";

// Only prerender this dynamic route if we have published pages
export const prerender = folders.some(folder => folder.has_published_pages);

export const load: PageLoad = async ({ params }) => {
    const slug_array = params.slug ? params.slug.split('/') : [];
    const target_path = "/" + slug_array.join("/");

    const result = retrieve_chapter(folders, target_path);
    if (result.is_none()) {
        throw error(404, `Content not found for slug: ${target_path}`);
    }

    return { chapter: result.value };
}