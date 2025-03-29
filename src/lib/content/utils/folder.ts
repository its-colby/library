import type { Webpage } from "./webpage";

export class Folder {
    public title: string;
    public pages: Webpage[];

    constructor({
        title,
        pages
    }: {
        title: string;
        pages: Webpage[];
    }) {
        this.title = title;
        this.pages = pages;
    }

    public get has_published_pages(): boolean {
        return this.pages.some((page) => page.published);
    }

    public get published_pages(): Webpage[] {
        return this.pages.filter((page) => page.published);
    }
}
