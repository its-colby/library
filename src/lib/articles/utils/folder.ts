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
}
