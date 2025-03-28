import type { Page } from "./page";

export class Folder {
    public title: string;
    public pages: Page[];

    constructor({
        title,
        pages
    }: {
        title: string;
        pages: Page[];
    }) {
        this.title = title;
        this.pages = pages;
    }

    public get has_published_pages(): boolean {
        return this.pages.some((page) => page.published);
    }

    public get published_pages(): Page[] {
        return this.pages.filter((page) => page.published);
    }
}
