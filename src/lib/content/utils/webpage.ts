import { url_from } from "./url-from-title";
import { BookChapter } from "$lib/book";

export class Webpage {

    public readonly title: string;
    public readonly published: boolean;
    private _url: string;
    public readonly chapter?: BookChapter;

    constructor({
        title,
        url,
        published = true,
        chapter
    }: {
        title: string,
        url?: string,
        published?: boolean,
        chapter?: BookChapter
    }) {
        this.title = title;
        this._url = url ?? url_from(title);
        this.published = published;
        this.chapter = chapter;
    }

    public prepend_to_url(url: string): void {
        this._url = url + this._url;
    }

    public get url(): string {
        return this._url;
    }

    public static from_chapter(
        chapter: BookChapter,
        published: boolean = true
    ): Webpage {
        return new Webpage({
            title: chapter.title.prose.to_string(),
            chapter: chapter,
            published: published
        });
    }
}