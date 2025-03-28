export class Page {

    public readonly title: string;
    public readonly url: string;
    public readonly published: boolean;

    constructor({
        title,
        url,
        published = false
    }: {
        title: string,
        url: string,
        published: boolean
    }) {
        this.title = title;
        this.url = url;
        this.published = published;
    }
}