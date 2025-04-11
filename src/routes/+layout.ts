import { folders } from "$lib/content";

// Only prerender if we have any published pages
export const prerender = folders.some(folder => folder.has_published_pages);