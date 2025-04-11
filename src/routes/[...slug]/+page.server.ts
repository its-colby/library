import { folders } from "$lib/content";

export function entries() {
    const routes = [];
    
    for (const folder of folders) {
        for (const page of folder.published_pages) {
            const path = page.url.slice(1).split('/');
            routes.push({ slug: path.join('/') });
        }
    }
    
    // Always include at least one route to prevent prerender errors
    if (routes.length === 0) {
        routes.push({ slug: '404' }); // This will match /404 and show your 404 page
    }
    
    return routes;
} 