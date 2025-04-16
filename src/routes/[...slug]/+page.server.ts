import { root } from "$content";

export function entries() {
    const routes = root.published_urls()
        .map(url => ({ slug: url.replace(/^\//, '') }));
    routes.push({ slug: '404' });
    return routes;
} 