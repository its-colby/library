import type { PageLoad } from './$types';
import { error } from "@sveltejs/kit";
import { folders, retrieve_chapter } from "$lib/content";

export const load: PageLoad = async ({ params }) => {
    if (params.slug === '404') {
        return { chapter: null, error: 404 };
    }

    const target_path = "/" + params.slug;

    // console.log(target_path);
    // console.log('Published Pages:', folders.map(folder => ({
    //     folder: folder.title,
    //     pages: folder.published_pages.map(page => page.url)
    // })));

    const result = retrieve_chapter(folders, target_path);
    if (result.is_none()) {
        throw error(404, `Content not found for slug: ${target_path}`);
    }

    return { chapter: result.value, error: null };
}