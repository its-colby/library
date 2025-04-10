import type { Webpage } from "./webpage";
import { url_from } from "./url-from-title";

export class Folder {
    public title: string;
    public readonly url: string;
    public pages: Webpage[];
    public readonly published: boolean;

    constructor({
        title,
        url,
        pages,
        published = true
    }: {
        title: string;
        url?: string;
        pages: Webpage[];
        published?: boolean;
    }) {
        this.title = title;
        this.url = url ?? url_from(title);
        this.pages = pages;
        this.pages.forEach((page) => page.prepend_to_url(this.url));
        this.published = published;
    }

    public get has_published_pages(): boolean {
        return this.published && this.pages.some((page) => page.published);
    }

    public get published_pages(): Webpage[] {
        if (!this.published) {
            return [];
        }
        return this.pages.filter((page) => page.published);
    }
}
