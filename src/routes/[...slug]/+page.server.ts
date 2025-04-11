import { folders } from "$lib/content";

export function entries() {
    const routes = [];
    
    for (const folder of folders) {
        for (const page of folder.published_pages) {
            const path = page.url.slice(1).split('/');
            routes.push({ slug: path.join('/') });
        }
    }
    
    return routes;
} 