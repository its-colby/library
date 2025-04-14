import { Webpage } from "./webpage";
import { url_from } from "./url-from-title";
import { Category } from "./category";

export class Folder {
    public title: string;
    public readonly url: string;
    public pages: Webpage[];
    public categories: Category[];
    public readonly published: boolean;

    constructor({
        title,
        url,
        pages,
        categories,
        published = true
    }: {
        title: string;
        url?: string;
        pages?: Webpage[];
        categories?: Category[];
        published?: boolean;
    }) {
        this.title = title;
        this.url = url ?? url_from(title);
        if (categories) {
            this.pages = categories.flatMap((category) => category.pages);
        } else {
            this.pages = pages ?? [];
        }
        this.categories = categories ?? [];
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
