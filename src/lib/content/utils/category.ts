import { Webpage } from "./webpage";

export class Category {

    public readonly title: string;
    public readonly pages: Webpage[];

    constructor(title: string, pages: Webpage[]) {
        this.title = title;
        this.pages = pages;
    }

    public get published_pages(): Webpage[] {
        return this.pages.filter((page) => page.published);
    }
}